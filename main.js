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
/* harmony import */ var _views_show_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/show.component */ "./src/app/views/show.component.ts");
/* harmony import */ var _views_location_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/location.component */ "./src/app/views/location.component.ts");
/* harmony import */ var _views_venue_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/venue.component */ "./src/app/views/venue.component.ts");
/* harmony import */ var _views_song_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/song.component */ "./src/app/views/song.component.ts");
/* harmony import */ var _views_recording_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/recording.component */ "./src/app/views/recording.component.ts");
/* harmony import */ var _views_artist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/artist.component */ "./src/app/views/artist.component.ts");
/* harmony import */ var _views_artifacts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/artifacts.component */ "./src/app/views/artifacts.component.ts");
/* harmony import */ var _views_mapselect_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/mapselect.component */ "./src/app/views/mapselect.component.ts");
/* harmony import */ var _views_start_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/start.component */ "./src/app/views/start.component.ts");












var routes = [
    { path: '', redirectTo: '/start', pathMatch: 'full' },
    { path: 'show', component: _views_show_component__WEBPACK_IMPORTED_MODULE_3__["ShowComponent"] },
    { path: 'show/:id', component: _views_show_component__WEBPACK_IMPORTED_MODULE_3__["ShowComponent"] },
    { path: 'location', component: _views_location_component__WEBPACK_IMPORTED_MODULE_4__["LocationComponent"] },
    { path: 'location/:id', component: _views_location_component__WEBPACK_IMPORTED_MODULE_4__["LocationComponent"] },
    { path: 'venue', component: _views_venue_component__WEBPACK_IMPORTED_MODULE_5__["VenueComponent"] },
    { path: 'venue/:id', component: _views_venue_component__WEBPACK_IMPORTED_MODULE_5__["VenueComponent"] },
    { path: 'song', component: _views_song_component__WEBPACK_IMPORTED_MODULE_6__["SongComponent"] },
    { path: 'song/:id', component: _views_song_component__WEBPACK_IMPORTED_MODULE_6__["SongComponent"] },
    { path: 'recording', component: _views_recording_component__WEBPACK_IMPORTED_MODULE_7__["RecordingComponent"] },
    { path: 'recording/:id', component: _views_recording_component__WEBPACK_IMPORTED_MODULE_7__["RecordingComponent"] },
    { path: 'artist', component: _views_artist_component__WEBPACK_IMPORTED_MODULE_8__["ArtistComponent"] },
    { path: 'artist/:id', component: _views_artist_component__WEBPACK_IMPORTED_MODULE_8__["ArtistComponent"] },
    { path: 'artifacts', component: _views_artifacts_component__WEBPACK_IMPORTED_MODULE_9__["ArtifactsComponent"] },
    { path: 'artifacts/:types', component: _views_artifacts_component__WEBPACK_IMPORTED_MODULE_9__["ArtifactsComponent"] },
    { path: 'mapselect', component: _views_mapselect_component__WEBPACK_IMPORTED_MODULE_10__["MapSelectComponent"] },
    { path: 'start', component: _views_start_component__WEBPACK_IMPORTED_MODULE_11__["StartComponent"] }
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlexFill>\n  <div fxFlex><router-outlet></router-outlet></div>\n  <footer *ngIf=\"!start\"><gd-player></gd-player></footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        router.events.forEach(function (event) {
            if (router.url.includes('/start')) {
                _this.start = true;
            }
            else {
                _this.start = false;
            }
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm5/ng-lazyload-image.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_show_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/show.component */ "./src/app/views/show.component.ts");
/* harmony import */ var _views_location_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/location.component */ "./src/app/views/location.component.ts");
/* harmony import */ var _views_venue_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/venue.component */ "./src/app/views/venue.component.ts");
/* harmony import */ var _views_song_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/song.component */ "./src/app/views/song.component.ts");
/* harmony import */ var _views_recording_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/recording.component */ "./src/app/views/recording.component.ts");
/* harmony import */ var _views_artist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/artist.component */ "./src/app/views/artist.component.ts");
/* harmony import */ var _views_artifacts_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/artifacts.component */ "./src/app/views/artifacts.component.ts");
/* harmony import */ var _views_mapselect_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/mapselect.component */ "./src/app/views/mapselect.component.ts");
/* harmony import */ var _views_start_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/start.component */ "./src/app/views/start.component.ts");
/* harmony import */ var _shared_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/header.component */ "./src/app/shared/header.component.ts");
/* harmony import */ var _shared_map_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/map.component */ "./src/app/shared/map.component.ts");
/* harmony import */ var _shared_weather_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/weather.component */ "./src/app/shared/weather.component.ts");
/* harmony import */ var _shared_shows_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/shows.component */ "./src/app/shared/shows.component.ts");
/* harmony import */ var _shared_player_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/player.component */ "./src/app/shared/player.component.ts");
/* harmony import */ var _shared_list_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/list-dialog.component */ "./src/app/shared/list-dialog.component.ts");
/* harmony import */ var _shared_search_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/search-dialog.component */ "./src/app/shared/search-dialog.component.ts");
/* harmony import */ var _shared_showmap_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/showmap.component */ "./src/app/shared/showmap.component.ts");
/* harmony import */ var _services_dead_api_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/dead-api.service */ "./src/app/services/dead-api.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _views_show_component__WEBPACK_IMPORTED_MODULE_12__["ShowComponent"],
                _views_location_component__WEBPACK_IMPORTED_MODULE_13__["LocationComponent"],
                _views_venue_component__WEBPACK_IMPORTED_MODULE_14__["VenueComponent"],
                _views_song_component__WEBPACK_IMPORTED_MODULE_15__["SongComponent"],
                _views_recording_component__WEBPACK_IMPORTED_MODULE_16__["RecordingComponent"],
                _views_artist_component__WEBPACK_IMPORTED_MODULE_17__["ArtistComponent"],
                _views_artifacts_component__WEBPACK_IMPORTED_MODULE_18__["ArtifactsComponent"],
                _shared_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"],
                _shared_map_component__WEBPACK_IMPORTED_MODULE_22__["MapComponent"],
                _shared_weather_component__WEBPACK_IMPORTED_MODULE_23__["WeatherComponent"],
                _shared_shows_component__WEBPACK_IMPORTED_MODULE_24__["ShowsComponent"],
                _shared_player_component__WEBPACK_IMPORTED_MODULE_25__["PlayerComponent"],
                _shared_list_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ListDialogComponent"],
                _shared_search_dialog_component__WEBPACK_IMPORTED_MODULE_27__["SearchDialogComponent"],
                _shared_showmap_component__WEBPACK_IMPORTED_MODULE_28__["ShowMapComponent"],
                _views_mapselect_component__WEBPACK_IMPORTED_MODULE_19__["MapSelectComponent"],
                _views_start_component__WEBPACK_IMPORTED_MODULE_20__["StartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__["LazyLoadImageModule"],
                _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_9__["LeafletModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"]
            ],
            providers: [
                _services_dead_api_service__WEBPACK_IMPORTED_MODULE_29__["DeadApiService"],
                _services_data_service__WEBPACK_IMPORTED_MODULE_30__["DataService"],
                _services_player_service__WEBPACK_IMPORTED_MODULE_31__["PlayerService"],
                _services_dialog_service__WEBPACK_IMPORTED_MODULE_32__["DialogService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_33__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_33__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
            entryComponents: [_shared_list_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ListDialogComponent"], _shared_search_dialog_component__WEBPACK_IMPORTED_MODULE_27__["SearchDialogComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: VIEWS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWS", function() { return VIEWS; });
var VIEWS = [
    { name: "Shows", url: "/show" },
    { name: "Locations", url: "/location" },
    { name: "Venues", url: "/venue" },
    { name: "Songs", url: "/song" },
    { name: "Recording", url: "/recording" },
    { name: "Artists", url: "/artist" },
    { name: "Artifacts", url: "/artifacts" },
    { name: "Map", url: "/mapselect" },
    { name: "Start Page", url: "/start" },
];


/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dead_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dead-api.service */ "./src/app/services/dead-api.service.ts");




var ARCHIVE_URI = 'https://archive.org/download/';
var DataService = /** @class */ (function () {
    function DataService(apiService) {
        this.apiService = apiService;
        this.loading = this.initEvents();
    }
    DataService.prototype.getEventInfo = function (eventId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getEventInfos([eventId])];
                    case 1: return [2 /*return*/, (_a.sent())[0]];
                }
            });
        });
    };
    DataService.prototype.getEventInfos = function (eventIds) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!eventIds) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loading];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.events.filter(function (e) { return eventIds.indexOf(e.id) >= 0; })];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    DataService.prototype.getEventDetails = function (eventId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.apiService.getEventDetails(eventId)];
                    case 1:
                        _a.event = _b.sent();
                        return [2 /*return*/, this.event];
                }
            });
        });
    };
    DataService.prototype.getLocation = function (locationId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiService.getLocation(locationId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DataService.prototype.getVenue = function (venueId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiService.getVenue(venueId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DataService.prototype.getVenueCoordinates = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.apiService.getVenueCoordinates()];
            });
        });
    };
    DataService.prototype.getTourCoordinates = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.apiService.getTourCoordinates()];
            });
        });
    };
    DataService.prototype.getArtistDetails = function (artistId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.apiService.getArtistDetails(artistId)];
            });
        });
    };
    DataService.prototype.getSong = function (songId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.apiService.getSong(songId)];
            });
        });
    };
    DataService.prototype.getEventInfoForRecording = function (recordingId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.events.filter(function (e) { return e.recordings.some(function (r) { return r.id === recordingId; }); })[0]];
                }
            });
        });
    };
    DataService.prototype.getRecording = function (recordingId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.apiService.getRecordingDetails(recordingId)];
            });
        });
    };
    DataService.prototype.getRecordingTracks = function (recording, event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var tracks;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiService.getRecordingTracks(recording.id)];
                    case 1:
                        tracks = _a.sent();
                        console.log(tracks);
                        return [2 /*return*/, tracks.map(function (t) { return _this.toTrack(event, recording.etreeId, t); })];
                }
            });
        });
    };
    DataService.prototype.getTrackFromAudio = function (audio, event, etreeId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.toTrack(event, etreeId, audio)];
            });
        });
    };
    DataService.prototype.getTrack = function (song, event, etreeId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var songDetails, sbd;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiService.getSong(song.id)];
                    case 1:
                        songDetails = _a.sent();
                        if (!etreeId) {
                            sbd = event.recordings.filter(function (r) { return r.isSoundboard; });
                            etreeId = sbd.length ? sbd[0].etreeId : lodash__WEBPACK_IMPORTED_MODULE_1__["sample"](event.recordings).etreeId;
                        }
                        return [2 /*return*/, this.getTracks(songDetails, event, etreeId)[0]];
                }
            });
        });
    };
    DataService.prototype.getTracks = function (song, event, etreeId) {
        var _this = this;
        return song.audio && song.audio[etreeId] ?
            song.audio[etreeId].map(function (a) { return _this.toTrack(event, etreeId, a); }) : [];
    };
    DataService.prototype.loadRandomEvent = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.getEventDetails;
                        return [4 /*yield*/, this.getRandomEventId()];
                    case 1: return [4 /*yield*/, _a.apply(this, [_b.sent()])];
                    case 2: return [2 /*return*/, (_b.sent())];
                }
            });
        });
    };
    DataService.prototype.getRandomEventId = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.events[Math.floor(Math.random() * this.events.length)].id];
                }
            });
        });
    };
    DataService.prototype.getRandomVenue = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadRandomEvent()];
                    case 1: return [2 /*return*/, (_a.sent()).venue];
                }
            });
        });
    };
    DataService.prototype.getRandomLocation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadRandomEvent()];
                    case 1: return [2 /*return*/, (_a.sent()).location];
                }
            });
        });
    };
    DataService.prototype.getRandomArtifacts = function (types, count) {
        if (count === void 0) { count = 20; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var artifacts;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading];
                    case 1:
                        _a.sent();
                        artifacts = lodash__WEBPACK_IMPORTED_MODULE_1__["flatten"](this.events.map(function (e) { return e.artifacts.map(function (a) {
                            return Object.assign(a, { eventInfo: e.venue + ", " + e.location + ", " + e.date });
                        }); }));
                        if (types) {
                            artifacts = artifacts.filter(function (a) { return types.indexOf(a.type) >= 0; });
                        }
                        return [2 /*return*/, lodash__WEBPACK_IMPORTED_MODULE_1__["sampleSize"](artifacts, count)];
                }
            });
        });
    };
    DataService.prototype.getRandomArtistId = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, lodash__WEBPACK_IMPORTED_MODULE_1__["sample"](this.event.performers).id];
                }
            });
        });
    };
    DataService.prototype.getRandomRecording = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var randomEvent, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.getEventInfo;
                        return [4 /*yield*/, this.getRandomEventId()];
                    case 1: return [4 /*yield*/, _a.apply(this, [_b.sent()])];
                    case 2:
                        randomEvent = _b.sent();
                        return [2 /*return*/, this.apiService.getRecordingDetails(lodash__WEBPACK_IMPORTED_MODULE_1__["sample"](randomEvent.recordings).id)];
                }
            });
        });
    };
    DataService.prototype.getRandomSetlist = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = this.apiService).getSetlist;
                        return [4 /*yield*/, this.getRandomEventId()];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    DataService.prototype.getRandomSong = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var randomSong, _a, _b, _c, _d;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _b = (_a = lodash__WEBPACK_IMPORTED_MODULE_1__).sample;
                        _d = (_c = lodash__WEBPACK_IMPORTED_MODULE_1__).sample;
                        return [4 /*yield*/, this.getRandomSetlist()];
                    case 1:
                        randomSong = _b.apply(_a, [_d.apply(_c, [_e.sent()]).songs]);
                        console.log(randomSong);
                        return [2 /*return*/, this.apiService.getSong(randomSong.id)];
                }
            });
        });
    };
    DataService.prototype.getRandomTrack = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var randomSong, randomRecordingId, randomAudio, correspondingEvent;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRandomSong()];
                    case 1:
                        randomSong = _a.sent();
                        randomRecordingId = lodash__WEBPACK_IMPORTED_MODULE_1__["sample"](lodash__WEBPACK_IMPORTED_MODULE_1__["keys"](randomSong.audio));
                        randomAudio = lodash__WEBPACK_IMPORTED_MODULE_1__["sample"](randomSong.audio[randomRecordingId]);
                        correspondingEvent = this.events.filter(function (e) {
                            return e.recordings.map(function (r) { return r.etreeId; }).indexOf(randomRecordingId) >= 0;
                        })[0];
                        return [2 /*return*/, this.toTrack(correspondingEvent, randomRecordingId, randomAudio)];
                }
            });
        });
    };
    DataService.prototype.toTrack = function (event, etreeId, audio) {
        var uri = ARCHIVE_URI + etreeId + '/' + audio.filename;
        return {
            title: audio.title + ", " + event.venue + ", "
                + event.location + ", " + event.date,
            uri: uri,
            waveform: uri.replace('.mp3', '.png')
        };
    };
    DataService.prototype.initEvents = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.apiService.getEvents()];
                    case 1:
                        _a.events = _b.sent();
                        this.events.sort(function (a, b) { return parseFloat(a.date.replace(/-/g, ''))
                            - parseFloat(b.date.replace(/-/g, '')); });
                        return [2 /*return*/];
                }
            });
        });
    };
    DataService.prototype.formatDate = function (date) {
        return new Date(date).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    };
    DataService.prototype.formatDates = function (objects) {
        var _this = this;
        objects.forEach(function (o) { return o.date = _this.formatDate(o.date); });
    };
    DataService.prototype.getSearchResult = function (q) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.apiService.getSearchResult(q)];
            });
        });
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dead_api_service__WEBPACK_IMPORTED_MODULE_3__["DeadApiService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/dead-api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/dead-api.service.ts ***!
  \**********************************************/
/*! exports provided: DeadApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeadApiService", function() { return DeadApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeadApiService = /** @class */ (function () {
    //private API_URL = "http://localhost:8060/";
    function DeadApiService() {
        this.API_URL = "https://grateful-dead-api.herokuapp.com/";
    }
    DeadApiService.prototype.getEvents = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.getJsonFromApi('events')];
            });
        });
    };
    DeadApiService.prototype.getVenueCoordinates = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.getJsonFromApi('coordinates')];
            });
        });
    };
    DeadApiService.prototype.getTourCoordinates = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.getJsonFromApi('tours')];
            });
        });
    };
    DeadApiService.prototype.getEventDetails = function (eventId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.getJsonFromApi('details?event=' + encodeURIComponent(eventId))];
            });
        });
    };
    DeadApiService.prototype.getLocation = function (locationId) {
        return this.getJsonFromApi('location?id=' + encodeURIComponent(locationId));
    };
    DeadApiService.prototype.getVenue = function (venueId) {
        return this.getJsonFromApi('venue?id=' + encodeURIComponent(venueId));
    };
    DeadApiService.prototype.getSetlist = function (eventId) {
        return this.getJsonFromApi('setlist?event=' + encodeURIComponent(eventId));
    };
    DeadApiService.prototype.getSong = function (songId) {
        return this.getJsonFromApi('song?id=' + encodeURIComponent(songId));
    };
    DeadApiService.prototype.getRecordingDetails = function (recordingId) {
        return this.getJsonFromApi('recording?id=' + encodeURIComponent(recordingId));
    };
    DeadApiService.prototype.getRecordingTracks = function (recordingId) {
        return this.getJsonFromApi('tracks?id=' + encodeURIComponent(recordingId));
    };
    DeadApiService.prototype.getArtistDetails = function (artistId) {
        return this.getJsonFromApi('artist?id=' + encodeURIComponent(artistId));
    };
    DeadApiService.prototype.getFeatureSummary = function (audioUri) {
        return this.getJsonFromApi('featuresummary?audiouri=' + encodeURIComponent(audioUri));
    };
    DeadApiService.prototype.getDiachronicVersionsAudio = function (songName, count, skip) {
        if (count === void 0) { count = 100; }
        if (skip === void 0) { skip = 0; }
        return this.getJsonFromApi('diachronic?songname=' + encodeURIComponent(songName)
            + "&count=" + count + "&skip=" + skip);
    };
    DeadApiService.prototype.getJsonFromApi = function (path) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, fetch(this.API_URL + path)
                        .then(function (r) { return r.text(); })
                        .then(function (t) { return JSON.parse(t); })
                        .catch(function (e) { return console.log(e); })];
            });
        });
    };
    DeadApiService.prototype.getSearchResult = function (q) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.getJsonFromApi('search?q=' + encodeURIComponent(q))];
            });
        });
    };
    DeadApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeadApiService);
    return DeadApiService;
}());



