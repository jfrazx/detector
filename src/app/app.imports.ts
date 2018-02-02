import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Modules
import { AuthModule } from './auth';
import { SharedModule } from './shared';
import { SubmissionModule } from './submission';

// Routing
import { AppRoutingModule } from './app-routing.module';

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../environments/environment';

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

export const imports: any[] = [
  StoreRouterConnectingModule,
  AngularFontAwesomeModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  HttpClientModule,
  BrowserModule,
  AuthModule,
  SharedModule,
  SubmissionModule,
  environment.production ? [] : StoreDevtoolsModule.instrument(),
  StoreModule.forRoot({}, { metaReducers }),
  EffectsModule.forRoot([]),
  NgbModule.forRoot(),
];
