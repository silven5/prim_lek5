import { DishService } from './../dish/dish.service.ts.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: string[] = [];
  name: string;
  constructor(private dishService:DishService) {}
  addItem(name: string | number){

    this.dishService.addData(name.toString());
}
ngOnInit(){
  this.items = this.dishService.getData();
}
}
