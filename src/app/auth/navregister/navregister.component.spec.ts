import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavregisterComponent } from './navregister.component';

describe('NavregisterComponent', () => {
  let component: NavregisterComponent;
  let fixture: ComponentFixture<NavregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
