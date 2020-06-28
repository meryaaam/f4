import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-udetail',
  templateUrl: './udetail.page.html',
  styleUrls: ['./udetail.page.scss'],
})
export class UdetailPage implements OnInit {

  Form: FormGroup;
  user: any ;
  change = false ;
  constructor(
    private fb: FormBuilder,
    private router: Router
    ) {

      let formControls = {
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      repassword: new FormControl('', [
        Validators.required,
      ])
    };

      this.Form = this.fb.group(formControls);
  }

  get email() { return this.Form.get('email'); }
  get password() { return this.Form.get('password'); }
  get repassword() { return this.Form.get('repassword'); }


  ngOnInit(): void {

    // let isLoggedIn = this.userService.isLoggedIn();

    // if (isLoggedIn) {
    //   this.router.navigate(['/people-list']);
    // } 
  }

  register() {

    let data = this.Form.value;
  }

}
