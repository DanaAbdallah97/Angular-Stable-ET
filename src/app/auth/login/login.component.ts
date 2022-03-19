import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email=new FormControl('',[Validators.email,Validators.required]);
password=new FormControl('',[Validators.required,Validators.minLength(8)]);

  constructor() { }

  ngOnInit(): void {
  }

}
