import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import jwt_decode from 'jwt-decode';

import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  selectedAccount: any = {};
  data: any = [];
  profilepicture: any;
  constructor(
    private router: Router,
    private homeservices: HomeService,
    private http: HttpClient,
    private toaster: ToastrService
  ) { }

  submit(email: any, password: any) {
    var body = {
      Email: email.value.toString(),
      Accountpassword: password.value.toString(),
    };

    const headerDir = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDir),
    };

    this.http
      .post('https://localhost:44363/api/JWT/auth', body, requestOptions)
      .subscribe((res: any) => {

        console.log(res);
        const response = {
          token: res.toString(),
        };

        localStorage.setItem('token', response.token);
        let data: any = jwt_decode(response.token);
        console.log('decode', data);
        localStorage.setItem('user', JSON.stringify({ ...data }));
        if (data.role == 'Admin') {
          this.router.navigate(['admin/admindashboard']);
        } else if (data.role == 'Teacher') {
          //link Teacher with page
          this.router.navigate(['admin/teacherdashboard']);
        } else if (data.role == 'Student') {
          // link sudent with pages
          this.router.navigate(['Sudent']);
        }
      });
    // }),err => {

    // }
  }

  getByID(acoountid: any) {

    this.http
      .get('https://localhost:44363/api/Account/GetAccount' + acoountid)
      .subscribe(
        (res) => {
          this.selectedAccount = res;
          //this.spinner.hide();
          this.toaster.success('Data Retreived');
        },
        (err) => {
          //this.spinner.hide();
          this.toaster.error(err.message);
          this.toaster.error(err.status);
        }
      );
  }

  getAll() {

    this.http.get('https://localhost:44363/api/Account/GetAccount').subscribe(
      (res) => {
        this.data = res;

        this.toaster.success('Data Retreived');
      },
      (err) => {

        this.toaster.error(err.message);
        this.toaster.error(err.status);
      }
    );
  }


  getAllAccounts() {

    this.http.get('https://localhost:44363/api/Account/GetAccount').subscribe(
      (res) => {
        console.log('asdasdasdasdasdasd')
        console.log(res)
return res ;        


   
      });
  }



  createAccount(data: any) {
    this.http
      .post('https://localhost:44363/api/Account/CreateAccount', data)
      .subscribe(
        (res: any) => {
          console.warn("result", res);
        },
        (err) => {
          this.toaster.error(err.message, err.status);
        }
      );
  }


  updateAccount(body: any) {
    body.profilepicture = this.profilepicture;
    this.http
      .put('https://localhost:44363/api/Account/UpdateAccount', body)
      .subscribe(
        (res) => {
          this.toaster.success('updated succefully');
        },
        (err) => {
          this.toaster.error('something went wrong !!');
        }
      );
  }

  delete(acoountid: number) {
    this.http
      .delete('https://localhost:44363/api/Account/UpdateAccount' + acoountid)
      .subscribe(
        (res) => {
          this.toaster.success('deleted  succefully');
        },
        (err) => {
          this.toaster.error('something went wrong with deleteing!!');
        }
      );
  }
}
