import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegisterdesignComponent } from './student-registerdesign.component';

describe('StudentRegisterdesignComponent', () => {
  let component: StudentRegisterdesignComponent;
  let fixture: ComponentFixture<StudentRegisterdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRegisterdesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegisterdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
