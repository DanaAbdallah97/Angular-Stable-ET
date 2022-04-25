import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AdminUpdateProfileComponent } from './admin-update-profile/admin-update-profile.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ChartComponent } from './chart/chart.component';
import { CountComponent } from './count/count.component';
import { ManageContactUsComponent } from './manage-contact-us/manage-contact-us.component';
import { ManagePageComponent } from './manage-page/manage-page.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { ManageTeachersComponent } from './manage-teachers/manage-teachers.component';
import { ManagecategoryComponent } from './managecategory/managecategory.component';
import { ManagetestmonialComponent } from './managetestmonial/managetestmonial.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  {
    path: 'admindashboard',
    component: AdmindashboardComponent,
  },
  {
    path: 'managecategory',
    component: ManagecategoryComponent
  },
  {
    path: 'managePage',
    component: ManagePageComponent
  },
  {
    path: 'managetestmonial',
    component: ManagetestmonialComponent
  }, {
    path: 'contactUs',
    component: ManageContactUsComponent
  }, {
    path: 'ManageTeachers',
    component: ManageTeachersComponent
  }, {
    path: 'ManageStudents',
    component: ManageStudentsComponent
  }, {
    path: 'count',
    component: CountComponent
  },
  {
    path:'chart',
    component:ChartComponent
  },
  {
    path:'updateProfile',
    component:AdminUpdateProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
