import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  lista:string[] =[];
  width:number = 100;

  data:Date = new Date();
  constructor() { }


  ngOnInit() {
    const obj:Observable<any> = new Observable((observer)=>{
      observer.next('ciao');
    })
    
    
    obj.subscribe(x=>{
      this.lista = x;
    })
    

    alert('dopo');


  }

  add(){
    this.width += 50;
  }
}
