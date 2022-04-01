import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  TeacherName:string='';
  previousData:any={}
  constructor(private teachersAndStudents:TeachersAndStudentsService,public http:HttpClient,private dialog:MatDialog) { }
  AllTeachers:any={}
  ngOnInit(): void {
    this.teachersAndStudents.getAllTeachers().subscribe((res)=>{
      this.AllTeachers=res;
    })    
  }
  InputValue(ev:any){
    this.TeacherName=ev.target.value;  
  }
  Search(){
    const teacherobj={
      TeacherName:this.TeacherName.toString()  
    }
    this.teachersAndStudents.SearchTeacherByName(teacherobj);
   
  }
  updatForm:FormGroup=new FormGroup
  (
    {
      acoountid: new FormControl(),
      email: new FormControl(),
      accountstatus:new FormControl(),
   
    }
  )
  openUpdateDialog(acoountid1:any, email1:any, accountstatus1:any)
  {   debugger
      this.previousData={
        acoountid:acoountid1,
        email:email1,
        accountstatus:accountstatus1
      }    
    this.updatForm.controls['acoountid'].setValue(acoountid1);
    this.dialog.open(this.callUpdateTeacherDialog)
  }
  updateTeacher(){
    debugger
    this.teachersAndStudents.updateAccountStatus(this.updatForm.value);
    console.log(this.previousData);
    debugger
    //this.teachersAndStudents.getAllTeachers();
    window.location.reload();
  }

  
 
  

  // Search(){
  //   const teacherobj={
  //          TeacherName:this.TeacherName.toString()  
  //        };
  //        this.teachersAndStudents.SearchTeacherByName(teacherobj)
  // }
  // search(){
  //   debugger;
  //   this.teachersAndStudents.SearchTeacherByName(this.TeacherName.toString());
  //   }


}
