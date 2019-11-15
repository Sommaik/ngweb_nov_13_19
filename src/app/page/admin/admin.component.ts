import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isCollapse = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loadPage(page: string) {
    this.router.navigate(['admin', page]);
  }

}
