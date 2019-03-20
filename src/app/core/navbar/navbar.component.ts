import { Component, OnInit, Input } from '@angular/core';
import { Navlink } from 'src/app/models/navlink';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() navLinks:Navlink[];
  constructor() { }

  ngOnInit() {
  }

}
