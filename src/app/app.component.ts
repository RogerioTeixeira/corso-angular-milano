import { Component } from '@angular/core';
import { Navlink } from './models/navlink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'corso-angular-mi';
  navlinks:Navlink[] = [
    new Navlink("Home","home"), 
    new Navlink("Clienti","clienti"),
    new Navlink("Prodotti","prodotti")
  ]
  
}
