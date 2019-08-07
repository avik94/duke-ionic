import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  providers: [MenuService]
})
export class MenuPage implements OnInit {


  constructor( private menuService: MenuService, private event: Events ) { }

  ngOnInit() {
    console.log("in menu")
    this.menuService.changeDisableValue.subscribe((data)=>{
      this.disabledValue = data;
      this.activeClass = true;
    })

    // =======
    this.event.subscribe('hide-menu-pane', data => {
      console.log(data);
      Promise.resolve(null).then(() => {
        this.splitPaneHidden = data;
      });
    });
  }

  splitPaneHidden = false;
  disabledValue = true;
  activeClass = false;
  notActivate;
  pages = [
    {title: 'Dashboard', url: '/dashboard', icon: 'home'},
    {title: 'User Profile', url: '/dashboard', icon: 'contact'},
    {title: 'Company Name', url: '/dashboard', icon: 'briefcase'},
  ];

  plotMenu = [
    { title: 'Line Plot', url: '/line-plot', icon: 'analytics' },
    { title: 'Data Table', url: '/data-table', icon: 'list-box' },
    { title: 'FFT', url: '/fft', icon: 'home' },
    { title: 'PSD', url: '/psd', icon: 'home' }
  ]
  selectItem(item){
    this.notActivate = item;
  }

  

}
