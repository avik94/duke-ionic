import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllDataPage } from './all-data.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { ChartModule } from 'angular2-chartjs';
import { Angular2CsvModule } from 'angular2-csv';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

// plot ly
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
 
PlotlyModule.plotlyjs = PlotlyJS;

const routes: Routes = [
  {
    path: '',
    component: AllDataPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartModule,
    PlotlyModule,
    Angular2CsvModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    IonicModule,
    RouterModule.forChild(routes),
    HeaderModule
  ],
  declarations: [AllDataPage]
})
export class AllDataPageModule {}
