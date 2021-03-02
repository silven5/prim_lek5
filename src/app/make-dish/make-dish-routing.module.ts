import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeDishPage } from './make-dish.page';

const routes: Routes = [
  {
    path: '',
    component: MakeDishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeDishPageRoutingModule {}
