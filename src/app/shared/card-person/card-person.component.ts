import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-person',
  templateUrl: './card-person.component.html',
  styleUrls: ['./card-person.component.scss']
})
export class CardPersonComponent implements OnInit {
  @Input() persona:any;
  @Input() color:string;
  @Output() onSeleted:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
