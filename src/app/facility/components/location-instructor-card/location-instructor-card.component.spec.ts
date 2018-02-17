import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationInstructorCardComponent } from './location-instructor-card.component';

describe('LocationInstructorCardComponent', () => {
  let component: LocationInstructorCardComponent;
  let fixture: ComponentFixture<LocationInstructorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationInstructorCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationInstructorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
