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
  teacherid = 9999
  teacherstatus="waiting"

 constructor(private router: Router, private http: HttpClient, public auth: AuthserviceService) { }

  onSubmit(data: any) {
    console.warn(data);
    this.auth.createAccount(data);
    this.router.navigate(['auth/login'])
    .then(() => {
      window.location.reload();
    });
    //     this.http.post('https://localhost:44363/api/Account/createAccount',data).subscribe((result)=>{
    // console.warn("result",result);
    //     });
  }

 
  ngOnInit(): void {
    this.auth.getAll();

  }

}
