import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { ConcatusComponent } from './concatus/concatus.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { SharedRoutingModule } from './shared/shared-routing.module';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [  
  {
  path:'contact',
  component:ConcatusComponent
},
{
  path:'about',
  component:AboutusComponent
},
{
  path:'home',
  component:HomeComponent
},
{
path:'',
component:HomeComponent
},
{
  path:'auth',
  loadChildren:()=>AuthModule
},
{
  path:'admin',
  loadChildren:()=>AdminModule
},

{
  path: 'course',
  component: CourseComponent
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
