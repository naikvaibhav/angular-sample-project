(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home/home.component */ "./src/app/home/home/home.component.ts");
/* harmony import */ var _services_services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/services/services.component */ "./src/app/services/services/services.component.ts");
/* harmony import */ var _carsize_carsize_carsize_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carsize/carsize/carsize.component */ "./src/app/carsize/carsize/carsize.component.ts");
/* harmony import */ var _price_price_price_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./price/price/price.component */ "./src/app/price/price/price.component.ts");
/* harmony import */ var _contact_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact-details/contact-details.component */ "./src/app/contact/contact-details/contact-details.component.ts");
/* harmony import */ var _checkout_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkout/checkout/checkout.component */ "./src/app/checkout/checkout/checkout.component.ts");
/* harmony import */ var _checkout_payment_info_payment_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkout/payment-info/payment-info.component */ "./src/app/checkout/payment-info/payment-info.component.ts");










var routes = [
    {
        path: "home",
        component: _home_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        pathMatch: "full",
    },
    { path: "services", component: _services_services_services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesComponent"], pathMatch: "full" },
    { path: "carsize", component: _carsize_carsize_carsize_component__WEBPACK_IMPORTED_MODULE_5__["CarsizeComponent"], pathMatch: "full" },
    { path: "price", component: _price_price_price_component__WEBPACK_IMPORTED_MODULE_6__["PriceComponent"], pathMatch: "full" },
    { path: "contact", component: _contact_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_7__["ContactDetailsComponent"], pathMatch: "full" },
    { path: "checkout", component: _checkout_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"], pathMatch: "full" },
    { path: "payment", component: _checkout_payment_info_payment_info_component__WEBPACK_IMPORTED_MODULE_9__["PaymentInfoComponent"], pathMatch: "full" },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "*", component: _home_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "**", component: _home_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'garage-plug';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home/home.component */ "./src/app/home/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _services_services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/services/services.component */ "./src/app/services/services/services.component.ts");
/* harmony import */ var _carsize_carsize_carsize_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./carsize/carsize/carsize.component */ "./src/app/carsize/carsize/carsize.component.ts");
/* harmony import */ var _price_price_price_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./price/price/price.component */ "./src/app/price/price/price.component.ts");
/* harmony import */ var _contact_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact/contact-details/contact-details.component */ "./src/app/contact/contact-details/contact-details.component.ts");
/* harmony import */ var _checkout_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./checkout/checkout/checkout.component */ "./src/app/checkout/checkout/checkout.component.ts");
/* harmony import */ var _checkout_payment_info_payment_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./checkout/payment-info/payment-info.component */ "./src/app/checkout/payment-info/payment-info.component.ts");






