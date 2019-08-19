import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { CalendarModal, CalendarModalOptions, CalendarResult } from 'ion2-calendar';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServerService } from '../services/server.service';

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

    // threshold
    thresholdValue = "";
    machineId;

    vthd:string;
    ithd:string;
    vf:string;
    ff:string;

    quickTime = true;

    comapanyName = [
        { name: "DukeMedicalEquimentInternational" },
        { name: "prop-new" },
        { name: "Novatec" }
    ]
    timeRanges = [
        { name: 'Select None', value: "" },
        { name: 'Last 1 minutes', value: "1m" },
        { name: 'Last 5 minutes', value: "5m" },
        { name: 'Last 10 minutes', value: "10m" },
        { name: 'Last 15 minutes', value: "15m" },
        { name: 'Last 30 minutes', value: "30m" },
        { name: 'Last 1 hour', value: "1h" },
        { name: 'Last 3 hours', value: "3h" },
        { name: 'Last 6 hours', value: "6h" },
        { name: 'Last 12 hours', value: "12h" },
        { name: 'Last 24 hours', value: "24h" },
        { name: 'Last 2 days', value: "48h" },
        { name: 'Last 3 days', value: "72h" }
    ];

    group = [
        { name: 'MRI Health' },
        { name: 'Energy Audit' },
        { name: 'Drive Health' }
    ];

    machineName = [];
    state = [];


    constructor(
        private menuService: MenuService,
        public modalCtrl: ModalController,
        public alertController: AlertController,
        private router: NavController,
        private serverService: ServerService) {
    }


    ngOnInit() {
    }


    async submitForm() {
        this.menuService.changeDisableValue.emit(false);
        this.customTimeRange.value.toDate = this.selectedDate1;
        this.customTimeRange.value.formDate = this.selectedDate2;
        const someValue = { ...this.mandatoryForm.value, ...this.quickTimeRange.value, ...this.customTimeRange.value }
        console.log(this.machineId);
        // threshold Update logic
        if(someValue.stat == 'Voltage variation'){
            const data = {"groupName": {
                "vthd": this.vthd,
                "ithd": this.ithd,
                "vf": someValue.threshold,
                "ff": this.ff
            }}
            this.serverService.updateThreshold(this.machineId,data);
        }else if(someValue.stat == 'Voltage Total Harmonic Distortion'){
            const data = {"groupName": {
                "vthd": someValue.threshold,
                "ithd": this.ithd,
                "vf": this.vf,
                "ff": this.ff
            }}
            this.serverService.updateThreshold(this.machineId,data);
        }else if(someValue.stat == 'Current Total Harmonic Distortion'){
            const data = {"groupName": {
                "vthd": this.vthd,
                "ithd": someValue.threshold,
                "vf": this.vf,
                "ff": this.ff
            }}
            this.serverService.updateThreshold(this.machineId,data);
        }else if(someValue.stat == 'Frequency Variation'){
            const data = {"groupName": {
                "vthd": this.vthd,
                "ithd": this.ithd,
                "vf": this.vf,
                "ff": someValue.threshold
            }}
            this.serverService.updateThreshold(this.machineId,data);
        }
        

        // forinputData Page
        this.menuService.setValue(someValue);
        this.router.navigateForward(['input-data']);
    }


    // form-section-sart
    quickTimeRange = new FormGroup({
        'quickTimeRange': new FormControl(null, Validators.required),
    })

    mandatoryForm = new FormGroup({
        'machine': new FormControl(null, Validators.required),
        'group': new FormControl(null, Validators.required),
        'stat': new FormControl(null, Validators.required),
        'threshold': new FormControl(null, Validators.required)
    })

    customTimeRange = new FormGroup({
        'toHour': new FormControl(null, Validators.required),
        'toMinutes': new FormControl(null, Validators.required),
        'formHour': new FormControl(null, Validators.required),
        'formMinutes': new FormControl(null, Validators.required)
    })


    //plugin start here
    async openCalendar(data) {
        if (data === 'calendar1') {
            const options: CalendarModalOptions = {
                title: 'Basic'
            };

            const myCalendar = await this.modalCtrl.create({
                component: CalendarModal,
                componentProps: { options: options }
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
                componentProps: { options: options }
            });

            myCalendar.present();

            const event: any = await myCalendar.onDidDismiss();
            const date: CalendarResult = event.data;
            this.selectedDate2 = date.string;
        }

    }

    async getCompanyName(data) {
        if (data.detail.value === 'DukeMedicalEquimentInternational') {
            this.machineName = [];
            const data = await this.serverService.getMachineName('DukeMedicalEquimentInternational');
            for (let item of data["results"][0]["series"][0]["values"]) {
                this.machineName.push({ machineName: item[1] })
            }
        } else if (data.detail.value === 'prop-new') {
            this.machineName = [];
            const data = await this.serverService.getMachineName('prop-new');
            for (let item of data["results"][0]["series"][0]["values"]) {
                this.machineName.push({ machineName: item[1] })
            }
        } else if (data.detail.value === 'Novatec') {
            this.machineName = [];
            const data = await this.serverService.getMachineName('Novatec');
            for (let item of data["results"][0]["series"][0]["values"]) {
                this.machineName.push({ machineName: item[1] })
            }
        }
    }

    async selectedGroup(data) {
        const machineId = await this.serverService.getMachineId(data.detail.value);
        this.machineId = machineId[0]['id'];
        const groupData = await this.serverService.getThresholdGroup(machineId[0]['id']);
        this.ff = groupData['groupName']['ff'];
        this.ithd = groupData['groupName']['ithd'];
        this.vf = groupData['groupName']['vf'];
        this.vthd = groupData['groupName']['vthd'];
    }

    stateSelect(name){
        if(name.detail.value === "Voltage variation"){
          this.thresholdValue = this.vf;
        }else if(name.detail.value === "Frequency Variation"){
          this.thresholdValue = this.ff;
        }else if(name.detail.value === "Voltage Total Harmonic Distortion"){
          this.thresholdValue = this.vthd;
        }else if(name.detail.value === "Current Total Harmonic Distortion"){
          this.thresholdValue = this.ithd
        }else{
          this.thresholdValue = " "
        }
      }

    groupSelect(groupName) {
        if (groupName.detail.value === "MRI Health") {
            this.state = [
                { name: "Voltage" },
                { name: "Current" },
                { name: "Voltage variation" },
                { name: "Voltage Total Harmonic Distortion" },
                { name: "Current Total Harmonic Distortion" },
                { name: "Frequency Variation" },
            ]
        }
        else if (groupName.detail.value === "Energy Audit") {
            this.state = [
                { name: "Voltage" },
                { name: "Current" },
                { name: "Power Factor" },
                { name: "Active Power" },
                { name: "Reactive Power" },
                { name: "Voltage Total Harmonic Distortion" },
                { name: "Voltage Total Harmonic Distortion 95th Percentile" },
                { name: "Voltage Total Harmonic Distortion 99th Percentile" },
                { name: "Current Total Harmonic Distortion" },
                { name: "Current Total Harmonic Distortion 95th Percentile" },
                { name: "Current Total Harmonic Distortion 99th Percentile" },
                { name: "Frequency Variation" },
                { name: "Maximum Demand Load current" },
                { name: "Short-Circuit Ratio" }
            ]
        }
        else if (groupName.detail.value === "Drive Health") {
            this.state = [
                { name: "Voltage" },
                { name: "Current" },
                { name: "Voltage variation" },
                { name: "Voltage Total Harmonic Distortion" },
                { name: "Current Total Harmonic Distortion" },
                { name: "Frequency Variation" },
                { name: "Drive Temperature" }
            ]
        }
    }
}
