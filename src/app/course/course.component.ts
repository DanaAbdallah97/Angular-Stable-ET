import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../service/course.service';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  name = 'Child 1';
  @Input() msgFromParent1: any[] | undefined;

  currentMsgToParent = '';
  msgFromChild1 = []
  Allcourse: any = {}
  categoryName: any;
  TeacherName: any = [];
  rate:number=5;


  constructor(private courseAPI: HomeService, private courseSerice: CourseService, private router: Router) {

    this.courseAPI.getcourse().subscribe((result) => {
      this.Allcourse = result;
      console.log(this.Allcourse)
      this.categoryName = this.courseAPI.categoryName;

      this.courseSerice.getTeacherName().subscribe((resultTeacher) => {
        this.TeacherName = resultTeacher;

      })
    })
  }

  getCourseId(id: any) {
    this.courseSerice.getCourseId(id);
    this.router.navigate(['appointment']);
  }



  ngOnInit(): void {
  }

}