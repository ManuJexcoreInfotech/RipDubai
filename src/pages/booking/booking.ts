import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DatePicker } from '@ionic-native/date-picker';
import { elementDef } from '@angular/core/src/view/element';
import { DatePipe } from '@angular/common';

import { Constant } from '../../webService/constant';
import { WebService } from '../../webService/webservice';
import { Http ,RequestOptions, Headers} from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {

  dateSelected = '';
  timeSelected = '';
  checkboxSRC = 'assets/imgs/checkboxFalse.jpeg';
  checkDate = '';
  checkTime = '';
  ActivityArry:any = {};
  DisplayDate = '';
  DisplayTime = '';
  Texes = 0;
  FinalTotal = 0;
  TotlePayment = 0;
  SingleActivity = [];
  TimeSlotArry = [];
  IONSelectValue:any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private datePicker: DatePicker,
  public datePipe:DatePipe, public constant:Constant, public service:WebService, public http: Http) {
    
    
    this.ActivityArry = navParams.get('ActivityArry');
    console.log(this.ActivityArry);

    //this.CheckDateTimeIsBooked();
    this.GetActivityDetails();
    
  }

  
  SelecetDateClick(){
    this.SelecetDate();
  }
 
  SelecetTimeClick(){
    //this.SelecetTime = SelecetTime;
  }

  SelecetDate(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      is24Hour: false,
      allowOldDates:false,
      minDate:  new Date().valueOf(),
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(date =>{ 
      console.log('Got date: ', date);
      this.dateSelected = this.datePipe.transform(date, 'MMMM d, yyyy');
      this.checkDate = this.datePipe.transform(date, 'yyyy-MM-dd');
      //Wednesday, October 18th 2017 @ 10am
      this.DisplayDate = this.datePipe.transform(date, 'EEEE, MMMM d y @');
      console.log(this.DisplayDate);
      this.CheckTimeStatic(date);
    },err => {
      console.log('Error occurred while getting date: ', err)
    });
	var URL = "http://pr.veba.co/~shubantech/ripdubai/getBookingTime.php";
	this.http.post(URL,{date:this.checkDate}).subscribe(data => {
		this.constant.LoadingHide();
		console.log(data.json());
		var JsonData = data.json();
		this.TimeSlotArry = JsonData.timeslots;
	  }, error => {
		   console.log('WebserviceHandler=>'+error);
	});
  }

  SelecetTime(){
    this.datePicker.show({
      date: new Date(),
      mode: 'time',
      is24Hour: false,
      allowOldDates:false,
      minDate:  new Date().valueOf(),
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(date =>{ 
      console.log('Got Time: ', date);
      this.timeSelected = this.datePipe.transform(date, 'h:mm a');
      this.checkTime = this.datePipe.transform(date, 'h:mm a');
      this.CheckTimeStatic(date);
      this.DisplayTime = this.datePipe.transform(date, 'ha');
      console.log(this.DisplayTime);
    },err => {
      console.log('Error occurred while getting date: ', err)
    });
  }

  CheckTimeStatic(date){
    console.log('Date:', this.checkDate);
    console.log('Time:', this.checkTime);
    if (this.checkTime && this.checkDate) {
      this.CheckDateTimeIsBooked();
    }else{
      console.log('Date and time not available');
    }
  }

  CheckDateTimeIsBooked(){
    
    this.constant.LoadingPresent();
    
    var URL = 'http://pr.veba.co/~shubantech/ripdubai/checkBookingDate.php?b_date='+this.checkDate+'&time='+this.checkTime;
    //var URL = 'http://pr.veba.co/~shubantech/ripdubai/checkBookingDate.php?b_date=2017-11-30'+'&time=12:00 AM';
    console.log(URL); 

    this.http.get(URL).subscribe(data => {
      this.constant.LoadingHide();
      console.log(data.json());
      var Temp = data.json();
      console.log(Temp.success);
      console.log(Temp.booking_time);
      if (Temp.success == "1") {
        var DataJson = data.json();  
        console.log('available');
      }else{
        console.log('booked');
        this.constant.Alert('Message',Temp.booking_time, 'Ok');
      }
      
    }, error => {
         console.log('WebserviceHandler=>'+error);
    });
  
  }

  GetActivityDetails(){
   
  this.constant.LoadingPresent();
    
    var URL = 'http://pr.veba.co/~shubantech/ripdubai/activityContoller.php?activity_id=' + this.ActivityArry.activity_id;
    //var URL = 'http://192.168.1.27/ripdubai/abc.php?activity_id=1';
    
    this.http.get(URL).subscribe(data => {
      this.constant.LoadingHide();
      console.log(data.json());
      var SinglePartTime = data.json();
      this.SingleActivity = SinglePartTime.activiteis;
      
    }, error => {
         console.log('WebserviceHandler=>'+error);
    });
  
  }

  IONSelectEvent(){
    console.log(this.IONSelectValue);
    this.TotlePayment = this.IONSelectValue.price;
    var TaxesSub = this.TotlePayment;
    this.Texes = (TaxesSub*20)/100;
    console.log(TaxesSub);
    console.log(this.Texes);
	this.FinalTotal = this.TotlePayment+this.Texes;
	
  }
  
  BookingClick(){
    //this.BookingAPI();
   // this.checkDate = 'fasdfa';
  //  this.checkTime = 'fasdfa';
    if (!this.checkDate) {
      this.constant.Alert('Message', 'Please select Date.', 'Ok');
    }else if(!this.checkTime){
      this.constant.Alert('Message', 'Please select Time.', 'Ok');
    }else if(!this.TotlePayment){
      this.constant.Alert('Message', 'Please select Package.', 'Ok');
    }else if(this.checkboxSRC == 'assets/imgs/checkboxFalse.jpeg'){
      this.constant.Alert('Message', 'Please select Privacy policy Checkbox.', 'Ok');
    }else{
      console.log('All Done');
      this.BookingAPI();
    }
  }

  BookingAPI(){
    
    this.constant.LoadingPresent();
    var dateToday = new Date();
    var date = this.datePipe.transform(dateToday, 'yyyy-MM-dd');
    var activity_id = this.ActivityArry.activity_id;
    var Price = this.TotlePayment;
    var total_price = Number(this.TotlePayment)+this.Texes;
    
    var Duration = this.IONSelectValue.duration;
    var Package = this.IONSelectValue.package;

     var CustomURL = 'user_id=0&date='+date+'&b_date='+this.checkDate+'&time='+this.checkTime+'&activity_id='+activity_id+
     '&person=1&price='+Price+'&total='+total_price+'&package='+Package+'&duration='+Duration;
    
     var URL = 'http://pr.veba.co/~shubantech/ripdubai/bookingController.php?'+ CustomURL;
      console.log(URL);

      this.http.get(URL).subscribe(data => {
        this.constant.LoadingHide();
        console.log(data.json());
        var Temp = data.json();
        if (Temp.success) {
          this.dateSelected = '';
          this.timeSelected = '';
          this.checkboxSRC = 'assets/imgs/checkboxFalse.jpeg';
          this.checkDate = '';
          this.checkTime = '';
          this.DisplayDate = '';
          this.DisplayTime = '';
          this.Texes = 0;
          this.TotlePayment = 0;
          this.SingleActivity = [];
          this.IONSelectValue = '';
          this.constant.Alert('Success', 'Your Booking Success.','Ok');
        }else{
          this.constant.Alert('Error', 'Something is wrong Please try again later.','Ok');
        }
      }, error => {
          console.log('WebserviceHandler=>'+error);
      });
   
   }
 

  BackButtonClick(){
    
    this.navCtrl.pop();
  }

  SelectCheckBoxClick(){
    if (this.checkboxSRC == 'assets/imgs/checkboxFalse.jpeg') {
      this.checkboxSRC = 'assets/imgs/checkboxTrue.png'
    }else{
      this.checkboxSRC = 'assets/imgs/checkboxFalse.jpeg'
    }
  }

}
