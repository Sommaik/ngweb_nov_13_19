import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';


@NgModule({
  declarations: [CustomerListComponent, CustomerFormComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
