import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { Stack } from '../models';
import { API } from '../../config';

@Injectable()
export class StackService {
  private base = `${API}/stacks`;

  constructor(private http: HttpClient) {}

  getStacks(): Observable<Stack[]> {
    return this.http
      .get<Stack[]>(this.base)
      .pipe(catchError((error: any) => ErrorObservable.create(error.json())));
  }

  createStack(stack: Stack): Observable<Stack> {
    return this.http
      .post<Stack>(this.base, stack)
      .pipe(catchError((error: any) => ErrorObservable.create(error.json())));
  }

  updateStack(stack: Stack): Observable<Stack> {
    return this.http
      .put<Stack>(`${this.base}/${stack._id}`, stack)
      .pipe(catchError((error: any) => ErrorObservable.create(error.json())));
  }

  removeStack(stack: Stack): Observable<Stack> {
    return this.http
      .delete<Stack>(`${this.base}/${stack._id}`)
      .pipe(catchError((error: any) => ErrorObservable.create(error.json())));
  }
}
