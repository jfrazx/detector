import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';

// Services
import * as services from './services';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Modules
import {
  AuthModule,
  SharedModule,
} from './modules';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
  ],
  providers: [
    ...(Object.keys(services).map(service => services[service])),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
