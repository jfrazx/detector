import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './containers';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },
];

export const AuthorizationRoutingModule = RouterModule.forChild(routes);
