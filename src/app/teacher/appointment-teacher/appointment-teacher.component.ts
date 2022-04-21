import { HttpClient } from '@angular/common/http';
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
  RejectStat: any = '/reject';
  AcceptStat: any = '/accept';
  WaitingtStat: any = '/waiting';

  flagSearch? :boolean=false;
  StartDate: any;
  EndDate: any;

  SearchBetweenTwoDate: any = {}


  constructor(private httpTeacher: TeacherDashboardService, private http: HttpClient) {
    this.TeacherId = localStorage.getItem('IdAccount');
    this.httpTeacher.getTeacherAppointment(this.TeacherId).subscribe((result) => {
      this.TeacherAppointment = result;
      console.log('Teacher Appointment')
      console.log(this.TeacherAppointment);
    })
  }


  SearchDate() {
    this.flagSearch=true
    console.log('Starrrrrrrrt Date')
    console.log(this.StartDate);

    console.log('End Date')
    console.log(this.EndDate);
    this.http.get('https://localhost:44363/api/Appointment/SerachBetweenTwoDate/' + this.TeacherId + '/' + this.EndDate + '/' + this.StartDate).subscribe((result) => {
      this.SearchBetweenTwoDate = result;
      console.log('searchDate')
      console.log(this.SearchBetweenTwoDate);
    })
  }

  CleatDate(){
    this.flagSearch=false
    this.EndDate=null;
    this.StartDate=null;
  }

  Reject(appointmentid: any) {
    console.log('reject');
    console.log(appointmentid);
    this.http.put('https://localhost:44363/api/Appointment/updateAppointmentStatus/' + appointmentid + this.RejectStat, ' ').subscribe((result) => {
      console.log(result);
    });
    window.location.reload();
  }


  Accept(appointmentid: any) {
    console.log('Accept');
    console.log(appointmentid);
    this.http.put('https://localhost:44363/api/Appointment/updateAppointmentStatus/' + appointmentid + this.AcceptStat, ' ').subscribe((result) => {
      console.log(result);
    });
    window.location.reload();

  }


  Waiting(appointmentid: any) {
    console.log('Waiting');
    console.log(appointmentid);
    this.http.put('https://localhost:44363/api/Appointment/updateAppointmentStatus/' + appointmentid + this.WaitingtStat, ' ').subscribe((result) => {
      console.log(result);
    });
    window.location.reload();

  }

  ngOnInit(): void { }
}
