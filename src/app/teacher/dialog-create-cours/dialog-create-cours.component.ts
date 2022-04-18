import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-dialog-create-cours',
  templateUrl: './dialog-create-cours.component.html',
  styleUrls: ['./dialog-create-cours.component.css']
})
export class DialogCreateCoursComponent implements OnInit {


  parsAccountid: any = localStorage.getItem('IdAccount');
  acoountTeacherId: any = parseInt(this.parsAccountid);
  courseid = 9999
  parscategoryid: any;
  categoryid: any;
  selectedFile: any;
  P_picture: any;
  AllCategory: any = {};
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private http: HttpClient, public auth: AuthserviceService) {

    this.http.get('https://localhost:44363/api/category/getCategory').subscribe((result) => {

      this.AllCategory = result;
    })
  }


  onSubmit(data: any) {
    console.warn(data);
    data.courseimage = this.P_picture
    this.parscategoryid = data.categoryid;
    data.categoryid = parseInt(this.parscategoryid);
    this.http.post('https://localhost:44363/api/Course/CreateCourse', data).subscribe((result) => {

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
