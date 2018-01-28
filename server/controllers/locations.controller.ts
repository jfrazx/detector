import { CRUD } from '../interfaces';
import { Location } from '../models';
import { Request, Response, NextFunction } from 'express';

class LocationController implements CRUD {
  async index(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(await Location.find({}));
  }
  async show(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(await Location.findById(request.params.location_id));
  }
  async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(await Location.create(request.body));
  }
  async update(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(
      await Location.findByIdAndUpdate(request.params.location_id, {
        $set: request.body,
      })
    );
  }
  async destroy(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(await Location.findByIdAndRemove(request.params.location_id));
  }
}

export const locationController = new LocationController();