/***/ }),

/***/ "./src/app/services/dialog.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/dialog.service.ts ***!
  \********************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _shared_list_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/list-dialog.component */ "./src/app/shared/list-dialog.component.ts");




var DialogService = /** @class */ (function () {
    function DialogService(dialog) {
        this.dialog = dialog;
    }
    DialogService.prototype.openMultiFunction = function (title, options, funcs) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.open(title, options).subscribe(function (result) {
                    return funcs[options.indexOf(result)]();
                });
                return [2 /*return*/];
            });
        });
    };
    DialogService.prototype.openSingleFunction = function (title, options, func) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.open(title, options).subscribe(function (result) { return func(result); });
                return [2 /*return*/];
            });
        });
    };
    DialogService.prototype.open = function (title, options) {
        return this.dialog.open(_shared_list_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ListDialogComponent"], this.getDialogConfig(title, options)).afterClosed();
    };
    DialogService.prototype.getDialogConfig = function (title, items) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.data = { title: title, items: items };
        return dialogConfig;
    };
    DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/services/player.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/player.service.ts ***!
  \********************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlayerService = /** @class */ (function () {
    function PlayerService() {
        this.maxTime = 0;
        this.currentTime = 0;
        this.playlist = [];
        this.currentTrackIndex = 0;
        this.muted = false;
    }
    PlayerService.prototype.addToPlaylist = function (track) {
        this.playlist.push(track);
    };
    PlayerService.prototype.getCurrentTrack = function () {
        return this.playlist[this.currentTrackIndex]
            || { title: "", uri: "", waveform: "" };
    };
    PlayerService.prototype.skipToTrack = function (track) {
        this.skipToTrackAtIndex(this.playlist.indexOf(track));
    };
    PlayerService.prototype.play = function () {
        if (this.currentAudio) {
            this.currentAudio.paused ? this.pause() : null;
        }
        else {
            this.playPlaylist();
        }
    };
    PlayerService.prototype.pause = function () {
        if (this.currentAudio) {
            this.currentAudio.paused ?
                this.currentAudio.play() : this.currentAudio.pause();
        }
    };
    PlayerService.prototype.stop = function () {
        if (this.currentAudio) {
            this.reset();
        }
    };
    PlayerService.prototype.setTime = function (time) {
        if (this.currentAudio && time != Math.floor(this.currentAudio.currentTime)) {
            this.currentAudio.currentTime = time;
        }
    };
    PlayerService.prototype.toggleMute = function () {
        this.muted = !this.muted;
        if (this.currentAudio) {
            this.currentAudio.muted = this.muted;
        }
    };
    PlayerService.prototype.isMuted = function () {
        return this.muted;
    };
    PlayerService.prototype.nextTrack = function () {
        if (this.playlist.length) {
            this.skipToTrackAtIndex((this.currentTrackIndex + 1) % this.playlist.length);
        }
    };
    PlayerService.prototype.previousTrack = function () {
        if (this.playlist.length) {
            this.skipToTrackAtIndex((this.currentTrackIndex - 1) % this.playlist.length);
        }
    };
    PlayerService.prototype.skipToTrackAtIndex = function (index) {
        this.currentTrackIndex = index;
        if (this.currentAudio) {
            this.stop();
            this.play();
        }
    };
    PlayerService.prototype.playPlaylist = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.currentTrackIndex < this.playlist.length)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.playCurrentTrack()];
                    case 1:
                        _a.sent();
                        this.currentTrackIndex++;
                        this.playPlaylist();
                        return [3 /*break*/, 3];
                    case 2:
                        this.reset();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayerService.prototype.playCurrentTrack = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var audio;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                audio = new Audio(this.playlist[this.currentTrackIndex].uri);
                audio.muted = this.muted;
                audio.play();
                this.currentAudio = audio;
                audio.ontimeupdate = function () {
                    _this.maxTime = audio.duration;
                    _this.currentTime = audio.currentTime;
                };
                return [2 /*return*/, new Promise(function (resolve) { return audio.onended = resolve; })];
            });
        });
    };
    PlayerService.prototype.reset = function () {
        this.currentAudio.ontimeupdate = null;
        this.currentAudio.pause();
        this.currentAudio = null;
        this.currentTime = 0;
    };
    PlayerService.prototype.volume = function (v) {
        if (this.currentAudio) {
            this.currentAudio.volume = v / 100;
        }
    };
    PlayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/app/services/types.ts":
/*!***********************************!*\
  !*** ./src/app/services/types.ts ***!
  \***********************************/
/*! exports provided: ArtifactType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtifactType", function() { return ArtifactType; });
var ArtifactType;
(function (ArtifactType) {
    ArtifactType["Ticket"] = "ticket";
    ArtifactType["Poster"] = "poster";
    ArtifactType["Pass"] = "backstage pass";
    ArtifactType["Photo"] = "photo";
    ArtifactType["Envelope"] = "envelope";
    ArtifactType["Tshirt"] = "T-shirt";
    ArtifactType["Fanart"] = "fan art";
})(ArtifactType || (ArtifactType = {}));
;


/***/ }),

/***/ "./src/app/shared/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/shared/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"title\" fxLayout=\"row\" fxLayout.xs=\"column\"\n    [style.background-color]=\"'#ededed'\" [style.background-size]=\"'cover'\"\n    [style.background-position]=\"'center'\" [style.padding]=\"'3px'\">\n  <div class=\"container\" fxLayout=\"column\" fxFlex=\"1 1 auto\">\n    <span>\n        <button mat-button [matMenuTriggerFor]=\"menu\"><img src=\"assets/gd_logo2.png\" height=\"25\"></button>\n        <mat-menu #menu=\"matMenu\">\n          <!-- <button *ngFor=\"let v of views\" mat-menu-item [routerLink]=\"[v.url]\">{{v.name}}</button> -->\n          <button mat-menu-item routerLink=\"/mapselect\">Concert Map</button>\n          <button mat-menu-item routerLink=\"/start\">Start Page</button>\n        </mat-menu>\n    </span>\n  </div>\n\n\n  <div class=\"container hf1\" fxLayout=\"column\" fxFlex=\"1 1 auto\" [style.padding]=\"'4px'\">\n    <span>\n      {{ title }} – {{ subtitle }}\n    </span>\n    \n  </div>\n  <!--<div fxFlex=\"5 1 auto\"></div>-->\n  <ng-content></ng-content>\n\n  <p *ngIf=\"!searchState\" [style.margin-right]=\"'25px'\"></p>\n  <div *ngIf=\"searchState\" [style.margin-top]=\"'8px'\" [style.margin-right]=\"'5px'\"><mat-spinner diameter=\"20\"></mat-spinner></div>\n  <input [disabled]=\"searchState==1\" #searchfield placeholder=\"Search\" (keydown.enter)=\"onSubmit(searchfield.value)\">\n  \n\n \n\n</div>"

/***/ }),

/***/ "./src/app/shared/header.component.sass":
/*!**********************************************!*\
  !*** ./src/app/shared/header.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hf1 {\n  color: #242424; }\n\n#overlay {\n  position: fixed;\n  /* Sit on top of the page content */\n  display: none;\n  /* Hidden by default */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 2;\n  /* Specify a stack order in case you're using a different order for other elements */\n  cursor: pointer;\n  /* Add a pointer on hover */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0pvdXJuYWwvcHJvamVjdHMvZ3JhdGVmdWxfZGVhZF8yMDE5X2dpdC93ZWItYXBwMi9zcmMvYXBwL3NoYXJlZC9oZWFkZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZUFBZTtFQUNmLG1DQUFBO0VBQ0EsYUFBYTtFQUNiLHNCQUFBO0VBQ0EsV0FBVztFQUNYLHNDQUFBO0VBQ0EsWUFBWTtFQUNaLHVDQUFBO0VBQ0EsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULG9DQUFvQztFQUNwQyxrQ0FBQTtFQUNBLFVBQVU7RUFDVixvRkFBQTtFQUNBLGVBQWU7RUFDZiwyQkFBQSxFQUE0QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGYxIHtcbiAgLy8gY29sb3I6ICMyYTM5OGFcbiAgY29sb3I6ICMyNDI0MjQ7XG4gfSAgLy9mb250LWZhbWlseTogSW1wYWN0LCBDaGFyY29hbCwgc2Fucy1zZXJpZlxuXG4jb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gIGRpc3BsYXk6IG5vbmU7XG4gIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICB6LWluZGV4OiAyO1xuICAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLyogQWRkIGEgcG9pbnRlciBvbiBob3ZlciAqLyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/shared/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_search_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/search-dialog.component */ "./src/app/shared/search-dialog.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");




//import * as Fuse from 'fuse.js';



//declare var require: any;
//const searchjson = require("../../assets/search.json");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sanitizer, titleService, dialog, data) {
        this.sanitizer = sanitizer;
        this.titleService = titleService;
        this.dialog = dialog;
        this.data = data;
        this.views = _globals__WEBPACK_IMPORTED_MODULE_3__["VIEWS"];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.searchState = 0;
        this.image = this.sanitizer.bypassSecurityTrustStyle('url(' + this.imageUrl + ')');
        this.titleService.setTitle('Grateful Live - ' + this.title + ', ' + this.subtitle);
    };
    HeaderComponent.prototype.onSubmit = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(e);
                        this.searchState = 1;
                        return [4 /*yield*/, this.data.getSearchResult(e)];
                    case 1:
                        result = _a.sent();
                        if (result.length > 0) {
                            this.openDialog(result, e);
                        }
                        this.searchState = 0;
                        return [2 /*return*/];
                }
            });
        });
    };
    HeaderComponent.prototype.openDialog = function (r, s) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.position = { right: '0', top: '0' };
        dialogConfig.maxHeight = 400;
        dialogConfig.data = {
            id: 1,
            result: r,
            searchString: s
        };
        //dialogConfig.disableClose = true;
        //dialogConfig.autoFocus = true;
        this.dialog.open(_shared_search_dialog_component__WEBPACK_IMPORTED_MODULE_5__["SearchDialogComponent"], dialogConfig);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HeaderComponent.prototype, "imageUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HeaderComponent.prototype, "subtitle", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.sass */ "./src/app/shared/header.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/list-dialog.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/list-dialog.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--h1 mat-dialog-title>{{data.title}}</h1-->\n<div mat-dialog-content>\n  <p class=\"mat-dialog-title\" >{{data.title}}</p>\n  <button *ngFor=\"let i of data.items\" (click)=\"onItemClick(i)\"\n    [style.margin-bottom]=\"'5px'\">{{ i }}</button>\n</div>\n<!--div mat-dialog-actions>\n  <button mat-button (click)=\"onCancelClick()\">Cancel</button>\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Ok</button>\n</div-->"

