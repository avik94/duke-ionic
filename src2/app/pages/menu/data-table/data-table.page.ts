import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.page.html',
  styleUrls: ['./data-table.page.scss'],
})
export class DataTablePage implements OnInit {
  filter;
  p: number = 1;

  constructor( private http: HttpClient ) { }
  voltage2;
  voltage3

  ngOnInit() {
    this.http.get('http://vmart.machinesense.com/api/datasources/proxy/1/query?db=telegraf&q=SELECT%20%22rms_ph1_fluctuation_percent%22%20FROM%20%22statsd_vmart_4d%22%20WHERE%20(%22company%22%20=~%20/prop-new$/%20AND%20%22machine%22%20=~%20/EventTrapTesting$/%20AND%20%22datatype%22%20=~%20/raw$/)%20AND%20time%20%3E=%20now()%20-30m%20GROUP%20BY%20%22rms_ph1_fluctuation_percent%22&epoch=ms').subscribe(res1=>{
      for(let item of res1['results'][0]['series'][0]['values']){
        let time = new Date(item[0]);
        let date = JSON.stringify(time)
        date = date.slice(1,20)
        const x = {
          TimeStamp:date,
          Ph1_Voltage_Variation:item[1],
          Ph2_Voltage_Variation:item[1],
          Ph3_Voltage_Variation:item[1],
        }
        this.dataOfTable.push(x);
      }
    })
    // this.http.get('http://vmart.machinesense.com/api/datasources/proxy/1/query?db=telegraf&q=SELECT%20%22rms_ph1_fluctuation_percent%22%20FROM%20%22statsd_vmart_4d%22%20WHERE%20(%22company%22%20=~%20/prop-new$/%20AND%20%22machine%22%20=~%20/EventTrapTesting$/%20AND%20%22datatype%22%20=~%20/raw$/)%20AND%20time%20%3E=%20now()%20-30m%20GROUP%20BY%20%22rms_ph2_fluctuation_percent%22&epoch=ms').subscribe(res2=>{
    //   for(let item of res2['results'][0]['series'][0]['values']){
    //     let time = new Date(item[0]);
    //     let date = JSON.stringify(time)
    //     date = date.slice(1,20)
    //     this.voltage2 = date
    //   }
    // }
    // )
    // this.http.get('http://vmart.machinesense.com/api/datasources/proxy/1/query?db=telegraf&q=SELECT%20%22rms_ph1_fluctuation_percent%22%20FROM%20%22statsd_vmart_4d%22%20WHERE%20(%22company%22%20=~%20/prop-new$/%20AND%20%22machine%22%20=~%20/EventTrapTesting$/%20AND%20%22datatype%22%20=~%20/raw$/)%20AND%20time%20%3E=%20now()%20-30m%20GROUP%20BY%20%22rms_ph3_fluctuation_percent%22&epoch=ms').subscribe(res2=>{
    //   for(let item of res2['results'][0]['series'][0]['values']){
    //     let time = new Date(item[0]);
    //     let date = JSON.stringify(time)
    //     date = date.slice(1,20)
    //     this.voltage3 = item[1]
    //     console.log('c')
    //   }
    //   console.log(this.dataOfTable) ;  
    // })
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
    
  ]

}
