import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private category: HomeService) { }
  name = 'Parent';
  currentMsgToChild1 = '';

  categoriesList:any={}

  ngOnInit(): void {
    this.category.getAllCategories().subscribe((result) => {
      console.warn(result);
      this.categoriesList = result;
    })
  }

}
