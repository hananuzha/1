import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule,routingComponent, } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './data/services/product.service';
import { TopComponent } from './data/components/top/top.component';
import { ProductComponent } from './data/components/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropertyComponent } from './data/components/property/property.component';
import { ExternalService } from './data/services/externalService/external.service';
import { PropertyDetailsComponent } from './data/components/property-details/property-details.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LoginComponent } from './data/components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    TopComponent,
    ProductComponent,
    PropertyComponent,
    PropertyDetailsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [ProductService,
  ExternalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
