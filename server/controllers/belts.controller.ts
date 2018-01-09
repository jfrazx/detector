import { CRUD } from '../interfaces/crud';
import { Belt } from '../models';
import { Request, Response, Next } from 'express';

class BeltController implements CRUD {
  async index(request: Request, response: Response, next: Next): Promise<void> {
    response.json(
      await Belt.find({})
        .lean()
    );
  }
  async show(request: Request, response: Response, next: Next): Promise<void> {
    response.json(
      await Belt.findById(request.params.id)
        .lean()
    );
  }
  async create(request: Request, response: Response, next: Next): Promise<void> {
    response.json(await Belt.create(request.body));
  }
  async update(request: Request, response: Response, next: Next): Promise<void> {
    response.json(
      await Belt
          .findByIdAndUpdate(
            request.params.id,
            { $set: request.body }
          )
          .lean()
    );
  }
  async destroy(request: Request, response: Response, next: Next): Promise<void> {
    response.json(await Belt.findByIdAndRemove(request.params.id));
  }
}

export const beltController = new BeltController();
