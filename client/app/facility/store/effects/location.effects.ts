import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Update } from '@ngrx/entity';

import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as locationActions from '../actions/location.actions';
import * as fromServices from '../../services';

import { Location } from '../../models';

@Injectable()
export class LocationEffects {
  @Effect()
  loadLocations$ = this.actions$
    .ofType(locationActions.LocationActionTypes.LOAD_LOCATIONS)
    .pipe(
      switchMap(() =>
        this.locationService
          .getLocations()
          .pipe(
            map(
              locations => new locationActions.LoadLocationsSuccess(locations)
            ),
            catchError(error =>
              of(new locationActions.LoadLocationsFail(error))
            )
          )
      )
    );

  @Effect()
  createLocation$ = this.actions$
    .ofType(locationActions.LocationActionTypes.CREATE_LOCATION)
    .pipe(
      map((action: locationActions.LocationCreate) => action.payload),
      switchMap(location =>
        this.locationService
          .createLocation(location)
          .pipe(
            map(
              createdLocation =>
                new locationActions.LocationCreateSuccess(createdLocation)
            ),
            catchError(error =>
              of(new locationActions.LocationCreateFail(error))
            )
          )
      )
    );

  @Effect()
  updateLocation$ = this.actions$
    .ofType(locationActions.LocationActionTypes.UPDATE_LOCATION)
    .pipe(
      map((action: locationActions.LocationUpdate) => action.payload),
      switchMap(location =>
        this.locationService
          .updateLocation(location)
          .pipe(
            map(
              updatedLocation =>
                new locationActions.LocationUpdateSuccess(
                  (updatedLocation as any) as Update<Location>
                )
            ),
            catchError(error =>
              of(new locationActions.LocationUpdateFail(error))
            )
          )
      )
    );

  @Effect()
  removeLocation$ = this.actions$
    .ofType(locationActions.LocationActionTypes.REMOVE_LOCATION)
    .pipe(
      map((action: locationActions.LocationRemove) => action.payload),
      switchMap(location =>
        this.locationService
          .removeLocation(location)
          .pipe(
            map(() => new locationActions.LocationRemoveSuccess(location)),
            catchError(error =>
              of(new locationActions.LocationRemoveFail(error))
            )
          )
      )
    );

  constructor(
    private actions$: Actions,
    private locationService: fromServices.LocationService
  ) {}
}
