import { CRUD } from '../interfaces';
import { FingerPrint } from '../models';
import { Request, Response, NextFunction } from 'express';

class FingerPrintController implements CRUD {
  async index(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(
      await FingerPrint.find({
        submission: request.params.submission,
      })
    );
  }
  async show(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(await FingerPrint.findById(request.params.fingerprint_id));
  }
  async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(await FingerPrint.create(request.body));
  }
  async update(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(
      await FingerPrint.findByIdAndUpdate(request.params.fingerprint_id, {
        $set: request.body,
      })
    );
  }
  async destroy(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.json(
      await FingerPrint.findByIdAndRemove(request.params.fingerprint_id)
    );
  }
}

export const fingerPrintController = new FingerPrintController();
