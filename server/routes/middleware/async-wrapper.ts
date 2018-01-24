import { Request, Response, NextFunction, RequestHandler } from 'express';
import { Asyncable } from '../../interfaces';

export function wrapper(callback: Asyncable): RequestHandler {
  return (request: Request, response: Response, next: NextFunction): void => {
    callback(request, response, next)
      .catch(next);
  };
}
