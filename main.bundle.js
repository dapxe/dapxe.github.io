webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-primary\" (click)=\"xoaKhongHinh()\" >Xóa post không có hình</button>\n\n\n<button type=\"button\" class=\"btn btn-secondary\">Secondary</button>\n<button type=\"button\" class=\"btn btn-success\">Success</button>\n<button type=\"button\" class=\"btn btn-danger\">Danger</button>\n<button type=\"button\" class=\"btn btn-warning\">Warning</button>\n<button type=\"button\" class=\"btn btn-info\">Info</button>\n<button type=\"button\" class=\"btn btn-light\">Light</button>\n<button type=\"button\" class=\"btn btn-dark\">Dark</button>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
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



var AdminComponent = /** @class */ (function () {
    function AdminComponent(db) {
        this.db = db;
    }
    AdminComponent.prototype.xoaKhongHinh = function () {
        console.log(3);
    };
    AdminComponent.prototype.ngOnInit = function () {
        this.usersCollection = this.db.collection('users');
        this.users = this.usersCollection.valueChanges();
        console.log();
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object])
    ], AdminComponent);
    return AdminComponent;
    var _a;
}());

//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#router{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    padding-bottom: 20px;\r\n}\r\n.router{\r\n    color:white;\r\n    padding: 10px 40px;\r\n    background-color: wheat\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"background-color:gray\">\n\t<app-navbar></app-navbar>\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__swimlane_ngx_ui__ = __webpack_require__("../../../../@swimlane/ngx-ui/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__swimlane_ngx_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__swimlane_ngx_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__new_new_component__ = __webpack_require__("../../../../../src/app/new/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__top_top_component__ = __webpack_require__("../../../../../src/app/top/top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__hot_hot_component__ = __webpack_require__("../../../../../src/app/hot/hot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__random_random_component__ = __webpack_require__("../../../../../src/app/random/random.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__test_test_component__ = __webpack_require__("../../../../../src/app/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__scroll_scroll_component__ = __webpack_require__("../../../../../src/app/scroll/scroll.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var RoutesConfig = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__new_new_component__["a" /* NewComponent */] },
    { path: 'top', component: __WEBPACK_IMPORTED_MODULE_14__top_top_component__["a" /* TopComponent */] },
    { path: 'hot', component: __WEBPACK_IMPORTED_MODULE_15__hot_hot_component__["a" /* HotComponent */] },
    { path: 'random', component: __WEBPACK_IMPORTED_MODULE_16__random_random_component__["a" /* RandomComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_18__admin_admin_component__["a" /* AdminComponent */] },
    { path: 'page/:page', component: __WEBPACK_IMPORTED_MODULE_13__new_new_component__["a" /* NewComponent */] },
    { path: 'scroll', component: __WEBPACK_IMPORTED_MODULE_20__scroll_scroll_component__["a" /* ScrollComponent */] },
    { path: '**', redirectTo: '/', pathMatch: 'full' } //path:'**' có nghĩa là tất cả những path khác
];










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__new_new_component__["a" /* NewComponent */],
                __WEBPACK_IMPORTED_MODULE_14__top_top_component__["a" /* TopComponent */],
                __WEBPACK_IMPORTED_MODULE_15__hot_hot_component__["a" /* HotComponent */],
                __WEBPACK_IMPORTED_MODULE_16__random_random_component__["a" /* RandomComponent */],
                __WEBPACK_IMPORTED_MODULE_17__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_18__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_19__test_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_20__scroll_scroll_component__["a" /* ScrollComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(RoutesConfig),
                __WEBPACK_IMPORTED_MODULE_3_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
                __WEBPACK_IMPORTED_MODULE_21_ngx_loading__["a" /* LoadingModule */],
                __WEBPACK_IMPORTED_MODULE_11__swimlane_ngx_ui__["NgxUIModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

Object(__WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(AppModule);
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/hot/hot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hot/hot.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n\thot works!\n</p>\n<div class=\"row\">\n\t<div class=\"col-9\">\n\t\t<ngx-tabs>\n\t\t\t<ngx-tab *ngFor=\"let i of ['Toàn thời gian','Tháng','Tuần']\" [title]=\"i\" [active]=\"i === 1\">\n\t\t\t\t{{'Tab ' + i}}\n\t\t\t</ngx-tab>\n\t\t</ngx-tabs>\n\t</div>\n\t<div class=\"col-3\">TOP FACEBOOKER</div>\n</div>\n\n\n\n<!--Sidebar: top facebooker theo follower\nhttps://graph.facebook.com/100008962121415/subscribers?access_token=EAAAAUaZA8jlABAPyMoKSVajFnPMZBvXAxxr5mmJu05EcMRzKvZAFNHWQnj4mRmm7670ISBleUcBbVMIRYUZBZBF8XNbkcBnYTybGkXWBWoBf2iDwwGD8eeYufTksoRsZC5YZAgcFaQ8kbOrXD9fSOugMZAURGEZB3AbwZD\n-->"

/***/ }),

