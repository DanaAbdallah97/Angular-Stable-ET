import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private router : Router , private homeservices : HomeService , private http : HttpClient) { }
  submit (email : any , password : any){
    
    var body = {
      Email : email.value.toString(),
      Accountpassword : password.value.toString()
    }

    const headerDir={
      'Content-Type':'application/json',
      'Accept':'application/json'
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
      let data : any = jwt_decode(response.token);
      console.log('decode',data);
      localStorage.setItem('user',JSON.stringify({...data}));
      if(data.role == 'Admin')
      {
        this.router.navigate(['admin/admindashboard']);
      }
      else if (data.role == 'Teacher')
      {
        //link Teacher with page
        this.router.navigate(['admin/teacherdashboard']);
      }
      else if (data.role == 'Student')
      {
        // link sudent with pages
        this.router.navigate(['Sudent']);
      }
    })
    // }),err => {
    //   this.spinner.hide();
    // }

  }
}


