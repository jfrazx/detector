import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'mongoose';

export function validationHandler(
  error: ValidationError,
  request: Request,
  response: Response,
  next: NextFunction
): void {
  if ((<any>error).errors) {
    return response.status(400).json({
      error: Object.keys((<any>error).errors).map(
        field => (<any>error).errors[field].message
      ),
    }) as any;
  }

  next();
}
