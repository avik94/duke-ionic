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
    keys: ['category','sponsorName','logoUrl' ]
  };

  

  dataOfTable = [
    {
      category: "category1",
      sponsorName: "sponsorname2",
      logoUrl: "logo2"
    },
    {
      category: "category2",
      sponsorName: "sponsorname2",
      logoUrl: "logorl2"
    },
    {
      category: "category1",
      sponsorName: "sponsorname2",
      logoUrl: "logo2"
    },
    {
      category: "category2",
      sponsorName: "sponsorname2",
      logoUrl: "logorl2"
    },
    {
      category: "category1",
      sponsorName: "sponsorname2",
      logoUrl: "logo2"
    },
    {
      category: "category2",
      sponsorName: "sponsorname2",
      logoUrl: "logorl2"
    },
    {
      category: "category1",
      sponsorName: "sponsorname2",
      logoUrl: "logo2"
    },
    {
      category: "category2",
      sponsorName: "sponsorname2",
      logoUrl: "logorl2"
    },
    {
      category: "category1",
      sponsorName: "sponsorname2",
      logoUrl: "logo2"
    },
    {
      category: "category2",
      sponsorName: "sponsorname2",
      logoUrl: "logorl2"
    },
    {
      category: "category1",
      sponsorName: "sponsorname2",
      logoUrl: "logo2"
    },
    {
      category: "category2",
      sponsorName: "sponsorname2",
      logoUrl: "logorl2"
    },
    {
      category: "category1",
      sponsorName: "sponsorname2",
      logoUrl: "logo2"
    },
    {
      category: "category2",
      sponsorName: "sponsorname2",
      logoUrl: "logorl2"
    },
  ]

}
