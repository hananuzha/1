import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import AuthToken from '../../models/authToken';
import { ExternalService } from '../../services/externalService/external.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private externalServcie:ExternalService) { }

  ngOnInit(): void {
  }
  login(addForm:NgForm){
   
   
    
    this.externalServcie.login(addForm.value).subscribe(
      (response: AuthToken) => {
        
        if(response.token){
          let jsonObject = JSON.parse(JSON.stringify(response.userProfile));  
          console.log(jsonObject["name"])
        localStorage.setItem("username",jsonObject["name"])
        localStorage.setItem("phone",jsonObject["phone"])
        localStorage.setItem("token",response.token)
        window.location.href = "http://localhost:4200/property";
        }
        else{
          alert(response.message)

        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
    
    }
    

  

}
