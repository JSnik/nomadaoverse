import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelView2Component } from './hotel-view2.component';

describe('HotelView2Component', () => {
  let component: HotelView2Component;
  let fixture: ComponentFixture<HotelView2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelView2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
