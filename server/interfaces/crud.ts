import { Request, Response, Next, RouteHandler } from 'express';

export interface CRUD {
  index: RouteHandler;
  show: RouteHandler;
  create: RouteHandler;
  destroy: RouteHandler;
  update: RouteHandler;
}

export type Asyncable<T> = (request: Request, response: Response, next: Next) => Promise<T | T[]>;
