import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import Property from '../../models/property';
import PropertyImage from '../../models/PropertyImage';
import Address from '../../models/address';

import PropertySceduale from '../../models/propertyscheduale';
import { ExternalService } from '../../services/externalService/external.service';
import { InternalService } from '../../services/internalService/internal.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  title = 'FirstAngulor';
   name = localStorage.getItem("username")
   phone = localStorage.getItem("phone")
  fromDate: string = '';
  toDate: string = '';
  difference: number = 0
  alert=true;
  cost: number = 0
  property: Property[] = [];
  propertySceduale: PropertySceduale[] = [];
  price = 0;
  available = false
  hiddenAvailablespan = true;
  availableMessage = ""
   address: Address = {
    buildingNumber: 12,
    city: "carmel",
    id: 1,
    street: "clark st"
  }
  form?:NgForm;
  constructor(private internalServcie: InternalService, private externalService: ExternalService) { }


  ngOnInit(): void {

    this.property = history.state.data
    console.log(this.property[0].id)
  }

  getImagePath(propertyImage: PropertyImage): string {
    return `../../assets/img/${propertyImage.id}.${propertyImage.fileExt}`

  }
  isReserve(elemnt: PropertySceduale) {
    console.log("check reserva or not" + elemnt.isReserved?.toLocaleLowerCase)
    return elemnt.isReserved === "n"
  }

  checkAvailabilty(form: NgForm) {
    this.price = 0
    this.getScheduale(form);

  }


  checkIfAvailable(available: PropertySceduale[]) {

    let to = new Date(this.toDate)
    let from = new Date(this.fromDate)
    from.setDate(from.getDate() + 1);
    to.setDate(to.getDate() + 1);





    for (let date = from; date < to; date.setDate(date.getDate() + 1)) {
      console.log("date given  is", date)
      let d = new Date(available[0].scheduledDate)
      d.setDate(d.getDate() + 1)
      console.log("date given  is", d.getTime() === date.getTime())

      let availableSchedual = available.find((p) => {
        let d = new Date(p.scheduledDate)
        d.setDate(d.getDate() + 1)
        return date.getTime() === d.getTime()
      }
      )

      if (availableSchedual?.price) {
        this.hiddenAvailablespan = false

        this.price += availableSchedual.price
        this.available = true
        this.availableMessage = "it is available you can reserve it"
      }
      else {
        this.hiddenAvailablespan = false
        this.price = 0
        this.available = false
        this.availableMessage = "Can not reserve it is not available"


      }




    }

  }

  getScheduale(form: NgForm) {
    this.form=form;

    this.internalServcie.getSchedule(this.fromDate.substring(0, 4), this.fromDate?.substring(5, 7), this.property[0].id).subscribe(
      (response) => {
        this.propertySceduale = response;

        let availablePropertySceduale = this.propertySceduale.filter((p) => {
          console.log("check reserva or not" + p.isReserved?.toLocaleLowerCase)
          return p.isReserved?.toLocaleLowerCase() == 'n'
        })
        availablePropertySceduale.forEach(p => console.log(p))
        this.checkIfAvailable(availablePropertySceduale)

      },
      (error: HttpErrorResponse) => {
        alert(error.message);

      }
    );

  }
  getdiffer() {
    let to = new Date(this.toDate)
    let from = new Date(this.fromDate)
    if (from > to)
      this.difference = 0
    if (this.fromDate !== '' && this.toDate !== '' && from < to) {
      let dif = Math.abs(to.getTime() - from.getTime())
      this.difference = Math.ceil(dif / (1000 * 3600 * 24));

    }
  }

  adduser(form1:NgForm){
    console.log("add user clicked ")
    localStorage.setItem("username",form1.controls["name"].value)
    localStorage.setItem("phone",form1.controls["phone"].value)
    const button =document.getElementById("cancel")
    button?.click()
  
  }
  reserve(form: NgForm) {
    

    if (!this.name && !this.phone)
    {
      const button =document.getElementById("showuser")
      button?.click()
      

    }
else
this.doReserve(form)
   
  }

  doReserve(form:NgForm){
    if(this.phone && this.name){
      this.externalService.addReservation(this.fromDate, this.toDate, this.property[0].id, this.phone, { "userName": this.name, "address": this.address}).subscribe(
        (response) => {
          console.log("resercvved succesfully  is " + response)
          
         this.alert=false;

          
          this.hiddenAvailablespan = true
          this.price = 0
          this.available = true
          this.difference = 0
        }

      )
   }
  }

}
