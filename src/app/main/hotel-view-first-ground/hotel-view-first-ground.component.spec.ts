import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelViewFirstGroundComponent } from './hotel-view-first-ground.component';

describe('HotelViewFirstGroundComponent', () => {
  let component: HotelViewFirstGroundComponent;
  let fixture: ComponentFixture<HotelViewFirstGroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelViewFirstGroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelViewFirstGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
