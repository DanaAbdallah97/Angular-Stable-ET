import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from '../appointment/appointment.component';
import { AppointmentTeacherComponent } from './appointment-teacher/appointment-teacher.component';
import { ManageCoursesComponent } from './manage-courses/manage-courses.component';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';

const routes: Routes = [
  {
    path: 'teacherDashboard',
    component: TeacherdashboardComponent
  },
  {
    path: 'appointment',
    component: AppointmentTeacherComponent
  },
  {
    path: 'manageCourse',
    component: ManageCoursesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    FormsModule],

  exports: [HttpClientModule,FormsModule]
})
export class TeacherRoutingModule { }
