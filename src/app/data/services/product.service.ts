import { Injectable } from '@angular/core';
import Product from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


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
  constructor() { }
  getProducts(){
    return this.products
  }

  addproduct(product:Product){
    this.products.push(product);
  }
}
