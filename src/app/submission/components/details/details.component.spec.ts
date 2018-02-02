import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackDetailsComponent } from './details.component';

describe('StackDetailsComponent', () => {
  let component: StackDetailsComponent;
  let fixture: ComponentFixture<StackDetailsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [StackDetailsComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StackDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
