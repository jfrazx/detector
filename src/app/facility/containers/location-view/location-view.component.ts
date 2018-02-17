import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

import { Location, Instructor, Stack } from '../../models';

@Component({
  selector: 'app-location-view',
  templateUrl: './location-view.component.html',
  styleUrls: ['./location-view.component.css'],
})
export class LocationViewComponent implements OnInit {
  stacks$: Observable<Stack[]>;
  instructors$: Observable<Instructor[]>;
  location$: Observable<Location>;

  constructor(private store: Store<fromStore.FacilitiesState>) {}

  ngOnInit() {
    this.stacks$ = this.store.select(fromStore.fromSubmission.getStacks);
    // this.instructors$ = this.store.select(fromStore.getInstructors)

    this.store.dispatch(new fromStore.fromSubmission.LoadStacks());
  }
}