/***/ }),

/***/ "./src/app/shared/list-dialog.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/list-dialog.component.ts ***!
  \*************************************************/
/*! exports provided: ListDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDialogComponent", function() { return ListDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var ListDialogComponent = /** @class */ (function () {
    function ListDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ListDialogComponent.prototype.onCancelClick = function () {
        this.dialogRef.close();
    };
    ListDialogComponent.prototype.onItemClick = function (item) {
        this.dialogRef.close(item);
    };
    ListDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'list-dialog',
            template: __webpack_require__(/*! ./list-dialog.component.html */ "./src/app/shared/list-dialog.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ListDialogComponent);
    return ListDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/map.component.html":
/*!*******************************************!*\
  !*** ./src/app/shared/map.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map\" leaflet [leafletOptions]=\"options\"></div>"

/***/ }),

/***/ "./src/app/shared/map.component.sass":
/*!*******************************************!*\
  !*** ./src/app/shared/map.component.sass ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0pvdXJuYWwvcHJvamVjdHMvZ3JhdGVmdWxfZGVhZF8yMDE5X2dpdC93ZWItYXBwMi9zcmMvYXBwL3NoYXJlZC9tYXAuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21hcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/map.component.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/map.component.ts ***!
  \*****************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);



var MapComponent = /** @class */ (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
        this.options = {
            layers: [
                //tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"])('https://a.tiles.mapbox.com/v3/smmaurer.k59p72bl/{z}/{x}/{y}.png', { maxZoom: 17, attribution: '...' }),
                Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"])([this.latitude, this.longitude], {
                    icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"])({
                        iconSize: [25, 41],
                        iconAnchor: [13, 41],
                        iconUrl: 'assets/marker-icon-2x.png',
                    })
                })
            ],
            zoom: this.zoom,
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"])(this.latitude, this.longitude)
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MapComponent.prototype, "latitude", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MapComponent.prototype, "longitude", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MapComponent.prototype, "zoom", void 0);
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/shared/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.sass */ "./src/app/shared/map.component.sass")]
        })
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/shared/player.component.html":
/*!**********************************************!*\
  !*** ./src/app/shared/player.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" [style.height]=\"loaded && !minimized ? '120px' : '20px'\">\n  <img *ngIf=\"player.getCurrentTrack().waveform\" class=\"image\"\n    [lazyLoad]=\"player.getCurrentTrack().waveform\" [style.height]=\"'100px'\"\n    [class.flashy]=\"loaded\" (load)=\"loaded = true\" [hidden]=\"minimized\">\n  <input type=\"range\" min=\"0\" max=\"{{player.maxTime}}\"\n    [(ngModel)]=\"player.currentTime\" (ngModelChange)=\"player.setTime($event)\"/>\n</div>\n<div fxLayout=\"row\">\n  <button mat-flat-button fxFlex (click)=\"player.play()\">\n    <mat-icon>play_arrow</mat-icon></button>\n  <button mat-flat-button fxFlex (click)=\"player.pause()\">\n    <mat-icon>pause</mat-icon></button>\n  <button mat-flat-button fxFlex (click)=\"player.stop()\">\n    <mat-icon>stop</mat-icon></button>\n  <button mat-flat-button fxFlex (click)=\"player.previousTrack()\">\n    <mat-icon>skip_previous</mat-icon></button>\n  <button mat-flat-button fxFlex (click)=\"player.nextTrack()\">\n    <mat-icon>skip_next</mat-icon></button>\n  <button mat-flat-button fxFlex (click)=\"player.toggleMute()\">\n    <mat-icon>{{player.muted ? 'volume_up' : 'volume_off'}}</mat-icon></button>\n  <!-- <button mat-flat-button fxFlex (click)=\"addRandomTrack()\">\n    <mat-icon>playlist_add</mat-icon></button> -->\n  <button mat-flat-button fxFlex (click)=\"minimized = !minimized\">\n    <mat-icon>{{minimized ? 'visibility' : 'visibility_off'}}</mat-icon></button>\n  <mat-slider type=\"range\" min=\"0\" max=\"100\" value=\"100\" step=\"1\" (input)=\"volumeChange($event.value)\"></mat-slider>\n</div>\n\n<div  fxLayout=\"column\">\n  <div class=\"playlist\" *ngFor=\"let s of player.playlist\"\n      [hidden]=\"minimized && s !== player.getCurrentTrack()\"\n      [style.color]=\"s === player.getCurrentTrack() ? '#3d3d3d' : 'grey'\"\n      (click)=\"player.skipToTrack(s)\">\n    {{s.title}}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/player.component.sass":
/*!**********************************************!*\
  !*** ./src/app/shared/player.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  background-color: #fcfcfc;\n  border: 1px solid #3d3d3d;\n  color: #3d3d3d;\n  text-align: center; }\n\nbutton:focus {\n  outline: 0; }\n\nbutton:active {\n  background: #3d3d3d; }\n\n.playlist {\n  font-size: 80%; }\n\n.flashy {\n  background-image: linear-gradient(to bottom right, #2a398a, #dc3030); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0pvdXJuYWwvcHJvamVjdHMvZ3JhdGVmdWxfZGVhZF8yMDE5X2dpdC93ZWItYXBwMi9zcmMvYXBwL3NoYXJlZC9wbGF5ZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxVQUFVLEVBQUE7O0FBRVo7RUFDRSxtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxjQUFjLEVBQUE7O0FBRWhCO0VBQ0Usb0VBQW9FLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcGxheWVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcbiAgYm9yZGVyOiAxcHggc29saWQgIzNkM2QzZDtcbiAgY29sb3I6ICMzZDNkM2Q7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiAwOyB9XG5cbmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjM2QzZDNkOyB9XG5cbi5wbGF5bGlzdCB7XG4gIGZvbnQtc2l6ZTogODAlOyB9XG5cbi5mbGFzaHkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMmEzOThhLCAjZGMzMDMwKTsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/shared/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");




var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(player, data) {
        this.player = player;
        this.data = data;
        this.loaded = false;
        this.minimized = false;
    }
    PlayerComponent.prototype.addRandomTrack = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = this.player).addToPlaylist;
                        return [4 /*yield*/, this.data.getRandomTrack()];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayerComponent.prototype.volumeChange = function (v) {
        this.player.volume(v);
    };
    PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/shared/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.sass */ "./src/app/shared/player.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/shared/search-dialog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/search-dialog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"left\">  <b>{{searchString}}</b></div>\n\n<div class=\"type\" *ngIf=\"result.song.length != 0\">Songs:</div>\n<div class=\"result\" *ngFor=\"let r of result.song, let i = index\">\n  <span style=\"cursor:pointer\" [routerLink]=\"['/song', r[1]]\"> {{r[0]}}</span>\n</div>\n\n<div class=\"type\" *ngIf=\"result.venue.length != 0\">Venues:</div>\n<div class=\"result\" *ngFor=\"let r of result.venue, let i = index\">\n  <span style=\"cursor:pointer\" [routerLink]=\"['/venue', r[1]]\"> {{r[0]}}</span>\n</div>\n\n<div class=\"type\" *ngIf=\"result.show.length != 0\">Shows:</div>\n<div class=\"result\" *ngFor=\"let r of result.show, let i = index\">\n  <span style=\"cursor:pointer\" [routerLink]=\"['/show', r[1]]\"> {{r[0]}}</span>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/shared/search-dialog.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/shared/search-dialog.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".result {\n  font-size: 13px;\n  text-align: left; }\n\n.type {\n  font-size: 14px;\n  text-align: left;\n  font-weight: bold; }\n\n.left {\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0pvdXJuYWwvcHJvamVjdHMvZ3JhdGVmdWxfZGVhZF8yMDE5X2dpdC93ZWItYXBwMi9zcmMvYXBwL3NoYXJlZC9zZWFyY2gtZGlhbG9nLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2VhcmNoLWRpYWxvZy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXN1bHQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cblxuLnR5cGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbi5sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/search-dialog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/search-dialog.component.ts ***!
  \***************************************************/
/*! exports provided: SearchDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDialogComponent", function() { return SearchDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var SearchDialogComponent = /** @class */ (function () {
    function SearchDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        //this.result = data.result; //this.sortItems(data.result);
        this.result = this.sortItems(data.result);
        this.searchString = data.searchString;
    }
    SearchDialogComponent.prototype.onCancelClick = function () {
        this.dialogRef.close();
    };
    SearchDialogComponent.prototype.onItemClick = function (item) {
        this.dialogRef.close(item);
    };
    SearchDialogComponent.prototype.sortItems = function (r) {
        var s = { 'show': [], 'venue': [], 'song': [] };
        r.forEach(function (i) {
            s[i.type].push([i.title, i.uri]);
        });
        Object.keys(s).forEach(function (k) {
            s[k].sort();
        });
        console.log(s);
        return s;
    };
    SearchDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'search-dialog',
            template: __webpack_require__(/*! ./search-dialog.component.html */ "./src/app/shared/search-dialog.component.html"),
            styles: [__webpack_require__(/*! ./search-dialog.component.sass */ "./src/app/shared/search-dialog.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], SearchDialogComponent);
    return SearchDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/showmap.component.html":
/*!***********************************************!*\
  !*** ./src/app/shared/showmap.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n.loader {\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n  border: 3px solid #ddd;\n  border-top: 3px solid #42a5f5;\n  border-radius: 50%;\n  height: 75px;\n  width: 75px;\n}\n\n@-webkit-keyframes spin {\n  to {\n    border-top-color: #ec407a;\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  to {\n    border-top-color: #ec407a;\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n\n}\n</style>\n\n<div *ngIf=\"!loaded\" class=\"wait\">\n  <div class=\"loader\"></div>\n</div>\n\n<div *ngIf=\"!loaded\" class=\"wait\"><img src=\"/assets/bearsanimated.webp\" width=\"160\"></div>\n<div *ngIf=\"!timeOut && !loaded\" class=\"wait\">connecting to database</div>\n<div *ngIf=\"timeOut && !loaded\" class=\"wait\">loading seems to take a while! retrying...</div>\n\n<div id=\"maploaded\" [style.visibility]=\"!loaded ? 'hidden' : 'visible' \">\n  <div class=\"center\">\n    <select [(ngModel)]=\"selectedTour\" (ngModelChange)=\"tourChanged($event)\">\n        <option *ngFor=\"let l of layerNames\" ngValue=\"{{l}}\"> {{l}}</option>\n    </select>\n  </div>\n  <div id=\"MapContainer\" \n    leaflet\n    [leafletOptions]=\"mapOptions\"\n    (leafletMapReady)=\"onMapReady($event)\">\n  </div>\n</div> \n\n\n"

/***/ }),

/***/ "./src/app/shared/showmap.component.sass":
/*!***********************************************!*\
  !*** ./src/app/shared/showmap.component.sass ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  position: relative !important;\n  left: 12.5%; }\n\ndiv.leaflet-container {\n  position: absolute  !important;\n  width: 75%;\n  height: 75%;\n  left: 12.5%; }\n\n.wait {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0pvdXJuYWwvcHJvamVjdHMvZ3JhdGVmdWxfZGVhZF8yMDE5X2dpdC93ZWItYXBwMi9zcmMvYXBwL3NoYXJlZC9zaG93bWFwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVcsRUFBQTs7QUFFYjtFQUNFLDhCQUE4QjtFQUM5QixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2hvd21hcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uY2VudGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDEyLjUlOyB9XG5cbmRpdi5sZWFmbGV0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAgIWltcG9ydGFudDtcbiAgd2lkdGg6IDc1JTtcbiAgaGVpZ2h0OiA3NSU7XG4gIGxlZnQ6IDEyLjUlOyB9XG5cbi53YWl0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/showmap.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/showmap.component.ts ***!
  \*********************************************/
/*! exports provided: ShowMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowMapComponent", function() { return ShowMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _leaflet_fusesearch_src_leaflet_fusesearch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../leaflet-fusesearch/src/leaflet.fusesearch.js */ "./src/leaflet-fusesearch/src/leaflet.fusesearch.js");
/* harmony import */ var _leaflet_fusesearch_src_leaflet_fusesearch_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_leaflet_fusesearch_src_leaflet_fusesearch_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var leaflet_polylinedecorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! leaflet-polylinedecorator */ "./node_modules/leaflet-polylinedecorator/dist/leaflet.polylineDecorator.js");
/* harmony import */ var leaflet_polylinedecorator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(leaflet_polylinedecorator__WEBPACK_IMPORTED_MODULE_7__);




//import * as Fuse from 'fuse.js'; // imported in angular.json




