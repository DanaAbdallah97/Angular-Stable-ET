import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseid:number | undefined;
  urlCourseById= 'https://localhost:44363/api/course/getCourseById/'         

  constructor(private http: HttpClient) { }

  getCourseId(id:any)
  {
    this.courseid=id;
    console.log('courseid')
    console.log(this.courseid);
    
  }


  getTeacherName(){

    return this.http.get('https://localhost:44363/api/Account/GetTeacher/')
  }

  getCourseInformationById(){
        return this.http.get(this.urlCourseById+this.courseid);
  
}

}
