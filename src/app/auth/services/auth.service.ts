import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/throw';

import { User } from '../../facility';

import { API } from '../../config';

@Injectable()
export class AuthService {
  private base = `${API}/auth`;

  constructor(private http: HttpClient) {}

  register(user: User): Observable<void> {
    return this.http
      .post(`${this.base}/register`, user)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  login(user: User): Observable<User> {
    return this.http
      .post<User>(`${this.base}/login`, user)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  logout(): Observable<void> {
    return this.http
      .delete<void>(`${this.base}/logout`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
