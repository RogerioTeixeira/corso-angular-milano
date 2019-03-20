import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card-person',
  templateUrl: './card-person.component.html',
  styleUrls: ['./card-person.component.scss']
})
export class CardPersonComponent implements OnInit {
  @Input() persona:any;
  constructor() { }

  ngOnInit() {
  }

}
