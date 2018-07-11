import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { Belt } from '../models';
import { API } from '../../config';

@Injectable()
export class BeltService {
  private base = `${API}/belts`;

  constructor(private http: HttpClient) {}

  getBelts(): Observable<Belt[]> {
    return this.http
      .get<Belt[]>(this.base)
      .pipe(catchError(error => ErrorObservable.create(error)));
  }

  removeBelt(belt: Belt): Observable<Belt> {
    return this.http
      .delete<Belt>(`${this.base}/${belt._id}`)
      .pipe(catchError(error => ErrorObservable.create(error)));
  }

  updateBelt(belt: Belt): Observable<Belt> {
    return this.http
      .put<Belt>(`${this.base}/${belt._id}`, belt)
      .pipe(catchError(error => ErrorObservable.create(error)));
  }

  createBelt(belt: Belt): Observable<Belt> {
    return this.http
      .post<Belt>(this.base, belt)
      .pipe(catchError(error => ErrorObservable.create(error)));
  }
}
