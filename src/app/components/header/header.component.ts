import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  @Input() title = '';
  @Input() backEnabled = true;
  @Input() backDefaultHref = null;

  notifications = [];

  constructor(private popoverController: PopoverController, private router: Router ) {
    for (let i = 0; i < 10; i++) {
      this.notifications.push('Notification ' + i);
    }
  }

  ngOnInit() {
  }

  async presentPopover(ev) {
    const popover = await this.popoverController.create({
      component: NotificationPopoverComponent,
      componentProps: {notifications: this.notifications},
      translucent: true,
      event: ev
    });
    return await popover.present();
  }

  async presentUserPopover(ev) {
    const popover = await this.popoverController.create({
      component: UserPopoverComponent,
      componentProps: {
        user: {
          name: 'Admin User',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7YYYSoI95uoBQMx0l3szgn9V7RzDytGTGUuDI8Wx2OYfJCKYk'
        }
      },
      translucent: true,
      event: ev
    });
    return await popover.present();
  }
}

@Component({
  selector: 'app-notification-popover',
  template: `
    <ion-content>
      <ion-list>
        <ion-list-header>
          Notifications ({{notifications.length}})
          <ion-button color="tertiary" size="small" fill="clear">Clear</ion-button>
        </ion-list-header>
        <ion-item *ngFor="let item of notifications">{{item}}</ion-item>
      </ion-list>
    </ion-content>
  `
})
export class NotificationPopoverComponent implements OnInit {

  notifications = [];

  ngOnInit(): void {
  }

}


@Component({
  selector: 'app-user-popover',
  template: `
    <ion-content>
      <ion-list>
        <ion-item lines="none">
          <ion-avatar style="margin: auto; height: 100px; width: 100px">
            <ion-img [src]="user.img"></ion-img>
          </ion-avatar>
        </ion-item>
        <ion-item lines="full" text-center><p style="margin: auto"><b>{{user.name}}</b></p></ion-item>
        <ion-item lines="none">
          <ion-icon name="ios-contact" slot="start"></ion-icon>
          <ion-label>My Account</ion-label>
        </ion-item>
        <ion-item lines="none">
          <ion-icon name="ios-power" slot="start"></ion-icon>
          <ion-label>Logout</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  `
})
export class UserPopoverComponent implements OnInit {

  user: any = {};

  ngOnInit(): void {
  }

}
