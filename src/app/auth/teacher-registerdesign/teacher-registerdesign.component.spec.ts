import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRegisterdesignComponent } from './teacher-registerdesign.component';

describe('TeacherRegisterdesignComponent', () => {
  let component: TeacherRegisterdesignComponent;
  let fixture: ComponentFixture<TeacherRegisterdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherRegisterdesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherRegisterdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
