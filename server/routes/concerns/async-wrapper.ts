import { Request, Response, Next, RouteHandler } from 'express';

export function wrapper(callback: RouteHandler): RouteHandler {
  return (request: Request, response: Response, next: Next): void => {
    try {
      callback(request, response, next);
    } catch (error) {
      next(error);
    }
  };
}
