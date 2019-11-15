import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyService } from 'src/app/shared/service/company.service';
import { Company } from 'src/app/shared/model/company';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  // companys: Company[];
  companys: Observable<Company[]>;
  @ViewChild('confirmDialog', { static: false }) confirmDialog: any;
  modalRef: BsModalRef;
  id: string;

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private modalService: BsModalService
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
    this.id = id;
    this.modalRef = this.modalService.show(this.confirmDialog);
  }

  onEditClick(pkcode: string) {
    this.router.navigate(['admin', 'company', 'form', pkcode]);
  }

  onConfirmDelete() {
    this.modalRef.hide();
    this.companyService.delete(this.id).subscribe((_) => {
      this.companys = this.companyService.findAll();
    });
  }

  onCancelDelete() {
    this.modalRef.hide();
  }

}
