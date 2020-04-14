import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavarFooterComponent } from './navar-footer.component';

describe('NavarFooterComponent', () => {
  let component: NavarFooterComponent;
  let fixture: ComponentFixture<NavarFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavarFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavarFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
