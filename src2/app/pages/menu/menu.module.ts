import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { MenuPage } from './menu.page';
import {MenuRoutingModule} from './menu-routing.module';
import {HeaderModule} from '../../components/header/header.module';

const routes: Routes = [
  {
    path: '',
    component: MenuPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MenuRoutingModule,
        RouterModule.forChild(routes),
        HeaderModule,
        HttpClientModule
    ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
