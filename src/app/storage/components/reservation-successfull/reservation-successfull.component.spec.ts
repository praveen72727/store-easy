import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationSuccessfullComponent } from './reservation-successfull.component';

describe('ReservationSuccessfullComponent', () => {
  let component: ReservationSuccessfullComponent;
  let fixture: ComponentFixture<ReservationSuccessfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationSuccessfullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationSuccessfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
