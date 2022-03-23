import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { TeacherRegisterdesignComponent } from '../teacher-registerdesign/teacher-registerdesign.component';

@Component({
  selector: 'app-navregister',
  templateUrl: './navregister.component.html',
  styleUrls: ['./navregister.component.css']
})
export class NavregisterComponent implements OnInit {

  constructor(private rout : Router,private teacherc : TeacherRegisterdesignComponent) {
    
    
   }


  
  ngOnInit(): void {
  }

  teacherpage(){
    this.teacherc.roleid = 2 ;
    this.rout.navigate(['/app-student-registerdesign']);
  }

  studentpage(){
    this.teacherc.roleid = 3 ;
    this.rout.navigate(['app-teacher-registerdesign']);
  }

}
