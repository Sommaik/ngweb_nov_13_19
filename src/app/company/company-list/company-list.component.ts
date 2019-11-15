import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/shared/service/company.service';
import { Company } from 'src/app/shared/model/company';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  // companys: Company[];
  companys: Observable<Company[]>;

  constructor(
    private companyService: CompanyService,
    private router: Router
  ) {
    // this.companyService.findAll().subscribe((result) => {
    //   this.companys = result;
    // });
    this.companys = this.companyService.findAll();
  }

  ngOnInit() {
  }

  onAddClick() {
    this.router.navigate(['admin', 'company', 'form']);
  }

  onDeleteClick(id: string) {
    console.log(`delete id = ${id}`);
  }

  onEditClick(id: string) {
    console.log(`edit id = ${id}`);
  }

}
