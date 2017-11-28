webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		159
	],
	"../pages/activities/activities.module": [
		161
	],
	"../pages/booking/booking.module": [
		154
	],
	"../pages/cancellation/cancellation.module": [
		169
	],
	"../pages/contact/contact.module": [
		167
	],
	"../pages/gift/gift.module": [
		163
	],
	"../pages/location/location.module": [
		165
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 153;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPageModule", function() { return BookingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BookingPageModule = (function () {
    function BookingPageModule() {
    }
    return BookingPageModule;
}());
BookingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__booking__["a" /* BookingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__booking__["a" /* BookingPage */]),
        ],
    })
], BookingPageModule);

//# sourceMappingURL=booking.module.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Handler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Handler = (function () {
    function Handler(http) {
        this.http = http;
    }
    Handler.prototype.Post = function (URL, Parameter) {
        var Token = localStorage.getItem('Token');
        //console.log( 'Token=>' + Token);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': Token });
        var Option = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(URL, Parameter, Option).map(function (data) {
            return data.json();
        }, function (error) {
            console.log('WebserviceHandler=>' + error);
            return error;
        });
    };
    Handler.prototype.PostWithoutToken = function (URL, Parameter) {
        console.log(URL);
        return this.http.post(URL, Parameter).map(function (data) {
            return data.json();
        }, function (error) {
            console.log('WebserviceHandler=>' + error);
            return error;
        });
    };
    Handler.prototype.Get = function (URL) {
        var Token = localStorage.getItem('Token');
        //console.log( 'Token=>' + Token);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': Token });
        var Option = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(URL, Option).map(function (data) {
            return data;
        }, function (error) {
            console.log('WebserviceHandler=>' + error);
            return error;
        });
    };
    Handler.prototype.GetWithoutToken = function (URL) {
        return this.http.get(URL).map(function (data) {
            return data;
        }, function (error) {
            console.log('WebserviceHandler=>' + error);
            return error;
        });
    };
    return Handler;
}());
Handler = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], Handler);

//# sourceMappingURL=handler.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    return AboutPageModule;
}());
AboutPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
        ],
    })
], AboutPageModule);

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\xampp\htdocs\ionic\RipDubai_1\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button class="headerBackButton" ion-button menuToggle>\n        <ion-icon class="backButtonIcon" name="ios-arrow-back"></ion-icon> Back\n    </button>\n    <ion-title class=\'pHead\'>ABOUT <strong>US</strong></ion-title>\n\n    <ion-buttons style="width: 50px;" end>\n      <button ion-button >\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n	<div class="aboutDiv1" padding-bottom>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-3><img src="https://www.silverwingtechnologies.com/clients/img/aboutAvtar.png"></ion-col>\n          <ion-col class="aboutContent" text-left col-9>We pride ourselves on providing water sport equipment that exceeds all safety and quality standards, and we aim at being one of the leading companies working in this field. </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-3><img src="https://www.silverwingtechnologies.com/clients/img/aboutAvtar.png"></ion-col>\n          <ion-col class="aboutContent" text-left col-9>Our company can provide all the water sport equipment that allows your customers to enjoy their time in Dubai Beaches and to leave Dubai with great memories and with a strong will to come back soon. \n        </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class="aboutContent" col-3><img src="https://www.silverwingtechnologies.com/clients/img/aboutAvtar.png"></ion-col>\n          <ion-col class="aboutContent" text-left col-9>Our team includes members who have a great experience in serving customers and who shows readiness to do all their best to meet the needs and aspirations of the customers. \n        </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class="aboutContent" col-3><img src="https://www.silverwingtechnologies.com/clients/img/aboutAvtar.png"></ion-col>\n          <ion-col class="aboutContent" text-left col-9>We would like to take this opportunity to propose our services and do an investment in Dubai beaches. \n        </ion-col>\n        </ion-row>\n        \n      </ion-grid>\n  </div>\n\n  <div margin-top class="aboutDiv2">\n    <ion-row>\n      <ion-col class="aboutContent grayLayour1" col-4><img src="https://www.silverwingtechnologies.com/clients/img/aboutLogo.png"></ion-col>\n      <ion-col class="aboutContent blueLayour1" padding text-left col-8>Visit our supper creative and concept Party RIP Dubai to have a jolly moment in the beautiful resorts with lots of fun, cocktails, professional DJ and exclusive entertainment on the pool and beach. Each party made by individual and inimitable style. Have a sunshine summer with us! \n      <div text-center >\n        <button style="margin-top: 12px;" text-capitalize ion-button color="dark">Download Now</button>\n      </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\RipDubai_1\src\pages\about\about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesPageModule", function() { return ActivitiesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activities__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActivitiesPageModule = (function () {
    function ActivitiesPageModule() {
    }
    return ActivitiesPageModule;
}());
ActivitiesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__activities__["a" /* ActivitiesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activities__["a" /* ActivitiesPage */]),
        ],
    })
], ActivitiesPageModule);

