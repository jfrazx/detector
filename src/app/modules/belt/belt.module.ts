import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// components
import { BeltComponent } from './belt.component';
import { ListComponent } from './list/list.component';

// routing
import { BeltRoutingModule } from './belt-routing.module';

@NgModule({
  declarations: [BeltComponent, ListComponent],
  imports: [],
  providers: [],
})
export class BeltModule {}
