import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeDishPageRoutingModule } from './make-dish-routing.module';

import { MakeDishPage } from './make-dish.page';
import { MyHeaderComponent } from './../my-header/my-header.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MakeDishPageRoutingModule
  ],
  declarations: [MakeDishPage,MyHeaderComponent]
})
export class MakeDishPageModule {}
