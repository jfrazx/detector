import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: !environment.production }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
