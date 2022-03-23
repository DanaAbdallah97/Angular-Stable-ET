import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-student-registerdesign',
  templateUrl: './student-registerdesign.component.html',
  styleUrls: ['./student-registerdesign.component.css']
})
export class StudentRegisterdesignComponent implements OnInit {
  @Input() acoountid: number | undefined
  @Input() roleid: number | undefined
  @Input() firstname: string | undefined
  @Input() lastname: string | undefined
  @Input() accountpassword: string | undefined
  @Input() email:string | undefined
  @Input() phonenumber :string | undefined
  @Input() gender: string | undefined
  @Input() birthofdate: string | undefined
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

  emailuser = new FormControl('',[Validators.required,Validators.email]);
  passworduser =new FormControl('',[Validators.required,Validators.minLength(6)]);


  ngOnInit(): void {
  }

}
