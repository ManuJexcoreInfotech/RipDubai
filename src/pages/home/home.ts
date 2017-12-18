import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookingPage } from '../booking/booking';
import { Slides } from 'ionic-angular';
import { Constant } from '../../webService/constant';
import { WebService } from '../../webService/webservice';
import { Http ,RequestOptions, Headers} from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  @ViewChild(Slides) slides: Slides;
  
 // ActivityArry = [1,2,3,4,5,6,7,6,];
    ActivityArry = []; 
    counter = 0;
   
  constructor(public navCtrl: NavController, public constant:Constant, public service:WebService, public http: Http) {
    this.GetAllActivity();
  }
  
  GetAllActivity(){

    var dic = {};
    this.constant.LoadingPresent();
    var URL = 'http://focusdxb.com/ripdubai/v1/api/activitiesContoller.php';
     
    this.http.post(URL,{}).subscribe(data => {
      this.constant.LoadingHide();
      console.log(data.json());
      var JsonData = data.json();
      this.ActivityArry = JsonData.activiteis;
    }, error => {
         console.log('WebserviceHandler=>'+error);
    });
    
  }

  booking() {
    var ActiveIndex = this.slides.getActiveIndex();
    console.log(this.ActivityArry[ActiveIndex]);
    this.navCtrl.push(BookingPage,{ActivityArry:this.ActivityArry[ActiveIndex]});
  }
   slideNext(){
	this.slides.slideNext(100);
        this.counter = this.slides.getActiveIndex();
    }
    slidePrev(){
	this.slides.slidePrev(100);
        this.counter = this.slides.getActiveIndex();
    }
  
}
