import { Component, OnInit } from '@angular/core';
import { TeachersAndStudentsService } from 'src/app/service/teachers-and-students.service';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements OnInit {

  constructor(private teachersAndStudents:TeachersAndStudentsService) { }
  allStudents:any={}
  ngOnInit(): void {
    this.teachersAndStudents.getAllStudents().subscribe((res)=>{
      this.allStudents=res;
    })
   
    
  }
  }


