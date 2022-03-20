import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

getAllCategories(){
 this.http.get('https://localhost:44363/api/category/getCategory').subscribe((res)=>{
   
 })
}

}
