import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/observable/throw';

import { API } from '../../config';
import { Exam } from '../models';

@Injectable()
export class ExamService {
  private base = `${API}/exams`;

  constructor(private http: HttpClient) {}

  getExams(): Observable<Exam[]> {
    return this.http
      .get<Exam[]>(this.base)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  createExam(exam: Exam): Observable<Exam> {
    return this.http
      .post<Exam>(this.base, exam)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  updateExam(exam: Exam): Observable<Exam> {
    return this.http
      .put<Exam>(`${this.base}/${exam._id}`, exam)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  removeExam(exam: Exam): Observable<Exam> {
    return this.http
      .delete<Exam>(`${this.base}/${exam._id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
