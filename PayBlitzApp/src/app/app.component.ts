import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
   { title: 'Home', url: '/homepage', icon: 'home' },
    { title: 'Child Accounts', url: '/child-accounts', icon: 'people' },
    { title: 'Redeem', url: '/redeem-page', icon: 'card' },
    { title: 'logout', url: '/loginpage', icon: 'log-out' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
  sideMenuClick(navItem: any) {
    if (navItem.title == "Dashboard") {

    }
  }
}
