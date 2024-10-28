import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostWelcomePageComponent } from './host-welcome-page.component';

describe('HostWelcomePageComponent', () => {
  let component: HostWelcomePageComponent;
  let fixture: ComponentFixture<HostWelcomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostWelcomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
