import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GesturesComponent } from './gestures.component';

describe('GesturesComponent', () => {
  let component: GesturesComponent;
  let fixture: ComponentFixture<GesturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GesturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GesturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
