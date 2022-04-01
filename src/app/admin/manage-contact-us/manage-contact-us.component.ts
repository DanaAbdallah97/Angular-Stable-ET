import { Component, OnInit } from '@angular/core';
import { ContactusService } from 'src/app/service/contactus.service';

@Component({
  selector: 'app-manage-contact-us',
  templateUrl: './manage-contact-us.component.html',
  styleUrls: ['./manage-contact-us.component.css']
})
export class ManageContactUsComponent implements OnInit {
  allMessages:any={} 
  constructor(public contact:ContactusService) { }
  contactUsResult:any={}
  ngOnInit(): void {
    this.contact.getallmessages().subscribe((res)=>{
      this.allMessages=res;
    })
  }

}
