import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
// import { ListPage } from '../pages/list/list';
import { AboutPageModule } from '../pages/about/about.module';
import { ActivitiesPageModule } from '../pages/activities/activities.module';
import { GiftPageModule } from '../pages/gift/gift.module';
import { LocationPageModule } from '../pages/location/location.module';
import { ContactPageModule } from '../pages/contact/contact.module';
import { CancellationPageModule } from '../pages/cancellation/cancellation.module';
import { BookingPageModule } from '../pages/booking/booking.module';
import { ListPageModule } from '../pages/list/list.module';

// Web Service
import { HttpModule } from '@angular/http';
import { Constant } from '../webService/constant';
import { Handler } from '../webService/handler';
import { WebService } from '../webService/webservice';

// Plugin
import { DatePicker } from '@ionic-native/date-picker';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [MyApp],

  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AboutPageModule,
    ActivitiesPageModule,
    HomePageModule,
    GiftPageModule,
    CancellationPageModule,
    BookingPageModule,
    ContactPageModule,
    LocationPageModule,
    ListPageModule
    
  ],

  bootstrap: [IonicApp],

  entryComponents: [MyApp],

  providers: [StatusBar,SplashScreen,{provide: ErrorHandler, useClass: IonicErrorHandler}, DatePicker, 
    Handler,DatePipe,WebService, Constant]

})
export class AppModule {}
