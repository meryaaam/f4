import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  u: any ;
  constructor( private db: UserService,
               private route: ActivatedRoute,
               private router: Router ,
               public loadingController: LoadingController ,
               public toastController: ToastController ,
               private nav: NavController ) { }

  ngOnInit() {
    this.get(this.route.snapshot.paramMap.get('id'));
  }
  save() {}

  setpage() { this.router.navigate(['settings']) ; }

  back() {this.router.navigate(['/']) ; }


  async get(id) {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();

    await this.db.get(id)
      .subscribe(
        data => {
          this.u = data;
          console.log(data);
          loading.dismiss();
        },
        error => {
          console.log(error);
          loading.dismiss();
        });
  }

  async update() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    const toast = await this.toastController.create({
      message: 'The product was updated successfully!',
      duration: 2000
    });
    await loading.present();

    await this.db.update(this.u.id, this.u)
      .subscribe(
        response => {
          console.log(response);
          loading.dismiss();
          toast.present();
        },
        error => {
          console.log(error);
          loading.dismiss();
        });
  }


}
