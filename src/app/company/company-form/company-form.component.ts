import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/shared/service/company.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  isEdit: boolean;
  id: string;

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    activeRoute.params.subscribe((params) => {
      if (params.id) {
        this.isEdit = true;
        this.id = params.id;
        this.companyService.findById(this.id).subscribe((company) => {
          this.simpleForm.patchValue({
            compCode: company.compCode,
            compName: company.compName
          });
        });
      } else {
        this.isEdit = false;
      }
    });
  }

  ngOnInit() {
  }
  onFormSubmit() {
    if (this.simpleForm.valid) {
      if (this.isEdit) {
        this.companyService.update(this.id, this.simpleForm.value).subscribe((_) => {
          this.router.navigate(['admin', 'company', 'list']);
        });
      } else {
        this.companyService.add(this.simpleForm.value).subscribe((_) => {
          this.router.navigate(['admin', 'company', 'list']);
        });
      }
    }
  }

}
