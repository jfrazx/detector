import { Request, Response, NextFunction, RequestHandler } from 'express';

export function wrapper(callback: RequestHandler): RequestHandler {
  return (request: Request, response: Response, next: NextFunction): void => {
    try {
      callback(request, response, next);
    } catch (error) {
      next(error);
    }
  };
}
