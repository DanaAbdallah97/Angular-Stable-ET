import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TeacherRegisterComponent } from 'src/app/auth/teacher-register/teacher-register.component';
import { TeachersAndStudentsService } from 'src/app/service/teachers-and-students.service';

@Component({
  selector: 'app-sendemail',
  templateUrl: './sendemail.component.html',
  styleUrls: ['./sendemail.component.css']
})
export class SendemailComponent implements OnInit {
  categoriesList:any={}
  constructor(private service:TeachersAndStudentsService) { }

createForm : FormGroup = new FormGroup({

  EmailTo : new FormControl('',Validators.required),

})

save(){
  this.service.acceptorder(this.createForm.value);
}

  ngOnInit(): void {
  }
}
