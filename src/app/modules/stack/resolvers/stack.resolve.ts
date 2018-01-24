import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { StackService } from '../services';

import { Stack } from '../../../models';


@Injectable()
export class StackResolve implements Resolve<Stack> {
  constructor(private stackService: StackService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Stack> {
    return this.stackService.show(route.paramMap.get('id'));
  }
}
