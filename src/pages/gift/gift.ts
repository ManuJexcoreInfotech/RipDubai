import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Constant } from '../../webService/constant';
import { WebService } from '../../webService/webservice';
import { Http ,RequestOptions, Headers} from '@angular/http';

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
@ViewChild(Slides) slides: Slides;

  VouchersArry = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public constant:Constant, public service:WebService, public http: Http) {
    this.GetAllVouchers();
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
		var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
        ref.addEventListener('loadstop', function(event) {
             alert('background window loaded'); 
        });
       
    }
}
