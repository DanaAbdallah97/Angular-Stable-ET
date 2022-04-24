import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';
import { TeacherHeaderComponent } from './teacher-header/teacher-header.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { AppointmentTeacherComponent } from './appointment-teacher/appointment-teacher.component';
import { ManageCoursesComponent } from './manage-courses/manage-courses.component';
import { DialogCoureComponent } from './dialog-coure/dialog-coure.component';

import { MatDialogModule } from '@angular/material/dialog';
import { DialogCreateCoursComponent } from './dialog-create-cours/dialog-create-cours.component';
import { NotAcceptTeacherComponent } from './not-accept-teacher/not-accept-teacher.component';
import { WaitingTeacherComponent } from './waiting-teacher/waiting-teacher.component';
import { DialogAppointmentComponent } from '../dialog-appointment/dialog-appointment.component';


@NgModule({
  declarations: [
    TeacherdashboardComponent,
    TeacherHeaderComponent,
    TeacherProfileComponent,
    AppointmentTeacherComponent,
    ManageCoursesComponent,
    DialogCoureComponent,
    DialogCreateCoursComponent,
    NotAcceptTeacherComponent,
    WaitingTeacherComponent,
    DialogAppointmentComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MatDialogModule
  ]
})
export class TeacherModule { }
