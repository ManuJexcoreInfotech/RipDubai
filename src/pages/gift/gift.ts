import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Constant } from '../../webService/constant';
import { WebService } from '../../webService/webservice';
import { Http ,RequestOptions, Headers} from '@angular/http';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser';


import { Slides } from 'ionic-angular';
/**
 * Generated class for the GiftPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gift',
  templateUrl: 'gift.html',
})
export class GiftPage {
options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
};
@ViewChild(Slides) slides: Slides;

  VouchersArry = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public constant:Constant, public http:Http, public service:WebService, public iab: InAppBrowser) {
            this.iab.create("https://www.techiediaries.com",'_blank');
	this.GetAllVouchers();
  }
  openUrl() {

        
}   

  ionViewDidLoad() {
    console.log('ionViewDidLoad GiftPage');
  }
  
    GetAllVouchers(){
		var dic = {};
		this.constant.LoadingPresent();
		var URL = 'http://pr.veba.co/~shubantech/ripdubai/getVouchers.php';
		  
		this.http.post(URL,{}).subscribe(data => {
			this.constant.LoadingHide();
			console.log(data.json());
			var JsonData = data.json();
			this.VouchersArry = JsonData.vouchers;
		}, error => {
			  console.log('WebserviceHandler=>'+error);
		});
    }
    loadstartCallback(){

    }
    exitCallback(){
    
    }
    BuyNow(id){
        //var url="https://www.google.com/";
        //var ref=window.open(url,'_blank','location=yes');
       
    }
}
