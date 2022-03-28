import { Component, Input, OnInit } from '@angular/core';
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
  Allcourse:any={}
  categoryName :any;

  constructor(private courseAPI: HomeService) 
  {

    this.courseAPI.getcourse().subscribe((result) => {
      this.Allcourse = result;
      console.log(this.Allcourse)

      this.categoryName=this.courseAPI.categoryName;
    })
  }




  ngOnInit(): void {
  }

}