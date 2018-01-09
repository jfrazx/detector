import { CRUD } from '../interfaces/crud';
import { Role } from '../models';
import { Request, Response, Next } from 'express';

class RoleController implements CRUD {
  async index(request: Request, response: Response, next: Next): Promise<void> {
    response.json(
      await Role.find({})
        .populate('capabilities')
    );
  }
  async show(request: Request, response: Response, next: Next): Promise<void> {
    response.json(
      await Role.findById(request.params.id)
        .populate('capabilities')
    );
  }
  async create(request: Request, response: Response, next: Next): Promise<void> {
    response.json(await Role.create(request.body));
  }
  async update(request: Request, response: Response, next: Next): Promise<void> {
    response.json(await Role.findByIdAndUpdate(request.params.id, { $set: request.body }));
  }
  async destroy(request: Request, response: Response, next: Next): Promise<void> {
    response.json(await Role.findByIdAndRemove(request.params.id));
  }
}

export const roleController = new RoleController();
