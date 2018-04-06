import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FacilityRoutingModule } from './facility-routing.module';
import { SharedModule } from '../shared';

import { reducers, effects } from './store';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromServices from './services';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FacilityRoutingModule,
    ReactiveFormsModule,
    EffectsModule.forFeature(effects),
    StoreModule.forFeature('facilities', reducers),
  ],
  declarations: [...fromComponents.components, ...fromContainers.containers],
  providers: [...fromServices.services],
})
export class FacilityModule {}
