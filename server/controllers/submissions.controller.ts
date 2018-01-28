import { FingerPrint, SubmissionFile, Submission, Stack } from '../models';
import { Request, Response, NextFunction } from 'express';
import { build, baseline, flatten } from '../utils';
import { CRUD } from '../interfaces';
import { API } from '../config';

class SubmissionController implements CRUD {
  async index(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(
      await Submission.find({})
        .populate('student')
        .populate('exam')
        .lean()
        .exec()
    );
  }

  async show(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(
      await Submission.findById(request.params.submission_id)
        .populate('exam')
        .populate('instructor')
        .populate('student')
        .lean()
        .exec()
    );
  }

  async createFromFile(request: Request, response: Response): Promise<void> {}

  async createFromGithub(request: Request, response: Response): Promise<void> {
    const submission = new Submission(request.body);
    const stack = await Stack.findById(submission.stack).exec();

    submission.files = await build(submission, stack);

    FingerPrint.insertMany(flatten(await baseline(submission.files)));

    await submission.save();

    response.json(submission);
  }

  async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(await Submission.create(request.body));
  }

  async update(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(
      await Submission.findByIdAndUpdate(request.params.submission_id, {
        $set: request.body,
      })
        .lean()
        .exec()
    );
  }

  async destroy(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    const submission = await Submission.findByIdAndRemove(
      request.params.submission_id
    );
    const files = await SubmissionFile.remove({ submission: submission._id });

    response.json(submission);
  }
}

export const submissionController = new SubmissionController();
