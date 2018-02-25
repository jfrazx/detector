import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import {
  CapabilityActionTypes,
  LoadCapabilitiesSuccess,
  LoadCapabilitiesFail,
} from '../actions';
import * as fromServices from '../../services';

@Injectable()
export class CapabilityEffects {
  constructor(
    private actions$: Actions,
    private capabilityService: fromServices.CapabilityService
  ) {}

  @Effect()
  loadCapability$ = this.actions$
    .ofType(CapabilityActionTypes.LOAD_CAPABILITIES)
    .pipe(
      switchMap(() =>
        this.capabilityService
          .getCapabilities()
          .pipe(
            map(capabilities => new LoadCapabilitiesSuccess(capabilities)),
            catchError(error => of(new LoadCapabilitiesFail(error)))
          )
      )
    );
}
