import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleFormComponent } from './page/simple-form/simple-form.component';
import { AdvFormComponent } from './page/adv-form/adv-form.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { AdminComponent } from './page/admin/admin.component';


const routes: Routes = [{
  path: 'login', component: SimpleFormComponent
}, {
  path: 'register', component: AdvFormComponent
}, {
  path: 'admin',
  component: AdminComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: 'company',
      loadChildren: './company/company.module#CompanyModule'
    },
    {
      path: 'customer',
      loadChildren: './customer/customer.module#CustomerModule'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
