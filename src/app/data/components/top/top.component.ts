import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor() { }
    name: string|null="";
  ngOnInit(): void {
    if (localStorage.getItem("token") )
    {
        this.name= localStorage.getItem("username")

    }
  }

}