/***/ "../../../../../src/app/hot/hot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { TabsComponent } from '@swimlane/ngx-ui';
var HotComponent = /** @class */ (function () {
    function HotComponent() {
    }
    HotComponent.prototype.ngOnInit = function () {
    };
    HotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hot',
            template: __webpack_require__("../../../../../src/app/hot/hot.component.html"),
            styles: [__webpack_require__("../../../../../src/app/hot/hot.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HotComponent);
    return HotComponent;
}());

//# sourceMappingURL=hot.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark mb-4\">\n\t<a class=\"navbar-brand\" routerLink=\"/new\">Top navbar</a>\n\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\"\n\t\taria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\t<div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n\t\t<ul class=\"navbar-nav mr-auto\">\n\t\t\t<li class=\"nav-item active\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/new\">New <span class=\"sr-only\">(current)</span></a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/top\">Top</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/hot\">Hot</a>\n\t\t\t</li>\n      <li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/random\">Random</a>\n\t\t\t</li>\n\t\t</ul>\n\t\t<form class=\"form-inline mt-2 mt-md-0\">\n\t\t\t<input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n\t\t\t<button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n\t\t</form>\n\t</div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/new/new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .item{\r\n     margin: 20px 0;\r\n }\r\n img{\r\n     max-width:100%;\r\n    max-height:100%;\r\n    -o-object-fit: contain;\r\n       object-fit: contain\r\n\r\n }\r\n\r\n\r\n /*CSS Loading*/\r\n.loader,\r\n.loader:before,\r\n.loader:after {\r\n  border-radius: 50%;\r\n  width: 2.5em;\r\n  height: 2.5em;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n  -webkit-animation: load7 1.8s infinite ease-in-out;\r\n  animation: load7 1.8s infinite ease-in-out;\r\n}\r\n.loader {\r\n  color: #ffffff;\r\n  font-size: 10px;\r\n  margin: 80px auto;\r\n  position: relative;\r\n  text-indent: -9999em;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-animation-delay: -0.16s;\r\n  animation-delay: -0.16s;\r\n}\r\n.loader:before,\r\n.loader:after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n.loader:before {\r\n  left: -3.5em;\r\n  -webkit-animation-delay: -0.32s;\r\n  animation-delay: -0.32s;\r\n}\r\n.loader:after {\r\n  left: 3.5em;\r\n}\r\n@-webkit-keyframes load7 {\r\n  0%,\r\n  80%,\r\n  100% {\r\n    box-shadow: 0 2.5em 0 -1.3em;\r\n  }\r\n  40% {\r\n    box-shadow: 0 2.5em 0 0;\r\n  }\r\n}\r\n@keyframes load7 {\r\n  0%,\r\n  80%,\r\n  100% {\r\n    box-shadow: 0 2.5em 0 -1.3em;\r\n  }\r\n  40% {\r\n    box-shadow: 0 2.5em 0 0;\r\n  }\r\n}\r\n/*end CSS Loading*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search-results\" infiniteScroll [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"200\" (scrolled)=\"onScroll()\">\n\n\t<div class=\"container\">\n\t\t\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm item\" *ngFor=\"let gai of mangUser\">\n\t\t\t\t<div class=\"card\" style=\"width: 20rem;\">\n\t\t\t\t\t<img class=\"card-img-top\" [src]=\"gai.full_picture\" alt=\"Card image cap\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<a href=\"https://www.facebook.com/{{gai.id}}\" target=\"_blank\">\n\t\t\t\t\t\t\t<h4> {{gai.from.name}} </h4>\n\t\t\t\t\t\t\t<!--<p>{{gai.message}}</p>-->\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n    \n\t</div>\n\t<img src=\"https://loading.io/spinners/spin/index.ajax-spinner-gif.svg\" alt=\"\"  *ngIf=\"!finished\" >\n</div>"

/***/ }),

