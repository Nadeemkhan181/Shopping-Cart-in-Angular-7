import { Component, OnInit } from '@angular/core';
import {CartserviceService} from '../cartservice.service'


@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent implements OnInit {

  specialEvents = []
  constructor(private service: CartserviceService) { }

  ngOnInit() {
    this.service.spcialuser().subscribe(

      res => this.specialEvents = res,
      err => console.log(err)
    )
  }

}
