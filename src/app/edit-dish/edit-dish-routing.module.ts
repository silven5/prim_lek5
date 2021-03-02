import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDishPage } from './edit-dish.page';

const routes: Routes = [
  {
    path: '',
    component: EditDishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDishPageRoutingModule {}
