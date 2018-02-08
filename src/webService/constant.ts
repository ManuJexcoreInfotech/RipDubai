

import { Injectable } from '@angular/core';
import { LoadingController, ToastController, AlertController, Events, Platform, PopoverController } from 'ionic-angular';
import { Http ,RequestOptions, Headers} from '@angular/http';

@Injectable()

export class Constant {
  
//-------------------------Base URL----------------------//

public BASE_URL:string = 'https://ripdubai.com/';



//-------------------------Base URL----------------------//

constructor(public Loading:LoadingController, public toastCtrl: ToastController, public alertCtrl:AlertController, 
public Event:Events, public Platform:Platform, public http:Http, 
public popoverCtrl:PopoverController) {
    
}


iOS = 151;
Android = 152;

USER_ID = '54';
USER_REQUEST_KEY = "82fb98537dd13ded8e2bb459af2aaebc";
USER_TYPE = '';

//--------------------------------Alert---------------------------//
    //--------------------------------Alert---------------------------//

Alert(Titles, Message, BtnTitle){
        
    var Title = Titles;
    let alert = this.alertCtrl.create({
        title: Title,
        message: Message,
        buttons: [
        {
            text: BtnTitle,
            role: 'cancel',
            handler: () => {
            console.log('Cancel clicked');
            }
        },]
    });
    alert.present();
}
    
// Toast Message
Toast(message, positions) {
    let toast = this.toastCtrl.create({
        message: message,
        duration: 3000,
        position: positions
    });

    toast.onDidDismiss(() => {
        console.log('Dismissed toast');
    });

    toast.present();
}

// Loading  
public loading;
LoadingPresent(){
    
    this.loading = this.Loading.create();
    this.loading.present();

    setTimeout(() => {
        this.loading.dismiss();
    }, 25000);
    
}

LoadingHide(){
    this.loading.dismiss();
}

    
  
}


// Date Picker 
    // OpenDatePicker(CurrentDate, MinDate){
            
    //     if (this.Platform.is('ios')) {
    //         return this.datePicker.show({date: CurrentDate,mode: 'datetime',is24Hour: false,allowOldDates:false,
    //                 minDate: MinDate,
    //                 androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT}).then(date => {
                
    //             return date;
            
    //         },err => {
    //             return err;
    //         });
    //     }

    //     if (this.Platform.is('android')) {
    //         return this.datePicker.show({date: CurrentDate,mode: 'datetime',is24Hour: false,allowOldDates:false,
    //                 minDate:  (new Date(MinDate)).valueOf(),
    //                 androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT}).then(date => {
                
    //             return date;
            
    //         },err => {
    //             return err;
    //         });
    //     }
            
    // }