var ShowMapComponent = /** @class */ (function () {
    function ShowMapComponent(data, sanitizer) {
        this.data = data;
        this.sanitizer = sanitizer;
    }
    ShowMapComponent.prototype.ngOnInit = function () {
        this.loaded = false;
        this.timeOut = false;
        this.selectLayers = {};
        this.layerNames = [];
        this.geoJsons = {};
        this.mapOptions = {
            layers: [
                //L.tileLayer('https://a.tiles.mapbox.com/v3/villeda.c4c63d13/{z}/{x}/{y}.png',
                //L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                //L.tileLayer('https://a.tiles.mapbox.com/v3/smmaurer.k59p4an0/{z}/{x}/{y}.png',
                L.tileLayer('https://a.tiles.mapbox.com/v3/smmaurer.k59p72bl/{z}/{x}/{y}.png', 
                //L.tileLayer('https://a.tiles.mapbox.com/v3/smmaurer.k59p92aj/{z}/{x}/{y}.png',
                //L.tileLayer('https://a.tiles.mapbox.com/v3/aj.03e9e12d/{z}/{x}/{y}.png',
                { maxZoom: 18, attribution: '...' })
            ],
            zoom: this.zoom,
            center: L.latLng(45, -70)
        };
    };
    ShowMapComponent.prototype.onMapReady = function (map) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i, _a, tours, geoJsonData, tourGeoJsonData, all;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        setTimeout(function () {
                            _this.timeOut = true;
                        }, 35000);
                        //this.document.getElementById("maploaded").style.visibility = "hidden";
                        this.map = map;
                        i = 0;
                        _b.label = 1;
                    case 1:
                        if (!(this.venues == undefined || this.venues.length == 0)) return [3 /*break*/, 3];
                        console.log("retry " + i);
                        _a = this;
                        return [4 /*yield*/, this.data.getVenueCoordinates()];
                    case 2:
                        _a.venues = _b.sent();
                        console.log(this.venues);
                        i++;
                        return [3 /*break*/, 1];
                    case 3: return [4 /*yield*/, this.data.getTourCoordinates()];
                    case 4:
                        tours = _b.sent();
                        console.log(tours);
                        geoJsonData = this.getGeoJson(this.venues);
                        tourGeoJsonData = this.getTourJson(tours);
                        all = this.groupLayers(geoJsonData);
                        this.geoJsons['all shows'] = geoJsonData;
                        this.selectLayers['all shows'] = all;
                        this.layerNames.push('all shows');
                        this.selectLayers['all shows'].addTo(this.map);
                        this.currentLayer = 'all shows';
                        tourGeoJsonData.forEach(function (t) {
                            _this.selectLayers[t[0]] = _this.groupLayers(t[1]);
                            _this.geoJsons[t[0]] = t[1];
                            _this.geoJsons[t[0]].sort(_this.dateSort());
                            _this.layerNames.push(t[0]);
                        });
                        this.searchCtrl = L.control.fuseSearch({ 'showResultFct': function (feature, container) {
                                var props = feature.properties;
                                if (props.dates != '') { // workaround for result list after first click on search button
                                    var name = L.DomUtil.create('span', null, container);
                                    name.innerHTML = props.name;
                                    //container.appendChild(L.DomUtil.create('br', null, container));
                                    //container.appendChild(document.createTextNode(props.dates));
                                }
                            } });
                        this.searchCtrl.indexFeatures(geoJsonData, ['name', 'dates']);
                        this.searchCtrl.addTo(this.map);
                        this.searchCtrl.indexFeatures(this.geoJsons['all shows'], ['name', 'dates']);
                        this.selectedTour = 'all shows';
                        this.loaded = true;
                        this.fitZoom();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShowMapComponent.prototype.dateStrings = function (s) {
        if (s != undefined) {
            var htmlstring = '<br>';
            var datestring = '';
            var dates = s.map(function (e) { return [e.date, e.id]; });
            dates.sort();
            dates.forEach(function (e) {
                htmlstring += '<a style="color: black;" href="/#/show/' + e[1] + '">' + e[0] + '</a><br>';
                datestring += e[0] + ' ';
            });
            return [datestring, htmlstring];
        }
    };
    ShowMapComponent.prototype.onEachFeature = function (feature, layer) {
        if (feature.properties && feature.properties.popupContent) {
            layer.bindPopup(feature.properties.popupContent, { maxHeight: 160 });
        }
        feature.layer = layer;
    };
    ShowMapComponent.prototype.getGeoJson = function (shows) {
        var _this = this;
        var geoJsonData = [];
        var latlongs = [];
        shows.forEach(function (v) {
            if (v.long != undefined) {
                var lat = parseFloat(v.lat);
                var long = parseFloat(v.long);
                while (_this.searchForArray(latlongs, [lat, long]) != -1) { // prevent markers in same place
                    lat += 0.001;
                }
                latlongs.push([lat, long]);
                var ds = _this.dateStrings(v.shows);
                var datestring = ds[0];
                var venuehtml = ds[1];
                if (v.georss == 'city') {
                    venuehtml += '(marker for city only)';
                }
                ;
                var geojsonFeature = {
                    'type': 'Feature',
                    'properties': {
                        'name': v.name,
                        'dates': datestring,
                        'popupContent': '<b><a style="color: black;" href="/#/venue/' + v.id + '">' + v.name + '</a></b>' + venuehtml
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [lat, long]
                    }
                };
                geoJsonData.push(geojsonFeature);
            }
        });
        return geoJsonData;
    };
    ShowMapComponent.prototype.groupLayers = function (g) {
        var _this = this;
        var l = [];
        var myIcon = L.icon({
            iconUrl: 'assets/dead_marker_small_shadow.png',
            iconSize: [null, 35],
            iconAnchor: [12, 34],
            popupAnchor: [-3, -32],
        });
        g.forEach(function (v) {
            var g = L.geoJSON(v, {
                onEachFeature: _this.onEachFeature,
                pointToLayer: function (feature, latlng) {
                    return L.marker(latlng, { icon: myIcon, riseOnHover: true });
                }
            });
            l.push(g);
        });
        var lg = L.layerGroup(l);
        return (lg);
    };
    ShowMapComponent.prototype.getTourJson = function (t) {
        var _this = this;
        var tours = [];
        Object.keys(t).forEach(function (tour) {
            var geoJsonData = [];
            var latlongs = [];
            Object.keys(t[tour]).forEach(function (venue) {
                var venue_id = t[tour][venue].id;
                var long = parseFloat(t[tour][venue].long);
                var lat = parseFloat(t[tour][venue].lat);
                while (_this.searchForArray(latlongs, [lat, long]) != -1) { // prevent markers in same place
                    lat += 0.001;
                }
                latlongs.push([lat, long]);
                var shows = [];
                t[tour][venue].shows.forEach(function (show) { return shows.push(show); });
                var ds = _this.dateStrings(shows);
                var datestring = ds[0];
                var venuehtml = ds[1];
                if (t[tour][venue].georss == 'city') {
                    venuehtml += '(marker for city only)';
                }
                ; // todo: make work!
                var geojsonFeature = {
                    'type': 'Feature',
                    'properties': {
                        'name': venue,
                        'tour': tour,
                        'dates': datestring,
                        'popupContent': '<b><a style="color: black; "href="/#/venue/' + venue_id + '">' + venue + '</a></b>' + venuehtml
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [lat, long]
                    }
                };
                geoJsonData.push(geojsonFeature);
            });
            if (geoJsonData.length > 0) {
                tours.push([tour, geoJsonData]);
            }
        });
        return tours;
    };
    ShowMapComponent.prototype.tourChanged = function (e) {
        if (this.tourLine != undefined) {
            this.map.removeLayer(this.tourLine);
        }
        if (this.lineDecorator != undefined) {
            this.map.removeLayer(this.lineDecorator);
        }
        this.map.removeLayer(this.selectLayers[this.currentLayer]);
        this.selectLayers[e].addTo(this.map);
        this.searchCtrl.indexFeatures(this.geoJsons[e], ['name', 'dates']);
        this.currentLayer = e;
        if (e != 'all shows' && this.geoJsons[e].length > 1) {
            this.connectTheDots(this.geoJsons[e]);
        }
        this.fitZoom();
    };
    ShowMapComponent.prototype.fitZoom = function () {
        var group = new L.featureGroup;
        this.map.eachLayer(function (l) { if (l['feature'] != undefined) {
            group.addLayer(l);
        } });
        this.map.fitBounds(group.getBounds());
        if (this.map.getZoom() > 10) {
            this.map.setZoom(10);
        }
    };
    ShowMapComponent.prototype.connectTheDots = function (e) {
        var c = [];
        e.forEach(function (i) { return c.push(lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](i.geometry.coordinates).reverse()); });
        this.tourLine = L.polyline(c, { color: '#1D3A87', weight: 3 }).addTo(this.map);
        console.log(this.tourLine);
        this.lineDecorator = L.polylineDecorator(this.tourLine, {
            patterns: [
                { offset: '0%', repeat: 40, symbol: L.Symbol.arrowHead({ pixelSize: 9, polygon: false, pathOptions: { weight: 3, color: '#1D3A87', stroke: true } })
                }
            ]
        }).addTo(this.map);
    };
    ShowMapComponent.prototype.dateSort = function () {
        return function (a, b) {
            var result = (a.properties.dates < b.properties.dates) ? -1 : (a.properties.dates > b.properties.dates) ? 1 : 0;
            return result;
        };
    };
    ShowMapComponent.prototype.searchForArray = function (haystack, needle) {
        var i, j, current;
        for (i = 0; i < haystack.length; ++i) {
            if (needle.length === haystack[i].length) {
                current = haystack[i];
                for (j = 0; j < needle.length && needle[j] === current[j]; ++j)
                    ;
                if (j === needle.length)
                    return i;
            }
        }
        return -1;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ShowMapComponent.prototype, "zoom", void 0);
    ShowMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-showmap',
            template: __webpack_require__(/*! ./showmap.component.html */ "./src/app/shared/showmap.component.html"),
            styles: [__webpack_require__(/*! ./showmap.component.sass */ "./src/app/shared/showmap.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], ShowMapComponent);
    return ShowMapComponent;
}());



/***/ }),

/***/ "./src/app/shared/shows.component.html":
/*!*********************************************!*\
  !*** ./src/app/shared/shows.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"gd-container\">\n  <div *ngFor=\"let e of events\" fxLayout=\"row\" fxLayoutAlign=\" center\">\n    <img fxLayout=\"column\" class=\"image field\" fxFlex=\"1 1 15%\"\n      [style.width]=\"'80px'\" [style.height]=\"'60px'\"\n      [defaultImage]=\"'assets/gd_placeholder.png'\"\n      [lazyLoad]=\"e.artifacts[0] ? e.artifacts[0].thumbnail || e.artifacts[0].image: null\"\n      [style.object-fit]=\"'cover'\"\n      [routerLink]=\"['/show', e.id]\">\n      <div fxLayout=\"column\" fxFlex=\"1 1 10%\" fxLayoutAlign=\"center\"\n      [ngStyle.xs]=\"{'font-size': '80%'}\" class=\"field\"\n        [routerLink]=\"['/show', e.id]\">\n        {{ e.date }}\n      </div>\n      <div fxLayout=\"column\" fxFlex=\"1 1 25%\" fxLayoutAlign=\"center\"\n      [ngStyle.xs]=\"{'font-size': '80%'}\" class=\"field\"\n        [routerLink]=\"['/show', e.id]\">\n        {{ e.venue }} \n      </div>\n      <span class=\"field\"\n        [routerLink]=\"['/show', e.id]\">\n      {{ e.location }}\n    </span>\n    <button mat-icon-button fxLayout=\"column\" class=\"field\" fxFlex=\"1 1 10%\"\n      (click)=\"onOptions(e)\"><mat-icon>more_horiz</mat-icon>\n    </button>\n\n\n    <!--\n    <div fxLayout=\"column\" fxFlex=\"1 1 25%\" fxLayoutAlign=\"center\"\n        [ngStyle.xs]=\"{'font-size': '80%'}\" class=\"field\"\n        [routerLink]=\"['/show', e.id]\">\n      {{ e.date }}\n    </div>\n    <div fxLayout=\"column\" fxFlex=\"1 1 30%\" fxLayoutAlign=\"center\"\n        [ngStyle.xs]=\"{'font-size': '80%'}\" class=\"field\"\n        [routerLink]=\"['/show', e.id]\">\n      {{ e.venue }}\n    </div>\n    <div fxLayout=\"column\" fxFlex=\"1 1 20%\" fxLayoutAlign=\"center\"\n        [ngStyle.xs]=\"{'font-size': '80%'}\" class=\"field\"\n        [routerLink]=\"['/show', e.id]\">\n      {{ e.location }}\n    </div>\n    <button mat-icon-button fxLayout=\"column\" class=\"field\" fxFlex=\"1 1 10%\"\n      (click)=\"onOptions(e)\"><mat-icon>more_horiz</mat-icon>\n    </button>\n    -->\n  </div>\n</div>\n\n<p [style.margin-bottom]=\"'75px'\"></p>"

/***/ }),

/***/ "./src/app/shared/shows.component.sass":
/*!*********************************************!*\
  !*** ./src/app/shared/shows.component.sass ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".field {\n  padding-right: 3px;\n  padding-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0pvdXJuYWwvcHJvamVjdHMvZ3JhdGVmdWxfZGVhZF8yMDE5X2dpdC93ZWItYXBwMi9zcmMvYXBwL3NoYXJlZC9zaG93cy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaG93cy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWVsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/shows.component.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/shows.component.ts ***!
  \*******************************************/
/*! exports provided: ShowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsComponent", function() { return ShowsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");



var ShowsComponent = /** @class */ (function () {
    function ShowsComponent(data) {
        this.data = data;
    }
    ShowsComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.data.getEventInfos(this.eventIds)];
                    case 1:
                        _a.events = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ShowsComponent.prototype, "eventIds", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], ShowsComponent.prototype, "onOptions", void 0);
    ShowsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-shows',
            template: __webpack_require__(/*! ./shows.component.html */ "./src/app/shared/shows.component.html"),
            styles: [__webpack_require__(/*! ./shows.component.sass */ "./src/app/shared/shows.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ShowsComponent);
    return ShowsComponent;
}());



/***/ }),

/***/ "./src/app/shared/weather.component.html":
/*!***********************************************!*\
  !*** ./src/app/shared/weather.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div fxLayout=\"row\" >\n      \n    <div fxLayout=\"column\" fxFlex fxLayoutAlign=\"center center\" [style.font-size]=\"'150%'\"[style.padding]=\"'4px'\">\n      <i class=\"wi wc {{ weather.conditionIcon }}\"></i>\n    </div>\n    <div fxLayout=\"column\" fxFlex fxLayoutAlign=\"center center\" [style.font-size]=\"'150%'\">\n      <i class=\"wi wc wpadleft {{ weather.windDirectionIcon }}\"></i>\n    </div>\n    <div fxLayout=\"column\" class=\"wf wc wpadleft wpadright\" fxFlex fxLayoutAlign=\"center center\" >\n        {{ weather.maxTemperature }}°F\n      </div>\n  </div>\n  <!--\n  <div fxLayout=\"column\" fxFlex fxLayoutAlign=\"center\" [style.padding-left]=\"'30px'\">\n    <span *ngIf=\"weather.condition\">\n      <b>{{ weather.condition }}</b>\n    </span>\n    max. temperature: {{ weather.maxTemperature }} °F<br>\n    precipitation: {{ weather.precipitation }} in<br>\n    wind: {{ weather.wind }} mph\n  </div>\n-->"

/***/ }),

