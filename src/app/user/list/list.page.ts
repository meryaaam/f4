import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  i = -1 ;
  user :any ;
  constructor(
       private db : UserService ,
       private router : Router ,
       private alertCtrl: AlertController,  
       public toastController: ToastController ) { }

  ngOnInit() {
    this.P() ;
  }
  add() { this.router.navigate(['admin/user/add']); }
  edite(id) { this.router.navigate(['/admin/user/edit/', id]); }

  detail(id) { this.router.navigate(['admin/user/detail/', id]); }
 async Delete(id) {
   

       const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Confirm!',
    message: 'Are you sure to delete this <strong>user</strong>!!!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          alert.dismiss() ;
        }
      }, {
        text: 'Okay',
        handler: () => {
          console.log('delete');

        }
      }
    ]
  });

       await alert.present();
}





// refreshList() {
//   this.P();
//   this.user = null;
//   this.i = -1;
// }



async P() {

  const loading = await this.alertCtrl.create({
    message: 'Loading...'
  });
  const toast = await this.toastController.create({
    message: 'click on Product Name',
    duration: 2000
  });
  await loading.present();

  await this.db.getAll()
      .subscribe(
        data => {
          this.user = data;
          console.log(data);
          loading.dismiss();
          toast.present();
        },
        error => {
          console.log(error);
          loading.dismiss();
        });
  }


async DeleteU(id)
{

  const toast = await this.toastController.create({
    message: 'delte',
    duration: 2000
  });
  const loading = await this.alertCtrl.create({
    message: 'Loading...'
  });
  await loading.present();

  this.db.delete(id)
  .subscribe(
          response => {
            console.log(response);
            loading.dismiss();
            toast.present();
            this.P();
          },
          error => {
            console.log(error);
            loading.dismiss();
          });  }







}
