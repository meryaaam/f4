import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/Role';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  role ;

  personne : any ;
  constructor() { }

  ngOnInit() {
    this.role = Role ;
  }

}
