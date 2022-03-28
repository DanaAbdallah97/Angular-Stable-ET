import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(private http: HttpClient) { }

  urlGetTestmonial= 'https://localhost:44363/api/Testmonial/getTestmonial';


  getTestmonial() {
    return this.http.get(this.urlGetTestmonial);
    }


}
