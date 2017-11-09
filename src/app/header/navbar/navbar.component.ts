import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  links: any[];
  constructor() {
    this.links=[
      {
        'linkName':'Feed',
        'linkURL':'/feed'
      },
      {
        'linkName':'Favourite',
        'linkURL':'/favourite'
      },
      {
        'linkName':'Create',
        'linkURL':'/create'
      },
    ];
  }

  ngOnInit() {
  }

}
