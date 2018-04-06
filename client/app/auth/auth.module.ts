import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthorizationRoutingModule } from './auth-routing.module';

import { SharedModule } from '../shared';

import { reducers, effects } from './store';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';

@NgModule({
  declarations: [...fromComponents.components, ...fromContainers.containers],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    EffectsModule.forFeature(effects),
    StoreModule.forFeature('facilities', reducers),
  ],
  providers: [...fromServices.services],
})
export class AuthModule {}
