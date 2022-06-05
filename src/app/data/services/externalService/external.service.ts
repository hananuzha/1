import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import AuthToken from '../../models/authToken';
import loginRequest from '../../models/loginRequest';
import Property from '../../models/property';
import PropertyImage from '../../models/PropertyImage';
import ReservationObject from '../../models/reservationObject';

@Injectable({
  providedIn: 'root'
})
export class ExternalService {
  private restUrl = environment.apiBaseURL+'/external';
  properties:Property[]=[];

  constructor(private http : HttpClient) { }


       
   login (loginRequest:loginRequest): Observable<AuthToken>{
    return this.http.post<AuthToken>(`${this.restUrl}/login`,loginRequest)
    
   }
  
   getProperty (): Observable<Property[]>{
    return this.http.get<Property[]>(`${this.restUrl}/property`)
    }
    getPropertyById(id:number):Observable<Property>{
      return this.http.get<Property>(`${this.restUrl}/property/${id}`)
      }

      
   addReservation(fromDate:string,toDate:string,propertyId:number,phoneNumber:string,reservationobject: ReservationObject){
    localStorage.clear()

    
    const headers = new HttpHeaders()
    .append(
      'Content-Type',
      'application/json'
    );
    const params = new HttpParams()
      .set('fromDate', fromDate)
      .set('toDate', toDate)
      .set('propertyId', propertyId)
      .set('phoneNumber', phoneNumber)
       return this.http.post(`${this.restUrl}/reservation/`,reservationobject,{
        headers: headers,
        params: params,
        responseType: 'text' 
      })

      
      }
  //  updateProductFromMysql (product: Product): Observable<Product>{
  //   return this.http.put<Product>(`${this.restUrl}/product`,product)
  //   // .subscribe( (data) => console.log(data) )
  //   }
  //   deleteProductFromMysql (id:number): Observable<Product>{
  //     return this.http.delete<Product>(`${this.restUrl}/product/${id}`)
  //     // .subscribe( (data) => console.log(data) )
  //     }

}
