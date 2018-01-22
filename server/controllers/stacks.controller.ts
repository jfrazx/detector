import { CRUD } from '../interfaces';
import { Stack } from '../models';
import { Request, Response, NextFunction } from 'express';

class StackController implements CRUD {
  async index(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(await Stack.find({}));
  }
  async show(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(await Stack.findById(request.params.stack_id));
  }
  async create(request: Request, response: Response, next: NextFunction): Promise<void> {
    console.log('received stack to create', request.body);
    response.json(await Stack.create(request.body));
  }
  async update(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(await Stack.findByIdAndUpdate(request.params.stack_id, { $set: request.body }));
  }
  async destroy(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(await Stack.findByIdAndRemove(request.params.stack_id));
  }
}

export const stackController = new StackController();
