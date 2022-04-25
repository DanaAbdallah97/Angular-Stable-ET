import { Component, OnInit,ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { TeachersAndStudentsService } from 'src/app/service/teachers-and-students.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private teachersAndStudents:TeachersAndStudentsService) { }
  numberOfStudents:number=8;
  numberOfTeachers:number=7;
  numberOfCourses:number=5;
  numberOfCategory:number=6;
  BarChart :any= [];
  ngOnInit(): void {
    console.log('numberOfTeachers',this.numberOfTeachers)

      this.teachersAndStudents.getCountOfTeachers().subscribe((res)=>{  
        debugger 
        this.numberOfTeachers=<number>res;
        console.log('res',res);
        console.log('numberOfTeachers',this.numberOfTeachers);
      })
       this.teachersAndStudents.getCountOfStudents().subscribe((res)=>{       
         this.numberOfStudents=<number>res;   
      })
      this.teachersAndStudents.getCountOfCourses().subscribe((res)=>{
        this.numberOfCourses=<number>res;
      })
      this.teachersAndStudents.getCountOfCategory().subscribe((res)=>{
        this.numberOfCategory=<number>res;
      })
}

canvas: any;
ctx: any;
@ViewChild('mychart') mychart:any;

ngAfterViewInit() {
  
  console.log(this.numberOfTeachers)
  this.canvas = this.mychart.nativeElement; 
  this.ctx = this.canvas.getContext('2d');

  new Chart(this.ctx, { 
    type: 'bar',
    data: {
      labels: ['Teachers', 'Students', 'Courses','Category','', ],
      datasets: [{        
        data: [this.numberOfTeachers,this.numberOfStudents,7,8,5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    }
});
}

}

      

