import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'make-dish',
    loadChildren: () => import('./make-dish/make-dish.module').then( m => m.MakeDishPageModule)
  },
  {
    path: 'edit-dish/:id',
    loadChildren: () => import('./edit-dish/edit-dish.module').then( m => m.EditDishPageModule)
  },
  {
    path: 'home-dish',
    loadChildren: () => import('./home-dish/home-dish.module').then( m => m.HomeDishPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
