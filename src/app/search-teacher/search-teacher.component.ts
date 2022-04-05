import { Component, OnInit } from '@angular/core';
import { SearchTeacherService } from '../service/search-teacher.service';

@Component({
  selector: 'app-search-teacher',
  templateUrl: './search-teacher.component.html',
  styleUrls: ['./search-teacher.component.css']
})
export class SearchTeacherComponent implements OnInit {

  AllTeachers :any= {}
  TeacherID:any;


  SetTeacherId(id:any){
    this.TeacherID=id;
    this.searchTeacher.setTeacherId(id);
    console.log("this.TeacherID")
    console.log(this.TeacherID)

  }

  constructor(private searchTeacher: SearchTeacherService) {

    this.searchTeacher.getcourse().subscribe((result) => {
      this.AllTeachers = result;
      // console.log("ALLLLLLLLLLLLTTTTTTTTTTTT")
      // console.log(this.Teacher)
    })




  }

  ngOnInit(): void {
  }

}
