import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '../shared';

// routing
import { StackRoutingModule } from './stack-routing.module';

// services
import { StackService } from './services/stack.service';

// components
import {
  StackComponent,
  StackNewComponent,
  StackFormComponent,
  StackShowComponent,
  StackDetailsComponent,
} from './components';


@NgModule({
  declarations: [
    StackComponent,
    StackNewComponent,
    StackFormComponent,
    StackShowComponent,
    StackDetailsComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    HttpClientModule,
    StackRoutingModule,
  ],
  providers: [
    StackService,
  ],
})
export class StackModule { }
