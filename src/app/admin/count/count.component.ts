import { Component, OnInit } from '@angular/core';
import { TeachersAndStudentsService } from 'src/app/service/teachers-and-students.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  constructor(private teachersAndStudents:TeachersAndStudentsService) { }
  numberOfStudents:any={}
  numberOfTeachers:any={}
  ngOnInit(): void {
    this.teachersAndStudents.getCountOfStudents().subscribe((res)=>{
      this.numberOfStudents=res;
    })
    this.teachersAndStudents.getCountOfTeachers().subscribe((res)=>{
      this.numberOfTeachers=res;
    })
    
  }

}
