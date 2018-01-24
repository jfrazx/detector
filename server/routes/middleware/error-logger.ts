import { Request, Response, NextFunction } from 'express';
import { debug } from '../../utils';

export function errorLogger(error: any, request: Request, response: Response, next: NextFunction): void {
  debug(`An error occured on ${ request.url }: ${ error }`);

  // eventually log error to db

  next();
}
