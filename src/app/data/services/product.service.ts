import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Product from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private restUrl = 'http://localhost:8090/';

  products:Product[]=[{
    productName:"BMW",
    productPrice:76000,
    quantity: 2 ,
     description:  "The 2022 BMW X5 is a versatile player in the mid-size luxury-SUV segment, combining a well-appointed interior and a pleasurable driving experience in one handsome package. Even the entry-level models are richly outfitted with modern technology and convenience features, not to mention a silky-smooth inline-six cylinder engine. Upgrading to the plug-in hybrid model gives the X5 the ability to drive solely on electric power for short trips while the optional twin-turbo V-8 engine delivers seriously punchy acceleration",
     image:"../assets/img/download.jpeg"
  },
     { productName:"marcedas",
    productPrice:80000,
    quantity: 2 ,
     description:  "The 2022 BMW X5 is a versatile player in the mid-size luxury-SUV segment, combining a well-appointed interior and a pleasurable driving experience in one handsome package. Even the entry-level models are richly outfitted with modern technology and convenience features, not to mention a silky-smooth inline-six cylinder engine. Upgrading to the plug-in hybrid model gives the X5 the ability to drive solely on electric power for short trips while the optional twin-turbo V-8 engine delivers seriously punchy acceleration",
     image:"../assets/img/GLE.png"
  },
]


  constructor(private http : HttpClient) { }

  // private httpOptions = {
  //   headers: new HttpHeaders( { 'Content-Type': 'application/json' })
  //   };

  getProducts(){
    return this.products
  }
  
   getProductFromMysql (): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8080/employee`)
    // .subscribe( (data) => console.log(data) )
    }

  addproduct(product:Product){
    this.products.push(product);
  }
}
