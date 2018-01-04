import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  //this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  
}
