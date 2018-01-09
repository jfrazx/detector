import { authController } from '../controllers';
import { wrapper } from './concerns/async-wrapper';
import { Router } from 'express';

export const router = Router();

router
  .post('/login', wrapper(authController.login))
  .post('/register', wrapper(authController.register))
  .post('/logout', wrapper(authController.logout));