/***/ "../../../../../src/app/new/new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewComponent = /** @class */ (function () {
    function NewComponent(http) {
        var _this = this;
        this.http = http;
        this.finished = false;
        this.page = 1;
        this.mangUser = [];
        this.http.get('http://localhost:3000/api/new/1').toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson.forEach(function (e) { return _this.mangUser.push(e); }); });
    }
    NewComponent.prototype.onScroll = function () {
        console.log('=========scrolling...===========');
        this.finished = false;
        this.getUsers();
    };
    NewComponent.prototype.getUsers = function () {
        var _this = this;
        this.page = this.page + 1;
        console.log(this.finished + ' ==============finished ');
        if (!this.finished) {
            this.http.get('http://localhost:3000/api/new/' + this.page).toPromise()
                .then(function (res) { return res.json(); })
                .then(function (resJson) {
                resJson.forEach(function (e) {
                    _this.mangUser.push(e);
                    console.log('added ' + e.from.name);
                });
                console.log('xong doi do');
                _this.finished = true;
                console.log(_this.page + 'getUser');
            });
        }
        else {
            return;
        }
    };
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new',
            template: __webpack_require__("../../../../../src/app/new/new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new/new.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], NewComponent);
    return NewComponent;
    var _a;
}());

//# sourceMappingURL=new.component.js.map

/***/ }),

/***/ "../../../../../src/app/random/random.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/random/random.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  random works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/random/random.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RandomComponent = /** @class */ (function () {
    function RandomComponent() {
    }
    RandomComponent.prototype.ngOnInit = function () {
    };
    RandomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-random',
            template: __webpack_require__("../../../../../src/app/random/random.component.html"),
            styles: [__webpack_require__("../../../../../src/app/random/random.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RandomComponent);
    return RandomComponent;
}());

//# sourceMappingURL=random.component.js.map

/***/ }),

/***/ "../../../../../src/app/scroll/scroll.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/scroll/scroll.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search-results\" infiniteScroll [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"1000\" (scrolled)=\"onScroll()\">\n\n\t<div class=\"container\">\n\t\t\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm item\" *ngFor=\"let gai of mangUser\">\n\t\t\t\t<div class=\"card\" style=\"width: 20rem;\">\n\t\t\t\t\t<img class=\"card-img-top\" [src]=\"gai.full_picture\" alt=\"Card image cap\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<a href=\"https://www.facebook.com/{{gai.id}}\" target=\"_blank\">\n\t\t\t\t\t\t\t<h4> {{gai.id}} </h4>\n\t\t\t\t\t\t\t<!--<p>{{gai.message}}</p>-->\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<img src=\"https://loading.io/spinners/spin/index.ajax-spinner-gif.svg\" alt=\"\"  *ngIf=\"isLoading\" >\n\t</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/scroll/scroll.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScrollComponent = /** @class */ (function () {
    function ScrollComponent(http) {
        var _this = this;
        this.http = http;
        this.isLoading = false;
        this.mangUser = [];
        this.page = 5;
        this.http.get('https://api.mlab.com/api/1/databases/vsbg/collections/users?apiKey=17YWmkjYCmxWC1BBoGaNSzxzOEEv0dFR&l=10').toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return _this.mangUser = resJson; });
    }
    ScrollComponent.prototype.ngOnInit = function () {
    };
    ScrollComponent.prototype.onScroll = function () {
        var _this = this;
        this.page = this.page + 5;
        this.isLoading = true;
        this.http.get('https://api.mlab.com/api/1/databases/vsbg/collections/users?apiKey=17YWmkjYCmxWC1BBoGaNSzxzOEEv0dFR&l=5&sk=' + this.page).toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) {
            resJson.forEach(function (e) { return _this.mangUser.push(e); });
            _this.isLoading = false;
            console.log(_this.isLoading);
        });
    };
    ScrollComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-scroll',
            template: __webpack_require__("../../../../../src/app/scroll/scroll.component.html"),
            styles: [__webpack_require__("../../../../../src/app/scroll/scroll.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], ScrollComponent);
    return ScrollComponent;
    var _a;
}());

