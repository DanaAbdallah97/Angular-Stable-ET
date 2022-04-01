import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  urlCreateAppointment = 'https://localhost:44363/api/appointment/createAppointment';

  constructor(private http:HttpClient) { }

  createAppointment(data: any) {
    this.http.post(this.urlCreateAppointment, data)
      .subscribe(
        (res: any) => {
          console.warn("result",res);
        }
      );
  }
}
