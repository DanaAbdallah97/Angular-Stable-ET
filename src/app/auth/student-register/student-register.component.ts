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
    this.auth.getAll();

  }

}
