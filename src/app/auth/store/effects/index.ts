import { AuthEffects } from './auth.effects';
import { RegisterEffects } from './regsiter.effects';

export const effects: any[] = [AuthEffects, RegisterEffects];

export * from './auth.effects';
export * from './regsiter.effects';
