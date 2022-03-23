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

  constructor(private router:Router , public auth:AuthserviceService,private http:HttpClient) { }
  ngOnInit(): void {
    this.auth.getAll(); 
    
  }

  // onSubmit(data:any){
  //   debugger
  //   this.http.post('https://localhost:44363/api/Account/CreateAccount',data)
  //  .subscribe((res)=>{
  //   console.log("result",res)
  //   })
  //   console.log("date",data)
    
  //   }



}
