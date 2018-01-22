import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
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
  StackCardComponent,
  StackEditComponent,
  StackFormComponent,
  StackListComponent,
  StackTileComponent,
  StackDetailsComponent,
  StackIgnoreablesComponent,
} from './components';


@NgModule({
  declarations: [
    StackComponent,
    StackNewComponent,
    StackCardComponent,
    StackEditComponent,
    StackFormComponent,
    StackListComponent,
    StackDetailsComponent,
    StackIgnoreablesComponent,
    StackTileComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    HttpClientModule,
    StackRoutingModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
  ],
  providers: [
    StackService,
  ],
})
export class StackModule { }
