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
];

export const FacilityRoutingModule = RouterModule.forChild(routes);
