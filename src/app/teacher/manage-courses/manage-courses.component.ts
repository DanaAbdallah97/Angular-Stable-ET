import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { delay } from 'rxjs';
import { TeacherDashboardService } from 'src/app/service/teacher-dashboard.service';
import { DialogCoureComponent } from '../dialog-coure/dialog-coure.component';
import { DialogCreateCoursComponent } from '../dialog-create-cours/dialog-create-cours.component';

@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.css']
})
export class ManageCoursesComponent implements OnInit {

  TeacherId: any;
  TeacherCourse: any = {};
  CourseIformation:any

  constructor(private httpTeacher: TeacherDashboardService, private http: HttpClient, private dialog: MatDialog) {
    this.TeacherId = localStorage.getItem('IdAccount')

    this.httpTeacher.getCouseByTeacherId(this.TeacherId).subscribe((result) => {
      this.TeacherCourse = result;

    })
  }

  async DeleteCourse(idCourse: any) {
    console.log('idCourse')
    console.log(idCourse);
    this.http.delete('https://localhost:44363/api/Course/deleteCourse/' + idCourse).subscribe(() => {
    })
    await delay(2000); window.location.reload();
  }

  CreatCourse(){
    const dialogCourse = this.dialog.open(DialogCreateCoursComponent,
      {
        width: '80%',
        height:'70%',
        data: {  title: 'Create Course '}
      });

      dialogCourse.afterClosed().subscribe (result=> console.log('Dialog Restult', result));

  }

  EditCoure(courseid1:any, acoountid1:any, categoryid1:any, coursename1:any,coursedescription1:any,courseimage1:any,courserate1:any, coursevideo1:any)
  {   
      this.CourseIformation={
        Course_id:courseid1,
        Account_id:acoountid1,
        Category_id: categoryid1,
        Course_name:coursename1,
        Course_description:coursedescription1,
        Course_image:courseimage1,
        Course_rate:courserate1,
        Course_video:coursevideo1,
      }    

      // console.log('sssssss',this.CourseIformation)

     const dialogCourse = this.dialog.open(DialogCoureComponent,
      {
        width: '80%',
        height:'70%',
        // , Course_id:courseid1, Course_name:coursename1, Course_description:coursedescription1,Course_image:courseimage1,Course_video:coursevideo1
        data: {  title: 'Edit Course '+this.CourseIformation.Course_name, body:this.CourseIformation}
      });

      dialogCourse.afterClosed().subscribe (result=> console.log('Dialog Restult', result));
  }



  ngOnInit(): void {
  }

}
