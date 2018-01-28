import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';

// Services
import { services } from './services';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Modules
import {
  AuthModule,
  BeltModule,
  CapabilityModule,
  ExamModule,
  LocationModule,
  RoleModule,
  SharedModule,
  StackModule,
  StudentModule,
  SubmissionModule,
  SubmissionFileModule,
  UserModule,
} from './modules';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    BeltModule,
    CapabilityModule,
    ExamModule,
    LocationModule,
    RoleModule,
    SharedModule,
    StackModule,
    StudentModule,
    SubmissionModule,
    SubmissionFileModule,
    UserModule,
    NgbModule.forRoot(),
  ],
  providers: [...services],
  bootstrap: [AppComponent],
})
export class AppModule {}