//# sourceMappingURL=activities.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__webService_constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__webService_webservice__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__booking_booking__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ActivitiesPage = (function () {
    function ActivitiesPage(navCtrl, navParams, constant, service, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.constant = constant;
        this.service = service;
        this.http = http;
        this.ActivityArry = [];
        this.GetAllActivity();
    }
    ActivitiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivitiesPage');
    };
    ActivitiesPage.prototype.GetAllActivity = function () {
        var _this = this;
        var dic = {};
        this.constant.LoadingPresent();
        var URL = 'http://pr.veba.co/~shubantech/ripdubai/activitiesContoller.php';
        this.http.post(URL, {}).subscribe(function (data) {
            _this.constant.LoadingHide();
            console.log(data.json());
            var JsonData = data.json();
            _this.ActivityArry = JsonData.activiteis;
        }, function (error) {
            console.log('WebserviceHandler=>' + error);
        });
    };
    ActivitiesPage.prototype.BookNowClick = function () {
        var ActiveIndex = this.slides.getActiveIndex();
        console.log(this.ActivityArry[ActiveIndex]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__booking_booking__["a" /* BookingPage */], { ActivityArry: this.ActivityArry[ActiveIndex] });
    };
    return ActivitiesPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
], ActivitiesPage.prototype, "slides", void 0);
ActivitiesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-activities',template:/*ion-inline-start:"C:\xampp\htdocs\ionic\RipDubai_1\src\pages\activities\activities.html"*/'\n<ion-header>\n  <ion-navbar>\n  \n    <button class="headerBackButton" ion-button menuToggle>\n      <ion-icon class="backButtonIcon" name="ios-arrow-back"></ion-icon> Back\n    </button>\n\n    <ion-title><img src="https://www.silverwingtechnologies.com/clients/img/logo.png" height="40"></ion-title>\n\n    <ion-buttons style="width: 50px;" end>\n      <button ion-button >\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<p class="pHead" text-center>OUR <strong>ACTIVITIES</strong></p>\n  \n  <ion-slides text-start class="sliderMain" zoom="true" loop="false" slidesPerView="1" effect="coverflow" speed="200">\n    <ion-slide class="sliderMainSlide"  *ngFor="let item of ActivityArry; let i = index">\n      \n          \n        <div class="slideMainContainer">\n            <ion-label class="headerLbl">RIP DUBAI<span class="headerSubLbl"> EXCLUSIVE</span></ion-label>\n            <img class="imageSlider" src="{{item.image1}}">\n            <ion-label class="headerLblTwo">{{item.name.toUpperCase()}}<span class="headerSubLblTwo"></span></ion-label>\n            \n              <ion-label class="sliderDics"  padding text-left>\n                  <span [innerHTML]="item.description"></span>  \n              </ion-label>\n          </div>\n      \n      </ion-slide>\n  \n</ion-slides>\n\n  <button class="bookbtn" (click)="BookNowClick(i)" margin-top ion-button color="yellow" full>BOOK NOW</button>\n\n  <!-- <button ion-button secondary menuToggle>Toggle Menu</button> -->\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\RipDubai_1\src\pages\activities\activities.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__webService_constant__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_3__webService_webservice__["a" /* WebService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
], ActivitiesPage);

//# sourceMappingURL=activities.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftPageModule", function() { return GiftPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gift__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GiftPageModule = (function () {
    function GiftPageModule() {
    }
    return GiftPageModule;
}());
GiftPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__gift__["a" /* GiftPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gift__["a" /* GiftPage */]),
        ],
    })
], GiftPageModule);

//# sourceMappingURL=gift.module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GiftPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GiftPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GiftPage = (function () {
    function GiftPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GiftPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GiftPage');
    };
    return GiftPage;
}());
GiftPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-gift',template:/*ion-inline-start:"C:\xampp\htdocs\ionic\RipDubai_1\src\pages\gift\gift.html"*/'<!--\n  Generated template for the GiftPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	<button ion-button menuToggle>\n        <ion-icon class="backButtonIcon" name="ios-arrow-back"></ion-icon>Back\n    </button>\n    <ion-title>GIFT </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\RipDubai_1\src\pages\gift\gift.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], GiftPage);

//# sourceMappingURL=gift.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageModule", function() { return LocationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LocationPageModule = (function () {
    function LocationPageModule() {
    }
    return LocationPageModule;
}());
LocationPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__location__["a" /* LocationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__location__["a" /* LocationPage */]),
        ],
    })
], LocationPageModule);

//# sourceMappingURL=location.module.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationPage = (function () {
    // map:any;
    function LocationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LocationPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad LocationPage');
        // console.log(this.mapRef);
        this.showMap();
    };
    LocationPage.prototype.showMap = function () {
        // Location Lat- Log
        var location = new google.maps.LatLng(25.185019, 55.276746);
        // map Option
        var options = {
            center: location,
            zoom: 16
        };
        var map = new google.maps.Map(this.mapRef.nativeElement, options);
        this.addMarker(location, map);
    };
    LocationPage.prototype.addMarker = function (position, map) {
        return new google.maps.Marker({
            position: position,
            map: map,
            icon: 'https://www.silverwingtechnologies.com/clients/img/marker.png'
        });
    };
    return LocationPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], LocationPage.prototype, "mapRef", void 0);
LocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-location',template:/*ion-inline-start:"C:\xampp\htdocs\ionic\RipDubai_1\src\pages\location\location.html"*/'<!--\n  Generated template for the LocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	\n    <button class="headerBackButton" ion-button menuToggle>\n        <ion-icon class="backButtonIcon" name="ios-arrow-back"></ion-icon> Back\n		</button>\n		\n    <ion-title class=\'pHead\'>OUR  <strong>LOCATION</strong></ion-title>\n\n    <ion-buttons style="width: 40px;" end>\n      <button ion-button >\n      </button>\n    </ion-buttons>\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\RipDubai_1\src\pages\location\location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], LocationPage);

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactPageModule = (function () {
    function ContactPageModule() {
    }
    return ContactPageModule;
}());
ContactPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]),
        ],
    })
], ContactPageModule);

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__webService_constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__webService_webservice__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = (function () {
    function ContactPage(navCtrl, navParams, constant, service, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.constant = constant;
        this.service = service;
        this.http = http;
        this.name = '';
        this.nameError = 0;
        this.nameErrorTxt = '';
        this.emailError = 0;
        this.emailErrorTxt = '';
        this.email = '';
        this.contactError = 0;
        this.contactErrorTxt = '';
        this.contact = '';
        this.message = '';
    }
    ContactPage.prototype.SendMail = function () {
        var _this = this;
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!this.name) {
            this.nameError = 1;
            this.nameErrorTxt = 'Please Enter Your name.';
            //this.constant.Alert('Message', , 'Ok');
        }
        else {
            this.nameError = 0;
        }
        if (!this.email) {
            this.emailError = 1;
            this.emailErrorTxt = 'Please Enter Email Address.';
            //this.constant.Alert('Message', 'Please Enter Email Address.', 'Ok');
        }
        else if (!re.test(this.email)) {
            this.emailError = 1;
            this.emailErrorTxt = 'Please Enter valid Email address.';
            //this.constant.Alert('Message', 'Please Enter valid Email address.', 'Ok');
        }
        else {
            this.emailError = 0;
        }
        if (!this.contact) {
            this.contactError = 1;
            this.contactErrorTxt = 'Please Enter Your Contact number.';
            //this.constant.Alert('Message', 'Please Enter Your Contact.', 'Ok');
        }
        else {
            this.contactError = 0;
        }
        if (this.contactError == 0 && this.emailError == 0 && this.nameError == 0) {
            this.constant.LoadingPresent();
            var CustomURL = 'name=' + this.name + '&email=' + this.email + '&contact=' + this.contact + '&message=' + this.message;
            var URL = 'http://pr.veba.co/~shubantech/ripdubai/sendMailAdmin.php?' + CustomURL;
            console.log(URL);
            this.http.get(URL).subscribe(function (data) {
                _this.constant.LoadingHide();
                console.log(data.json());
                var Temp = data.json();
                if (Temp.success) {
                    _this.email = '';
                    _this.contact = '';
                    _this.name = '';
                    _this.message = '';
                    _this.constant.Alert('Success', ' Mail Sent Successfully', 'Ok');
                }
                else {
                    _this.constant.Alert('Error', 'Something is wrong Please try again later.', 'Ok');
                }
            }, function (error) {
                console.log('WebserviceHandler=>' + error);
            });
        }
    };
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\xampp\htdocs\ionic\RipDubai_1\src\pages\contact\contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n		\n		<button class="headerBackButton" ion-button menuToggle>\n				<ion-icon class="backButtonIcon" name="ios-arrow-back"></ion-icon> Back\n		</button>\n		\n    <ion-title class=\'pHead\'>CONTACT <strong>US</strong></ion-title>\n\n    <ion-buttons style="width: 40px;" end>\n      <button ion-button >\n      </button>\n		</ion-buttons>\n		\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list margin-top>\n\n	  <ion-item  class="customTextbox" margin-bottom>\n	    <ion-input [(ngModel)]="name" type="text" placeholder="Name" ></ion-input>\n	  </ion-item>\n		<ion-label class="LblOne" *ngIf="nameError" style="color:#ed1b24;margin:-15px 3px 4px 4px">{{nameErrorTxt}}</ion-label>\n\n	  <ion-item class="customTextbox" margin-bottom>\n	    <ion-input   [(ngModel)]="email"  type="email" placeholder="Email"></ion-input>\n		\n	  </ion-item>\n	  <ion-label class="LblOne" *ngIf="emailError" style="color:#ed1b24;margin:-15px 3px 4px 4px">{{emailErrorTxt}}</ion-label>\n	  <ion-item class="customTextbox" margin-bottom>\n	    <ion-input  [(ngModel)]="contact"  type="number" placeholder="Phone"></ion-input>\n	  </ion-item>\n		<ion-label class="LblOne" *ngIf="contactError" style="color:#ed1b24;margin:-15px 3px 4px 4px">{{contactErrorTxt}}</ion-label>\n	  <ion-item class="customTextbox" margin-bottom>\n	    <ion-textarea [(ngModel)]="message"  rows="10"  placeholder="Note"></ion-textarea >\n	  </ion-item>\n\n		<div text-right>\n			<button (click)="SendMail()" class="sendBtn" text-right ion-button>SEND</button>\n		</div>\n	</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\RipDubai_1\src\pages\contact\contact.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__webService_constant__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_3__webService_webservice__["a" /* WebService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancellationPageModule", function() { return CancellationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cancellation__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CancellationPageModule = (function () {
    function CancellationPageModule() {
    }
    return CancellationPageModule;
}());
CancellationPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__cancellation__["a" /* CancellationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cancellation__["a" /* CancellationPage */]),
        ],
    })
], CancellationPageModule);

