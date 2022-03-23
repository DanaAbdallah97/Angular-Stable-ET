import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register-landing',
  templateUrl: './register-landing.component.html',
  styleUrls: ['./register-landing.component.css']
})
export class RegisterLandingComponent implements OnInit {
 
  constructor(private router : Router) { }

 
  stdnetregister(){

    this.router.navigate(['auth/studentregister'])
    .then(() => {
      window.location.reload();
    });
  }

  teacherregister(){
        this.router.navigate(['auth/teacherregister'])
        .then(() => {
          window.location.reload();
        });
          }

      
  ngOnInit(): void {
  }

}
