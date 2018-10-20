webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gd-card {\n  /*border-radius: 12px; */\n  /* border: 3px solid #E91C2C; */\n  /*background: rgb(59, 59, 59);*/\n  background: rgb(1, 6, 32); \n  margin: auto;\n  width: 100%;\n  height: 86.5%;\n  overflow: scroll;\n  \n\n}\n\nagm-map {\n  width: 100%;\n  height: 300px;\n}\n\nh6 {\n  font-size: 80px;\n}\n\nh1 {\n  font-size: 16px;\n  font-weight: normal;\n}\n\nh4 {\n  font-size: 14px;\n  font-weight: normal;\n}\n\ndiv.gallery {\n  margin: 5px;\n  /* border: 1px solid #ccc; */\n  float: left;\n  width: 180px;\n}\n\n\ndiv.gallery img {\n  width: auto;\n  max-height: 150px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n\n}\n\ndiv.desc {\n  padding: 10px;\n  text-align: center;\n}\n\nbutton {\n  height: 18px ;\n  min-width: 20px ;\n  font-size: 13px ;\n  line-height: 0px; \n  /* background-color: #2358AC */\n\n}\n\nmd-toolbar.black{\n  /*background-color: black;*/\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/tie-dye.jpg")) + "); \n\n}\n\n\n.menu-container {\n  max-height: 500px; \n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<md-toolbar class=\"black\">\r\n  <button md-button [mdMenuTriggerFor]=\"menu\"> <img src=\"assets/gd_logo1.png\" height=\"50\" align=\"middle\"> </button>\r\n  <md-menu #menu=\"mdMenu\">\r\n      <div class=\"menu-container\">\r\n    <button md-menu-item *ngFor=\"let e of events\" (click)=\"eventSelected(e)\">{{ e.date }} {{ e.location }}</button>\r\n  </div>\r\n  </md-menu>\r\n  \r\n  <!--img src=\"https://pbs.twimg.com/profile_images/692441136472784896/KowiUPSf.jpg\"-->\r\n  <md-toolbar-row *ngIf=\"selectedEvent\">\r\n    <span>{{ selectedEvent.date }} {{ selectedEvent.location }}</span>\r\n  </md-toolbar-row>\r\n</md-toolbar>\r\n\r\n<md-grid-list [cols]=\"cols | async\" rowHeight=\"400px\">\r\n  <md-grid-tile *ngIf=\"location\">\r\n     <!--<md-grid-tile-header>\r\n          <h3><font color=\"red\">This is some text!</font></h3>\r\n        </md-grid-tile-header> -->\r\n    <md-card class=\"gd-card\">\r\n      <md-card-header>\r\n        <md-card-title>Location</md-card-title>\r\n         <!-- <md-card-subtitle>{{ location.name }}</md-card-subtitle>  -->\r\n      </md-card-header>\r\n      <button md-button [mdMenuTriggerFor]=\"locmenu\">{{ location.name }} </button>\r\n      <md-menu #locmenu=\"mdMenu\">\r\n          <div class=\"menu-container\">\r\n        <button md-menu-item *ngFor=\"let e of location.events\" (click)=\"eventSelected(e)\">{{ e.date }} {{ e.venue }}</button>\r\n      </div>\r\n      </md-menu>\r\n      <img md-card-image src=\"{{ location.thumbnail }}\" (click)=\"openDialog(location.image)\">\r\n      <md-card-content>{{ location.comment }}</md-card-content>\r\n      <agm-map *ngIf=\"location.geoloc\" [latitude]=\"location.geoloc.lat\" [longitude]=\"location.geoloc.long\" [zoom]=\"9\"  [scrollwheel]=false>\r\n        <agm-marker [latitude]=\"location.geoloc.lat\" [longitude]=\"location.geoloc.long\"></agm-marker>\r\n      </agm-map>\r\n   \r\n    </md-card>\r\n  </md-grid-tile>\r\n  <md-grid-tile *ngIf=\"venue\">\r\n    <md-card class=\"gd-card\">\r\n      <md-card-header>\r\n        <md-card-title>Venue</md-card-title>\r\n        <!-- <md-card-subtitle>{{ venue.name }}</md-card-subtitle> -->\r\n      </md-card-header>\r\n\r\n      <button md-button [mdMenuTriggerFor]=\"venmenu\">{{ venue.name }} </button>\r\n      <md-menu #venmenu=\"mdMenu\">\r\n          <div class=\"menu-container\">\r\n        <button md-menu-item *ngFor=\"let e of venue.events\" (click)=\"eventSelected(e)\">{{ e.date }}</button>\r\n      </div>\r\n      </md-menu>\r\n\r\n      <!--md-card-content>({{ venue.sameas }})</md-card-content-->\r\n      <img md-card-image src=\"{{ venue.thumbnail }}\" (click)=\"openDialog(venue.image)\">\r\n      <md-card-content>{{ venue.comment }}</md-card-content>\r\n      <agm-map *ngIf=\"venue.geoloc\" [latitude]=\"venue.geoloc.lat\" [longitude]=\"venue.geoloc.long\" [zoom]=\"12\" [scrollwheel]=false>\r\n        <agm-marker [latitude]=\"venue.geoloc.lat\" [longitude]=\"venue.geoloc.long\"></agm-marker>\r\n      </agm-map>\r\n      \r\n    </md-card>\r\n  </md-grid-tile>\r\n  <md-grid-tile *ngIf=\"tickets&&tickets.length > 0\">\r\n    <md-card class=\"gd-card\">\r\n      <md-card-header>\r\n        <md-card-title>Ticket</md-card-title>\r\n      </md-card-header>\r\n      <!--<button mat-raised-button (click)=\"openDialog()\">Pick one</button>-->\r\n      <img md-card-image *ngFor=\"let t of tickets\" src=\"{{ t }}\" (click)=\"openDialog(t)\">\r\n    </md-card>\r\n\r\n  </md-grid-tile>\r\n  <md-grid-tile *ngIf=\"posters&&posters.length > 0\">\r\n    <md-card class=\"gd-card\">\r\n      <md-card-header>\r\n        <md-card-title>Poster</md-card-title>\r\n      </md-card-header>\r\n      <img md-card-image *ngFor=\"let p of posters\" src=\"{{ p }}\" (click)=\"openDialog(p)\">\r\n\r\n\r\n\r\n    </md-card>\r\n  </md-grid-tile>\r\n  <md-grid-tile *ngIf=\"weather\">\r\n    <md-card class=\"gd-card\">\r\n      <md-card-header>\r\n        <md-card-title>Weather</md-card-title>\r\n      </md-card-header>\r\n      <md-card-content>\r\n        <h3>max. temperature: {{ weather.maxTemperature }}°C<br>\r\n          precipitation: {{ weather.precipitation }}mm<br>\r\n          wind: {{ weather.wind }}km/h {{weather.wind_direction}}\r\n        </h3>\r\n        \r\n\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n\r\n  <md-grid-tile *ngIf=\"setlist\">\r\n    <md-card class=\"gd-card\">\r\n      <md-card-header>\r\n        <md-card-title>Setlist</md-card-title>\r\n      </md-card-header>\r\n      <md-card-content>\r\n<!--<div *ngFor=\"let s of setlist\">{{ s.name }}</div> -->\r\n\r\n\r\n  <div *ngFor=\"let s of setlist\">\r\n      <button md-button [mdMenuTriggerFor]=\"setmenu\">{{ s.name }}</button>\r\n      <md-menu #setmenu=\"mdMenu\">\r\n          <div class=\"menu-container\">\r\n          <button md-menu-item *ngFor=\"let e of s.events\" (click)=\"eventSelected(e)\">{{ e.date }} {{ e.location }}</button>\r\n          </div>\r\n        </md-menu>\r\n  </div>\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n  <md-grid-tile *ngIf=\"performers&&performers.length > 0\">\r\n    <md-card class=\"gd-card\">\r\n      <md-card-header>\r\n        <md-card-title>Performers</md-card-title>\r\n      </md-card-header>\r\n      <md-card-content>\r\n\r\n          <md-grid-list [cols]=\"2\">\r\n              <md-grid-tile *ngFor=\"let p of performers\">\r\n                  <div class=\"gallery\">\r\n                    <img src=\"{{ p.thumbnail }}\" (click)=\"openDialog(p.image)\">\r\n                    <div class=\"desc\">{{ p.name }} ({{ p.instruments.join(', ') }}) </div>\r\n                  </div>\r\n                </md-grid-tile>\r\n              </md-grid-list>\r\n          \r\n\r\n        <!--\r\n        <md-grid-list [cols]=\"3\">\r\n          <md-grid-tile *ngFor=\"let i of performerImages\">\r\n            <img src=\"{{ i }}\" width=\"100%\">\r\n          </md-grid-tile>\r\n        </md-grid-list>\r\n        <div *ngFor=\"let p of performers\">{{ p.name }} ({{ p.instruments.join(', ') }})</div>\r\n        <p>-------</p>\r\n        -->\r\n\r\n\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-grid-tile>\r\n  <md-grid-tile *ngIf=\"recordings&&recordings.length > 0\">\r\n    <md-card class=\"gd-card\">\r\n      <md-card-header>\r\n        <md-card-title>Recordings</md-card-title>\r\n      </md-card-header>\r\n      <md-select [(ngModel)]=\"selectedRec\" [style.width]=\"'100%'\" (ngModelChange)=\"recordingSelected()\">\r\n        <md-option *ngFor=\"let r of recordings\" [value]=\"r\">\r\n          {{ r.id }}\r\n        </md-option>\r\n      </md-select>\r\n      <iframe [src]=\"selectedRec.url\" [style.width]=\"'100%'\" height=\"1000\" frameborder=\"0\"></iframe>\r\n\r\n    </md-card>\r\n  </md-grid-tile>\r\n\r\n  <md-grid-tile *ngIf=\"etreeinfo&&etreeinfo.notes != 'n/a'\">\r\n    <md-card class=\"gd-card\">\r\n      <md-card-header>\r\n        <md-card-title>Recording Info</md-card-title>\r\n      </md-card-header>\r\n      <div *ngIf=\"etreeinfo\">\r\n        <h4>ID:<br />{{ etreeinfo.id }}</h4>\r\n        <h4>SOURCE:<br />{{ etreeinfo.source }}</h4>\r\n        <h4>LINEAGE:<br />{{ etreeinfo.lineage }}</h4>\r\n        <h4>NOTES:<br />{{ etreeinfo.notes }}</h4>\r\n        <h4>KEYWORDS:<br />{{ etreeinfo.keywords }}</h4>\r\n      </div>\r\n    </md-card>\r\n  </md-grid-tile>\r\n\r\n\r\n  <md-grid-tile *ngIf=\"etreeinfo&&etreeinfo.tracks != 'n/a'\">\r\n      <md-card class=\"gd-card\">\r\n        <md-card-header>\r\n          <md-card-title>Spectrograms</md-card-title>\r\n        </md-card-header>\r\n        <div *ngFor=\"let e of etreeinfo.tracks; let i = index\">\r\n           <span>track {{i+1}}</span>\r\n           <img md-card-image src=\"{{ 'https://archive.org/download/' + etreeinfo.id + '/' + e + '_spectrogram.png' }}\" (click)=\"openDialog('https://archive.org/download/' + etreeinfo.id + '/' + e + '_spectrogram.png')\">\r\n        </div>\r\n      </md-card>\r\n    </md-grid-tile>\r\n\r\n</md-grid-list>\r\n\r\n<date-axis [events]=\"events\" [onClick]=\"eventSelected.bind(this)\"></date-axis>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dead_api_service__ = __webpack_require__("../../../../../src/app/dead-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modal_component__ = __webpack_require__("../../../../../src/app/modal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppComponent = /** @class */ (function () {
    function AppComponent(dialog, apiService, observableMedia, sanitizer) {
        var _this = this;
        this.dialog = dialog;
        this.apiService = apiService;
        this.observableMedia = observableMedia;
        this.sanitizer = sanitizer;
        this.apiService.getEvents()
            // .then(e => this.events = e.sort())
            .then(function (e) { return _this.events = e.sort(function (a, b) { return parseFloat(a.date) - parseFloat(b.date); }); })
            .then(function () { return _this.eventSelected(_this.events[Math.floor(Math.random() * _this.events.length)]); });
    }
    AppComponent.prototype.ngOnInit = function () {
        var grid = { "xs": 1, "sm": 2, "md": 3, "lg": 4, "xl": 5 };
        this.cols = this.observableMedia.asObservable()
            .map(function (change) { return grid[change.mqAlias]; })
            .startWith(3);
    };
    AppComponent.prototype.eventSelected = function (event) {
        var _this = this;
        this.selectedEvent = event;
        this.apiService.getVenue(event.id).then(function (v) { return _this.venue = v; });
        this.apiService.getPosters(event.id).then(function (p) { return _this.posters = p; });
        this.apiService.getTickets(event.id).then(function (t) { return _this.tickets = t; });
        this.apiService.getLocation(event.id).then(function (l) { return _this.location = l; });
        this.apiService.getWeather(event.id).then(function (w) { return _this.weather = w; });
        this.apiService.getSetlist(event.id).then(function (s) { return _this.setlist = s; });
        this.apiService.getRecordings(event.id).then(function (rs) { return _this.initRecordings(rs); })
            .then(function () { return _this.recordingSelected(); });
        this.apiService.getPerformers(event.id).then(function (p) { return _this.performers = p; })
            .then(function () { return _this.performerImages = _this.performers.map(function (p) { return p.image; }).filter(function (i) { return i; }); });
    };
    AppComponent.prototype.recordingSelected = function () {
        var _this = this;
        this.apiService.getEtreeInfo(this.selectedRec.id).then(function (e) { return _this.etreeinfo = e; });
    };
    AppComponent.prototype.initRecordings = function (ids) {
        var _this = this;
        this.recordings = ids.map(function (r) { return ({ id: r }); });
        this.recordings.forEach(function (r) {
            return r.url = _this.sanitizer.bypassSecurityTrustResourceUrl("https://archive.org/embed/" + r.id + "&playlist=1&list_height=1000");
        });
        this.selectedRec = this.recordings[0];
    };
    AppComponent.prototype.openDialog = function (clickedImage) {
        console.log(clickedImage);
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__modal_component__["a" /* DialogComponent */], {
            panelClass: 'app-custom-dialog',
            data: clickedImage
        });
    };
    var _a, _b, _c, _d;
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__dead_api_service__["a" /* DeadApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__dead_api_service__["a" /* DeadApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["b" /* ObservableMedia */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["b" /* ObservableMedia */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["e" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["e" /* DomSanitizer */]) === "function" && _d || Object])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__date_axis_component__ = __webpack_require__("../../../../../src/app/date-axis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dead_api_service__ = __webpack_require__("../../../../../src/app/dead-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modal_component__ = __webpack_require__("../../../../../src/app/modal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//import { DialogResultExample, DialogResultExampleDialog } from './modal.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            entryComponents: [__WEBPACK_IMPORTED_MODULE_10__modal_component__["a" /* DialogComponent */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__date_axis_component__["a" /* DateAxis */],
                __WEBPACK_IMPORTED_MODULE_10__modal_component__["a" /* DialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdSelectModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyBhBOyzthOjvWKAhax_o1clQYSdoSQIkd4'
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdDialogModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__dead_api_service__["a" /* DeadApiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/date-axis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateAxis; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DateAxis = /** @class */ (function () {
    function DateAxis() {
        var _this = this;
        this.margins = { top: 0, bottom: 0, left: 10, right: 10 };
        this.height = 100;
        this.tooltipText = "";
        this.DATE_LINE_CLASS = "dateline";
        this.eventToDatePoint = function (event) {
            var p = _this.dateScale(new Date(Date.parse(event.date)));
            return !isNaN(p) ? p : 0;
        };
    }
    DateAxis.prototype.ngOnInit = function () {
        this.init();
    };
    DateAxis.prototype.init = function () {
        if (!this.svg) {
            this.element = this.visualsContainer.nativeElement;
            this.updateWidth();
            this.svg = __WEBPACK_IMPORTED_MODULE_1_d3__["a" /* select */](this.element).append('svg')
                .attr('width', this.element.offsetWidth)
                .attr('height', this.height)
                .style("background-color", "black");
            this.updateVisuals();
        }
    };
    DateAxis.prototype.updateWidth = function () {
        this.width = this.element.offsetWidth - this.margins.left - this.margins.right;
    };
    DateAxis.prototype.updateVisuals = function () {
        this.updateAxis();
        this.updateDateLines();
    };
    DateAxis.prototype.updateDateLines = function () {
        var _this = this;
        if (this.events) {
            var dataSelection = this.svg.selectAll("." + this.DATE_LINE_CLASS).data(this.events);
            var lineFunction = __WEBPACK_IMPORTED_MODULE_1_d3__["b" /* line */]().x(function (d) { return d.x; }).y(function (d) { return d.y; });
            dataSelection.enter()
                .append("path")
                .attr("class", this.DATE_LINE_CLASS)
                .attr("d", lineFunction([{ "x": 0, "y": 0 }, { "x": 0, "y": 40 }]))
                .attr("transform", function (e) { return "translate(" + _this.eventToDatePoint(e) + "," + 0 + ")"; })
                //.style("stroke", e => "hsl("+this.eventToDatePoint(e)+", 80%, 50%)")
                .style("stroke", function (e) { return "hsl(100, 0%, 60%)"; })
                .attr("stroke-width", 2)
                .style("opacity", 0.5)
                .on("click", function (e) { return _this.onClick(e); })
                .on("mouseover", function (d) { return _this.tooltipText = d.date + " " + d.location; })
                .on("mouseout", function (d) { return _this.tooltipText = ""; });
            dataSelection
                .transition()
                .attr("transform", function (e) { return "translate(" + _this.eventToDatePoint(e) + "," + 0 + ")"; });
            dataSelection.exit().remove();
        }
    };
    DateAxis.prototype.updateDateTriangles = function () {
        var _this = this;
        if (this.events) {
            var dataSelection = this.svg.selectAll(".path").data(this.events, function (d) { return d.date; });
            var triangle = __WEBPACK_IMPORTED_MODULE_1_d3__["c" /* symbol */]().type(__WEBPACK_IMPORTED_MODULE_1_d3__["d" /* symbolTriangle */]).size(function () { return 800; });
            dataSelection.enter()
                .append("path")
                .attr("d", triangle)
                .attr("transform", function (e) { return "translate(" + _this.eventToDatePoint(e) + "," + _this.height / 2 + ")"; })
                .style("fill", function (e) { return "hsl(" + _this.eventToDatePoint(e) + ", 80%, 50%)"; })
                //.style("opacity", 0.3)
                .on("click", function (e) { return _this.onClick(e); })
                .transition()
                .duration(200); // time of initial growth
            dataSelection
                .transition()
                .duration(200); // time of transition
            dataSelection.exit().remove();
        }
    };
    DateAxis.prototype.updateDateCircles = function () {
        var _this = this;
        if (this.events) {
            var dataSelection = this.svg.selectAll(".circle").data(this.events);
            dataSelection.enter()
                .append("circle")
                .attr("cy", 20)
                .attr("cx", this.eventToDatePoint)
                .attr("r", function () { return 0; })
                .style("fill", function (e) { return "hsl(" + _this.eventToDatePoint(e) + ", 80%, 50%)"; })
                .style("opacity", 0.3)
                .on("click", function (e) { return _this.onClick(e); })
                .transition()
                .duration(200) // time of initial growth
                .attr("cx", this.eventToDatePoint)
                .attr("r", function () { return 8; });
            dataSelection
                .transition()
                .duration(200) // time of transition
                //.style("fill", this.getHsl)
                //.style("opacity", 0.3)
                .attr("cx", this.eventToDatePoint);
            dataSelection.exit().remove();
        }
    };
    DateAxis.prototype.updateAxis = function () {
        if (!this.dateScale) {
            this.dateScale = __WEBPACK_IMPORTED_MODULE_1_d3__["e" /* scaleTime */]()
                .domain([new Date(1965, 1, 1), new Date(1995, 12, 31)])
                .range([this.margins.left, this.width]);
            this.dateAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["f" /* axisBottom */](this.dateScale)
                .tickSize(6, 0)
                .tickFormat(__WEBPACK_IMPORTED_MODULE_1_d3__["g" /* timeFormat */]("%y/%m/%d"));
            var axis = this.svg.append("g")
                .attr("class", "xaxis")
                .attr("transform", "translate(0," + this.height / 2.5 + ")")
                .call(this.dateAxis);
            axis.selectAll("line").style("stroke", "white");
            axis.selectAll("path").style("stroke", "white");
            axis.selectAll("text").style("stroke", "white");
        }
        else {
            this.dateScale.range([this.margins.left, this.width]);
            this.dateAxis.scale(this.dateScale);
            this.svg.selectAll("g.xaxis")
                .attr("transform", "translate(0," + this.height / 2.5 + ")")
                .call(this.dateAxis);
        }
    };
    DateAxis.prototype.ngOnChanges = function (changes) {
        this.init();
        if (changes['events']) {
            this.updateVisuals();
        }
    };
    DateAxis.prototype.onResize = function (event) {
        this.updateWidth();
        this.svg.attr('width', this.element.offsetWidth);
        this.updateVisuals();
    };
    var _a, _b;
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('visuals'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ElementRef */]) === "function" && _a || Object)
    ], DateAxis.prototype, "visualsContainer", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
        __metadata("design:type", Array)
    ], DateAxis.prototype, "events", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
        __metadata("design:type", typeof (_b = typeof Function !== "undefined" && Function) === "function" && _b || Object)
    ], DateAxis.prototype, "onClick", void 0);
    DateAxis = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'date-axis',
            template: '<div mdTooltip="{{tooltipText}}" mdTooltipPosition="above" class="d3-visuals" #visuals (window:resize)="onResize($event)"></div>',
            providers: []
        })
    ], DateAxis);
    return DateAxis;
}());

