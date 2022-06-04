import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Property from '../../models/property';
import { ExternalService } from '../../services/externalService/external.service';
import { InternalService } from '../../services/internalService/internal.service';
import PropertyImage from '../../models/PropertyImage';
import { elementAt } from 'rxjs';
import PropertyFeatur from '../../models/propertyFeature';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  constructor(private externalService: ExternalService, private internalService: InternalService,private route: Router) {

  }
 properties: Property[] = [];
 propertyImage: PropertyImage = {};

 getProperty() {
   this.externalService.getProperty().subscribe(
     (response: Property[]) => {
       console.log(response)
       this.properties = response;



     },
     (error: HttpErrorResponse) => {
       console.log(error.message)
     }

   )
 }
 getImagePath(propertyImages: PropertyImage[]): string {

  let src:string="" ;
  propertyImages.forEach(x => {
    if((x.isPrimary)?.toLocaleLowerCase().match('y'))
      src=`../../assets/img/${x.id}.${x.fileExt}` 
      console.log(src)
  }
  )
   return src;


 }
 go(url:string,id:number){
   this.route.navigate([url, id],{state: {data:this.properties.filter((obj)=> {return obj.id===id})}}).then( (e) => {
     if (e) {
       console.log("Navigation is successful!");
     } else {
       console.log("Navigation has failed!");
     }
   });
 }
 

 ngOnInit(): void {
   this.getProperty();

   console.log(this.properties)
 }


}
