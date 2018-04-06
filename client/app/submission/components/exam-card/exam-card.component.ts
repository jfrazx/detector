import { Component, Input } from '@angular/core';

import { Exam } from '../../models';

@Component({
  selector: 'app-exam-card',
  templateUrl: './exam-card.component.html',
  styleUrls: ['./exam-card.component.scss'],
})
export class ExamCardComponent {
  @Input() exam: Exam;
}
