import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InternalService } from '../../services/internalService/internal.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  equalPassword =false
  constructor(private internalService:InternalService) { }





  adduser(addForm: NgForm){
    if(addForm.controls["password1"].value!==addForm.controls["password2"].value)
    this.equalPassword=true
    else{
    this.internalService.addUser(addForm.value).subscribe(
      (response: number) => {
        console.log(response);
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
    this.equalPassword=false
    }
  }


  
  ngOnInit(): void {
  }
  

}
