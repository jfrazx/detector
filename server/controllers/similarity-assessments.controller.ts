import { CRUD } from '../interfaces';
import { SimilarityAssessment } from '../models';
import { Request, Response, NextFunction } from 'express';

class SimilarityAssessmentController {
  async index(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(await SimilarityAssessment.find(request.query).lean());
  }
  async show(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(
      await SimilarityAssessment.findById(request.params.similarity_id).lean()
    );
  }
  async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(await SimilarityAssessment.create(request.body));
  }
  async update(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(
      await SimilarityAssessment.findByIdAndUpdate(
        request.params.similarity_id,
        { $set: request.body }
      )
    );
  }
  async destroy(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(
      await SimilarityAssessment.findByIdAndRemove(request.params.similarity_id)
    );
  }
}

export const similarityAssessmentController = new SimilarityAssessmentController();
