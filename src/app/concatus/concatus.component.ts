import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactusService } from '../service/contactus.service';

@Component({
  selector: 'app-concatus',
  templateUrl: './concatus.component.html',
  styleUrls: ['./concatus.component.css'],
})
export class ConcatusComponent implements OnInit {
  recevieremail ="Etreeks@gmail.com"


  constructor(
    public contact: ContactusService,
    private router: Router
  ) {}

  onSubmit(data: any) {
    console.warn(data);
    this.contact.createMessage(data);
    // this.router.navigate(['contact']).then(() => {
    //   window.location.reload();
    // });

  }

  get_Phone_Pmail_Address_Contactus: any = {};
 
  ngOnInit(): void {
    
    this.contact.getPhoneNumber_Address_Email_Website().subscribe((result) => {
      console.warn(result);
      this.get_Phone_Pmail_Address_Contactus = result;
    });
  }

  createForm : FormGroup = new FormGroup({
    messageid: new FormControl(),
    subject : new FormControl(),
    messagebody : new FormControl(),
    senderemail: new FormControl(),   
 })

   createmsg(){
       this.contact.createMessage(this.createForm.value);
   }
}
