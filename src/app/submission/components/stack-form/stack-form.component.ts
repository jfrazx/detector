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
  templateUrl: './stack-form.component.html',
  styleUrls: ['stack-form.component.scss'],
})
export class StackFormComponent implements OnChanges {
  @Input() stack: Stack;

  @Output() create = new EventEmitter<IStack>();
  @Output() update = new EventEmitter<Stack>();

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    ignore_directories: this.fb.array(this.initIgnore([])),
    ignore_files: this.fb.array(this.initIgnore([])),
  });

  exists = false;

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.stack) {
      this.exists = true;
      this.form.patchValue(this.stack);
      this.updateArrayFields();
    }
  }

  private updateArrayFields(): void {
    ['ignore_directories', 'ignore_files'].forEach(field => {
      this.resetField(field);

      const content = this.stack[field] as string[];

      content.forEach(value => this.addField(field, value));
    });
  }

  private addField(field: string, value = ''): void {
    const control = this.retrieveField(field);
    control.push(this.initField(value));
  }

  private resetField(field: string): void {
    const control = this.retrieveField(field);

    for (let index = control.length; index >= 0; index--) {
      control.removeAt(index);
    }
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
    const { value, valid } = form;

    if (valid) {
      const stack: IStack = this.stackFromForm(value);

      if (this.emptyIgnores(stack)) {
        if (!confirm(EMPTY_MESSAGE)) {
          return;
        }
      }

      this.create.emit(stack);
    }
  }

  updateStack(form: NgForm): void {
    const { valid, value } = form;

    if (form.valid) {
      const stack: Stack = this.stackFromForm(value) as Stack;

      this.update.emit({ ...this.stack, ...stack });
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

  private stackFromForm(value: any): IStack {
    return {
      name: value.name as string,
      ignore_directories: value.ignore_directories.map(
        input => input.field as string
      ),
      ignore_files: value.ignore_files.map(input => input.field as string),
    };
  }
}
