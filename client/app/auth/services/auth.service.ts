import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { Login, Register } from '../models';
import { User } from '../../admin';

import { API } from '../../config';

@Injectable()
export class AuthService {
  private base = `${API}/auth`;

  constructor(private http: HttpClient) {}

  register(user: Register): Observable<void> {
    return this.http
      .post<void>(`${this.base}/register`, user)
      .pipe(catchError((error: any) => ErrorObservable.create(error.json())));
  }

  login(user: Login): Observable<User> {
    return this.http
      .post<User>(`${this.base}/login`, user)
      .pipe(catchError((error: any) => ErrorObservable.create(error.json())));
  }

  logout(): Observable<User> {
    return this.http
      .delete<User>(`${this.base}/logout`)
      .pipe(catchError((error: any) => ErrorObservable.create(error.json())));
  }
}
