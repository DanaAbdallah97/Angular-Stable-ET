import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchTeacherService } from 'src/app/service/search-teacher.service';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.css']
})
export class SearchButtonComponent implements OnInit {

  TeacherName:any=""; 

  constructor(private router: Router, private http: HttpClient,private searchTeacher :SearchTeacherService) { }


  SetTeacherName(){
    this.searchTeacher.setTeacherName(this.TeacherName);
    this.router.navigate(['/search']);
    // console.log('TTTTTTTTTTTTTTTTTTT')
    // console.log(this.TeacherName);
  }

  // onSubmit() {
  //   this.searchTeacher.setTeacherName(this.TeacherName);
  //   // this.router.navigate(['/search']);
  //   console.log('TTTTTTTTTTTTTTTTTTT')
  //   console.log(this.TeacherName);
  // }


  ngOnInit(): void {
  }

}
