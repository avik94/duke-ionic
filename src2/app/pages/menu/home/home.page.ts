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
    { name: "Last 1 minutes" , value: "1m" },
    { name: "Last 5 minutes" , value: "5m" },
    { name: "Last 10 minutes", value: "10m" },
    { name: "Last 15 minutes", value: "15m" },
    { name: "Last 30 minutes", value: "30m" },
    { name: "Last 1 hour" , value: "1h" },
    { name: "Last 3 hours", value: "3h" },
    { name: "Last 6 hours", value: "6h" },
    { name: "Last 12 hours", value: "12h" },
    { name: "Last 24 hours", value: "24h" },
    { name: "Last 2 days", value: "48h" },
    { name: "Last 3 days", value: "72h" }
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
