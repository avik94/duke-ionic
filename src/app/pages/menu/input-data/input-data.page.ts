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

  timedate;

  first;
  seccond;

  constructor(private menuService: MenuService) { }
  animate = false

  ngOnInit() {
    setTimeout(()=>{
      this.animate = true
    },2000)
    const data = this.menuService.getValue();
    if (!data) {
      console.log("blank page logic goes here!")
    } else {
      if (!data.quickTimeRange) {
        this.first = true;
        this.seccond = false;

        this.toDate = data.toDate;
        this.toHour = data.toHour;
        this.toMinutes = data.toMinutes
        this.fromDate = data.formDate;
        this.formHour = data.formHour;
        this.fromMinutes = data.formMinutes;
      } else {
        this.first = false;
        this.seccond = true;

        // datelogic

        let x = data.quickTimeRange
        let param = x.slice(-1)
        if(param === "m"){
          let valueStr = x.replace("m", "");
          let valueInt = parseInt(valueStr);
          this.getTime(valueInt, param)
        }else if(param === "h"){
          let valueStr = x.replace("h", "");
          let valueInt = parseInt(valueStr);
          this.getTime(valueInt, param)
        }
      }
      this.machineName = data.machine;
      this.groupName = data.group;
      this.stat = data.stat;
      this.threshold = data.threshold;
    }
  }

  getTime(min, param){
    if(param === "m"){
      this.timedate = new Date();
    }
    


  
  }
  

}
