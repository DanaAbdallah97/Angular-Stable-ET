import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { HttpClient } from '@angular/common/http';
import { every } from 'rxjs';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {
  roldeidStudnet = 2
  studentid = 9999
  selectedFile: any;
  P_picture: any;
  text = 'Please Enter Valid Name';
  text3 = 'Please Enter Valid Password';
  text4 = 'Please Enter Valid Email';
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
  text5 = 'Please Enter Valid Phone Number';
  text6= 'Please Choose Gender';


  firstname:any;

  constructor(private router: Router, private http: HttpClient, public auth: AuthserviceService) { }

  onSubmit(data: any) {
    console.warn(data);
    data.profilepicture = this.P_picture
    this.auth.createAccount(data);
    this.router.navigate(['auth/login'])
      .then(() => {
        window.location.reload();
      });
    //     this.http.post('https://localhost:44363/api/Account/createAccount',data).subscribe((result)=>{
    // console.warn("result",result);
    //     });
  }

  
// Uplaod profilepicture
selectedpic: string = '';
showmsg8=true;
text8='Please Choose Profile Pic';

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
    var fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);

    this.P_picture = this.selectedFile.name;

    this.auth.uploadImage(fd).subscribe(
      (res) => {
        console.log('asdasdasdasdasdasd')
        console.log(res)
        return res;
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
  text9='Please Choose gender';
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




  // checkfirstname(val:any){
  //   if(val == null){
  //     this.showmsg=true;
  //   }else{
  // this.showmsg=false;
  //   }
    
  // }

 
}
