import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminModule } from './admin/admin.module';
import { AppointmentStudentComponent } from './appointment-student/appointment-student.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AuthModule } from './auth/auth.module';
import { AuthguardGuard } from './authguard.guard';
import { ConcatusComponent } from './concatus/concatus.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { SearchTeacherComponent } from './search-teacher/search-teacher.component';
import { SharedRoutingModule } from './shared/shared-routing.module';
import { SharedModule } from './shared/shared.module';
import { TeacherCourseComponent } from './teacher-course/teacher-course.component';
import { TeacherModule } from './teacher/teacher.module';
import { UpdateProfileStudentComponent } from './update-profile-student/update-profile-student.component';

const routes: Routes = [
  {
    path: 'contact',
    component: ConcatusComponent
  },
  {
    path: 'about',
    component: AboutusComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'teachercourse',
    component: TeacherCourseComponent
  },
  {
    path: 'updateprofilestudent',
    component: UpdateProfileStudentComponent
  },
  {
    path: 'appointmentStudent',
    component: AppointmentStudentComponent
  },

  {
    path: 'search',
    component: SearchTeacherComponent
  },
  {
    path: 'auth',
    loadChildren: () => AuthModule
  },
  {
    path: 'admin',
    loadChildren: () => AdminModule,
    //canActivate:[AuthguardGuard]
  },
  {
    path: 'teacher',
    loadChildren: () => TeacherModule,
    //canActivate:[AuthguardGuard]
  },


  // {
  //   path:'teacher',
  //   loadChildren:()=>,
  //   canActivate:[AuthguardGuard]
  // },
  {
    path: 'course',
    component: CourseComponent
  },

  {
    path: 'appointment',
    component: AppointmentComponent
  }

  // {
  //   path:'shared',
  //   loadChildren:()=>SharedRoutingModule
  // }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
