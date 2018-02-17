import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

import { Location } from '../../models';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css'],
})
export class LocationListComponent implements OnInit {
  locations$: Observable<Location[]>;

  constructor(private store: Store<fromStore.FacilitiesState>) {}

  ngOnInit() {
    this.locations$ = this.store.select(fromStore.getLocations);

    this.store.dispatch(new fromStore.LoadLocations());
  }
}
