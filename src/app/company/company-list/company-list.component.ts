import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/shared/service/company.service';
import { Company } from 'src/app/shared/model/company';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  // companys: Company[];
  companys: Observable<Company[]>;

  constructor(private companyService: CompanyService) {
    // this.companyService.findAll().subscribe((result) => {
    //   this.companys = result;
    // });
    this.companys = this.companyService.findAll();
  }

  ngOnInit() {
  }

}
