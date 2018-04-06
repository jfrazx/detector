import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'locations',
  },
  {
    path: 'locations',
    children: [
      {
        path: '',
        component: fromContainers.LocationListComponent,
      },
      {
        path: 'new',
        component: fromContainers.LocationViewComponent,
      },
      {
        path: ':locationId',
        component: fromContainers.LocationViewComponent,
      },
    ],
  },
  {
    path: 'students',
    children: [
      {
        path: '',
        component: fromContainers.StudentsComponent,
      },
      {
        path: 'new',
        component: fromContainers.StudentViewComponent,
      },
      {
        path: ':studentId',
        component: fromContainers.StudentViewComponent,
      },
    ],
  },
];

export const FacilityRoutingModule = RouterModule.forChild(routes);
