import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {


  constructor(private router:Router , public auth:AuthserviceService) {
    

   }
  ngOnInit(): void {
    this.auth.getAll(); 
    
  }

}
