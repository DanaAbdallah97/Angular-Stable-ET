import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchTeacherService {
TName:any;
IdTeacherSearch :any;

  constructor(private http: HttpClient) { }

setTeacherName(teacherName:any){
this.TName=teacherName;
console.log(this.TName);
}


setTeacherId(teacherid:any){
  this.IdTeacherSearch=teacherid;
  console.log('setTeacherId')
  console.log(this.IdTeacherSearch)

  // console.log(this.IdTeacherSearch);
  }

  getcourse() {
    return this.http.get('https://localhost:44363/api/Account/SearchTeacher/'+this.TName);         
    }
}
