import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Update } from '@ngrx/entity';

import { of } from 'rxjs/observable/of';
import { map, switchMap, tap, catchError } from 'rxjs/operators';

import * as registerActions from '../actions/register.actions';
import * as fromServices from '../../services';
import * as fromRoot from '../../../store';

import { Login } from '../../models';
import { User } from '../../../facility';

@Injectable()
export class RegisterEffects {
  constructor(
    private actions$: Actions,
    private authService: fromServices.AuthService
  ) {}

  // @Effect()
  register$ = this.actions$
    .ofType(registerActions.RegisterActionTypes.REGISTER_AUTH)
    .pipe(
      map((action: registerActions.RegisterAuth) => action.payload),
      switchMap(register =>
        this.authService
          .register(register)
          .pipe(
            map(() => new registerActions.RegisterAuthSuccess()),
            catchError(error => of(new registerActions.RegisterAuthFail(error)))
          )
      )
    );
}
