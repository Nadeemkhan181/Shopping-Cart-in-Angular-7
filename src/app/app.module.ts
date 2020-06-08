
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { ProdouctDetailsComponent } from './prodouct-details/prodouct-details.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MycartComponent } from './mycart/mycart.component';
import { HttpClientModule } from '@angular/common/http';
import { CartserviceService } from './cartservice.service';
import { LoginComponent } from './login/login.component';
import { SpecialComponent } from './special/special.component';
import { AuthGuard } from './auth.guard';
import { OrderpageComponent } from './orderpage/orderpage.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ProductsComponent,
    ProdouctDetailsComponent,
    HomeComponent,
    MycartComponent,
    LoginComponent,
    SpecialComponent,
    OrderpageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule ,
    HttpClientModule
  ],
  providers: [CartserviceService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
    
