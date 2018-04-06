import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Login, Register } from '../../models';
import { Location } from '../../../facility';

import * as fromStore from '../../store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-auth-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  locations$: Observable<Location[]>;

  constructor(
    private store: Store<fromStore.AuthorizationState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.locations$ = this.store.select(fromStore.fromFacility.getLocations);
  }

  onRegister(register: Register): void {
    this.store.dispatch(new fromStore.RegisterAuth(register));
  }

  onLogin(login: Login): void {
    this.store.dispatch(new fromStore.AuthLogin(login));
  }
}
