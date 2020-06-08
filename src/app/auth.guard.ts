import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import {CartserviceService} from './cartservice.service'


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private serviece: CartserviceService, private rout: Router){}

  canActivate():boolean{
    if(this.serviece.loggedin()){
      return true
    }else{
      this.rout.navigate(['/login'])
      return false
    }
  }
  
}
