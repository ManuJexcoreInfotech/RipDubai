import { Component,Pipe, PipeTransform } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { DatePicker } from '@ionic-native/date-picker';
import { elementDef } from '@angular/core/src/view/element';
import { DatePipe } from '@angular/common';

import { Constant } from '../../webService/constant';
import { WebService } from '../../webService/webservice';
import { Http ,RequestOptions, Headers} from '@angular/http';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser';


@IonicPage() 
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
		
	bookId=28;
	url:SafeResourceUrl='';
	constructor(public navCtrl: NavController, public navParams: NavParams, public constant:Constant, public service:WebService, public http: Http, public iab: InAppBrowser,public sanitizer: DomSanitizer) {
		
		this.bookId = this.navParams.get('book_id');
		this.url = 'http://pr.veba.co/~shubantech/ripdubai/web/pm/checkout.php?book_id='+this.bookId ;
			
	}
	BackButtonClick(){
		this.navCtrl.pop();
	}
	sanitize(url:string){   
		return this.sanitizer.bypassSecurityTrustUrl(url);
	}
}
