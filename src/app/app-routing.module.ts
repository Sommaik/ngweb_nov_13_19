import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleFormComponent } from './page/simple-form/simple-form.component';
import { AdvFormComponent } from './page/adv-form/adv-form.component';
import { AuthGuard } from './shared/guard/auth.guard';


const routes: Routes = [{
  path: 'login', component: SimpleFormComponent
}, {
  path: 'register', component: AdvFormComponent
}, {
  path: 'admin',
  canActivate: [AuthGuard],
  children: [
    {
      path: 'company',
      loadChildren: './company/company.module#CompanyModule'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
