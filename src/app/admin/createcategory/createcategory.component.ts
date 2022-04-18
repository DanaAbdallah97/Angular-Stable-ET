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
    categoryimage: new FormControl(),
   // courses : new FormControl()
 })
   constructor(private cats : CategoryService) { }

   save(){
       this.cats.createcategory(this.createForm.value);
   }
   uploadimg(file:any){
     if(file.length === 0)
     return ;
     const uploadfile = <File>file[0];
     const formData = new FormData();
     formData.append('file',uploadfile,uploadfile.name);
     this.cats.uploadAttachment(formData);
  }
//   onF

}
