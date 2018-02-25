import { CapabilityEffects } from './capabilities.effect';
import { RoleEffects } from './roles.effect';
import { RoleService } from '../../services';

export const effects: any[] = [CapabilityEffects, RoleService];

export * from './capabilities.effect';
export * from './roles.effect';
