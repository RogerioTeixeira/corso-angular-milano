import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.scss']
})
export class PickListComponent implements OnInit {
  @Input() lista:string[];
  currentIndex:number;
  constructor() { }

  ngOnInit() {
  }

  setIndex(index:number){
    this.currentIndex = index;
  }

}
