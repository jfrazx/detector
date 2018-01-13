import { CRUD } from '../interfaces';
import { SimilarityAssessment } from '../models';
import { Request, Response, NextFunction } from 'express';

class SimilarityAssessmentController {
  async index(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(
      await SimilarityAssessment.find({})
    );
  }
  async show(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(
      await SimilarityAssessment.findById(request.params.id)
    );
  }
  async create(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(await SimilarityAssessment.create(request.body));
  }
  async update(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(await SimilarityAssessment.findByIdAndUpdate(request.params.id, { $set: request.body }));
  }
  async destroy(request: Request, response: Response, next: NextFunction): Promise<void> {
    response.json(await SimilarityAssessment.findByIdAndRemove(request.params.id));
  }
}

export const similarityAssessmentController = new SimilarityAssessmentController();
