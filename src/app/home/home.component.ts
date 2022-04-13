import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
mangePage:any={};
background:any;

  constructor(public home:HomeService) { 
    this.home.getBackground().subscribe((result)=>{
       this.mangePage=result;
       console.log('mangePage')
       console.log(this.mangePage)
    })
  }


  ngOnInit(): void {
this.background=this.mangePage[0].background;    
// console.log('backkkkkkkkkkk')
// console.log(this.background);
  }

}


