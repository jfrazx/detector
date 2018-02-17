import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FacilityRoutingModule } from './facility-routing.module';
import { SharedModule } from '../shared';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromServices from './services';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FacilityRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [...fromComponents.components, ...fromContainers.containers],
  providers: [...fromServices.services],
})
export class FacilityModule {}