//# sourceMappingURL=cancellation.module.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancellationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CancellationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CancellationPage = (function () {
    function CancellationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CancellationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CancellationPage');
    };
    return CancellationPage;
}());
CancellationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cancellation',template:/*ion-inline-start:"C:\xampp\htdocs\ionic\RipDubai_1\src\pages\cancellation\cancellation.html"*/'<!--\n  Generated template for the CancellationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	<button ion-button menuToggle>\n        <ion-icon class="backButtonIcon" name="ios-arrow-back"></ion-icon>Back\n    </button>\n    <ion-title>  CANCELLATION</ion-title>\n    <ion-buttons style="width: 50px;" end>\n        <button ion-button >\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\RipDubai_1\src\pages\cancellation\cancellation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], CancellationPage);

//# sourceMappingURL=cancellation.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_booking__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__webService_constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__webService_webservice__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, constant, service, http) {
        this.navCtrl = navCtrl;
        this.constant = constant;
        this.service = service;
        this.http = http;
        // ActivityArry = [1,2,3,4,5,6,7,6,];
        this.ActivityArry = [];
        this.GetAllActivity();
    }
    HomePage.prototype.GetAllActivity = function () {
        var _this = this;
        var dic = {};
        this.constant.LoadingPresent();
        var URL = 'http://pr.veba.co/~shubantech/ripdubai/activitiesContoller.php';
        this.http.post(URL, {}).subscribe(function (data) {
            _this.constant.LoadingHide();
            console.log(data.json());
            var JsonData = data.json();
            _this.ActivityArry = JsonData.activiteis;
        }, function (error) {
            console.log('WebserviceHandler=>' + error);
        });
    };
    HomePage.prototype.booking = function () {
        var ActiveIndex = this.slides.getActiveIndex();
        console.log(this.ActivityArry[ActiveIndex]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__booking_booking__["a" /* BookingPage */], { ActivityArry: this.ActivityArry[ActiveIndex] });
    };
    HomePage.prototype.slideNext = function () {
        this.slides.slideNext(100);
    };
    HomePage.prototype.slidePrev = function () {
        this.slides.slidePrev(100);
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
], HomePage.prototype, "slides", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\ionic\RipDubai_1\src\pages\home\home.html"*/'\n<ion-header >\n  <ion-navbar>\n    <button ion-button menuToggle><ion-icon ios="ios-list" md="md-list"></ion-icon></button>\n    <ion-title><img src="https://www.silverwingtechnologies.com/clients/img/logo.png" height="40"></ion-title>\n    <ion-buttons style="width: 50px;" end><button ion-button ></button> </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="homePageCSS">\n    \n    <!-- <ion-slides text-start class="sliderMain" zoom="true" loop="false" slidesPerView="1" effect="coverflow" speed="200">\n        <ion-slide class="sliderMainSlide"  *ngFor="let item of ActivityArry">\n          <div class="slideMainContainer">\n            <ion-label class="headerLbl">RIP DUBAI<span class="headerSubLbl"> EXCLUSIVE</span></ion-label>\n            <img class="imageSlider" src="https://www.silverwingtechnologies.com/clients/img/activity1.jpg">\n            <ion-label class="headerLblTwo">BBQ DONUT<span class="headerSubLblTwo">BOAT</span></ion-label>\n            <p class="sliderDics"  padding text-left>A Jet ski is a small machine like a motorcycle that is powered by a jet engine and can travel on the surface of water. RIP Jet Ski is self-propelled vehicle for 1 to 3 persons, which skims across water on a flat keel, and is steered by means of handlebars.\n                RIP Jet Ski is the most extreme form water riding, where the rider surfs waves, using them as a jump ramp for aerial maneuvers.</p>\n          </div>\n        </ion-slide>\n    </ion-slides> -->\n\n    <ion-slides text-start class="sliderMain" zoom="true" loop="false" slidesPerView="1" effect="coverflow" speed="200">\n		\n        <ion-slide class="sliderMainSlide"  *ngFor="let item of ActivityArry">\n          \n              \n            <div class="slideMainContainer">\n                <ion-label class="headerLbl">RIP DUBAI<span class="headerSubLbl"> EXCLUSIVE</span></ion-label>\n                <img class="imageSlider" src="{{item.image1}}">\n                <ion-label class="headerLblTwo">{{item.name}}<span class="headerSubLblTwo"></span></ion-label>\n                \n                  <ion-label class="sliderDics"  padding text-left>\n                      <span [innerHTML]="item.description"></span>  \n                  </ion-label>\n            \n              </div>\n          \n        </ion-slide>\n		\n					\n      \n  </ion-slides>\n	<ion-icon class="backButtonIcon" name="ios-arrow-back" (click)="slidePrev()"></ion-icon> \n	<ion-icon class="backButtonIcon" name="ios-arrow-forward" (click)="slideNext()"></ion-icon> \n\n    \n  <button class="bookbtn" (click)="booking()" margin-top ion-button color="yellow" full>BOOK NOW</button>\n  \n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\RipDubai_1\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__webService_constant__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_4__webService_webservice__["a" /* WebService */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home_module__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about_module__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_activities_activities_module__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_gift_gift_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_location_location_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cancellation_cancellation_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_booking_booking_module__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_list_list_module__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__webService_constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__webService_handler__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__webService_webservice__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_date_picker__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { ListPage } from '../pages/list/list';








