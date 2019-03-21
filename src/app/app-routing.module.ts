import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ClientiPageComponent } from './views/clienti-page/clienti-page.component';
import { ProdottiPageComponent } from './views/prodotti-page/prodotti-page.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { DettaglioClienteComponent } from './views/dettaglio-cliente/dettaglio-cliente.component';

const routes: Routes = [
  {path:"home", component:HomePageComponent},
  {path:"clienti", component:ClientiPageComponent},
  {path:"prodotti", component:ProdottiPageComponent},
  {path:"login" , component:LoginPageComponent},
  {path:"clienti/:id" , component:DettaglioClienteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
