import { CRUD } from '../interfaces/crud';
import { User } from '../models';
import { Request, Response, Next } from 'express';

class UserController implements CRUD {
  async index(request: Request, response: Response, next: Next): Promise<void> {
    response.json(
      await User.find({})
        .lean()
    );
  }
  async show(request: Request, response: Response, next: Next): Promise<void> {
    response.json(
      await User.findById(request.params.id)
        .lean()
    );
  }
  async create(request: Request, response: Response, next: Next): Promise<void> {
    response.json(await User.create(request.body));
  }
  async update(request: Request, response: Response, next: Next): Promise<void> {
    response.json(
      await User.findByIdAndUpdate(request.params.id, { $set: request.body })
        .lean()
    );
  }
  async destroy(request: Request, response: Response, next: Next): Promise<void> {
    response.json(await User.findByIdAndRemove(request.params.id));
  }
}

export const userController = new UserController();
