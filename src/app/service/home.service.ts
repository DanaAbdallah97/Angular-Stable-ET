import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})

export class HomeService {

  str:any=localStorage.getItem("categoryid")
  categoryid:number=parseInt(this.str)
  categoryName:string | undefined;

  urlGetCategories = 'https://localhost:44363/api/category/getCategory';

  constructor(private http: HttpClient, private toaster: ToastrService) { }

  getAllCategories() {
  return this.http.get(this.urlGetCategories);
  
  }

  getcourse() {
    return this.http.get('https://localhost:44363/api/Course/GetCourseBasedCategory/'+this.categoryid);         
    }


  getBackground(){
    return this.http.get('https://localhost:44363/api/managepage/getManagepage');
  }



  




}
