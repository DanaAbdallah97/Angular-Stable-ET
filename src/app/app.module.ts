import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConcatusComponent } from './concatus/concatus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SharedRoutingModule } from './shared/shared-routing.module';
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { tokeninterceptor } from './interceptor/token.interceptor';
import { CourseComponent } from './course/course.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SpinnerComponent } from './spinner/spinner.component';

import { AuthModule } from './auth/auth.module';



import { AppointmentComponent } from './appointment/appointment.component';
import { SearchTeacherComponent } from './search-teacher/search-teacher.component';
import { TeacherCourseComponent } from './teacher-course/teacher-course.component';
import { UpdateProfileStudentComponent } from './update-profile-student/update-profile-student.component';
import { AppointmentStudentComponent } from './appointment-student/appointment-student.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConcatusComponent,
    AboutusComponent,
    CategoriesComponent,
    CourseComponent,
    TestimonialComponent,
    SpinnerComponent,
    AppointmentComponent,
    SearchTeacherComponent,
    TeacherCourseComponent,
    UpdateProfileStudentComponent,
    AppointmentStudentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    SharedRoutingModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot(),
    ToastrModule.forRoot({
      timeOut:5000,
      positionClass:'toast-bottom-center',
      preventDuplicates:true,
    }),
    FormsModule,
  ],
  exports:[
    SharedModule,
    AuthModule
    
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass:tokeninterceptor,
    multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
