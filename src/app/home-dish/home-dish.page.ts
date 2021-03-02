import { Component, OnInit } from '@angular/core';
import { DishesService } from './../shared/dishes.service';
import {Dish} from '../shared/dish'
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs/internal/Observable';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-home-dish',
  templateUrl: './home-dish.page.html',
  styleUrls: ['./home-dish.page.scss'],
})
export class HomeDishPage implements OnInit {
  Dishings:any = [];

  constructor(

    private dService: DishesService
    )
    {

   }

  ngOnInit() {
   this.fetchDish();
    let dishRes = this.dService.getDishList();
    dishRes.snapshotChanges().subscribe(res => {
      this.Dishings = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Dishings.push(a as Dish);
      })
    })
  }
  fetchDish() {
    this.dService.getDishList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteDishing(id) {
    console.log(id)
    if (window.confirm('Do you really want to delete?')) {
      this.dService.deleteDish(id)
    }
  }
}
