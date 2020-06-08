import { Component, OnInit } from '@angular/core';
import {CartserviceService} from '../cartservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

loginuser = {}

  constructor(private cartserviceService: CartserviceService, private rout : Router) { }

  ngOnInit() {
  }

  logindata(){
    this.cartserviceService.loginuser(this.loginuser).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this.rout.navigate(['/']);
        alert("login success");
      },
      err => console.log(err)  
    )  
  }


}