//importing formsModule










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _services_services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"],
                _carsize_carsize_carsize_component__WEBPACK_IMPORTED_MODULE_11__["CarsizeComponent"],
                _price_price_price_component__WEBPACK_IMPORTED_MODULE_12__["PriceComponent"],
                _contact_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_13__["ContactDetailsComponent"],
                _checkout_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_14__["CheckoutComponent"],
                _checkout_payment_info_payment_info_component__WEBPACK_IMPORTED_MODULE_15__["PaymentInfoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carsize/carsize/carsize.component.css":
/*!*******************************************************!*\
  !*** ./src/app/carsize/carsize/carsize.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.logoFont{\r\n    font-size: 1.5rem;\r\n    font-weight: 500;\r\n    padding: 2%;\r\n}\r\n\r\n.card-img-top{\r\n    background-color: #DCDCDC;\r\n}\r\n\r\n/* .card-img-top:hover{\r\n    background-color: #838383\r\n} */\r\n\r\n.card-img-top.success{\r\n    background-color: #838383\r\n}\r\n\r\n/* .card-img-top.danger{\r\n    background-color: #f2f2da\r\n} */\r\n\r\n.card{\r\n    /* width: 225px; */\r\n}\r\n\r\n.card-title{\r\n    text-align: center;\r\n}\r\n\r\n.services-div{\r\n    /* display: flex;\r\n    align-items: center;\r\n    justify-content: center; */\r\n    padding-top: 10%;\r\n}\r\n\r\n.cstm-btn{\r\n    border-radius: 0%;\r\n    padding-top: 4%;\r\n    padding-bottom: 4%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyc2l6ZS9jYXJzaXplL2NhcnNpemUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJO0FBQ0o7O0FBQ0E7O0dBRUc7O0FBR0g7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSTs7OEJBRTBCO0lBQzFCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY2Fyc2l6ZS9jYXJzaXplL2NhcnNpemUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubG9nb0ZvbnR7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQ0RDREM7XHJcbn1cclxuXHJcbi8qIC5jYXJkLWltZy10b3A6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODM4MzgzXHJcbn0gKi9cclxuXHJcbi5jYXJkLWltZy10b3Auc3VjY2Vzc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MzgzODNcclxufVxyXG4vKiAuY2FyZC1pbWctdG9wLmRhbmdlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZGFcclxufSAqL1xyXG5cclxuXHJcbi5jYXJke1xyXG4gICAgLyogd2lkdGg6IDIyNXB4OyAqL1xyXG59XHJcblxyXG4uY2FyZC10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5zZXJ2aWNlcy1kaXZ7XHJcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxufVxyXG5cclxuLmNzdG0tYnRue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/carsize/carsize/carsize.component.html":
/*!********************************************************!*\
  !*** ./src/app/carsize/carsize/carsize.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\" />\n  <title>Garage Plug Home</title>\n</head>\n\n<body>\n  <app-header></app-header>\n  <p class=\"logoFont\" style=\"text-align: center;font-weight: 500;\">CAR SIZE</p>\n  <div class=\"container py-3 px-5\">\n    <div class=\"row row-cols-1 row-cols-md-3 g-4\">\n      <div class=\"col\" *ngFor=\"let car of setOfCarSize; let i = index\">\n        <div class=\"card h-54 w-30\" (click)=\"clickEvent(car, i)\">\n          <img [src]=\"car.img\" class=\"card-img-top\" alt=\"...\" id=\"{{ 'card' + i }}\" [ngClass]=\"car.selected ? 'success' : 'danger'\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{car.serviceTitle}}</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n\n    <div class=\"d-grid gap-2 col-4 mx-auto services-div\">\n      <button type=\"button\" class=\"btn btn-outline-dark cstm-btn\" [routerLink]=\"['/price']\">CONTINUE</button>\n    </div>\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/carsize/carsize/carsize.component.ts":
/*!******************************************************!*\
  !*** ./src/app/carsize/carsize/carsize.component.ts ***!
  \******************************************************/
/*! exports provided: CarsizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsizeComponent", function() { return CarsizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_central_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/central-info.service */ "./src/app/shared/central-info.service.ts");



// import { EventEmitter } from 'protractor';
var imagePath = "../../../assets/carsize";
var CarsizeComponent = /** @class */ (function () {
    function CarsizeComponent(centralInfoService) {
        this.centralInfoService = centralInfoService;
        this.selectedCars = [];
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.setOfCarSize = [
            {
                "img": imagePath + "/car.svg",
                "serviceTitle": "SMALL",
                "selected": false
            },
            {
                "img": imagePath + "/sedan-car-model.svg",
                "serviceTitle": "SEDAN",
                "selected": false
            },
            {
                "img": imagePath + "/car-of-hatchback-model.svg",
                "serviceTitle": "HATCHBACK",
                "selected": false
            },
            {
                "img": imagePath + "/microbus.svg",
                "serviceTitle": "MINIVAN",
                "selected": false
            },
            {
                "img": imagePath + "/coupe-car.svg",
                "serviceTitle": "SUPER CAR",
                "selected": false
            },
            {
                "img": imagePath + "/jeep.svg",
                "serviceTitle": "CUV",
                "selected": false
            },
            {
                "img": imagePath + "/old-pickup.svg",
                "serviceTitle": "PICKUP TRUCK",
                "selected": false
            },
            {
                "img": imagePath + "/microbus.svg",
                "serviceTitle": "VAN",
                "selected": false
            },
            {
                "img": imagePath + "/car-suv.svg",
                "serviceTitle": "SUV",
                "selected": false
            },
        ];
    }
    CarsizeComponent.prototype.ngOnInit = function () {
    };
    CarsizeComponent.prototype.clickEvent = function (info, i) {
        if (info.selected) {
            info.selected = false;
            //removing an object from array of objects
            var removeIndex = this.selectedCars.map(function (item) { return item.serviceTitle; }).indexOf(info.serviceTitle);
            console.log(removeIndex);
            this.selectedCars.splice(removeIndex, 1);
            console.log(this.selectedCars);
            this.setOfCarSize[i] = info;
            // this.setOfImages.splice(i, 1);
        }
        else {
            // this.status = !this.status;  
            info.selected = true;
            this.setOfCarSize[i] = info;
            console.log(this.setOfCarSize);
            this.selectedCars.push(info);
            // this.eventClicked.emit(this.selectedCars)
            this.centralInfoService.storeAllCarsSelected(this.selectedCars);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarsizeComponent.prototype, "eventClicked", void 0);
    CarsizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carsize',
            template: __webpack_require__(/*! ./carsize.component.html */ "./src/app/carsize/carsize/carsize.component.html"),
            styles: [__webpack_require__(/*! ./carsize.component.css */ "./src/app/carsize/carsize/carsize.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_central_info_service__WEBPACK_IMPORTED_MODULE_2__["CentralInfoService"]])
    ], CarsizeComponent);
    return CarsizeComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout/checkout.component.css":
/*!**********************************************************!*\
  !*** ./src/app/checkout/checkout/checkout.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.logoFont{\r\n    font-size: 1.5rem;\r\n    font-weight: 500;\r\n    padding: 2%;\r\n}\r\n\r\n.card-img-top{\r\n    background-color: #DCDCDC;\r\n}\r\n\r\n/* .card-img-top:hover{\r\n    background-color: #838383\r\n} */\r\n\r\n.card-img-top.success{\r\n    background-color: #838383\r\n}\r\n\r\n/* .card-img-top.danger{\r\n    background-color: #f2f2da\r\n} */\r\n\r\n.card{\r\n    /* width: 225px; */\r\n}\r\n\r\n.card-title{\r\n    text-align: center;\r\n}\r\n\r\n.services-div{\r\n    /* display: flex;\r\n    align-items: center;\r\n    justify-content: center; */\r\n    padding-top: 10%;\r\n}\r\n\r\n.cstm-btn{\r\n    border-radius: 0%;\r\n    padding-top: 4%;\r\n    padding-bottom: 4%;\r\n}\r\n\r\n.cstm-btn-for-payments{\r\n    border-radius: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJO0FBQ0o7O0FBQ0E7O0dBRUc7O0FBR0g7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSTs7OEJBRTBCO0lBQzFCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubG9nb0ZvbnR7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQ0RDREM7XHJcbn1cclxuXHJcbi8qIC5jYXJkLWltZy10b3A6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODM4MzgzXHJcbn0gKi9cclxuXHJcbi5jYXJkLWltZy10b3Auc3VjY2Vzc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MzgzODNcclxufVxyXG4vKiAuY2FyZC1pbWctdG9wLmRhbmdlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZGFcclxufSAqL1xyXG5cclxuXHJcbi5jYXJke1xyXG4gICAgLyogd2lkdGg6IDIyNXB4OyAqL1xyXG59XHJcblxyXG4uY2FyZC10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5zZXJ2aWNlcy1kaXZ7XHJcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxufVxyXG5cclxuLmNzdG0tYnRue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNCU7XHJcbn1cclxuXHJcbi5jc3RtLWJ0bi1mb3ItcGF5bWVudHN7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/checkout/checkout/checkout.component.html":
/*!***********************************************************!*\
  !*** ./src/app/checkout/checkout/checkout.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\" />\n  <title>Garage Plug Home</title>\n</head>\n\n<body>\n  <app-header></app-header>\n  <p class=\"logoFont\" style=\"text-align: center;font-weight: 500;\">CHECKOUT</p>\n  <div class=\"container px-5 py-5\">\n  <!-- <form>\n    <div class=\"row gx-5 py-2\">\n      <div class=\"form-group col-md-6 col-sm-12\">\n        <label for=\"firstName\">First Name</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          id=\"firstName\"\n        />\n      </div>\n      <div class=\"form-group col-md-6 col-sm-12\">\n        <label for=\"lastName\">Last Name</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          id=\"lastName\"\n        />\n      </div>\n    </div>\n\n    <div class=\"row gx-5 py-2\">\n      <div class=\"form-group col-md-6 col-sm-12\">\n        <label for=\"firstName\">Email</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          id=\"firstName\"\n        />\n      </div>\n      <div class=\"form-group col-md-6 col-sm-12\">\n        <label for=\"lastName\">Mobile</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          id=\"lastName\"\n        />\n      </div>\n    </div>\n\n  \n    <div class=\"row gx-5 py-2\">\n      <div class=\"form-group col-md-6 col-sm-12\">\n        <label for=\"firstName\">Service Date and Time</label>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <select class=\"form-select form-select-sm mb-3\" aria-label=\".form-select-sm example\">\n          <option selected>Hours</option>\n          <option value=\"1\">1</option>\n          <option value=\"2\">2</option>\n          <option value=\"3\">3</option>\n        </select>\n      </div>\n      <div class=\"col-2\">\n        <select class=\"form-select form-select-sm mb-3\" aria-label=\".form-select-sm example\">\n          <option selected>Date</option>\n          <option value=\"1\">18</option>\n          <option value=\"2\">19</option>\n          <option value=\"3\">20</option>\n        </select>\n      </div>\n      <div class=\"col-2\">\n        <select class=\"form-select form-select-sm mb-3\" aria-label=\".form-select-sm example\">\n          <option selected>Month</option>\n          <option value=\"1\">Oct</option>\n          <option value=\"2\">Nov</option>\n          <option value=\"3\">Dec</option>\n        </select>\n      </div>\n    </div>\n\n    <hr style=\"width:100%;text-align:left;margin-left:0\">\n\n    <div class=\"row\">\n      <label for=\"firstName\">Select Payment Method</label>\n      <div class=\"d-grid gap-2 d-md-flex justify-content-md-start py-2\">\n        <button class=\"btn btn-outline-dark me-md-2 cstm-btn-for-payments\" type=\"button\">CASH</button>\n        <button class=\"btn btn-secondary cstm-btn-for-payments\" type=\"button\">CREDIT/DEBIT CARD</button>\n      </div>\n    </div>\n\n    <div class=\"row gx-5 py-2\">\n      <div class=\"form-group col-md-6 col-sm-12\">\n        <label for=\"firstName\" class=\"pb-2\">Credit/Debit Card</label>\n        <input\n          type=\"text\"\n          class=\"form-control py-2\"\n          id=\"firstName\"\n        />\n      </div>\n      <div class=\"form-group col-md-6 col-sm-12\">\n        <label for=\"lastName\">Expiry Date</label>\n        <div class=\"row pt-3\">\n          <div class=\"col-3\">\n            <select class=\"form-select form-select-sm mb-3\" aria-label=\".form-select-sm example\">\n              <option selected>Date</option>\n              <option value=\"1\">1</option>\n              <option value=\"2\">2</option>\n              <option value=\"3\">3</option>\n            </select>\n          </div>\n          <div class=\"col-3\">\n            <select class=\"form-select form-select-sm mb-3\" aria-label=\".form-select-sm example\">\n              <option selected>Month</option>\n              <option value=\"1\">18</option>\n              <option value=\"2\">19</option>\n              <option value=\"3\">20</option>\n            </select>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row col-2 d-md-flex justify-content-md-start px-2\">\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"firstName\"\n        placeholder=\"CVV\"\n      />\n      </div>\n\n  </form> -->\n  <div class=\"container py-3 px-5\" *ngIf=\"!customerCheckOutDetails\">\n    <p class=\"text-center\">Please go back to services and select again. <a [routerLink]=\"['/services']\"> Go to services </a></p>\n  </div>\n \n  <div *ngIf=\"customerCheckOutDetails\">\n  <div class=\"row\">\n    <p>Service Details</p>\n    <p>Date of Service: {{customerCheckOutDetails.selectedDate}}</p>\n    <p>No. Of hrs serviced: {{customerCheckOutDetails.selectedHrs}}</p>\n    <p>Month of Service: {{customerCheckOutDetails.selectedMonth}}</p>\n    <hr style=\"width:100%;text-align:left;margin-left:0;margin-top: 1%;\">\n\n    <p>Customer Details</p>\n    <p>Name: {{customerCheckOutDetails.fName}} {{customerCheckOutDetails.lName}}</p>\n    <p>Mobile No: {{customerCheckOutDetails.mobNo}}</p>\n    <p>Email: {{customerCheckOutDetails.email}}</p>\n    <hr style=\"width:100%;text-align:left;margin-left:0;margin-top: 1%;\">\n\n    <p>Price Details</p>\n    <p>Payment Method: {{customerCheckOutDetails.paymentMethod}}</p>\n    <hr style=\"width:100%;text-align:left;margin-left:0;margin-top: 1%;\">\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <p style=\"font-weight: 400;font-size: 1.5rem;\">TOTAL PRICE</p>\n    </div>\n    <div class=\"col-6\">\n      <p style=\"text-align:right;font-weight: 600;font-size: 1.5rem;\">{{totalAmount}} ₹</p>\n    </div>\n  </div>\n\n  <div class=\"d-grid gap-2 col-4 mx-auto services-div\">\n    <button type=\"button\" class=\"btn btn-outline-dark cstm-btn\" [routerLink]=\"['/payment']\">MAKE PAYMENT</button>\n  </div>\n  </div>\n</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/checkout/checkout/checkout.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/checkout/checkout/checkout.component.ts ***!
  \*********************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_central_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/central-info.service */ "./src/app/shared/central-info.service.ts");




var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(router, centralInfoService) {
        this.router = router;
        this.centralInfoService = centralInfoService;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.customerCheckOutDetails = this.centralInfoService.getAllCustomerInfo();
        this.totalAmount = this.centralInfoService.total;
    };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout/checkout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_central_info_service__WEBPACK_IMPORTED_MODULE_3__["CentralInfoService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/checkout/payment-info/payment-info.component.css":
/*!******************************************************************!*\
  !*** ./src/app/checkout/payment-info/payment-info.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.logoFont{\r\n    font-size: 1.5rem;\r\n    font-weight: 500;\r\n    padding: 2%;\r\n}\r\n\r\n.card-img-top{\r\n    background-color: #DCDCDC;\r\n}\r\n\r\n/* .card-img-top:hover{\r\n    background-color: #838383\r\n} */\r\n\r\n.card-img-top.success{\r\n    background-color: #838383\r\n}\r\n\r\n/* .card-img-top.danger{\r\n    background-color: #f2f2da\r\n} */\r\n\r\n.card{\r\n    /* width: 225px; */\r\n}\r\n\r\n.card-title{\r\n    text-align: center;\r\n}\r\n\r\n.services-div{\r\n    /* display: flex;\r\n    align-items: center;\r\n    justify-content: center; */\r\n    padding-top: 10%;\r\n}\r\n\r\n.cstm-btn{\r\n    border-radius: 0%;\r\n    padding-top: 4%;\r\n    padding-bottom: 4%;\r\n}\r\n\r\n.cstm-btn-for-payments{\r\n    border-radius: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvcGF5bWVudC1pbmZvL3BheW1lbnQtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBOztHQUVHOztBQUVIO0lBQ0k7QUFDSjs7QUFDQTs7R0FFRzs7QUFHSDtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFHQTtJQUNJOzs4QkFFMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jaGVja291dC9wYXltZW50LWluZm8vcGF5bWVudC1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxvZ29Gb250e1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbn1cclxuXHJcbi5jYXJkLWltZy10b3B7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRENEQ0RDO1xyXG59XHJcblxyXG4vKiAuY2FyZC1pbWctdG9wOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzODM4M1xyXG59ICovXHJcblxyXG4uY2FyZC1pbWctdG9wLnN1Y2Nlc3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODM4MzgzXHJcbn1cclxuLyogLmNhcmQtaW1nLXRvcC5kYW5nZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmRhXHJcbn0gKi9cclxuXHJcblxyXG4uY2FyZHtcclxuICAgIC8qIHdpZHRoOiAyMjVweDsgKi9cclxufVxyXG5cclxuLmNhcmQtdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uc2VydmljZXMtZGl2e1xyXG4gICAgLyogZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5jc3RtLWJ0bntcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDQlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQlO1xyXG59XHJcblxyXG4uY3N0bS1idG4tZm9yLXBheW1lbnRze1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/checkout/payment-info/payment-info.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/checkout/payment-info/payment-info.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\" />\n  <title>Garage Plug Home</title>\n</head>\n\n<body>\n  <app-header></app-header>\n  <p class=\"logoFont\" style=\"text-align: center;font-weight: 500;\">SERVICE NUMBER</p>\n  <div class=\"container px-5 py-5\">\n \n  <div class=\"row\">\n    <p>Payment Successful</p>\n    <hr style=\"width:100%;text-align:left;margin-left:0;margin-top: 1%;\">\n  </div>\n\n  <div class=\"row\">\n    <span class=\"text-muted\" style=\"font-size: 12px;\">Please present the service number for the staff</span>\n      <p style=\"font-weight: 400;font-size: 1.5rem;\">AW XXXX</p>\n  </div>\n\n  <div class=\"d-grid gap-2 col-4 mx-auto services-div\">\n    <button type=\"button\" class=\"btn btn-outline-dark cstm-btn\" [routerLink]=\"['/payment']\">MAKE PAYMENT</button>\n  </div>\n</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/checkout/payment-info/payment-info.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/checkout/payment-info/payment-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: PaymentInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentInfoComponent", function() { return PaymentInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaymentInfoComponent = /** @class */ (function () {
    function PaymentInfoComponent() {
    }
    PaymentInfoComponent.prototype.ngOnInit = function () {
    };
    PaymentInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-info',
            template: __webpack_require__(/*! ./payment-info.component.html */ "./src/app/checkout/payment-info/payment-info.component.html"),
            styles: [__webpack_require__(/*! ./payment-info.component.css */ "./src/app/checkout/payment-info/payment-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaymentInfoComponent);
    return PaymentInfoComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact-details/contact-details.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/contact/contact-details/contact-details.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.logoFont{\r\n    font-size: 1.5rem;\r\n    font-weight: 500;\r\n    padding: 2%;\r\n}\r\n\r\n.card-img-top{\r\n    background-color: #DCDCDC;\r\n}\r\n\r\n/* .card-img-top:hover{\r\n    background-color: #838383\r\n} */\r\n\r\n.card-img-top.success{\r\n    background-color: #838383\r\n}\r\n\r\n/* .card-img-top.danger{\r\n    background-color: #f2f2da\r\n} */\r\n\r\n.card{\r\n    /* width: 225px; */\r\n}\r\n\r\n.card-title{\r\n    text-align: center;\r\n}\r\n\r\n.services-div{\r\n    /* display: flex;\r\n    align-items: center;\r\n    justify-content: center; */\r\n    padding-top: 10%;\r\n}\r\n\r\n.cstm-btn{\r\n    border-radius: 0%;\r\n    padding-top: 4%;\r\n    padding-bottom: 4%;\r\n}\r\n\r\n.cstm-btn-for-payments{\r\n    border-radius: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LWRldGFpbHMvY29udGFjdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSTtBQUNKOztBQUNBOztHQUVHOztBQUdIO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0k7OzhCQUUwQjtJQUMxQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC1kZXRhaWxzL2NvbnRhY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sb2dvRm9udHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4uY2FyZC1pbWctdG9we1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RDRENEQztcclxufVxyXG5cclxuLyogLmNhcmQtaW1nLXRvcDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MzgzODNcclxufSAqL1xyXG5cclxuLmNhcmQtaW1nLXRvcC5zdWNjZXNze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzODM4M1xyXG59XHJcbi8qIC5jYXJkLWltZy10b3AuZGFuZ2Vye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJkYVxyXG59ICovXHJcblxyXG5cclxuLmNhcmR7XHJcbiAgICAvKiB3aWR0aDogMjI1cHg7ICovXHJcbn1cclxuXHJcbi5jYXJkLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLnNlcnZpY2VzLWRpdntcclxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG59XHJcblxyXG4uY3N0bS1idG57XHJcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcclxuICAgIHBhZGRpbmctdG9wOiA0JTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0JTtcclxufVxyXG5cclxuLmNzdG0tYnRuLWZvci1wYXltZW50c3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact-details/contact-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/contact/contact-details/contact-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\" />\n  <title>Garage Plug Home</title>\n</head>\n\n<body>\n  <app-header></app-header>\n  <p class=\"logoFont\" style=\"text-align: center;font-weight: 500;\">CONTACT DETAILS</p>\n  <div class=\"container px-5 py-5\">\n  <form #contactForm=\"ngForm\">\n    <div class=\"row gx-5 py-2\">\n      <div class=\"form-group col-md-6 col-sm-12\">\n        <label for=\"firstName\" class=\"pb-2\">First Name</label>\n        <input\n          type=\"text\"\n          [(ngModel)]=\"contactDetails.fName\"\n          name=\"fName\"\n          [ngModelOptions]=\"{standalone: true}\"\n          class=\"form-control\"\n          required\n        />\n      </div>\n      <div class=\"form-group col-md-6 col-sm-12\">\n        <label for=\"lastName\" class=\"pb-2\">Last Name</label>\n        <input\n          type=\"text\"\n          [(ngModel)]=\"contactDetails.lName\"\n          name=\"lName\"\n          [ngModelOptions]=\"{ standalone: true }\"\n          class=\"form-control\"\n          id=\"lastName\"\n          required\n        />\n      </div>\n    </div>\n\n    <div class=\"row gx-5 py-2\">\n      <div class=\"form-group col-md-6 col-sm-12\">\n        <label for=\"firstName\" class=\"pb-2\">Email</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          [(ngModel)]=\"contactDetails.email\"\n          name=\"email\"\n          [ngModelOptions]=\"{ standalone: true }\"\n          id=\"firstName\"\n          required\n        />\n      </div>\n      <div class=\"form-group col-md-6 col-sm-12\">\n        <label for=\"lastName\" class=\"pb-2\">Mobile</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          [(ngModel)]=\"contactDetails.mobNo\"\n          name=\"mobNo\"\n          [ngModelOptions]=\"{ standalone: true }\"\n          required\n        />\n      </div>\n    </div>\n\n  \n    <div class=\"row gx-5 py-2\">\n      <div class=\"form-group col-md-6 col-sm-12\">\n        <label for=\"firstName\">Service Date and Time</label>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <select class=\"form-select form-select-sm mb-3\" required aria-label=\".form-select-sm example\" (change)=\"changed($event,1)\"  [(ngModel)]=\"contactDetails.selectedHrs\" name=\"hrs\">\n          <option value=\"\" disabled selected hidden>Hours</option>\n          <option value=\"1\">1</option>\n          <option value=\"2\">2</option>\n          <option value=\"3\">3</option>\n        </select>\n      </div>\n      <div class=\"col-2\">\n        <select class=\"form-select form-select-sm mb-3\"  aria-label=\".form-select-sm example\" [(ngModel)]=\"contactDetails.selectedDate\" name=\"date\" (change)=\"changed($event,2)\">\n          <option value=\"\" disabled selected hidden>Date</option>\n          <option value=\"18\">18</option>\n          <option value=\"19\">19</option>\n          <option value=\"20\">20</option>\n        </select>\n      </div>\n      <div class=\"col-2\">\n        <select class=\"form-select form-select-sm mb-3\" required aria-label=\".form-select-sm example\" [(ngModel)]=\"contactDetails.selectedMonth\" name=\"month\" (change)=\"changed($event,3)\">\n          <option value=\"\" disabled selected hidden>Month</option>\n          <option value=\"Oct\">Oct</option>\n          <option value=\"Nov\">Nov</option>\n          <option value=\"Dec\">Dec</option>\n        </select>\n      </div>\n    </div>\n\n    <hr style=\"width:100%;text-align:left;margin-left:0\">\n\n    <div class=\"row\">\n      <label for=\"firstName\">Select Payment Method</label>\n      <div class=\"d-grid gap-2 d-md-flex justify-content-md-start py-2\">\n        <button class=\"btn btn-outline-dark me-md-2 cstm-btn-for-payments\" type=\"button\" (click)=\"selectPayMethod($event)\" id=1>CASH</button>\n        <button class=\"btn btn-secondary cstm-btn-for-payments\" type=\"button\" (click)=\"selectPayMethod($event)\" id=2>CREDIT/DEBIT CARD</button>\n      </div>\n    </div>\n\n    <div class=\"row gx-5 py-2\">\n      <div class=\"form-group col-md-6 col-sm-12\">\n        <label for=\"firstName\" class=\"pb-2\">Credit/Debit Card</label>\n        <input\n          type=\"text\"\n          class=\"form-control py-2\"\n          id=\"firstName\"\n          required\n        />\n      </div>\n      <div class=\"form-group col-md-6 col-sm-12\">\n        <label for=\"lastName\">Expiry Date</label>\n        <div class=\"row pt-3\">\n          <div class=\"col-3\">\n            <select class=\"form-select form-select-sm mb-3\" required aria-label=\".form-select-sm example\">\n              <option value=\"\" disabled selected hidden>Date</option>\n              <option value=\"1\">10</option>\n              <option value=\"2\">20</option>\n              <option value=\"3\">26</option>\n            </select>\n          </div>\n          <div class=\"col-3\">\n            <select class=\"form-select form-select-sm mb-3\" required aria-label=\".form-select-sm example\">\n              <option value=\"\" disabled selected hidden>Month</option>\n              <option value=\"1\">1</option>\n              <option value=\"2\">7</option>\n              <option value=\"3\">11</option>\n            </select>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row col-2 d-md-flex justify-content-md-start mx-0\">\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"firstName\"\n        placeholder=\"CVV\"\n        required\n      />\n      </div>\n\n  </form>\n\n  <div class=\"d-grid gap-2 col-4 mx-auto services-div\">\n    <button type=\"button\" class=\"btn btn-outline-dark cstm-btn\" [disabled]=\"!contactForm.form.valid\" (click)=\"onSubmit()\">CONTINUE</button>\n  </div>\n</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/contact/contact-details/contact-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/contact/contact-details/contact-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContactDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailsComponent", function() { return ContactDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_central_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/central-info.service */ "./src/app/shared/central-info.service.ts");




var ContactDetailsComponent = /** @class */ (function () {
    function ContactDetailsComponent(router, centralInfoService) {
        var _this = this;
        this.router = router;
        this.centralInfoService = centralInfoService;
        // public selectedHrs:string;
        // public selectedDate:string;
        // public selectedMonth:string;
        // public fName:string;
        // public lName:string;
        // public email:string;
        // public mobNo:string;
        this.contactDetails = {
            selectedHrs: '',
            selectedDate: '',
            selectedMonth: '',
            fName: '',
            lName: '',
            email: '',
            mobNo: '',
            paymentMethod: ''
        };
        this.changed = function (event, tag) {
            // this.selectCountry(this.selectedCountryCode);
            // for (let each of this.getPhoneCode()) {
            //   if (event.target.value === each.code) {
            //     this.internationalCode = each.number;
            //   }
            // }
            console.log('e', event.target.value, tag);
        };
        this.selectPayMethod = function (event) {
            var btnId = event.target.id;
            var getName = document.getElementById(event.target.id).textContent;
            _this.contactDetails.paymentMethod = getName;
        };
        this.onSubmit = function () {
            console.log(_this.contactDetails);
            _this.centralInfoService.customerInfoFn(_this.contactDetails);
            _this.router.navigate(["/checkout"]);
        };
    }
    ContactDetailsComponent.prototype.ngOnInit = function () {
    };
    ContactDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-details',
            template: __webpack_require__(/*! ./contact-details.component.html */ "./src/app/contact/contact-details/contact-details.component.html"),
            styles: [__webpack_require__(/*! ./contact-details.component.css */ "./src/app/contact/contact-details/contact-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_central_info_service__WEBPACK_IMPORTED_MODULE_3__["CentralInfoService"]])
    ], ContactDetailsComponent);
    return ContactDetailsComponent;
}());



/***/ }),

/***/ "./src/app/home/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divForLogo{\r\n    /* background-color: #ffffd8; */\r\n    background-color: #f2f2da;\r\n    min-height: 55vh;\r\n}\r\n\r\n.imgDimension{\r\n    height: 100px;\r\n    width: 100px;\r\n    position: relative;\r\n    margin: 2%;\r\n    /* background-color: #ffffd8; */\r\n    background-color:  #f2f2da;\r\n}\r\n\r\n.services-div{\r\n    /* display: flex;\r\n    align-items: center;\r\n    justify-content: center; */\r\n    padding-top: 10%;\r\n}\r\n\r\n.divForLogo{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center; \r\n    margin: 0;\r\n}\r\n\r\n.cstm-btn{\r\n    border-radius: 0%;\r\n    padding-top: 4%;\r\n    padding-bottom: 4%;\r\n}\r\n\r\n.subHeading{\r\n    font-style: italic;\r\n    font-weight: 200;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLCtCQUErQjtJQUMvQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSTs7OEJBRTBCO0lBQzFCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2Rm9yTG9nb3tcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZDg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmRhO1xyXG4gICAgbWluLWhlaWdodDogNTV2aDtcclxufVxyXG5cclxuLmltZ0RpbWVuc2lvbntcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZkODsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjZjJmMmRhO1xyXG59XHJcblxyXG4uc2VydmljZXMtZGl2e1xyXG4gICAgLyogZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5kaXZGb3JMb2dve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jc3RtLWJ0bntcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDQlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQlO1xyXG59XHJcblxyXG5cclxuLnN1YkhlYWRpbmd7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\" />\n  <title>Garage Plug Home</title>\n</head>\n\n<body>\n  <div class=\"divForLogo\">\n    <img src=\"../../../assets/garageplug-logo.jpg\" class=\"imgDimension\" />\n    <div>\n      <h1 class=\"logoFont\">GaragePlug</h1>\n      <p class=\"subHeading\">DETAILING CENTER</p>\n    </div>\n  </div>\n  <div class=\"d-grid gap-2 col-4 mx-auto services-div\">\n    <button type=\"button\" class=\"btn btn-outline-dark cstm-btn\" [routerLink]=\"['/services']\">CONTINUE</button>\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/home/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/price/price/price.component.css":
/*!*************************************************!*\
  !*** ./src/app/price/price/price.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.logoFont{\r\n    font-size: 1.5rem;\r\n    font-weight: 500;\r\n    padding: 2%;\r\n}\r\n\r\n.card-img-top{\r\n    background-color: #DCDCDC;\r\n}\r\n\r\n/* .card-img-top:hover{\r\n    background-color: #838383\r\n} */\r\n\r\n.card-img-top.success{\r\n    background-color: #838383\r\n}\r\n\r\n/* .card-img-top.danger{\r\n    background-color: #f2f2da\r\n} */\r\n\r\n.card{\r\n    /* width: 225px; */\r\n}\r\n\r\n.card-title{\r\n    text-align: center;\r\n}\r\n\r\n.services-div{\r\n    /* display: flex;\r\n    align-items: center;\r\n    justify-content: center; */\r\n    padding-top: 10%;\r\n}\r\n\r\n.cstm-btn{\r\n    border-radius: 0%;\r\n    padding-top: 4%;\r\n    padding-bottom: 4%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpY2UvcHJpY2UvcHJpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJO0FBQ0o7O0FBQ0E7O0dBRUc7O0FBR0g7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSTs7OEJBRTBCO0lBQzFCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcHJpY2UvcHJpY2UvcHJpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubG9nb0ZvbnR7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQ0RDREM7XHJcbn1cclxuXHJcbi8qIC5jYXJkLWltZy10b3A6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODM4MzgzXHJcbn0gKi9cclxuXHJcbi5jYXJkLWltZy10b3Auc3VjY2Vzc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MzgzODNcclxufVxyXG4vKiAuY2FyZC1pbWctdG9wLmRhbmdlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZGFcclxufSAqL1xyXG5cclxuXHJcbi5jYXJke1xyXG4gICAgLyogd2lkdGg6IDIyNXB4OyAqL1xyXG59XHJcblxyXG4uY2FyZC10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5zZXJ2aWNlcy1kaXZ7XHJcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxufVxyXG5cclxuLmNzdG0tYnRue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/price/price/price.component.html":
/*!**************************************************!*\
  !*** ./src/app/price/price/price.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\" />\n  <title>Garage Plug Home</title>\n</head>\n\n<body>\n  <app-header></app-header>\n  <p class=\"logoFont\" style=\"text-align: center;font-weight: 500;\">PRICE</p>\n\n  <div class=\"container py-3 px-5\" *ngIf=\"!showData\">\n    <p class=\"text-center\">Please go back to services and select again. <a [routerLink]=\"['/services']\"> Go to services </a></p>\n  </div>\n  <div class=\"container py-3 px-5\" *ngIf=\"selectedServices?.length > 0 && selectedCarSize?.length > 0\">\n  <p class=\"logoFont\" style=\"text-align: left;font-weight: 400;\">Selected Services</p>\n    <div class=\"row row-cols-1 row-cols-md-3 g-4\">\n      <div class=\"col\" *ngFor=\"let car of selectedServices; let i = index\">\n        <div class=\"card h-54 w-30\" (click)=\"clickEvent(car, i)\">\n          <img [src]=\"car.img\" class=\"card-img-top\" alt=\"...\" id=\"{{ 'card' + i }}\" [ngClass]=\"car.selected ? 'success' : 'danger'\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{car.serviceTitle}}</h5>\n          </div>\n        </div>\n      </div>\n      <div class=\"col d-flex align-items-center px-3\">\n        <button type=\"button\" class=\"btn btn-outline-dark cstm-btn\" [routerLink]=\"['/services']\">CHANGE</button>\n      </div>\n    </div>\n\n    <p class=\"logoFont\" style=\"text-align: left;font-weight: 400;\">Car Size</p>\n    <div class=\"row row-cols-1 row-cols-md-3 g-4\">\n      <div class=\"col\" *ngFor=\"let car of selectedCarSize; let i = index\">\n        <div class=\"card h-54 w-30\" (click)=\"clickEvent(car, i)\">\n          <img [src]=\"car.img\" class=\"card-img-top\" alt=\"...\" id=\"{{ 'card' + i }}\" [ngClass]=\"car.selected ? 'success' : 'danger'\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{car.serviceTitle}}</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n    <hr style=\"width:100%;text-align:left;margin-left:0\">\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <p style=\"font-weight: 400;font-size: 1.5rem;\">TOTAL PRICE</p>\n      </div>\n      <div class=\"col-6\">\n        <p style=\"text-align:right;font-weight: 600;font-size: 1.5rem;\">{{totalPrice}} ₹</p>\n      </div>\n    </div>\n    \n    <div class=\"d-grid gap-2 col-4 mx-auto services-div\">\n      <button type=\"button\" class=\"btn btn-outline-dark cstm-btn\" [routerLink]=\"['/contact']\">CONTINUE</button>\n    </div>\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/price/price/price.component.ts":
/*!************************************************!*\
  !*** ./src/app/price/price/price.component.ts ***!
  \************************************************/
/*! exports provided: PriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceComponent", function() { return PriceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_central_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/central-info.service */ "./src/app/shared/central-info.service.ts");


var imagePath = "../../../assets/carsize";

var PriceComponent = /** @class */ (function () {
    function PriceComponent(centralInfoService) {
        this.centralInfoService = centralInfoService;
        this.showData = false;
    }
    PriceComponent.prototype.ngOnInit = function () {
        this.selectedCarSize = this.centralInfoService.getAllCarsSelected();
        this.selectedServices = this.centralInfoService.getAllServicesSelected();
        if (this.selectedCarSize && this.selectedCarSize) {
            this.showData = true;
            console.log(this.selectedServices);
            var sum = 0;
            var sumOfPrice = this.selectedServices.reduce(function (acc, cur) {
                return acc.price + cur.price;
            });
            this.totalPrice = sumOfPrice;
            this.centralInfoService.storeTotalPrice(this.totalPrice);
        }
    };
    PriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-price',
            template: __webpack_require__(/*! ./price.component.html */ "./src/app/price/price/price.component.html"),
            styles: [__webpack_require__(/*! ./price.component.css */ "./src/app/price/price/price.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_central_info_service__WEBPACK_IMPORTED_MODULE_2__["CentralInfoService"]])
    ], PriceComponent);
    return PriceComponent;
}());



/***/ }),

/***/ "./src/app/services/services/services.component.css":
/*!**********************************************************!*\
  !*** ./src/app/services/services/services.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.logoFont{\r\n    font-size: 1.5rem;\r\n    font-weight: 500;\r\n    padding: 2%;\r\n}\r\n\r\n.card-img-top{\r\n    background-color: #DCDCDC;\r\n}\r\n\r\n/* .card-img-top:hover{\r\n    background-color: #838383\r\n} */\r\n\r\n.card-img-top.success{\r\n    background-color: #838383\r\n}\r\n\r\n/* .card-img-top.danger{\r\n    background-color: #f2f2da\r\n} */\r\n\r\n.card{\r\n    /* width: 225px; */\r\n}\r\n\r\n.card-title{\r\n    text-align: center;\r\n}\r\n\r\n.services-div{\r\n    /* display: flex;\r\n    align-items: center;\r\n    justify-content: center; */\r\n    padding-top: 10%;\r\n}\r\n\r\n.cstm-btn{\r\n    border-radius: 0%;\r\n    padding-top: 4%;\r\n    padding-bottom: 4%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJO0FBQ0o7O0FBQ0E7O0dBRUc7O0FBR0g7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSTs7OEJBRTBCO0lBQzFCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubG9nb0ZvbnR7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQ0RDREM7XHJcbn1cclxuXHJcbi8qIC5jYXJkLWltZy10b3A6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODM4MzgzXHJcbn0gKi9cclxuXHJcbi5jYXJkLWltZy10b3Auc3VjY2Vzc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MzgzODNcclxufVxyXG4vKiAuY2FyZC1pbWctdG9wLmRhbmdlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZGFcclxufSAqL1xyXG5cclxuXHJcbi5jYXJke1xyXG4gICAgLyogd2lkdGg6IDIyNXB4OyAqL1xyXG59XHJcblxyXG4uY2FyZC10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5zZXJ2aWNlcy1kaXZ7XHJcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxufVxyXG5cclxuLmNzdG0tYnRue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/services/services/services.component.html":
/*!***********************************************************!*\
  !*** ./src/app/services/services/services.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\" />\n  <title>Garage Plug Home</title>\n</head>\n\n<body>\n  <app-header></app-header>\n  <p class=\"logoFont\" style=\"text-align: center;font-weight: 500;\">SERVICES</p>\n  <div class=\"container py-3 px-5\">\n    <div class=\"row row-cols-1 row-cols-md-3 g-4\">\n      <div class=\"col\" *ngFor=\"let service of setOfImages; let i = index\">\n        <div class=\"card h-54 w-30\" (click)=\"clickEvent(service, i)\">\n          <img [src]=\"service.img\" class=\"card-img-top\" alt=\"...\" id=\"{{ 'card' + i }}\" [ngClass]=\"service.selected ? 'success' : 'danger'\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{service.serviceTitle}}</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n\n    <div class=\"d-grid gap-2 col-4 mx-auto services-div\">\n      <button type=\"button\" class=\"btn btn-outline-dark cstm-btn\" [routerLink]=\"['/carsize']\">CONTINUE</button>\n    </div>\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/services/services/services.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/services/services.component.ts ***!
  \*********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_central_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/central-info.service */ "./src/app/shared/central-info.service.ts");



var imagePath = "../../../assets/services";
var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(centralInfoService) {
        this.centralInfoService = centralInfoService;
        this.selectedServices = [];
        this.status = false;
        this.setOfImages = [
            {
                "img": imagePath + "/car.svg",
                "serviceTitle": "Car",
                "selected": false,
                "price": 200
            },
            {
                "img": imagePath + "/engine.svg",
                "serviceTitle": "Engine",
                "selected": false,
                "price": 200
            },
            {
                "img": imagePath + "/repair.svg",
                "serviceTitle": "Repair",
                "selected": false,
                "price": 200
            },
            {
                "img": imagePath + "/paint.svg",
                "serviceTitle": "Paint",
                "selected": false,
                "price": 200
            },
            {
                "img": imagePath + "/steering-wheel.svg",
                "serviceTitle": "Steering Wheel",
                "selected": false,
                "price": 200
            },
            {
                "img": imagePath + "/checklist.svg",
                "serviceTitle": "Checklist",
                "selected": false,
                "price": 200
            },
            {
                "img": imagePath + "/fuel.svg",
                "serviceTitle": "Fuel",
                "selected": false,
                "price": 200
            },
            {
                "img": imagePath + "/tools.svg",
                "serviceTitle": "Tools",
                "selected": false,
                "price": 200
            },
        ];
    }
    ServicesComponent.prototype.ngOnInit = function () {
        console.log(this.setOfImages);
    };
    ServicesComponent.prototype.clickEvent = function (info, i) {
        if (info.selected) {
            info.selected = false;
            var removeIndex = this.selectedServices.map(function (item) { return item.serviceTitle; }).indexOf(info.serviceTitle);
            console.log(removeIndex);
            this.selectedServices.splice(removeIndex, 1);
            console.log(this.selectedServices);
            this.setOfImages[i] = info;
            // this.setOfImages.splice(i, 1);
        }
        else {
            // this.status = !this.status;  
            info.selected = true;
            this.setOfImages[i] = info;
            console.log(this.setOfImages);
            console.log(this.selectedServices);
            this.selectedServices.push(info);
            // this.eventClicked.emit(this.selectedCars)
            this.centralInfoService.storeAllServicesSelected(this.selectedServices);
        }
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/services/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_central_info_service__WEBPACK_IMPORTED_MODULE_2__["CentralInfoService"]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/shared/central-info.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/central-info.service.ts ***!
  \************************************************/
/*! exports provided: CentralInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentralInfoService", function() { return CentralInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CentralInfoService = /** @class */ (function () {
    function CentralInfoService() {
        var _this = this;
        this.storeAllCarsSelected = function (getAllData) {
            _this.carsSelected = getAllData;
        };
        this.storeAllServicesSelected = function (getAllData) {
            _this.servicesSelected = getAllData;
        };
        this.customerInfoFn = function (customerInfo) {
            _this.customerInfo = customerInfo;
        };
        this.storeTotalPrice = function (totalPrice) {
            _this.total = totalPrice;
        };
        this.getAllCarsSelected = function () {
            console.log(_this.carsSelected);
            return _this.carsSelected;
        };
        this.getAllServicesSelected = function () {
            console.log(_this.servicesSelected);
            return _this.servicesSelected;
        };
        this.getAllCustomerInfo = function () {
            return _this.customerInfo;
        };
    }
    CentralInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CentralInfoService);
    return CentralInfoService;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    background-color: #f2f2da;\r\n    min-height: 10vh;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n}\r\n\r\n.imgDimension{\r\n    height: 50px;\r\n    width: 50px;\r\n    margin-right: 0;\r\n}\r\n\r\n.logoFont{\r\n    font-size: 1.7rem;\r\n    font-weight: 900;\r\n    padding-top: 2%;\r\n    padding-right: 5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmRhO1xyXG4gICAgbWluLWhlaWdodDogMTB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWdEaW1lbnNpb257XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG4ubG9nb0ZvbnR7XHJcbiAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <img src=\"../../../assets/garageplug-logo.jpg\" class=\"imgDimension\"/>\n  <p class=\"logoFont\">GaragePlug</p>\n</div>"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], HeaderComponent.prototype, "selectedCars", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\mean stack development\Angular4\garage-plug\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map