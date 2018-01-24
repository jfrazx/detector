import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StackResolve } from './resolvers';

import {
  StackComponent,
  StackNewComponent,
  StackEditComponent,
  StackListComponent,
} from './components';

const routes: Routes = [
  {
    path: 'stacks',
    component: StackComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'new',
        component: StackNewComponent,
      },
      {
        path: 'list',
        component: StackListComponent,
      },
      {
        path: ':id/edit',
        component: StackEditComponent,
        resolve: {
          stack: StackResolve,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StackRoutingModule { }