/***/ "./src/app/shared/weather.component.sass":
/*!***********************************************!*\
  !*** ./src/app/shared/weather.component.sass ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.transbox {\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n  filter: alpha(opacity=60);\n  /* For IE8 and earlier */ }\n\n.wf {\n  font-family: Impact, Charcoal, sans-serif; }\n\n.wc {\n  color: #2a398a; }\n\n.wpadleft {\n  padding-left: 10px; }\n\n.wpadright {\n  padding-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0pvdXJuYWwvcHJvamVjdHMvZ3JhdGVmdWxfZGVhZF8yMDE5X2dpdC93ZWItYXBwMi9zcmMvYXBwL3NoYXJlZC93ZWF0aGVyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFBRSx3QkFBQSxFQUF5Qjs7QUFFdEQ7RUFDRSx5Q0FBeUMsRUFBQTs7QUFFM0M7RUFDRSxjQUFjLEVBQUE7O0FBRWhCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvd2VhdGhlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi50cmFuc2JveCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsIDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT02MCk7IC8qIEZvciBJRTggYW5kIGVhcmxpZXIgKi87IH1cblxuLndmIHtcbiAgZm9udC1mYW1pbHk6IEltcGFjdCwgQ2hhcmNvYWwsIHNhbnMtc2VyaWY7IH1cblxuLndjIHtcbiAgY29sb3I6ICMyYTM5OGE7IH1cblxuLndwYWRsZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4OyB9XG5cbi53cGFkcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/weather.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/weather.component.ts ***!
  \*********************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WeatherComponent = /** @class */ (function () {
    function WeatherComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeatherComponent.prototype, "weather", void 0);
    WeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-weather',
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/shared/weather.component.html"),
            styles: [__webpack_require__(/*! ./weather.component.sass */ "./src/app/shared/weather.component.sass")]
        })
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "./src/app/views/artifacts.component.html":
/*!************************************************!*\
  !*** ./src/app/views/artifacts.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"artifacts\" fxLayout=\"column\">\n  <gd-header *ngIf=\"artifacts\" title='Artifacts'\n    [subtitle]='types' imageUrl=\"{{ artifacts[0] }}\">\n  </gd-header>\n  <div *ngIf=\"artifacts.length\" class=\"gd-container\" fxLayout=\"row wrap\" fxLayout.xs=\"column\">\n    <div *ngFor=\"let a of artifacts\" class=\"gd-container\" fxLayout=\"column\" fxFlex=\"33\" fxFlex.xs=\"100\">\n      <img class=\"image\" [src]=\"a.thumbnail || a.image\" [style.object-fit]=\"'cover'\" [style.width]=\"'100%'\">\n      {{a.description}}<br>\n      {{a.eventInfo}}<br>\n      {{a.type}} in {{a.collection}} collection\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/artifacts.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/artifacts.component.ts ***!
  \**********************************************/
/*! exports provided: ArtifactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtifactsComponent", function() { return ArtifactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");




var ArtifactsComponent = /** @class */ (function () {
    function ArtifactsComponent(data, route) {
        this.data = data;
        this.route = route;
    }
    ArtifactsComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.route.paramMap.subscribe(function (params) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var _a, _b;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                if (!params.has('id')) return [3 /*break*/, 1];
                                return [3 /*break*/, 5];
                            case 1:
                                if (!params.has('types')) return [3 /*break*/, 3];
                                this.types = JSON.parse(params.get('types'));
                                _a = this;
                                return [4 /*yield*/, this.data.getRandomArtifacts(this.types, 6)];
                            case 2:
                                _a.artifacts = _c.sent();
                                return [3 /*break*/, 5];
                            case 3:
                                _b = this;
                                return [4 /*yield*/, this.data.getRandomArtifacts(null, 6)];
                            case 4:
                                _b.artifacts = _c.sent();
                                console.log(this.artifacts);
                                _c.label = 5;
                            case 5: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ArtifactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-artifacts',
            template: __webpack_require__(/*! ./artifacts.component.html */ "./src/app/views/artifacts.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ArtifactsComponent);
    return ArtifactsComponent;
}());



/***/ }),

/***/ "./src/app/views/artist.component.html":
/*!*********************************************!*\
  !*** ./src/app/views/artist.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"artist\" fxLayout=\"column\">\n  <gd-header *ngIf=\"artist\" title=\"{{ artist.name }}\"\n    subtitle=\"{{ artist.instruments.join(', ').split('_').join(' ') }}\">\n  </gd-header>\n  \n  <div class=\"gd-container\" fxLayout=\"row\" fxLayout.xs=\"column\">\n    <img *ngIf=\"artist.thumbnail\" class=\"image gd-container\"\n      [defaultImage]=\"'assets/gd_placeholder.png'\"\n      [lazyLoad]=\"artist.thumbnail\" [style.object-fit]=\"'contain'\"\n      fxFlex=\"50\">\n    <div class=\"gd-container\" fxFlex=\"50\">\n      {{ artist.comment }}\n    </div>\n  </div>\n  \n  <p class=\"gd-section\">Songs composed by {{artist.name}}:</p>\n  \n  <div class=\"gd-container\" fxLayout=\"column\">\n    <div class=\"gd-container\" fxLayout=\"column\">\n      <div *ngFor=\"let song of artist.compositions\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <span [routerLink]=\"['/song', song.id]\">{{ song.name }}</span>\n        <button mat-icon-button (click)=\"openSongOptionsDialog(song)\">\n          <mat-icon>more_horiz</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n  \n  <p *ngIf=\"artist.eventIds.length\" class=\"gd-section\">{{artist.name}} played with the Dead on:</p>\n  \n  <gd-shows [eventIds]=\"artist.eventIds\"></gd-shows>\n</div>\n"

/***/ }),

/***/ "./src/app/views/artist.component.ts":
/*!*******************************************!*\
  !*** ./src/app/views/artist.component.ts ***!
  \*******************************************/
/*! exports provided: ArtistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistComponent", function() { return ArtistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");




var ArtistComponent = /** @class */ (function () {
    function ArtistComponent(data, router, route) {
        this.data = data;
        this.router = router;
        this.route = route;
    }
    ArtistComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, _c;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.route.paramMap.subscribe(function (params) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _a;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (!params.has('id')) return [3 /*break*/, 2];
                                        _a = this;
                                        return [4 /*yield*/, this.data.getArtistDetails(params.get('id'))];
                                    case 1:
                                        _a.artist = _b.sent();
                                        console.log(this.artist);
                                        _b.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); });
                        if (!!this.artist) return [3 /*break*/, 2];
                        _b = (_a = this.router).navigate;
                        _c = ['/artist'];
                        return [4 /*yield*/, this.data.getRandomArtistId()];
                    case 1:
                        _b.apply(_a, [_c.concat([(_d.sent())]), { replaceUrl: true }]);
                        _d.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ArtistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-artist',
            template: __webpack_require__(/*! ./artist.component.html */ "./src/app/views/artist.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ArtistComponent);
    return ArtistComponent;
}());



/***/ }),

/***/ "./src/app/views/location.component.html":
/*!***********************************************!*\
  !*** ./src/app/views/location.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"location\" fxLayout=\"column\">\n  <gd-header *ngIf=\"location\" title='{{ location.name }}'\n    subtitle='{{ location.state }}' imageUrl=\"{{ location.image }}\">\n  </gd-header>\n  <div class=\"container\" fxLayout=\"row wrap\" fxLayout.xs=\"column\" fxFlex=\"100\">\n    <div class=\"gd-container\" fxLayout=\"column\" fxFlex=\"1 1 33%\" fxFlex.sm=\"1 1 50%\">\n      <p *ngIf=\"data.event\">The Band played on {{ data.event.date }}</p>\n      <p>{{ location.comment }}</p>\n    </div>\n    <div class=\"gd-container\" fxLayout=\"column\" fxFlex=\"1 1 33%\" fxFlex.sm=\"1 1 50%\">\n      <img class=\"image\" [defaultImage]=\"'assets/gd_placeholder.png'\" [lazyLoad]=\"location.thumbnail\" fxFlex=\"1 1 auto\">\n    </div>\n    <div class=\"gd-container\" fxLayout=\"column\" fxFlex=\"1 1 33%\" fxFlex.sm=\"1 1 100%\">\n      <gd-map fxFlex=\"1 1 auto\" [style.height]=\"'100%'\" zoom=\"15\"\n        latitude=\"{{ location.geoloc.lat }}\" longitude=\"{{ location.geoloc.long }}\"></gd-map>\n    </div>\n  </div>\n  \n  <p class=\"gd-section\">All shows in {{ location.name }}:</p>\n  \n  <gd-shows [eventIds]=\"location.eventIds\"></gd-shows>\n</div>"

/***/ }),

/***/ "./src/app/views/location.component.ts":
/*!*********************************************!*\
  !*** ./src/app/views/location.component.ts ***!
  \*********************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");




var LocationComponent = /** @class */ (function () {
    function LocationComponent(data, router, route) {
        this.data = data;
        this.router = router;
        this.route = route;
    }
    LocationComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.route.paramMap.subscribe(function (params) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var _a, _b, _c, _d;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_e) {
                        switch (_e.label) {
                            case 0:
                                if (!params.has('id')) return [3 /*break*/, 2];
                                _a = this;
                                return [4 /*yield*/, this.data.getLocation(params.get('id'))];
                            case 1:
                                _a.location = _e.sent();
                                _e.label = 2;
                            case 2:
                                if (!!this.location) return [3 /*break*/, 4];
                                _c = (_b = this.router).navigate;
                                _d = ['/location'];
                                return [4 /*yield*/, this.data.getRandomLocation()];
                            case 3:
                                _c.apply(_b, [_d.concat([(_e.sent()).id]), { replaceUrl: true }]);
                                _e.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    LocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-location',
            template: __webpack_require__(/*! ./location.component.html */ "./src/app/views/location.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./src/app/views/mapselect.component.html":
/*!************************************************!*\
  !*** ./src/app/views/mapselect.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\">\n\n<!-- \n<div *ngIf=\"venues\" class=\"gd-container\" fxLayout=\"column\" fxFlex=\"1 1 100%\" fxFlex.sm=\"1 1 100%\"> \n  <gd-showmap [venues]=\"venues\" fxFlex=\"1 1 auto\" [style.height]=\"'100%'\" zoom=\"2.5\"></gd-showmap>\n</div>\n-->\n<gd-header title='Map' subtitle=\"Selector\"></gd-header>\n \n<div class=\"gd-container\" fxLayout=\"row\" fxFlex=\"1 1 100%\" fxFlex.sm=\"1 1 100%\"> \n    <gd-showmap style=\"z-index:0;\" fxFlex=\"1 1 auto\" [style.height]=\"'100%'\" zoom=\"2.5\"></gd-showmap>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/mapselect.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/mapselect.component.ts ***!
  \**********************************************/
/*! exports provided: MapSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapSelectComponent", function() { return MapSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var MapSelectComponent = /** @class */ (function () {
    function MapSelectComponent(data, sanitizer, router, route) {
        this.data = data;
        this.sanitizer = sanitizer;
        this.router = router;
        this.route = route;
    }
    MapSelectComponent.prototype.ngOnInit = function () {
        //this.venues = await this.data.getVenueCoordinates();
        //console.log(this.venues);
    };
    MapSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-mapselect',
            template: __webpack_require__(/*! ./mapselect.component.html */ "./src/app/views/mapselect.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MapSelectComponent);
    return MapSelectComponent;
}());



/***/ }),

/***/ "./src/app/views/recording.component.html":
/*!************************************************!*\
  !*** ./src/app/views/recording.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"recording && event\" fxLayout=\"column\">\n  <gd-header *ngIf=\"recording && event\" title='{{ recording.etreeId }}'\n    subtitle='{{ event.location }}'>\n  </gd-header>\n  <div *ngIf=\"recording\" class=\"gd-container\" fxLayout=\"column\" class=\"topmargin\" >\n    <div fxLayout=\"column\" fxFlex class=\"gd-container\">\n      <ng-container *ngIf=\"event\">\n        Recorded at: {{ event.venue }}, {{ event.location }}, {{ event.state }}, {{ event.date }}<br></ng-container>\n      <ng-container *ngIf=\"recording.info.lineage\">\n        Lineage: {{ recording.info.lineage }}<br></ng-container>\n      <ng-container *ngIf=\"recording.info.source\">\n        Source: {{ recording.info.source }}<br></ng-container>\n      <ng-container *ngIf=\"recording.info.notes\">\n        Notes: {{ recording.info.notes }}<br/></ng-container>\n      <ng-container *ngIf=\"recording.info.keywords\">\n        Notes: {{ recording.info.keywords }}<br/></ng-container>\n      <br>\n      <ng-container *ngIf=\"recording.tracks\">\n        Tracks:\n        <div *ngFor=\"let t of recording.tracks\">\n          <span [routerLink]=\"['/song', t.title]\"> {{ t.track }}: {{ t.title }}</span>\n          <button mat-icon-button (click)=\"openTrackOptionsDialog(t)\">\n            <mat-icon>more_horiz</mat-icon>\n          </button>\n        </div><br/>\n      </ng-container>\n\n     <a href=\"{{ 'https://archive.org/details/' + recording.etreeId }}\" target=\"_blank\">  <img src=\"https://archive.org/images/glogo.png\" [style.object-fit]=\"'contain'\"></a>\n     \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/recording.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/recording.component.ts ***!
  \**********************************************/
/*! exports provided: RecordingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordingComponent", function() { return RecordingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");






var RecordingComponent = /** @class */ (function () {
    function RecordingComponent(data, router, route, dialog, player) {
        this.data = data;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.player = player;
    }
    RecordingComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.route.paramMap.subscribe(function (params) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var _a, _b, _c, _d, _e;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_f) {
                        switch (_f.label) {
                            case 0:
                                if (!params.has('id')) return [3 /*break*/, 3];
                                _a = this;
                                return [4 /*yield*/, this.data.getRecording(params.get('id'))];
                            case 1:
                                _a.recording = _f.sent();
                                _b = this;
                                return [4 /*yield*/, this.data.getEventInfoForRecording(this.recording.id)];
                            case 2:
                                _b.event = _f.sent();
                                console.log(this.recording);
                                console.log(this.event);
                                _f.label = 3;
                            case 3:
                                if (!!this.recording) return [3 /*break*/, 5];
                                _d = (_c = this.router).navigate;
                                _e = ['/recording'];
                                return [4 /*yield*/, this.data.getRandomRecording()];
                            case 4:
                                _d.apply(_c, [_e.concat([(_f.sent()).id]), { replaceUrl: true }]);
                                _f.label = 5;
                            case 5: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    RecordingComponent.prototype.openTrackOptionsDialog = function (audio) {
        var _this = this;
        this.recording.tracks;
        this.dialog.openMultiFunction(
        //song.name+"', "+this.event.venue.name+", "+this.event.date,
        audio.track + " " + audio.title, ["add to playlist"], [function () { return _this.addTrackToPlaylist(audio); }]);
    };
    RecordingComponent.prototype.addTrackToPlaylist = function (audio) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var info, track;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data.getEventInfo(this.event.id)];
                    case 1:
                        info = _a.sent();
                        return [4 /*yield*/, this.data.getTrackFromAudio(audio, info, this.recording.etreeId)];
                    case 2:
                        track = _a.sent();
                        if (track)
                            this.player.addToPlaylist(track);
                        return [2 /*return*/];
                }
            });
        });
    };
    RecordingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-recording',
            template: __webpack_require__(/*! ./recording.component.html */ "./src/app/views/recording.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"],
            _services_player_service__WEBPACK_IMPORTED_MODULE_4__["PlayerService"]])
    ], RecordingComponent);
    return RecordingComponent;
}());



