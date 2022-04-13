import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  UserLoginFlage:any;

constructor(){
  console.log('app ccccccccccccccccccc');
  console.log(localStorage.getItem('UserLoginFlage'));

}
}

