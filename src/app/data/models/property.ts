import Address from "./address";
import PropertyImage from "./PropertyImage";
import PropertyFeature from "./propertyFeature";
export default interface Property{
    id:number   ;
    name:string;
    aliasName?:string;
    address:Address;
     description?: string ;
     propertyFeatures:PropertyFeature[];
     reservationBundles:string;
     propertySchedules:string;
     propertyImages:PropertyImage[];
     owner:string;
 
}