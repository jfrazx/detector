import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Update } from '@ngrx/entity';

import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as userActions from '../actions/user.actions';
import * as fromServices from '../../services';

import { User } from '../../models';

@Injectable()
export class UserEffects {
  @Effect()
  loadUsers$ = this.actions$
    .ofType(userActions.UserActionTypes.LOAD_USERS)
    .pipe(
      switchMap(() =>
        this.userService
          .getUsers()
          .pipe(
            map(users => new userActions.LoadUsersSuccess(users)),
            catchError(error => of(new userActions.LoadUsersFail(error)))
          )
      )
    );

  @Effect()
  createUser$ = this.actions$
    .ofType(userActions.UserActionTypes.CREATE_USER)
    .pipe(
      map((action: userActions.UserCreate) => action.payload),
      switchMap(user =>
        this.userService
          .createUser(user)
          .pipe(
            map(createdUser => new userActions.UserCreateSuccess(createdUser)),
            catchError(error => of(new userActions.UserCreateFail(error)))
          )
      )
    );

  @Effect()
  updateUser$ = this.actions$
    .ofType(userActions.UserActionTypes.UPDATE_USER)
    .pipe(
      map((action: userActions.UserUpdate) => action.payload),
      switchMap(user =>
        this.userService
          .updateUser(user)
          .pipe(
            map(
              updatedUser =>
                new userActions.UserUpdateSuccess(
                  (updatedUser as any) as Update<User>
                )
            ),
            catchError(error => of(new userActions.UserUpdateFail(error)))
          )
      )
    );

  @Effect()
  removeUser$ = this.actions$
    .ofType(userActions.UserActionTypes.REMOVE_USER)
    .pipe(
      map((action: userActions.UserRemove) => action.payload),
      switchMap(user =>
        this.userService
          .removeUser(user.id)
          .pipe(
            map(() => new userActions.UserRemoveSuccess(user)),
            catchError(error => of(new userActions.UserRemoveFail(error)))
          )
      )
    );

  constructor(
    private actions$: Actions,
    private userService: fromServices.UserService
  ) {}
}
