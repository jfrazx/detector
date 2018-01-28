import { CRUD } from '../interfaces';
import { Belt } from '../models';
import { Request, Response, NextFunction } from 'express';

class BeltController implements CRUD {
  async index(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(await Belt.find({}).lean());
  }
  async show(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(await Belt.findById(request.params.belt_id).lean());
  }
  async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(await Belt.create(request.body));
  }
  async update(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(
      await Belt.findByIdAndUpdate(request.params.belt_id, {
        $set: request.body,
      }).lean()
    );
  }
  async destroy(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(await Belt.findByIdAndRemove(request.params.belt_id));
  }
}

export const beltController = new BeltController();
