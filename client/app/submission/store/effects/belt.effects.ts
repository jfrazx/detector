import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as beltActions from '../actions/belt.actions';
import * as fromServices from '../../services';
import { BeltActions } from '../actions';

@Injectable()
export class BeltEffects {
  @Effect()
  loadBelts$ = this.actions$
    .ofType(beltActions.BeltActionTypes.LOAD_BELTS)
    .pipe(
      switchMap(() =>
        this.beltService
          .getBelts()
          .pipe(
            map(belts => new beltActions.LoadBeltsSuccess(belts)),
            catchError(error => of(new beltActions.LoadBeltsFail(error)))
          )
      )
    );

  @Effect()
  createBelt$ = this.actions$
    .ofType(beltActions.BeltActionTypes.CREATE_BELT)
    .pipe(
      map((action: beltActions.BeltCreate) => action.payload),
      switchMap(Belt =>
        this.beltService
          .createBelt(Belt)
          .pipe(
            map(createdBelt => new beltActions.BeltCreateSuccess(createdBelt)),
            catchError(error => of(new beltActions.BeltCreateFail(error)))
          )
      )
    );

  @Effect()
  updateBelt$ = this.actions$
    .ofType(beltActions.BeltActionTypes.UPDATE_BELT)
    .pipe(
      map((action: beltActions.BeltUpdate) => action.payload),
      switchMap(Belt =>
        this.beltService
          .updateBelt(Belt)
          .pipe(
            map(updatedBelt => new beltActions.BeltUpdateSuccess(updatedBelt)),
            catchError(error => of(new beltActions.BeltUpdateFail(error)))
          )
      )
    );

  @Effect()
  removeBelt$ = this.actions$
    .ofType(beltActions.BeltActionTypes.REMOVE_BELT)
    .pipe(
      map((action: beltActions.BeltRemove) => action.payload),
      switchMap(Belt =>
        this.beltService
          .removeBelt(Belt)
          .pipe(
            map(() => new beltActions.BeltRemoveSuccess(Belt)),
            catchError(error => of(new beltActions.BeltRemoveFail(error)))
          )
      )
    );

  constructor(
    private actions$: Actions,
    private beltService: fromServices.BeltService
  ) {}
}
