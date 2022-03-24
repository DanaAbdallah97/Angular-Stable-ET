import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterLandingComponent } from './register-landing/register-landing.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { TeacherRegisterComponent } from './teacher-register/teacher-register.component';



const routes: Routes = 
[
  {
    path:'login',
    component:LoginComponent
    },
  {
path:'registerlanding',
component:RegisterLandingComponent
},
{
path:'studentregister',
component:StudentRegisterComponent
},
{
  path:'teacherregister',
  component:TeacherRegisterComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
