import {Component, Directive, Input, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgeValidator } from '../validators/age';
import { UsernameValidator } from '../validators/username';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {

    @ViewChild('signupSlider' , {static: false}) signupSlider;

   public Form: FormGroup;

   public submitAttempt: boolean = false;

  constructor(public formBuilder: FormBuilder) {

    this.Form = formBuilder.group({
        firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
       // tslint:disable-next-line: max-line-length
       email: ['', Validators.compose([Validators.minLength(10), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required])],
        age: ['', AgeValidator.isValid],
        username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')]), UsernameValidator.checkUsername],
    });

}
    save() {

      this.submitAttempt = true;

      if (!this.Form.valid){
          this.signupSlider.slideTo(0);
      }
      else if(!this.Form.valid){
          this.signupSlider.slideTo(1);
      }
      else {
          console.log("success!")
          console.log(this.Form.value);
      }

  }

}