import { CRUD } from '../interfaces';
import { Exam } from '../models';
import { Request, Response, NextFunction } from 'express';

class ExamController implements CRUD {
  async index(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(
      await Exam.find({})
        .lean()
    );
  }
  async show(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(
      await Exam.findById(request.params.id)
        .lean()
    );
  }
  async create(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(await Exam.create(request.body));
  }
  async update(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(
      await Exam.findByIdAndUpdate(request.params.id, { $set: request.body })
        .lean()
    );
  }
  async destroy(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(
      await Exam.findByIdAndRemove(request.params.id)
        .lean()
    );
  }
}

export const examController = new ExamController();
