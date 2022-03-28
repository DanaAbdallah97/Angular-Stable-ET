import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../service/authservice.service';
import { TestimonialService } from '../service/testimonial.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor(public testimonial:TestimonialService, public account:AuthserviceService ) { }

AllTestimonial:any=[];
FirstComment:any;
p1:any;
SecoundComment:any;
p2:any;
TheredComment:any;
p3:any;

TestmonialAccount :any= {};

  ngOnInit(): void {
    this.testimonial.getTestmonial().subscribe((result) => {
      console.warn(result);
      this.AllTestimonial = result;
     this.FirstComment= this.AllTestimonial[this.AllTestimonial.length-1].testmonialcomment;
     this.SecoundComment= this.AllTestimonial[this.AllTestimonial.length-2].testmonialcomment;
     this.TheredComment= this.AllTestimonial[this.AllTestimonial.length-3].testmonialcomment;
    })

    // console.log('TestmonialAccount')
    // debugger
    // this.TestmonialAccount.concat(this.account.getAllAccounts()) ;
    // console.log('TestmonialAccount')
    // console.log(this.TestmonialAccount)

// for (let index = 0; index < this.AllTestimonial[this.AllTestimonial.length-1]; index++) {
//   console.log('sasssssss')
//   if(this.AllTestimonial[this.AllTestimonial.length-1].acoountid==this.TestmonialAccount[index].acoountid)
//   {
//     this.p1=this.TestmonialAccount[index].profilepicture;
//   }
  
// }

}
}


