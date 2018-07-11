import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { Student } from '../models';
import { API } from '../../config';

@Injectable()
export class StudentService {
  private base = `${API}/students`;

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http
      .get<Student[]>(this.base)
      .pipe(catchError((error: any) => ErrorObservable.create(error.json())));
  }

  createStudent(student: Student): Observable<Student> {
    return this.http
      .post<Student>(this.base, student)
      .pipe(catchError((error: any) => ErrorObservable.create(error.json())));
  }

  updateStudent(student: Student): Observable<Student> {
    return this.http
      .put<Student>(`${this.base}/${student._id}`, student)
      .pipe(catchError((error: any) => ErrorObservable.create(error.json())));
  }

  removeStudent(student: Student): Observable<Student> {
    return this.http
      .delete<Student>(`${this.base}/${student._id}`)
      .pipe(catchError((error: any) => ErrorObservable.create(error.json())));
  }
}
