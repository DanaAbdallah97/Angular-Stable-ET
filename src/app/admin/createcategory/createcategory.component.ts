import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent implements OnInit {


  ngOnInit(): void {
  }

  createForm : FormGroup = new FormGroup({

    categoryname : new FormControl('',Validators.required),
    categorydescription: new FormControl('',Validators.required),
    //categoryimage: new FormControl('',Validators.required),
   // courses : new FormControl()
 })
   constructor(private cats : CategoryService) { }

   save(){
       this.cats.createcategory(this.createForm.value);
   }

}
