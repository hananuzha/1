import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import Product from '../data/models/product';
import { ProductService } from '../data/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {




  products: Product[] = [];
  //productServcie:ProductService;
  file: string | ArrayBuffer | null = "";

  constructor(private productServcie: ProductService) {

    this.products = productServcie.getProducts();
  }



  // setQuantity(value: number) {
  //   this.product.quantity=value
  // }
  renderPrice(event: any, product: Product) {


    var footer = document.getElementById(product.productName)
    if (footer) {
      footer.style.display = 'block'
      console.log(event)
      footer.innerText = (product.productPrice).toString()
    }

  }

  addProduct(e: any) {
    e.preventDefault();
    if (this.file) {
      let product: Product = {
        productName: (<HTMLInputElement>document.getElementById("productName")).value,
        productPrice: parseInt((<HTMLInputElement>document.getElementById("price")).value),
        description: (<HTMLInputElement>document.getElementById("description")).value,
        image: this.file
      }
      this.productServcie.addproduct(product)
    }
    else {
      alert("Please select a file first")
    }

  }

  onFilechange(event: any) {
    console.log(event.target.files[0])

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.file= event.target!.result;
      }
    }
    console.log(this.file)
  }

  ngOnInit(): void {
    this.productServcie.getProductFromMysql().subscribe(
      (response:any[])=>
      {
        console.log(response)
      },
      (error:HttpErrorResponse)=>{
          console.log(error.message)
      }

    )
    
    
    
    

  }

}
