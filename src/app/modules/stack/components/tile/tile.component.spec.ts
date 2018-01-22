import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackTileComponent } from './tile.component';

describe('StackTileComponent', () => {
  let component: StackTileComponent;
  let fixture: ComponentFixture<StackTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
