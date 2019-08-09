import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import {HeaderModule} from '../../../components/header/header.module';
import {MainColModule} from '../../../directives/main-col.directive';
import {CalendarModule} from 'ion2-calendar';
import {FooterModule} from '../../../components/footer/footer.module';


const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        HeaderModule,
        MainColModule,
        CalendarModule,
        FooterModule
    ],
  declarations: [HomePage]
})
export class HomePageModule {}
