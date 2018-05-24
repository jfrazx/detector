import { tap, filter, take, switchMap, map } from 'rxjs/operators';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Store } from '@ngrx/store';

import * as fromStore from '../store';
import { Location } from '../models';

@Injectable()
export class LocationExistsGuard implements CanActivate {
  constructor(private store: Store<fromStore.FacilitiesState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => this.hasLocation(parseInt(route.params.locationId, 10)))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getLocationLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadLocations());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }

  hasLocation(id: number): Observable<boolean> {
    return this.store
      .select(fromStore.getLocationEntities)
      .pipe(map(entities => Boolean(entities[id])));
  }
}
