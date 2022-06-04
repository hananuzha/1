import Address from "./address";

export default interface User{
    id?:number
    name:string;
    phone:string;
    company_name?: string ;
    Address?:Address;
  
}