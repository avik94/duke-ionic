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
