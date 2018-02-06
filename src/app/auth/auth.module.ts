import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './auth-routing.module';

import { SharedModule } from '../shared';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';

@NgModule({
  declarations: [...fromComponents.components, ...fromContainers.containers],
  imports: [CommonModule, AuthorizationRoutingModule, SharedModule],
  providers: [...fromServices.services],
})
export class AuthModule {}
