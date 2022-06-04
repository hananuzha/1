import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './data/components/product/product.component';
import { PropertyDetailsComponent } from './data/components/property-details/property-details.component';
import { PropertyComponent } from './data/components/property/property.component';
import { RegisterComponent } from './data/components/register/register.component';

const routes: Routes = [
  { path: 'property', component: PropertyComponent },
  { path: 'product', component: ProductComponent },
  { path: 'property/:id', component:  PropertyDetailsComponent },
  { path: 'regsiter', component:  RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[
  ProductComponent,
  PropertyComponent,
  RegisterComponent,
  PropertyDetailsComponent
]
