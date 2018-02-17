import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: 'locations',
    component: fromContainers.LocationListComponent,
  },
  {
    path: 'locations/new',
    component: fromContainers.LocationViewComponent,
  },
  {
    path: 'locations/:locationId',
    component: fromContainers.LocationViewComponent,
  },
];

export const FacilityRoutingModule = RouterModule.forChild(routes);
