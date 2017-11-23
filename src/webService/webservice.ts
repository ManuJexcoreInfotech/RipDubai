import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import {Handler} from './handler';
import {Constant} from './constant';


@Injectable()

export class WebService {

    public BASE_URL:string = this.Constant.BASE_URL;

    constructor(private Constant: Constant, public WebserviceHandler: Handler) {
        
    }

   

    // Check Booking Date and Time
    CheckBookingDateTime(parameter) {
        var URL = this.BASE_URL + 'checkBookingDate.php';
        
        return this.WebserviceHandler.PostWithoutToken(URL,parameter).map(data => {
            console.log(data.json());
            return data.json();
        }, error => {
            console.log("Oooops!");
            console.log(error);
            return error;
        });
    }

    // 
    GetAllActivity(parameter) {
        var URL = this.BASE_URL + 'activitiesContoller.php';
        
        return this.WebserviceHandler.PostWithoutToken(URL,parameter).map(data => {
            console.log(data.json());
            return data.json();
        }, error => {
            console.log(error);
            return error;
        });
    }

  

    //LogOut
    LogoutAPI() {
        var URL = this.BASE_URL + 'api/LogOutUser?IsSignOutFromMobile=true';
        return this.WebserviceHandler.Get(URL).map(data => {
            console.log(data.json());
            return data.json();
        }, error => {
            console.log("Oooops!");
            return error;
        });
    }



}

