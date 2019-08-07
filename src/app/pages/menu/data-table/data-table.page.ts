import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.page.html',
  styleUrls: ['./data-table.page.scss'],
})
export class DataTablePage implements OnInit {
  filter;
  p: number = 1;

  constructor() { }

  ngOnInit() {
  }
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: false,
    headers: [],
    showTitle: true,
    title: 'asfasf',
    useBom: false,
    removeNewLines: true,
    keys: ['category', 'sponsorName', 'logoUrl']
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
      Ph3_Voltage_Variation: 1,
    },
    
  ]

}
