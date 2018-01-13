import { Request, Response, NextFunction } from 'express';

export function errorHandler(error: Error, request: Request, response: Response, next: NextFunction): void {
  if (error.message) {
    return response.status(500).json(error.message) as any;
  }

  next();
}

export function basicErrorHandler(error: Error, request: Request, response: Response, next: NextFunction): void {
  response.status(501).json('An error occured');
}