//# sourceMappingURL=scroll.component.js.map

/***/ }),

/***/ "../../../../../src/app/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"search-resultsss\"\n\t\t    infiniteScroll\n\t\t    [infiniteScrollDistance]=\"2\"\n\t\t    [infiniteScrollThrottle]=\"50\"\n\t\t    (scrolled)=\"onScrollDown()\">\n\t\t\t<!--<p *ngFor=\"let i of array\">\n        {{i}}\n      </p>-->\n\t\t\t<p> {{ip}} </p>\n\t\t\t<!--<p *ngFor=\"let user of mangUser\">\n        {{user.ip}}\n      </p>-->\n\t\t</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TestComponent = /** @class */ (function () {
    // array = [];
    // mangUser = [];
    // num = 5;
    // @Input('data') meals: string[] = [];
    function TestComponent(http) {
        var _this = this;
        this.http = http;
        // page = 1;
        this.ip = 'ssss';
        this.http.get('http://ip.jsontest.com')
            .toPromise()
            .then(function (res) { res.json(); _this.ip = 'huyvan'; })
            .then(function (resJson) {
            _this.ip = 'huyvan';
            console.log(_this.ip);
        })
            .catch(function (e) { return console.log(e); });
    }
    TestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test',
            template: __webpack_require__("../../../../../src/app/test/test.component.html"),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], TestComponent);
    return TestComponent;
    var _a;
}());

