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
    setTimeout(()=>{
      window.dispatchEvent(new Event('resize'));
    },300)
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
  graph = {
    data: [
        { 
          y: [1, 2, 3,8,4,54,5,18,5,6], 
          x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
          type: 'scatter', 
          mode: 'lines+points', 
          marker: {color: 'red'}
        },
        { 
          y: [1, 4, 73,38,4,35,5,15,10,9], 
          x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
          type: 'scatter', 
          mode: 'lines+points', 
          marker: {color: 'green'}
        },
    ],
    layout: {title: 'Line Plot', autosize: true },
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
