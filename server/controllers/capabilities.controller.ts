import { CRUD } from '../interfaces';
import { Capability } from '../models';
import { Request, Response, NextFunction } from 'express';

class CapabilityController implements CRUD {
  async index(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(
      await Capability.find({})
          .lean()
    );
  }
  async show(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(
      await Capability.findById(request.params.capability_id)
          .lean()
    );
  }
  async create(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(await Capability.create(request.body));
  }
  async update(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(
      await Capability.findByIdAndUpdate(request.params.capability_id, { $set: request.body })
          .lean()
    );
  }
  async destroy(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(
      await Capability.findByIdAndRemove(request.params.capability_id)
          .lean()
    );
  }
}

export const capabilityController = new CapabilityController();
