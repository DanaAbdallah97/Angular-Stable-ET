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
