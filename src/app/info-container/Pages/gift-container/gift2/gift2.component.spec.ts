import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gift2Component } from './gift2.component';

describe('Gift2Component', () => {
  let component: Gift2Component;
  let fixture: ComponentFixture<Gift2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gift2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gift2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
