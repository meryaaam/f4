import {Component, Directive, Input, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgeValidator } from '../validators/age';
import { UsernameValidator } from '../validators/username';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {


   public Form: FormGroup;

   isSuccessful = false;
   isSignUpFailed = false;

  constructor(
    public loadingController: LoadingController ,
    public formBuilder: FormBuilder ,
    private authService: AuthService ,
    private alertCtrl: AlertController) {

    this.Form = formBuilder.group({
       // firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
       // lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
       // tslint:disable-next-line: max-line-length
        email: ['', Validators.compose([Validators.minLength(10), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required])],
        // age: ['', AgeValidator.isValid],
        username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')]), UsernameValidator.checkUsername],
        password : ['' , Validators.compose([Validators.minLength(10),Validators.required])]
    });

}
    async save() {

        const loading = await this.loadingController.create({
            message: 'Loading...'
          });
        await loading.present();
        this.authService.register(this.Form).subscribe(data => {
            console.log(data);
            this.isSuccessful = true;
            this.isSignUpFailed = false;
            loading.dismiss();
        }, 
        async err => {
            const alert = await this.alertCtrl.create({
                header: 'Login Failed',
                message: err.error.message,
                buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
            this.isSignUpFailed = true;
        });

  }

}
