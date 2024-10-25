import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoringTypeComponent } from './storing-type.component';

describe('StoringTypeComponent', () => {
  let component: StoringTypeComponent;
  let fixture: ComponentFixture<StoringTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoringTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoringTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