// Web Service




// Plugin


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_15__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/booking/booking.module#BookingPageModule', name: 'BookingPage', segment: 'booking', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/activities/activities.module#ActivitiesPageModule', name: 'ActivitiesPage', segment: 'activities', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/gift/gift.module#GiftPageModule', name: 'GiftPage', segment: 'gift', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cancellation/cancellation.module#CancellationPageModule', name: 'CancellationPage', segment: 'cancellation', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_7__pages_about_about_module__["AboutPageModule"],
            __WEBPACK_IMPORTED_MODULE_8__pages_activities_activities_module__["ActivitiesPageModule"],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home_module__["a" /* HomePageModule */],
            __WEBPACK_IMPORTED_MODULE_9__pages_gift_gift_module__["GiftPageModule"],
            __WEBPACK_IMPORTED_MODULE_12__pages_cancellation_cancellation_module__["CancellationPageModule"],
            __WEBPACK_IMPORTED_MODULE_13__pages_booking_booking_module__["BookingPageModule"],
            __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact_module__["ContactPageModule"],
            __WEBPACK_IMPORTED_MODULE_10__pages_location_location_module__["LocationPageModule"],
            __WEBPACK_IMPORTED_MODULE_14__pages_list_list_module__["a" /* ListPageModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }, __WEBPACK_IMPORTED_MODULE_19__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_17__webService_handler__["a" /* Handler */], __WEBPACK_IMPORTED_MODULE_20__angular_common__["c" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_18__webService_webservice__["a" /* WebService */], __WEBPACK_IMPORTED_MODULE_16__webService_constant__["a" /* Constant */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_activities_activities__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_gift_gift__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_location_location__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cancellation_cancellation__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'HOME', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            // { title: 'List', component: ListPage },
            { title: 'ACTIVITIES', component: __WEBPACK_IMPORTED_MODULE_6__pages_activities_activities__["a" /* ActivitiesPage */] },
            { title: 'ABOUT US', component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */] },
            { title: 'GIFT VOUCHERS', component: __WEBPACK_IMPORTED_MODULE_7__pages_gift_gift__["a" /* GiftPage */] },
            { title: 'LOCATION', component: __WEBPACK_IMPORTED_MODULE_8__pages_location_location__["a" /* LocationPage */] },
            { title: 'CONTACT US', component: __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */] },
            { title: 'CANCELLATION & SAFETY', component: __WEBPACK_IMPORTED_MODULE_10__pages_cancellation_cancellation__["a" /* CancellationPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        //this.splashScreen.show();
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\RipDubai_1\src\app\app.html"*/'<!-- <ion-menu [content]="content" type="overlay" > -->\n<ion-menu class="sideMenuHeader" [content]="content" type="overlay" >\n  <ion-header>\n    <ion-toolbar>\n      <button ion-button menuToggle>\n        <ion-icon ios="ios-list" md="md-list"></ion-icon>\n      </button>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="sidebarBg" scroll="false">\n    \n      <button text-wrap class="sidebarBg"  menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    \n    <p padding-left no-margin class="followBtn">FOLLOW US</p>\n    <ion-grid style="padding-left: 12px;">\n      <ion-row>\n        <ion-col col-6>\n          <div text-center  class="social-box-bg ">\n            <a href="https://www.facebook.com/RiP.DuBai">\n            <img style="height: 27px;margin-top: 10px;" src="assets/imgs/facebook.png">\n          </a>\n            <i class="fa fa-facebook"></i>\n          </div>   \n        </ion-col>\n        <ion-col col-6>\n          <div text-center class="social-box-bg ">\n            <a href="https://twitter.com/Rip_DUBAI">\n            <ion-icon class="social-icon" ios="logo-twitter" md="logo-twitter"></ion-icon></a>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <div text-center class="social-box-bg ">\n            <a href="https://www.youtube.com/channel/UCy54dNm8FXa5O-yD5wQb1zw?view_as=subscriber">\n            <ion-icon class="social-icon" ios="logo-youtube" md="logo-youtube"></ion-icon></a>\n          </div>\n        </ion-col>\n        <ion-col col-6>\n          <div text-center class="social-box-bg ">\n            <a href="https://www.instagram.com/rip.dubai/">\n            <ion-icon class="social-icon" ios="logo-instagram" md="logo-instagram"></ion-icon>\n            </a>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <div text-center class="social-box-bg ">\n          <a href="https://www.linkedin.com/in/rip-rest-in-peace-94603a14a/">\n           <img style="height: 27px;margin-top: 10px;" src="assets/imgs/linkedin.png">\n          </a>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\xampp\htdocs\ionic\RipDubai_1\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListPageModule = (function () {
    function ListPageModule() {
    }
    return ListPageModule;
}());
ListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__list__["a" /* ListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list__["a" /* ListPage */]),
        ],
    })
], ListPageModule);

