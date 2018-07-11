import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { Capability } from '../models';

import { API } from '../../config';

@Injectable()
export class CapabilityService {
  private base = `${API}/capabilities`;

  constructor(private http: HttpClient) {}

  getCapabilities(): Observable<Capability[]> {
    return this.http
      .get<Capability[]>(this.base)
      .pipe(catchError((error: any) => ErrorObservable.create(error.json())));
  }

  createCapability(capability: Capability): Observable<Capability> {
    return this.http
      .post<Capability>(this.base, capability)
      .pipe(catchError((error: any) => ErrorObservable.create(error.json())));
  }

  updateCapability(capability: Capability): Observable<Capability> {
    return this.http
      .put<Capability>(`${this.base}/${capability._id}`, capability)
      .pipe(catchError((error: any) => ErrorObservable.create(error.json())));
  }

  destroyCapabilitys(id: string): Observable<Capability> {
    return this.http
      .delete<Capability>(`${this.base}/${id}`)
      .pipe(catchError((error: any) => ErrorObservable.create(error.json())));
  }
}
