import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ProdottiPageComponent } from './views/prodotti-page/prodotti-page.component';
import { ClientiPageComponent } from './views/clienti-page/clienti-page.component';
import { SharedModule } from './shared/shared.module';

import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import localeItExtra from '@angular/common/locales/extra/it';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule  } from '@angular/forms';

registerLocaleData(localeIt, 'it', localeItExtra);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    ProdottiPageComponent,
    ClientiPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'it' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
