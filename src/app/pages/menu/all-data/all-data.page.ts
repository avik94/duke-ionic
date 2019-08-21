import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.page.html',
  styleUrls: ['./all-data.page.scss'],
})
export class AllDataPage implements OnInit {

  constructor( private routes: ActivatedRoute ) { }
  activeButton;
  segmentActive;

  ngOnInit() {
    this.routes.params.subscribe(data=>{
      if(data.name === "data-table"){
        this.segmentActive = 'Data Table';
        this.activeButton = 0;
      }else if(data.name === "line-plot"){
        this.segmentActive = 'Line Plot';
        this.activeButton = 1;
      }else if(data.name === "fft"){
        this.segmentActive = 'FFT';
        this.activeButton = 2;
      }else if(data.name === "psd"){
        this.segmentActive = 'PSD';
        this.activeButton = 3;
      }
    })
  }

  segmentList = [
    {key: 'Data Table', value: 'Data Table'},
    {key: 'Line Plot', value: 'Line Plot'},
    {key: 'FFT', value: 'FFT'},
    {key: 'PSD', value: 'PSD'}
  ];

  segmentChanged(i) {
    this.segmentActive = i;
    this.activeButton = 5
  }

  // lineplot
  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      data: [20,70,10,72,15,35,10],
      label: 'Series A',
      backgroundColor: "#b9b9b900",
      borderColor: '#ff9198', 
    }, {
      data: [50,50,50,50,50,50,50],
      label: 'Series B',
      backgroundColor: "#b9b9b900",
      borderColor: 'green',
    }, {
      data: [20, 33, 35, 40, 30, 40, 50],
      label: 'Series C',
      backgroundColor: "#b9b9b900",
      borderColor: '#1976d2',
    },
    ],
  };

  options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
            color: '#efefef',
          },
          ticks: {
            fontColor: 'black',
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            color: '#efefef',
          },
          ticks: {
            fontColor: 'black',
          },
        },
      ],
    },
    legend: {
      labels: {
        fontColor: 'orange',
      },
    },
  };

  // data table
  optionDataTable = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: false,
    headers: [],
    showTitle: true,
    title: 'data-table',
    useBom: false,
    removeNewLines: true,
    keys: ['TimeStamp', 'Ph1_Voltage_Variation', 'Ph2_Voltage_Variation', 'Ph3_Voltage_Variation']
  };



  dataOfTable = [
    {
      TimeStamp: "date",
      Ph1_Voltage_Variation: 0,
      Ph2_Voltage_Variation: 0,
      Ph3_Voltage_Variation: 0,
    },
    {
      TimeStamp: "date",
      Ph1_Voltage_Variation: 0,
      Ph2_Voltage_Variation: 0,
      Ph3_Voltage_Variation: 0,
    },
    {
      TimeStamp: "date",
      Ph1_Voltage_Variation: 0,
      Ph2_Voltage_Variation: 0,
      Ph3_Voltage_Variation: 0,
    },
    {
      TimeStamp: "date",
      Ph1_Voltage_Variation: 0,
      Ph2_Voltage_Variation: 0,
      Ph3_Voltage_Variation: 0,
    },
    {
      TimeStamp: "date",
      Ph1_Voltage_Variation: 0,
      Ph2_Voltage_Variation: 0,
      Ph3_Voltage_Variation: 0,
    }
    
  ]
}
