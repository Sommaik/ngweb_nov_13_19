import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/service/customer.service';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/shared/model/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customer$: Observable<Customer[]>;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {
    this.customer$ = customerService.findAll();
  }

  ngOnInit() {
  }

  onNewClick() {
    this.router.navigate(['admin', 'customer', 'form']);
  }

  onEditClick(id: string) {
    this.router.navigate(['admin', 'customer', 'form', id]);
  }

  onDeleteClick(id: string) {
    this.customerService.delete(id).subscribe((_) => {
      this.customer$ = this.customerService.findAll();
    });
  }

}
