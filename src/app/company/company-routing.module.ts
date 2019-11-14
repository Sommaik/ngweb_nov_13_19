import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyListComponent } from './company-list/company-list.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'list',
  pathMatch: 'full'
}, {
  path: 'form', component: CompanyFormComponent
}, {
  path: 'list', component: CompanyListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
