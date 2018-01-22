import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackIgnoreablesComponent } from './ignoreables.component';

describe('StackIgnoreablesComponent', () => {
  let component: StackIgnoreablesComponent;
  let fixture: ComponentFixture<StackIgnoreablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackIgnoreablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackIgnoreablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
