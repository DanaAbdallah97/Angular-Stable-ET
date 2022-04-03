import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(private http:HttpClient, private toaster:ToastrService) { }

  urlGetTestmonial= 'https://localhost:44363/api/Testmonial/getTestmonial';


  getTestmonial() {
    return this.http.get(this.urlGetTestmonial);
    }
    deleteTestomonial(id:number){
      this.http.delete('https://localhost:44363/api/Testmonial/DeleteTestmonial/'+id).subscribe((res)=>{
        this.toaster.success('deleted succefully')
      },err=>{
        this.toaster.error('can not delete')
      })
      window.location.reload();
    }

    }



