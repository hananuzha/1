import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Property from '../../models/property';
import PropertyImage from '../../models/PropertyImage';
import User from '../../models/userProfile';
import { HttpParams } from '@angular/common/http';
import PropertySceduale from '../../models/propertyscheduale';

@Injectable({
  providedIn: 'root'
})
export class InternalService {

  private restUrl = environment.apiBaseURL + '/internal';
  properties: Property[] = [];

  constructor(private http: HttpClient) { }



  getPropertyImage(propertyId: number): Observable<PropertyImage[]> {

    return this.http.get<PropertyImage[]>(`${this.restUrl}/property/image/${propertyId}`)
  }
  addUser(user: User): Observable<number> {
    const params = new HttpParams()
      .set('name', user.name)
      .set('phone', user.phone)
      .set('companyName', "")
      .set('id', "")

    return this.http.post<number>(`${this.restUrl}/owner`, params);

  }

  getSchedule(year: string, month: string, propertyId: number) {
    const params = new HttpParams()
      .set('year', year)
      .set('month', month)
      .set('propertyId', propertyId)
    return this.http.get<PropertySceduale[]>(`${this.restUrl}/schedule`,{params: params})

  }



}
