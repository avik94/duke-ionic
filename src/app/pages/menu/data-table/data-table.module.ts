import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DataTablePage } from './data-table.page';
import { Angular2CsvModule } from 'angular2-csv';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HeaderModule } from 'src/app/components/header/header.module';

const routes: Routes = [
  {
    path: '',
    component: DataTablePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    Angular2CsvModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DataTablePage]
})
export class DataTablePageModule {}
