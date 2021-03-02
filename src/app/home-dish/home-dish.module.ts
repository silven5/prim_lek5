import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeDishPageRoutingModule } from './home-dish-routing.module';

import { HomeDishPage } from './home-dish.page';
import { MyHeaderComponent } from './../my-header/my-header.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeDishPageRoutingModule
  ],
  declarations: [HomeDishPage, MyHeaderComponent]
})
export class HomeDishPageModule {}
