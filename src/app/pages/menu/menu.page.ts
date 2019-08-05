import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages: Array<{ title: string, url: any, icon: string }>;

  constructor() { }

  ngOnInit() {

    this.pages = [
      {title: 'Home', url: '/menu/home', icon: 'home'},
      {title: 'User Profile', url: '/menu/home', icon: 'home'},
      {title: 'Company', url: '/menu/home', icon: 'home'}
    ];
  }

}
