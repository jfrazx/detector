import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { StackResolve } from './resolvers';

import * as fromComponents from './components';

const routes: Routes = [
  {
    path: 'stacks',
    component: fromComponents.StackComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'new',
        component: fromComponents.StackNewComponent,
      },
      {
        path: 'list',
        component: fromComponents.StackListComponent,
      },
      {
        path: ':id/edit',
        component: fromComponents.StackEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmissionRoutingModule {}
