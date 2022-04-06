import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient , private toaster:ToastrService) { }

  message:string='welcome in our training :) ';
  selectedcategory:any={};
  data:any=[{}]
  display_image:any;

createcategory(data:any){


  data.categoryimage=this.display_image;
  this.http.post('https://localhost:44363/api/category/createcategory/',data).subscribe(
    (res:any)=>{


  //this.spinner.show();

  data.image_path=this.display_image;
  this.http.post('https://localhost:44363/api/category/createcategory',data).subscribe(
    (res:any)=>{
     // this.spinner.hide();

    this.toaster.success('Saved succefully')
  }, err=>{
      this.toaster.error(err.message,err.status)
    });

}

uploadAttachment(file:FormData){
  debugger
  this.http.post('https://localhost:44363/api/category/UploadImage/',file).subscribe(
  (res:any)=>{
    this.display_image=res.categoryimage;
  },err=>{
    this.toaster.error(err.message,err.status)
  }
  )
}

updatecategory(body:any){
  debugger
   body.categoryimage=this.display_image;
  debugger
   this.http.put('https://localhost:44363/api/Category/UpdateCategory/',body).subscribe((res)=>{ 
     window.location.reload();
     console.log(res);
    //  window.location.reload();
})  
}



deletecategory(categoryid:number){
  debugger
  this.http.delete('https://localhost:44363/api/Category/DeleteCategory/'+categoryid).subscribe((res)=>{
    this.toaster.success('deleted  succefully')
  },err=>{
    this.toaster.error('something went wrong with deleteing!!')
  }
  )
  window.location.reload();
}
}