/***/ }),

/***/ "./src/app/views/show.component.html":
/*!*******************************************!*\
  !*** ./src/app/views/show.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"event\" fxLayout=\"column\">\n  <gd-header style=\"position: fixed; width: 100%\" *ngIf=\"event\" title='{{event.location.name}}, {{event.location.state}}' subtitle='{{event.date}}'\n    imageUrl=\"{{eventImage}}\">\n    <gd-weather [weather]=\"event.weather\"></gd-weather>\n  </gd-header>\n  <div class=\"gd-container\" fxLayout=\"row wrap\" fxLayout.xs=\"column\" class=\"topmargin\" >\n    \n    <div class=\"gd-container\" fxLayout=\"column\" fxFlex=\"50\" [routerLink]=\"['/location', event.location.id]\">\n      <h2 class=\"titlef\">Location: <span class=\"normweight\">{{ event.location.name }}</span></h2>\n      <img class=\"image\" *ngIf=\"event.location.thumbnail\" [lazyLoad]=\"event.location.thumbnail\" fxFlex=\"1 1 auto\"  [style.object-fit]=\"'contain'\">\n    </div>\n    \n    <div class=\"gd-container\" fxLayout=\"column\" fxFlex=\"50\" [routerLink]=\"['/venue', event.venue.id]\">\n      <h2 class=\"titlef\">Venue: <span class=\"normweight\">{{ event.venue.name }}</span></h2>\n      <img class=\"image\" *ngIf=\"event.venue.thumbnail\" [lazyLoad]=\"event.venue.thumbnail\" fxFlex=\"1 1 auto\"  [style.object-fit]=\"'contain'\">\n    </div>\n    \n    <div class=\"gd-container\" fxLayout=\"column\" fxFlex=\"50\">\n        <h2 class=\"titlef\">Setlist </h2>\n      <div fxLayout=\"column\" *ngFor=\"let set of event.setlist\">\n        <h3>{{ set.name }}</h3>\n        <!-- <div *ngFor=\"let song of set.songs\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\"> -->\n        <div *ngFor=\"let song of set.songs, let i = index\" fxLayout=\"row\">\n          <span [routerLink]=\"['/song', song.id]\">{{( \"0\"+(i+1)).slice(-2) }} {{ song.name }}</span>\n          <button mat-icon-button (click)=\"openSongOptionsDialog(song, set.name, i+1)\">\n            <mat-icon>more_horiz</mat-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"gd-container\" fxLayout=\"column\" fxFlex=\"50\">\n      <h2 class=\"titlef\">Lineup</h2>\n        <div *ngFor=\"let p of event.performers\" [routerLink]=\"['/artist', p.id]\"> \n          <img class=\"image\" [lazyLoad]=\"p.thumbnail\"\n          [style.width]=\"'70px'\" [style.height]=\"'70px'\"> \n          <span>&nbsp;&nbsp;&nbsp;&nbsp;{{ p.name }} ({{ p.instruments.join(', ') }})</span>\n        </div>\n \n    <!--div fxLayout=\"column\" fxFlex=\"1 1 auto\">\n      <iframe [src]=\"recordingUrls[0]\" [style.min-width]=\"'350px'\" [style.height]=\"'100%'\" frameborder=\"0\"></iframe>\n    </div-->\n    \n  </div>\n  \n  <div class=\"gd-container\" fxLayout=\"column\" fxFlex=\"50\">\n    <h2 class=\"titlef\">News of the week</h2>\n    <div *ngFor=\"let n of event.news\">\n      <a [href]=\"n.url\" target=\"_blank\" [style.text-decoration]=\"'none'\">\n        {{ n.date+\": \"+n.title+\" (\"+n.source+\")\" }}\n      </a>\n    </div>\n  </div>\n  \n  <div class=\"gd-container\" fxLayout=\"column\" fxFlex=\"50\">\n    <h2 class=\"titlef\">Available recordings</h2>\n    <div *ngFor=\"let r of event.recordings\">\n      <span [routerLink]=\"['/recording', r.id]\">{{ r.etreeId }}</span>\n      <button mat-icon-button (click)=\"openRecordingOptionsDialog(r)\">\n        <mat-icon>more_horiz</mat-icon>\n      </button>\n    </div>\n  </div>\n  \n\n    <!-- \n  <h2 *ngIf=\"photos.length\" class=\"gd-section\"><span class=\"titlef\">Photos from the show</span></h2>\n  \n  <div *ngIf=\"photos.length\" class=\"gd-container\" fxLayout=\"row wrap\" fxLayout.xs=\"column\">\n    <div *ngFor=\"let s of photos\" class=\"gd-container\" fxLayout=\"column\" fxFlex=\"33\" fxFlex.xs=\"100\">\n      <img style=\"max-width: 200px;\" class=\"image\" [lazyLoad]=\"s\" [style.object-fit]=\"'contain'\">\n    </div>\n  </div>\n-->\n  \n\n<h2 *ngIf=\"photos.length\" class=\"gd-section\"><span class=\"titlef\">Photos</span></h2>\n  <div *ngIf=\"photos.length\" class=\"gd-container\" fxLayout=\"row wrap\"\n      fxLayout.xs=\"column\" fxLayoutAlign=\"start start\">\n    <div *ngFor=\"let s of photos\" class=\"gd-artifact\" fxLayout=\"column\" fxFlex>\n        <figure>\n          <div *ngIf=\"s.source; then thenBlock else elseBlock\"></div>\n          <ng-template #thenBlock>\n            <a href=\"{{ s.source }}\" target=\"_blank\"><img style=\"height: 200px;\" class=\"image\" [lazyLoad]=\"s.image\" [style.object-fit]=\"'contain'\"></a>\n          </ng-template>\n          <ng-template #elseBlock>\n            <img style=\"height: 200px;\" class=\"image\" [lazyLoad]=\"s.image\" [style.object-fit]=\"'contain'\">\n          </ng-template>\n          <figcaption class=\"p1\">({{ s.collection }})</figcaption>\n        </figure>\n    </div>\n  </div>\n\n\n\n  <h2 *ngIf=\"artifacts.length\" class=\"gd-section\"><span class=\"titlef\">Other Artifacts</span></h2>\n\n  <div *ngIf=\"artifacts.length\" class=\"gd-container\" fxLayout=\"row wrap\"\n      fxLayout.xs=\"column\" fxLayoutAlign=\"start start\">\n    <div *ngFor=\"let a of artifacts\" class=\"gd-artifact\" fxLayout=\"column\" fxFlex>\n        <figure>\n        <div *ngIf=\"a.source; then thenBlock else elseBlock\"></div>\n        <ng-template #thenBlock>\n          <a href=\"{{ a.source }}\" target=\"_blank\"><img style=\"height: 200px;\" class=\"image\" [lazyLoad]=\"a.image\" [style.object-fit]=\"'contain'\"></a>\n        </ng-template>\n        <ng-template #elseBlock>\n            <a href=\"{{ a.image }}\" target=\"_blank\"><img style=\"height: 200px;\" class=\"image\" [lazyLoad]=\"a.image\" [style.object-fit]=\"'contain'\"></a>\n        </ng-template>\n        <figcaption class=\"p1\">{{ a.type }} ({{ a.collection }})</figcaption>\n      </figure>\n\n</div>\n    </div>\n  </div>\n</div>\n<p [style.margin-bottom]=\"'75px'\"></p>"

/***/ }),

/***/ "./src/app/views/show.component.ts":
/*!*****************************************!*\
  !*** ./src/app/views/show.component.ts ***!
  \*****************************************/
/*! exports provided: ShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowComponent", function() { return ShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/types */ "./src/app/services/types.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");








var ShowComponent = /** @class */ (function () {
    function ShowComponent(data, sanitizer, router, route, dialog, player) {
        this.data = data;
        this.sanitizer = sanitizer;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.player = player;
    }
    ShowComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.route.paramMap.subscribe(function (params) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var _a, poster, pass, ticket, _b, _c, _d;
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_e) {
                        switch (_e.label) {
                            case 0:
                                if (!params.has('id')) return [3 /*break*/, 2];
                                _a = this;
                                return [4 /*yield*/, this.data.getEventDetails(params.get('id'))];
                            case 1:
                                _a.event = _e.sent();
                                this.event.date = this.data.formatDate(this.event.date);
                                this.recordingUrls = this.event.recordings.map(function (r) {
                                    return _this.sanitizer.bypassSecurityTrustResourceUrl("https://archive.org/embed/" + r.etreeId + "&playlist=1");
                                });
                                this.photos = this.event.artifacts
                                    .filter(function (a) { return a.type === _services_types__WEBPACK_IMPORTED_MODULE_4__["ArtifactType"].Photo; }); //.map(a => a.image);
                                this.artifacts = this.event.artifacts.filter(function (a) { return a.type !== _services_types__WEBPACK_IMPORTED_MODULE_4__["ArtifactType"].Photo; });
                                poster = this.event.artifacts.filter(function (a) { return a.type == _services_types__WEBPACK_IMPORTED_MODULE_4__["ArtifactType"].Poster; })[0];
                                pass = this.event.artifacts.filter(function (a) { return a.type == _services_types__WEBPACK_IMPORTED_MODULE_4__["ArtifactType"].Pass; })[0];
                                ticket = this.event.artifacts.filter(function (a) { return a.type == _services_types__WEBPACK_IMPORTED_MODULE_4__["ArtifactType"].Ticket; })[0];
                                this.eventImage = this.photos.length ? this.photos[0].image
                                    : poster ? poster.image : pass ? pass.image : ticket ? ticket.image
                                        : this.event.location.thumbnail;
                                console.log(this.event);
                                return [3 /*break*/, 4];
                            case 2:
                                _c = (_b = this.router).navigate;
                                _d = ['/show'];
                                return [4 /*yield*/, this.data.getRandomEventId()];
                            case 3:
                                _c.apply(_b, [_d.concat([_e.sent()]), { replaceUrl: true }]);
                                _e.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ShowComponent.prototype.openSongOptionsDialog = function (song, set, idx) {
        var _this = this;
        this.dialog.openMultiFunction(
        //song.name+"', "+this.event.venue.name+", "+this.event.date,
        set + "/Track " + idx + ": " + '"' + song.name + '"', ["add to playlist", "go to song"], [function () { return _this.addSongToPlaylist(song); },
            function () { return _this.router.navigate(['/song', song.id]); }]);
    };
    ShowComponent.prototype.openRecordingOptionsDialog = function (recording) {
        var _this = this;
        this.dialog.openMultiFunction("Recording " + recording.etreeId, ["add all to playlist", "go to recording"], [function () { return _this.addRecordingToPlaylist(recording); },
            function () { return _this.router.navigate(['/recording', recording.id]); }]);
    };
    ShowComponent.prototype.addSongToPlaylist = function (song) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var info, track;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data.getEventInfo(this.event.id)];
                    case 1:
                        info = _a.sent();
                        return [4 /*yield*/, this.data.getTrack(song, info)];
                    case 2:
                        track = _a.sent();
                        if (track)
                            this.player.addToPlaylist(track);
                        return [2 /*return*/];
                }
            });
        });
    };
    ShowComponent.prototype.addRecordingToPlaylist = function (recording) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var info, tracks;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.data.getEventInfo(this.event.id)];
                    case 1:
                        info = _a.sent();
                        return [4 /*yield*/, this.data.getRecordingTracks(recording, info)];
                    case 2:
                        tracks = _a.sent();
                        if (tracks)
                            tracks.forEach(function (t) { return _this.player.addToPlaylist(t); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-show',
            template: __webpack_require__(/*! ./show.component.html */ "./src/app/views/show.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"], _services_player_service__WEBPACK_IMPORTED_MODULE_7__["PlayerService"]])
    ], ShowComponent);
    return ShowComponent;
}());



/***/ }),

/***/ "./src/app/views/song.component.html":
/*!*******************************************!*\
  !*** ./src/app/views/song.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"song\" fxLayout=\"column\">\n  <gd-header *ngIf=\"song\" title=\"{{ song.name }}\"\n    subtitle=\"{{ subtitle }}\"></gd-header>\n  <div fxLayout=\"column\" class=\"gd-container\">\n    \n    <div fxLayout=\"column\" fxFlex class=\"gd-container\">\n      <ng-container *ngIf=\"song.composedBy && song.composedBy.length\">\n        Composed by:\n        <div *ngFor=\"let a of song.composedBy\"\n          [routerLink]=\"['/artist', a.id]\">{{a.name}}</div><br/>\n      </ng-container>\n      <ng-container *ngIf=\"song.lyricsBy && song.lyricsBy.length\">\n        Lyrics by:\n        <div *ngFor=\"let a of song.lyricsBy\"\n          [routerLink]=\"['/artist', a.id]\">{{a.name}}</div><br/>\n      </ng-container>\n      <ng-container *ngIf=\"firstPlayed\">\n        First played on: {{ firstPlayed }}<br/></ng-container>\n      <ng-container *ngIf=\"lastPlayed\">\n        Last played on: {{ lastPlayed }}<br/></ng-container>\n      <ng-container *ngIf=\"timesPlayed\">\n        Number of performances: {{ timesPlayed }}<br/></ng-container>\n      <ng-container *ngIf=\"totalRecordings\">\n        Total number of recordings: {{ totalRecordings }}<br/></ng-container>\n    </div>\n    \n    <p class=\"gd-container\">All performances of {{song.name}}:</p>\n    \n    <gd-shows [eventIds]=\"song.eventIds\" [onOptions]=\"openOptionsDialog.bind(this)\"></gd-shows>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/song.component.ts":
/*!*****************************************!*\
  !*** ./src/app/views/song.component.ts ***!
  \*****************************************/
