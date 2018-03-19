import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { User } from '../models';

import { API } from '../../config';

@Injectable()
export class UserService {
  private base = `${API}/users`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.base)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  createUser(user: User): Observable<User> {
    return this.http
      .post<User>(this.base, user)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  updateUser(user: User): Observable<User> {
    return this.http
      .put<User>(`${this.base}/${user.id}`, user)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  removeUser(id: string): Observable<User> {
    return this.http
      .delete<User>(`${this.base}/${id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
