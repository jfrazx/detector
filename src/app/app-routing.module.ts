import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'locations',
  },
  {
    path: 'facilities',
    loadChildren: './facility/facility.module#FacilityModule',
  },
  {
    path: 'submissions',
    loadChildren: './submission/submission.module#SubmissionModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: !environment.production }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
