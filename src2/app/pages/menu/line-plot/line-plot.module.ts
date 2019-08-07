import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LinePlotPage } from './line-plot.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { ChartModule } from 'angular2-chartjs';

const routes: Routes = [
  {
    path: '',
    component: LinePlotPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    ChartModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LinePlotPage]
})
export class LinePlotPageModule {}
