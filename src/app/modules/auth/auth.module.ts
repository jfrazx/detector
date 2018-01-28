import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Components
import { AuthComponent } from './auth.component';
import { HomeComponent, LoginComponent, RegisterComponent } from './home/';

// Routing
import { AuthRoutingModule } from './auth-routing.module';

// Services
import { AuthService } from './services';

// Modules
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    AuthComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [AuthRoutingModule, CommonModule, SharedModule],
  providers: [AuthService],
  exports: [],
})
export class AuthModule {}
