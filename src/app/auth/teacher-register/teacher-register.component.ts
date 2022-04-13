import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.css']
})
export class TeacherRegisterComponent implements OnInit {

  roldeidTeacher = 3
  teacherid = 99996
  teacherstatus="waiting"
  selectedFile: any;
  P_picture: any;

  selectedFileCertificate: any;
  C_certificate:any;

 constructor(private router: Router, private http: HttpClient, public auth: AuthserviceService) { }

  onSubmit(data: any) {
    console.warn(data);
    data.profilepicture = this.P_picture
    data.certificate = this.C_certificate
    this.auth.createAccount(data);
    // this.router.navigate(['auth/login'])
    // .then(() => {
    //   window.location.reload();
    // });
    //     this.http.post('https://localhost:44363/api/Account/createAccount',data).subscribe((result)=>{
    // console.warn("result",result);
    //     });
  }


  // upolad profilepicture
  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);

    this.P_picture = this.selectedFile.name;

    this.http.post('https://localhost:44363/api/Account/UploadImage', fd).subscribe(res => {
      // console.log(res);
    });
  }



    // upolad Certificate
    onFileSelectedCertificate(event: any) {
      this.selectedFileCertificate = <File>event.target.files[0];
      const fd = new FormData();
      fd.append('image', this.selectedFileCertificate, this.selectedFileCertificate.name);
  
      this.C_certificate = this.selectedFileCertificate.name;
  
      this.http.post('https://localhost:44363/api/Account/UploadCertificate', fd).subscribe(res => {
        // console.log(res);
      });
    }




 
  ngOnInit(): void {
    this.auth.getAll();

  }

}
