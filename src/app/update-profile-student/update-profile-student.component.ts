import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';

@Component({
  selector: 'app-update-profile-student',
  templateUrl: './update-profile-student.component.html',
  styleUrls: ['./update-profile-student.component.css']
})
export class UpdateProfileStudentComponent implements OnInit {
 

  accountInformationStudent:any={};
  roldeidStudnet = 2
  id :any=  localStorage.getItem('IdAccount')
  studentid=parseInt(this.id);
  firstname :any
  lastname:any;
  password:any;
  email:any;
  phonenumber:any;
  birthofdate:any;
  profilepicture:any;
  gender:any;
  selectedFile: any;
  P_picture: any;
  P_p: any;

  constructor(private router: Router, private http: HttpClient, public auth: AuthserviceService) {

    console.log('Inforrrrrrrrrrrrrrrrrrrrrmaion')
    this.http.get('https://localhost:44363/api/Account/GetTeacherById/'+ this.studentid).subscribe(
        (res) => {
          this.accountInformationStudent = res;
          console.log('Account Information ')
          console.log(this.accountInformationStudent);
         this.firstname= this.accountInformationStudent[0].firstname;
         this.lastname= this.accountInformationStudent[0].lastname;
         this.password= this.accountInformationStudent[0].accountpassword;
         this.email= this.accountInformationStudent[0].email;
         this.phonenumber= this.accountInformationStudent[0].phonenumber;
         this.birthofdate= this.accountInformationStudent[0].birthofdate;
         this.gender= this.accountInformationStudent[0].gender;
         this.P_picture= this.accountInformationStudent[0].profilepicture;


         console.log(this.profilepicture);
        },
        (err) => {}
      );  

   }
   


  onSubmit(data: any) {
    console.warn(data);
    data.profilepicture = this.P_picture
    this.auth.UpdateProfileStudent(data);
    console.log('Data')
    console.log(data);
    this.router.navigate(['home'])
      .then(() => {
        window.location.reload();
      });
    //     this.http.post('https://localhost:44363/api/Account/createAccount',data).subscribe((result)=>{
    // console.warn("result",result);
    //     });
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
