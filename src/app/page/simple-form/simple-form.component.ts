import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onFormSubmit(simpleForm: NgForm) {
    if (simpleForm.valid) {
      console.log('send data to server');
      this.userService.login(simpleForm.value).subscribe();
    } else {
      console.log('invalid form');
    }
  }

  onRegisterClick() {
    this.router.navigate(['register']);
  }

}
