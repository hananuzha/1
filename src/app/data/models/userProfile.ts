import Address from "./address";

export default interface userProfile{
    id?:number
    name:string;
    phone:string;
    company_name?: string ;
    Address?:Address;
  
}