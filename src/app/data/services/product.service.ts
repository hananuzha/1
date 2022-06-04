import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Product from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private restUrl = environment.apiBaseURL;

  products:Product[]=[{
    id:1,
    name:"BMW",
    productPrice:76000,
    quantity: 2 ,
     description:  "The 2022 BMW X5 is a versatile player in the mid-size luxury-SUV segment, combining a well-appointed interior and a pleasurable driving experience in one handsome package. Even the entry-level models are richly outfitted with modern technology and convenience features, not to mention a silky-smooth inline-six cylinder engine. Upgrading to the plug-in hybrid model gives the X5 the ability to drive solely on electric power for short trips while the optional twin-turbo V-8 engine delivers seriously punchy acceleration",
  },
     {id:2,
        name:"marcedas",
    productPrice:80000,
    quantity: 2 ,
     description:  "The 2022 BMW X5 is a versatile player in the mid-size luxury-SUV segment, combining a well-appointed interior and a pleasurable driving experience in one handsome package. Even the entry-level models are richly outfitted with modern technology and convenience features, not to mention a silky-smooth inline-six cylinder engine. Upgrading to the plug-in hybrid model gives the X5 the ability to drive solely on electric power for short trips while the optional twin-turbo V-8 engine delivers seriously punchy acceleration",
  },
]


  constructor(private http : HttpClient) { }

 

  getProducts(){
    return this.products
  }
  addproduct(product:Product){
    this.products.push(product);
  }
  
   getProductFromMysql (): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.restUrl}/product`)
    // .subscribe( (data) => console.log(data) )
    }
   addProductMysql (product: Product): Observable<Product>{
      return this.http.post<Product>(`${this.restUrl}/product`,product);
      // .subscribe( (data) => console.log(data) )
      }
   updateProductFromMysql (product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.restUrl}/product`,product)
    // .subscribe( (data) => console.log(data) )
    }
    deleteProductFromMysql (id:number): Observable<Product>{
      return this.http.delete<Product>(`${this.restUrl}/product/${id}`)
      // .subscribe( (data) => console.log(data) )
      }
  
}
