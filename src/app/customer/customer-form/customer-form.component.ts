import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Company } from 'src/app/shared/model/company';
import { CompanyService } from 'src/app/shared/service/company.service';
import { CustomerService } from 'src/app/shared/service/customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customerForm = this.fb.group({
    custCode: ['', [Validators.required]],
    custName: ['', [Validators.required]],
    compId: ['', [Validators.required]]
  });

  company$: Observable<Company[]>;
  isEdit: boolean;
  id: string;

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private customerService: CustomerService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.company$ = this.companyService.findAll();
    this.activeRoute.params.subscribe((params) => {
      if (params.id) {
        this.isEdit = true;
        this.id = params.id;
        this.customerService.findById(this.id).subscribe((customer) => {
          this.customerForm.patchValue(customer);
        });
      } else {
        this.isEdit = false;
      }
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    if (this.customerForm.valid) {
      if (this.isEdit) {
        this.customerService.update(this.id, this.customerForm.value).subscribe((_) => {
          this.router.navigate(['admin', 'customer', 'list']);
        });
      } else {
        this.customerService.add(this.customerForm.value).subscribe((_) => {
          this.router.navigate(['admin', 'customer', 'list']);
        });
      }

    }
  }

}
