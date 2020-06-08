import { Component } from '@angular/core';
import {CartserviceService} from './cartservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  users: Array<any>;
  


  constructor(private route: ActivatedRoute,
    private cartserviceService: CartserviceService) {
     
    }

}