import { CRUD } from '../interfaces';
import { SubmissionFile } from '../models';
import { Request, Response, NextFunction } from 'express';

class SubmissionFileController implements CRUD {
  async index(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(await SubmissionFile.find({}).lean());
  }
  async show(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(await SubmissionFile.findById(request.params.file_id).lean());
  }
  async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(await SubmissionFile.create(request.body));
  }
  async update(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(
      await SubmissionFile.findByIdAndUpdate(request.params.file_id, {
        $set: request.body,
      }).lean()
    );
  }
  async destroy(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(
      await SubmissionFile.findByIdAndRemove(request.params.file_id).lean()
    );
  }
}

export const submissionFileController = new SubmissionFileController();
