import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  aboutus:any=[]
  constructor(private http:HttpClient, private toaster:ToastrService) { }
  getAboutUs(){
    this.http.get('https://localhost:44363/api/Managepage/GetManagepage').subscribe((res)=>{
      this.aboutus=res;
      this.toaster.success('data retrived');      
      },err=>{
        this.toaster.error('somthing went wrong');
      })
  }
}
