webpackJsonp([3],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentPageModule = (function () {
    function PaymentPageModule() {
    }
    return PaymentPageModule;
}());
PaymentPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */]),
        ],
    })
], PaymentPageModule);

//# sourceMappingURL=payment.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__webService_constant__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__webService_webservice__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PaymentPage = (function () {
    function PaymentPage(navCtrl, navParams, constant, service, http, iab, sanitizer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.constant = constant;
        this.service = service;
        this.http = http;
        this.iab = iab;
        this.sanitizer = sanitizer;
        this.bookId = 28;
        this.url = '';
        this.constant.LoadingPresent();
        setTimeout(function () { _this.constant.LoadingHide(); }, 3000);
        this.bookId = this.navParams.get('book_id');
        this.url = 'http://focusdxb.com/ripdubai/v1/pm/checkout.php?book_id=' + this.bookId;
    }
    PaymentPage.prototype.BackButtonClick = function () {
        this.navCtrl.pop();
    };
    PaymentPage.prototype.sanitize = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    PaymentPage.prototype.dismissLoading = function () {
        this.constant.LoadingHide();
        //console.log('me');
    };
    return PaymentPage;
}());
PaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payment',template:/*ion-inline-start:"C:\xampp\htdocs\ionic\RipDubai_1\src\pages\payment\payment.html"*/'\n<ion-header class="BookingHeader">\n    <ion-navbar hideBackButton="true">\n\n        <ion-buttons (click)="BackButtonClick()" left>\n            <button class="headerBackButton" ion-button>\n                <ion-icon class="backButtonIcon" name="ios-arrow-back"></ion-icon> Back\n            </button>\n        </ion-buttons>\n\n        <ion-title class="pHead" >Payment Page</ion-title>\n\n        <ion-buttons style="width: 50px;" end>\n            <button ion-button >\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="iframe-content has-header" padding="false">\n	<iframe [src]="sanitize(url)" width="100%"  height="100%" frameborder="0"  ></iframe>\n</ion-content> \n'/*ion-inline-end:"C:\xampp\htdocs\ionic\RipDubai_1\src\pages\payment\payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__webService_constant__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_4__webService_webservice__["a" /* WebService */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
], PaymentPage);

//# sourceMappingURL=payment.js.map

/***/ })

});
//# sourceMappingURL=3.js.map