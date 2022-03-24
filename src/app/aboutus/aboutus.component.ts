import { Component, Input, OnInit } from '@angular/core';
import { AboutUsService } from '../service/about-us.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(public aboutus:AboutUsService) { }

  descriptionAboutus:any={}

  ngOnInit(): void {
    this.aboutus.getAboutUs().subscribe((result) => {
      console.warn(result);
      this.descriptionAboutus = result;
  })
  }
}
