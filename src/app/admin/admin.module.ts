import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';

import * as fromStore from './store';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    StoreModule.forFeature('admin', fromStore.reducers),
    EffectsModule.forFeature(fromStore.effects),
  ],
  declarations: [],
})
export class AdminModule {}
