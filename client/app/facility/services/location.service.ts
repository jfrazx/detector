import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Location } from '../models';
import { API } from '../../config';

@Injectable()
export class LocationService {
  private base = `${API}/locations`;

  constructor(private http: HttpClient) {}

  getLocations(): Observable<Location[]> {
    return this.http
      .get<Location[]>(this.base)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  createLocation(location: Location): Observable<Location> {
    return this.http
      .post<Location>(this.base, location)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  updateLocation(location: Location): Observable<Location> {
    return this.http
      .put<Location>(`${this.base}/${location._id}`, location)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  removeLocation(location: Location): Observable<Location> {
    return this.http
      .delete<Location>(`${this.base}/${location._id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
