import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  urlSendMessage = 'https://localhost:44363/api/Message/createMessage';
  urlGetAboutus = 'https://localhost:44363/api/managepage/getManagepage';

  
  constructor(private http:HttpClient, private toaster:ToastrService) { }

  getallmessages(){
    return this.http.get('https://localhost:44363/api/Message/GetMessage');
  }
  
  createMessage(data: any) {
    this.http.post(this.urlSendMessage, data)
      .subscribe(
        (res: any) => {
          console.warn("result",res);
        }
      );
  }

  getPhoneNumber_Address_Email_Website()
  {
    return this.http.get(this.urlGetAboutus);
  }
  
  sendemailcontact(data:any){
    debugger;
    this.http.post('https://localhost:44363/api/jwt/SendEmailContact/',data).subscribe(
      (res:any)=>{
        debugger;
    }, err=>{
      });
  }
}
