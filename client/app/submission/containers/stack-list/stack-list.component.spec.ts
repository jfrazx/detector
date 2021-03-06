import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackListComponent } from './list.component';

describe('StackListComponent', () => {
  let component: StackListComponent;
  let fixture: ComponentFixture<StackListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [StackListComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
