import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';

const routes: Routes = [
  {
    path: 'teacherDashboard',
    component: TeacherdashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
