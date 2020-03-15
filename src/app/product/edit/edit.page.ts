import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DBService } from '../../services/db.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  currentP = null;
  message = '';


  constructor(
    private db: DBService,
    private route: ActivatedRoute,
    private router: Router ,
    public loadingController: LoadingController ,
    public toastController: ToastController ) {}



  ngOnInit() {
    this.message = '';
    this.getP(this.route.snapshot.paramMap.get('id'));
  }


 async getP(id) {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();

    await this.db.get(id)
      .subscribe(
        data => {
          this.currentP = data;
          console.log(data);
          loading.dismiss();
        },
        error => {
          console.log(error);
          loading.dismiss();
        });
  }

 async updateP() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    const toast = await this.toastController.create({
      message: 'The product was updated successfully!',
      duration: 2000
    });
    await loading.present();

    await this.db.update(this.currentP.id, this.currentP)
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

 async deleteP() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    const toast = await this.toastController.create({
      message: 'The product was deleted successfully!',
      duration: 2000
    });
    await loading.present();

    await this.db.delete(this.currentP.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['Products']);
          loading.dismiss();
          toast.present();
        },
        error => {
          console.log(error);
          loading.dismiss();
        });
  }
}
