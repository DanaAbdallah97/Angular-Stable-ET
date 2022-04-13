import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TeacherDashboardService } from 'src/app/service/teacher-dashboard.service';

@Component({
  selector: 'app-teacher-header',
  templateUrl: './teacher-header.component.html',
  styleUrls: ['./teacher-header.component.css']
})
export class TeacherHeaderComponent implements OnInit {

  UserId:any ;
  UserInformation : any ; 
  constructor(private http : HttpClient, private teacherHttp : TeacherDashboardService ) {

    console.log('the Teacher ID');
    console.log(localStorage.getItem('IdAccount'))

    this.UserId= localStorage.getItem('IdAccount');

    this.teacherHttp.getTeacherAccount(this.UserId).subscribe((result) => {

      this.UserInformation = result;
      console.log('Allllllllll Course 1111111 ')
      
      console.log(this.UserInformation);
    });

   }

   logout(){
    localStorage.clear();
  }

  ngOnInit(): void {
  }

}
