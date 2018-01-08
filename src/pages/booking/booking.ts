import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DatePicker } from '@ionic-native/date-picker';
import { elementDef } from '@angular/core/src/view/element';
import { DatePipe } from '@angular/common';

import { Constant } from '../../webService/constant';
import { WebService } from '../../webService/webservice';
import { Http ,RequestOptions, Headers} from '@angular/http';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {

  dateSelected = '';
  timeSelected = '';
  checkboxSRC = 'assets/imgs/checkboxFalse.jpeg';
  checkboxSRC1 = 'assets/imgs/checkboxFalse.jpeg';
  checkDate = '';
  checkTime = '';
  coupon:any = '';
  couponPrice:any = 0;
  redeem:boolean = false;
  ActivityArry:any = {};
  DisplayDate = '';
  DisplayTime = '';
  Texes = 0;
  FinalTotal = 0;
  TotlePayment = 0;
  PersonArry = ["1","2","3","4","5","6","7","8","9"];
  SingleActivity = [];
  TimeSlotArry = [];
  IONSelectValue:any;
  Person = 1;
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private datePicker: DatePicker,
  public datePipe:DatePipe, public constant:Constant, public service:WebService, public http: Http, public iab: InAppBrowser) {
    
    
    this.ActivityArry = navParams.get('ActivityArry');
    console.log(this.ActivityArry);

    //this.CheckDateTimeIsBooked();
    this.GetActivityDetails();
	

  }
  browserOnSuccess(){
	  this.constant.Alert('Success', ' Booking done successfully.','Ok');
  }
  browserOnfail(){
	  this.constant.Alert('Success', 'payment failed.','Ok');
  }
  SelecetDateClick(){
    this.SelecetDate();
  }
 
  SelecetTimeClick(){
    //this.SelecetTime = SelecetTime;
	this.checkTime = this.timeSelected;
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
	var CustomURL = 'date='+this.checkDate;
	// var URL = "http://pr.veba.co/~shubantech/ripdubai/getBookingTime.php?"+CustomURL;
	var URL = "http://focusdxb.com/ripdubai/v1/api/getBookingTime.php?"+CustomURL;
	this.http.get(URL).subscribe(data => {
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
    
    var URL = 'http://focusdxb.com/ripdubai/v1/api/checkBookingDate.php?b_date='+this.checkDate+'&time='+this.checkTime;
    //var URL = 'http://focusdxb.com/ripdubai/v1/api/checkBookingDate.php?b_date=2017-11-30'+'&time=12:00 AM';
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
    
    var URL = 'http://focusdxb.com/ripdubai/v1/api/activityContoller.php?activity_id=' + this.ActivityArry.activity_id;
    // var URL = 'http://pr.veba.co/~shubantech/ripdubai/activityContoller.php?activity_id=' + this.ActivityArry.activity_id;
    
    this.http.get(URL).subscribe(data => {
      this.constant.LoadingHide();
      console.log("<+++++TEST++++++>");
      console.log(data.json());
      var SinglePartTime = data.json();
      this.SingleActivity = SinglePartTime.activiteis;
      
    }, error => {
         console.log('WebserviceHandler=>'+error);
    });
  
  }

  IONSelectEvent(){
    console.log(this.IONSelectValue);
    var start = this.IONSelectValue.min_qty;
    var end = this.IONSelectValue.max_qty;
    this.PersonArry = [];
    for (var i = start; i <= end; i++) {
      this.PersonArry.push(i);
    }


    if(this.Person==0){
        this.TotlePayment = this.IONSelectValue.price;
    }else{
        this.TotlePayment = this.IONSelectValue.price * this.Person;
    }

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
      this.constant.Alert('Message', 'Please select cancellation and safety policy checkbox.', 'Ok');
    }else if(this.checkboxSRC1 == 'assets/imgs/checkboxFalse.jpeg'){
      this.constant.Alert('Message', 'Please select check-in conditions checkbox.', 'Ok');
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
		var coupon_code = this.coupon;

		 var CustomURL = 'user_id=0&date='+date+'&b_date='+this.checkDate+'&time='+this.checkTime+'&activity_id='+activity_id+
		 '&person=1&price='+Price+'&total='+total_price+'&package='+Package+'&duration='+Duration;+'&coupon_code='+coupon_code;
		
		 var URL = 'http://pr.veba.co/~shubantech/ripdubai/bookingController.php?'+ CustomURL;
		 //var URL = 'http://focusdxb.com/ripdubai/v1/api/bookingController.php?'+ CustomURL;
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
			  this.Texes = 1;
			  this.TotlePayment = 1;
			  this.SingleActivity = [];
			  this.IONSelectValue = '';
				const options: InAppBrowserOptions = {
				  zoom: 'no'
				}
				
				var url = 'http://focusdxb.com/ripdubai/v1/pm/checkout.php?book_id='+Temp.booking_id;
				// var url = 'http://pr.veba.co/~shubantech/ripdubai/web/pm/checkout.php?book_id='+Temp.booking_id;
				console.log("NEW URL_+++"+url);
				const browser = this.iab.create(url,'_blank',options);
				this.navCtrl.pop();  
			  //this.constant.Alert('Success', ' Booking done successfully.','Ok');
			}else{
			  this.constant.Alert('Error', 'Something is wrong Please try again later.','Ok');
			}
		  }, error => {
			  console.log('WebserviceHandler=>'+error);
		  });
   
	}
	checkRedeem(){
		if (!this.coupon) {
		  this.constant.Alert('Message', 'Please Enter Voucher Code.', 'Ok');
		}else if(!this.TotlePayment){
			this.constant.Alert('Message', 'Please select Package.', 'Ok');
		}else{
			this.constant.LoadingPresent();
			var URL = 'http://focusdxb.com/ripdubai/v1/api/checkCoupon.php?code='+this.coupon;
			//var URL = 'http://focusdxb.com/ripdubai/v1/api/checkBookingDate.php?b_date=2017-11-30'+'&time=12:00 AM';
			console.log(URL); 

			this.http.get(URL).subscribe(data => {
			  this.constant.LoadingHide();
			  console.log(data.json());
			  var Temp = data.json();
			  console.log(Temp.success);
			  console.log(Temp.booking_time);
				if (Temp.success == "1") {

				this.redeem = true;
				this.TotlePayment =  this.TotlePayment - parseInt(Temp.booking_time.price);
				this.couponPrice = Temp.booking_time.price;
				
				}else{
					console.log('booked');
					this.constant.Alert('Message',Temp.booking_time, 'Ok');
				}
			  
			}, error => {
				 console.log('WebserviceHandler=>'+error);
			});
			
			
		}
		
		
	  
	}

  removeRedeem(){
	  
		this.coupon = '';
		this.redeem = false;
		this.TotlePayment =  this.TotlePayment + this.couponPrice;
		this.couponPrice = 0;
	  
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
  CheckBoxClick1(){
    if (this.checkboxSRC1 == 'assets/imgs/checkboxFalse.jpeg') {
      this.checkboxSRC1 = 'assets/imgs/checkboxTrue.png'
    }else{
      this.checkboxSRC1 = 'assets/imgs/checkboxFalse.jpeg'
    }
  }

}
