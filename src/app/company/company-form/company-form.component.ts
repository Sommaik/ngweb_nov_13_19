import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/shared/service/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {
  simpleForm = this.fb.group({
    compCode: ['', [Validators.required, Validators.minLength(5)]],
    compName: ['', [Validators.required]]
  });
  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onFormSubmit() {
    if (this.simpleForm.valid) {
      this.companyService.add(this.simpleForm.value).subscribe((_) => {
        this.router.navigate(['admin', 'company', 'list']);
      });
    }
  }

}