//# sourceMappingURL=list.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"C:\xampp\htdocs\ionic\RipDubai_1\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\RipDubai_1\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Constant = (function () {
    //-------------------------Base URL----------------------//
    function Constant(Loading, toastCtrl, alertCtrl, Event, Platform, http, popoverCtrl) {
        this.Loading = Loading;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.Event = Event;
        this.Platform = Platform;
        this.http = http;
        this.popoverCtrl = popoverCtrl;
        //-------------------------Base URL----------------------//
        this.BASE_URL = 'http://pr.veba.co/~shubantech/ripdubai/';
        this.iOS = 151;
        this.Android = 152;
        this.USER_ID = '54';
        this.USER_REQUEST_KEY = "82fb98537dd13ded8e2bb459af2aaebc";
        this.USER_TYPE = '';
    }
    //--------------------------------Alert---------------------------//
    //--------------------------------Alert---------------------------//
    Constant.prototype.Alert = function (Titles, Message, BtnTitle) {
        var Title = Titles;
        var alert = this.alertCtrl.create({
            title: Title,
            message: Message,
            buttons: [
                {
                    text: BtnTitle,
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
            ]
        });
        alert.present();
    };
    // Toast Message
    Constant.prototype.Toast = function (message, positions) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: positions
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Constant.prototype.LoadingPresent = function () {
        var _this = this;
        this.loading = this.Loading.create();
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
        }, 25000);
    };
    Constant.prototype.LoadingHide = function () {
        this.loading.dismiss();
    };
    return Constant;
}());
Constant = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */]])
], Constant);

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
//# sourceMappingURL=constant.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__handler__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebService = (function () {
    function WebService(Constant, WebserviceHandler) {
        this.Constant = Constant;
        this.WebserviceHandler = WebserviceHandler;
        this.BASE_URL = this.Constant.BASE_URL;
    }
    // Check Booking Date and Time
    WebService.prototype.CheckBookingDateTime = function (parameter) {
        var URL = this.BASE_URL + 'checkBookingDate.php';
        return this.WebserviceHandler.PostWithoutToken(URL, parameter).map(function (data) {
            console.log(data.json());
            return data.json();
        }, function (error) {
            console.log("Oooops!");
            console.log(error);
            return error;
        });
    };
    // 
    WebService.prototype.GetAllActivity = function (parameter) {
        var URL = this.BASE_URL + 'activitiesContoller.php';
        return this.WebserviceHandler.PostWithoutToken(URL, parameter).map(function (data) {
            console.log(data.json());
            return data.json();
        }, function (error) {
            console.log(error);
            return error;
        });
    };
    //LogOut
    WebService.prototype.LogoutAPI = function () {
        var URL = this.BASE_URL + 'api/LogOutUser?IsSignOutFromMobile=true';
        return this.WebserviceHandler.Get(URL).map(function (data) {
            console.log(data.json());
            return data.json();
        }, function (error) {
            console.log("Oooops!");
            return error;
        });
    };
    return WebService;
}());
WebService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__constant__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_2__handler__["a" /* Handler */]])
], WebService);

