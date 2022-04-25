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
  text = 'Please Enter Valid Name';
  text3 = 'Please Enter Valid Password';
  text4 = 'Please Enter Valid Email';
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
  text5 = 'Please Enter Valid Phone Number';
  text6= 'Please Choose Gender';


  selectedFileCertificate: any;
  C_certificate:any;

 constructor(private router: Router, private http: HttpClient, public auth: AuthserviceService) { }

  onSubmit(data: any) {
    console.warn(data);
    data.profilepicture = this.P_picture
    data.certificate = this.C_certificate
    this.auth.createAccount(data);
    this.router.navigate(['auth/login'])
    .then(() => {
      window.location.reload();
    });
  }

  selectedpic: string = '';
  showmsg8=true;
  text8='Please Choose Profile Pic';
  // upolad profilepicture
  onFileSelected(event: any) {

    this.selectedpic = event.target.value;
    if(this.selectedpic != ''){
    this.showmsg8=false;
    }
    else{
      this.showmsg8=true;
      this.text8= 'Please Choose Profile Pic';
    }
    

    this.selectedFile = <File>event.target.files[0];
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);

    this.P_picture = this.selectedFile.name;

    this.http.post('https://localhost:44363/api/Account/UploadImage', fd).subscribe(res => {
      // console.log(res);
    });
  }


  selectedCert: string = '';
  showmsg11=true;
  text11='Please Choose Certificate';
    // upolad Certificate
    onFileSelectedCertificate(event: any) {

      this.selectedCert = event.target.value;
      if(this.selectedCert != ''){
      this.showmsg11=false;
      }
      else{
        this.showmsg11=true;
        this.text11= 'Please Choose Certificate';
      }


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

  showmsg=true;
  keyup(value: string) {

    if(value.length>=3)
    {
      this.showmsg=false;
    }
    else
 {
  this.showmsg=true;
  this.text = 'Please Enter Valid Name';
 }
  }

  showmsg2=true;
  keyup2(value: string) {

    if(value.length>=3)
    {
      this.showmsg2=false;
    }
    else
 {
  this.showmsg2=true;
  this.text = 'Please Enter Valid Name';
 }
  }

  showmsg3=true;
  keyup3(value: string) {
    if(value.length>=3)
    {
      this.showmsg3=false;
    }
    else
 {
  this.showmsg3=true;
  this.text3 = 'Please Enter Valid Password';
 }
  }

  showmsg4=true;
  keyup4(value: string) {
    if(value.length>=3 && value.match(this.emailPattern))
    {
      this.showmsg4=false;
    }
    else
 {
  this.showmsg4=true;
  this.text4 = 'Please Enter Valid Email';
 }
  }

  showmsg5=true;
  keyup5(value: string) {
    if(value.length==10)
    {
      this.showmsg5=false;
    }
    else
 {
  this.showmsg5=true;
  this.text5 = 'Please Enter Valid Phone Number';
 }
  }


  selectedgender: string = '';
  showmsg6=true;
  selectChangeHandler (event: any) {
    this.selectedgender = event.target.value;
    if(this.selectedgender != ''){
    this.showmsg6=false;
    }
    else{
      this.showmsg6=true;
      this.text6= 'Please Choose gender';
    }
  }

  selectedDay: string = '';
  showmsg7=true;
  text7='Please Choose Date';
  //event handler for the select element's change event
  selectChangeHandlerBirth (event: any) {
    this.selectedDay = event.target.value;
    if(this.selectedDay != ''){
    this.showmsg7=false;
    }
    else{
      this.showmsg7=true;
      this.text7= 'Please Choose Date';
    }
  }

  showmsg9=true;
  text9 = 'Please Enter Valid Specialization';
  keyup8(value: string) {

    if(value.length>=2)
    {
      this.showmsg9=false;
    }
    else
 {
  this.showmsg9=true;
  this.text9 = 'Please Enter Valid Specialization';
 }
  }
}
