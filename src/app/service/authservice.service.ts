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
  AccountId: any;
  IdAccount: any;

  
  EmailId: any;
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

    this.EmailId = email.value.toString();

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
        } 
        else if (data.role == 'Teacher') {
          this.router.navigate(['teacher/teacherDashboard']).then(() => {
            window.location.reload();
          });
          //link Teacher with pag
        } else if (data.role == 'Student') {
          // link sudent with pages
          localStorage.setItem('UserLoginFlage', 'true');
          console.log('Login Studnt');
          console.log(localStorage.getItem('UserLoginFlage'));
           this.router.navigate(['/home']);


        }
      });

      this.http.get('https://localhost:44363/api/Account/getAccountId/'+this.EmailId).subscribe((result) => {
        this.AccountId = result;
          this.IdAccount = this.AccountId[0].acoountid;
          localStorage.setItem('IdAccount', this.AccountId[0].acoountid);
          console.log('localStorage.setItem');
          console.log(this.IdAccount);
        });
    // }),err => {

    // }
  }


  getByID(acoountid: any) {

    this.http
      .get('https://localhost:44363/api/Account/GetAccount/'+acoountid)
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


uploadImage(data :any){
return this.http.post('https://localhost:44363/api/Account/UploadImage',data);
}

  getAllAccounts() {

    this.http.get('https://localhost:44363/api/Account/GetAccount').subscribe(
      (res) => {
        console.log('asdasdasdasdasdasd')
        console.log(res)
        return res;
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



  UpdateProfileStudent(data: any) {
    this.http
      .put('https://localhost:44363/api/Account/UpdateAccount', data)
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
      .delete('https://localhost:44363/api/Account/UpdateAccount/'+acoountid)
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