/*! exports provided: SongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongComponent", function() { return SongComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");







var SongComponent = /** @class */ (function () {
    function SongComponent(data, player, router, route, dialog) {
        this.data = data;
        this.player = player;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
    }
    SongComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.route.paramMap.subscribe(function (params) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var _a, _b, _c, _d, _e;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_f) {
                        switch (_f.label) {
                            case 0:
                                if (!params.has('id')) return [3 /*break*/, 3];
                                _a = this;
                                return [4 /*yield*/, this.data.getSong(params.get('id'))];
                            case 1:
                                _a.song = _f.sent();
                                this.subtitle = lodash__WEBPACK_IMPORTED_MODULE_1__["uniq"](this.song.composedBy.concat(this.song.lyricsBy)
                                    .map(function (a) { return a.name; })).join(', ');
                                _b = this;
                                return [4 /*yield*/, this.data.getEventInfos(this.song.eventIds)];
                            case 2:
                                _b.events = _f.sent();
                                if (this.events.length) {
                                    this.firstPlayed = this.events[0].date;
                                    this.lastPlayed = this.events[this.events.length - 1].date;
                                    this.timesPlayed = this.events.length;
                                    this.totalRecordings = lodash__WEBPACK_IMPORTED_MODULE_1__["sum"](this.events.map(function (e) { return e.recordings.length; }));
                                }
                                _f.label = 3;
                            case 3:
                                if (!!this.song) return [3 /*break*/, 5];
                                _d = (_c = this.router).navigate;
                                _e = ['/song'];
                                return [4 /*yield*/, this.data.getRandomSong()];
                            case 4:
                                _d.apply(_c, [_e.concat([(_f.sent()).id]), { replaceUrl: true }]);
                                _f.label = 5;
                            case 5: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    SongComponent.prototype.openOptionsDialog = function (event) {
        var _this = this;
        this.dialog.openMultiFunction(this.song.name + "', " + event.venue + ", " + event.date, ["Add to playlist", "Go to show"], [function () { return _this.openRecordingsDialog(event); },
            function () { return _this.router.navigate(['/show', event.id]); }]);
    };
    SongComponent.prototype.openRecordingsDialog = function (event) {
        var _this = this;
        this.dialog.openSingleFunction("Recordings of '" + this.song.name + "', " + event.venue + ", " + event.date, event.recordings.map(function (r) { return r.etreeId; }), function (r) { return _this.addRecordingToPlaylist(r, event); });
    };
    SongComponent.prototype.addRecordingToPlaylist = function (recordingId, event) {
        var _this = this;
        this.data.getTracks(this.song, event, recordingId)
            .forEach(function (t) { return _this.player.addToPlaylist(t); });
    };
    SongComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'gd-song',
            template: __webpack_require__(/*! ./song.component.html */ "./src/app/views/song.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _services_player_service__WEBPACK_IMPORTED_MODULE_5__["PlayerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]])
    ], SongComponent);
    return SongComponent;
}());



/***/ }),

/***/ "./src/app/views/start.component.html":
/*!********************************************!*\
  !*** ./src/app/views/start.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Lato\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<style>\ndiv {font-family: \"Lato\", sans-serif; color:rgb(59, 59, 59)}\na.disabled {\n  pointer-events: none;\n  cursor: default;\n}\n</style>\n\n\n<!-- Page content -->\n<div class=\"w3-content\" style=\"max-width:2000px;margin-top:32px\">\n\n \n\n  <!-- The Band Section -->\n  <div class=\"w3-container w3-content w3-center w3-padding-16\" style=\"max-width:800px\" id=\"top\">\n    <!-- <h2 class=\"w3-wide\" [routerLink]=\"['/mapselect']\">THE GRATEFUL DEAD CONCERT EXPLORER</h2> -->\n    <img src=\"/assets/gd_logo1_start.png\" class=\"w3-round w3-margin-bottom\" alt=\"grateful dead explorer logo\" style=\"width:65%\" [routerLink]=\"['/mapselect']\">\n    <p style=\"cursor:pointer\" class=\"w3-opacity\"><i><u routerLink=\"/mapselect\">click to enter</u></i></p>\n      </div>\n\n  <div class=\"w3-container w3-content w3-center\" style=\"max-width:800px\" id=\"overviewstart\">\n      <p class=\"w3-justify\">\n          The Grateful Dead Concert Explorer is a Web application that enables user to navigate and explore digital libraries of live music recordings and discover and share associated artifacts that are dynamically linked within the application. It aims to demonstrate how Semantic Audio and Linked Data technologies can produce an improved user experience for browsing and exploring live music collections, by collecting information from a variety of different Web sources and employing Music Information Retrieval (MIR) techniques. \n        </p>\n          <p class=\"w3-justify\">\n          This prototype demonstrator focuses on the concerts of the Grateful Dead, motivated by the ongoing interest in detailed descriptions of their performances, evidenced by the large amount of information available on the Web detailing various aspects of those events. The application links the large number of concert recordings by the Grateful Dead available in the Internet Archive with audio analysis data and retrieves additional information and artifacts (e.g. band lineup, photos, scans of tickets and posters, reviews) from existing Web sources, to explore and visualize the collection. The project demonstrates mechanisms for musicians and the music industry to provide services for consumers to enjoy live music performances recognizing the social and cultural value of live music and fan communities.\n      </p>\n      <p class=\"w3-justify\">\n        This is an ongoing project in its early stages and not yet optimzed for mobile devices. \n      </p>\n      <p class=\"w3-justify\">\n        The technologies exploited in this work that were developed in the <a href=\"http://www.semanticaudio.ac.uk/\" target=\"_blank\"><u>EPSRC FAST IMPACt</u></a> project include:\n      </p>\n      <ul class=\"w3-justify\">\n          <li>Ontological data models for the representation of performed music as cultural artifacts, and its linkage to associated non-musical artifacts</li>\n          <li>Music information retrieval and processing algorithms for the automatic generation of playlists and audio mixes based on user-selected criteria</li>\n          <li>Music-structure analysis for the comparison of performances</li>\n          <li>Audio alignment of different user-generated recordings of live-music performances</li>\n      </ul>\n      <p class=\"w3-justify\">\n      The main functions of the current version are described in the following. Clicking on the top left logo opens a menu with links to this start page and the <a href=\"#mapstart\"><u><i>Map View</i></u></a>.\n    </p>\n  </div>\n\n  <div class=\"w3-container w3-content w3-center w3-padding-32\" style=\"max-width:800px\" id=\"mapstart\">\n      <h3 class=\"w3-wide\">Map View</h3>\n      <img class=\"image w3-round w3-margin-bottom\" lazyLoad=\"/assets/screens/scr_map.png\" alt=\"map view\" style=\"width:90%\">\n      <p class=\"w3-justify\">\n        The <i>Map View</i> shows the world map with markers indicating the locations of concerts. Clicking on a marker opens a menu with links to the pages for the venue (<a href=\"#venuestart\"><u><i>Venue View</i></u></a>), and to the pages for the concerts at that location (<a href=\"#showstart\"><u><i>Show View</i></u></a>). While by default all concert locations are displayed, specific tours can be selected from the pull-down menu on the top left. When selecting a tour, only the concerts from the tour are displayed on the map and connected by arrows indicating the order of concerts. The map also has a separate search function covering the concerts on the map.\n      </p>\n  </div>\n\n  <div class=\"w3-container w3-content w3-center w3-padding-32\" style=\"max-width:800px\" id=\"showstart\">\n      <h3 class=\"w3-wide\">Show View</h3>\n      <img class=\"image w3-round w3-margin-bottom\" lazyLoad=\"/assets/screens/scr_show.png\" alt=\"show view\" style=\"width:90%\">\n      <p class=\"w3-justify\">\n        The <i>Show View</i>&nbsp; shows information about a specific concert, including the location, venue, the setlist, the lineup and the additional recordings available in the archive. The button next to the recording IDs opens a dialogue to either go to the <a href=\"#recordingstart\"><u><i>Recording View</i></u></a>&nbsp; for the selected recording, or add all songs of the concert recording to the playlist of the <a href=\"#playerstart\"><u>audio player</u></a>. One can navigate to other pages by clicking on any item, for instance, clicking on the venue opens the <a href=\"#venuestart\"><u><i>Venue View</i></u></a>&nbsp; for the respective venue. Clicking on the button next to a song opens a dialogue to either go to the <a href=\"#songstart\"><u><i>Song View</i></u></a>&nbsp; or add the song to the playlist of the <a href=\"#playerstart\"><u>audio player</u></a>. Clicking on photos or other artifacts either opens a higher resolution image or opens the source page at the <a href=\"https://www.gdao.org/\" target=\"_blank\"><u>Grateful Dead Archive Online (GDAO)</u></a> in a new tab.\n      </p>\n  </div>\n\n  <div class=\"w3-container w3-content w3-center w3-padding-32\" style=\"max-width:800px\" id=\"songstart\">\n      <h3 class=\"w3-wide\">Song View</h3>\n      <img class=\"image w3-round w3-margin-bottom\" lazyLoad=\"/assets/screens/scr_song.png\" alt=\"song view\" style=\"width:90%\">\n      <p class=\"w3-justify\">\n        The <i>Song View</i> shows information about a selected song. This includes the composers at the top of the page and the number of performances and recordings available. Clicking on an item in the list of shows opens the <a href=\"#showstart\"><u><i>Show View</i></u></a>. The button next to the location opens a dialogue which additionally lets the user add the song from the respective show to the playlist of the <a href=\"#playerstart\"><u>audio player</u></a>. The dialogue shows all available recordings from the selected concert.\n      </p>\n  </div>\n\n  <div class=\"w3-container w3-content w3-center w3-padding-32\" style=\"max-width:800px\" id=\"locationstart\">\n      <h3 class=\"w3-wide\">Location View</h3>\n      <img class=\"image w3-round w3-margin-bottom\" lazyLoad=\"/assets/screens/scr_location.png\" alt=\"location view\" style=\"width:90%\">\n      <p class=\"w3-justify\">\n        The <i>Location View</i> shows information about a city where concerts were held. The list of shows provides links to the <a href=\"#showstart\"><u><i>Show View</i></u></a>&nbsp; for all shows at that location.\n      </p>\n  </div>\n\n  <div class=\"w3-container w3-content w3-center w3-padding-32\" style=\"max-width:800px\" id=\"venuestart\">\n      <h3 class=\"w3-wide\">Venue View</h3>\n      <img class=\"image w3-round w3-margin-bottom\" lazyLoad=\"/assets/screens/scr_venue.png\" alt=\"venue view\" style=\"width:90%\">\n      <p class=\"w3-justify\">\n          The <i>Venue View</i> shows information about a venue where concerts were held. The list of shows provides links to the <a href=\"#showstart\"><u><i>Show View</i></u></a>&nbsp; for all shows at that venue.\n      </p>\n  </div>\n\n  <div class=\"w3-container w3-content w3-center w3-padding-32\" style=\"max-width:800px\" id=\"recordingstart\">\n      <h3 class=\"w3-wide\">Recording View</h3>\n      <img class=\"image w3-round w3-margin-bottom\" lazyLoad=\"/assets/screens/scr_recording.png\" alt=\"recording view\" style=\"width:90%\">\n      <p class=\"w3-justify\">\n        The <i>Recording View</i> shows information about a specific recording from the <a href=\"https://archive.org/details/etree\" target=\"_blank\"><u>Live Music Archive</u></a> at the <a href=\"https://archive.org/\" target=\"_blank\"><u>Internet Archive</u></a>. The information includes source and lineage information of the recording, as well as the list of songs. Clicking on the button next to a song opens a dialogue to add the selected song to the playlist of the <a href=\"#playerstart\"><u>audio player</u></a>. Clicking on the logo under the track list opens the page for the recording at the <a href=\"https://archive.org/\" target=\"_blank\"><u>Internet Archive</u></a> in a new tab.\n      </p>\n  </div>\n\n  <div class=\"w3-container w3-content w3-center w3-padding-32\" style=\"max-width:800px\" id=\"playerstart\">\n      <h3 class=\"w3-wide\">Audio Player</h3>\n      <img class=\"image w3-round w3-margin-bottom\" lazyLoad=\"/assets/screens/scr_player.png\" alt=\"audio player\" style=\"width:90%\">\n      <p class=\"w3-justify\">\n        The audio player at the bottom of the page streams audio directly from the <a href=\"https://archive.org/details/etree\" target=\"_blank\"><u>Live Music Archive</u></a>. Songs can be added to the playlist from the Web application where songs are listed, for instance in the <a href=\"#showstart\"><u><i>Show View</i></u></a>, <a href=\"#recordingstart\"><u><i>Recording View</i></u></a>&nbsp; or <a href=\"#songstart\"><u><i>Song View</i></u></a>. In addition to the standard functions (play, stop, volume, etc.), the button with the eye symbol expands/hides the waveform view and playlist.\n      </p>\n  </div>\n\n  <div class=\"w3-container w3-content w3-center w3-padding-32\" style=\"max-width:800px\" id=\"additionalstart\">\n      <h3 class=\"w3-wide\">Additional Functions</h3>\n      <p class=\"w3-justify\">\n        Not all functions of the demo application are listed here, and there are more functions planned to be implemented in the near future including social media aspects and MIR, e.g. user discussions of concerts and the automatic generation of playlist mixes based on user-defined parameters and audio feature analysis results. \n      </p>\n        <p class=\"w3-justify\">\n          <s>A demo of a an automated mix playing excerpts of recordings of a specified song spanning the career of the Grateful Dead in a seamless mix while retrieving and displaying artifacts in real-time can be found <a class=\"disabled\" href=\"https://grateful-dead-live.github.io/plunderphonics/\" target=\"_blank\"><u><b>here</b></u></a>.</s> &nbsp; <b><i>down for maintenance</i></b>\n      </p>\n      <p class=\"w3-justify\">\n      \n    </p>\n  </div>\n\n  <div class=\"w3-container w3-content w3-center w3-padding-16\" style=\"max-width:800px\" id=\"logostart\">\n      <a href=\"https://archive.org\" target=\"_blank\"> <img src=\"https://archive.org/images/glogo.png\" class=\"w3-round w3-margin-right\" alt=\"internet archive logo\" style=\"width:8%\"></a>\n      <a href=\"http://c4dm.eecs.qmul.ac.uk\" target=\"_blank\"> <img src=\"https://sites.google.com/site/mathemusicalconversations/_/rsrc/1396930666900/about/c4dm_qml-logo.jpg\" class=\"w3-round w3-margin-right w3-margin-left\" alt=\"c4dm qmul logo\" style=\"width:18%\"></a>\n      <a href=\"https://epsrc.ukri.org/\" target=\"_blank\"> <img src=\"/assets/epsrc.jpg\" class=\"w3-round w3-margin-right w3-margin-left\" alt=\"epsrc logo\" style=\"width:17%\"></a>\n      <a href=\"https://gdao.org\" target=\"_blank\"> <img src=\"https://www.gdao.org/themes/gdao-theme/images/logo-gdao.png\" class=\"w3-round w3-margin-left\" alt=\"gdao logo\" style=\"width:8%\"></a>\n  </div>\n\n  <div class=\"w3-container w3-content w3-center\" style=\"max-width:800px\" id=\"emailstart\">\n      <a href=\"{{ 'mai' + 'lto' + ':' + part1 + part2 + part3 + part4 + part5 + part6 + part7 }}\"><u>Email us</u> </a>\n  </div>\n  \n  <p style=\"padding: 0 0 5em 0\"></p>\n<!-- End Page Content -->\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/start.component.ts":
/*!******************************************!*\
  !*** ./src/app/views/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var StartComponent = /** @class */ (function () {
    function StartComponent(sanitizer, router, route) {
        this.sanitizer = sanitizer;
        this.router = router;
        this.route = route;
    }
    StartComponent.prototype.ngOnInit = function () {
        this.part1 = "gdc";
        this.part2 = "oncert";
        this.part3 = "explo";
        this.part4 = "rer";
        var at = Math.pow(2, 6);
        this.part5 = String.fromCharCode(at);
        this.part6 = "gmai";
        this.part7 = "l.com";
    };
    StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-start',
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/views/start.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/app/views/venue.component.html":
/*!********************************************!*\
  !*** ./src/app/views/venue.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"venue\" fxLayout=\"column\">\n  <gd-header *ngIf=\"venue\" title='{{ venue.name }}'\n    subtitle='{{ location }}' imageUrl=\"{{ venue.image }}\">\n  </gd-header>\n  <div class=\"container\" fxLayout=\"row wrap\" fxLayout.xs=\"column\" fxFlex=\"100\">\n    <div class=\"gd-container\" fxLayout=\"column\" fxFlex=\"1 1 33%\" fxFlex.sm=\"1 1 50%\">\n      <p *ngIf=\"data.event\">The Band played on {{ data.event.date }}</p>\n      <p>{{ venue.comment }}</p>\n    </div>\n    <div class=\"gd-container\" fxLayout=\"column\" fxFlex=\"1 1 33%\" fxFlex.sm=\"1 1 50%\">\n      <img class=\"image\" [lazyLoad]=\"venue.thumbnail\" fxFlex=\"1 1 auto\">\n    </div>\n    <div *ngIf=\"venue.geoloc\" class=\"gd-container\" fxLayout=\"column\" fxFlex=\"1 1 33%\" fxFlex.sm=\"1 1 100%\">\n      <gd-map fxFlex=\"1 1 auto\" [style.height]=\"'100%'\" zoom=\"15\"\n        latitude=\"{{ venue.geoloc.lat }}\" longitude=\"{{ venue.geoloc.long }}\"></gd-map>\n    </div>\n  </div>\n  \n  <p class=\"gd-section\">All shows at the {{ venue.name }}:</p>\n  \n  <gd-shows [eventIds]=\"venue.eventIds\"></gd-shows>\n</div>"

/***/ }),

