import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimilarityRoutingModule } from './similarity-routing.module';
import { SharedModule } from '../shared';

@NgModule({
  imports: [CommonModule, SharedModule, SimilarityRoutingModule],
  declarations: [],
})
export class SimilarityModule {}
