import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmissionRoutingModule } from './submission-routing.module';
import * as fromComponents from './components';

import * as fromServices from './services';

import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SubmissionRoutingModule,
    AngularFontAwesomeModule,
  ],
  declarations: [...fromComponents.components],
  providers: [...fromServices.services],
})
export class SubmissionModule {}
