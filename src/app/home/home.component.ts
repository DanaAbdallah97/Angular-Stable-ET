import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
<<<<<<< HEAD
  constructor() {     
  }
  
=======

  constructor(public home:HomeService) { 
    this.home.getAllCategories();
  }

>>>>>>> 2406f9b4f1f2dac16bd8ed11e83b9025d84abbe6
  ngOnInit(): void {
    
  }

}


