import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { AbstractControl, FormGroup, NgForm, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-psword',
  templateUrl: './psword.page.html',
  styleUrls: ['./psword.page.scss'],
})
export class PswordPage implements OnInit {
  Form: FormGroup;
  user: any ;
  change = false ;
  id : any ;
  constructor(
    public loadingController: LoadingController ,
    private fb: FormBuilder,
    private router: Router , 
    private token : TokenService , 
    private User : UserService ,
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

    this.id = this.token.getUser().id ;

    // let isLoggedIn = this.userService.isLoggedIn();

    // if (isLoggedIn) {
    //   this.router.navigate(['/people-list']);
    // } 
  }

 async register() {
  const loading = await this.loadingController.create({
    message: 'Loading...'
  });
  let data = this.Form.value;

  await this.User.update(this.id, data)
    .subscribe(
      response => {
        console.log(response);
        loading.dismiss();
        // toast.present();
        this.router.navigate(['/feed/settings']) ;
      },
      error => {
        console.log(error);
        loading.dismiss();
      });
}


  }

