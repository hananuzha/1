import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Product from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productServcie: ProductService) {


  }
  products: Product[] = [];
  //productServcie:ProductService;
  file: string | ArrayBuffer | null = "";

  public editProduct: Product|null=null;
  public deleteProduct: Product|null=null;


  



  // setQuantity(value: number) {
  //   this.product.quantity=value
  // }
  renderPrice(event: any, product: Product) {


    var footer = document.getElementById(product.name)
    if (footer) {
      footer.style.display = 'block'
      console.log(event)
      footer.innerText = (product.productPrice).toString()
    }

  }

  addProduct(addForm: NgForm): void  {
    // e.preventDefault();
    // if (this.file) {
    //   let product: Product = {
    //     productName: (<HTMLInputElement>document.getElementById("productName")).value,
    //     productPrice: parseInt((<HTMLInputElement>document.getElementById("price")).value),
    //     description: (<HTMLInputElement>document.getElementById("description")).value,
    //     //image: this.file
    //   }
      
    //   this.addProductToSql(product)
    //   this.getProducts()
    // }
    // else {
    //   alert("Please select a file first")
    // }

    this.productServcie.addProductMysql(addForm.value).subscribe(
      (response: Product) => {
        console.log(response);
        this.getProducts();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );

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
  }

  ngOnInit(): void {
    this.getProducts()

  }

  getProducts(){
    this.productServcie.getProductFromMysql().subscribe(
      (response:Product[])=>
      {
        console.log(response)
        this.products=response;
      },
      (error:HttpErrorResponse)=>{
          console.log(error.message)
      }

    )
  } 

  addProductToSql(product:Product){
    this.productServcie.addProductMysql(product).subscribe(
      (response:Product)=>
      {
        console.log(response)
      },
      (error:HttpErrorResponse)=>{
        console.log(error.message)
    }
    )
  }
  openModel(product:Product,type:string):void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    
    if (type === 'edit') {
      this.editProduct = product;
      button.setAttribute('data-target', '#updateProductModal');
    }
    if (type === 'delete') {
      this.deleteProduct = product;
      button.setAttribute('data-target', '#deleteProductModal');
    }
    container?.appendChild(button);
    button.click();
  }



}
