import { Component, OnInit } from '@angular/core';
import {CartserviceService} from '../cartservice.service'
import {Observable} from 'rxjs/observable';
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registered = {}

  constructor( private cartserviceService: CartserviceService, private rout : Router) { }

  ngOnInit() {
  }

  registeruser(){
    this.cartserviceService.registeruser(this.registered).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this.rout.navigate(['/']);
      },
      err => console.log(err)  
    )  
  }

}
