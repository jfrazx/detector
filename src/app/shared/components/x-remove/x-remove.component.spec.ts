import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XRemoveComponent } from './x-remove.component';

describe('XRemoveComponent', () => {
  let component: XRemoveComponent;
  let fixture: ComponentFixture<XRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