//# sourceMappingURL=webservice.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__webService_constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__webService_webservice__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookingPage = (function () {
    function BookingPage(navCtrl, navParams, datePicker, datePipe, constant, service, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datePicker = datePicker;
        this.datePipe = datePipe;
        this.constant = constant;
        this.service = service;
        this.http = http;
        this.dateSelected = '';
        this.timeSelected = '';
        this.checkboxSRC = 'assets/imgs/checkboxFalse.jpeg';
        this.checkDate = '';
        this.checkTime = '';
        this.ActivityArry = {};
        this.DisplayDate = '';
        this.DisplayTime = '';
        this.Texes = 0;
        this.FinalTotal = 0;
        this.TotlePayment = 0;
        this.SingleActivity = [];
        this.TimeSlotArry = [];
        this.ActivityArry = navParams.get('ActivityArry');
        console.log(this.ActivityArry);
        //this.CheckDateTimeIsBooked();
        this.GetActivityDetails();
    }
    BookingPage.prototype.SelecetDateClick = function () {
        this.SelecetDate();
    };
    BookingPage.prototype.SelecetTimeClick = function () {
        //this.SelecetTime = SelecetTime;
        this.checkTime = this.timeSelected;
    };
    BookingPage.prototype.SelecetDate = function () {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            is24Hour: false,
            allowOldDates: false,
            minDate: new Date().valueOf(),
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        }).then(function (date) {
            console.log('Got date: ', date);
            _this.dateSelected = _this.datePipe.transform(date, 'MMMM d, yyyy');
            _this.checkDate = _this.datePipe.transform(date, 'yyyy-MM-dd');
            //Wednesday, October 18th 2017 @ 10am
            _this.DisplayDate = _this.datePipe.transform(date, 'EEEE, MMMM d y @');
            console.log(_this.DisplayDate);
            _this.CheckTimeStatic(date);
        }, function (err) {
            console.log('Error occurred while getting date: ', err);
        });
        var CustomURL = 'date=' + this.checkDate;
        var URL = "http://pr.veba.co/~shubantech/ripdubai/getBookingTime.php?" + CustomURL;
        this.http.get(URL).subscribe(function (data) {
            _this.constant.LoadingHide();
            console.log(data.json());
            var JsonData = data.json();
            _this.TimeSlotArry = JsonData.timeslots;
        }, function (error) {
            console.log('WebserviceHandler=>' + error);
        });
    };
    BookingPage.prototype.SelecetTime = function () {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'time',
            is24Hour: false,
            allowOldDates: false,
            minDate: new Date().valueOf(),
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        }).then(function (date) {
            console.log('Got Time: ', date);
            _this.timeSelected = _this.datePipe.transform(date, 'h:mm a');
            _this.checkTime = _this.datePipe.transform(date, 'h:mm a');
            _this.CheckTimeStatic(date);
            _this.DisplayTime = _this.datePipe.transform(date, 'ha');
            console.log(_this.DisplayTime);
        }, function (err) {
            console.log('Error occurred while getting date: ', err);
        });
    };
    BookingPage.prototype.CheckTimeStatic = function (date) {
        console.log('Date:', this.checkDate);
        console.log('Time:', this.checkTime);
        if (this.checkTime && this.checkDate) {
            this.CheckDateTimeIsBooked();
        }
        else {
            console.log('Date and time not available');
        }
    };
    BookingPage.prototype.CheckDateTimeIsBooked = function () {
        var _this = this;
        this.constant.LoadingPresent();
        var URL = 'http://pr.veba.co/~shubantech/ripdubai/checkBookingDate.php?b_date=' + this.checkDate + '&time=' + this.checkTime;
        //var URL = 'http://pr.veba.co/~shubantech/ripdubai/checkBookingDate.php?b_date=2017-11-30'+'&time=12:00 AM';
        console.log(URL);
        this.http.get(URL).subscribe(function (data) {
            _this.constant.LoadingHide();
            console.log(data.json());
            var Temp = data.json();
            console.log(Temp.success);
            console.log(Temp.booking_time);
            if (Temp.success == "1") {
                var DataJson = data.json();
                console.log('available');
            }
            else {
                console.log('booked');
                _this.constant.Alert('Message', Temp.booking_time, 'Ok');
            }
        }, function (error) {
            console.log('WebserviceHandler=>' + error);
        });
    };
    BookingPage.prototype.GetActivityDetails = function () {
        var _this = this;
        this.constant.LoadingPresent();
        var URL = 'http://pr.veba.co/~shubantech/ripdubai/activityContoller.php?activity_id=' + this.ActivityArry.activity_id;
        //var URL = 'http://192.168.1.27/ripdubai/abc.php?activity_id=1';
        this.http.get(URL).subscribe(function (data) {
            _this.constant.LoadingHide();
            console.log(data.json());
            var SinglePartTime = data.json();
            _this.SingleActivity = SinglePartTime.activiteis;
        }, function (error) {
            console.log('WebserviceHandler=>' + error);
        });
    };
    BookingPage.prototype.IONSelectEvent = function () {
        console.log(this.IONSelectValue);
        this.TotlePayment = this.IONSelectValue.price;
        var TaxesSub = this.TotlePayment;
        this.Texes = (TaxesSub * 20) / 100;
        console.log(TaxesSub);
        console.log(this.Texes);
        this.FinalTotal = this.TotlePayment + this.Texes;
    };
    BookingPage.prototype.BookingClick = function () {
        //this.BookingAPI();
        // this.checkDate = 'fasdfa';
        //  this.checkTime = 'fasdfa';
        if (!this.checkDate) {
            this.constant.Alert('Message', 'Please select Date.', 'Ok');
        }
        else if (!this.checkTime) {
            this.constant.Alert('Message', 'Please select Time.', 'Ok');
        }
        else if (!this.TotlePayment) {
            this.constant.Alert('Message', 'Please select Package.', 'Ok');
        }
        else if (this.checkboxSRC == 'assets/imgs/checkboxFalse.jpeg') {
            this.constant.Alert('Message', 'Please select cancellation and safety policy checkbox.', 'Ok');
        }
        else {
            console.log('All Done');
            this.BookingAPI();
        }
    };
    BookingPage.prototype.BookingAPI = function () {
        var _this = this;
        this.constant.LoadingPresent();
        var dateToday = new Date();
        var date = this.datePipe.transform(dateToday, 'yyyy-MM-dd');
        var activity_id = this.ActivityArry.activity_id;
        var Price = this.TotlePayment;
        var total_price = Number(this.TotlePayment) + this.Texes;
        var Duration = this.IONSelectValue.duration;
        var Package = this.IONSelectValue.package;
        var CustomURL = 'user_id=0&date=' + date + '&b_date=' + this.checkDate + '&time=' + this.checkTime + '&activity_id=' + activity_id +
            '&person=1&price=' + Price + '&total=' + total_price + '&package=' + Package + '&duration=' + Duration;
        var URL = 'http://pr.veba.co/~shubantech/ripdubai/bookingController.php?' + CustomURL;
        console.log(URL);
        this.http.get(URL).subscribe(function (data) {
            _this.constant.LoadingHide();
            console.log(data.json());
            var Temp = data.json();
            if (Temp.success) {
                _this.dateSelected = '';
                _this.timeSelected = '';
                _this.checkboxSRC = 'assets/imgs/checkboxFalse.jpeg';
                _this.checkDate = '';
                _this.checkTime = '';
                _this.DisplayDate = '';
                _this.DisplayTime = '';
                _this.Texes = 0;
                _this.TotlePayment = 0;
                _this.SingleActivity = [];
                _this.IONSelectValue = '';
                _this.constant.Alert('Success', ' Booking done successfully.', 'Ok');
            }
            else {
                _this.constant.Alert('Error', 'Something is wrong Please try again later.', 'Ok');
            }
        }, function (error) {
            console.log('WebserviceHandler=>' + error);
        });
    };
    BookingPage.prototype.BackButtonClick = function () {
        this.navCtrl.pop();
    };
    BookingPage.prototype.SelectCheckBoxClick = function () {
        if (this.checkboxSRC == 'assets/imgs/checkboxFalse.jpeg') {
            this.checkboxSRC = 'assets/imgs/checkboxTrue.png';
        }
        else {
            this.checkboxSRC = 'assets/imgs/checkboxFalse.jpeg';
        }
    };
    return BookingPage;
}());
BookingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-booking',template:/*ion-inline-start:"C:\xampp\htdocs\ionic\RipDubai_1\src\pages\booking\booking.html"*/'\n<ion-header class="BookingHeader">\n  <ion-navbar hideBackButton="true">\n\n    <ion-buttons (click)="BackButtonClick()" left>\n        <button class="headerBackButton" ion-button>\n            <ion-icon class="backButtonIcon" name="ios-arrow-back"></ion-icon> Back\n          </button>\n      </ion-buttons>\n\n    <ion-title class="pHead" >{{ActivityArry.name}}</ion-title>\n\n    <ion-buttons style="width: 50px;" end>\n      <button ion-button >\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="bookingCSS">\n  <div class="mainContainer">\n\n    <button (click)="SelecetDateClick()" class="dateBtn"> \n      <ion-icon class="" name="md-calendar"></ion-icon> Select Date\n    </button>\n\n    <ion-label class="dateLbl">{{dateSelected}}</ion-label>\n\n    <ion-item class="selectItem">\n      <ion-label class="selectLbl">Select Time</ion-label> \n      <ion-select [(ngModel)]="timeSelected"  name="md-time" multiple="false" (ionChange)="SelecetTimeClick()">\n        <ion-option [value]="items" *ngFor="let items of TimeSlotArry">{{items}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <!--<button (click)="SelecetTimeClick()" class="dateBtn">\n    </button>-->\n    <ion-label class="dateLbl">{{timeSelected}}</ion-label>\n\n    <ion-item class="selectItem">\n      <ion-label class="selectLbl">{{ActivityArry.name}}</ion-label>\n      <ion-select [(ngModel)]="IONSelectValue" multiple="false" (ionChange)="IONSelectEvent()">\n        <ion-option [value]="items" *ngFor="let items of SingleActivity">{{items.duration}} HR {{items.type}}</ion-option>\n      </ion-select>\n    </ion-item>\n      \n    <ion-label class="LblOne">Your are Booking</ion-label>\n    <ion-label class="LblTwo">{{ActivityArry.name}} Experience</ion-label>\n    <ion-label class="LblThree">{{DisplayDate}} {{timeSelected}}</ion-label>\n\n    <div class="subtotalContainer">\n      <ion-label class="subTotalLbl">Subtotal</ion-label>\n      <ion-label class="subTotalPriceLbl">AED {{TotlePayment}}</ion-label>\n      <div class="lineDrow"></div>\n    </div>\n\n    <div class="subtotalContainer" style="margin-top:12px;">\n      <ion-label class="subTotalLbl">Taxes</ion-label>\n      <ion-label class="subTotalPriceLbl">AED {{Texes}}</ion-label>\n      <div class="lineDrow"></div>\n    </div>\n\n    <div class="checkBoxContainer">\n      <img (click)="SelectCheckBoxClick()" class="checkboxImage" src="{{checkboxSRC}}">\n      <ion-label class="checkBoxLbl">I have read and agreed to the cancellation and Saftey policy below.</ion-label>\n    </div>\n\n  </div>\n \n  <div class="bookNowContainer">\n      <button (click)="BookingClick()" class="bookNowBtn">BOOK NOW</button>\n    <ion-label class="totalLbl">Total</ion-label>\n    <ion-label class="totalPriceLbl">AED {{(TotlePayment-0)+(Texes-0) |number}}</ion-label>\n  </div>\n\n	\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\RipDubai_1\src\pages\booking\booking.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */],
        __WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_4__webService_constant__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_5__webService_webservice__["a" /* WebService */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]])
], BookingPage);

//# sourceMappingURL=booking.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map