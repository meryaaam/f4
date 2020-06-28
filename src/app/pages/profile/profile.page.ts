import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: any ;
  id : any ;
  constructor(
               private router: Router ,
               public loadingController: LoadingController ,
               public toastController: ToastController ,
               private User: UserService , 
               private token : TokenService



  ) { }

  ngOnInit() {
    // this.get(this.route.snapshot.paramMap.get('id'));
    this.id = this.token.getUser().id ;
    this.get(this.id) ;
    
  }

  setpage(){this.router.navigate(['/feed/settings'])}
  async get(id) {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });

    await loading.present();

    await this.User.get(id)
      .subscribe(
        data => {
          this.user = data;
          console.log(data);
          loading.dismiss();
        },
        error => {
          console.log(error);
          loading.dismiss();
        });







  }


  async save() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    const toast = await this.toastController.create({
      message: 'The product was updated successfully!',
      duration: 2000
    });
    await loading.present();

    await this.User.update(this.user.id, this.user)
      .subscribe(
        response => {
          console.log(response);
          loading.dismiss();
          // toast.present();
        },
        error => {
          console.log(error);
          loading.dismiss();
        });
  }

}
