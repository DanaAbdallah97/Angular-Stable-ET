import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('',[Validators.required,Validators.email]);
  password=new FormControl('',[Validators.required,Validators.minLength(6)]);

  constructor(private router:Router , public auth:AuthserviceService) { }

  ngOnInit(): void {
  }
  submit(){
    this.auth.submit(this.email , this.password);
  }


}
