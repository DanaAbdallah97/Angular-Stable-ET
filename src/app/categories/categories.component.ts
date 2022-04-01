import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private category: HomeService, private router:Router) { }
  // name = 'Parent';
  // currentMsgToChild1 = '';

  categoriesList:any={}

  ngOnInit(): void {
    this.category.getAllCategories().subscribe((result) => {
      console.warn(result);
      this.categoriesList = result;
    })
  }

  getCourseByCategory(id : number, courseName:string)
  {
    this.category.categoryid=id
    this.category.categoryName=courseName;
    // localStorage.setItem('categoryid',id.toString());
    this.router.navigate(['course']);
  }

}
