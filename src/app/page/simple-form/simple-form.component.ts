import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/service/user.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  @ViewChild('errorDialog', { static: false }) errorDialog: any;
  modalRef: BsModalRef;
  errorMessage: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private bsModalService: BsModalService
  ) { }

  ngOnInit() {
  }

  onFormSubmit(simpleForm: NgForm) {
    if (simpleForm.valid) {
      console.log('send data to server');
      this.userService.login(simpleForm.value).subscribe(
        (resp) => {
          if (resp.success) {
            sessionStorage.setItem('TOKEN', resp.token);
            this.router.navigate(['admin', 'company', 'list']);
          } else {
            this.errorMessage = resp.message;
            this.modalRef = this.bsModalService.show(this.errorDialog);
          }
        }
      );
    } else {
      console.log('invalid form');
    }
  }

  onRegisterClick() {
    this.router.navigate(['register']);
  }

}
