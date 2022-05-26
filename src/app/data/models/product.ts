export default interface Product{
    productName:string;
    productPrice:number;
    quantity?: number ;
     description?: string ;
     image?:string | ArrayBuffer | null 
 
}