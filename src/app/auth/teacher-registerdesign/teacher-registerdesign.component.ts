import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-teacher-registerdesign',
  templateUrl: './teacher-registerdesign.component.html',
  styleUrls: ['./teacher-registerdesign.component.css']
})
export class TeacherRegisterdesignComponent implements OnInit {
  @Input() acoountid: number | undefined
  @Input() roleid: number | undefined
  @Input() firstname: string | undefined
  @Input() lastname: string | undefined
  @Input() accountpassword: string | undefined
  @Input() email:string | undefined
  @Input() phonenumber :string | undefined
  @Input() gender: string | undefined
  @Input() birthofdate: Date | undefined
  @Input() profilepicture: string | undefined
  @Input() accountstatus: string | undefined
  @Input() certificate: string | undefined
  @Input() specialization:string | undefined
  @Input() wline :string | undefined
  @Input() hline: string | undefined
  @Input() role: string | undefined
  @Input() appointments: string | undefined
  @Input() courses:string | undefined
  @Input() testmonials:string | undefined
  
  constructor(private router: Router, public auth: AuthserviceService) { }
  registerForm:FormGroup = new FormGroup({
    firstname:new FormControl(''),
    lastname:new FormControl(''),
    accountpassword:new FormControl('',[Validators.required,Validators.minLength(8)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    phonenumber:new FormControl(''),
    gender:new FormControl(''),
    birthofdate:new FormControl(''),
    profilepicture:new FormControl(''),
    certificate:new FormControl(''),
    specialization :new FormControl('')
  })

  ngOnInit(): void {
  }
  
  submit(){
    debugger
    console.log(this.registerForm.value);
    this.auth.createAccount(this.registerForm.value)

  }
  uploadimg(file:any){
    debugger
    if(file.length == 0)
    return;
    const uploadfile = <File>file[0]; 
    const formData = new FormData();
    formData.append('file' , uploadfile , uploadfile.name);
    this.auth.uploadAttachment(formData);
  }

  uploadcert(file:any){
    debugger
    if(file.length == 0)
    return;
    const uploadfile = <File>file[0]; 
    const formData = new FormData();
    formData.append('file' , uploadfile , uploadfile.name);
    this.auth.uploadAttachment(formData);
  }
}



