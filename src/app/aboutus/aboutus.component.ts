import { Component, Input, OnInit } from '@angular/core';
import { AboutUsService } from '../service/about-us.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  @Input() managepageid: number | undefined
  @Input() aboutustext: string | undefined
  @Input() aboutusphone: string | undefined
  @Input() aboutusemail: string | undefined
  @Input() couaboutusaddersrses: string | undefined
  @Input() background: string | undefined

  constructor(public aboutus:AboutUsService) {    
    this.aboutus.getAboutUs();
    console.log(this.aboutus.getAboutUs())
   }

  ngOnInit(): void {
  }

}
