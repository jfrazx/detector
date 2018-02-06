import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services';
import { Login, Register } from '../../models';

@Component({
  selector: 'app-auth-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private auth: AuthService, private router: Router) {}

  onRegister(register: Register): void {
    const subscription = this.auth.register(register).subscribe(
      () => {
        // notify user of successful registration/check email
      },
      errorResponse => {
        // set register errors array
      }
    );
  }

  onLogin(login: Login): void {
    const subscription = this.auth.login(login).subscribe(
      user => {
        // save user in local storage
        this.router.navigateByUrl('/');
        subscription.unsubscribe();
      },
      errorResponse => {
        // set login errors array
      }
    );
  }
}
