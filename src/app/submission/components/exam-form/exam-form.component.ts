import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  NgForm,
} from '@angular/forms';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { Exam, Stack } from '../../models';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.scss'],
})
export class ExamFormComponent implements OnChanges {
  @Input() stacks: Stack[] = [];
  @Input() exam: Exam;

  @Output() create: EventEmitter<Exam> = new EventEmitter<Exam>();

  @Output() update: EventEmitter<Exam> = new EventEmitter<Exam>();

  @Output() back: EventEmitter<void> = new EventEmitter<void>();

  exists = false;

  form = this.fb.group({
    active: [true, Validators.required],
    name: ['', Validators.required],
    option: ['', Validators.required],
    stack: new FormControl(this.stacks, [Validators.required]),
    wireframe: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.exam) {
      this.exists = true;
      this.form.patchValue(this.exam);
    }
  }

  getControl(control: string) {
    return this.form.get(control) as FormControl;
  }

  controlInvalid(name: string) {
    const control = this.getControl(name);
    return control.hasError('required') && control.touched;
  }

  get optionControlInvalid() {
    return this.controlInvalid('option');
  }

  get wireframeControlInvalid() {
    return this.controlInvalid('wireframe');
  }

  get nameControlInvalid() {
    return this.controlInvalid('name');
  }

  createExam(form: NgForm) {
    const { value, valid } = form;

    if (valid) {
      this.create.emit(value);
    }
  }

  updateExam(form: NgForm) {
    const { valid, value, touched } = form;

    if (valid && touched) {
      this.update.emit(value);
    }
  }

  goBack() {
    this.back.emit();
  }
}
