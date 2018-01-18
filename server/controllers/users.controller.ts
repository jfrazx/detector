import { CRUD } from '../interfaces';
import { User } from '../models';
import { Request, Response, NextFunction } from 'express';

class UserController implements CRUD {
  async index(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(
      await User.find({})
        .lean()
    );
  }
  async show(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(
      await User.findById(request.params.user_id)
        .lean()
    );
  }
  async create(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(await User.create(request.body));
  }
  async update(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(
      await User.findByIdAndUpdate(request.params.user_id, { $set: request.body })
        .lean()
    );
  }
  async destroy(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(await User.findByIdAndRemove(request.params.user_id));
  }
}

export const userController = new UserController();
