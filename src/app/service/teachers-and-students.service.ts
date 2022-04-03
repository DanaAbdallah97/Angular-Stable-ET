import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeachersAndStudentsService {
  data:any=[{}];
  constructor(private http:HttpClient) { }
  getAllTeachers(){
    debugger
    return this.http.get('https://localhost:44363/api/account/getteacher');
  }
  getAllStudents(){
    return this.http.get('https://localhost:44363/api/account/getstudent');

  }
  getCountOfTeachers(){
    return this.http.get('https://localhost:44363/api/account/getNumberTeacher');
  }
  getCountOfStudents(){
    return this.http.get('https://localhost:44363/api/account/getNumberStudent');
  }
  // SearchTeacherByName(obj:any){
  //    return this.http.post('https://localhost:44363/api/account/searchTeacher',obj);
  // }

  SearchTeacherByName(data:any)
    {
      debugger
      this.http.post('https://localhost:44363/api/account/searchTeacher',data)
      .subscribe((res)=>{
        console.log(res);
        
        this.data=[res];
        
      // },err=>{
      //   this..error('something error');
      })
    }

  acceptorder(data:any){
  debugger;
  this.http.post('https://localhost:44363/api/jwt/SendEmail/',data).subscribe(
    (res:any)=>{
      debugger;
  }, err=>{
    });
}
updateAccountStatus(body:any){
  debugger
 // body.image_path=this.display_image;
  this.http.put('https://localhost:44363/api/account/UpdateAccount/',body).subscribe((res)=>{
    //this.toaster.success('updated succefully')
  }, err=>{
  });
}
}

