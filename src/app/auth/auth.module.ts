import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { TeacherRegisterComponent } from './teacher-register/teacher-register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { RegisterLandingComponent } from './register-landing/register-landing.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    TeacherRegisterComponent,
    StudentRegisterComponent,
    RegisterLandingComponent,
 
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    MatTabsModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule
  
  ],
 
})
export class AuthModule { }
