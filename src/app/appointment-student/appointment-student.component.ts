import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';

@Component({
  selector: 'app-appointment-student',
  templateUrl: './appointment-student.component.html',
  styleUrls: ['./appointment-student.component.css']
})
export class AppointmentStudentComponent implements OnInit {

  AppointmentStudent: any = {};
  CoursesIds: any = []
  CourseName: any = []


  constructor(private router: Router, private http: HttpClient, public auth: AuthserviceService) {

    this.http.get('https://localhost:44363/api/Appointment/GetAppointmentByAccountId/' + localStorage.getItem('IdAccount')).subscribe((result) => {
      this.AppointmentStudent = result;
      console.log('AppointmentStudent')
      console.log(this.AppointmentStudent);

      // for (let index = 0; index < this.AppointmentStudent.length; index++) {
      //   this.CoursesIds[index] = this.AppointmentStudent[index].courseid;
      // }

      // for (let index = 0; index < this.CoursesIds.length; index++) {
      //   this.http.get('https://localhost:44363/api/course/getCourseById/' + this.CoursesIds[index]).subscribe((result) => {
      //     this.CourseName[index] = result;
      //   })
      // }

    })



  }

  ngOnInit(): void {

  }

}
