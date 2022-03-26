import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  urlSendMessage = 'https://localhost:44363/api/Message/createMessage';
  urlGetAboutus = 'https://localhost:44363/api/managepage/getManagepage';

  
  constructor(private http:HttpClient) { }
  
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
}
