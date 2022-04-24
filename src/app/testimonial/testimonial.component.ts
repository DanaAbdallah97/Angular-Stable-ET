import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../service/authservice.service';
import { TestimonialService } from '../service/testimonial.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor(public testimonial: TestimonialService, public account: AuthserviceService, private http: HttpClient) {

    if (localStorage.getItem('IdAccount')==null) {
      
      this.flage = false;
    }
    else
    {
      this.flage=true
    }

    console.log('account iddddddd', this.AccountIdInt);
    console.log('account iddddddd',localStorage.getItem('IdAccount') );

  }

  flage: any = false;

  AllTestimonial: any = [];

  AccountIdInt:any=localStorage.getItem('IdAccount');
  AccountId: any = parseInt(this.AccountIdInt);
  
  testmonialid = Math.floor((Math.random() * 99999) + 1);;
  rate = 5;
  testmonialstatus = 'waiting'

  FirstComment: any;
  p1: any;
  Name1: any;
  SecoundComment: any;
  p2: any;
  Name2: any;
  TheredComment: any;
  p3: any;
  Name3: any;

  TestmonialAccount: any = {};


  onSubmit(data: any) {
    console.warn('Testamoinal',data);
    this.http.post('https://localhost:44363/api/Testmonial/createTestmonial', data).subscribe((result) => {

      console.log(result);
    })

    window.location.reload();
    //     this.http.post('https://localhost:44363/api/Account/createAccount',data).subscribe((result)=>{
    // console.warn("result",result);
    //     });
  }




  ngOnInit(): void {
    this.testimonial.getTestmonial().subscribe((result) => {
      console.warn(result);
      this.AllTestimonial = result;

      this.FirstComment = this.AllTestimonial[this.AllTestimonial.length - 1].testmonialcomment;
      this.Name1 = this.AllTestimonial[this.AllTestimonial.length - 1].firstname + ' ' + this.AllTestimonial[this.AllTestimonial.length - 1].lastname;
      this.p1 = this.AllTestimonial[this.AllTestimonial.length - 1].profilepicture


      this.SecoundComment = this.AllTestimonial[this.AllTestimonial.length - 2].testmonialcomment;
      this.Name2 = this.AllTestimonial[this.AllTestimonial.length - 2].firstname + ' ' + this.AllTestimonial[this.AllTestimonial.length - 2].lastname;
      this.p2 = this.AllTestimonial[this.AllTestimonial.length - 2].profilepicture

      this.TheredComment = this.AllTestimonial[this.AllTestimonial.length - 3].testmonialcomment;
      this.Name3 = this.AllTestimonial[this.AllTestimonial.length - 3].firstname + ' ' + this.AllTestimonial[this.AllTestimonial.length - 3].lastname;
      this.p3 = this.AllTestimonial[this.AllTestimonial.length - 3].profilepicture

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


