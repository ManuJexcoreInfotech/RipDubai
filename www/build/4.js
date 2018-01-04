webpackJsonp([4],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function() { return AboutUsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_us__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutUsPageModule = (function () {
    function AboutUsPageModule() {
    }
    return AboutUsPageModule;
}());
AboutUsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__about_us__["a" /* AboutUsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about_us__["a" /* AboutUsPage */]),
        ],
    })
], AboutUsPageModule);

//# sourceMappingURL=about-us.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
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
var AboutUsPage = (function () {
    function AboutUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //this.navCtrl.setRoot(this.navCtrl.getActive().component);
    }
    AboutUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    return AboutUsPage;
}());
AboutUsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\xampp\htdocs\ionic\RipDubai_1\src\pages\about-us\about-us.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button class="headerBackButton" ion-button menuToggle>\n        <ion-icon class="backButtonIcon" name="ios-arrow-back"></ion-icon> Back\n    </button>\n    <ion-title class=\'pHead\'>ABOUT <strong>US</strong></ion-title>\n\n    <ion-buttons style="width: 50px;" end>\n      <button ion-button >\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n	<div class="aboutDiv1" padding-bottom>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-3><img src="https://www.silverwingtechnologies.com/clients/img/aboutAvtar.png"></ion-col>\n          <ion-col class="aboutContent" text-left col-9>We pride ourselves on providing water sport equipment that exceeds all safety and quality standards, and we aim at being one of the leading companies working in this field. </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-3><img src="https://www.silverwingtechnologies.com/clients/img/aboutAvtar.png"></ion-col>\n          <ion-col class="aboutContent" text-left col-9>Our company can provide all the water sport equipment that allows your customers to enjoy their time in Dubai Beaches and to leave Dubai with great memories and with a strong will to come back soon. \n        </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class="aboutContent" col-3><img src="https://www.silverwingtechnologies.com/clients/img/aboutAvtar.png"></ion-col>\n          <ion-col class="aboutContent" text-left col-9>Our team includes members who have a great experience in serving customers and who shows readiness to do all their best to meet the needs and aspirations of the customers. \n        </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class="aboutContent" col-3><img src="https://www.silverwingtechnologies.com/clients/img/aboutAvtar.png"></ion-col>\n          <ion-col class="aboutContent" text-left col-9>We would like to take this opportunity to propose our services and do an investment in Dubai beaches. \n        </ion-col>\n        </ion-row>\n        \n      </ion-grid>\n  </div>\n\n  <div margin-top class="aboutDiv2">\n    <ion-row>\n      <ion-col class="aboutContent grayLayour1" col-4><img src="https://www.silverwingtechnologies.com/clients/img/aboutLogo.png"></ion-col>\n      <ion-col class="aboutContent blueLayour1" padding text-left col-8>Visit our supper creative and concept Party RIP Dubai to have a jolly moment in the beautiful resorts with lots of fun, cocktails, professional DJ and exclusive entertainment on the pool and beach. Each party made by individual and inimitable style. Have a sunshine summer with us! \n      <div text-center >\n        <button style="margin-top: 12px;" text-capitalize ion-button color="dark">Download Now</button>\n      </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\RipDubai_1\src\pages\about-us\about-us.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object])
], AboutUsPage);

var _a, _b;
//# sourceMappingURL=about-us.js.map

/***/ })

});
//# sourceMappingURL=4.js.map