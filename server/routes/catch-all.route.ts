import { resolve } from 'path';
import { Router, Request, Response } from 'express';

export const catchAll = Router();

catchAll.all('*', (request: Request, response: Response) => {
  response.sendFile(resolve('dist', 'public', 'index.html'));
});
