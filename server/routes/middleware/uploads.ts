import { STORAGE } from '../../config';
import * as multer from 'multer';

export const upload = multer({ dest: STORAGE });
