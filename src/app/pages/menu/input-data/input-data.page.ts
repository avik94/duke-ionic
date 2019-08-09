import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.page.html',
  styleUrls: ['./input-data.page.scss'],
})
export class InputDataPage implements OnInit {

  machineName;
  groupName;
  stat;
  threshold;
  toDate;
  toHour;
  toMinutes
  fromDate;
  formHour;
  fromMinutes;

  first;
  seccond;

  constructor( private menuService: MenuService ) { }

  ngOnInit() {
    const data = this.menuService.getValue();
    if(!data){
      console.log("test")
      // not get value
    }else{
      if(!data.quickTimeRange){
        this.first = true;
        this.seccond = false;      
      }else{
        this.first = false;
        this.seccond = true;

        this.toDate = data.toDate;
        this.toHour = data.toHour;
        this.toMinutes= data.toMinutes
        this.fromDate = data.formDate;
        this.formHour = data.formHour;
        this.fromMinutes = data.formMinutes;
      }
      this.machineName = data.machine;
      this.groupName = data.group;
      this.stat = data.stat;
      this.threshold = data.threshold;
    }
  }

}
