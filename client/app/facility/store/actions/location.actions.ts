import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Location } from '../../models';

export enum LocationActionTypes {
  LOAD_LOCATIONS = '[Facilities] Load Locations',
  LOAD_LOCATIONS_FAIL = '[Facilities] Load Locations Fail',
  LOAD_LOCATIONS_SUCCESS = '[Facilities] Load Locations Success',

  UPDATE_LOCATION = '[Facilities] Update Location',
  UPDATE_LOCATION_FAIL = '[Facilities] Update Location Fail',
  UPDATE_LOCATION_SUCCESS = '[Facilities] Update Location Success',

  REMOVE_LOCATION = '[Facilities] Remove Location',
  REMOVE_LOCATION_FAIL = '[Facilities] Remove Location Fail',
  REMOVE_LOCATION_SUCCESS = '[Facilities] Remove Location Success',

  CREATE_LOCATION = '[Facilities] Create Location',
  CREATE_LOCATION_FAIL = '[Facilities] Create Location Fail',
  CREATE_LOCATION_SUCCESS = '[Facilities] Create Location Success',
}

export class LoadLocations implements Action {
  readonly type = LocationActionTypes.LOAD_LOCATIONS;
}

export class LoadLocationsFail implements Action {
  readonly type = LocationActionTypes.LOAD_LOCATIONS_FAIL;

  constructor(public payload: any) {}
}

export class LoadLocationsSuccess implements Action {
  readonly type = LocationActionTypes.LOAD_LOCATIONS_SUCCESS;

  constructor(public payload: Location[]) {}
}

export class LocationCreate implements Action {
  readonly type = LocationActionTypes.CREATE_LOCATION;

  constructor(public payload: Location) {}
}

export class LocationCreateFail implements Action {
  readonly type = LocationActionTypes.CREATE_LOCATION_FAIL;

  constructor(public payload: any) {}
}

export class LocationCreateSuccess implements Action {
  readonly type = LocationActionTypes.CREATE_LOCATION_SUCCESS;

  constructor(public payload: Location) {}
}

export class LocationRemove implements Action {
  readonly type = LocationActionTypes.REMOVE_LOCATION;

  constructor(public payload: Location) {}
}

export class LocationRemoveFail implements Action {
  readonly type = LocationActionTypes.REMOVE_LOCATION_FAIL;

  constructor(public payload: any) {}
}

export class LocationRemoveSuccess implements Action {
  readonly type = LocationActionTypes.REMOVE_LOCATION_SUCCESS;

  constructor(public payload: Location) {}
}

export class LocationUpdate implements Action {
  readonly type = LocationActionTypes.UPDATE_LOCATION;

  constructor(public payload: Location) {}
}

export class LocationUpdateFail implements Action {
  readonly type = LocationActionTypes.UPDATE_LOCATION_FAIL;

  constructor(public payload: any) {}
}

export class LocationUpdateSuccess implements Action {
  readonly type = LocationActionTypes.UPDATE_LOCATION_SUCCESS;

  constructor(public payload: Update<Location>) {}
}

export type LocationActions =
  | LoadLocations
  | LoadLocationsFail
  | LoadLocationsSuccess
  | LocationCreateFail
  | LocationCreateSuccess
  | LocationRemove
  | LocationRemoveFail
  | LocationRemoveSuccess
  | LocationUpdate
  | LocationUpdateFail
  | LocationUpdateSuccess;
