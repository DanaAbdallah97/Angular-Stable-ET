import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})

export class HomeService {

  urlGetCategories = 'https://localhost:44363/api/category/getCategory';

  constructor(private http: HttpClient, private toaster: ToastrService) { }

  getAllCategories() {
  return this.http.get(this.urlGetCategories);
       
  }

}
