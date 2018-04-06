import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as roleActions from '../actions';
import * as fromServices from '../../services';

@Injectable()
export class RoleEffects {
  constructor(
    private actions$: Actions,
    private roleService: fromServices.RoleService
  ) {}

  @Effect()
  loadRole$ = this.actions$
    .ofType(roleActions.RoleActionTypes.LOAD_ROLES)
    .pipe(
      switchMap(() =>
        this.roleService
          .getRoles()
          .pipe(
            map(roles => new roleActions.LoadRolesSuccess(roles)),
            catchError(error => of(new roleActions.LoadRolesFail(error)))
          )
      )
    );
}
