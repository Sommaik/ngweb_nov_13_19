import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Home Work...';
  url = 'http://www.google.com';
  @Input() name;

  constructor() {
  }

  ngOnInit() {
  }

  onBtnClick() {
    alert('this url is ' + this.url);
  }

}
