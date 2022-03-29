import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

courseInformationAppointement :any={};
urlVideoCourse: SafeResourceUrl | undefined;
courseRate:any;
courseRateCounter:any=[];



  constructor(private course:CourseService ,public sanitizer:DomSanitizer ) { 
    this.course.getCourseInformationById().subscribe((result)=>{
      console.log('this.courseInformation');
      this.courseInformationAppointement=result;
      console.log(this.courseInformationAppointement);

      this.urlVideoCourse = this.sanitizer.bypassSecurityTrustResourceUrl(this.courseInformationAppointement[0].coursevideo);      
      this.courseRate = this.courseInformationAppointement[0].courserate;      
 
      for (let index = 0; index <this.courseRate ; index++) {
        this.courseRateCounter[index]='*';
      }


    });

  }

  ngOnInit(): void {

  }


  

    //   console.log('appointment')
    // console.log(this.course.courseid)
    // this.courseInformationAppointement=this.course.getCourseInformationById();
    // console.log('Assin course information')
    // console.log(this.course.getCourseInformationById())

}
