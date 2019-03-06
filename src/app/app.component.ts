import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Сделать пожертвование',
      url: '/donate',
      icon: 'cafe'
    },
      /*    {
            title: 'Регулярные пожертвования',
            url: '/recurring',
            icon: 'heart'
          },*/
      {
          title: 'Остановить регулярные пожертвования',
          url: '/unsubscribe',
          icon: 'sad'
      }
  ];

  constructor(
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
  }
}
