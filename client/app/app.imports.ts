import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';

import { reducers, effects } from './store';

// Modules
import { AuthModule } from './auth';
import { SharedModule } from './shared';

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
  BrowserAnimationsModule,
  AppRoutingModule,
  HttpClientModule,
  BrowserModule,
  AuthModule,
  SharedModule,
  environment.production ? [] : StoreDevtoolsModule.instrument(),
  StoreModule.forRoot(reducers, { metaReducers }),
  EffectsModule.forRoot(effects),
  NgbModule.forRoot(),
];
