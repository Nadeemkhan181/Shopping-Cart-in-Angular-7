import { Component, OnInit } from '@angular/core';
import {CartserviceService} from '../cartservice.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-prodouct-details',
  templateUrl: './prodouct-details.component.html',
  styleUrls: ['./prodouct-details.component.scss']
})
export class ProdouctDetailsComponent  {

  
  constructor(private route: ActivatedRoute,
    public cartserviceService: CartserviceService) {}

  items = []

 


}
