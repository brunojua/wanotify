import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { Push, PushObject, PushOptions } from '@ionic-native/push';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = TabsPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public push: Push
  ) {

    platform.ready().then(() => {      
      statusBar.styleDefault();
      splashScreen.hide();

      this.pushSetup();
    });

  }

  pushSetup() {

    this.push.hasPermission()
    .then((res: any) => {

      if (res.isEnabled) {
        // alert('ok');
      } else {
        // alert('erro na permissão');
      }

    });

    const options: PushOptions = {
      android: {
        senderID: '336048046184',
        sound: 'true'
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'true'
      },
      windows: {},
      browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
    };

    const pushObject: PushObject = this.push.init(options);
  
    pushObject.on('notification').subscribe((notification: any) => {
      alert(JSON.stringify(notification.message));
      // console.log(notification);
    });
    
    pushObject.on('registration').subscribe((registration: any) => {
      // alert(JSON.stringify(registration.registrationId));            
      // this.tokenPush = registration.registrationId;
      localStorage.setItem('tokenPush', registration.registrationId);
    });
    
    pushObject.on('error').subscribe(error => {
      // alert(JSON.stringify(error));
      // console.log(error);
    });
  }
}
