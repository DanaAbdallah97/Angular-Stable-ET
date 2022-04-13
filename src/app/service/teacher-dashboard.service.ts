import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherDashboardService {


  constructor(private http : HttpClient) { }


getTeacherAccount(idTeacher:any)
{
 return this.http.get('https://localhost:44363/api/Account/GetTeacherById/'+idTeacher);
}

getTeacherCourse(idTeacher:any){
  return this.http.get('https://localhost:44363/api/course/GetCourseByTeacherId/'+idTeacher);
}

getTeacherAppointmentByCourseId(idCourse:any){
  return this.http.get('https://localhost:44363/api/Appointment/GetAppointmentByCourseId/'+idCourse);
}

getTeacherAppointment(Teacherid :any){
return this.http.get('https://localhost:44363/api/Appointment/TeacherDashboardAppintment/'+Teacherid);
}

}
