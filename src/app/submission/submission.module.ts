import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

import { SubmissionRoutingModule } from './submission-routing.module';

import * as fromComponents from './components';
import * as fromContainers from './containers';

import * as fromServices from './services';

import { reducers, effects } from './store';

import { SharedModule } from '../shared';
import { ExamFormComponent } from './components/exam-form/exam-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    SubmissionRoutingModule,
    AngularFontAwesomeModule,
    EffectsModule.forFeature(effects),
    StoreModule.forFeature('submissions', reducers),
  ],
  declarations: [...fromComponents.components, ...fromContainers.containers, ExamFormComponent],
  providers: [...fromServices.services],
})
export class SubmissionModule {}
