import { Component, OnInit, ɵConsole } from '@angular/core';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

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
  

  constructor(private menuService: MenuService, private router: NavController) { }
  animate = false

  ngOnInit() {
    const data = this.menuService.getValue();
    console.log(data)

    if (!data) {
      this.router.navigateForward(['dashboard'])
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
        console.log(this.toDate, this.toHour.toString(), this.toMinutes.toString())
        this.toDateResult = new Date(this.toDate+" "+this.toHour.toString()+":"+this.toMinutes.toString()+" "+"+0");
        console.log(this.toDateResult)
        this.formDateResult = new Date(this.fromDate+" "+this.formHour.toString()+":"+this.fromMinutes.toString()+" "+"+0");
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
        this.router.navigateForward(['dashboard'])
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

  // segment part


  buttonList = [
    { name: "Data Table" , buttonColor: "success" },
    { name: "Line Plot" , buttonColor: "warning" },
    { name: "FFT" , buttonColor: "primary" },
    { name: "PSD" , buttonColor: "danger" },
  ]

  changeRoute(index){
    if(index === 0){
      this.router.navigateForward(['all-data/data-table']);
    }else if(index === 1){
      this.router.navigateForward(['all-data/line-plot']);
    }else if(index === 2){
      this.router.navigateForward(['all-data/fft']);
    }else if(index === 3){
      this.router.navigateForward(['all-data/psd']);
    }
  }

}
