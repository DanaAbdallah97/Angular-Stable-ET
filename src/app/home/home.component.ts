import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
mangePage:any={};
background:any;
StudentNumber:any ;
Appointments:any={};
AppointmentsNumber:any;
Courses:any={}
CourseNumber:any ;
TeacherNumber:any;

  constructor(public home:HomeService, private http :HttpClient) { 
    this.home.getBackground().subscribe((result)=>{
       this.mangePage=result;
       console.log('mangePage')
       console.log(this.mangePage)
    })

    this.http.get('https://localhost:44363/api/Account/getNumberStudent').subscribe((result)=>
    {

      this.StudentNumber=result;
    })


    this.http.get('https://localhost:44363/api/Appointment/GetAppointment').subscribe((result)=>
    {
      this.Appointments=result;
      this.AppointmentsNumber=this.Appointments.length
    })


    this.http.get('https://localhost:44363/api/course/getCourse').subscribe((result)=>
    {
      this.Courses=result;
      this.CourseNumber=this.Courses.length
    })

    this.http.get('https://localhost:44363/api/Account/getNumberTeacher').subscribe((result)=>
    {

      this.TeacherNumber=result;
    })
  }


  ngOnInit(): void {
this.background=this.mangePage[0].background;    
// console.log('backkkkkkkkkkk')
// console.log(this.background);
  }

}


