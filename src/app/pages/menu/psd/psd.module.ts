import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PsdPage } from './psd.page';
import { HeaderModule } from 'src/app/components/header/header.module';

const routes: Routes = [
  {
    path: '',
    component: PsdPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PsdPage]
})
export class PsdPageModule {}
