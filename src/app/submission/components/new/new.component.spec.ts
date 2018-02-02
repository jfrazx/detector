import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackNewComponent } from './new.component';

describe('StackNewComponent', () => {
  let component: StackNewComponent;
  let fixture: ComponentFixture<StackNewComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [StackNewComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StackNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
