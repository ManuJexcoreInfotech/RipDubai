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
import { RegisterPage } from '../pages/register/register';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'HOME', component: HomePage },
      // { title: 'List', component: ListPage },
      { title: 'ACTIVITIES', component: ActivitiesPage },
      { title: 'ABOUT US', component: AboutPage },
      { title: 'GIFT VOUCHERS', component: GiftPage },
      { title: 'LOCATION', component: LocationPage },
      { title: 'CONTACT US', component: ContactPage },
      { title: 'CANCELLATION & SAFETY', component: CancellationPage },
      { title: 'REGISTER', component: RegisterPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  openPage(page) {
    //this.splashScreen.show();
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
}
