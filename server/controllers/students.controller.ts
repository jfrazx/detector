import { CRUD } from '../interfaces';
import { Student } from '../models';
import { Request, Response, NextFunction } from 'express';

class StudentController implements CRUD {
  async index(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(await Student.find({}));
  }
  async show(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(await Student.findById(request.params.id));
  }
  async create(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(await Student.create(request.body));
  }
  async update(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(await Student.findByIdAndUpdate(request.params.id, { $set: request.body }));
  }
  async destroy(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(await Student.findByIdAndRemove(request.params.id));
  }
}

export const studentController = new StudentController();
