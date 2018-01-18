import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackShowComponent } from './show.component';

describe('StackShowComponent', () => {
  let component: StackShowComponent;
  let fixture: ComponentFixture<StackShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
