import { CRUD } from '../interfaces/crud';
import { File } from '../models';
import { Request, Response, Next } from 'express';

class FileController implements CRUD {
  async index(request: Request, response: Response, next: Next): Promise<void> {
    response.json(
      await File.find({})
              .lean()
    );
  }
  async show(request: Request, response: Response, next: Next): Promise<void> {
    response.json(
      await File.findById(request.params.id)
              .lean()
    );
  }
  async create(request: Request, response: Response, next: Next): Promise<void> {
    response.json(await File.create(request.body));
  }
  async update(request: Request, response: Response, next: Next): Promise<void> {
    response.json(
      await File.findByIdAndUpdate(request.params.id, { $set: request.body })
              .lean()
    );
  }
  async destroy(request: Request, response: Response, next: Next): Promise<void> {
    response.json(
      await File.findByIdAndRemove(request.params.id)
              .lean()
    );
  }
}

export const fileController = new FileController();
