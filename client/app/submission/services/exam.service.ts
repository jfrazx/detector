import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { API } from '../../config';
import { Exam } from '../models';

@Injectable()
export class ExamService {
  private base = `${API}/exams`;

  constructor(private http: HttpClient) {}

  getExams(): Observable<Exam[]> {
    return this.http
      .get<Exam[]>(this.base)
      .pipe(catchError((error: any) => ErrorObservable.create(error.json())));
  }

  createExam(exam: Exam): Observable<Exam> {
    return this.http
      .post<Exam>(this.base, exam)
      .pipe(catchError((error: any) => ErrorObservable.create(error.json())));
  }

  updateExam(exam: Exam): Observable<Exam> {
    return this.http
      .put<Exam>(`${this.base}/${exam._id}`, exam)
      .pipe(catchError((error: any) => ErrorObservable.create(error.json())));
  }

  removeExam(exam: Exam): Observable<Exam> {
    return this.http
      .delete<Exam>(`${this.base}/${exam._id}`)
      .pipe(catchError((error: any) => ErrorObservable.create(error.json())));
  }
}
