import { CRUD } from '../interfaces/crud';
import { Location } from '../models';
import { Request, Response, Next } from 'express';

class LocationController implements CRUD {
  async index(request: Request, response: Response, next: Next): Promise<void> {
    response.json(await Location.find({}));
  }
  async show(request: Request, response: Response, next: Next): Promise<void> {
    response.json(await Location.findById(request.params.id));
  }
  async create(request: Request, response: Response, next: Next): Promise<void> {
    response.json(await Location.create(request.body));
  }
  async update(request: Request, response: Response, next: Next): Promise<void> {
    response.json(await Location.findByIdAndUpdate(request.params.id, { $set: request.body }));
  }
  async destroy(request: Request, response: Response, next: Next): Promise<void> {
    response.json(await Location.findByIdAndRemove(request.params.id));
  }
}

export const locationController = new LocationController();
