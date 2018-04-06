import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { StackResolve } from './resolvers';

import * as fromComponents from './components';
import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'stacks',
  },
  {
    path: 'stacks',
    children: [
      {
        path: '',
        component: fromContainers.StackListComponent,
      },
      {
        path: 'new',
        component: fromContainers.StackItemComponent,
      },
      {
        path: ':stackId',
        component: fromContainers.StackItemComponent,
      },
    ],
  },

  {
    path: 'exams',
    children: [
      {
        path: '',
        component: fromContainers.ExamListComponent,
      },
      {
        path: 'new',
        component: fromContainers.ExamItemComponent,
      },
      {
        path: ':examId',
        component: fromContainers.ExamItemComponent,
      },
    ],
  },

  {
    path: 'belts',
    children: [
      {
        path: '',
        component: fromContainers.BeltListComponent,
      },
      {
        path: 'new',
        component: fromContainers.BeltListComponent,
      },
      {
        path: ':beltId',
        component: fromContainers.BeltListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmissionRoutingModule {}
