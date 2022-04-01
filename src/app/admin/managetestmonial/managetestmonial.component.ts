import { Component, OnInit, TemplateRef, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestimonialService } from 'src/app/service/testimonial.service';

@Component({
  selector: 'app-managetestmonial',
  templateUrl: './managetestmonial.component.html',
  styleUrls: ['./managetestmonial.component.css']
})
export class ManagetestmonialComponent implements OnInit { 
  @ViewChildren('callDeleteDialog') callDeleteDialog! :TemplateRef<any>
  
  constructor(public testomonial:TestimonialService , private dialog:MatDialog) { }
  testmonialResult:any={}
  ngOnInit(): void {
    this.testomonial.getTestmonial().subscribe((result) => {
      console.warn(result);
      this.testmonialResult = result;
  })
  }
  openDeleteDialog(testmonialid:any){
    const dialogRef= this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe((res)=>{
      if(res!==undefined){
         if(res=="yes")
         this.testomonial.deleteTestomonial(testmonialid);
         else if (res=="no")
         console.log("thank you");
      }
    })
   }
}

