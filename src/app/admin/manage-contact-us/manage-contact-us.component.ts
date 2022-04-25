import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContactusService } from 'src/app/service/contactus.service';

@Component({
  selector: 'app-manage-contact-us',
  templateUrl: './manage-contact-us.component.html',
  styleUrls: ['./manage-contact-us.component.css']
})
export class ManageContactUsComponent implements OnInit {
   @ViewChild('callSendEmailDialog') callSendEmailDialog! :TemplateRef<any>

   emailfromTeracher:any='Etreeks@gmail.com';
   Emailpassword='123etreeks';
 
  allMessages:any={} 
  previousMessgae:any={}
  
  Emailto:any;

  constructor(public contact:ContactusService,private dialog:MatDialog) { }
  contactUsResult:any={}
  ngOnInit(): void {
    this.contact.getallmessages().subscribe((res)=>{
      this.allMessages=res;
    })
  }

  SendEmailForm : FormGroup = new FormGroup({
    EmailTo : new FormControl(),
    textMsg: new FormControl(),
    Password:new FormControl(),
    EmailFrom:new FormControl(),
 })
  openSendMessageDialog(EmailTo1:any,textMsg1:any,Password1:any,EmailFrom1:any)
  {   
      this.previousMessgae={
        EmailTo:EmailTo1,
        textMsg:textMsg1,
        Password:Password1,
        EmailFrom:EmailFrom1
      }    
  //  this.SendEmailForm.controls['categoryid'].setValue(categoryid1);
    this.dialog.open(this.callSendEmailDialog)
  }
  
  
  
  callJWT(){    
    this.contact.sendemailcontact(this.SendEmailForm.value); 
    window.location.reload();   
  }
  

}
