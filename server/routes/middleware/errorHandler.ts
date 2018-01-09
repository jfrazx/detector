import { Request, Response, Next } from 'express';

export function errorHandler(error: Error, request: Request, response: Response, next: Next): void {
  if (error.message) {
    return response.status(500).json(error.message);
  }

  next();
}

export function basicErrorHandler(error: Error, request: Request, response: Response, next: Next): void {
  response.status(501).json('An error occured');
}