//# sourceMappingURL=date-axis.component.js.map

/***/ }),

/***/ "../../../../../src/app/dead-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeadApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var DeadApiService = /** @class */ (function () {
    //private API_URL = "http://localhost:8060/";
    function DeadApiService() {
        this.API_URL = "https://grateful-dead-api.herokuapp.com/"; //"http://localhost:8060/";
    }
    DeadApiService.prototype.getEvents = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getJsonFromApi('events')];
            });
        });
    };
    DeadApiService.prototype.getVenue = function (eventId) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getJsonFromApi('venue?event=' + encodeURIComponent(eventId))];
            });
        });
    };
    DeadApiService.prototype.getPosters = function (eventId) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getJsonFromApi('posters?event=' + encodeURIComponent(eventId))];
            });
        });
    };
    DeadApiService.prototype.getTickets = function (eventId) {
        return this.getJsonFromApi('tickets?event=' + encodeURIComponent(eventId));
    };
    DeadApiService.prototype.getLocation = function (eventId) {
        return this.getJsonFromApi('location?event=' + encodeURIComponent(eventId));
    };
    DeadApiService.prototype.getWeather = function (eventId) {
        return this.getJsonFromApi('weather?event=' + encodeURIComponent(eventId));
    };
    DeadApiService.prototype.getSetlist = function (eventId) {
        return this.getJsonFromApi('setlist?event=' + encodeURIComponent(eventId));
    };
    DeadApiService.prototype.getRecordings = function (eventId) {
        return this.getJsonFromApi('recordings?event=' + encodeURIComponent(eventId));
    };
    DeadApiService.prototype.getPerformers = function (eventId) {
        return this.getJsonFromApi('performers?event=' + encodeURIComponent(eventId));
    };
    DeadApiService.prototype.getEtreeInfo = function (recordingId) {
        return this.getJsonFromApi('etreeinfo?recording=' + encodeURIComponent(recordingId));
    };
    DeadApiService.prototype.getFeatureSummary = function (audioUri) {
        return this.getJsonFromApi('featuresummary?audiouri=' + encodeURIComponent(audioUri));
    };
    DeadApiService.prototype.getDiachronicVersionsAudio = function (songName) {
        return this.getJsonFromApi('diachronic?songname=' + encodeURIComponent(songName));
    };
    DeadApiService.prototype.getJsonFromApi = function (path) {
        return fetch(this.API_URL + path)
            .then(function (r) { return r.text(); })
            .then(function (t) { return JSON.parse(t); })
            .catch(function (e) { return console.log(e); });
    };
    DeadApiService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DeadApiService);
    return DeadApiService;
}());

//# sourceMappingURL=dead-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    var _a;
    DialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'img-dialog',
            template: "<img src=\"{{ data }}\" style=\"max-height:100%;max-width:100%;\" img>"
        }),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MD_DIALOG_DATA */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdDialogRef */]) === "function" && _a || Object, Object])
    ], DialogComponent);
    return DialogComponent;
}());

//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/assets/tie-dye.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tie-dye.44b109efbcaf5ee7fab6.jpg";

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
    production: false
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map