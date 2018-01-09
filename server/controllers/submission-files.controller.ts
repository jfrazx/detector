// import { Submission } from '../models';
// import { Request, Response, Next } from 'express';

// class SubmissionFilesController  {
//   async index(request: Request, response: Response, next: Next): Promise<void> {
//     response.json(
//       await SubmissionFiles.find({})
//         .lean()
//     );
//   }
//   async show(request: Request, response: Response, next: Next): Promise<void> {
//     response.json(
//       await SubmissionFiles.findById(request.params.id)
//         .lean()
//     );
//   }
//   async create(request: Request, response: Response, next: Next): Promise<void> {
//     response.json(await SubmissionFiles.create(request.body));
//   }
//   async update(request: Request, response: Response, next: Next): Promise<void> {
//     response.json(
//       await SubmissionFiles.findByIdAndUpdate(request.params.id, { $set: request.body })
//         .lean()
//     );
//   }
//   async destroy(request: Request, response: Response, next: Next): Promise<void> {
//     response.json(
//       await SubmissionFiles.findByIdAndRemove(request.params.id)
//         .lean()
//     );
//   }
// }

// export const submissionFilesController = new SubmissionFilesController();
