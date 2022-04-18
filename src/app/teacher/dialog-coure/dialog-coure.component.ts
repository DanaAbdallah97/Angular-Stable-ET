import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-dialog-coure',
  templateUrl: './dialog-coure.component.html',
  styleUrls: ['./dialog-coure.component.css']
})
export class DialogCoureComponent implements OnInit {

  CourseInformation: any;

  selectedFile: any;
  P_picture: any;
  P_p: any;


  courseid: any;
  parsAccountid: any = localStorage.getItem('IdAccount');
  acoountTeacherId: any = parseInt(this.parsAccountid);
  categoryid: any;
  coursename: any;
  coursedescription: any;
  courseimage: any;
  courserate: any;
  coursevideo: any;



  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private http: HttpClient, public auth: AuthserviceService) {
    this.CourseInformation = this.data;

    console.log('course id ')
    console.log(data.body.Course_id)
    this.courseid = data.body.Course_id;
    this.categoryid = data.body.Category_id;
    this.coursename = data.body.Course_name;
    this.coursedescription = data.body.Course_description;
    this.courseimage = data.body.Course_image;
    this.courserate = data.body.Course_rate;
    this.coursevideo = data.body.Course_video;
  }

  onSubmit(data: any) {
    console.warn(data);
    data.courseimage = this.P_picture;
    this.http.put('https://localhost:44363/api/Course/UpdateCourse',data).subscribe((result)=>{
      console.log('Update Course' + result);
    })
    window.location.reload();
  }


  // Uplaod profilepicture
  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);

    this.P_picture = this.selectedFile.name;

    this.http.post('https://localhost:44363/api/Account/UploadImage', fd).subscribe(res => {

      // console.log(res);
    });
  }


  ngOnInit(): void {
  }

}
