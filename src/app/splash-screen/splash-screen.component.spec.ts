import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { splashScreenModule } from './splash-screen.component';

describe('splashScreenModule', () => {
  let component: splashScreenModule;
  let fixture: ComponentFixture<splashScreenModule>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ splashScreenModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(splashScreenModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
