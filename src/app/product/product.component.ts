import { Component, Inject, OnInit } from '@angular/core';
import  Product from '../data/models/product';
import { ProductService } from '../data/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {




  products:Product[]=[];
  productServcie:ProductService;

constructor(productServcie:ProductService){
  this.productServcie=productServcie;
this.products=productServcie.getProducts();
}


  
  // setQuantity(value: number) {
  //   this.product.quantity=value
  // }
   renderPrice(event:any,product:Product) {

   
        var footer = document.getElementById(product.productName)
        if(footer){
        footer.style.display = 'block'
        console.log(event)
       footer.innerText = (product.productPrice).toString()
        }

    }

     addProduct(e:any){
      e.preventDefault();


       let product:Product={
        productName:(<HTMLInputElement>document.getElementById("productName")).value,
        productPrice:parseInt((<HTMLInputElement>document.getElementById("price")).value)
       };

  

     this.productServcie.addproduct(product)
     


     }
  
  

  ngOnInit(): void {
  }

}
