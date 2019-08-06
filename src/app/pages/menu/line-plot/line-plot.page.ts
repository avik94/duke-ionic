import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-plot',
  templateUrl: './line-plot.page.html',
  styleUrls: ['./line-plot.page.scss'],
})
export class LinePlotPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      data: [20,70,10,72,15,35,10],
      label: 'Series A',
      backgroundColor: "#b9b9b900",
      borderColor: 'red',
    }, {
      data: [50,50,50,50,50,50,50],
      label: 'Series B',
      backgroundColor: "#b9b9b900",
      borderColor: 'green',
    }, {
      data: [20, 33, 35, 40, 30, 40, 50],
      label: 'Series C',
      backgroundColor: "#b9b9b900",
      borderColor: 'yellow',
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
            color: 'rgba(183, 183, 183, 0.5);',
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
            color: 'grey',
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



}
