import { Component, OnInit, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatInput } from '@angular/material/input';
import { AboutUsService } from 'src/app/service/about-us.service';
import { CreateaboutusComponent } from '../createaboutus/createaboutus.component';



@Component({
  selector: 'app-manage-page',
  templateUrl: './manage-page.component.html',
  styleUrls: ['./manage-page.component.css']
})
export class ManagePageComponent implements OnInit {
  @ViewChild('callCreateDialog') callCreateDialog! :TemplateRef<any>
  @ViewChild('callUpdateDialog') callUpdateDialog! :TemplateRef<any>
  @ViewChild('callDeleteDialog') callDeleteDialog! :TemplateRef<any>
  previousData:any={}
  descriptionAboutus:any={}
  first_Name:any=''

  constructor(private dialog:MatDialog, public abouts:AboutUsService) { }

  ngOnInit(): void {
    this.abouts.getAboutUs().subscribe((result) => {
      console.warn(result);
      this.descriptionAboutus = result;
  })
  }
  inputValue(ev:any){
    this.first_Name=ev.target.value;
    console.log(ev.target.value);
  }

  // search(){
  //   debugger;
  //   this.abouts.getbyName(this.first_Name.toString());
  //   }

 
  openCreateDialog(){
    this.dialog.open(this.callCreateDialog)
  }
  // save(){
  //   this.abouts.createaboutus(this.CreateForm.value);
  //  // console.log(this.userInfo);

   
  // }
  openUpdateDialog(managepageid1:any,aboutustext1:any,aboutusphone1:any,aboutusemail1:any,aboutusadders1:any)
  {   
      this.previousData={
        managepageid:managepageid1,
        aboutustext:aboutustext1,
        aboutusphone:aboutusphone1,
        aboutusemail:aboutusemail1,
        aboutusadders:aboutusadders1,
       // background:background1
      }    
    this.updatForm.controls['managepageid'].setValue(managepageid1);
    this.dialog.open(this.callUpdateDialog)
  }

  updatForm:FormGroup=new FormGroup
  (
    {
      managepageid: new FormControl(),
      aboutustext: new FormControl(),
      aboutusphone:new FormControl(),
      aboutusemail:new FormControl(),
      aboutusadders:new FormControl(),
    //  background:new FormControl()
    }
  )

  
  uploadImage(file:any){
    debugger
    if(file.length===0)
    return;
    const uploadfile=<File>file[0];   
    const formData=new FormData();
    formData.append('file',uploadfile,uploadfile.name);
    this.abouts.uploadAttachment(formData);
  }

  updateAboutUs(){
    debugger
    this.abouts.updateABoutUs(this.updatForm.value);
    console.log(this.previousData);
    window.location.reload();
  }
  
  createaboutus( ){   
    this.dialog.open(CreateaboutusComponent);
  }
  openDeleteDialog(id:any){
    const dialogRef=this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe((res)=>{
      if(res!==undefined)
      {
        if(res=="yes"){
        this.abouts.deleteaboutUs(id);
        window.location.reload();
      }
        else if(res=="no")
        console.log("Thank you ");
      }
    })
  }




}