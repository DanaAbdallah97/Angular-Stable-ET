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
     this.p1='79a87c48-96a4-43e4-86e2-838056d185d9_student1.jpg'



     this.SecoundComment= this.AllTestimonial[this.AllTestimonial.length-2].testmonialcomment;
     this.p2= '1e7fa72d-e45d-4340-8129-35f9de4bc87f_T1.jpg'



     this.TheredComment= this.AllTestimonial[this.AllTestimonial.length-3].testmonialcomment;
     this.p3= '38ae1d1d-c805-4f39-bb90-f8821ede5231_AhmadAli.jpg'


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


