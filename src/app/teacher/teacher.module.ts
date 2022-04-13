import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';
import { TeacherHeaderComponent } from './teacher-header/teacher-header.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { AppointmentTeacherComponent } from './appointment-teacher/appointment-teacher.component';


@NgModule({
  declarations: [
    TeacherdashboardComponent,
    TeacherHeaderComponent,
    TeacherProfileComponent,
    AppointmentTeacherComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
