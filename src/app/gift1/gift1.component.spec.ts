import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gift1Component } from './gift1.component';

describe('Gift1Component', () => {
  let component: Gift1Component;
  let fixture: ComponentFixture<Gift1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gift1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gift1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
