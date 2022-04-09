import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTabBody } from '@angular/material/tabs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  urlGetAboutus = 'https://localhost:44363/api/managepage/getManagepage';
  //urlUpdateAboutUs ='https://localhost:44363/api/managepage/UpdateManagepage';
  // urlDeleteABoutUs='https://localhost:44363/api/managepage/DeleteManagepage/'
  constructor(private http:HttpClient, private toaster:ToastrService) { 
    
  }

  data:any=[{}]  
  display_Image : any;
  
createaboutus(body:any){
  body.background=this.display_Image;
  this.http.post('https://localhost:44363/api/managepage/createManagepage/',body).subscribe(
    (res:any)=>{
    this.toaster.success('Saved succefully')   
  }, err=>{
      this.toaster.error(err.message,err.status)
    });
    window.location.reload();



}

updateABoutUs(body:any){   
  debugger
  body.background=this.display_Image;
  debugger
   this.http.put('https://localhost:44363/api/managepage/UpdateManagepage/',body).subscribe((res)=>{
    this.toaster.success('updated Successfully :)');
    window.location.reload();
  },err=>{
    this.toaster.error(err.status,err.message);
  })
}

  getAboutUs(){
    return this.http.get(this.urlGetAboutus);
  }



  deleteaboutUs(id:number){
    this.http.delete('https://localhost:44363/api/managepage/DeleteManagepage/'+id).subscribe((res)=>{
      this.toaster.success('deleted succefully')
    },err=>{
      this.toaster.error('can not delete')
    })
    window.location.reload();
  }

 
  
  uploadAttachment(file:FormData){
    debugger
    this.http.post('https://localhost:44363/api/Managepage/UploadImage/',file)
    .subscribe((res:any)=>{  
      this.display_Image=res.background;
      console.log(this.display_Image);      
    },err=>{
      this.toaster.error(err.status,err.message);
    })
  }
}

  