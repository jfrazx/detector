import { CRUD } from '../interfaces/crud';
import { Capability } from '../models';
import { Request, Response, Next } from 'express';

class CapabilityController implements CRUD {
  async index(request: Request, response: Response, next: Next): Promise<void> {
    response.json(
      await Capability.find({})
          .lean()
    );
  }
  async show(request: Request, response: Response, next: Next): Promise<void> {
    response.json(
      await Capability.findById(request.params.id)
          .lean()
    );
  }
  async create(request: Request, response: Response, next: Next): Promise<void> {
    response.json(await Capability.create(request.body));
  }
  async update(request: Request, response: Response, next: Next): Promise<void> {
    response.json(
      await Capability.findByIdAndUpdate(request.params.id, { $set: request.body })
          .lean()
    );
  }
  async destroy(request: Request, response: Response, next: Next): Promise<void> {
    response.json(
      await Capability.findByIdAndRemove(request.params.id)
          .lean()
    );
  }
}

export const capabilityController = new CapabilityController();
