import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-concatus',
  templateUrl: './concatus.component.html',
  styleUrls: ['./concatus.component.css']
})
export class ConcatusComponent implements OnInit {
  @Input() messageid: number | undefined
  @Input() subject: string | undefined
  @Input() messagebody: string | undefined
  @Input() senderemail: string | undefined
  @Input() recevieremail: string | undefined
  constructor( public home:HomeService) { }

  ngOnInit(): void {
  }

}
