import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Property from './data/models/property';
import PropertyImage from './data/models/PropertyImage';
import { ExternalService } from './data/services/externalService/external.service';
import { InternalService } from './data/services/internalService/internal.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngulor';

 
  
}
