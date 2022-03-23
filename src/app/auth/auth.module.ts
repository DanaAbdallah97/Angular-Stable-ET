import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

import { SharedModule } from '../shared/shared.module';
import { NavregisterComponent } from './navregister/navregister.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { TeacherRegisterComponent } from './teacher-register/teacher-register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { StudentRegisterdesignComponent } from './student-registerdesign/student-registerdesign.component';
import { TeacherRegisterdesignComponent } from './teacher-registerdesign/teacher-registerdesign.component';
import { RegisterLandingComponent } from './register-landing/register-landing.component';




@NgModule({
  declarations: [
    LoginComponent,
    NavregisterComponent,
    TeacherRegisterComponent,
    StudentRegisterComponent,
    StudentRegisterdesignComponent,
    TeacherRegisterdesignComponent,
    RegisterLandingComponent,
 
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    MatTabsModule,
    MatSelectModule,
    MatFormFieldModule
  
  ]
})
export class AuthModule { }
