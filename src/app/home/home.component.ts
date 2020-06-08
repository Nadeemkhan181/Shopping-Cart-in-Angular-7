import { Component, OnInit, Input, Output } from '@angular/core';
import {CartserviceService} from '../cartservice.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../entities/product.entity';
import { AotSummaryResolver } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
 
  events = []
  private product: Product[];

	constructor(
		private productService: CartserviceService
	) { }

	ngOnInit() {
    this.product = this.productService.findAll();
    
    this.productService.product().subscribe(
      data => this.events = data
     
    )  

  }
	



  carouselimages = {
      
    src1 : "assets/images/city-daylight-diversity-1154861.jpg" ,
    src2 : "assets/images/clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg",
    src3 : "assets/images/bench-cup-facial-expression-374044.jpg"
   
   }
  
  

  
}

