import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
