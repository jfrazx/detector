import * as debuggable from 'debug';
import { ENV } from '../config';

export const debug = debuggable(`detector_${ ENV }`);
