import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AboutUsService } from 'src/app/service/about-us.service';
import { CategoryService } from 'src/app/service/category.service';
import { HomeService } from 'src/app/service/home.service';
import { CreatecategoryComponent } from '../createcategory/createcategory.component';


@Component({
  selector: 'app-managecategory',
  templateUrl: './managecategory.component.html',
  styleUrls: ['./managecategory.component.css']
})
export class ManagecategoryComponent implements OnInit {

  @ViewChild('callUpdateDialog') callUpdateDialog! :TemplateRef<any>
  @ViewChild('callDeleteDialog') callDeleteDialog! :TemplateRef<any>

  categoriesList:any={}
  previousData:any={}
  selectedFile: any;
  P_picture: any;
  constructor(private http :HttpClient, private dialog:MatDialog,public home :HomeService,private catetgory : CategoryService)  {}
   
  ngOnInit(): void {   
    this.home.getAllCategories().subscribe((result) => {
      console.warn(result);
      this.categoriesList = result; 
});
  }
  createcategory( ){   
    this.dialog.open(CreatecategoryComponent);
  }
 
  updatForm:FormGroup=new FormGroup
  (
    {
      categoryid: new FormControl(),
      categoryname: new FormControl(),
      categorydescription:new FormControl(),
      categoryimage:new FormControl(),
      courses:new FormControl(),
    }
  )
  openUpdateDialog(categoryid1:any, categoryname1:any, categorydescription1:any, categoryimage1:any)
  {   
      this.previousData={
        categoryid:categoryid1,
        categoryname:categoryname1,
        categorydescription:categorydescription1,
        categoryimage:categoryimage1
      }    
    this.updatForm.controls['categoryid'].setValue(categoryid1);
    this.dialog.open(this.callUpdateDialog)
  }

  updatecategory(){
    debugger
    this.catetgory.updatecategory(this.updatForm.value);    
    console.log(this.previousData);
    //window.location.reload();
  }

  openDeleteDialog(categoryid :any){
    const dialogRef= this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe((res)=>{
      if(res!==undefined){
         if(res=="yes")
         this.catetgory.deletecategory(categoryid);
         else if (res=="no")
         console.log("thank you");
      }
    })
   }


   onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);

    this.P_picture = this.selectedFile.name;

    this.http.post('https://localhost:44363/api/category/UploadImage', fd).subscribe(res => {
      // console.log(res);
    });
    this.catetgory.updatecategory(this.updatForm.value);
  }

  
  

   uploadImage(file:any){
    debugger
    if(file.length===0)
    return;
    const uploadfile=<File>file[0];   
    const formData=new FormData();
    formData.append('file',uploadfile,uploadfile.name);
    this.catetgory.uploadAttachment(formData);
  }
}
