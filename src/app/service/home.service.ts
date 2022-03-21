import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  categories:any=[]
  constructor(private http:HttpClient, private toaster:ToastrService) { }

getAllCategories(){
 this.http.get('https://localhost:44363/api/category/getCategory').subscribe((res)=>{
   this.categories=res;
   this.toaster.success('data retrived');
   },err=>{
     this.toaster.error('somthing went wrong');
   })
}



}
