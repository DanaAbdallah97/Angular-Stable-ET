import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input() categoryid: number | undefined
  @Input() categoryname: string | undefined
  @Input() categorydescription: string | undefined
  @Input() categoryimage: string | undefined
  @Input() courses: string | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
