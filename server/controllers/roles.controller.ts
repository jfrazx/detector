import { CRUD } from '../interfaces';
import { Role } from '../models';
import { Request, Response, NextFunction } from 'express';

class RoleController implements CRUD {
  async index(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(await Role.find({}).populate('capabilities'));
  }
  async show(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(
      await Role.findById(request.params.role_id).populate('capabilities')
    );
  }
  async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(await Role.create(request.body));
  }
  async update(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(
      await Role.findByIdAndUpdate(request.params.role_id, {
        $set: request.body,
      })
    );
  }
  async destroy(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(await Role.findByIdAndRemove(request.params.role_id));
  }
}

export const roleController = new RoleController();
