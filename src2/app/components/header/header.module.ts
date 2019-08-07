import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent, NotificationPopoverComponent, UserPopoverComponent} from './header.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
  declarations: [
    HeaderComponent,
    NotificationPopoverComponent,
    UserPopoverComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent
  ],
  entryComponents: [
    NotificationPopoverComponent,
    UserPopoverComponent
  ]
})
export class HeaderModule { }
