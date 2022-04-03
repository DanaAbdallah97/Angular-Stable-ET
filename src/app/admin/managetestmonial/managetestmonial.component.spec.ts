import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetestmonialComponent } from './managetestmonial.component';

describe('ManagetestmonialComponent', () => {
  let component: ManagetestmonialComponent;
  let fixture: ComponentFixture<ManagetestmonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagetestmonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagetestmonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
