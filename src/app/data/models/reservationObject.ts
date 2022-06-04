import Address from "./address";

export default interface ReservationObject{
    userName:string;
    address:Address;
    paymentMethod?: string ;
    note?:string;
  
}