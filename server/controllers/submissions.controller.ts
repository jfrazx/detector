import { CRUD } from '../interfaces';
import { SubmissionFile, Submission, Stack } from '../models';
import { Request, Response, NextFunction } from 'express';
import { build } from '../utils';


class SubmissionController implements CRUD {
  async index(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(
      await Submission.find({})
        .lean()
        .populate('student')
        .populate('exam')
        .exec()
    );
  }

  async show(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(
      await Submission.findById(request.params.id)
        .populate('exam')
        .populate('instructor')
        .populate('student')
        .populate('files')
        .lean()
        .exec()
    );
  }

  async createFromFile(request: Request, response: Response): Promise<void> {

  }

  async createFromGithub(request: Request, response: Response): Promise<void> {
    const submission = new Submission(request.body);
    const stack = await Stack.findById(submission.stack).exec();

    submission.files = await build(submission, stack);

    await submission.save();

    response.json(submission);
  }

  async create(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(
      await Submission.create(request.body)
    );
  }

  async update(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(
      await Submission
              .findByIdAndUpdate(request.params.id, { $set: request.body })
              .lean()
              .exec()
    );
  }

  async destroy(request: Request, response: Response, next: NextFunction): Promise<void> {
    const submission = await Submission.findByIdAndRemove(request.params.id);
    const files = await SubmissionFile.remove({ submission: submission._id });

    response.json(submission);
  }
}

export const submissionController = new SubmissionController();
