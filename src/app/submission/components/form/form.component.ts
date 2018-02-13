import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Validators, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';

import { Stack, IStack } from '../../models';

const EMPTY_MESSAGE =
  'You are adding a stack without ignoring files and directories. This is not recommended! Do you wish to proceed?';

@Component({
  selector: 'app-stack-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class StackFormComponent implements OnInit, OnChanges {
  @Input() passedStack: Stack;

  stack: Stack = new Stack();

  @Output() create = new EventEmitter<IStack>();
  @Output() update = new EventEmitter<Stack>();

  form: FormGroup;

  exists = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.stack.name, [Validators.required, Validators.minLength(2)]],
      ignore_directories: this.fb.array(
        this.initIgnore(this.stack.ignore_directories)
      ),
      ignore_files: this.fb.array(this.initIgnore(this.stack.ignore_files)),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.passedStack) {
      this.exists = true;
      this.stack = this.passedStack;
    }
  }

  private addField(field: string): void {
    const control = this.retrieveField(field);
    control.push(this.initField());
  }

  private removeField(index: number, field: string): void {
    const control = this.retrieveField(field);
    control.removeAt(index);
  }

  private retrieveField(field: string): FormArray {
    return <FormArray>this.form.controls[field];
  }

  private initIgnore(ignore?: string[]): FormGroup[] {
    if (Array.isArray(ignore) && ignore.length) {
      return ignore.map(field => this.initField(field));
    }

    return [this.initField()];
  }

  private initField(value: string = ''): FormGroup {
    return this.fb.group({
      field: [value, Validators.required],
    });
  }

  createStack(form: NgForm): void {
    if (form.valid) {
      const stack: IStack = this.stackFromForm(form);

      if (this.emptyIgnores(stack)) {
        if (!confirm(EMPTY_MESSAGE)) {
          return;
        }
      }

      this.create.emit(stack);
    }
  }

  updateStack(form: NgForm): void {
    if (form.valid) {
      const stack: Stack = this.stackFromForm(form) as Stack;

      this.update.emit(stack);
    }
  }

  private emptyIgnores(stack: IStack): boolean {
    return (
      this.isEmpty(stack.ignore_directories) || this.isEmpty(stack.ignore_files)
    );
  }

  private isEmpty<T>(array: T[]): boolean {
    return array.length === 0;
  }

  private stackFromForm(form: NgForm): IStack {
    return {
      name: form.value.name as string,
      ignore_directories: form.value.ignore_directories.map(
        input => input.field as string
      ),
      ignore_files: form.value.ignore_files.map(input => input.field as string),
    };
  }
}
