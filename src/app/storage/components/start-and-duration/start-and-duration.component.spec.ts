import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartAndDurationComponent } from './start-and-duration.component';

describe('StartAndDurationComponent', () => {
  let component: StartAndDurationComponent;
  let fixture: ComponentFixture<StartAndDurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartAndDurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartAndDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
