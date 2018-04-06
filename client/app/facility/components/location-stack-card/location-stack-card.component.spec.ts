import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationStackCardComponent } from './location-stack-card.component';

describe('LocationStackCardComponent', () => {
  let component: LocationStackCardComponent;
  let fixture: ComponentFixture<LocationStackCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationStackCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationStackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
