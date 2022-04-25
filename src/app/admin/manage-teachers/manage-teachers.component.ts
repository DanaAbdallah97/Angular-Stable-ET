import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TeachersAndStudentsService } from 'src/app/service/teachers-and-students.service';
import { SendemailComponent } from '../sendemail/sendemail.component';

@Component({
  selector: 'app-manage-teachers',
  templateUrl: './manage-teachers.component.html',
  styleUrls: ['./manage-teachers.component.css']
})
export class ManageTeachersComponent implements OnInit {
  
  @ViewChild('callUpdateTeacherDialog') callUpdateTeacherDialog! :TemplateRef<any>
  @ViewChild('callDeleteDialog') callDeleteDialog! :TemplateRef<any>
  @ViewChild('callSendEmailDialog') callSendEmailDialog! :TemplateRef<any>



  emailfromTeracher:any='Etreeks@gmail.com';
  Emailpassword='123etreeks';

  TeacherName:string='';
  previousData:any={}
  previousMsgs:any={}
  test:any={};
  test2:any={};
  teachername:any;
  emailtoTeacher:any;
  constructor(private teachersAndStudents:TeachersAndStudentsService,public http:HttpClient,private dialog:MatDialog) { }
  AllTeachers:any={}
  ngOnInit(): void {
    this.teachersAndStudents.getAllTeachers().subscribe((res)=>{
      this.AllTeachers=res;
    })    
  }
  dataemail:any;

  updatForm:FormGroup=new FormGroup
  (
    {
      acoountid: new FormControl(),
      firstname:new FormControl(),
      lastname :new FormControl(),      
      email: new FormControl(),
      accountpassword :new FormControl(),
      phonenumber: new FormControl(),
      gender: new FormControl(),
      birthofdate: new FormControl(),
      profilepicture:new FormControl(),
      certificate:new FormControl(),
      specialization:new FormControl(),
      accountstatus:new FormControl()      
    }
  )



accept(acoountid1:any,roleid1:any,firstname1:any,lastname1:any,email1:any,accountpassword1:any,phonenumber1:any,gender1:any,birthofdate1:any,profilepicture1:any,certificate1:any,specialization1:any,accountstatus1:any){
this.emailtoTeacher=email1;
  this.test={
    acoountid:acoountid1,
    roleid:roleid1,
    firstname:firstname1,
    lastname:lastname1,
    email:email1,
    phonenumber:phonenumber1,
    gender:gender1,
    birthofdate:birthofdate1,
    profilepicture:profilepicture1,
    certificate:certificate1,
    specialization:specialization1,
    accountstatus:accountstatus1, 
    accountpassword:accountpassword1
  }   

  this.http.put('https://localhost:44363/api/Account/updateAccount',this.test).subscribe((reult)=>{
console.log(reult);



  });


this.dataemail={
  textMsg: 'accept',
  EmailFrom:'Etreeks@gmail.com',
  Password:'123etreeks',
  emailto:'dka.abdallah@gmail.com'
}
this.teachersAndStudents.sendemailcontact(this.dataemail);

window.location.reload();
}

reject(acoountid1:any,roleid1:any,firstname1:any,lastname1:any,email1:any,accountpassword1:any,phonenumber1:any,gender1:any,birthofdate1:any,profilepicture1:any,certificate1:any,specialization1:any,accountstatus1:any){
  this.emailtoTeacher=email1;
    this.test2={
      acoountid:acoountid1,
      roleid:roleid1,
      firstname:firstname1,
      lastname:lastname1,
      email:email1,
      phonenumber:phonenumber1,
      gender:gender1,
      birthofdate:birthofdate1,
      profilepicture:profilepicture1,
      certificate:certificate1,
      specialization:specialization1,
      accountstatus:accountstatus1, 
      accountpassword:accountpassword1
    }   
  
    this.http.put('https://localhost:44363/api/Account/updateAccount',this.test2).subscribe((reult)=>{
  console.log(reult);
  
  
  
    });
  
  
  this.dataemail={
    textMsg: 'reject',
    EmailFrom:'Etreeks@gmail.com',
    Password:'123etreeks',
    emailto:'dka.abdallah@gmail.com'
  }
  this.teachersAndStudents.sendemailcontact(this.dataemail);
  
  window.location.reload();
  }
  

  openUpdateDialog(acoountid1:any,roleid1:any,firstname1:any,lastname1:any,email1:any,accountpassword1:any,phonenumber1:any,gender1:any,birthofdate1:any,profilepicture1:any,certificate1:any,specialization1:any,accountstatus1:any)
  {   

      this.previousData={
        acoountid:acoountid1,
        roleid:roleid1,
        firstname:firstname1,
        lastname:lastname1,
        email:email1,
        phonenumber:phonenumber1,
        gender:gender1,
        birthofdate:birthofdate1,
        profilepicture:profilepicture1,
        certificate:certificate1,
        specialization:specialization1,
        accountstatus:accountstatus1, 
        accountpassword:accountpassword1
      }    
    this.updatForm.controls['acoountid'].setValue(acoountid1);
    this.teachersAndStudents.acceptorder(email1);
   // this.dialog.open(this.callUpdateTeacherDialog)
  }
  SearchDialog(){

  }
  updateTeacher(){
    
    this.teachersAndStudents.updateAccountStatus(this.previousData);
    console.log(this.previousData);
    
    //this.teachersAndStudents.getAllTeachers();
    window.location.reload();
  }

  inputValue(ev:any){
    
    this.TeacherName=ev.target.value;
    console.log(ev.target.value);
  }

  search(data:any){
    this.http.get('https://localhost:44363/api/account/searchTeacher/'+data).subscribe((result)=>{
      this.AllTeachers=result;
      console.log('Search SSSSSS')
      console.log(result)
    })   
  
    }

    SendEmailForm : FormGroup = new FormGroup({
      EmailTo : new FormControl(),
      textMsg: new FormControl(),
      Password:new FormControl(),
      EmailFrom:new FormControl(),
   })
    openSendMessageDialog(EmailTo1:any, textMsg1:any,Password1:any,EmailFrom1:any)
    {   
        this.previousMsgs={
          EmailTo:EmailTo1,
          textMsg:textMsg1,
          Password:Password1,
          EmailFrom:EmailFrom1
        }    
    //  this.SendEmailForm.controls['categoryid'].setValue(categoryid1);
      this.dialog.open(this.callSendEmailDialog)
    }
    
    callJWT(){
      this.teachersAndStudents.sendemailcontact(this.SendEmailForm.value);    
      window.location.reload();
    }
    openDeleteDialog(acoountid :any){
      const dialogRef= this.dialog.open(this.callDeleteDialog);
      dialogRef.afterClosed().subscribe((res)=>{
        if(res!==undefined){
           if(res=="yes")
           {
           this.teachersAndStudents.deleteteacher(acoountid);
           window.location.reload();
          }
           else if (res=="no")
           console.log("thank you");
        }
      })
     }
    
    //  Accept(accountid: any) {
    //    debugger
    //   console.log('Accept');
    //   console.log(accountid);
    //   this.http.put('https://localhost:44363/api/account/UpdateAccount/' + accountid + this.AcceptStat, ' ').subscribe((result) => {
    //     console.log(result);
    //   });
    //   window.location.reload();
  
    // }


}
