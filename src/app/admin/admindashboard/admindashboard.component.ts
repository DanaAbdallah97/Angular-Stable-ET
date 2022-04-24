import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private router : Router) { 
  }
  ngOnInit(): void {
  }


 
  manageCategory(){
    this.router.navigate(['admin/managecategory']);
  }
 
  logout(){
    localStorage.clear();
    this.router.navigate(['/home']) ;
  }
}
