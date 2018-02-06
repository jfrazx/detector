import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { SubmissionFile } from '../models';
import { API } from '../../config';

@Injectable()
export class SubmissionFileService {
  private base = `${API}/submission_files`;

  constructor(private http: HttpClient) {}

  getStacks(): Observable<SubmissionFile[]> {
    return this.http
      .get<SubmissionFile[]>(this.base)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  createSubmissionFile(
    submissionFile: SubmissionFile
  ): Observable<SubmissionFile> {
    return this.http
      .post<SubmissionFile>(this.base, submissionFile)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  updateSubmissionFile(
    submissionFile: SubmissionFile
  ): Observable<SubmissionFile> {
    return this.http
      .put<SubmissionFile>(`${this.base}/${submissionFile._id}`, submissionFile)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  removeSubmissionFile(
    submissionFile: SubmissionFile
  ): Observable<SubmissionFile> {
    return this.http
      .delete<SubmissionFile>(`${this.base}/${submissionFile._id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
