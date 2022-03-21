import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private router : Router , private homeservices : HomeService , private http : HttpClient) { }
  submit (email : any , password : any){
    var body = {
      username : email.value.toString(),
      password : password.value.toString()
    }
    const headerDir ={
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    } 
    const requestOptions = {
      headers  : new HttpHeaders(headerDir)
    }
    //this.spinner.show();
    this.http.post('https://localhost:44363/api/JWT/auth',body,requestOptions)
    .subscribe((res:any)=>{
      //this.spinner.hide();
      console.log(res);
      const response = {
        token : res.toString()
      }
      localStorage.setItem('token',response.token);
    })

  }
}
