import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'corso-angular-mi';
  public radius: number = 0;
  public left: number = 0;
  public right: number = 0;
  public listaPersone: any[] = [{
    nome: "Paolo",
    cognome: "rossi",
    eta: 20
  },
  {
    nome: "Anna",
    cognome: "rossi",
    eta: 15
  },
  {
    nome: "Marco",
    cognome: "rossi",
    eta: 30
  },
  {
    nome: "Maria",
    cognome: "Cambrea",
    eta: 45
  }
  ]
  add(){
    this.radius += 3;
  }
  substract(){
    this.radius = this.radius > 0 ? this.radius - 3 : 0;
  }

  moveLeft(){
    this.left -= 20;
  }

  moveRight(){
    this.left += 20;
  }
}
