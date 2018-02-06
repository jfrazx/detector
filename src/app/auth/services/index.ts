import { AuthService } from './auth.service';
import { CapabilityService } from './capability.service';
import { RoleService } from './role.service';

export const services: any[] = [AuthService, CapabilityService, RoleService];

export * from './auth.service';
export * from './capability.service';
export * from './role.service';
