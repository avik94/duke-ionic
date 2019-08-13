import {Component, OnInit} from '@angular/core';
import {MenuService} from '../menu.service';
import {AlertController, ModalController} from '@ionic/angular';
import {CalendarModal, CalendarModalOptions, CalendarResult} from 'ion2-calendar';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    date: string;
    type: 'string';
    selectedDate1: any;
    selectedDate2: any;

    quickTime = true;

    timeRanges = [
        {name: 'Select None', value:"" },
        {name: 'Last 1 minutes', value:"1m" },
        {name: 'Last 5 minutes', value:"5m" },
        {name: 'Last 10 minutes', value:"10m" },
        {name: 'Last 15 minutes', value:"15m" },
        {name: 'Last 30 minutes', value:"30m" },
        {name: 'Last 1 hour', value:"1h" },
        {name: 'Last 3 hours', value:"3h"},
        {name: 'Last 6 hours', value:"6h"},
        {name: 'Last 12 hours', value:"12h"},
        {name: 'Last 24 hours', value:"24h"},
        {name: 'Last 2 days', value:"48h"},
        {name: 'Last 3 days', value:"72h"}
    ];

    group = [
        {name: 'MRI Health'},
        {name: 'Energy Audit'},
        {name: 'Drive Health'}
    ];

    constructor(
        private menuService: MenuService, 
        public modalCtrl: ModalController, 
        public alertController: AlertController,
        private router: Router ) {
    }
    

    ngOnInit() {
    }

  
    submitForm() {
        this.menuService.changeDisableValue.emit(false);
        this.machineForm.value.toDate = this.selectedDate1
        this.machineForm.value.formDate = this.selectedDate2
        this.menuService.setValue(this.machineForm.value)
        this.machineForm.reset();
        this.router.navigate(['input-data'])
    }


    // form-section-sart
    machineForm = new FormGroup({
        'machine': new FormControl(null,Validators.required),
        'group': new FormControl(null,Validators.required),
        'stat' : new FormControl(null,Validators.required),
        'threshold' : new FormControl(null,Validators.required),
        'quickTimeRange': new FormControl(null),
        'toHour': new FormControl(null),
        'toMinutes': new FormControl(null),
        'formHour': new FormControl(null),
        'formMinutes': new FormControl(null),
    })


    //plugin start here
    async openCalendar(data) {
        if (data === 'calendar1') {
            const options: CalendarModalOptions = {
                title: 'Basic'
            };

            const myCalendar = await this.modalCtrl.create({
                component: CalendarModal,
                componentProps: {options: options}
            });

            myCalendar.present();

            const event: any = await myCalendar.onDidDismiss();
            const date: CalendarResult = event.data;
            this.selectedDate1 = date.string;
        } else {
            const options: CalendarModalOptions = {
                title: 'Basic'
            };

            const myCalendar = await this.modalCtrl.create({
                component: CalendarModal,
                componentProps: {options: options}
            });

            myCalendar.present();

            const event: any = await myCalendar.onDidDismiss();
            const date: CalendarResult = event.data;
            this.selectedDate2 = date.string;
        }

    }
}
