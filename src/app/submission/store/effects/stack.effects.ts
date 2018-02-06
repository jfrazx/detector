import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as stackActions from '../actions/stack.actions';
import * as fromServices from '../../services';
import { StackActions } from '../actions';

export class StackEffects {
  @Effect()
  loadStacks$ = this.actions$
    .ofType(stackActions.StackActionTypes.LOAD_STACKS)
    .pipe(
      switchMap(() =>
        this.stackService
          .getStacks()
          .pipe(
            map(pizzas => new stackActions.LoadStacksSuccess(pizzas)),
            catchError(error => of(new stackActions.LoadStacksFail(error)))
          )
      )
    );

  @Effect()
  createStack$ = this.actions$
    .ofType(stackActions.StackActionTypes.CREATE_STACK)
    .pipe(
      map((action: stackActions.StackCreate) => action.payload),
      switchMap(stack =>
        this.stackService
          .createStack(stack)
          .pipe(
            map(
              createdStack => new stackActions.StackCreateSuccess(createdStack)
            ),
            catchError(error => of(new stackActions.StackCreateFail(error)))
          )
      )
    );

  @Effect()
  updateStack$ = this.actions$
    .ofType(stackActions.StackActionTypes.UPDATE_STACK)
    .pipe(
      map((action: stackActions.StackUpdate) => action.payload),
      switchMap(stack =>
        this.stackService
          .updateStack(stack)
          .pipe(
            map(
              updatedStack => new stackActions.StackUpdateSuccess(updatedStack)
            ),
            catchError(error => of(new stackActions.StackUpdateFail(error)))
          )
      )
    );

  @Effect()
  removeStack$ = this.actions$
    .ofType(stackActions.StackActionTypes.REMOVE_STACK)
    .pipe(
      map((action: stackActions.StackRemove) => action.payload),
      switchMap(stack =>
        this.stackService
          .removeStack(stack)
          .pipe(
            map(() => new stackActions.StackRemoveSuccess(stack)),
            catchError(error => of(new stackActions.StackRemoveFail(error)))
          )
      )
    );

  constructor(
    private actions$: Actions,
    private stackService: fromServices.StackService
  ) {}
}
