import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ProdouctDetailsComponent } from './prodouct-details/prodouct-details.component';
import { MycartComponent } from './mycart/mycart.component'
import { LoginComponent } from './login/login.component'
import { SpecialComponent } from './special/special.component'
import { from } from 'rxjs';
import { OrderpageComponent } from './orderpage/orderpage.component'

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'prodouct-details', component: ProdouctDetailsComponent},
  {path : 'orderpage', component: OrderpageComponent},
  {path : 'signup', component: SignupComponent},
  {path : 'mycart', component: MycartComponent},
  {path : 'login', component: LoginComponent},
  {path : 'special', component: SpecialComponent,
  canActivate : [AuthGuard]

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
