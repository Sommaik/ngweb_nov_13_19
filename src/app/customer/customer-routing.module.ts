import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';


const routes: Routes = [{
  path: '', redirectTo: 'list', pathMatch: 'full'
}, {
  path: 'list', component: CustomerListComponent
}, {
  path: 'form', component: CustomerFormComponent
}, {
  path: 'form/:id', component: CustomerFormComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
