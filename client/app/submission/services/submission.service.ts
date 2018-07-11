import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { Submission } from '../models';
import { API } from '../../config';

@Injectable()
export class SubmissionService {
  private base = `${API}/submissions`;

  constructor(private http: HttpClient) {}

  getSubmissions(): Observable<Submission[]> {
    return this.http
      .get<Submission[]>(this.base)
      .pipe(catchError((error: any) => ErrorObservable.create(error.json())));
  }

  createSubmission(submission: Submission): Observable<Submission> {
    return this.http
      .post<Submission>(this.base, submission)
      .pipe(catchError((error: any) => ErrorObservable.create(error.json())));
  }

  updateSubmission(submission: Submission): Observable<Submission> {
    return this.http
      .put<Submission>(`${this.base}/${submission._id}`, submission)
      .pipe(catchError((error: any) => ErrorObservable.create(error.json())));
  }

  removeSubmission(submission: Submission): Observable<Submission> {
    return this.http
      .delete<Submission>(`${this.base}/${submission._id}`)
      .pipe(catchError((error: any) => ErrorObservable.create(error.json())));
  }
}
