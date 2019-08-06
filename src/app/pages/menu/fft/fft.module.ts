import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FftPage } from './fft.page';
import { HeaderModule } from 'src/app/components/header/header.module';

const routes: Routes = [
  {
    path: '',
    component: FftPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FftPage]
})
export class FftPageModule {}
