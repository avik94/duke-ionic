import {Component, OnInit} from '@angular/core';
import {MenuService} from '../menu.service';
import {ModalController} from '@ionic/angular';
import {
    CalendarModal,
    CalendarModalOptions,
    DayConfig,
    CalendarResult
} from 'ion2-calendar';

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

    timeRanges = [
        {name: 'Last 1 minutes'},
        {name: 'Last 5 minutes'},
        {name: 'Last 10 minutes'},
        {name: 'Last 15 minutes'},
        {name: 'Last 30 minutes'},
        {name: 'Last 1 hour'},
        {name: 'Last 3 hours'},
        {name: 'Last 6 hours'},
        {name: 'Last 12 hours'},
        {name: 'Last 24 hours'},
        {name: 'Last 2 days'},
        {name: 'Last 3 days'}
    ];

    group = [
        {name: 'MRI Health'},
        {name: 'Energy Audit'},
        {name: 'Drive Health'}
    ];

    constructor(private menuService: MenuService, public modalCtrl: ModalController) {
    }

    ngOnInit() {
    }

    submitForm() {
        this.menuService.changeDisableValue.emit(false);
    }

    //calender plugin
    async openCalendar(data) {
        if(data==="calendar1"){
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
        }else{
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
