import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

import { SubmissionRoutingModule } from './submission-routing.module';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

// services
import * as fromServices from './services';

// store
import { reducers, effects } from './store';

import { SharedModule } from '../shared';

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
  declarations: [...fromComponents.components, ...fromContainers.containers],
  providers: [...fromServices.services],
})
export class SubmissionModule {}
