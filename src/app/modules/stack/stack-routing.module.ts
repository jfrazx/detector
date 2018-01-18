import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StackComponent, StackShowComponent } from './components';

const routes: Routes = [
  {
    path: 'stacks',
    component: StackComponent,
    children: [
      {
        path: ':id',
        component: StackShowComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StackRoutingModule { }
