import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToHomePage() {
    this.router.navigate(['home']);
  }

  navigateToLoginPage() {
    this.router.navigate(['register']);
  }


  navigateToAddProductPAge() {
    this.router.navigate(['Products']);
  }
}
