import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Role } from '../models';

import { API } from '../../config';

@Injectable()
export class RoleService {
  private base = `${API}/roles`;

  constructor(private http: HttpClient) {}

  getRoles(): Observable<Role[]> {
    return this.http
      .get<Role[]>(this.base)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  createRole(role: Role): Observable<Role> {
    return this.http
      .post<Role>(this.base, role)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  updateRole(role: Role): Observable<Role> {
    return this.http
      .put<Role>(`${this.base}/${role._id}`, role)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  destroyRole(id: string): Observable<Role> {
    return this.http
      .delete<Role>(`${this.base}/${id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
