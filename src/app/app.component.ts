import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngweb';
  isShowAdvForm = true;
  caseExp = 'A';

  onAdvFormSubmit(formValue) {
    console.log('in app form submit');
    console.dir(formValue);
    this.isShowAdvForm = false;
  }

  onInputAgainClick() {
    this.isShowAdvForm = true;
  }
}
