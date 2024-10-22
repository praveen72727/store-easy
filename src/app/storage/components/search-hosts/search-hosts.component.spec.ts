import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHostsComponent } from './search-hosts.component';

describe('SearchHostsComponent', () => {
  let component: SearchHostsComponent;
  let fixture: ComponentFixture<SearchHostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchHostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
