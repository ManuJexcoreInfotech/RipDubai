import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { Constant } from '../../webService/constant';
import { WebService } from '../../webService/webservice';
import { Http ,RequestOptions, Headers} from '@angular/http';
/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	firstname = '';
	lastname = '';
	nameError = 0;
	nameErrorTxt = '';
	emailError = 0;
	passwordError = 0;
	passwordErrorTxt = '';
	emailErrorTxt = '';
	email = '';
	contactError = 0;
	contactErrorTxt = '';
	contact = '';
	message = '';
	pwd= '';
	constructor(public navCtrl: NavController, public navParams: NavParams,public constant:Constant,public service:WebService, public http: Http) {
	}
	
    SendMail(){		
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
		if (!this.firstname) {
			this.nameError=1;
			this.nameErrorTxt='Please Enter Your First name.';
		  //this.constant.Alert('Message', , 'Ok');
		}else{
			this.nameError = 0;
		}
		if (!this.pwd) {
			this.passwordError=1;
			this.passwordErrorTxt='Please Enter Your password.';
		  //this.constant.Alert('Message', , 'Ok');
		}else{
			this.passwordError = 0;
		}
		if(!this.email ){
			this.emailError=1;
			this.emailErrorTxt='Please Enter Email Address.';
			//this.constant.Alert('Message', 'Please Enter Email Address.', 'Ok');
		}else if(!re.test(this.email)){
			this.emailError=1;
			this.emailErrorTxt='Please Enter valid Email address.';
			//this.constant.Alert('Message', 'Please Enter valid Email address.', 'Ok');
		}else{
			this.emailError=0;
		} 
		if(!this.contact){
			this.contactError=1;
			this.contactErrorTxt='Please Enter Your Contact number.';
			//this.constant.Alert('Message', 'Please Enter Your Contact.', 'Ok');
		}else{
		  this.contactError=0;
		}
		if(this.contactError==0 && this.emailError==0 && this.nameError==0){
			this.constant.LoadingPresent();
			
			
			 var URL = 'https://ripdubai.com/api/registerController.php';
			  console.log(URL);
			 var postData = {"first_name":this.firstname,"last_name":this.lastname,"email":this.email,"mobile":this.contact,"password":this.pwd}
			  this.http.post(URL,postData).subscribe(data => {
				this.constant.LoadingHide();
				console.log(data.json());
				var Temp = data.json();
				if (Temp.success) {				 
					this.email='';
					this.contact='';
					this.firstname='';
					this.lastname='';
					this.pwd='';
					this.constant.Alert('Success', 'You have Registered Successfully','Ok');
				}else{
				  // this.constant.Alert('Error', 'Something is wrong Please try again later.','Ok');
				  this.constant.Alert('Error', Temp.message,'Ok');
				  
				}
			  }, error => {
				  console.log('WebserviceHandler=>'+error);
			  });
			
		}
		
		
	}	
	ionViewDidLoad() {
		console.log('ionViewDidLoad RegisterPage');
	}

}
