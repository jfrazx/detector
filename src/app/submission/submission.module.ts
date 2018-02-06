import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmissionRoutingModule } from './submission-routing.module';

import * as fromComponents from './components';
import * as fromContainers from './containers';

import * as fromServices from './services';

import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    SubmissionRoutingModule,
    AngularFontAwesomeModule,
  ],
  declarations: [...fromComponents.components, ...fromContainers.containers],
  providers: [...fromServices.services],
})
export class SubmissionModule {}
