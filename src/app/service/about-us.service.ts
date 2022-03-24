import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  urlGetAboutus = 'https://localhost:44363/api/managepage/getManagepage';


  constructor(private http:HttpClient, private toaster:ToastrService) { }
  getAboutUs(){
    return this.http.get(this.urlGetAboutus);
  }
}
