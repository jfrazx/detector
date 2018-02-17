import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { API } from '../../config';
import { Exam } from '../../submission';

@Injectable()
export class ExamService {
  private base = `${API}/exams`;

  constructor(private http: HttpClient) {}

  getExams(): Observable<Exam> {
    return this.http
      .get<Exam>(this.base)
      .pipe(catchError(error => Observable.throw(error)));
  }

  updateExam(exam: Exam): Observable<Exam> {
    return this.http
      .put<Exam>(`${this.base}/${exam._id}`, exam)
      .pipe(catchError(error => Observable.throw(error)));
  }

  createExam(exam: Exam): Observable<Exam> {
    return this.http
      .post<Exam>(this.base, exam)
      .pipe(catchError(error => Observable.throw(error)));
  }

  removeExam(id: string): Observable<Exam> {
    return this.http
      .delete<Exam>(`${this.base}/${id}`)
      .pipe(catchError(error => Observable.throw(error)));
  }
}
