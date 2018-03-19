import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

import { Location, User, Stack } from '../../models';

@Component({
  selector: 'app-location-view',
  templateUrl: './location-view.component.html',
  styleUrls: ['location-view.component.scss'],
})
export class LocationViewComponent implements OnInit {
  stacks$: Observable<Stack[]>;
  location$: Observable<Location>;
  users$: Observable<User[]>;

  constructor(private store: Store<fromStore.FacilitiesState>) {}

  ngOnInit() {
    this.stacks$ = this.store.select(fromStore.fromSubmission.getStacks);
    this.users$ = this.store.select(fromStore.getUsers);

    this.store.dispatch(new fromStore.fromSubmission.LoadStacks());
  }

  onCreate(event: Location): void {
    this.store.dispatch(new fromStore.LocationCreate(event));
  }

  onUpdate(event: Location): void {
    this.store.dispatch(new fromStore.LocationUpdate(event));
  }

  onRemove(event: Location): void {
    this.store.dispatch(new fromStore.LocationRemove(event));
  }
}
