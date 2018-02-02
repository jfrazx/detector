import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import { SharedModule } from '../shared';

@NgModule({
  imports: [CommonModule, SharedModule, FacilityRoutingModule],
  declarations: [],
})
export class FacilityModule {}
