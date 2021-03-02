import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDishPageRoutingModule } from './edit-dish-routing.module';

import { EditDishPage } from './edit-dish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDishPageRoutingModule
  ],
  declarations: [EditDishPage]
})
export class EditDishPageModule {}
