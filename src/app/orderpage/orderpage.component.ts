import { Component, OnInit } from '@angular/core';
import {CartserviceService} from '../cartservice.service'


@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.scss']
})
export class OrderpageComponent implements OnInit {

  orders = {}

  constructor(private cartserviceService: CartserviceService) { }

  ngOnInit() {
   
  }

orderdetail(){
  this.cartserviceService.orderuser(this.orders).subscribe(
    res => {
      console.log(res)
      
    },
    err => console.log(err)  
  )  
}
}

