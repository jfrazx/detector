import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Stack } from '../models';
import { API } from '../../config';

@Injectable()
export class StackService {
  private base = `${API}/stacks`;

  constructor(private http: HttpClient) {}

  getStacks(): Observable<Stack[]> {
    return this.http
      .get<Stack[]>(this.base)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  createStack(stack: Stack): Observable<Stack> {
    return this.http
      .post<Stack>(this.base, stack)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  updateStack(stack: Stack): Observable<Stack> {
    return this.http
      .put<Stack>(`${this.base}/${stack._id}`, stack)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  destroyStack(id: string): Observable<Stack> {
    return this.http
      .delete<Stack>(`${this.base}/${id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
