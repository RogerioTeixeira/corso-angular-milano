import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ClientiPageComponent } from './views/clienti-page/clienti-page.component';
import { ProdottiPageComponent } from './views/prodotti-page/prodotti-page.component';

const routes: Routes = [
  {path:"home", component:HomePageComponent},
  {path:"clienti", component:ClientiPageComponent},
  {path:"prodotti", component:ProdottiPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
