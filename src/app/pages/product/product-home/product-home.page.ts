import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.page.html',
  styleUrls: ['./product-home.page.scss'],
})
export class ProductHomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToAddPage() {
    this.router.navigate(['add']);

  }

  navigateToListPage() {
    this.router.navigate(['list']);

  }
  navigateToEditPage() {
    this.router.navigate(['edit']);

  }

  navigateToDetailsPage() {
    this.router.navigate(['Details']);

  }

}
