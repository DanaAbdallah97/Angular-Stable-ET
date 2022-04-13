import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ManagecategoryComponent } from './managecategory/managecategory.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { SharedModule } from '../shared/shared.module';
import { ManagePageComponent } from './manage-page/manage-page.component';
import { CreateaboutusComponent } from './createaboutus/createaboutus.component';
import { ManagetestmonialComponent } from './managetestmonial/managetestmonial.component';
import { ManageContactUsComponent } from './manage-contact-us/manage-contact-us.component';
import { ManageTeachersComponent } from './manage-teachers/manage-teachers.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { CountComponent } from './count/count.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { SendemailComponent } from './sendemail/sendemail.component';
import { ChartComponent } from './chart/chart.component';
@NgModule({
  declarations: [
    AdmindashboardComponent,
    ManagecategoryComponent,
    CreatecategoryComponent,
    ManagePageComponent,
    CreateaboutusComponent,
    ManagetestmonialComponent,
    ManageContactUsComponent,
    ManageTeachersComponent,
    ManageStudentsComponent,
    CountComponent,
    UpdateProfileComponent,
    SendemailComponent,
    ChartComponent,
         
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
    
    
  ]
})
export class AdminModule { }
