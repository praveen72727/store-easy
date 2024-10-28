import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostRegistrationComponent } from './host-registration.component';

describe('HostRegistrationComponent', () => {
  let component: HostRegistrationComponent;
  let fixture: ComponentFixture<HostRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
