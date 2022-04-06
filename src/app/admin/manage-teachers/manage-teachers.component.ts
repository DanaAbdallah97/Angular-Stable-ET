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

  TeacherName:string='';
  previousData:any={}
  previousMsgs:any={}
  teachername:any;
  constructor(private teachersAndStudents:TeachersAndStudentsService,public http:HttpClient,private dialog:MatDialog) { }
  AllTeachers:any={}
  ngOnInit(): void {
    this.teachersAndStudents.getAllTeachers().subscribe((res)=>{
      this.AllTeachers=res;
    })    
  }
  
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
  openUpdateDialog(acoountid1:any,roleid1:any,firstname1:any,lastname1:any,email1:any,accountpassword1:any,phonenumber1:any,gender1:any,birthofdate1:any,profilepicture1:any,certificate1:any,specialization1:any,accountstatus1:any)
  {   debugger
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
    this.dialog.open(this.callUpdateTeacherDialog)
  }
  SearchDialog(){

  }
  updateTeacher(){
    debugger
    this.teachersAndStudents.updateAccountStatus(this.previousData);
    console.log(this.previousData);
    debugger
    //this.teachersAndStudents.getAllTeachers();
    window.location.reload();
  }

  inputValue(ev:any){
    debugger
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
      debugger
      this.teachersAndStudents.sendemailcontact(this.SendEmailForm.value);    
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
    



}
