import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelView3Component } from './hotel-view3.component';

describe('HotelView3Component', () => {
  let component: HotelView3Component;
  let fixture: ComponentFixture<HotelView3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelView3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelView3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
