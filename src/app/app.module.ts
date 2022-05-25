import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataModule } from './data/data.module';
import { ProductService } from './data/services/product.service';
import { ProductComponent } from './product/product.component';
import { TopComponent } from './top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
