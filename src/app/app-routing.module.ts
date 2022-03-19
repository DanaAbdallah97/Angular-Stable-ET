import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ConcatusComponent } from './concatus/concatus.component';
import { HomeComponent } from './home/home.component';

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
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
