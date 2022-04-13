import { Component, OnInit } from '@angular/core';
import { TeacherDashboardService } from 'src/app/service/teacher-dashboard.service';

@Component({
  selector: 'app-appointment-teacher',
  templateUrl: './appointment-teacher.component.html',
  styleUrls: ['./appointment-teacher.component.css'],
})
export class AppointmentTeacherComponent implements OnInit {
  TeacherCourses: any;
  TeacherId: any;
  TeacherAppointment: any = {};

  constructor(private httpTeacher: TeacherDashboardService) {
this.TeacherId=localStorage.getItem('IdAccount');
this.httpTeacher.getTeacherAppointment(this.TeacherId).subscribe((result)=>{
  this.TeacherAppointment=result;
  console.log('Teacher Appointment')

console.log(this.TeacherAppointment);
})
  }

  ngOnInit(): void { }
}
