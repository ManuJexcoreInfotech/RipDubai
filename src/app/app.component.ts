import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ActivitiesPage } from '../pages/activities/activities';
import { GiftPage } from '../pages/gift/gift';
import { LocationPage } from '../pages/location/location';
import { ContactPage } from '../pages/contact/contact';
import { CancellationPage } from '../pages/cancellation/cancellation';
import { BookingPage } from '../pages/booking/booking';
import { PaymentPage } from '../pages/payment/payment';
import { RegisterPage } from '../pages/register/register';
import { Push, PushObject, PushOptions} from '@ionic-native/push';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public push: Push, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'HOME', component: HomePage },
      { title: 'REGISTER', component: RegisterPage },
      // { title: 'List', component: ListPage },
      { title: 'ACTIVITIES', component: ActivitiesPage },
      { title: 'ABOUT US', component: AboutPage },
      { title: 'GIFT VOUCHERS', component: GiftPage },
      { title: 'LOCATION', component: LocationPage },
      { title: 'CONTACT US', component: ContactPage },
      { title: 'CANCELLATION & SAFETY', component: CancellationPage },
      { title: 'PaymentPage', component: PaymentPage }
     
    ];

  }
	
	
  initializeApp() {
    this.platform.ready().then(() => {
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
	  this.pushsetup();
    });
  }
	pushsetup() {
		const options: PushOptions = {
			 android: {
				 senderID: 'here you SENDER IR from FCM'
			 },
			 ios: {
				 alert: 'true',
				 badge: true,
				 sound: 'false'
			 },
			 windows: {}
		  };

		const pushObject: PushObject = this.push.init(options);

		pushObject.on('notification').subscribe((notification: any) => {
			if (notification.additionalData.foreground) {
			  /* let youralert = this.alertCtrl.create({
				title: 'New Push notification',
				message: notification.message
			  });
			  youralert.present(); */
			}
		  });

		pushObject.on('registration').subscribe((registration: any) => {
		
		});

		
		pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
		  
	  }

  openPage(page) {
    //this.splashScreen.show();
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
}
