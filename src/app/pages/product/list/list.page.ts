import { Component, OnInit } from '@angular/core';

import {CrudService} from '../../../services/crud.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListPage implements OnInit {


  Products: any = [] ;
  retrieveProduct = null;
  currentIndex = -1;
  Pname = '';

  constructor(private api: CrudService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.api.getAll()
      .subscribe(
        data => {
          this.Products = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveProduct();
    this.retrieveProduct = null;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial, index) {
    this.retrieveProduct = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials() {
    this.api.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveProduct();
        },
        error => {
          console.log(error);
        });
  }

  // searchTitle() {
  //   this.api.findByTitle(this.Pname)
  //     .subscribe(
  //       data => {
  //         this.Products = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
}
