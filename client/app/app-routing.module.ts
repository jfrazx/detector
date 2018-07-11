import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
import { FacilityModule } from './facility';
import { SubmissionModule } from './submission';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'locations',
  },
  {
    path: 'facilities',
    loadChildren: () => FacilityModule,
  },
  {
    path: 'submissions',
    loadChildren: () => SubmissionModule,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: !environment.production }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
