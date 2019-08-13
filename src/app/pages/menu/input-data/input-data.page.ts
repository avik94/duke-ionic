import { Component, OnInit, ɵConsole } from '@angular/core';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';

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

  // dateParameter
  timedate;
  toDateResult;
  formDateResult
  //end

  first;
  seccond;
  

  constructor(private menuService: MenuService, private router: Router) { }
  animate = false

  ngOnInit() {
    const data = this.menuService.getValue();
    console.log(data)

    if (!data) {
      this.router.navigate(['dashboard'])
    } else {
      if (!data.quickTimeRange && data.toDate && data.formDate && data.machineName) {
        this.first = true;
        this.seccond = false;

        this.toDate = data.toDate;
        this.toHour = data.toHour;
        this.toMinutes = data.toMinutes
        this.fromDate = data.formDate;
        this.formHour = data.formHour;
        this.fromMinutes = data.formMinutes;

        let yTo = this.toDate.split("-")[0]
        let mTo = this.toDate.split("-")[1]
        let dateTo = this.toDate.split("-")[2]

        let yForm = this.fromDate.split("-")[0]
        let mForm = this.fromDate.split("-")[1]
        let dateForm = this.fromDate.split("-")[2]
        this.toDateResult = new Date(yTo, mTo - 1, dateTo, this.toHour, this.toMinutes);
        this.formDateResult = new Date(yForm, mForm - 1, dateForm, this.formHour, this.fromMinutes);
      } else if (data.quickTimeRange) {
        this.first = false;
        this.seccond = true;

        // datelogic

        let x = data.quickTimeRange
        let param = x.slice(-1)
        if (param === "m") {
          let valueStr = x.replace("m", "");
          let valueInt = parseInt(valueStr);
          this.getTime(valueInt, param)
        } else if (param === "h") {
          let valueStr = x.replace("h", "");
          let valueInt = parseInt(valueStr);
          this.getTime(valueInt, param)
        }
      } else {
        this.router.navigate(['dashboard'])
      }
      this.machineName = data.machine;
      this.groupName = data.group;
      this.stat = data.stat;
      this.threshold = data.threshold;

    }
  }

  getTime(min, param) {
    if (param === "m") {
      this.timedate = new Date(Date.now() - 60000 * min);
      console.log(this.timedate)
    } else if (param === "h") {
      this.timedate = new Date(Date.now() - 1000 * 3600 * min)
    } else if (param === "d") {
      this.timedate = new Date(Date.now() - 1000 * 3600 ** 24 * min)
    }
  }


}
