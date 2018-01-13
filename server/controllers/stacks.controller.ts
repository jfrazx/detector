import { CRUD } from '../interfaces';
import { Stack } from '../models';
import { Request, Response, NextFunction } from 'express';

class StackController implements CRUD {
  async index(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(await Stack.find({}));
  }
  async show(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(await Stack.findById(request.params.id));
  }
  async create(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(await Stack.create(request.body));
  }
  async update(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(await Stack.findByIdAndUpdate(request.params.id, { $set: request.body }));
  }
  async destroy(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(await Stack.findByIdAndRemove(request.params.id));
  }
}

export const stackController = new StackController();