//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/top/top.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/top/top.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<ngx-loading [show]=\"loading\" [config]=\"{ fullScreenBackdrop:true }\"></ngx-loading>\n\t<div class=\"row\">\n\t\t<div class=\"col-9\">\n\t\t\t<ngx-tabs #tabs>\n\t\t\t\t<ngx-tab #tab1 [title]=\"'All Time'\">\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm item\" *ngFor=\"let gai of topAll\">\n\t\t\t\t\t\t\t<ng-template #popoverTemplate let-model=\"model\">\n\t\t\t\t\t\t\t\t<p>{{gai.message.length\n\t\t\t\t\t\t\t\t\t< 100 ? gai.message:gai.message.slice(0,100)+ '...'}}</p>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/{{gai.id}}\" target=\"_blank\" ngx-tooltip [tooltipContext]=\"{ foo: 'YAZ' }\" [tooltipType]=\"'popover'\"\n\t\t\t\t\t\t\t\t[tooltipPlacement]=\"'top'\" [tooltipTemplate]=\"popoverTemplate\">\n\n\t\t\t\t\t\t\t\t<div class=\"card\" style=\"width: 20rem;\">\n\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" [src]=\"gai.full_picture\" alt=\"Card image cap\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/{{gai.id}}\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t\t\t<h4> {{gai.from.name}} </h4>\n\t\t\t\t\t\t\t\t\t\t\t<h5> {{gai.likes.count}} Likes</h5>\n\t\t\t\t\t\t\t\t\t\t\t<!--<p>{{gai.message}}</p>-->\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--end row-->\n\n\n\t\t\t\t</ngx-tab>\n\n\t\t\t\t<ngx-tab #tab2 [title]=\"'Top month'\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm item\" *ngFor=\"let gai of topMonth\">\n\t\t\t\t\t\t\t<ng-template #popoverTemplate let-model=\"model\">\n\t\t\t\t\t\t\t\t<p>{{gai.message.length\n\t\t\t\t\t\t\t\t\t< 100 ? gai.message:gai.message.slice(0,100)+ '...'}}</p>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/{{gai.id}}\" target=\"_blank\" ngx-tooltip [tooltipContext]=\"{ foo: 'YAZ' }\" [tooltipType]=\"'popover'\"\n\t\t\t\t\t\t\t\t[tooltipPlacement]=\"'top'\" [tooltipTemplate]=\"popoverTemplate\">\n\n\t\t\t\t\t\t\t\t<div class=\"card\" style=\"width: 20rem;\">\n\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" [src]=\"gai.full_picture\" alt=\"Card image cap\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/{{gai.id}}\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t\t\t<h4> {{gai.from.name}} </h4>\n\t\t\t\t\t\t\t\t\t\t\t<h5> {{gai.likes.count}} Likes</h5>\n\t\t\t\t\t\t\t\t\t\t\t<!--<p>{{gai.message}}</p>-->\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ngx-tab>\n\n\t\t\t\t<ngx-tab #tab3 [title]=\"'Top week'\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm item\" *ngFor=\"let gai of topWeek\">\n\t\t\t\t\t\t\t<ng-template #popoverTemplate let-model=\"model\">\n\t\t\t\t\t\t\t\t<p>{{gai.message.length\n\t\t\t\t\t\t\t\t\t< 100 ? gai.message:gai.message.slice(0,100)+ '...'}}</p>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/{{gai.id}}\" target=\"_blank\" ngx-tooltip [tooltipContext]=\"{ foo: 'YAZ' }\" [tooltipType]=\"'popover'\"\n\t\t\t\t\t\t\t\t[tooltipPlacement]=\"'top'\" [tooltipTemplate]=\"popoverTemplate\">\n\n\t\t\t\t\t\t\t\t<div class=\"card\" style=\"width: 20rem;\">\n\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" [src]=\"gai.full_picture\" alt=\"Card image cap\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/{{gai.id}}\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t\t\t<h4> {{gai.from.name}} </h4>\n\t\t\t\t\t\t\t\t\t\t\t<h5> {{gai.likes.count}} Likes</h5>\n\t\t\t\t\t\t\t\t\t\t\t<!--<p>{{gai.message}}</p>-->\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ngx-tab>\n\n\t\t\t</ngx-tabs>\n\t\t</div>\n\t\t<div class=\"col-3\">TOP FACEBOOKER</div>\n\t</div>\n\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/top/top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopComponent = /** @class */ (function () {
    function TopComponent(http) {
        var _this = this;
        this.http = http;
        this.loading = true;
        this.top = [];
        this.topAll = [];
        this.topMonth = [];
        this.topWeek = [];
        // All time
        this.http.get('http://localhost:3000/api/top').toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) {
            _this.topAll = resJson;
            _this.loading = false;
        });
        // Top month
        this.http.get('http://localhost:3000/api/top/30').toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) {
            _this.topMonth = resJson;
            _this.loading = false;
        });
        // Top week
        this.http.get('http://localhost:3000/api/top/7').toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) {
            _this.topWeek = resJson;
            _this.loading = false;
        });
    }
    TopComponent.prototype.ngOnInit = function () {
    };
    TopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-top',
            template: __webpack_require__("../../../../../src/app/top/top.component.html"),
            styles: [__webpack_require__("../../../../../src/app/top/top.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], TopComponent);
    return TopComponent;
    var _a;
}());

//# sourceMappingURL=top.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyD4-0qf1ngu6KAczf9bkDj3D2rT2j6y1YU",
        authDomain: "vsbg-1235.firebaseapp.com",
        databaseURL: "https://vsbg-1235.firebaseio.com",
        projectId: "vsbg-1235",
        storageBucket: "vsbg-1235.appspot.com",
        messagingSenderId: "921496160734"
        // apiKey: "AIzaSyCKwX6V5XhlW_kF2q6U1pULnEPumicXJkw",
        // authDomain: "vsbg2-1235.firebaseapp.com",
        // databaseURL: "https://vsbg2-1235.firebaseio.com",
        // projectId: "vsbg2-1235",
        // storageBucket: "vsbg2-1235.appspot.com",
        // messagingSenderId: "77732847051"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map