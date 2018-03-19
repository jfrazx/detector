import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Update } from '@ngrx/entity';

import { of } from 'rxjs/observable/of';
import { map, switchMap, tap, catchError } from 'rxjs/operators';

import * as authActions from '../actions/auth.actions';
import * as fromServices from '../../services';
import * as fromRoot from '../../../store';

import { Login } from '../../models';
import { User } from '../../../facility';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: fromServices.AuthService
  ) {}

  @Effect()
  login$ = this.actions$
    .ofType(authActions.AuthActionTypes.LOGIN_AUTH)
    .pipe(
      map((action: authActions.AuthLogin) => action.payload),
      switchMap(login =>
        this.authService
          .login(login)
          .pipe(
            map(user => new authActions.AuthLoginSuccess(user)),
            catchError(error => of(new authActions.AuthLoginFail(error)))
          )
      )
    );

  @Effect()
  logout$ = this.actions$
    .ofType(authActions.AuthActionTypes.LOGOUT_AUTH)
    .pipe(
      switchMap(() =>
        this.authService
          .logout()
          .pipe(
            map(user => new authActions.AuthLogoutSuccess(user)),
            catchError(error => of(new authActions.AuthLoginFail(error)))
          )
      )
    );

  @Effect()
  loginSuccess$ = this.actions$
    .ofType(authActions.AuthActionTypes.LOGIN_AUTH_SUCCESS)
    .pipe(
      switchMap(() =>
        this.authService.logout().pipe(
          tap(
            () =>
              new fromRoot.Go({
                path: ['/facilities'],
              })
          )
        )
      )
    );

  @Effect()
  logoutSuccess$ = this.actions$
    .ofType(authActions.AuthActionTypes.LOGOUT_AUTH_SUCCESS)
    .pipe(
      switchMap(() =>
        this.authService.logout().pipe(
          tap(
            () =>
              new fromRoot.Go({
                path: ['/'],
              })
          ),
          catchError(error => of(new authActions.AuthLoginFail(error)))
        )
      )
    );
}