/***/ "./src/app/views/venue.component.ts":
/*!******************************************!*\
  !*** ./src/app/views/venue.component.ts ***!
  \******************************************/
/*! exports provided: VenueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenueComponent", function() { return VenueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");




var VenueComponent = /** @class */ (function () {
    function VenueComponent(data, router, route) {
        this.data = data;
        this.router = router;
        this.route = route;
    }
    VenueComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.route.paramMap.subscribe(function (params) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var _a, _b, _c, _d, _e;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_f) {
                        switch (_f.label) {
                            case 0:
                                if (!params.has('id')) return [3 /*break*/, 3];
                                _a = this;
                                return [4 /*yield*/, this.data.getVenue(params.get('id'))];
                            case 1:
                                _a.venue = _f.sent();
                                _b = this;
                                return [4 /*yield*/, this.data.getEventInfo(this.venue.eventIds[0])];
                            case 2:
                                _b.location = (_f.sent()).location;
                                _f.label = 3;
                            case 3:
                                if (!!this.venue) return [3 /*break*/, 5];
                                _d = (_c = this.router).navigate;
                                _e = ['/venue'];
                                return [4 /*yield*/, this.data.getRandomVenue()];
                            case 4:
                                _d.apply(_c, [_e.concat([(_f.sent()).id]), { replaceUrl: true }]);
                                _f.label = 5;
                            case 5: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    VenueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-venue',
            template: __webpack_require__(/*! ./venue.component.html */ "./src/app/views/venue.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], VenueComponent);
    return VenueComponent;
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

/***/ "./src/leaflet-fusesearch/src/leaflet.fusesearch.js":
/*!**********************************************************!*\
  !*** ./src/leaflet-fusesearch/src/leaflet.fusesearch.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


// From http://www.tutorialspoint.com/javascript/array_map.htm

if (!Array.prototype.map)
{
  Array.prototype.map = function(fun /*, thisp*/)
  {
    var len = this.length;
    if (typeof fun !== "function")
      throw new TypeError();

    var res = new Array(len);
    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in this)
        res[i] = fun.call(thisp, this[i], i, this);
    }

    return res;
  };
}

L.Control.FuseSearch = L.Control.extend({
    
    includes: L.Evented.prototype,
    
    options: {
        position: 'topright',
        title: 'Search',
        panelTitle: '',
        placeholder: 'Search',
        caseSensitive: false,
        threshold: 0.3,
        maxResultLength: null,
        showResultFct: null,
        showInvisibleFeatures: true,
        shouldSort: true
    },
    
    initialize: function(options) {
        L.setOptions(this, options);
        this._panelOnLeftSide = (this.options.position.indexOf("left") !== -1);
    },
    
    onAdd: function(map) {
        
        var ctrl = this._createControl();
        this._createPanel(map);
        this._setEventListeners();
        map.invalidateSize();
        
        return ctrl;
    },
    
    onRemove: function(map) {
        
        this.hidePanel(map);
        this._clearEventListeners();
        this._clearPanel(map);
        this._clearControl();
        
        return this;
    },
    
    _createControl: function() {

        var className = 'leaflet-fusesearch-control',
            container = L.DomUtil.create('div', className);

        // Control to open the search panel
        var butt = this._openButton = L.DomUtil.create('a', 'button', container);
        butt.href = '#';
        butt.title = this.options.title;
        var stop = L.DomEvent.stopPropagation;
        L.DomEvent.on(butt, 'click', stop)
                  .on(butt, 'mousedown', stop)
                  .on(butt, 'touchstart', stop)
                  .on(butt, 'mousewheel', stop)
                  .on(butt, 'MozMousePixelScroll', stop);
        L.DomEvent.on(butt, 'click', L.DomEvent.preventDefault);
        L.DomEvent.on(butt, 'click', this.showPanel, this);

        return container;
    },
    
    _clearControl: function() {
        // Unregister events to prevent memory leak
        var butt = this._openButton;
        var stop = L.DomEvent.stopPropagation;
        L.DomEvent.off(butt, 'click', stop)
                  .off(butt, 'mousedown', stop)
                  .off(butt, 'touchstart', stop)
                  .off(butt, 'mousewheel', stop)
                  .off(butt, 'MozMousePixelScroll', stop);
        L.DomEvent.off(butt, 'click', L.DomEvent.preventDefault);
        L.DomEvent.off(butt, 'click', this.showPanel);
    },
    
    _createPanel: function(map) {
        var _this = this;

        // Create the search panel
        var mapContainer = map.getContainer();
        var className = 'leaflet-fusesearch-panel',
            pane = this._panel = L.DomUtil.create('div', className, mapContainer);
        
        // Make sure we don't drag the map when we interact with the content
        var stop = L.DomEvent.stopPropagation;
        L.DomEvent.on(pane, 'click', stop)
                .on(pane, 'dblclick', stop)
                .on(pane, 'mousedown', stop)
                .on(pane, 'touchstart', stop)
                .on(pane, 'mousewheel', stop)
                .on(pane, 'MozMousePixelScroll', stop);

        // place the pane on the same side as the control
        if (this._panelOnLeftSide) {
            L.DomUtil.addClass(pane, 'left');
        } else {
            L.DomUtil.addClass(pane, 'right');
        }

        // Intermediate container to get the box sizing right
        var container = L.DomUtil.create('div', 'content', pane);
        
        var header = L.DomUtil.create('div', 'header', container);
        if (this.options.panelTitle) {
           var title = L.DomUtil.create('p', 'panel-title', header);
            title.innerHTML = this.options.panelTitle;
        }
        
        // Search image and input field
        L.DomUtil.create('img', 'search-image', header);
        this._input = L.DomUtil.create('input', 'search-input', header);
        this._input.maxLength = 30;
        this._input.placeholder = this.options.placeholder;
        this._input.onkeyup = function(evt) {
            var searchString = evt.currentTarget.value;
            _this.searchFeatures(searchString);
        };

        // Close button
        var close = this._closeButton = L.DomUtil.create('a', 'close', header);
        close.innerHTML = '&times;';
        L.DomEvent.on(close, 'click', this.hidePanel, this);
        
        // Where the result will be listed
        this._resultList = L.DomUtil.create('div', 'result-list', container); 
        
        return pane;
    },
    
    _clearPanel: function(map) {

        // Unregister event handlers
        var stop = L.DomEvent.stopPropagation;
        L.DomEvent.off(this._panel, 'click', stop)
                  .off(this._panel, 'dblclick', stop)
                  .off(this._panel, 'mousedown', stop)
                  .off(this._panel, 'touchstart', stop)
                  .off(this._panel, 'mousewheel', stop)
                  .off(this._panel, 'MozMousePixelScroll', stop);

        L.DomEvent.off(this._closeButton, 'click', this.hidePanel);
        
        var mapContainer = map.getContainer();
        mapContainer.removeChild(this._panel);
        
        this._panel = null;
    },
    
    _setEventListeners : function() {
        var that = this;
        var input = this._input;
        this._map.addEventListener('overlayadd', function() {
            that.searchFeatures(input.value);
        });
        this._map.addEventListener('overlayremove', function() {
            that.searchFeatures(input.value);
        });
    },
    
    _clearEventListeners: function() {
        this._map.removeEventListener('overlayadd');
        this._map.removeEventListener('overlayremove');        
    },
    
    isPanelVisible: function () {
        return L.DomUtil.hasClass(this._panel, 'visible');
    },

    showPanel: function () {
        if (! this.isPanelVisible()) {
            L.DomUtil.addClass(this._panel, 'visible');
            // Preserve map centre
            this._map.panBy([this.getOffset() * 0.5, 0], {duration: 0.5});
            this.fire('show');
            this._input.select();
            // Search again as visibility of features might have changed
            this.searchFeatures(this._input.value);
        }
    },

    hidePanel: function (e) {
        if (this.isPanelVisible()) {
            L.DomUtil.removeClass(this._panel, 'visible');
            // Move back the map centre - only if we still hold this._map
            // as this might already have been cleared up by removeFrom()
            if (null !== this._map) {
                this._map.panBy([this.getOffset() * -0.5, 0], {duration: 0.5});
            };
            this.fire('hide');
            if(e) {
                L.DomEvent.stopPropagation(e);
            }
        }
    },
    
    getOffset: function() {
        if (this._panelOnLeftSide) {
            return - this._panel.offsetWidth;
        } else {
            return this._panel.offsetWidth;
        }
    },

    indexFeatures: function(data, keys) {

        var jsonFeatures = data.features || data;
        
        this._keys = keys;
        var properties = jsonFeatures.map(function(feature) {
            // Keep track of the original feature
            feature.properties._feature = feature;
            return feature.properties;
        });
        
        var options = {
            keys: keys,
            caseSensitive: this.options.caseSensitive,
            threshold : this.options.threshold
        };
        
        this._fuseIndex = new Fuse(properties, options);
    },
    
    searchFeatures: function(string) {
        
        var result = this._fuseIndex.search(string);

        // Empty result list
        var listItems = document.querySelectorAll(".result-item");
        for (var i = 0 ; i < listItems.length ; i++) {
            listItems[i].remove();
        }

        var resultList = document.querySelector('.result-list');
        var num = 0;
        var max = this.options.maxResultLength;
        for (var i in result) {
            var props = result[i];
            var feature = props._feature;
            var popup = this._getFeaturePopupIfVisible(feature);
            
            if (undefined !== popup || this.options.showInvisibleFeatures) {
                this.createResultItem(props, resultList, popup);
                if (undefined !== max && ++num === max)
                    break;
            }
        }
    },
    
    refresh: function() {
        // Reapply the search on the indexed features - useful if features have been filtered out
        if (this.isPanelVisible()) {
            this.searchFeatures(this._input.value);
        }
    },
    
    _getFeaturePopupIfVisible: function(feature) {
        var layer = feature.layer;
        if (undefined !== layer && this._map.hasLayer(layer)) {
            return layer.getPopup();
        }
    },
    
    createResultItem: function(props, container, popup) {

        var _this = this;
        var feature = props._feature;

        // Create a container and open the associated popup on click
        var resultItem = L.DomUtil.create('p', 'result-item', container);
        
        if (undefined !== popup) {
            L.DomUtil.addClass(resultItem, 'clickable');
            resultItem.onclick = function() {
                
                if (window.matchMedia("(max-width:480px)").matches) {
                    _this.hidePanel();
                    feature.layer.openPopup();
                } else {
                    _this._panAndPopup(feature, popup);
                }
            };
        }

        // Fill in the container with the user-supplied function if any,
        // otherwise display the feature properties used for the search.
        if (null !== this.options.showResultFct) {
            this.options.showResultFct(feature, resultItem);
        } else {
            str = '<b>' + props[this._keys[0]] + '</b>';
            for (var i = 1; i < this._keys.length; i++) {
                str += '<br/>' + props[this._keys[i]];
            }
            resultItem.innerHTML = str;
        };

        return resultItem;
    },
    
    _panAndPopup : function(feature, popup) {
        // Temporarily adapt the map padding so that the popup is not hidden by the search pane
        if (this._panelOnLeftSide) {
            var oldPadding = popup.options.autoPanPaddingTopLeft;
            var newPadding = new L.Point(- this.getOffset(), 10);
            popup.options.autoPanPaddingTopLeft = newPadding;
            feature.layer.openPopup();
            popup.options.autoPanPaddingTopLeft = oldPadding;
        } else {
            var oldPadding = popup.options.autoPanPaddingBottomRight;
            var newPadding = new L.Point(this.getOffset(), 10);
            popup.options.autoPanPaddingBottomRight = newPadding;
            feature.layer.openPopup();
            popup.options.autoPanPaddingBottomRight = oldPadding;
        }
    }
});

L.control.fuseSearch = function(options) {
    return new L.Control.FuseSearch(options);
};


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

module.exports = __webpack_require__(/*! /Volumes/Journal/projects/grateful_dead_2019_git/web-app2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map