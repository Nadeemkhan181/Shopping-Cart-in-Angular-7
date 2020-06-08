import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Product } from './entities/product.entity';


@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

result: any;
private registerurl = "http://localhost:7000/api/register";
private loginurl = "http://localhost:7000/api/login";
private eventsurl = "http://localhost:7000/api/events";
private specialurl = "http://localhost:7000/api/special";
private producturl = "http://localhost:7000/index/productdata";


private products: Product[];


constructor(private _http : HttpClient){

  
//   this.products  = [{
    
//     "id" : "p1",
//    "name" : "DenimShirt",
//     "src" : "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg",
//    "price" : 140
   
//     },
   
//    {
//      "id" : "p2",
//      "name" : "Sweatshirt",
//       "src" : "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg",
//       "price" : 139
//    },
//    {
//     "id" : "p3",
//     "name" : "Black jacket",
//      "src" : "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
//      "price" : 150
//   },  {
//     "id" : "p4",
//     "name" : "White Shirt",
//      "src" : "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg",
//      "price" : 100
//   }
//   ]

// }
}

registeruser(user)
{
  return this._http.post<any>(this.registerurl, user)
}

loginuser(user)
{
  return this._http.post<any>(this.loginurl, user)
}


eventuser()
{
  return this._http.get<any>(this.eventsurl)
}

spcialuser()
{
  return this._http.get<any>(this.specialurl)
}


product()
{
  return this._http.get<any>(this.producturl)
}

loggedin(){
  return !!localStorage.getItem('token')
}
items: any = [];
count = 0;

  
  

findAll(): Product[] {
  return this.products;
}

find(id: string): Product {
  return this.products[this.getSelectedIndex(id)];
}

private getSelectedIndex(id: string) {
  for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
          return i;
      }
  }
  return -1;
}
   
  
}