import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-adv-form',
  templateUrl: './adv-form.component.html',
  styleUrls: ['./adv-form.component.css']
})
export class AdvFormComponent implements OnInit {

  simpleForm = this.fb.group({
    first: [],
    second: []
  });

  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onFormSubmit() {
    if (this.simpleForm.valid) {
      console.log('send data to server');
      this.formSubmit.emit(this.simpleForm.value);
    } else {
      console.log('invalid form value');
    }
  }

}
