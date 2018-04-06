import { Action } from '@ngrx/store';

import { Capability } from '../../models';

export enum CapabilityActionTypes {
  LOAD_CAPABILITIES = '[Auth] Load Capabilities',
  LOAD_CAPABILITIES_SUCCESS = '[Auth] Load Capabilities Success',
  LOAD_CAPABILITIES_FAIL = '[Auth] Load Capabilities Fail',

  UPDATE_CAPABILITY = '[Auth] Update Capabilities',
  UPDATE_CAPABILITY_FAIL = '[Auth] Update Capabilities Fail',
  UPDATE_CAPABILITY_SUCCESS = '[Auth] Update Capabilities Success',

  CREATE_CAPABILITY = '[Auth] Create Capability',
  CREATE_CAPABILITY_FAIL = '[Auth] Create Capability Fail',
  CREATE_CAPABILITY_SUCCESS = '[Auth] Create Capability Success',

  REMOVE_CAPABILITY = '[Auth] Remove Capability',
  REMOVE_CAPABILITY_FAIL = '[Auth] Remove Capability Fail',
  REMOVE_CAPABILITY_SUCCESS = '[Auth] Remove Capability Success',
}

export class LoadCapabilities implements Action {
  readonly type = CapabilityActionTypes.LOAD_CAPABILITIES;
}

export class LoadCapabilitiesFail implements Action {
  readonly type = CapabilityActionTypes.LOAD_CAPABILITIES_FAIL;

  constructor(public payload: any) {}
}

export class LoadCapabilitiesSuccess implements Action {
  readonly type = CapabilityActionTypes.LOAD_CAPABILITIES_SUCCESS;

  constructor(public payload: Capability[]) {}
}

export class UpdateCapability implements Action {
  readonly type = CapabilityActionTypes.UPDATE_CAPABILITY;

  constructor(public payload: Capability) {}
}

export class UpdateCapabilityFail implements Action {
  readonly type = CapabilityActionTypes.UPDATE_CAPABILITY_FAIL;

  constructor(public payload: any) {}
}

export class UpdateCapabilitySuccess implements Action {
  readonly type = CapabilityActionTypes.UPDATE_CAPABILITY_SUCCESS;

  constructor(public payload: Capability) {}
}

export class RemoveCapability implements Action {
  readonly type = CapabilityActionTypes.REMOVE_CAPABILITY;

  constructor(public payload: Capability) {}
}

export class RemoveCapabilityFail implements Action {
  readonly type = CapabilityActionTypes.REMOVE_CAPABILITY_FAIL;

  constructor(public payload: any) {}
}

export class RemoveCapabilitySuccess implements Action {
  readonly type = CapabilityActionTypes.REMOVE_CAPABILITY_SUCCESS;

  constructor(public payload: Capability) {}
}

export class CreateCapability implements Action {
  readonly type = CapabilityActionTypes.CREATE_CAPABILITY;

  constructor(public payload: Capability) {}
}

export class CreateCapabilityFail implements Action {
  readonly type = CapabilityActionTypes.CREATE_CAPABILITY_FAIL;

  constructor(public payload: any) {}
}

export class CreateCapabilitySuccess implements Action {
  readonly type = CapabilityActionTypes.CREATE_CAPABILITY_SUCCESS;

  constructor(public payload: Capability) {}
}

export type CapabilitiesAction =
  | LoadCapabilities
  | LoadCapabilitiesFail
  | LoadCapabilitiesSuccess
  | UpdateCapability
  | UpdateCapabilityFail
  | UpdateCapabilitySuccess
  | RemoveCapability
  | RemoveCapabilityFail
  | RemoveCapabilitySuccess
  | CreateCapability
  | CreateCapabilityFail
  | CreateCapabilitySuccess;
