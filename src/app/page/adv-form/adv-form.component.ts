import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-adv-form',
  templateUrl: './adv-form.component.html',
  styleUrls: ['./adv-form.component.css']
})
export class AdvFormComponent implements OnInit {

  simpleForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private userService: UserService) { }

  ngOnInit() {
  }

  onFormSubmit() {
    if (this.simpleForm.valid) {
      console.log('send data to server');
      this.formSubmit.emit(this.simpleForm.value);
      this.userService.register(this.simpleForm.value).subscribe();
    } else {
      console.log('invalid form value');
    }
  }

}
