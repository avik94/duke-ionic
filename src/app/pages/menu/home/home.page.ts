import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( private menuService: MenuService ) { }

  ngOnInit() {
  }

  timeRanges = [
    { name: "Last 1 minutes" },
    { name: "Last 5 minutes" },
    { name: "Last 10 minutes" },
    { name: "Last 15 minutes" },
    { name: "Last 30 minutes" },
    { name: "Last 1 hour" },
    { name: "Last 3 hours" },
    { name: "Last 6 hours" },
    { name: "Last 12 hours" },
    { name: "Last 24 hours" },
    { name: "Last 2 days" },
    { name: "Last 3 days" }
  ]

  group = [
    { name: "MRI Health"},
    { name: "Energy Audit"},
    { name: "Drive Health"}
  ]

  submitForm(){
    this.menuService.changeDisableValue.emit(false);
  }

}