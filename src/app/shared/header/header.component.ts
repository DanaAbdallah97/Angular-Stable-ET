import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginState?: boolean=(localStorage.getItem('UserLoginFlage') == 'true');

  constructor(private login: AuthserviceService) {
    this.loginState=(localStorage.getItem('UserLoginFlage') == 'true');
    console.log('headerr state ')
    console.log(this.loginState);

  }

  ngOnInit(): void {
  }

}
