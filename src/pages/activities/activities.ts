import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Constant } from '../../webService/constant';
import { WebService } from '../../webService/webservice';
import { Http ,RequestOptions, Headers} from '@angular/http';

import { BookingPage } from '../booking/booking';
import { Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html',
})
export class ActivitiesPage {
  @ViewChild(Slides) slides: Slides;

  ActivityArry = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public constant:Constant, public service:WebService, public http: Http) {
    this.GetAllActivity();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivitiesPage');
  }

  GetAllActivity(){
    
     var dic = {};
     this.constant.LoadingPresent();
     var URL = 'https://silverwingtechnologies.com/clients/ripdubai/activitiesContoller.php';
      
     this.http.post(URL,{}).subscribe(data => {
       this.constant.LoadingHide();
       console.log(data.json());
       var JsonData = data.json();
       this.ActivityArry = JsonData.activiteis;
     }, error => {
          console.log('WebserviceHandler=>'+error);
     });
     
   }

  BookNowClick() {
    
    var ActiveIndex = this.slides.getActiveIndex();
    console.log(this.ActivityArry[ActiveIndex]);
    this.navCtrl.push(BookingPage,{ActivityArry:this.ActivityArry[ActiveIndex]});
  }

}
