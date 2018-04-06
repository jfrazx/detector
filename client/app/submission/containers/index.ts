import { BeltListComponent } from './belt-list/belt-list.component';
import { StackListComponent } from './stack-list/stack-list.component';
import { StackItemComponent } from './stack-item/stack-item.component';
import { ExamItemComponent } from './exam-item/exam-item.component';
import { ExamListComponent } from './exam-list/exam-list.component';

export const containers: any[] = [
  StackListComponent,
  StackItemComponent,
  BeltListComponent,
  ExamItemComponent,
  ExamListComponent,
];

export * from './belt-list/belt-list.component';
export * from './exam-item/exam-item.component';
export * from './exam-list/exam-list.component';
export * from './stack-list/stack-list.component';
export * from './stack-item/stack-item.component';
