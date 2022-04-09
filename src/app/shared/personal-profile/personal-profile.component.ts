import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.css']
})
export class PersonalProfileComponent implements OnInit {

  UserId:any ;
  UserInformation : any ; 

  constructor(private http: HttpClient ) { 
    this.UserId= localStorage.getItem('IdAccount');

    this.http.get('https://localhost:44363/api/Account/GetTeacherById/'+this.UserId).subscribe((result) => {

      this.UserInformation = result;
      console.log('Allllllllll Course 1111111 ')

      console.log(this.UserInformation);
    })
  }

  logout(){
    localStorage.clear();

  }


  ngOnInit(): void {
  }

}
