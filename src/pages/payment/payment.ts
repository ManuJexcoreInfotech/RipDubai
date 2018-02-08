import { Component,Pipe, PipeTransform,ViewChild } from '@angular/core';
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
		this.constant.LoadingPresent();
		setTimeout(() => {  this.constant.LoadingHide(); },3000);
		this.bookId = this.navParams.get('book_id');
		this.url = 'https://ripdubai.com/pm/checkout1.php?book_id='+this.bookId;
			
	}
	BackButtonClick(){
		this.navCtrl.pop();
	}
	sanitize(url:string){   
		return this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}
	dismissLoading(): void {
		this.constant.LoadingHide();
		//console.log('me');
	}
}
