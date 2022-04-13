import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TeacherDashboardService } from 'src/app/service/teacher-dashboard.service';

@Component({
  selector: 'app-teacherdashboard',
  templateUrl: './teacherdashboard.component.html',
  styleUrls: ['./teacherdashboard.component.css']
})
export class TeacherdashboardComponent implements OnInit {

  UserId: any;
  UserInformation: any;

  constructor(private http: HttpClient, private teacherHttp: TeacherDashboardService) {

    console.log('the Teacher ID');
    console.log(localStorage.getItem('IdAccount'))

    this.UserId = localStorage.getItem('IdAccount');

    this.teacherHttp.getTeacherAccount(this.UserId).subscribe((result) => {

      this.UserInformation = result;
      console.log('Allllllllll Course 1111111 ')

      console.log(this.UserInformation);
    });
  }



  ngOnInit(): void {
  }

}
