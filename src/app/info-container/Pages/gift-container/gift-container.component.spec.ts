import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftContainerComponent } from './gift-container.component';

describe('GiftContainerComponent', () => {
  let component: GiftContainerComponent;
  let fixture: ComponentFixture<GiftContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
