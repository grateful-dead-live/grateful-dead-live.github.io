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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _views_show_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/show.component */ "./src/app/views/show.component.ts");
/* harmony import */ var _views_location_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/location.component */ "./src/app/views/location.component.ts");
/* harmony import */ var _views_venue_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/venue.component */ "./src/app/views/venue.component.ts");
/* harmony import */ var _views_song_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/song.component */ "./src/app/views/song.component.ts");
/* harmony import */ var _views_recording_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/recording.component */ "./src/app/views/recording.component.ts");
/* harmony import */ var _views_artist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/artist.component */ "./src/app/views/artist.component.ts");
/* harmony import */ var _views_artifacts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/artifacts.component */ "./src/app/views/artifacts.component.ts");
/* harmony import */ var _views_mapselect_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/mapselect.component */ "./src/app/views/mapselect.component.ts");
/* harmony import */ var _views_start_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/start.component */ "./src/app/views/start.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _auth_resolve__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth.resolve */ "./src/app/auth.resolve.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _cookie_banner_privacy_policy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cookie-banner/privacy-policy.component */ "./src/app/cookie-banner/privacy-policy.component.ts");
/* harmony import */ var _views_playlist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/playlist.component */ "./src/app/views/playlist.component.ts");















const routes = [
    { path: '', redirectTo: '/mapselect', pathMatch: 'full' },
    //{ path: '', component: MapSelectComponent, resolve: { loggedIn: APIResolver} },
    { path: 'show', component: _views_show_component__WEBPACK_IMPORTED_MODULE_1__["ShowComponent"] },
    { path: 'show/:id', component: _views_show_component__WEBPACK_IMPORTED_MODULE_1__["ShowComponent"] },
    { path: 'location', component: _views_location_component__WEBPACK_IMPORTED_MODULE_2__["LocationComponent"] },
    { path: 'location/:id', component: _views_location_component__WEBPACK_IMPORTED_MODULE_2__["LocationComponent"] },
    { path: 'venue', component: _views_venue_component__WEBPACK_IMPORTED_MODULE_3__["VenueComponent"] },
    { path: 'venue/:id', component: _views_venue_component__WEBPACK_IMPORTED_MODULE_3__["VenueComponent"] },
    { path: 'song', component: _views_song_component__WEBPACK_IMPORTED_MODULE_4__["SongComponent"] },
    { path: 'song/:id', component: _views_song_component__WEBPACK_IMPORTED_MODULE_4__["SongComponent"] },
    { path: 'recording', component: _views_recording_component__WEBPACK_IMPORTED_MODULE_5__["RecordingComponent"] },
    { path: 'recording/:id', component: _views_recording_component__WEBPACK_IMPORTED_MODULE_5__["RecordingComponent"] },
    { path: 'artist', component: _views_artist_component__WEBPACK_IMPORTED_MODULE_6__["ArtistComponent"] },
    { path: 'artist/:id', component: _views_artist_component__WEBPACK_IMPORTED_MODULE_6__["ArtistComponent"] },
    { path: 'artifacts', component: _views_artifacts_component__WEBPACK_IMPORTED_MODULE_7__["ArtifactsComponent"] },
    { path: 'artifacts/:types', component: _views_artifacts_component__WEBPACK_IMPORTED_MODULE_7__["ArtifactsComponent"] },
    { path: 'mapselect', component: _views_mapselect_component__WEBPACK_IMPORTED_MODULE_8__["MapSelectComponent"] },
    { path: 'about', component: _views_start_component__WEBPACK_IMPORTED_MODULE_9__["StartComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], resolve: { loggedIn: _auth_resolve__WEBPACK_IMPORTED_MODULE_11__["APIResolver"] } },
    { path: 'comments', component: _comments_comments_component__WEBPACK_IMPORTED_MODULE_12__["CommentsComponent"] },
    { path: 'dataprivacy', component: _cookie_banner_privacy_policy_component__WEBPACK_IMPORTED_MODULE_13__["PrivacyPolicyComponent"] },
    { path: 'playlist/:id', component: _views_playlist_component__WEBPACK_IMPORTED_MODULE_14__["PlaylistComponent"] }
];
class AppRoutingModule {
}


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.sass.shim.ngstyle */ "./src/app/app.component.sass.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_player_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/player.component.ngfactory */ "./src/app/shared/player.component.ngfactory.js");
/* harmony import */ var _shared_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/player.component */ "./src/app/shared/player.component.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _cookie_banner_cookie_banner_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cookie-banner/cookie-banner.component.ngfactory */ "./src/app/cookie-banner/cookie-banner.component.ngfactory.js");
/* harmony import */ var _cookie_banner_cookie_banner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cookie-banner/cookie-banner.component */ "./src/app/cookie-banner/cookie-banner.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
















var styles_AppComponent = [_app_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "div", [["fxFlexFill", ""], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexFillDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexFillStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "div", [["fxFlex", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 4, "footer", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "gd-player", [], null, null, null, _shared_player_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_PlayerComponent_0"], _shared_player_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_PlayerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 114688, null, 0, _shared_player_component__WEBPACK_IMPORTED_MODULE_6__["PlayerComponent"], [_services_player_service__WEBPACK_IMPORTED_MODULE_7__["PlayerService"], _services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"], _services_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"], _auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "app-cookie-banner", [], null, null, null, _cookie_banner_cookie_banner_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_CookieBannerComponent_0"], _cookie_banner_cookie_banner_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_CookieBannerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 114688, null, 0, _cookie_banner_cookie_banner_component__WEBPACK_IMPORTED_MODULE_12__["CookieBannerComponent"], [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__["CookieService"]], null, null)], function (_ck, _v) { var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = ""; _ck(_v, 4, 0, currVal_1); _ck(_v, 6, 0); _ck(_v, 9, 0); _ck(_v, 11, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["DOCUMENT"], _services_player_service__WEBPACK_IMPORTED_MODULE_7__["PlayerService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.sass.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.sass.shim.ngstyle.js ***!
  \****************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"];



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/player.service */ "./src/app/services/player.service.ts");




class AppComponent {
    constructor(router, auth, doc, player) {
        //router.events.forEach((event) => {
        //  if (router.url.includes('/about')) {  
        //    this.start = true; 
        //  } else {
        //    this.start = false; 
        //  }
        //});
        this.router = router;
        this.auth = auth;
        this.doc = doc;
        this.player = player;
        //protected start: Boolean;
        //private cookieValue: string;
        this.currentUser = { userName: '', userId: '' };
        this.auth.userProfile$.subscribe(userProfile => {
            if (userProfile) {
                this.currentUser = {
                    userId: userProfile.sub.split("|")[1],
                    userName: userProfile['http://example.com/username']
                };
                gtag('set', { 'user_id': this.currentUser.userId });
            }
        });
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"] && _config__WEBPACK_IMPORTED_MODULE_2__["TRACKING"]) {
                gtag('config', _config__WEBPACK_IMPORTED_MODULE_2__["TRACKINGID"], {
                    'page_path': event.urlAfterRedirects
                });
            }
        });
    }
    ngOnInit() {
        this.googleAnalytics();
    }
    scriptHtml(html, src) {
        const s = this.doc.createElement('script');
        s.type = 'text/javascript';
        if (src)
            s.src = src;
        if (html)
            s.innerHTML = html;
        const head = this.doc.getElementsByTagName('head')[0];
        head.appendChild(s);
    }
    googleAnalytics() {
        this.scriptHtml(`
      // Set to the same value as the web property used on the site
      var gaProperty = "` + _config__WEBPACK_IMPORTED_MODULE_2__["TRACKINGID"] + `";
  
      // Disable tracking if the opt-out cookie exists.
      var disableStr = 'ga-disable-' + gaProperty;
  
      // if (document.cookie.indexOf(disableStr + '=true') > -1) {
      if (document.cookie.indexOf('gd-cookieconsent=') < 0) {
        //alert('revoke!');
        window[disableStr] = true;
      }
  
      // Opt-in function
      function gaOptIn() {
        var oneYearFromNow = new Date();
        oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
        document.cookie = 'gd-cookieconsent=allow; expires="' + oneYearFromNow.toGMTString() + '"';
        
        window[disableStr] = false;
        //document.getElementById("cookiebanner").remove();
        window.location.reload()
      }
  
      // Opt-out function
      function gaOptOut() {
        document.cookie = 'gd-cookieconsent=; expires = Thu, 01 Jan 1970 00:00:00 GMT';
        document.cookie = '_ga=; expires = Thu, 01 Jan 1970 00:00:00 GMT';
        document.cookie = '_gid=; expires = Thu, 01 Jan 1970 00:00:00 GMT';
        document.cookie = '_gat_gtag_` + _config__WEBPACK_IMPORTED_MODULE_2__["TRACKINGID"].replace(/-/g, '_') + `=; expires = Thu, 01 Jan 1970 00:00:00 GMT';
        window[disableStr] = true;
        window.location.reload()
      }
    `, null);
        // <!-- Global site tag (gtag.js) - Google Analytics -->
        this.scriptHtml(null, 'https://www.googletagmanager.com/gtag/js');
        this.scriptHtml(`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    `, null);
        this.scriptHtml(null, 'https://cdn.auth0.com/js/lock/11.23.1/lock.min.js');
    }
}


/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _views_show_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/show.component.ngfactory */ "./src/app/views/show.component.ngfactory.js");
/* harmony import */ var _views_location_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/location.component.ngfactory */ "./src/app/views/location.component.ngfactory.js");
/* harmony import */ var _views_venue_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/venue.component.ngfactory */ "./src/app/views/venue.component.ngfactory.js");
/* harmony import */ var _views_song_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/song.component.ngfactory */ "./src/app/views/song.component.ngfactory.js");
/* harmony import */ var _views_recording_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/recording.component.ngfactory */ "./src/app/views/recording.component.ngfactory.js");
/* harmony import */ var _views_artist_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/artist.component.ngfactory */ "./src/app/views/artist.component.ngfactory.js");
/* harmony import */ var _views_artifacts_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/artifacts.component.ngfactory */ "./src/app/views/artifacts.component.ngfactory.js");
/* harmony import */ var _views_mapselect_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/mapselect.component.ngfactory */ "./src/app/views/mapselect.component.ngfactory.js");
/* harmony import */ var _views_start_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/start.component.ngfactory */ "./src/app/views/start.component.ngfactory.js");
/* harmony import */ var _profile_profile_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component.ngfactory */ "./src/app/profile/profile.component.ngfactory.js");
/* harmony import */ var _comments_comments_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comments/comments.component.ngfactory */ "./src/app/comments/comments.component.ngfactory.js");
/* harmony import */ var _cookie_banner_privacy_policy_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cookie-banner/privacy-policy.component.ngfactory */ "./src/app/cookie-banner/privacy-policy.component.ngfactory.js");
/* harmony import */ var _views_playlist_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/playlist.component.ngfactory */ "./src/app/views/playlist.component.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../node_modules/@angular/material/dialog/index.ngfactory */ "./node_modules/@angular/material/dialog/index.ngfactory.js");
/* harmony import */ var _node_modules_fortawesome_angular_fontawesome_angular_fontawesome_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../node_modules/@fortawesome/angular-fontawesome/angular-fontawesome.ngfactory */ "./node_modules/@fortawesome/angular-fontawesome/angular-fontawesome.ngfactory.js");
/* harmony import */ var _node_modules_ngx_lightbox_lightbox_overlay_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../node_modules/ngx-lightbox/lightbox-overlay.component.ngfactory */ "./node_modules/ngx-lightbox/lightbox-overlay.component.ngfactory.js");
/* harmony import */ var _node_modules_ngx_lightbox_lightbox_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../node_modules/ngx-lightbox/lightbox.component.ngfactory */ "./node_modules/ngx-lightbox/lightbox.component.ngfactory.js");
/* harmony import */ var _shared_list_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/list-dialog.component.ngfactory */ "./src/app/shared/list-dialog.component.ngfactory.js");
/* harmony import */ var _shared_search_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/search-dialog.component.ngfactory */ "./src/app/shared/search-dialog.component.ngfactory.js");
/* harmony import */ var _shared_input_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/input-dialog.component.ngfactory */ "./src/app/shared/input-dialog.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm2015/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/fesm2015/bidi.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/fesm2015/menu.js");
/* harmony import */ var ngx_lightbox_lightbox_config_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-lightbox/lightbox-config.service */ "./node_modules/ngx-lightbox/lightbox-config.service.js");
/* harmony import */ var ngx_lightbox_lightbox_config_service__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox_lightbox_config_service__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var ngx_lightbox_lightbox_event_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ngx-lightbox/lightbox-event.service */ "./node_modules/ngx-lightbox/lightbox-event.service.js");
/* harmony import */ var ngx_lightbox_lightbox_event_service__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox_lightbox_event_service__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var ngx_lightbox_lightbox_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-lightbox/lightbox.service */ "./node_modules/ngx-lightbox/lightbox.service.js");
/* harmony import */ var ngx_lightbox_lightbox_service__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox_lightbox_service__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _services_dead_api_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/dead-api.service */ "./src/app/services/dead-api.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_google_analytics_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/google-analytics.service */ "./src/app/services/google-analytics.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _auth_resolve__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./auth.resolve */ "./src/app/auth.resolve.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _services_lightbox_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./services/lightbox.service */ "./src/app/services/lightbox.service.ts");
/* harmony import */ var _views_show_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./views/show.component */ "./src/app/views/show.component.ts");
/* harmony import */ var _views_location_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./views/location.component */ "./src/app/views/location.component.ts");
/* harmony import */ var _views_venue_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./views/venue.component */ "./src/app/views/venue.component.ts");
/* harmony import */ var _views_song_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./views/song.component */ "./src/app/views/song.component.ts");
/* harmony import */ var _views_recording_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./views/recording.component */ "./src/app/views/recording.component.ts");
/* harmony import */ var _views_artist_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./views/artist.component */ "./src/app/views/artist.component.ts");
/* harmony import */ var _views_artifacts_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./views/artifacts.component */ "./src/app/views/artifacts.component.ts");
/* harmony import */ var _views_mapselect_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./views/mapselect.component */ "./src/app/views/mapselect.component.ts");
/* harmony import */ var _views_start_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./views/start.component */ "./src/app/views/start.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _cookie_banner_privacy_policy_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./cookie-banner/privacy-policy.component */ "./src/app/cookie-banner/privacy-policy.component.ts");
/* harmony import */ var _views_playlist_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./views/playlist.component */ "./src/app/views/playlist.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/flex-layout/grid */ "./node_modules/@angular/flex-layout/esm2015/grid.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/fesm2015/scrolling.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");
/* harmony import */ var _asymmetrik_ngx_leaflet_dist_leaflet_leaflet_module__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet/dist/leaflet/leaflet.module */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/leaflet.module.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/fesm2015/slider.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/fesm2015/progress-spinner.js");
/* harmony import */ var ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ngx-sharebuttons */ "./node_modules/ngx-sharebuttons/fesm2015/ngx-sharebuttons.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var ngx_sharebuttons_button__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ngx-sharebuttons/button */ "./node_modules/ngx-sharebuttons/fesm2015/ngx-sharebuttons-button.js");
/* harmony import */ var ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ngx-sharebuttons/buttons */ "./node_modules/ngx-sharebuttons/fesm2015/ngx-sharebuttons-buttons.js");
/* harmony import */ var ngx_sharebuttons_icons__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ngx-sharebuttons/icons */ "./node_modules/ngx-sharebuttons/fesm2015/ngx-sharebuttons-icons.js");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! @angular/youtube-player */ "./node_modules/@angular/youtube-player/fesm2015/youtube-player.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ng2_carouselamos__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ng2-carouselamos */ "./node_modules/ng2-carouselamos/fesm2015/ng2-carouselamos.js");
/* harmony import */ var ngx_lightbox_lightbox_module__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ngx-lightbox/lightbox.module */ "./node_modules/ngx-lightbox/lightbox.module.js");
/* harmony import */ var ngx_lightbox_lightbox_module__WEBPACK_IMPORTED_MODULE_86___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox_lightbox_module__WEBPACK_IMPORTED_MODULE_86__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 























































































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _views_show_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ShowComponentNgFactory"], _views_location_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["LocationComponentNgFactory"], _views_venue_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["VenueComponentNgFactory"], _views_song_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["SongComponentNgFactory"], _views_recording_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RecordingComponentNgFactory"], _views_artist_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ArtistComponentNgFactory"], _views_artifacts_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["ArtifactsComponentNgFactory"], _views_mapselect_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["MapSelectComponentNgFactory"], _views_start_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["StartComponentNgFactory"], _profile_profile_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["ProfileComponentNgFactory"], _comments_comments_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["CommentsComponentNgFactory"], _cookie_banner_privacy_policy_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["PrivacyPolicyComponentNgFactory"], _views_playlist_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["PlaylistComponentNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["MatDialogContainerNgFactory"], _node_modules_fortawesome_angular_fontawesome_angular_fontawesome_ngfactory__WEBPACK_IMPORTED_MODULE_18__["FaIconComponentNgFactory"], _node_modules_fortawesome_angular_fontawesome_angular_fontawesome_ngfactory__WEBPACK_IMPORTED_MODULE_18__["FaDuotoneIconComponentNgFactory"], _node_modules_ngx_lightbox_lightbox_overlay_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["LightboxOverlayComponentNgFactory"], _node_modules_ngx_lightbox_lightbox_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["LightboxComponentNgFactory"], _shared_list_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["ListDialogComponentNgFactory"], _shared_search_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["SearchDialogComponentNgFactory"], _shared_input_dialog_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["InputDialogComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_x"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_g"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_25__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_25__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_25__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_27__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_27__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_27__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_25__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_27__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_27__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_27__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_29__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_29__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_29__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_29__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_29__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_29__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_29__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p1_0, p1_1) { return [p0_0, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_30__["removeStyles"](p1_0, p1_1)]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_29__["ROUTER_INITIALIZER"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_32__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_34__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_25__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_25__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__["ɵangular_material_src_material_menu_menu_b"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_lightbox_lightbox_config_service__WEBPACK_IMPORTED_MODULE_37__["LightboxConfig"], ngx_lightbox_lightbox_config_service__WEBPACK_IMPORTED_MODULE_37__["LightboxConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_lightbox_lightbox_event_service__WEBPACK_IMPORTED_MODULE_38__["LightboxEvent"], ngx_lightbox_lightbox_event_service__WEBPACK_IMPORTED_MODULE_38__["LightboxEvent"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_lightbox_lightbox_service__WEBPACK_IMPORTED_MODULE_39__["Lightbox"], ngx_lightbox_lightbox_service__WEBPACK_IMPORTED_MODULE_39__["Lightbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], ngx_lightbox_lightbox_config_service__WEBPACK_IMPORTED_MODULE_37__["LightboxConfig"], ngx_lightbox_lightbox_event_service__WEBPACK_IMPORTED_MODULE_38__["LightboxEvent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_lightbox_lightbox_event_service__WEBPACK_IMPORTED_MODULE_38__["LightboxWindowRef"], ngx_lightbox_lightbox_event_service__WEBPACK_IMPORTED_MODULE_38__["LightboxWindowRef"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_dead_api_service__WEBPACK_IMPORTED_MODULE_40__["DeadApiService"], _services_dead_api_service__WEBPACK_IMPORTED_MODULE_40__["DeadApiService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_data_service__WEBPACK_IMPORTED_MODULE_41__["DataService"], _services_data_service__WEBPACK_IMPORTED_MODULE_41__["DataService"], [_services_dead_api_service__WEBPACK_IMPORTED_MODULE_40__["DeadApiService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_google_analytics_service__WEBPACK_IMPORTED_MODULE_42__["GoogleAnalyticsService"], _services_google_analytics_service__WEBPACK_IMPORTED_MODULE_42__["GoogleAnalyticsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_dialog_service__WEBPACK_IMPORTED_MODULE_43__["DialogService"], _services_dialog_service__WEBPACK_IMPORTED_MODULE_43__["DialogService"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialog"], _services_data_service__WEBPACK_IMPORTED_MODULE_41__["DataService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_player_service__WEBPACK_IMPORTED_MODULE_44__["PlayerService"], _services_player_service__WEBPACK_IMPORTED_MODULE_44__["PlayerService"], [_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_42__["GoogleAnalyticsService"], _services_data_service__WEBPACK_IMPORTED_MODULE_41__["DataService"], _services_dialog_service__WEBPACK_IMPORTED_MODULE_43__["DialogService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_45__["CookieService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_45__["CookieService"], [_angular_common__WEBPACK_IMPORTED_MODULE_25__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _auth_resolve__WEBPACK_IMPORTED_MODULE_46__["APIResolver"], _auth_resolve__WEBPACK_IMPORTED_MODULE_46__["APIResolver"], [_auth_service__WEBPACK_IMPORTED_MODULE_47__["AuthService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_lightbox_service__WEBPACK_IMPORTED_MODULE_48__["LightboxService"], _services_lightbox_service__WEBPACK_IMPORTED_MODULE_48__["LightboxService"], [ngx_lightbox_lightbox_service__WEBPACK_IMPORTED_MODULE_39__["Lightbox"], ngx_lightbox_lightbox_config_service__WEBPACK_IMPORTED_MODULE_37__["LightboxConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_25__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_platform_browser_platform_browser_m"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_i"](p1_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_29__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_29__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_25__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["HashLocationStrategy"], [_angular_common__WEBPACK_IMPORTED_MODULE_25__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_25__["APP_BASE_HREF"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_25__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_25__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ROUTES"], function () { return [[{ path: "", redirectTo: "/mapselect", pathMatch: "full" }, { path: "show", component: _views_show_component__WEBPACK_IMPORTED_MODULE_49__["ShowComponent"] }, { path: "show/:id", component: _views_show_component__WEBPACK_IMPORTED_MODULE_49__["ShowComponent"] }, { path: "location", component: _views_location_component__WEBPACK_IMPORTED_MODULE_50__["LocationComponent"] }, { path: "location/:id", component: _views_location_component__WEBPACK_IMPORTED_MODULE_50__["LocationComponent"] }, { path: "venue", component: _views_venue_component__WEBPACK_IMPORTED_MODULE_51__["VenueComponent"] }, { path: "venue/:id", component: _views_venue_component__WEBPACK_IMPORTED_MODULE_51__["VenueComponent"] }, { path: "song", component: _views_song_component__WEBPACK_IMPORTED_MODULE_52__["SongComponent"] }, { path: "song/:id", component: _views_song_component__WEBPACK_IMPORTED_MODULE_52__["SongComponent"] }, { path: "recording", component: _views_recording_component__WEBPACK_IMPORTED_MODULE_53__["RecordingComponent"] }, { path: "recording/:id", component: _views_recording_component__WEBPACK_IMPORTED_MODULE_53__["RecordingComponent"] }, { path: "artist", component: _views_artist_component__WEBPACK_IMPORTED_MODULE_54__["ArtistComponent"] }, { path: "artist/:id", component: _views_artist_component__WEBPACK_IMPORTED_MODULE_54__["ArtistComponent"] }, { path: "artifacts", component: _views_artifacts_component__WEBPACK_IMPORTED_MODULE_55__["ArtifactsComponent"] }, { path: "artifacts/:types", component: _views_artifacts_component__WEBPACK_IMPORTED_MODULE_55__["ArtifactsComponent"] }, { path: "mapselect", component: _views_mapselect_component__WEBPACK_IMPORTED_MODULE_56__["MapSelectComponent"] }, { path: "about", component: _views_start_component__WEBPACK_IMPORTED_MODULE_57__["StartComponent"] }, { path: "profile", component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_58__["ProfileComponent"], resolve: { loggedIn: _auth_resolve__WEBPACK_IMPORTED_MODULE_46__["APIResolver"] } }, { path: "comments", component: _comments_comments_component__WEBPACK_IMPORTED_MODULE_59__["CommentsComponent"] }, { path: "dataprivacy", component: _cookie_banner_privacy_policy_component__WEBPACK_IMPORTED_MODULE_60__["PrivacyPolicyComponent"] }, { path: "playlist/:id", component: _views_playlist_component__WEBPACK_IMPORTED_MODULE_61__["PlaylistComponent"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_29__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_29__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_29__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_29__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_62__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_62__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_30__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_30__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_34__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_34__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_63__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_63__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_64__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_64__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_65__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_65__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_66__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_66__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_30__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_31__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_67__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_67__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_68__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_68__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_69__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_69__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_69__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_69__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_70__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_70__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_71__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_70__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_25__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_70__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_70__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_72__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_72__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_73__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_73__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_74__["LazyLoadImageModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_74__["LazyLoadImageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _asymmetrik_ngx_leaflet_dist_leaflet_leaflet_module__WEBPACK_IMPORTED_MODULE_75__["LeafletModule"], _asymmetrik_ngx_leaflet_dist_leaflet_leaflet_module__WEBPACK_IMPORTED_MODULE_75__["LeafletModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slider__WEBPACK_IMPORTED_MODULE_76__["MatSliderModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_76__["MatSliderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_77__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_77__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_78__["ShareModule"], ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_78__["ShareModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_79__["FontAwesomeModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_79__["FontAwesomeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_sharebuttons_button__WEBPACK_IMPORTED_MODULE_80__["ShareButtonModule"], ngx_sharebuttons_button__WEBPACK_IMPORTED_MODULE_80__["ShareButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_81__["ShareButtonsModule"], ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_81__["ShareButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_sharebuttons_icons__WEBPACK_IMPORTED_MODULE_82__["ShareIconsModule"], ngx_sharebuttons_icons__WEBPACK_IMPORTED_MODULE_82__["ShareIconsModule"], [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_79__["FaIconLibrary"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_youtube_player__WEBPACK_IMPORTED_MODULE_83__["YouTubePlayerModule"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_83__["YouTubePlayerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_84__["NgSelectModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_84__["NgSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_carouselamos__WEBPACK_IMPORTED_MODULE_85__["Ng2CarouselamosModule"], ng2_carouselamos__WEBPACK_IMPORTED_MODULE_85__["Ng2CarouselamosModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_lightbox_lightbox_module__WEBPACK_IMPORTED_MODULE_86__["LightboxModule"], ngx_lightbox_lightbox_module__WEBPACK_IMPORTED_MODULE_86__["LightboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CURRENCY_CODE"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_u"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"], "root", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_84__["SELECTION_MODEL_FACTORY"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_84__["ɵb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, "window", _app_module__WEBPACK_IMPORTED_MODULE_1__["ɵ0"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, "document", _app_module__WEBPACK_IMPORTED_MODULE_1__["ɵ1"], [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, ɵ0, ɵ1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
const ɵ0 = window, ɵ1 = document;
class AppModule {
}



/***/ }),

/***/ "./src/app/auth.resolve.ts":
/*!*********************************!*\
  !*** ./src/app/auth.resolve.ts ***!
  \*********************************/
/*! exports provided: APIResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIResolver", function() { return APIResolver; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");

class APIResolver {
    constructor(auth) {
        this.auth = auth;
    }
    resolve() {
        console.log('resolve');
        return this.auth.isAuthenticated$;
    }
    getUser(loggedIn) {
        return {
            userId: loggedIn.sub.split("|")[1],
            userName: loggedIn['http://example.com/username']
        };
    }
}


/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/auth0-spa-js */ "./node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.esm.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");







class AuthService {
    constructor(router) {
        this.router = router;
        // Create an observable of Auth0 instance of client
        this.auth0Client$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(Object(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
            domain: _config__WEBPACK_IMPORTED_MODULE_4__["AUTH0DOMAIN"],
            client_id: _config__WEBPACK_IMPORTED_MODULE_4__["AUTH0CLIENTID"],
            redirect_uri: `${window.location.origin}`
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1), // Every subscription receives the same shared value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err)));
        // Define observables for SDK methods that return promises by default
        // For each Auth0 SDK method, first ensure the client instance is ready
        // concatMap: Using the client instance, call SDK method; SDK returns a promise
        // from: Convert that resulting promise into an observable
        this.isAuthenticated$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])((client) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(client.isAuthenticated())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => this.loggedIn = res));
        this.handleRedirectCallback$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])((client) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(client.handleRedirectCallback())));
        // Create subject and public observable of user profile data
        this.userProfileSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.userProfile$ = this.userProfileSubject$.asObservable();
        // Create a local property for login status
        this.loggedIn = null;
        // On initial load, check authentication state with authorization server
        // Set up local auth streams if user is already authenticated
        this.localAuthSetup();
        // Handle redirect from Auth0 login
        this.handleAuthCallback();
    }
    // When calling, options can be passed if desired
    // https://auth0.github.io/auth0-spa-js/classes/auth0client.html#getuser
    getUser$(options) {
        return this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])((client) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(client.getUser(options))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(user => this.userProfileSubject$.next(user)));
    }
    localAuthSetup() {
        // This should only be called on app initialization
        // Set up local authentication streams
        const checkAuth$ = this.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])((loggedIn) => {
            if (loggedIn) {
                // If authenticated, get user and set in app
                // NOTE: you could pass options here if needed
                return this.getUser$();
            }
            // If not authenticated, return stream that emits 'false'
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(loggedIn);
        }));
        checkAuth$.subscribe();
    }
    login(redirectPath = this.router.url) {
        // A desired redirect path can be passed to login method
        // (e.g., from a route guard)
        // Ensure Auth0 client instance exists
        this.auth0Client$.subscribe((client) => {
            // Call method to log in
            client.loginWithRedirect({
                redirect_uri: `${window.location.origin}`,
                appState: { target: redirectPath }
            });
        });
    }
    handleAuthCallback() {
        // Call when app reloads after user logs in with Auth0
        const params = window.location.search;
        if (params.includes('code=') && params.includes('state=')) {
            let targetRoute; // Path to redirect to after login processsed
            const authComplete$ = this.handleRedirectCallback$.pipe(
            // Have client, now call method to handle auth callback redirect
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(cbRes => {
                // Get and set target redirect route from callback results
                targetRoute = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : this.router.url;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(() => {
                // Redirect callback complete; get user and login status
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
                    this.getUser$(),
                    this.isAuthenticated$
                ]);
            }));
            // Subscribe to authentication completion observable
            // Response will be an array of user and login status
            authComplete$.subscribe(([user, loggedIn]) => {
                // Redirect to target route after callback processing
                this.router.navigate([targetRoute]);
            });
        }
    }
    logout() {
        // Ensure Auth0 client instance exists
        this.auth0Client$.subscribe((client) => {
            // Call method to log out
            client.logout({
                client_id: _config__WEBPACK_IMPORTED_MODULE_4__["AUTH0CLIENTID"],
                returnTo: `${window.location.origin}`
            });
        });
    }
}
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ factory: function AuthService_Factory() { return new AuthService(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); }, token: AuthService, providedIn: "root" });


/***/ }),

/***/ "./src/app/comments/chatter-box.component.css.shim.ngstyle.js":
/*!********************************************************************!*\
  !*** ./src/app/comments/chatter-box.component.css.shim.ngstyle.js ***!
  \********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = [".vis-chat-window[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    font-family: 'Roboto';\n  }\n  .vis-chat-window-header[_ngcontent-%COMP%] {\n    \n    \n    background-color: #ffffff;\n    color: #000000;\n    \n    \n    \n    font-size: 1.5em;\n  }\n  .vis-chat-window-body[_ngcontent-%COMP%] {\n    height: -webkit-fill-available;\n    overflow: scroll;\n    display: inline-grid;\n    border-right: #215AA8 solid 1px;\n    border-left: #215AA8 solid 1px;\n  }\n  .vis-chat-window-footer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: -webkit-fill-available;\n    background-color: #ffffff;\n    \n    \n    \n    \n  }\n  .vis-chat-window-header-text[_ngcontent-%COMP%] {\n    font-size: 1em;\n    \n    vertical-align: middle;\n    \n    margin-left: 0.8em;\n  }\n  .vis-chat-window-header-minimize[_ngcontent-%COMP%]:hover {\n    background-color: #204589;\n  }\n  #vis-comment-textField[_ngcontent-%COMP%] {\n    width: -webkit-fill-available;\n    font-size: 18px;\n    padding-top: 0.8em;\n    padding-bottom: 0.8em;\n    padding-left: 0.8em;\n    text-decoration: none;\n    border: none;\n    border-top: 1px solid #cccccc;\n    border-bottom: 1px solid #cccccc;\n    border-right: #cccccc solid 0.5px;\n    border-left: #cccccc solid 0.5px;\n    overflow: scroll;\n    height: 100px;\n    resize: none;\n    font-family: 'Roboto';\n  }\n  #vis-comment-textField[_ngcontent-%COMP%]:focus {\n    outline: none;\n  }\n    .cdk-overlay-pane .chatBox {\n    min-width: 400px;\n    border: 1px solid #4f4f4f;\n  }\n    .cdk-overlay-pane .mat-menu-content {\n    padding: 0px !important;\n    overflow: unset !important;\n  }\n    .cdk-overlay-pane .mat-menu-panel {\n    overflow: unset !important;\n  }\n  [_ngcontent-%COMP%]::-moz-placeholder {\n    \n    font-size: 14px;\n    color: #8c8c8c;\n  }\n  [_ngcontent-%COMP%]::-ms-input-placeholder {\n    \n    font-size: 14px;\n    color: #8c8c8c;\n  }\n  [_ngcontent-%COMP%]::placeholder {\n    \n    font-size: 14px;\n    color: #8c8c8c;\n  }\n  [_ngcontent-%COMP%]:-ms-input-placeholder {\n    \n    font-size: 14px;\n  }\n  [_ngcontent-%COMP%]::-ms-input-placeholder {\n    \n    font-size: 14px;\n  }\n  .comment[_ngcontent-%COMP%] {\n    \n    justify-content: space-between;\n    margin: 0.6em;\n  }\n  .comment-currentUser[_ngcontent-%COMP%] {\n    \n    justify-content: space-between;\n    \n    margin: 0.6em;\n  }\n  .user-image[_ngcontent-%COMP%] {\n    height: 50px;\n    width: 50px;\n    border-radius: 500px;\n    border: #838384 solid 1px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 50px;\n    font-size: 24px;\n  }\n  .comment-bubble[_ngcontent-%COMP%] {\n    white-space: pre-wrap;\n    background-color: #f0f0f0;\n    margin-left: 0.3em;\n    margin-right: 0.3em;\n    width: -webkit-fill-available;\n    \n    \n    \n    color: #000000;\n    padding: 1em;\n    font-size: 1em;\n  }\n  .comment-bubble-currentUser[_ngcontent-%COMP%]{\n    white-space: pre-wrap;\n    background-color: #f0f0f0;\n    margin-left: 0.3em;\n    margin-right: 0.3em;\n    width: -webkit-fill-available;\n    \n    \n    \n    \n    color: #000000;\n    padding: 1em;\n    font-size: 1em;\n  }\n  .user-name[_ngcontent-%COMP%] {\n    color: #000000;\n    font-weight: bolder;\n    font-size: 1em;\n  }\n  .color-gray[_ngcontent-%COMP%] {\n    color: #555555;\n  }\n  .timestamp[_ngcontent-%COMP%] {\n    bottom: 0px;\n    font-size: 0.7em;\n    float: right;\n    font-style: italic;\n  }\n  .error-div[_ngcontent-%COMP%] {\n    color: #828282;\n    text-align: center;\n    margin-top: 10em;\n  }\n  .character-count[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n    float: right;\n    color: #000000;\n    margin-right: 0.5em;\n    font-style: italic;\n    padding: 0.5em;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudHMvY2hhdHRlci1ib3guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0IsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QiwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0VBSkE7SUFDRSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGNBQWM7RUFDaEI7RUFKQTtJQUNFLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsY0FBYztFQUNoQjtFQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLGVBQWU7RUFDakI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLGFBQWE7RUFDZjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyxjQUFjO0lBQ2QsWUFBWTtJQUNaLGNBQWM7RUFDaEI7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLG9DQUFvQztJQUNwQyxtQ0FBbUM7SUFDbkMsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCxZQUFZO0lBQ1osY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21tZW50cy9jaGF0dGVyLWJveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpcy1jaGF0LXdpbmRvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgfVxuICAudmlzLWNoYXQtd2luZG93LWhlYWRlciB7XG4gICAgLypkaXNwbGF5OiBmbGV4OyovXG4gICAgLypqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7Ki9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIC8qcGFkZGluZzogMC44ZW07Ki9cbiAgICAvKmJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4OyovXG4gICAgLypib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4OyovXG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgfVxuICAudmlzLWNoYXQtd2luZG93LWJvZHkge1xuICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICAgIGJvcmRlci1yaWdodDogIzIxNUFBOCBzb2xpZCAxcHg7XG4gICAgYm9yZGVyLWxlZnQ6ICMyMTVBQTggc29saWQgMXB4O1xuICB9XG4gIC52aXMtY2hhdC13aW5kb3ctZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAvKmJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4OyovXG4gICAgLypib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4OyovXG4gICAgLypib3JkZXItcmlnaHQ6ICMyMTVBQTggc29saWQgMXB4OyovXG4gICAgLypib3JkZXItbGVmdDogIzIxNUFBOCBzb2xpZCAxcHg7Ki9cbiAgfVxuICAudmlzLWNoYXQtd2luZG93LWhlYWRlci10ZXh0IHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICAvKmZvbnQtd2VpZ2h0OiBib2xkOyovXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAvKmxpbmUtaGVpZ2h0OiA1MHB4OyovXG4gICAgbWFyZ2luLWxlZnQ6IDAuOGVtO1xuICB9XG4gIC52aXMtY2hhdC13aW5kb3ctaGVhZGVyLW1pbmltaXplOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA0NTg5O1xuICB9XG4gICN2aXMtY29tbWVudC10ZXh0RmllbGQge1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nLXRvcDogMC44ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuOGVtO1xuICAgIHBhZGRpbmctbGVmdDogMC44ZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjY2NjYztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcbiAgICBib3JkZXItcmlnaHQ6ICNjY2NjY2Mgc29saWQgMC41cHg7XG4gICAgYm9yZGVyLWxlZnQ6ICNjY2NjY2Mgc29saWQgMC41cHg7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIH1cbiAgI3Zpcy1jb21tZW50LXRleHRGaWVsZDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICA6Om5nLWRlZXAgLmNkay1vdmVybGF5LXBhbmUgLmNoYXRCb3gge1xuICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRmNGY0ZjtcbiAgfVxuICA6Om5nLWRlZXAgLmNkay1vdmVybGF5LXBhbmUgLm1hdC1tZW51LWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG4gIDo6bmctZGVlcCAuY2RrLW92ZXJsYXktcGFuZSAubWF0LW1lbnUtcGFuZWwge1xuICAgIG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG4gIDo6cGxhY2Vob2xkZXIge1xuICAgIC8qIEZpcmVmb3gsIENocm9tZSwgT3BlcmEgKi9cbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM4YzhjOGM7XG4gIH1cbiAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIC8qIE1pY3Jvc29mdCBFZGdlICovXG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5jb21tZW50IHtcbiAgICAvKmRpc3BsYXk6IGZsZXg7Ki9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAwLjZlbTtcbiAgfVxuICAuY29tbWVudC1jdXJyZW50VXNlciB7XG4gICAgLypkaXNwbGF5OiBmbGV4OyovXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC8qZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyovXG4gICAgbWFyZ2luOiAwLjZlbTtcbiAgfVxuICAudXNlci1pbWFnZSB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xuICAgIGJvcmRlcjogIzgzODM4NCBzb2xpZCAxcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIC5jb21tZW50LWJ1YmJsZSB7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgbWFyZ2luLWxlZnQ6IDAuM2VtO1xuICAgIG1hcmdpbi1yaWdodDogMC4zZW07XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgLypib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDsqL1xuICAgIC8qYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7Ki9cbiAgICAvKmJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7Ki9cbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cblxuICAuY29tbWVudC1idWJibGUtY3VycmVudFVzZXJ7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgbWFyZ2luLWxlZnQ6IDAuM2VtO1xuICAgIG1hcmdpbi1yaWdodDogMC4zZW07XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgLypib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4OyovXG4gICAgLypib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDsqL1xuICAgIC8qYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDsqL1xuICAgIC8qYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDsqL1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxuICAudXNlci1uYW1lIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG4gIC5jb2xvci1ncmF5IHtcbiAgICBjb2xvcjogIzU1NTU1NTtcbiAgfVxuICAudGltZXN0YW1wIHtcbiAgICBib3R0b206IDBweDtcbiAgICBmb250LXNpemU6IDAuN2VtO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIH1cbiAgLmVycm9yLWRpdiB7XG4gICAgY29sb3I6ICM4MjgyODI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwZW07XG4gIH1cbiAgLmNoYXJhY3Rlci1jb3VudCB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgcGFkZGluZzogMC41ZW07XG4gIH0iXX0= */"];



/***/ }),

/***/ "./src/app/comments/chatter-box.component.ngfactory.js":
/*!*************************************************************!*\
  !*** ./src/app/comments/chatter-box.component.ngfactory.js ***!
  \*************************************************************/
/*! exports provided: RenderType_ChatterBoxComponent, View_ChatterBoxComponent_0, View_ChatterBoxComponent_Host_0, ChatterBoxComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChatterBoxComponent", function() { return RenderType_ChatterBoxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChatterBoxComponent_0", function() { return View_ChatterBoxComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChatterBoxComponent_Host_0", function() { return View_ChatterBoxComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatterBoxComponentNgFactory", function() { return ChatterBoxComponentNgFactory; });
/* harmony import */ var _chatter_box_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatter-box.component.css.shim.ngstyle */ "./src/app/comments/chatter-box.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _chatter_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chatter-box.component */ "./src/app/comments/chatter-box.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 







var styles_ChatterBoxComponent = [_chatter_box_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChatterBoxComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChatterBoxComponent, data: {} });

function View_ChatterBoxComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "error-div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.errorMsg; _ck(_v, 1, 0, currVal_0); }); }
function View_ChatterBoxComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onDeleteButton(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["delete"]))], null, null); }
function View_ChatterBoxComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onReportButton(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["report"]))], null, null); }
function View_ChatterBoxComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 22, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 21, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 18, "div", [["class", "comment-bubble col-10"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]]], { ngClass: [0, "ngClass"], klass: [1, "klass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 7, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](18, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChatterBoxComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChatterBoxComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (((_v.context.$implicit.userId !== null) && (_v.context.$implicit.userId !== undefined)) ? ((_v.context.$implicit.userId == _co.currentUserId) ? "comment-currentUser" : "comment") : "comment"); _ck(_v, 2, 0, currVal_0); var currVal_1 = (((_v.context.$implicit.userId !== null) && (_v.context.$implicit.userId !== undefined)) ? ((_v.context.$implicit.userId == _co.currentUserId) ? "comment-currentUser" : "comment") : "comment"); _ck(_v, 3, 0, currVal_1); var currVal_2 = "comment-bubble col-10"; var currVal_3 = (((_v.context.$implicit.userId !== null) && (_v.context.$implicit.userId !== undefined)) ? ((_v.context.$implicit.userId == _co.currentUserId) ? "comment-bubble-currentUser col-10" : "comment-bubble col-10") : "comment-bubble col-10"); _ck(_v, 5, 0, currVal_2, currVal_3); var currVal_4 = (((_v.context.$implicit.userId !== null) && (_v.context.$implicit.userId !== undefined)) ? ((_v.context.$implicit.userId == _co.currentUserId) ? "comment-bubble-currentUser col-10" : "comment-bubble col-10") : "comment-bubble col-10"); var currVal_5 = "comment-bubble col-10"; _ck(_v, 6, 0, currVal_4, currVal_5); var currVal_6 = (((_v.context.$implicit.userId !== null) && (_v.context.$implicit.userId !== undefined)) ? ((_v.context.$implicit.userId == _co.currentUserId) ? "user-name" : "user-name color-gray") : "user-name color-gray"); _ck(_v, 8, 0, currVal_6); var currVal_7 = (((_v.context.$implicit.userId !== null) && (_v.context.$implicit.userId !== undefined)) ? ((_v.context.$implicit.userId == _co.currentUserId) ? "user-name" : "user-name color-gray") : "user-name color-gray"); _ck(_v, 9, 0, currVal_7); var currVal_9 = (((_v.context.$implicit.userId !== null) && (_v.context.$implicit.userId !== undefined)) ? ((_v.context.$implicit.userId == _co.currentUserId) ? "user-comment" : "user-comment color-gray") : "user-comment color-gray"); _ck(_v, 12, 0, currVal_9); var currVal_10 = (((_v.context.$implicit.userId !== null) && (_v.context.$implicit.userId !== undefined)) ? ((_v.context.$implicit.userId == _co.currentUserId) ? "user-comment" : "user-comment color-gray") : "user-comment color-gray"); _ck(_v, 13, 0, currVal_10); var currVal_12 = (((_v.context.$implicit.userId !== null) && (_v.context.$implicit.userId !== undefined)) ? ((_v.context.$implicit.userId == _co.currentUserId) ? "timestamp" : "timestamp color-gray") : "timestamp color-gray"); _ck(_v, 16, 0, currVal_12); var currVal_13 = (((_v.context.$implicit.userId !== null) && (_v.context.$implicit.userId !== undefined)) ? ((_v.context.$implicit.userId == _co.currentUserId) ? "timestamp" : "timestamp color-gray") : "timestamp color-gray"); _ck(_v, 17, 0, currVal_13); var currVal_15 = (_v.context.$implicit.userId == _co.currentUserId); _ck(_v, 20, 0, currVal_15); var currVal_16 = (_v.context.$implicit.userId != _co.currentUserId); _ck(_v, 22, 0, currVal_16); }, function (_ck, _v) { var currVal_8 = _v.context.$implicit.userName; _ck(_v, 10, 0, currVal_8); var currVal_11 = _v.context.$implicit.msg; _ck(_v, 14, 0, currVal_11); var currVal_14 = _v.context.$implicit.timestamp; _ck(_v, 18, 0, currVal_14); }); }
function View_ChatterBoxComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChatterBoxComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.allComments; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ChatterBoxComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "textarea", [["id", "vis-comment-textField"]], [[8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keyup"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.commentText = $event) !== false);
        ad = (pd_4 && ad);
    } if (("keyup" === en)) {
        var pd_5 = (_co.onKeyUp(_co.commentText) !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], [], { maxlength: [0, "maxlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.inputMaxLength, ""); _ck(_v, 2, 0, currVal_9); var currVal_10 = _co.commentText; _ck(_v, 5, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.placeholderText, ""); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).maxlength : null); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }); }
function View_ChatterBoxComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addComment(_co.commentText) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["send"]))], null, null); }
function View_ChatterBoxComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "character-count"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " / ", " characters "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.typedCommentTextLength; var currVal_1 = _co.inputMaxLength; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_ChatterBoxComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "div", [["class", "vis-chat-window"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "vis-chat-window-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "vis-chat-window-header-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Comments "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, [["scrollMe", 1]], null, 4, "div", [["class", "vis-chat-window-body"]], [[8, "scrollTop", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChatterBoxComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChatterBoxComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 9, "div", [["class", "vis-chat-window-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChatterBoxComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChatterBoxComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "button", [["style", "float: right; margin-right: 16px;"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onRefreshButton() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["refresh"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChatterBoxComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.showErrorDiv; _ck(_v, 6, 0, currVal_1); var currVal_2 = !_co.showErrorDiv; _ck(_v, 8, 0, currVal_2); var currVal_3 = _co.currentUserId; _ck(_v, 12, 0, currVal_3); var currVal_4 = _co.currentUserId; _ck(_v, 14, 0, currVal_4); var currVal_5 = _co.currentUserId; _ck(_v, 18, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).scrollHeight; _ck(_v, 4, 0, currVal_0); }); }
function View_ChatterBoxComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "gd-chatterbox", [], null, null, null, View_ChatterBoxComponent_0, RenderType_ChatterBoxComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chatter_box_component__WEBPACK_IMPORTED_MODULE_6__["ChatterBoxComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChatterBoxComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("gd-chatterbox", _chatter_box_component__WEBPACK_IMPORTED_MODULE_6__["ChatterBoxComponent"], View_ChatterBoxComponent_Host_0, { heading: "heading", headerImage: "headerImage", showErrorDiv: "showErrorDiv", errorMsg: "errorMsg", allComments: "allComments", inputMaxLength: "inputMaxLength", placeholderText: "placeholderText", currentUserId: "currentUserId" }, { valueChange: "valueChange", onKeyupEnter: "onKeyupEnter", onKeyup: "onKeyup", emitReport: "emitReport", emitDelete: "emitDelete", emitRefresh: "emitRefresh" }, []);



/***/ }),

/***/ "./src/app/comments/chatter-box.component.ts":
/*!***************************************************!*\
  !*** ./src/app/comments/chatter-box.component.ts ***!
  \***************************************************/
/*! exports provided: ChatterBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatterBoxComponent", function() { return ChatterBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);


class ChatterBoxComponent {
    constructor() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onKeyupEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.emitReport = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.emitDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.emitRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    showImageOrDiv(comment) {
        return Object(util__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(comment.userImagePath);
    }
    addComment(comment) {
        this.onKeyupEnter.emit(comment);
        this.commentText = '';
    }
    onKeyUp(input) {
        this.onKeyup.emit(input);
        this.typedCommentTextLength = input.length;
    }
    onDeleteButton(input) {
        this.emitDelete.emit(input);
    }
    onRefreshButton() {
        this.emitRefresh.emit();
    }
    onReportButton(input) {
        this.emitReport.emit(input);
    }
}


/***/ }),

/***/ "./src/app/comments/comments.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/comments/comments.component.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RenderType_CommentsComponent, View_CommentsComponent_0, View_CommentsComponent_Host_0, CommentsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CommentsComponent", function() { return RenderType_CommentsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CommentsComponent_0", function() { return View_CommentsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CommentsComponent_Host_0", function() { return View_CommentsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponentNgFactory", function() { return CommentsComponentNgFactory; });
/* harmony import */ var _comments_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.component.sass.shim.ngstyle */ "./src/app/comments/comments.component.sass.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chatter_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatter-box.component.ngfactory */ "./src/app/comments/chatter-box.component.ngfactory.js");
/* harmony import */ var _chatter_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chatter-box.component */ "./src/app/comments/chatter-box.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _comments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 









var styles_CommentsComponent = [_comments_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CommentsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CommentsComponent, data: {} });

function View_CommentsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "gd-chatterbox", [], null, [[null, "onKeyupEnter"], [null, "emitReport"], [null, "emitDelete"], [null, "emitRefresh"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onKeyupEnter" === en)) {
        var pd_0 = (_co.sendMessage($event) !== false);
        ad = (pd_0 && ad);
    } if (("emitReport" === en)) {
        var pd_1 = (_co.onReportComment($event) !== false);
        ad = (pd_1 && ad);
    } if (("emitDelete" === en)) {
        var pd_2 = (_co.onDeleteComment($event) !== false);
        ad = (pd_2 && ad);
    } if (("emitRefresh" === en)) {
        var pd_3 = (_co.getComments() !== false);
        ad = (pd_3 && ad);
    } return ad; }, _chatter_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ChatterBoxComponent_0"], _chatter_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ChatterBoxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chatter_box_component__WEBPACK_IMPORTED_MODULE_3__["ChatterBoxComponent"], [], { heading: [0, "heading"], headerImage: [1, "headerImage"], showErrorDiv: [2, "showErrorDiv"], errorMsg: [3, "errorMsg"], allComments: [4, "allComments"], inputMaxLength: [5, "inputMaxLength"], placeholderText: [6, "placeholderText"], currentUserId: [7, "currentUserId"] }, { onKeyupEnter: "onKeyupEnter", emitReport: "emitReport", emitDelete: "emitDelete", emitRefresh: "emitRefresh" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.heading; var currVal_1 = _co.headerImage; var currVal_2 = _co.showErrorDiv; var currVal_3 = _co.errorMsg; var currVal_4 = _co.allComments; var currVal_5 = 1000; var currVal_6 = _co.placeholderText; var currVal_7 = _co.currentUserId; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }, null); }
function View_CommentsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "gd-chatterbox", [["heading", ""], ["placeholderText", "please log in to comment"]], null, null, null, _chatter_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ChatterBoxComponent_0"], _chatter_box_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ChatterBoxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chatter_box_component__WEBPACK_IMPORTED_MODULE_3__["ChatterBoxComponent"], [], { heading: [0, "heading"], headerImage: [1, "headerImage"], showErrorDiv: [2, "showErrorDiv"], errorMsg: [3, "errorMsg"], allComments: [4, "allComments"], inputMaxLength: [5, "inputMaxLength"], placeholderText: [6, "placeholderText"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = ""; var currVal_1 = _co.headerImage; var currVal_2 = _co.showErrorDiv; var currVal_3 = _co.errorMsg; var currVal_4 = _co.allComments; var currVal_5 = 0; var currVal_6 = "please log in to comment"; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }, null); }
function View_CommentsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["style", "height: auto; width: auto;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CommentsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CommentsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.heading != ""); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.heading == ""); _ck(_v, 4, 0, currVal_1); }, null); }
function View_CommentsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "gd-comments", [], null, null, null, View_CommentsComponent_0, RenderType_CommentsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _comments_component__WEBPACK_IMPORTED_MODULE_5__["CommentsComponent"], [_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CommentsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("gd-comments", _comments_component__WEBPACK_IMPORTED_MODULE_5__["CommentsComponent"], View_CommentsComponent_Host_0, { title: "title", userName: "userName", heading: "heading", currentUserId: "currentUserId" }, {}, []);



/***/ }),

/***/ "./src/app/comments/comments.component.sass.shim.ngstyle.js":
/*!******************************************************************!*\
  !*** ./src/app/comments/comments.component.sass.shim.ngstyle.js ***!
  \******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5zYXNzIn0= */"];



/***/ }),

/***/ "./src/app/comments/comments.component.ts":
/*!************************************************!*\
  !*** ./src/app/comments/comments.component.ts ***!
  \************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");






console.log = function (s) {
    if (_config__WEBPACK_IMPORTED_MODULE_5__["DEBUG"]) {
        console.warn(s);
    }
    ;
};
class CommentsComponent {
    constructor(data, router, dialog, changeDetectorRef) {
        this.data = data;
        this.router = router;
        this.dialog = dialog;
        this.changeDetectorRef = changeDetectorRef;
        this.heading = 'comments';
        this.errorMsg = 'This is an error';
        this.inputMaxLength = 100;
        this.placeholderText = 'Write a comment!';
    }
    ngOnInit() {
        this.getComments();
    }
    sendMessage(msgPayload) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Constructing a desired object of type CommentPayload to be added to allComments
            if (msgPayload) {
                //var msgId = Math.floor(1000000000000000 + Math.random() * 9000000000000000);
                var msgId = this.makeid();
                var timestamp = new Date;
                const payload = {
                    msgId: msgId,
                    msg: msgPayload,
                    timestamp: timestamp.getTime().toString(),
                    userName: this.userName,
                    userId: this.currentUserId
                };
                try {
                    yield this.addComment(payload);
                }
                catch (e) {
                    console.error(e);
                }
                if (yield this.checkComment(msgId)) {
                    payload.timestamp = this.formatTime(timestamp);
                    this.allComments.push(payload);
                }
            }
        });
    }
    onKeyUp(msgPayload) {
        //console.log(msgPayload);  // doesn't work
    }
    getComments() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var res = yield this.data.getComments(this.router.url);
            if (res != []) {
                res.sort(function (a, b) { return a.timestamp - b.timestamp; });
                for (var i in res) {
                    res[i].timestamp = this.formatTime(new Date(Number(res[i].timestamp)));
                }
                this.allComments = res;
            }
            else {
                this.allComments = [];
            }
            this.changeDetectorRef.detectChanges();
        });
    }
    addComment(p) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.data.addComment(p, this.router.url, this.currentUserId, this.title);
        });
    }
    checkComment(msgId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log(msgId)
            var b = Boolean(Number(yield this.data.checkComment(msgId)));
            //console.log(b);
            return b;
        });
    }
    formatTime(d) {
        function z(n) { return (n < 10 ? '0' : '') + n; }
        return z(d.getMonth() + 1) + '-' + z(d.getDate()) + '-' + (d.getYear() + 1900) + ' ' + d.getHours() + ':' + z(d.getMinutes());
    }
    onReportComment(msg) {
        this.dialog.openMultiFunction("Are you sure you want to report this message?", ["yes", "no"], [() => this.reportComment(msg),
            () => null]);
    }
    onDeleteComment(msgId) {
        this.dialog.openMultiFunction("Are you sure you want to delete this message?", ["yes", "no"], [() => this.deleteComment(msgId),
            () => null]);
    }
    reportComment(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var m = yield this.data.sendCommentReport(msg, this.currentUserId);
            if (m.startsWith('250')) {
                var dm = 'Report sent';
            }
            else {
                var dm = 'Error sending report';
            }
            this.dialog.openSingleFunction(dm, ["ok"], () => null);
        });
    }
    deleteComment(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log(msg.msgId)
            var d = yield this.data.deleteComment(msg.msgId, this.currentUserId);
            if (!(yield this.checkComment(msg.msgId))) {
                console.log('comment ' + msg.msgId + ' deleted');
                const i = this.allComments.indexOf(msg);
                if (i > -1) {
                    this.allComments.splice(i, 1);
                    this.changeDetectorRef.detectChanges();
                }
            }
        });
    }
    makeid() {
        var result = '';
        var characters = 'abcdef0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 24; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}


/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: AUTH0DOMAIN, AUTH0CLIENTID, EMAILADDRESS, TRACKINGID, TRACKING, FRONTEND_URL, API_URL, DEBUG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH0DOMAIN", function() { return AUTH0DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH0CLIENTID", function() { return AUTH0CLIENTID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAILADDRESS", function() { return EMAILADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRACKINGID", function() { return TRACKINGID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRACKING", function() { return TRACKING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRONTEND_URL", function() { return FRONTEND_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEBUG", function() { return DEBUG; });
const AUTH0DOMAIN = 'gdconcertexplorer.eu.auth0.com';
const AUTH0CLIENTID = 'MgqjkApiGjSzMcFwjzUiyoNJK6z8iWEb';
const EMAILADDRESS = 'gdconcertexplorer@gmail.com';
const TRACKINGID = 'UA-165369751-1';
const TRACKING = false;
//export const API_URL = 'http://localhost:8060/';
//export const API_URL = 'http://25.86.166.144:8060/';
//export const API_URL = 'https://grateful-dead-api.herokuapp.com/';
//export const FRONTEND_URL = 'http://localhost:4200/';
const FRONTEND_URL = 'https://grateful-dead-live.github.io/';
const API_URL = 'https://cors-anywhere.herokuapp.com/http://82.5.176.6:8080/';
const DEBUG = false;


/***/ }),

/***/ "./src/app/cookie-banner/cookie-banner.component.ngfactory.js":
/*!********************************************************************!*\
  !*** ./src/app/cookie-banner/cookie-banner.component.ngfactory.js ***!
  \********************************************************************/
/*! exports provided: RenderType_CookieBannerComponent, View_CookieBannerComponent_0, View_CookieBannerComponent_Host_0, CookieBannerComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CookieBannerComponent", function() { return RenderType_CookieBannerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CookieBannerComponent_0", function() { return View_CookieBannerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CookieBannerComponent_Host_0", function() { return View_CookieBannerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieBannerComponentNgFactory", function() { return CookieBannerComponentNgFactory; });
/* harmony import */ var _cookie_banner_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie-banner.component.sass.shim.ngstyle */ "./src/app/cookie-banner/cookie-banner.component.sass.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _cookie_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cookie-banner.component */ "./src/app/cookie-banner/cookie-banner.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 






var styles_CookieBannerComponent = [_cookie_banner_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CookieBannerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CookieBannerComponent, data: {} });

function View_CookieBannerComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "banner"], ["id", "cookiebanner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" For continuous improvement of user experience this website uses cookies for collecting your IP address and individual statistics. See our "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "a", [["routerLink", "/dataprivacy"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["data protection guideline"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" for further information and opt-out. By clicking OK you agree to share your data. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "button", [["onclick", "gaOptIn()"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Agree"]))], function (_ck, _v) { var currVal_2 = "/dataprivacy"; _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).href; _ck(_v, 3, 0, currVal_0, currVal_1); }); }
function View_CookieBannerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CookieBannerComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showBanner; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CookieBannerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-cookie-banner", [], null, null, null, View_CookieBannerComponent_0, RenderType_CookieBannerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _cookie_banner_component__WEBPACK_IMPORTED_MODULE_4__["CookieBannerComponent"], [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CookieBannerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-cookie-banner", _cookie_banner_component__WEBPACK_IMPORTED_MODULE_4__["CookieBannerComponent"], View_CookieBannerComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/cookie-banner/cookie-banner.component.sass.shim.ngstyle.js":
/*!****************************************************************************!*\
  !*** ./src/app/cookie-banner/cookie-banner.component.sass.shim.ngstyle.js ***!
  \****************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["a[_ngcontent-%COMP%] {\n  curser: pointer;\n  text-decoration: underline;\n}\n\n.banner[_ngcontent-%COMP%] {\n  background-color: #b8c7fa;\n  border-width: thin;\n  padding: 1px 10px 10px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0pvdXJuYWwvcHJvamVjdHMvZ3JhdGVmdWxfZGVhZF8yMDE5X2dpdC93ZWItYXBwMi9zcmMvYXBwL2Nvb2tpZS1iYW5uZXIvY29va2llLWJhbm5lci5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29va2llLWJhbm5lci9jb29raWUtYmFubmVyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtBQ0M1Qjs7QURDQTtFQUNJLHlCQUF5QjtFQUd6QixrQkFBa0I7RUFDbEIsMkJBQTJCO0FDQS9CIiwiZmlsZSI6InNyYy9hcHAvY29va2llLWJhbm5lci9jb29raWUtYmFubmVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gIGN1cnNlcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cblxuLmJhbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I4YzdmYTtcbiAgICAvL21hcmdpbi10b3A6IDEwcHhcbiAgICAvL2JvcmRlci1zdHlsZTogc29saWRcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgcGFkZGluZzogMXB4IDEwcHggMTBweCAxMHB4OyB9XG4iLCJhIHtcbiAgY3Vyc2VyOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmJhbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGM3ZmE7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbiAgcGFkZGluZzogMXB4IDEwcHggMTBweCAxMHB4O1xufVxuIl19 */"];



/***/ }),

/***/ "./src/app/cookie-banner/cookie-banner.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/cookie-banner/cookie-banner.component.ts ***!
  \**********************************************************/
/*! exports provided: CookieBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieBannerComponent", function() { return CookieBannerComponent; });
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
 // https://itnext.io/angular-8-how-to-use-cookies-14ab3f2e93fc
class CookieBannerComponent {
    constructor(cookieService) {
        this.cookieService = cookieService;
    }
    ngOnInit() {
        const consent = this.cookieService.get('gd-cookieconsent');
        if (consent == 'allow') {
            this.showBanner = false;
        }
        else {
            this.showBanner = true;
        }
    }
    setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        this.cookieService.set(cname, cvalue, d, '/');
    }
    agreeToShare() {
        this.setCookie('gd-cookieconsent', 'allow', 365);
        //this.window.location.reload();
    }
}


/***/ }),

/***/ "./src/app/cookie-banner/privacy-policy.component.ngfactory.js":
/*!*********************************************************************!*\
  !*** ./src/app/cookie-banner/privacy-policy.component.ngfactory.js ***!
  \*********************************************************************/
/*! exports provided: RenderType_PrivacyPolicyComponent, View_PrivacyPolicyComponent_0, View_PrivacyPolicyComponent_Host_0, PrivacyPolicyComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PrivacyPolicyComponent", function() { return RenderType_PrivacyPolicyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PrivacyPolicyComponent_0", function() { return View_PrivacyPolicyComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PrivacyPolicyComponent_Host_0", function() { return View_PrivacyPolicyComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponentNgFactory", function() { return PrivacyPolicyComponentNgFactory; });
/* harmony import */ var _privacy_policy_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-policy.component.sass.shim.ngstyle */ "./src/app/cookie-banner/privacy-policy.component.sass.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/header.component.ngfactory */ "./src/app/shared/header.component.ngfactory.js");
/* harmony import */ var _shared_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/header.component */ "./src/app/shared/header.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _privacy_policy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./privacy-policy.component */ "./src/app/cookie-banner/privacy-policy.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 












var styles_PrivacyPolicyComponent = [_privacy_policy_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PrivacyPolicyComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_PrivacyPolicyComponent, data: {} });

function View_PrivacyPolicyComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "gd-header", [["subtitle", ""], ["title", "Privacy Policy"]], null, null, null, _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HeaderComponent_0"], _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _shared_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _services_player_service__WEBPACK_IMPORTED_MODULE_9__["PlayerService"]], { title: [0, "title"], subtitle: [1, "subtitle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Privacy Policy "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "button", [["onclick", "gaOptIn()"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Agree"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "button", [["onclick", "gaOptOut()"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Revoke"]))], function (_ck, _v) { var currVal_0 = "Privacy Policy"; var currVal_1 = ""; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_PrivacyPolicyComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "privacy-policy", [], null, null, null, View_PrivacyPolicyComponent_0, RenderType_PrivacyPolicyComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _privacy_policy_component__WEBPACK_IMPORTED_MODULE_10__["PrivacyPolicyComponent"], [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"], "window"], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PrivacyPolicyComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("privacy-policy", _privacy_policy_component__WEBPACK_IMPORTED_MODULE_10__["PrivacyPolicyComponent"], View_PrivacyPolicyComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/cookie-banner/privacy-policy.component.sass.shim.ngstyle.js":
/*!*****************************************************************************!*\
  !*** ./src/app/cookie-banner/privacy-policy.component.sass.shim.ngstyle.js ***!
  \*****************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2tpZS1iYW5uZXIvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LnNhc3MifQ== */"];



/***/ }),

/***/ "./src/app/cookie-banner/privacy-policy.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/cookie-banner/privacy-policy.component.ts ***!
  \***********************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");


class PrivacyPolicyComponent {
    constructor(cookieService, window) {
        this.cookieService = cookieService;
        this.window = window;
    }
    ngOnInit() {
    }
    removeCookie() {
        this.cookieService.delete('gd-cookieconsent');
        this.cookieService.delete('_ga');
        this.cookieService.delete('_gid');
        this.cookieService.delete('_gat_gtag_' + _config__WEBPACK_IMPORTED_MODULE_1__["TRACKINGID"].replace(/-/g, '_'));
        this.window.location.reload();
    }
    setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        this.cookieService.set(cname, cvalue, d);
    }
    agreeToShare() {
        this.setCookie('gd-cookieconsent', 'allow', 365);
        this.window.location.reload();
    }
}


/***/ }),

/***/ "./src/app/profile/profile.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/profile/profile.component.ngfactory.js ***!
  \********************************************************/
/*! exports provided: RenderType_ProfileComponent, View_ProfileComponent_0, View_ProfileComponent_Host_0, ProfileComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ProfileComponent", function() { return RenderType_ProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProfileComponent_0", function() { return View_ProfileComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProfileComponent_Host_0", function() { return View_ProfileComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponentNgFactory", function() { return ProfileComponentNgFactory; });
/* harmony import */ var _profile_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component.sass.shim.ngstyle */ "./src/app/profile/profile.component.sass.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_angular_material_progress_spinner_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/material/progress-spinner/index.ngfactory */ "./node_modules/@angular/material/progress-spinner/index.ngfactory.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../node_modules/@angular/material/button/index.ngfactory */ "./node_modules/@angular/material/button/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../node_modules/@angular/material/icon/index.ngfactory */ "./node_modules/@angular/material/icon/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _node_modules_ngx_sharebuttons_buttons_ngx_sharebuttons_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../node_modules/ngx-sharebuttons/buttons/ngx-sharebuttons-buttons.ngfactory */ "./node_modules/ngx-sharebuttons/buttons/ngx-sharebuttons-buttons.ngfactory.js");
/* harmony import */ var ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-sharebuttons/buttons */ "./node_modules/ngx-sharebuttons/fesm2015/ngx-sharebuttons-buttons.js");
/* harmony import */ var ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-sharebuttons */ "./node_modules/ngx-sharebuttons/fesm2015/ngx-sharebuttons.js");
/* harmony import */ var _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/header.component.ngfactory */ "./src/app/shared/header.component.ngfactory.js");
/* harmony import */ var _shared_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/header.component */ "./src/app/shared/header.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _auth_resolve__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../auth.resolve */ "./src/app/auth.resolve.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 


























var styles_ProfileComponent = [_profile_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ProfileComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ProfileComponent, data: {} });

function View_ProfileComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], [[4, "margin-top", null], [4, "margin-right", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "mat-spinner", [["class", "mat-spinner mat-progress-spinner"], ["diameter", "30"], ["mode", "indeterminate"], ["role", "progressbar"]], [[2, "_mat-animation-noopable", null], [4, "width", "px"], [4, "height", "px"]], null, null, _node_modules_angular_material_progress_spinner_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatSpinner_0"], _node_modules_angular_material_progress_spinner_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatSpinner"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatSpinner"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS"]], { diameter: [0, "diameter"] }, null)], function (_ck, _v) { var currVal_5 = "30"; _ck(_v, 2, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = "8px"; var currVal_1 = "5px"; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._noopAnimations; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).diameter; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).diameter; _ck(_v, 1, 0, currVal_2, currVal_3, currVal_4); }); }
function View_ProfileComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "u", [["class", "field"], ["style", "cursor:pointer"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "button", [["class", "mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onDeleteBookmark(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["clear"]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.route; _ck(_v, 3, 0, currVal_1); _ck(_v, 8, 0); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.timestamp; _ck(_v, 1, 0, currVal_0); var currVal_2 = _v.context.$implicit.title; _ck(_v, 4, 0, currVal_2); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).disabled || null); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._animationMode === "NoopAnimations"); _ck(_v, 5, 0, currVal_3, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).inline; var currVal_6 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).color !== "warn")); _ck(_v, 7, 0, currVal_5, currVal_6); }); }
function View_ProfileComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfileComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.bookmarks; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ProfileComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], [[4, "margin-top", null], [4, "margin-right", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "mat-spinner", [["class", "mat-spinner mat-progress-spinner"], ["diameter", "30"], ["mode", "indeterminate"], ["role", "progressbar"]], [[2, "_mat-animation-noopable", null], [4, "width", "px"], [4, "height", "px"]], null, null, _node_modules_angular_material_progress_spinner_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatSpinner_0"], _node_modules_angular_material_progress_spinner_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatSpinner"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatSpinner"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS"]], { diameter: [0, "diameter"] }, null)], function (_ck, _v) { var currVal_5 = "30"; _ck(_v, 2, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = "8px"; var currVal_1 = "5px"; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._noopAnimations; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).diameter; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).diameter; _ck(_v, 1, 0, currVal_2, currVal_3, currVal_4); }); }
function View_ProfileComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "u", [["class", "field"], ["style", "cursor:pointer"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "button", [["class", "mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onUnlike(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["clear"]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.route; _ck(_v, 3, 0, currVal_1); _ck(_v, 8, 0); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.timestamp; _ck(_v, 1, 0, currVal_0); var currVal_2 = _v.context.$implicit.title; _ck(_v, 4, 0, currVal_2); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).disabled || null); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._animationMode === "NoopAnimations"); _ck(_v, 5, 0, currVal_3, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).inline; var currVal_6 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).color !== "warn")); _ck(_v, 7, 0, currVal_5, currVal_6); }); }
function View_ProfileComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfileComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.likes; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ProfileComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], [[4, "margin-top", null], [4, "margin-right", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "mat-spinner", [["class", "mat-spinner mat-progress-spinner"], ["diameter", "30"], ["mode", "indeterminate"], ["role", "progressbar"]], [[2, "_mat-animation-noopable", null], [4, "width", "px"], [4, "height", "px"]], null, null, _node_modules_angular_material_progress_spinner_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatSpinner_0"], _node_modules_angular_material_progress_spinner_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatSpinner"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatSpinner"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS"]], { diameter: [0, "diameter"] }, null)], function (_ck, _v) { var currVal_5 = "30"; _ck(_v, 2, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = "8px"; var currVal_1 = "5px"; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._noopAnimations; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).diameter; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).diameter; _ck(_v, 1, 0, currVal_2, currVal_3, currVal_4); }); }
function View_ProfileComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "u", [["class", "field"], ["style", "cursor:pointer"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.route; _ck(_v, 2, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.title; _ck(_v, 3, 0, currVal_1); }); }
function View_ProfileComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfileComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.comments; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ProfileComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], [[4, "margin-top", null], [4, "margin-right", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "mat-spinner", [["class", "mat-spinner mat-progress-spinner"], ["diameter", "30"], ["mode", "indeterminate"], ["role", "progressbar"]], [[2, "_mat-animation-noopable", null], [4, "width", "px"], [4, "height", "px"]], null, null, _node_modules_angular_material_progress_spinner_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatSpinner_0"], _node_modules_angular_material_progress_spinner_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatSpinner"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatSpinner"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS"]], { diameter: [0, "diameter"] }, null)], function (_ck, _v) { var currVal_5 = "30"; _ck(_v, 2, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = "8px"; var currVal_1 = "5px"; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._noopAnimations; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).diameter; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).diameter; _ck(_v, 1, 0, currVal_2, currVal_3, currVal_4); }); }
function View_ProfileComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ". ", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); var currVal_1 = _v.context.$implicit.title; _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_ProfileComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " \"", "\" "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "button", [["class", "mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.loadPlaylist(_v.context.$implicit.playlist) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["library_music"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "button", [["class", "mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.delPlaylist(_v.context.$implicit.id, _v.context.$implicit.name) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["clear"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfileComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "share-buttons", [], null, null, null, _node_modules_ngx_sharebuttons_buttons_ngx_sharebuttons_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ShareButtons_0"], _node_modules_ngx_sharebuttons_buttons_ngx_sharebuttons_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ShareButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 770048, null, 0, ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_14__["ShareButtons"], [ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_15__["ShareService"]], { theme: [0, "theme"], include: [1, "include"], show: [2, "show"], url: [3, "url"], title: [4, "title"], tags: [5, "tags"], size: [6, "size"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](17, 7), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "br", [], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; _ck(_v, 6, 0); _ck(_v, 11, 0); var currVal_10 = _v.context.$implicit.playlist; _ck(_v, 14, 0, currVal_10); var currVal_11 = "default"; var currVal_12 = _ck(_v, 17, 0, "facebook", "twitter", "pinterest", "reddit", "tumblr", "mix", "copy"); var currVal_13 = 7; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((_co.frontend_url + "#/playlist/") + _v.context.$implicit.id), ""); var currVal_15 = "Grateful Dead Concert Explorer Playlist"; var currVal_16 = "GratefulDeadExplorer,GratefulDead,playlist"; var currVal_17 = (0 - 7); _ck(_v, 16, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.timestamp; var currVal_1 = _v.context.$implicit.name; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).disabled || null); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._animationMode === "NoopAnimations"); _ck(_v, 3, 0, currVal_2, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).inline; var currVal_5 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).color !== "warn")); _ck(_v, 5, 0, currVal_4, currVal_5); var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).disabled || null); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._animationMode === "NoopAnimations"); _ck(_v, 8, 0, currVal_6, currVal_7); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).inline; var currVal_9 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).color !== "warn")); _ck(_v, 10, 0, currVal_8, currVal_9); }); }
function View_ProfileComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfileComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfileComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.player.playlistsLoaded; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.player.playlists; _ck(_v, 4, 0, currVal_1); }, null); }
function View_ProfileComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 44, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "gd-header", [["title", "Profile"]], null, null, null, _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_HeaderComponent_0"], _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _shared_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["Title"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialog"], _services_data_service__WEBPACK_IMPORTED_MODULE_20__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _services_player_service__WEBPACK_IMPORTED_MODULE_22__["PlayerService"]], { title: [0, "title"], subtitle: [1, "subtitle"], userId: [2, "userId"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["User Info"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Bookmarks"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfileComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfileComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Likes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfileComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfileComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Commented on"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfileComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfileComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Playlists"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfileComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Profile"; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.currentUser.userName, ""); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.currentUser.userId, ""); _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); var currVal_7 = !_co.bookmarks; _ck(_v, 20, 0, currVal_7); var currVal_8 = _co.bookmarks; _ck(_v, 22, 0, currVal_8); var currVal_9 = (!_co.likes || (_co.likes.length == 0)); _ck(_v, 28, 0, currVal_9); var currVal_10 = _co.likes; _ck(_v, 30, 0, currVal_10); var currVal_11 = !_co.comments; _ck(_v, 36, 0, currVal_11); var currVal_12 = _co.comments; _ck(_v, 38, 0, currVal_12); var currVal_13 = _co.player.playlists; _ck(_v, 44, 0, currVal_13); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = "Username: "; _ck(_v, 8, 0, currVal_3); var currVal_4 = _co.userProfile["http://example.com/username"]; _ck(_v, 9, 0, currVal_4); var currVal_5 = "Email: "; _ck(_v, 12, 0, currVal_5); var currVal_6 = _co.userProfile.email; _ck(_v, 13, 0, currVal_6); }); }
function View_ProfileComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "gd-header", [["title", "Profile"]], null, null, null, _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_HeaderComponent_0"], _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _shared_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["Title"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialog"], _services_data_service__WEBPACK_IMPORTED_MODULE_20__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _services_player_service__WEBPACK_IMPORTED_MODULE_22__["PlayerService"]], { title: [0, "title"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["you are not logged in"]))], function (_ck, _v) { var currVal_0 = "Profile"; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ProfileComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfileComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfileComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "p", [], [[4, "margin-bottom", null]], null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.currentUser; _ck(_v, 1, 0, currVal_0); var currVal_1 = !_co.currentUser; _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = "75px"; _ck(_v, 4, 0, currVal_2); }); }
function View_ProfileComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-profile", [], null, null, null, View_ProfileComponent_0, RenderType_ProfileComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _profile_component__WEBPACK_IMPORTED_MODULE_23__["ProfileComponent"], [_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _services_data_service__WEBPACK_IMPORTED_MODULE_20__["DataService"], _auth_resolve__WEBPACK_IMPORTED_MODULE_24__["APIResolver"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _services_dialog_service__WEBPACK_IMPORTED_MODULE_25__["DialogService"], _services_player_service__WEBPACK_IMPORTED_MODULE_22__["PlayerService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ProfileComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-profile", _profile_component__WEBPACK_IMPORTED_MODULE_23__["ProfileComponent"], View_ProfileComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/profile/profile.component.sass.shim.ngstyle.js":
/*!****************************************************************!*\
  !*** ./src/app/profile/profile.component.sass.shim.ngstyle.js ***!
  \****************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = [".button-basic[_ngcontent-%COMP%] {\n  background-color: #4b5052;\n  border: 2px solid black;\n  color: whitesmoke;\n  padding: 1em 1.5em;\n  text-align: center;\n  text-decoration: none;\n  font-size: 1em;\n  display: inline-block;\n  width: 22%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0pvdXJuYWwvcHJvamVjdHMvZ3JhdGVmdWxfZGVhZF8yMDE5X2dpdC93ZWItYXBwMi9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixVQUFVO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWJhc2ljIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNTA1MjtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDFlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjIlOyB9XG4iLCIuYnV0dG9uLWJhc2ljIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNTA1MjtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDFlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjIlO1xufVxuIl19 */"];



/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _auth_resolve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.resolve */ "./src/app/auth.resolve.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");








console.log = function (s) {
    if (_config__WEBPACK_IMPORTED_MODULE_7__["DEBUG"]) {
        console.warn(s);
    }
    ;
};
class ProfileComponent {
    constructor(auth, data, resolve, route, dialog, player) {
        this.auth = auth;
        this.data = data;
        this.resolve = resolve;
        this.route = route;
        this.dialog = dialog;
        this.player = player;
        this.frontend_url = _config__WEBPACK_IMPORTED_MODULE_7__["FRONTEND_URL"];
    }
    //public domain = DOMAIN;
    //protected playlists: any;
    ngOnInit() {
        if (this.route.snapshot.data['loggedIn']) {
            this.auth.userProfile$.subscribe(userProfile => {
                this.userProfile = userProfile;
                this.currentUser = this.resolve.getUser(userProfile);
                gtag('set', { 'user_id': this.currentUser.userId });
                this.getBookmarks();
                this.getLikes();
                this.getComments();
            });
        }
        /*
        if (this.currentUser){
          this.getBookmarks();
            this.getComments();
            this.getPlaylists();
        }
        */
        /*
            if (this.authenticated == true) {
              this.auth.userProfile$.subscribe(userProfile => {
                this.currentUser = userProfile;
                this.userId = this.currentUser.sub.split("|")[1];
                this.userName = this.currentUser['http://example.com/username'];
              });
            console.log(this.userId)
            }*/
    }
    getBookmarks() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var result = yield this.data.getBookmarks(this.currentUser.userId);
            if (result[0].bookmarks) {
                var m = result[0].bookmarks;
                m.sort(function (a, b) { return a.timestamp - b.timestamp; }).reverse();
                m.forEach(i => i.timestamp = this.formatTime(new Date(Number(i.timestamp))));
                this.bookmarks = m;
            }
            ;
        });
    }
    getLikes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var result = yield this.data.getLikes(this.currentUser.userId);
            if (result[0].likes) {
                var l = result[0].likes;
                l.sort(function (a, b) { return a.timestamp - b.timestamp; }).reverse();
                l.forEach(i => i.timestamp = this.formatTime(new Date(Number(i.timestamp))));
                this.likes = l;
            }
            ;
        });
    }
    getComments() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var result = yield this.data.getUserComments(this.currentUser.userId);
            if (result[0].comments) {
                var res = [];
                result[0].comments.forEach(r => {
                    if (!(res.some(res => res.title === r.title) && res.some(res => res.route === r.route))) {
                        res.push({ 'title': r.title, 'route': r.route });
                    }
                });
                this.comments = res;
                //this.comments = result[0].comments;
            }
            ;
        });
    }
    formatTime(d) {
        function z(n) { return (n < 10 ? '0' : '') + n; }
        return z(d.getMonth() + 1) + '-' + z(d.getDate()) + '-' + (d.getYear() + 1900) + ' ' + d.getHours() + ':' + z(d.getMinutes());
    }
    delPlaylist(playlistid, name) {
        this.dialog.openMultiFunction('Are you sure you want to delete playlist "' + name + '"?', ["yes", "no"], [() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.player.deletePlaylist(this.currentUser.userId, playlistid);
            }),
            () => null]);
    }
    loadPlaylist(playlist) {
        this.dialog.openMultiFunction('Your current playlist will be lost', ["ok", "cancel"], [() => {
                this.player.playlist = [...playlist];
                this.player.storePlaylist();
            },
            () => { }]);
    }
    onDeleteBookmark(bookmark) {
        this.dialog.openMultiFunction("Are you sure you want to delete this bookmark?", ["yes", "no"], [() => this.deleteBookmark(bookmark),
            () => null]);
    }
    deleteBookmark(bookmark) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.data.delBookmark(this.currentUser.userId, bookmark.route);
            this.getBookmarks();
        });
    }
    onUnlike(like) {
        this.dialog.openMultiFunction("Are you sure you want to unlike?", ["yes", "no"], [() => this.unlike(like),
            () => null]);
    }
    unlike(like) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.data.unlike(this.currentUser.userId, like.route);
            this.getLikes();
        });
    }
}


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
/* harmony import */ var _dead_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dead-api.service */ "./src/app/services/dead-api.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");




console.log = function (s) {
    if (_config__WEBPACK_IMPORTED_MODULE_3__["DEBUG"]) {
        console.warn(s);
    }
    ;
};
const ARCHIVE_URI = 'https://archive.org/download/';
class DataService {
    constructor(apiService) {
        this.apiService = apiService;
        this.loading = this.initEvents();
    }
    getEventInfo(eventId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return (yield this.getEventInfos([eventId]))[0];
        });
    }
    getEventInfos(eventIds) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (eventIds) {
                yield this.loading;
                return this.events.filter(e => eventIds.indexOf(e.id) >= 0);
            }
        });
    }
    getEventDetails(eventId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.event = yield this.apiService.getEventDetails(eventId);
            return this.event;
        });
    }
    getLocation(locationId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.apiService.getLocation(locationId);
        });
    }
    getVenue(venueId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.apiService.getVenue(venueId);
        });
    }
    getVenueCoordinates() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.getVenueCoordinates();
        });
    }
    getTourCoordinates() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.getTourCoordinates();
        });
    }
    getArtistDetails(artistId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.getArtistDetails(artistId);
        });
    }
    getSong(songId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.getSong(songId);
        });
    }
    getEventInfoForRecording(recordingId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading;
            return this.events.filter(e => e.recordings.some(r => r.id === recordingId))[0];
        });
    }
    getRecording(recordingId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.getRecordingDetails(recordingId);
        });
    }
    getRecordingTracks(recording, event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const tracks = yield this.apiService.getRecordingTracks(recording.id);
            return tracks.map(t => this.toTrack(event, recording.etreeId, t, recording.id, t.id));
        });
    }
    getTrackFromAudio(audio, event, etreeId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.toTrack(event, etreeId, audio, event.id, audio.id);
        });
    }
    getTrack(song, event, etreeId, recordingId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const songDetails = yield this.apiService.getSong(song.id);
            if (!etreeId) {
                const sbd = event.recordings.filter(r => r.isSoundboard);
                var e = sbd.length ? sbd[0] : lodash__WEBPACK_IMPORTED_MODULE_1__["sample"](event.recordings);
                etreeId = e.etreeId;
                recordingId = e.id;
            }
            return this.getTracks(songDetails, event, etreeId, recordingId)[0];
        });
    }
    getTracks(song, event, etreeId, recordingId) {
        return song.audio && song.audio[etreeId] ?
            song.audio[etreeId].map(a => this.toTrack(event, etreeId, a, recordingId, song.id)) : [];
    }
    loadRandomEvent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return (yield this.getEventDetails(yield this.getRandomEventId()));
        });
    }
    getRandomEventId() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading;
            return this.events[Math.floor(Math.random() * this.events.length)].id;
        });
    }
    getRandomVenue() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return (yield this.loadRandomEvent()).venue;
        });
    }
    getRandomLocation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return (yield this.loadRandomEvent()).location;
        });
    }
    getRandomArtifacts(types, count = 20) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading;
            let artifacts = lodash__WEBPACK_IMPORTED_MODULE_1__["flatten"](this.events.map(e => e.artifacts.map(a => Object.assign(a, { eventInfo: e.venue + ", " + e.location + ", " + e.date }))));
            if (types) {
                artifacts = artifacts.filter(a => types.indexOf(a.type) >= 0);
            }
            return lodash__WEBPACK_IMPORTED_MODULE_1__["sampleSize"](artifacts, count);
        });
    }
    getRandomArtistId() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading;
            return lodash__WEBPACK_IMPORTED_MODULE_1__["sample"](this.event.performers).id;
        });
    }
    getRandomRecording() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const randomEvent = yield this.getEventInfo(yield this.getRandomEventId());
            return this.apiService.getRecordingDetails(lodash__WEBPACK_IMPORTED_MODULE_1__["sample"](randomEvent.recordings).id);
        });
    }
    getRandomSetlist() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.getSetlist(yield this.getRandomEventId());
        });
    }
    getRandomSong() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const randomSong = lodash__WEBPACK_IMPORTED_MODULE_1__["sample"](lodash__WEBPACK_IMPORTED_MODULE_1__["sample"](yield this.getRandomSetlist()).songs);
            console.log(randomSong);
            return this.apiService.getSong(randomSong.id);
        });
    }
    getRandomTrack() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const randomSong = yield this.getRandomSong();
            const randomRecordingEtreeId = lodash__WEBPACK_IMPORTED_MODULE_1__["sample"](lodash__WEBPACK_IMPORTED_MODULE_1__["keys"](randomSong.audio));
            const randomAudio = lodash__WEBPACK_IMPORTED_MODULE_1__["sample"](randomSong.audio[randomRecordingEtreeId]);
            const correspondingEvent = this.events.filter(e => e.recordings.map(r => r.etreeId).indexOf(randomRecordingEtreeId) >= 0)[0];
            return this.toTrack(correspondingEvent, randomRecordingEtreeId, randomAudio, '', randomSong.id); // TODO: fix recordingId
        });
    }
    toTrack(event, etreeId, audio, recordingId, songId) {
        const uri = ARCHIVE_URI + etreeId + '/' + audio.filename;
        return {
            title: audio.title + ", " + event.venue + ", "
                + event.location + ", " + event.date,
            uri: uri,
            show_id: event.id,
            waveform: uri.replace('.mp3', '.png'),
            etree_id: etreeId,
            recording_id: recordingId,
            song_id: songId,
            track: audio.track
        };
    }
    initEvents() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.events = yield this.apiService.getEvents();
            this.events.sort((a, b) => parseFloat(a.date.replace(/-/g, ''))
                - parseFloat(b.date.replace(/-/g, '')));
        });
    }
    formatDate(date) {
        return new Date(date).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }
    formatDates(objects) {
        objects.forEach(o => o.date = this.formatDate(o.date));
    }
    getSearchResult(q) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.getSearchResult(q);
        });
    }
    addBookmark(userid, route, time, title) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.addBookmark(userid, route, time, title);
        });
    }
    delBookmark(userid, route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.delBookmark(userid, route);
        });
    }
    getBookmarks(userid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.getBookmarks(userid);
        });
    }
    checkBookmark(userid, route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.checkBookmark(userid, route);
        });
    }
    like(userid, route, time, title) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.like(userid, route, time, title);
        });
    }
    unlike(userid, route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.unlike(userid, route);
        });
    }
    checkLike(userid, route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.checkLike(userid, route);
        });
    }
    countLikes(route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.countLikes(route);
        });
    }
    getLikes(userid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.getLikes(userid);
        });
    }
    getComments(route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.getComments(route);
        });
    }
    addComment(comment, route, userid, title) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.addComment(comment, route, userid, title);
        });
    }
    checkComment(msgId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.checkComment(msgId);
        });
    }
    getUserComments(userid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.getUserComments(userid);
        });
    }
    sendCommentReport(msg, userid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const comment = encodeURIComponent(JSON.stringify(msg));
            return this.apiService.sendCommentReport(comment, userid);
        });
    }
    addPlaylist(name, playlist, playlistid, userid, time) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const p = encodeURIComponent(JSON.stringify(playlist));
            return this.apiService.addPlaylist(name, p, playlistid, userid, time);
        });
    }
    getPlaylists(userid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.getPlaylists(userid);
        });
    }
    getPlaylist(playlistid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.getPlaylist(playlistid);
        });
    }
    delPlaylist(userid, playlistid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.delPlaylist(userid, playlistid);
        });
    }
    deleteComment(msgid, userid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.deleteComment(msgid, userid);
        });
    }
    getRecordingInfo(recordingid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.getRecordingInfo(recordingid);
        });
    }
    getTracklist(recordingid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.getTracklist(recordingid);
        });
    }
    toPlayerTrack(venue, location, date, showId, etreeId, audio, recordingId) {
        const uri = ARCHIVE_URI + etreeId + '/' + audio.filename;
        return {
            title: audio.title + ", " + venue + ", "
                + location + ", " + date,
            uri: uri,
            show_id: showId,
            waveform: uri.replace('.mp3', '.png'),
            etree_id: etreeId,
            recording_id: recordingId,
            song_id: audio.id,
            track: audio.track
        };
    }
    getYoutubeList(id, searchArray) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.getYoutubeList(id, searchArray);
        });
    }
}


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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");


console.log = function (s) {
    if (_config__WEBPACK_IMPORTED_MODULE_1__["DEBUG"]) {
        console.warn(s);
    }
    ;
};
class DeadApiService {
    constructor() {
        //private API_URL = "https://grateful-dead-api.herokuapp.com/";
        //private API_URL = "http://localhost:8060/";
        this.api_url = _config__WEBPACK_IMPORTED_MODULE_1__["API_URL"];
    }
    getEvents() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getJsonFromApi('events');
        });
    }
    getVenueCoordinates() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getJsonFromApi('coordinates');
        });
    }
    getTourCoordinates() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getJsonFromApi('tours');
        });
    }
    getEventDetails(eventId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getJsonFromApi('details?event=' + encodeURIComponent(eventId));
        });
    }
    getLocation(locationId) {
        return this.getJsonFromApi('location?id=' + encodeURIComponent(locationId));
    }
    getVenue(venueId) {
        return this.getJsonFromApi('venue?id=' + encodeURIComponent(venueId));
    }
    getSetlist(eventId) {
        return this.getJsonFromApi('setlist?event=' + encodeURIComponent(eventId));
    }
    getSong(songId) {
        return this.getJsonFromApi('song?id=' + encodeURIComponent(songId));
    }
    getRecordingDetails(recordingId) {
        return this.getJsonFromApi('recording?id=' + encodeURIComponent(recordingId));
    }
    getRecordingTracks(recordingId) {
        return this.getJsonFromApi('tracks?id=' + encodeURIComponent(recordingId));
    }
    getRecordingId(eventId) {
        return this.getJsonFromApi('recordingid?id=' + encodeURIComponent(eventId));
    }
    getArtistDetails(artistId) {
        return this.getJsonFromApi('artist?id=' + encodeURIComponent(artistId));
    }
    getFeatureSummary(audioUri) {
        return this.getJsonFromApi('featuresummary?audiouri=' + encodeURIComponent(audioUri));
    }
    getDiachronicVersionsAudio(songName, count = 100, skip = 0) {
        return this.getJsonFromApi('diachronic?songname=' + encodeURIComponent(songName)
            + "&count=" + count + "&skip=" + skip);
    }
    getJsonFromApi(path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return fetch(this.api_url + path)
                .then(r => r.text())
                .then(t => JSON.parse(t))
                .catch(e => console.log(e));
        });
    }
    getTextFromApi(path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return fetch(this.api_url + path)
                .then(r => r.text())
                .catch(e => console.log(e));
        });
    }
    getSearchResult(q) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getJsonFromApi('search?q=' + encodeURIComponent(q));
        });
    }
    addBookmark(userid, route, time, title) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getTextFromApi('addBookmark?userid=' + userid + '&route=' + route + '&time=' + time + '&title=' + title);
        });
    }
    delBookmark(userid, route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getTextFromApi('delBookmark?userid=' + userid + '&route=' + route);
        });
    }
    getBookmarks(userid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getJsonFromApi('getBookmarks?userid=' + userid);
        });
    }
    checkBookmark(userid, route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getTextFromApi('checkBookmark?userid=' + userid + '&route=' + route);
        });
    }
    getComments(route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getJsonFromApi('getComments?route=' + route);
        });
    }
    like(userid, route, time, title) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getTextFromApi('like?userid=' + userid + '&route=' + route + '&time=' + time + '&title=' + title);
        });
    }
    unlike(userid, route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getTextFromApi('unlike?userid=' + userid + '&route=' + route);
        });
    }
    checkLike(userid, route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getTextFromApi('checkLike?userid=' + userid + '&route=' + route);
        });
    }
    countLikes(route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getTextFromApi('countLikes?route=' + route);
        });
    }
    getLikes(userid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getJsonFromApi('getLikes?userid=' + userid);
        });
    }
    addComment(comment, route, userid, title) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const cmt = encodeURIComponent(JSON.stringify(comment));
            return this.getTextFromApi('addComment?comment=' + cmt + '&route=' + route + '&userid=' + userid + '&title=' + title);
        });
    }
    checkComment(msgId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getJsonFromApi('checkComment?msgId=' + msgId);
        });
    }
    getUserComments(userid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getJsonFromApi('getUserComments?userid=' + userid);
        });
    }
    sendCommentReport(comment, userid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getTextFromApi('sendCommentReport?comment=' + comment + '&userid=' + userid);
        });
    }
    addPlaylist(name, playlist, playlistid, userid, time) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getTextFromApi('addPlaylist?name=' + name + '&playlist=' + playlist + '&playlistid=' + playlistid + '&userid=' + userid + '&time=' + time);
        });
    }
    getPlaylists(userid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getJsonFromApi('getPlaylists?userid=' + userid);
        });
    }
    getPlaylist(playlistid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getJsonFromApi('getPlaylist?playlistid=' + playlistid);
        });
    }
    delPlaylist(userid, playlistid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getTextFromApi('delPlaylist?userid=' + userid + '&playlistid=' + playlistid);
        });
    }
    deleteComment(msgid, userid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getTextFromApi('deleteComment?msgid=' + msgid + '&userid=' + userid);
        });
    }
    getRecordingInfo(recordingid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getJsonFromApi('getRecordingInfo?recordingid=' + recordingid);
        });
    }
    getTracklist(recordingid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.getJsonFromApi('getTracklist?recordingid=' + recordingid);
        });
    }
    getYoutubeList(id, searcharray) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const s = encodeURIComponent(JSON.stringify(searcharray));
            return this.getJsonFromApi('youtube?id=' + id + '&searcharray=' + s);
        });
    }
}


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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _shared_list_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/list-dialog.component */ "./src/app/shared/list-dialog.component.ts");
/* harmony import */ var _shared_input_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/input-dialog.component */ "./src/app/shared/input-dialog.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");





class DialogService {
    constructor(dialog, data) {
        this.dialog = dialog;
        this.data = data;
    }
    openMultiFunction(title, options, funcs) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.open(title, options).subscribe(result => {
                if (result) {
                    funcs[options.indexOf(result)]();
                }
            });
        });
    }
    openSingleFunction(title, options, func) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.open(title, options).subscribe(result => func(result));
        });
    }
    open(title, options) {
        return this.dialog.open(_shared_list_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ListDialogComponent"], this.getDialogConfig(title, options)).afterClosed();
    }
    getDialogConfig(title, items) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.data = { title: title, items: items };
        return dialogConfig;
    }
    openInputDialog(callback) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dialogRef = this.dialog.open(_shared_input_dialog_component__WEBPACK_IMPORTED_MODULE_3__["InputDialogComponent"], {
                width: '250px',
                data: { input: '' }
            });
            dialogRef.afterClosed().subscribe(result => {
                callback(result);
            });
        });
    }
}


/***/ }),

/***/ "./src/app/services/google-analytics.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/google-analytics.service.ts ***!
  \******************************************************/
/*! exports provided: GoogleAnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAnalyticsService", function() { return GoogleAnalyticsService; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class GoogleAnalyticsService {
    constructor() { }
    eventEmitter(eventName, eventCategory, eventAction, eventLabel = null, eventValue = null) {
        if (_config__WEBPACK_IMPORTED_MODULE_0__["TRACKING"]) {
            gtag('event', eventName, {
                event_category: eventCategory,
                event_label: eventLabel,
                event_action: eventAction,
                value: eventValue
            });
        }
    }
}
GoogleAnalyticsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function GoogleAnalyticsService_Factory() { return new GoogleAnalyticsService(); }, token: GoogleAnalyticsService, providedIn: "root" });


/***/ }),

/***/ "./src/app/services/lightbox.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/lightbox.service.ts ***!
  \**********************************************/
/*! exports provided: LightboxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightboxService", function() { return LightboxService; });
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_lightbox_lightbox_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-lightbox/lightbox.service */ "./node_modules/ngx-lightbox/lightbox.service.js");
/* harmony import */ var ngx_lightbox_lightbox_service__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox_lightbox_service__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_lightbox_lightbox_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-lightbox/lightbox-config.service */ "./node_modules/ngx-lightbox/lightbox-config.service.js");
/* harmony import */ var ngx_lightbox_lightbox_config_service__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox_lightbox_config_service__WEBPACK_IMPORTED_MODULE_3__);




class LightboxService {
    constructor(lightbox, lightboxConfig) {
        this.lightbox = lightbox;
        this.lightboxConfig = lightboxConfig;
        lightboxConfig.wrapAround = true;
        lightboxConfig.showZoom = true;
    }
    makeGallery(a) {
        var carousel = [];
        var lightboxa = [];
        a.forEach(function (value, i) {
            var t = value;
            t['index'] = i;
            if (!value.thumbnail)
                t['thumbnail'] = t.image;
            carousel.push(t);
            lightboxa.push({
                src: value.image,
                caption: value.description
            });
        });
        return [lightboxa, carousel];
    }
    openLightboxArray(lightboxArray, index) {
        this.lightbox.open(lightboxArray, index);
    }
    openLightBoxSingle(a) {
        this.lightbox.open([{ src: a.image, caption: a.description, thumb: '' }], 0);
    }
}
LightboxService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function LightboxService_Factory() { return new LightboxService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_lightbox_lightbox_service__WEBPACK_IMPORTED_MODULE_2__["Lightbox"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_lightbox_lightbox_config_service__WEBPACK_IMPORTED_MODULE_3__["LightboxConfig"])); }, token: LightboxService, providedIn: "root" });


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
/* harmony import */ var _google_analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-analytics.service */ "./src/app/services/google-analytics.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");





console.log = function (s) {
    if (_config__WEBPACK_IMPORTED_MODULE_4__["DEBUG"]) {
        console.warn(s);
    }
    ;
};
class PlayerService {
    constructor(googleAnalyticsService, data, dialog) {
        this.googleAnalyticsService = googleAnalyticsService;
        this.data = data;
        this.dialog = dialog;
        this.maxTime = 0;
        this.currentTime = 0;
        this.playlist = [];
        this.currentTrackIndex = 0;
        this.muted = false;
        this.paused = true;
        this.playlists = [];
        this.playlistsLoaded = false;
    }
    addToPlaylist(track) {
        if (this.playlist.length < 100) {
            this.playlist.push(track);
            this.storePlaylist();
        }
        else {
            this.dialog.openSingleFunction('Playlist is limited to 100 tracks.', ["ok"], () => null);
        }
    }
    deleteFromPlaylist(i) {
        this.playlist.splice(i, 1);
        this.storePlaylist();
    }
    clearPlaylist() {
        this.playlist = [];
        this.storePlaylist();
    }
    getCurrentTrack() {
        return this.playlist[this.currentTrackIndex]
            || { title: "", uri: "", waveform: "" };
    }
    skipToTrack(track) {
        this.skipToTrackAtIndex(this.playlist.indexOf(track));
    }
    /*
        eventName: string,
        eventCategory: string,
        eventAction: string,
        eventLabel: string = null,
        eventValue: number = null ){
          */
    playPause() {
        if (this.playlist.length > 0) {
            if (this.currentAudio) {
                if (this.currentAudio.paused) {
                    this.currentAudio.play();
                    this.paused = false;
                }
                else {
                    this.currentAudio.pause();
                    this.paused = true;
                }
            }
            else {
                this.playPlaylist();
            }
        }
    }
    stop() {
        if (this.currentAudio) {
            this.reset();
        }
    }
    setTime(time) {
        if (this.currentAudio && time != Math.floor(this.currentAudio.currentTime)) {
            this.currentAudio.currentTime = time;
        }
    }
    toggleMute() {
        this.muted = !this.muted;
        if (this.currentAudio) {
            this.currentAudio.muted = this.muted;
        }
    }
    isMuted() {
        return this.muted;
    }
    nextTrack() {
        if (this.playlist.length) {
            this.skipToTrackAtIndex((this.currentTrackIndex + 1) % this.playlist.length);
        }
    }
    previousTrack() {
        if (this.playlist.length) {
            this.skipToTrackAtIndex((this.currentTrackIndex - 1) % this.playlist.length);
        }
    }
    skipToTrackAtIndex(index) {
        this.currentTrackIndex = index;
        if (this.currentAudio) {
            this.stop();
            this.playPause();
        }
    }
    playPlaylist() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.currentTrackIndex < this.playlist.length) {
                console.log('Google Analytics');
                this.googleAnalyticsService.eventEmitter("play", "audio_player", "play", this.getCurrentTrack().uri);
                yield this.playCurrentTrack();
                this.currentTrackIndex++;
                //this.playPlaylist();  // why was this here?
            }
            else {
                this.reset();
            }
        });
    }
    playCurrentTrack() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const audio = new Audio(this.playlist[this.currentTrackIndex].uri);
            audio.muted = this.muted;
            audio.play();
            this.paused = false;
            this.currentAudio = audio;
            audio.ontimeupdate = () => {
                this.maxTime = audio.duration;
                this.currentTime = audio.currentTime;
            };
            return new Promise(resolve => audio.onended = resolve);
        });
    }
    reset() {
        this.currentAudio.ontimeupdate = null;
        this.currentAudio.pause();
        this.currentAudio = null;
        this.currentTime = 0;
        this.paused = true;
    }
    volume(v) {
        if (this.currentAudio) {
            this.currentAudio.volume = v / 100;
        }
    }
    getPlaylists(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var result = yield this.data.getPlaylists(userId);
            if (result[0].playlists) {
                var p = result[0].playlists;
                p.sort(function (a, b) { return a.timestamp - b.timestamp; }).reverse();
                p.forEach(i => i.timestamp = this.formatTime(new Date(Number(i.timestamp))));
                this.playlists = p;
                this.playlistsLoaded = true;
            }
        });
    }
    deletePlaylist(userid, playlistid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.data.delPlaylist(userid, playlistid);
            this.getPlaylists(userid);
        });
    }
    formatTime(d) {
        function z(n) { return (n < 10 ? '0' : '') + n; }
        return z(d.getMonth() + 1) + '-' + z(d.getDate()) + '-' + (d.getYear() + 1900) + ' ' + d.getHours() + ':' + z(d.getMinutes());
    }
    storePlaylist() {
        localStorage.setItem('playlist', btoa(JSON.stringify(this.playlist)));
    }
    removePlaylistFromStorage() {
        localStorage.removeItem('playlist');
    }
    loadPlaylistFromsStorage() {
        var p = localStorage.getItem('playlist');
        if (p)
            this.playlist = JSON.parse(atob(p));
    }
}


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

/***/ "./src/app/shared/header.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/shared/header.component.ngfactory.js ***!
  \******************************************************/
/*! exports provided: RenderType_HeaderComponent, View_HeaderComponent_0, View_HeaderComponent_Host_0, HeaderComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HeaderComponent", function() { return RenderType_HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_0", function() { return View_HeaderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_Host_0", function() { return View_HeaderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponentNgFactory", function() { return HeaderComponentNgFactory; });
/* harmony import */ var _header_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.sass.shim.ngstyle */ "./src/app/shared/header.component.sass.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/material/menu/index.ngfactory */ "./node_modules/@angular/material/menu/index.ngfactory.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/fesm2015/menu.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/@angular/material/button/index.ngfactory */ "./node_modules/@angular/material/button/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../node_modules/@angular/material/icon/index.ngfactory */ "./node_modules/@angular/material/icon/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _node_modules_angular_material_progress_spinner_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../node_modules/@angular/material/progress-spinner/index.ngfactory */ "./node_modules/@angular/material/progress-spinner/index.ngfactory.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/fesm2015/bidi.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./header.component */ "./src/app/shared/header.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 

























var styles_HeaderComponent = [_header_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HeaderComponent, data: {} });

function View_HeaderComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "button", [["class", "mat-focus-indicator"], ["mat-menu-item", ""], ["routerLink", "/profile"]], [[1, "role", 0], [2, "mat-menu-item", null], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._checkDisabled($event) !== false);
        ad = (pd_1 && ad);
    } if (("mouseenter" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._handleMouseEnter() !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatMenuItem_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, [[1, 4], [2, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MAT_MENU_PANEL"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Profile Page"]))], function (_ck, _v) { var currVal_7 = "/profile"; _ck(_v, 1, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).role; var currVal_1 = true; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._highlighted; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._triggersSubmenu; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._getTabIndex(); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled.toString(); var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled || null); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_HeaderComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["mat-menu-item", ""]], [[1, "role", 0], [2, "mat-menu-item", null], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.auth.login() !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatMenuItem_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[1, 4], [2, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MAT_MENU_PANEL"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Log In"]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).role; var currVal_1 = true; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._highlighted; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._triggersSubmenu; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getTabIndex(); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled.toString(); var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_HeaderComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["mat-menu-item", ""]], [[1, "role", 0], [2, "mat-menu-item", null], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.logout() !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatMenuItem_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[1, 4], [2, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MAT_MENU_PANEL"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Log Out"]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).role; var currVal_1 = true; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._highlighted; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._triggersSubmenu; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getTabIndex(); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled.toString(); var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_HeaderComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "button", [["class", "mat-focus-indicator"], ["color", ""], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onBookmarkButton() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, 0, ["", ""]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); _ck(_v, 3, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).inline; var currVal_4 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "warn")); _ck(_v, 2, 0, currVal_3, currVal_4); var currVal_5 = (_co.bookmarked ? "bookmark" : "bookmark_border"); _ck(_v, 4, 0, currVal_5); }); }
function View_HeaderComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "button", [["class", "mat-focus-indicator"], ["color", ""], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onLikeButton() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, 0, ["", ""]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); _ck(_v, 3, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).inline; var currVal_4 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "warn")); _ck(_v, 2, 0, currVal_3, currVal_4); var currVal_5 = (_co.liked ? "thumb_up_alt" : "thumb_up_off_alt"); _ck(_v, 4, 0, currVal_5); }); }
function View_HeaderComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "button", [["class", "mat-focus-indicator"], ["color", ""], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["thumb_up_off_alt"]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).inline; var currVal_4 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "warn")); _ck(_v, 2, 0, currVal_3, currVal_4); }); }
function View_HeaderComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.userId; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.userId; _ck(_v, 4, 0, currVal_1); var currVal_2 = !_co.userId; _ck(_v, 6, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.likes; _ck(_v, 7, 0, currVal_3); }); }
function View_HeaderComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "p", [], [[4, "margin-right", null]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = "25px"; _ck(_v, 0, 0, currVal_0); }); }
function View_HeaderComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], [[4, "margin-top", null], [4, "margin-right", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "mat-spinner", [["class", "mat-spinner mat-progress-spinner"], ["diameter", "20"], ["mode", "indeterminate"], ["role", "progressbar"]], [[2, "_mat-animation-noopable", null], [4, "width", "px"], [4, "height", "px"]], null, null, _node_modules_angular_material_progress_spinner_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatSpinner_0"], _node_modules_angular_material_progress_spinner_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatSpinner"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS"]], { diameter: [0, "diameter"] }, null)], function (_ck, _v) { var currVal_5 = "20"; _ck(_v, 2, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = "8px"; var currVal_1 = "5px"; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._noopAnimations; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).diameter; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).diameter; _ck(_v, 1, 0, currVal_2, currVal_3, currVal_4); }); }
function View_HeaderComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 47, "div", [["fxLayout", "row"], ["fxLayout.xs", "column"]], [[4, "background-color", null], [4, "background-size", null], [4, "background-position", null], [4, "padding", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_16__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_16__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 32, "div", [["class", "container"], ["fxFlex", "1 1 auto"], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_16__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_16__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_16__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_16__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_16__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 29, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 16777216, null, null, 3, "button", [["aria-haspopup", "true"], ["class", "mat-focus-indicator mat-menu-trigger"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-expanded", 0], [1, "aria-controls", 0]], [[null, "mousedown"], [null, "keydown"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._handleMousedown($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._handleClick($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 1196032, null, 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MAT_MENU_SCROLL_STRATEGY"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenu"]], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__["Directionality"]], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]], { menu: [0, "menu"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 0, "img", [["height", "25"], ["src", "assets/gd_logo2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 24, "mat-menu", [], null, null, null, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View__MatMenu_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType__MatMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 1294336, [["menu", 4]], 3, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["_MatMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MAT_MENU_DEFAULT_OPTIONS"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _allItems: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { items: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { lazyContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenu"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["_MatMenu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MAT_MENU_PANEL"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenu"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 0, 3, "button", [["class", "mat-focus-indicator"], ["mat-menu-item", ""], ["routerLink", "/mapselect"]], [[1, "role", 0], [2, "mat-menu-item", null], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onClick() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._checkDisabled($event) !== false);
        ad = (pd_1 && ad);
    } if (("mouseenter" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._handleMouseEnter() !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatMenuItem_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 180224, [[1, 4], [2, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MAT_MENU_PANEL"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Concert Map"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HeaderComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HeaderComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HeaderComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 0, 3, "button", [["class", "mat-focus-indicator"], ["mat-menu-item", ""], ["routerLink", "/about"]], [[1, "role", 0], [2, "mat-menu-item", null], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).onClick() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._checkDisabled($event) !== false);
        ad = (pd_1 && ad);
    } if (("mouseenter" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._handleMouseEnter() !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatMenuItem_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 180224, [[1, 4], [2, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MAT_MENU_PANEL"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["About"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, 0, 3, "button", [["class", "mat-focus-indicator"], ["mat-menu-item", ""], ["routerLink", "/dataprivacy"]], [[1, "role", 0], [2, "mat-menu-item", null], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).onClick() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._checkDisabled($event) !== false);
        ad = (pd_1 && ad);
    } if (("mouseenter" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._handleMouseEnter() !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatMenuItem_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 180224, [[1, 4], [2, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MAT_MENU_PANEL"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Privacy"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 6, "div", [["class", "container hf1"], ["fxFlex", "1 1 auto"], ["fxLayout", "column"]], [[4, "padding", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_16__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_16__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_16__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_16__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_16__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](39, null, [" ", " ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, [["searchfield", 1]], null, 0, "input", [["placeholder", "Search"]], [[8, "disabled", 0]], [[null, "keydown.enter"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keydown.enter" === en)) {
        var pd_0 = (_co.onSubmit(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_4 = "row"; var currVal_5 = "column"; _ck(_v, 1, 0, currVal_4, currVal_5); var currVal_6 = "column"; _ck(_v, 3, 0, currVal_6); var currVal_7 = "1 1 auto"; _ck(_v, 4, 0, currVal_7); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11); _ck(_v, 8, 0, currVal_12); _ck(_v, 11, 0); var currVal_20 = "/mapselect"; _ck(_v, 18, 0, currVal_20); var currVal_21 = _co.userId; _ck(_v, 22, 0, currVal_21); var currVal_22 = !_co.userId; _ck(_v, 24, 0, currVal_22); var currVal_23 = _co.userId; _ck(_v, 26, 0, currVal_23); var currVal_31 = "/about"; _ck(_v, 28, 0, currVal_31); var currVal_39 = "/dataprivacy"; _ck(_v, 32, 0, currVal_39); var currVal_41 = "column"; _ck(_v, 36, 0, currVal_41); var currVal_42 = "1 1 auto"; _ck(_v, 37, 0, currVal_42); var currVal_45 = !(((((_co.router.url == "/about") || (_co.router.url == "/mapselect")) || (_co.router.url == "/profile")) || (_co.router.url == "/dataprivacy")) || _co.router.url.startsWith("/playlist")); _ck(_v, 41, 0, currVal_45); var currVal_46 = !_co.searchState; _ck(_v, 44, 0, currVal_46); var currVal_47 = _co.searchState; _ck(_v, 46, 0, currVal_47); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = "#ededed"; var currVal_1 = "cover"; var currVal_2 = "center"; var currVal_3 = "3px"; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).disabled || null); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7)._animationMode === "NoopAnimations"); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).menuOpen || null); var currVal_11 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).menuOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).menu.panelId : null); _ck(_v, 6, 0, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).role; var currVal_14 = true; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._highlighted; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._triggersSubmenu; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._getTabIndex(); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).disabled.toString(); var currVal_19 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).disabled || null); _ck(_v, 17, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).role; var currVal_25 = true; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._highlighted; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._triggersSubmenu; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._getTabIndex(); var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).disabled.toString(); var currVal_30 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).disabled || null); _ck(_v, 27, 0, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30); var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).role; var currVal_33 = true; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._highlighted; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._triggersSubmenu; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._getTabIndex(); var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).disabled.toString(); var currVal_38 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).disabled || null); _ck(_v, 31, 0, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38); var currVal_40 = "4px"; _ck(_v, 35, 0, currVal_40); var currVal_43 = _co.title; var currVal_44 = _co.subtitle; _ck(_v, 39, 0, currVal_43, currVal_44); var currVal_48 = (_co.searchState == 1); _ck(_v, 47, 0, currVal_48); }); }
function View_HeaderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "link", [["href", "https://fonts.googleapis.com/icon?family=Material+Icons"], ["rel", "stylesheet"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 2, 0, currVal_0); }, null); }
function View_HeaderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "gd-header", [], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__["Title"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialog"], _services_data_service__WEBPACK_IMPORTED_MODULE_22__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_23__["AuthService"], _services_player_service__WEBPACK_IMPORTED_MODULE_24__["PlayerService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("gd-header", _header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"], View_HeaderComponent_Host_0, { imageUrl: "imageUrl", title: "title", subtitle: "subtitle", userId: "userId" }, {}, ["*"]);



/***/ }),

/***/ "./src/app/shared/header.component.sass.shim.ngstyle.js":
/*!**************************************************************!*\
  !*** ./src/app/shared/header.component.sass.shim.ngstyle.js ***!
  \**************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = [".hf1[_ngcontent-%COMP%] {\n  color: #242424;\n}\n\n#overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  display: none;\n  \n  width: 100%;\n  \n  height: 100%;\n  \n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  \n  z-index: 2;\n  cursor: pointer;\n}\n\n.mat-icon-button[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0pvdXJuYWwvcHJvamVjdHMvZ3JhdGVmdWxfZGVhZF8yMDE5X2dpdC93ZWItYXBwMi9zcmMvYXBwL3NoYXJlZC9oZWFkZXIuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3NoYXJlZC9oZWFkZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxjQUFjO0FDQWhCOztBREdBO0VBQ0UsZUFBZTtFQUNmLG1DQUFBO0VBQ0EsYUFBYTtFQUNiLHNCQUFBO0VBQ0EsV0FBVztFQUNYLHNDQUFBO0VBQ0EsWUFBWTtFQUNaLHVDQUFBO0VBQ0EsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULG9DQUFvQztFQUNwQyxrQ0FBQTtFQUNBLFVBQVU7RUFFVixlQUFlO0FDRGpCOztBRElBO0VBQ0Usa0JBQWtCO0FDRHBCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZjEge1xuICAvLyBjb2xvcjogIzJhMzk4YVxuICBjb2xvcjogIzI0MjQyNDtcbiB9ICAvL2ZvbnQtZmFtaWx5OiBJbXBhY3QsIENoYXJjb2FsLCBzYW5zLXNlcmlmXG5cbiNvdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgZGlzcGxheTogbm9uZTtcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gIHotaW5kZXg6IDI7XG4gIC8vIFNwZWNpZnkgYSBzdGFjayBvcmRlciBpbiBjYXNlIHlvdSdyZSB1c2luZyBhIGRpZmZlcmVudCBvcmRlciBmb3Igb3RoZXIgZWxlbWVudHNcbiAgY3Vyc29yOiBwb2ludGVyO1xuIH0gIC8vIEFkZCBhIHBvaW50ZXIgb24gaG92ZXJcblxuLm1hdC1pY29uLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDsgfVxuIiwiLmhmMSB7XG4gIGNvbG9yOiAjMjQyNDI0O1xufVxuXG4jb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gIGRpc3BsYXk6IG5vbmU7XG4gIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICB6LWluZGV4OiAyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYXQtaWNvbi1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4iXX0= */"];



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _shared_search_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/search-dialog.component */ "./src/app/shared/search-dialog.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");


//import { VIEWS } from '../globals';
//import * as Fuse from 'fuse.js';






//import { CookieService } from 'ngx-cookie-service';

console.log = function (s) {
    if (_config__WEBPACK_IMPORTED_MODULE_8__["DEBUG"]) {
        console.warn(s);
    }
    ;
};
class HeaderComponent {
    //protected number_liked: number;
    constructor(sanitizer, titleService, dialog, data, router, auth, player) {
        this.sanitizer = sanitizer;
        this.titleService = titleService;
        this.dialog = dialog;
        this.data = data;
        this.router = router;
        this.auth = auth;
        this.player = player;
    }
    ngOnInit() {
        this.titleService.setTitle('Grateful Live - ' + this.title + ', ' + this.subtitle);
        if (this.userId) {
            gtag('set', { 'user_id': this.userId });
            if (!((this.router.url == '/about') || (this.router.url == '/mapselect') || (this.router.url == '/profile'))) {
                this.checkBookmark();
                this.checkLike();
            }
            ;
        }
        this.bookmarked = false;
        this.liked = false;
        this.searchState = 0;
        this.image = this.sanitizer.bypassSecurityTrustStyle('url(' + this.imageUrl + ')');
        if (!((this.router.url == '/about') || (this.router.url == '/mapselect') || (this.router.url == '/profile')))
            this.countLikes();
        /*
          if (this.auth.loggedIn) {
            this.auth.userProfile$.subscribe(userProfile => {
              this.currentUser = this.resolve.getUser(userProfile);
              if (!( (this.router.url == '/about') || (this.router.url == '/mapselect') || (this.router.url == '/profile') ))
              { this.checkBookmark() };
            });
          }
          */
    }
    //       else { this.player.removePlaylistFromStorage() }
    logout() {
        this.auth.logout();
        this.player.removePlaylistFromStorage();
    }
    onSubmit(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(e);
            this.searchState = 1;
            var result = yield this.data.getSearchResult(e);
            if (result.length > 0) {
                this.openDialog(result, e);
            }
            this.searchState = 0;
        });
    }
    openDialog(r, s) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.position = { right: '0', top: '0' };
        dialogConfig.maxHeight = 400;
        dialogConfig.data = {
            id: 1,
            result: r,
            searchString: s
        };
        //dialogConfig.disableClose = true;
        //dialogConfig.autoFocus = true;
        this.dialog.open(_shared_search_dialog_component__WEBPACK_IMPORTED_MODULE_3__["SearchDialogComponent"], dialogConfig);
    }
    onBookmarkButton() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.bookmarked == false) {
                yield this.data.addBookmark(this.userId, this.router.url, new Date().getTime(), this.title + ' ' + this.subtitle);
            }
            else {
                yield this.data.delBookmark(this.userId, this.router.url);
            }
            this.checkBookmark();
        });
    }
    checkBookmark() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var b = yield this.data.checkBookmark(this.userId, this.router.url);
            this.bookmarked = Boolean(JSON.parse(b));
            console.log("bookmark: " + this.bookmarked);
        });
    }
    onLikeButton() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.liked == false) {
                yield this.data.like(this.userId, this.router.url, new Date().getTime(), this.title + ' ' + this.subtitle);
            }
            else {
                yield this.data.unlike(this.userId, this.router.url);
            }
            this.checkLike();
        });
    }
    checkLike() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var b = yield this.data.checkLike(this.userId, this.router.url);
            this.liked = Boolean(JSON.parse(b));
            this.countLikes();
            console.log("like: " + this.liked);
        });
    }
    countLikes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.likes = yield this.data.countLikes(this.router.url);
            console.log("likes: " + this.likes);
        });
    }
}


/***/ }),

/***/ "./src/app/shared/input-dialog.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/shared/input-dialog.component.ngfactory.js ***!
  \************************************************************/
/*! exports provided: RenderType_InputDialogComponent, View_InputDialogComponent_0, View_InputDialogComponent_Host_0, InputDialogComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_InputDialogComponent", function() { return RenderType_InputDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_InputDialogComponent_0", function() { return View_InputDialogComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_InputDialogComponent_Host_0", function() { return View_InputDialogComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDialogComponentNgFactory", function() { return InputDialogComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/material/button/index.ngfactory */ "./node_modules/@angular/material/button/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _input_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input-dialog.component */ "./src/app/shared/input-dialog.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 








var styles_InputDialogComponent = [];
var RenderType_InputDialogComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_InputDialogComponent, data: {} });

function View_InputDialogComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 14, "div", [["class", "mat-dialog-content"], ["mat-dialog-content", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Save playlist"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 10, "mat-form-field", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "mat-label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Enter name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 7, "input", [["matInput", ""], ["maxlength", "50"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.data.input = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], [], { maxlength: [0, "maxlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 7, "div", [["class", "mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onCancelClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onOkClick(_co.data.input) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Ok"]))], function (_ck, _v) { var _co = _v.component; var currVal_8 = "50"; _ck(_v, 9, 0, currVal_8); var currVal_9 = _co.data.input; _ck(_v, 12, 0, currVal_9); var currVal_14 = (_co.data.input.length == 0); _ck(_v, 21, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).maxlength : null); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).ngClassPending; _ck(_v, 7, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).disabled || null); var currVal_11 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18)._animationMode === "NoopAnimations"); _ck(_v, 17, 0, currVal_10, currVal_11); var currVal_12 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 21).disabled || null); var currVal_13 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 21)._animationMode === "NoopAnimations"); _ck(_v, 20, 0, currVal_12, currVal_13); }); }
function View_InputDialogComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "input-dialog", [], null, null, null, View_InputDialogComponent_0, RenderType_InputDialogComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _input_dialog_component__WEBPACK_IMPORTED_MODULE_7__["InputDialogComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]], null, null)], null, null); }
var InputDialogComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("input-dialog", _input_dialog_component__WEBPACK_IMPORTED_MODULE_7__["InputDialogComponent"], View_InputDialogComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shared/input-dialog.component.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/input-dialog.component.ts ***!
  \**************************************************/
/*! exports provided: InputDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDialogComponent", function() { return InputDialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");

class InputDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onCancelClick() {
        this.dialogRef.close();
    }
    onOkClick(input) {
        this.dialogRef.close(input);
    }
}


/***/ }),

/***/ "./src/app/shared/list-dialog.component.ngfactory.js":
/*!***********************************************************!*\
  !*** ./src/app/shared/list-dialog.component.ngfactory.js ***!
  \***********************************************************/
/*! exports provided: RenderType_ListDialogComponent, View_ListDialogComponent_0, View_ListDialogComponent_Host_0, ListDialogComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ListDialogComponent", function() { return RenderType_ListDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ListDialogComponent_0", function() { return View_ListDialogComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ListDialogComponent_Host_0", function() { return View_ListDialogComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDialogComponentNgFactory", function() { return ListDialogComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/material/button/index.ngfactory */ "./node_modules/@angular/material/button/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _list_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-dialog.component */ "./src/app/shared/list-dialog.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 








var styles_ListDialogComponent = [];
var RenderType_ListDialogComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ListDialogComponent, data: {} });

function View_ListDialogComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [], [[4, "margin-bottom", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onItemClick(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = "5px"; _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 1, 0, currVal_1); }); }
function View_ListDialogComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "mat-dialog-content"], ["mat-dialog-content", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "p", [["class", "mat-dialog-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ListDialogComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 8, "div", [["class", "mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onCancelClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 3, "button", [["cdkFocusInitial", ""], ["class", "mat-focus-indicator"], ["mat-button", ""]], [[1, "aria-label", 0], [1, "type", 0], [1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).dialogResult) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]], { dialogResult: [0, "dialogResult"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Ok"]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.data.items; _ck(_v, 5, 0, currVal_1); var currVal_8 = _co.data; _ck(_v, 12, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.data.title; _ck(_v, 3, 0, currVal_0); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).disabled || null); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9)._animationMode === "NoopAnimations"); _ck(_v, 8, 0, currVal_2, currVal_3); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ariaLabel || null); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).type; var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).disabled || null); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13)._animationMode === "NoopAnimations"); _ck(_v, 11, 0, currVal_4, currVal_5, currVal_6, currVal_7); }); }
function View_ListDialogComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "list-dialog", [], null, null, null, View_ListDialogComponent_0, RenderType_ListDialogComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _list_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ListDialogComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]], null, null)], null, null); }
var ListDialogComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("list-dialog", _list_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ListDialogComponent"], View_ListDialogComponent_Host_0, {}, {}, []);



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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");

class ListDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onCancelClick() {
        this.dialogRef.close();
    }
    onItemClick(item) {
        this.dialogRef.close(item);
    }
}


/***/ }),

/***/ "./src/app/shared/map.component.ngfactory.js":
/*!***************************************************!*\
  !*** ./src/app/shared/map.component.ngfactory.js ***!
  \***************************************************/
/*! exports provided: RenderType_MapComponent, View_MapComponent_0, View_MapComponent_Host_0, MapComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MapComponent", function() { return RenderType_MapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MapComponent_0", function() { return View_MapComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MapComponent_Host_0", function() { return View_MapComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponentNgFactory", function() { return MapComponentNgFactory; });
/* harmony import */ var _map_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.component.sass.shim.ngstyle */ "./src/app/shared/map.component.sass.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _asymmetrik_ngx_leaflet_dist_leaflet_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.directive */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.directive.js");
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.component */ "./src/app/shared/map.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 




var styles_MapComponent = [_map_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_MapComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_MapComponent, data: {} });

function View_MapComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "map"], ["leaflet", ""]], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onResize() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 606208, null, 0, _asymmetrik_ngx_leaflet_dist_leaflet_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_2__["LeafletDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { options: [0, "options"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.options; _ck(_v, 1, 0, currVal_0); }, null); }
function View_MapComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "gd-map", [], null, null, null, View_MapComponent_0, RenderType_MapComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MapComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("gd-map", _map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], View_MapComponent_Host_0, { latitude: "latitude", longitude: "longitude", zoom: "zoom" }, {}, []);



/***/ }),

/***/ "./src/app/shared/map.component.sass.shim.ngstyle.js":
/*!***********************************************************!*\
  !*** ./src/app/shared/map.component.sass.shim.ngstyle.js ***!
  \***********************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = [".map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0pvdXJuYWwvcHJvamVjdHMvZ3JhdGVmdWxfZGVhZF8yMDE5X2dpdC93ZWItYXBwMi9zcmMvYXBwL3NoYXJlZC9tYXAuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3NoYXJlZC9tYXAuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQ0NkIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21hcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlOyB9XG4iLCIubWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"];



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
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);

class MapComponent {
    ngOnInit() {
        this.options = {
            layers: [
                //tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["tileLayer"])('https://a.tiles.mapbox.com/v3/smmaurer.k59p72bl/{z}/{x}/{y}.png', { maxZoom: 17, attribution: '...' }),
                Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["marker"])([this.latitude, this.longitude], {
                    icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["icon"])({
                        iconSize: [25, 41],
                        iconAnchor: [13, 41],
                        iconUrl: 'assets/marker-icon-2x.png',
                    })
                })
            ],
            zoom: this.zoom,
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["latLng"])(this.latitude, this.longitude)
        };
    }
}


/***/ }),

/***/ "./src/app/shared/player.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/shared/player.component.ngfactory.js ***!
  \******************************************************/
/*! exports provided: RenderType_PlayerComponent, View_PlayerComponent_0, View_PlayerComponent_Host_0, PlayerComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PlayerComponent", function() { return RenderType_PlayerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PlayerComponent_0", function() { return View_PlayerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PlayerComponent_Host_0", function() { return View_PlayerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponentNgFactory", function() { return PlayerComponentNgFactory; });
/* harmony import */ var _player_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.component.sass.shim.ngstyle */ "./src/app/shared/player.component.sass.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");
/* harmony import */ var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/material/icon/index.ngfactory */ "./node_modules/@angular/material/icon/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@angular/material/button/index.ngfactory */ "./node_modules/@angular/material/button/index.ngfactory.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/fesm2015/menu.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/fesm2015/bidi.js");
/* harmony import */ var _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../node_modules/@angular/material/menu/index.ngfactory */ "./node_modules/@angular/material/menu/index.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _node_modules_angular_material_slider_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../node_modules/@angular/material/slider/index.ngfactory */ "./node_modules/@angular/material/slider/index.ngfactory.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/fesm2015/slider.js");
/* harmony import */ var _player_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./player.component */ "./src/app/shared/player.component.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 

























var styles_PlayerComponent = [_player_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PlayerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_PlayerComponent, data: {} });

function View_PlayerComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "img", [["class", "waveform"]], [[4, "height", null], [2, "flashy", null], [8, "hidden", 0]], [[null, "load"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("load" === en)) {
        var pd_0 = ((_co.loaded = true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1720320, null, 0, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__["LazyLoadImageDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, "options"]], { lazyImage: [0, "lazyImage"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.player.getCurrentTrack().waveform; _ck(_v, 1, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = "100px"; var currVal_1 = _co.loaded; var currVal_2 = _co.minimized; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_PlayerComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["pause"]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).inline; var currVal_1 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "warn")); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_PlayerComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["play_arrow"]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).inline; var currVal_1 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "warn")); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_PlayerComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "button", [["class", "mat-focus-indicator"], ["disabled", "true"], ["fxFlex", ""], ["mat-flat-button", ""], ["style", "color: rgb(194, 192, 192)"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" load "]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); var currVal_3 = "true"; _ck(_v, 2, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_PlayerComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "button", [["class", "mat-focus-indicator"], ["fxFlex", ""], ["mat-flat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onLoadPlaylist() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" load "]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_PlayerComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "button", [["class", "mat-focus-indicator"], ["disabled", "true"], ["fxFlex", ""], ["mat-flat-button", ""], ["style", "color: rgb(194, 192, 192)"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" save "]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); var currVal_3 = "true"; _ck(_v, 2, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_PlayerComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "button", [["class", "mat-focus-indicator"], ["fxFlex", ""], ["mat-flat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onSavePlaylist() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" save "]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_PlayerComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "button", [["class", "mat-focus-indicator"], ["disabled", "true"], ["fxFlex", ""], ["mat-flat-button", ""], ["style", "color: rgb(194, 192, 192)"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" clear "]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); var currVal_3 = "true"; _ck(_v, 2, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_PlayerComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "button", [["class", "mat-focus-indicator"], ["fxFlex", ""], ["mat-flat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClearPlaylist() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" clear "]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_PlayerComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.router.navigate(["/song", _v.parent.context.$implicit.song_id]) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["song"]))], null, null); }
function View_PlayerComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.router.navigate(["/show", _v.parent.context.$implicit.show_id]) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["show"]))], null, null); }
function View_PlayerComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.router.navigate(["/recording", _v.parent.context.$implicit.recording_id]) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["recording"]))], null, null); }
function View_PlayerComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 21, "div", [["class", "playlist"], ["style", "text-align:left; margin-left: 3px;"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [], [[4, "color", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.player.skipToTrack(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 18, "span", [["style", "float:right; margin-right: 3px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 16777216, null, null, 2, "button", [["aria-haspopup", "true"], ["class", "mat-menu-trigger"]], [[1, "aria-expanded", 0], [1, "aria-controls", 0]], [[null, "mousedown"], [null, "keydown"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._handleMousedown($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._handleClick($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 1196032, null, 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuTrigger"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MAT_MENU_SCROLL_STRATEGY"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenu"]], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"]], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"]], { menu: [0, "menu"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [">>"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 12, "mat-menu", [], null, null, null, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View__MatMenu_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType__MatMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenu"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["_MatMenu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MAT_MENU_PANEL"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 1294336, [["menu", 4]], 3, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["_MatMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MAT_MENU_DEFAULT_OPTIONS"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _allItems: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { items: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { lazyContent: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PlayerComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PlayerComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PlayerComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.delTrack(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["X"]))], function (_ck, _v) { var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10); _ck(_v, 5, 0, currVal_5); _ck(_v, 10, 0); var currVal_6 = _v.context.$implicit.song_id; _ck(_v, 15, 0, currVal_6); var currVal_7 = _v.context.$implicit.show_id; _ck(_v, 17, 0, currVal_7); var currVal_8 = _v.context.$implicit.recording_id; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.minimized && (_v.context.$implicit !== _co.player.getCurrentTrack())); _ck(_v, 0, 0, currVal_0); var currVal_1 = ((_v.context.$implicit === _co.player.getCurrentTrack()) ? "#3d3d3d" : "grey"); _ck(_v, 1, 0, currVal_1); var currVal_2 = (((((_v.context.$implicit.track + ". ") + _v.context.$implicit.title) + " [") + _v.context.$implicit.etree_id) + "]"); _ck(_v, 2, 0, currVal_2); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).menuOpen || null); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).menuOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).menu.panelId : null); _ck(_v, 4, 0, currVal_3, currVal_4); }); }
function View_PlayerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["fxLayout", "column"]], [[4, "height", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PlayerComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "input", [["min", "0"], ["type", "range"]], [[8, "max", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.player.currentTime = $event) !== false);
        ad = (pd_7 && ad);
    } if (("ngModelChange" === en)) {
        var pd_8 = (_co.player.setTime($event) !== false);
        ad = (pd_8 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["RangeValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["RangeValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 53, "div", [["fxLayout", "row"], ["style", "margin-top: 10px; margin-left: 3px; margin-right: 3px;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 6, "button", [["class", "mat-focus-indicator"], ["fxFlex", ""], ["mat-flat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.player.playPause() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PlayerComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PlayerComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 5, "button", [["class", "mat-focus-indicator"], ["fxFlex", ""], ["mat-flat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.player.stop() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["stop"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 5, "button", [["class", "mat-focus-indicator"], ["fxFlex", ""], ["mat-flat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.player.previousTrack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["skip_previous"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 5, "button", [["class", "mat-focus-indicator"], ["fxFlex", ""], ["mat-flat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.player.nextTrack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["skip_next"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 5, "button", [["class", "mat-focus-indicator"], ["fxFlex", ""], ["mat-flat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.player.toggleMute() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](43, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 5, "button", [["class", "mat-focus-indicator"], ["fxFlex", ""], ["mat-flat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.minimized = !_co.minimized) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](49, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 2, "mat-slider", [["class", "mat-slider mat-focus-indicator"], ["max", "100"], ["min", "0"], ["role", "slider"], ["step", "1"], ["type", "range"], ["value", "100"]], [[8, "tabIndex", 0], [1, "aria-disabled", 0], [1, "aria-valuemax", 0], [1, "aria-valuemin", 0], [1, "aria-valuenow", 0], [1, "aria-orientation", 0], [2, "mat-slider-disabled", null], [2, "mat-slider-has-ticks", null], [2, "mat-slider-horizontal", null], [2, "mat-slider-axis-inverted", null], [2, "mat-slider-invert-mouse-coords", null], [2, "mat-slider-sliding", null], [2, "mat-slider-thumb-label-showing", null], [2, "mat-slider-vertical", null], [2, "mat-slider-min-value", null], [2, "mat-slider-hide-last-tick", null], [2, "_mat-animation-noopable", null]], [[null, "input"], [null, "focus"], [null, "blur"], [null, "keydown"], [null, "keyup"], [null, "mouseenter"], [null, "selectstart"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("focus" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._onFocus() !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._onBlur() !== false);
        ad = (pd_1 && ad);
    } if (("keydown" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._onKeydown($event) !== false);
        ad = (pd_2 && ad);
    } if (("keyup" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._onKeyup() !== false);
        ad = (pd_3 && ad);
    } if (("mouseenter" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._onMouseenter() !== false);
        ad = (pd_4 && ad);
    } if (("selectstart" === en)) {
        var pd_5 = ($event.preventDefault() !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_co.volumeChange($event.value) !== false);
        ad = (pd_6 && ad);
    } return ad; }, _node_modules_angular_material_slider_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatSlider_0"], _node_modules_angular_material_slider_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatSlider"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_material_slider__WEBPACK_IMPORTED_MODULE_18__["MatSlider"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 245760, null, 0, _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__["MatSlider"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"]], [8, null], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_15__["DOCUMENT"]]], { max: [0, "max"], min: [1, "min"], step: [2, "step"], value: [3, "value"] }, { input: "input" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PlayerComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PlayerComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PlayerComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PlayerComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PlayerComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PlayerComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 3, "div", [["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PlayerComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = "column"; _ck(_v, 1, 0, currVal_1); var currVal_2 = _co.player.getCurrentTrack().waveform; _ck(_v, 3, 0, currVal_2); var currVal_11 = _co.player.currentTime; _ck(_v, 8, 0, currVal_11); var currVal_12 = "row"; _ck(_v, 12, 0, currVal_12); var currVal_15 = ""; _ck(_v, 14, 0, currVal_15); var currVal_16 = !_co.player.paused; _ck(_v, 17, 0, currVal_16); var currVal_17 = _co.player.paused; _ck(_v, 19, 0, currVal_17); var currVal_20 = ""; _ck(_v, 21, 0, currVal_20); _ck(_v, 24, 0); var currVal_25 = ""; _ck(_v, 27, 0, currVal_25); _ck(_v, 30, 0); var currVal_30 = ""; _ck(_v, 33, 0, currVal_30); _ck(_v, 36, 0); var currVal_35 = ""; _ck(_v, 39, 0, currVal_35); _ck(_v, 42, 0); var currVal_41 = ""; _ck(_v, 45, 0, currVal_41); _ck(_v, 48, 0); var currVal_62 = "100"; var currVal_63 = "0"; var currVal_64 = "1"; var currVal_65 = "100"; _ck(_v, 52, 0, currVal_62, currVal_63, currVal_64, currVal_65); var currVal_66 = (_co.currentUser.userId && (!_co.player.playlists || (_co.player.playlists.length == 0))); _ck(_v, 54, 0, currVal_66); var currVal_67 = (_co.currentUser.userId && (!_co.player.playlists || (_co.player.playlists.length > 0))); _ck(_v, 56, 0, currVal_67); var currVal_68 = (_co.currentUser.userId && (_co.player.playlist.length == 0)); _ck(_v, 58, 0, currVal_68); var currVal_69 = (_co.currentUser.userId && (_co.player.playlist.length > 0)); _ck(_v, 60, 0, currVal_69); var currVal_70 = (_co.currentUser.userId && (_co.player.playlist.length == 0)); _ck(_v, 62, 0, currVal_70); var currVal_71 = (_co.currentUser.userId && (_co.player.playlist.length > 0)); _ck(_v, 64, 0, currVal_71); var currVal_72 = "column"; _ck(_v, 66, 0, currVal_72); var currVal_73 = _co.player.playlist; _ck(_v, 68, 0, currVal_73); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.loaded && !_co.minimized) ? "120px" : "20px"); _ck(_v, 0, 0, currVal_0); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.player.maxTime, ""); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 4, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_13 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).disabled || null); var currVal_14 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._animationMode === "NoopAnimations"); _ck(_v, 13, 0, currVal_13, currVal_14); var currVal_18 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).disabled || null); var currVal_19 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._animationMode === "NoopAnimations"); _ck(_v, 20, 0, currVal_18, currVal_19); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).inline; var currVal_22 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).color !== "warn")); _ck(_v, 23, 0, currVal_21, currVal_22); var currVal_23 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).disabled || null); var currVal_24 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._animationMode === "NoopAnimations"); _ck(_v, 26, 0, currVal_23, currVal_24); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).inline; var currVal_27 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).color !== "warn")); _ck(_v, 29, 0, currVal_26, currVal_27); var currVal_28 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).disabled || null); var currVal_29 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._animationMode === "NoopAnimations"); _ck(_v, 32, 0, currVal_28, currVal_29); var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).inline; var currVal_32 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).color !== "warn")); _ck(_v, 35, 0, currVal_31, currVal_32); var currVal_33 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).disabled || null); var currVal_34 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._animationMode === "NoopAnimations"); _ck(_v, 38, 0, currVal_33, currVal_34); var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).inline; var currVal_37 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).color !== "warn")); _ck(_v, 41, 0, currVal_36, currVal_37); var currVal_38 = (_co.player.muted ? "volume_up" : "volume_off"); _ck(_v, 43, 0, currVal_38); var currVal_39 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).disabled || null); var currVal_40 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46)._animationMode === "NoopAnimations"); _ck(_v, 44, 0, currVal_39, currVal_40); var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).inline; var currVal_43 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).color !== "warn")); _ck(_v, 47, 0, currVal_42, currVal_43); var currVal_44 = (_co.minimized ? "visibility" : "visibility_off"); _ck(_v, 49, 0, currVal_44); var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).tabIndex; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).disabled; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).max; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).min; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).value; var currVal_50 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).vertical ? "vertical" : "horizontal"); var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).disabled; var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).tickInterval; var currVal_53 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).vertical; var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._invertAxis; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._shouldInvertMouseCoords(); var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._isSliding; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).thumbLabel; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).vertical; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._isMinValue; var currVal_60 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).disabled || ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._isMinValue && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._thumbGap) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._invertAxis)); var currVal_61 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._animationMode === "NoopAnimations"); _ck(_v, 50, 1, [currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61]); }); }
function View_PlayerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "gd-player", [], null, null, null, View_PlayerComponent_0, RenderType_PlayerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _player_component__WEBPACK_IMPORTED_MODULE_19__["PlayerComponent"], [_services_player_service__WEBPACK_IMPORTED_MODULE_20__["PlayerService"], _services_data_service__WEBPACK_IMPORTED_MODULE_21__["DataService"], _services_dialog_service__WEBPACK_IMPORTED_MODULE_22__["DialogService"], _auth_service__WEBPACK_IMPORTED_MODULE_23__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PlayerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("gd-player", _player_component__WEBPACK_IMPORTED_MODULE_19__["PlayerComponent"], View_PlayerComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shared/player.component.sass.shim.ngstyle.js":
/*!**************************************************************!*\
  !*** ./src/app/shared/player.component.sass.shim.ngstyle.js ***!
  \**************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["button[_ngcontent-%COMP%] {\n  background-color: #fcfcfc;\n  border: 1px solid #3d3d3d;\n  color: #3d3d3d;\n  text-align: center;\n  border-radius: 5px;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\nbutton[_ngcontent-%COMP%]:active {\n  background: #3d3d3d;\n}\n\n.playlist[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n\n.flashy[_ngcontent-%COMP%] {\n  background-color: #0e42c7;\n}\n\n.mat-flat-button[_ngcontent-%COMP%] {\n  height: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0pvdXJuYWwvcHJvamVjdHMvZ3JhdGVmdWxfZGVhZF8yMDE5X2dpdC93ZWItYXBwMi9zcmMvYXBwL3NoYXJlZC9wbGF5ZXIuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3NoYXJlZC9wbGF5ZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FDQ3BCOztBRENBO0VBQ0UsVUFBVTtBQ0VaOztBREFBO0VBQ0UsbUJBQW1CO0FDR3JCOztBRERBO0VBQ0UsY0FBYztBQ0loQjs7QURGQTtFQUtFLHlCQUF5QjtBQ0MzQjs7QURLQTtFQUNFLFdBQVc7QUNGYiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wbGF5ZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2QzZDNkO1xuICBjb2xvcjogIzNkM2QzZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cblxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogMDsgfVxuXG5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzNkM2QzZDsgfVxuXG4ucGxheWxpc3Qge1xuICBmb250LXNpemU6IDgwJTsgfVxuXG4uZmxhc2h5IHtcbiAgLy9iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMmEzOThhLCAjZGMzMDMwKVxuICAvL2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNkNWM2NzUsICMyM2NmY2YpICAvL2ludmVydGVkXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogI2Q1YzY3NVxuICAvL2JhY2tncm91bmQtY29sb3I6ICMyYTM5OGFcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlNDJjNzsgfVxuXG4vLy5tYXQtaWNvbi1idXR0b25cbi8vICBib3JkZXI6IDFweCBzb2xpZCAjM2QzZDNkXG4vLyAgYm9yZGVyLXJhZGl1czogNXB4XG5cbi5tYXQtZmxhdC1idXR0b24ge1xuICBoZWlnaHQ6IDkwJTsgfVxuXG5cbi53YXZlZm9ybSB7XG4gIC8vYm9yZGVyLXJhZGl1czogMnB4IDJweCAycHggMnB4XG4gIC8vYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZGVkZWRcbiAgLy9ib3JkZXI6IDNweCBzb2xpZCAjMTIxMjEyIC8vaW52ZXJ0ZWRcbiAgLy9maWx0ZXI6IGludmVydCgxMDAlKVxuICAvL2JvcmRlcjogM3B4IHNvbGlkICMwMDAwMDBcbiB9ICAvL2ZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoMSUpIHNhdHVyYXRlKDMyMDMlKSBodWUtcm90YXRlKDMxNGRlZykgYnJpZ2h0bmVzcygxMjAlKSBjb250cmFzdCg4NiUpXG4iLCJidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2QzZDNkO1xuICBjb2xvcjogIzNkM2QzZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjM2QzZDNkO1xufVxuXG4ucGxheWxpc3Qge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLmZsYXNoeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTQyYzc7XG59XG5cbi5tYXQtZmxhdC1idXR0b24ge1xuICBoZWlnaHQ6IDkwJTtcbn1cbiJdfQ== */"];



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
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");






// import { CookieService } from 'ngx-cookie-service';

console.log = function (s) {
    if (_config__WEBPACK_IMPORTED_MODULE_6__["DEBUG"]) {
        console.warn(s);
    }
    ;
};
class PlayerComponent {
    constructor(player, data, dialog, auth, router) {
        this.player = player;
        this.data = data;
        this.dialog = dialog;
        this.auth = auth;
        this.router = router;
        this.currentUser = { userName: '', userId: '' };
        this.loaded = false;
        this.minimized = false;
    } //, private cookieService: CookieService) {}
    ngOnInit() {
        //if (!this.cookieService.get('auth0.is.authenticated')) { 
        //  this.player.removePlaylistFromStorage() ;
        //};
        //if (this.currentUser.userId != '') gtag('set', {'user_id': this.currentUser.userId});
        this.auth.userProfile$.subscribe(userProfile => {
            if (userProfile) {
                this.currentUser = {
                    userId: userProfile.sub.split("|")[1],
                    userName: userProfile['http://example.com/username']
                };
                gtag('set', { 'user_id': this.currentUser.userId });
                this.player.getPlaylists(this.currentUser.userId);
            }
            if (!this.router.url.startsWith('/playlist')) {
                this.player.loadPlaylistFromsStorage();
            }
            ;
        });
    }
    addRandomTrack() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.player.addToPlaylist(yield this.data.getRandomTrack());
        });
    }
    volumeChange(v) {
        this.player.volume(v);
    }
    onClearPlaylist() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.player.stop();
            this.player.clearPlaylist();
            this.minimized = true;
        });
    }
    delTrack(i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.player.deleteFromPlaylist(i);
        });
    }
    onSavePlaylist() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dialog.openInputDialog(name => {
                if (name) {
                    this.savePlaylist(name);
                }
            });
        });
    }
    onLoadPlaylist() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadPlaylist();
        });
    }
    savePlaylist(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('saving playlist');
            const id = this.makeid();
            yield this.data.addPlaylist(name, this.player.playlist, id, this.currentUser.userId, new Date().getTime());
            yield this.player.getPlaylists(this.currentUser.userId);
        });
    }
    /*
    
    protected openOptionsDialog(event: DeadEventInfo) {
        this.dialog.openMultiFunction(
          this.song.name+"', "+event.venue+", "+event.date,
          ["Add to playlist", "Go to show"],
          [() => this.openRecordingsDialog(event),
            () => this.router.navigate(['/show', event.id])]
        );
      }
    
      private openRecordingsDialog(event: DeadEventInfo) {
        this.dialog.openSingleFunction(
          "Recordings of '"+this.song.name+"', "+event.venue+", "+event.date,
          event.recordings.map(r => r.etreeId),
          r => this.addRecordingToPlaylist(r, event)
        );
      }
      */
    loadPlaylist() {
        console.log('load playlist');
        this.dialog.openMultiFunction('Your current playlist will be lost', this.player.playlists.map(r => r.name), this.player.playlists.map(r => () => {
            this.player.playlist = [...r.playlist];
            this.player.storePlaylist();
        }));
    }
    makeid() {
        var result = '';
        var characters = 'abcdef0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 24; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}


/***/ }),

/***/ "./src/app/shared/search-dialog.component.ngfactory.js":
/*!*************************************************************!*\
  !*** ./src/app/shared/search-dialog.component.ngfactory.js ***!
  \*************************************************************/
/*! exports provided: RenderType_SearchDialogComponent, View_SearchDialogComponent_0, View_SearchDialogComponent_Host_0, SearchDialogComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SearchDialogComponent", function() { return RenderType_SearchDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SearchDialogComponent_0", function() { return View_SearchDialogComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SearchDialogComponent_Host_0", function() { return View_SearchDialogComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDialogComponentNgFactory", function() { return SearchDialogComponentNgFactory; });
/* harmony import */ var _search_dialog_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-dialog.component.sass.shim.ngstyle */ "./src/app/shared/search-dialog.component.sass.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _search_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-dialog.component */ "./src/app/shared/search-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 






var styles_SearchDialogComponent = [_search_dialog_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SearchDialogComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SearchDialogComponent, data: {} });

function View_SearchDialogComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Songs:"]))], null, null); }
function View_SearchDialogComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "result"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "span", [["style", "cursor:pointer"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""]))], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, "/song", _v.context.$implicit[1]); _ck(_v, 2, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit[0]; _ck(_v, 4, 0, currVal_1); }); }
function View_SearchDialogComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Venues:"]))], null, null); }
function View_SearchDialogComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "result"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "span", [["style", "cursor:pointer"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""]))], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, "/venue", _v.context.$implicit[1]); _ck(_v, 2, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit[0]; _ck(_v, 4, 0, currVal_1); }); }
function View_SearchDialogComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Shows:"]))], null, null); }
function View_SearchDialogComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "result"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "span", [["style", "cursor:pointer"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""]))], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, "/show", _v.context.$implicit[1]); _ck(_v, 2, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit[0]; _ck(_v, 4, 0, currVal_1); }); }
function View_SearchDialogComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SearchDialogComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SearchDialogComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SearchDialogComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SearchDialogComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SearchDialogComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SearchDialogComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.result.song.length != 0); _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.result.song; _ck(_v, 6, 0, currVal_2); var currVal_3 = (_co.result.venue.length != 0); _ck(_v, 8, 0, currVal_3); var currVal_4 = _co.result.venue; _ck(_v, 10, 0, currVal_4); var currVal_5 = (_co.result.show.length != 0); _ck(_v, 12, 0, currVal_5); var currVal_6 = _co.result.show; _ck(_v, 14, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.searchString; _ck(_v, 2, 0, currVal_0); }); }
function View_SearchDialogComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "search-dialog", [], null, null, null, View_SearchDialogComponent_0, RenderType_SearchDialogComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _search_dialog_component__WEBPACK_IMPORTED_MODULE_4__["SearchDialogComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]], null, null)], null, null); }
var SearchDialogComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("search-dialog", _search_dialog_component__WEBPACK_IMPORTED_MODULE_4__["SearchDialogComponent"], View_SearchDialogComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shared/search-dialog.component.sass.shim.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/shared/search-dialog.component.sass.shim.ngstyle.js ***!
  \*********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = [".result[_ngcontent-%COMP%] {\n  font-size: 13px;\n  text-align: left;\n}\n\n.type[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: left;\n  font-weight: bold;\n}\n\n.left[_ngcontent-%COMP%] {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0pvdXJuYWwvcHJvamVjdHMvZ3JhdGVmdWxfZGVhZF8yMDE5X2dpdC93ZWItYXBwMi9zcmMvYXBwL3NoYXJlZC9zZWFyY2gtZGlhbG9nLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9zaGFyZWQvc2VhcmNoLWRpYWxvZy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUNDbEI7O0FEQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQ0VuQjs7QURBQTtFQUNFLGdCQUFnQjtBQ0dsQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zZWFyY2gtZGlhbG9nLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4udHlwZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuLmxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG4iLCIucmVzdWx0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udHlwZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiJdfQ== */"];



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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");


console.log = function (s) {
    if (_config__WEBPACK_IMPORTED_MODULE_1__["DEBUG"]) {
        console.warn(s);
    }
    ;
};
class SearchDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        //this.result = data.result; //this.sortItems(data.result);
        this.result = this.sortItems(data.result);
        this.searchString = data.searchString;
    }
    onCancelClick() {
        this.dialogRef.close();
    }
    onItemClick(item) {
        this.dialogRef.close(item);
    }
    sortItems(r) {
        var s = { 'show': [], 'venue': [], 'song': [] };
        r.forEach(i => {
            s[i.type].push([i.title, i.uri]);
        });
        Object.keys(s).forEach(k => {
            s[k].sort();
        });
        console.log(s);
        return s;
    }
}


/***/ }),

/***/ "./src/app/shared/sharebuttons.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/shared/sharebuttons.component.ngfactory.js ***!
  \************************************************************/
/*! exports provided: RenderType_ShareButtonsComponent, View_ShareButtonsComponent_0, View_ShareButtonsComponent_Host_0, ShareButtonsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ShareButtonsComponent", function() { return RenderType_ShareButtonsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ShareButtonsComponent_0", function() { return View_ShareButtonsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ShareButtonsComponent_Host_0", function() { return View_ShareButtonsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareButtonsComponentNgFactory", function() { return ShareButtonsComponentNgFactory; });
/* harmony import */ var _sharebuttons_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharebuttons.component.sass.shim.ngstyle */ "./src/app/shared/sharebuttons.component.sass.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_ngx_sharebuttons_buttons_ngx_sharebuttons_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/ngx-sharebuttons/buttons/ngx-sharebuttons-buttons.ngfactory */ "./node_modules/ngx-sharebuttons/buttons/ngx-sharebuttons-buttons.ngfactory.js");
/* harmony import */ var ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-sharebuttons/buttons */ "./node_modules/ngx-sharebuttons/fesm2015/ngx-sharebuttons-buttons.js");
/* harmony import */ var ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-sharebuttons */ "./node_modules/ngx-sharebuttons/fesm2015/ngx-sharebuttons.js");
/* harmony import */ var _sharebuttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sharebuttons.component */ "./src/app/shared/sharebuttons.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 






var styles_ShareButtonsComponent = [_sharebuttons_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ShareButtonsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ShareButtonsComponent, data: {} });

function View_ShareButtonsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "p", [], [[4, "margin-bottom", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "share-buttons", [], null, null, null, _node_modules_ngx_sharebuttons_buttons_ngx_sharebuttons_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ShareButtons_0"], _node_modules_ngx_sharebuttons_buttons_ngx_sharebuttons_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ShareButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 770048, null, 0, ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_3__["ShareButtons"], [ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_4__["ShareService"]], { theme: [0, "theme"], include: [1, "include"], show: [2, "show"], title: [3, "title"], tags: [4, "tags"], size: [5, "size"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 7), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "p", [], [[4, "margin-bottom", null]], null, null, null, null))], function (_ck, _v) { var currVal_1 = "default"; var currVal_2 = _ck(_v, 3, 0, "facebook", "twitter", "pinterest", "reddit", "tumblr", "mix", "copy"); var currVal_3 = 7; var currVal_4 = "Grateful Dead Concert Explorer"; var currVal_5 = "GratefulDeadExplorer,GratefulDead"; var currVal_6 = (0 - 4); _ck(_v, 2, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }, function (_ck, _v) { var currVal_0 = "5px"; _ck(_v, 0, 0, currVal_0); var currVal_7 = "5px"; _ck(_v, 4, 0, currVal_7); }); }
function View_ShareButtonsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "gd-sharebuttons", [], null, null, null, View_ShareButtonsComponent_0, RenderType_ShareButtonsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _sharebuttons_component__WEBPACK_IMPORTED_MODULE_5__["ShareButtonsComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ShareButtonsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("gd-sharebuttons", _sharebuttons_component__WEBPACK_IMPORTED_MODULE_5__["ShareButtonsComponent"], View_ShareButtonsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shared/sharebuttons.component.sass.shim.ngstyle.js":
/*!********************************************************************!*\
  !*** ./src/app/shared/sharebuttons.component.sass.shim.ngstyle.js ***!
  \********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["share-buttons[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0pvdXJuYWwvcHJvamVjdHMvZ3JhdGVmdWxfZGVhZF8yMDE5X2dpdC93ZWItYXBwMi9zcmMvYXBwL3NoYXJlZC9zaGFyZWJ1dHRvbnMuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3NoYXJlZC9zaGFyZWJ1dHRvbnMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0FDQ2hCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NoYXJlYnV0dG9ucy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbInNoYXJlLWJ1dHRvbnMge1xuICAgIGZsb2F0OiByaWdodDsgfVxuIiwic2hhcmUtYnV0dG9ucyB7XG4gIGZsb2F0OiByaWdodDtcbn1cbiJdfQ== */"];



/***/ }),

/***/ "./src/app/shared/sharebuttons.component.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/sharebuttons.component.ts ***!
  \**************************************************/
/*! exports provided: ShareButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareButtonsComponent", function() { return ShareButtonsComponent; });
class ShareButtonsComponent {
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/shared/showmap.component.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/shared/showmap.component.ngfactory.js ***!
  \*******************************************************/
/*! exports provided: RenderType_ShowMapComponent, View_ShowMapComponent_0, View_ShowMapComponent_Host_0, ShowMapComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ShowMapComponent", function() { return RenderType_ShowMapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ShowMapComponent_0", function() { return View_ShowMapComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ShowMapComponent_Host_0", function() { return View_ShowMapComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowMapComponentNgFactory", function() { return ShowMapComponentNgFactory; });
/* harmony import */ var _showmap_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showmap.component.sass.shim.ngstyle */ "./src/app/shared/showmap.component.sass.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _asymmetrik_ngx_leaflet_dist_leaflet_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.directive */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.directive.js");
/* harmony import */ var _showmap_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showmap.component */ "./src/app/shared/showmap.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 








var styles_ShowMapComponent = [".loader[_ngcontent-%COMP%] {\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n  border: 3px solid #ddd;\n  border-top: 3px solid #42a5f5;\n  border-radius: 50%;\n  height: 75px;\n  width: 75px;\n}\n\n@-webkit-keyframes spin {\n  to {\n    border-top-color: #ec407a;\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  to {\n    border-top-color: #ec407a;\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n\n}", _showmap_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ShowMapComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ShowMapComponent, data: {} });

function View_ShowMapComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "wait"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "div", [["class", "loader"]], null, null, null, null, null))], null, null); }
function View_ShowMapComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "wait"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["src", "/assets/bearsanimated.webp"], ["width", "160"]], null, null, null, null, null))], null, null); }
function View_ShowMapComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "wait"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["connecting to database"]))], null, null); }
function View_ShowMapComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "wait"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["loading seems to take a while! retrying..."]))], null, null); }
function View_ShowMapComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], { ngValue: [0, "ngValue"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { ngValue: [0, "ngValue"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit, ""); _ck(_v, 1, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit, ""); _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit; _ck(_v, 3, 0, currVal_2); }); }
function View_ShowMapComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowMapComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowMapComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowMapComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowMapComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 11, "div", [["id", "maploaded"]], [[4, "visibility", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 8, "div", [["class", "center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 7, "select", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.selectedTour = $event) !== false);
        ad = (pd_2 && ad);
    } if (("ngModelChange" === en)) {
        var pd_3 = (_co.tourChanged($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowMapComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "div", [["id", "MapContainer"], ["leaflet", ""]], null, [[null, "leafletMapReady"], ["window", "resize"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("window:resize" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onResize() !== false);
        ad = (pd_0 && ad);
    } if (("leafletMapReady" === en)) {
        var pd_1 = (_co.onMapReady($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 606208, null, 0, _asymmetrik_ngx_leaflet_dist_leaflet_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_4__["LeafletDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { options: [0, "options"] }, { mapReady: "leafletMapReady" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.loaded; _ck(_v, 1, 0, currVal_0); var currVal_1 = !_co.loaded; _ck(_v, 3, 0, currVal_1); var currVal_2 = (!_co.timeOut && !_co.loaded); _ck(_v, 5, 0, currVal_2); var currVal_3 = (_co.timeOut && !_co.loaded); _ck(_v, 7, 0, currVal_3); var currVal_12 = _co.selectedTour; _ck(_v, 13, 0, currVal_12); var currVal_13 = _co.layerNames; _ck(_v, 17, 0, currVal_13); var currVal_14 = _co.mapOptions; _ck(_v, 19, 0, currVal_14); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = (!_co.loaded ? "hidden" : "visible"); _ck(_v, 8, 0, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassUntouched; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassTouched; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPristine; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassDirty; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassValid; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassInvalid; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 10, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); }); }
function View_ShowMapComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "gd-showmap", [], null, null, null, View_ShowMapComponent_0, RenderType_ShowMapComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _showmap_component__WEBPACK_IMPORTED_MODULE_5__["ShowMapComponent"], [_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ShowMapComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("gd-showmap", _showmap_component__WEBPACK_IMPORTED_MODULE_5__["ShowMapComponent"], View_ShowMapComponent_Host_0, { zoom: "zoom" }, {}, []);



/***/ }),

/***/ "./src/app/shared/showmap.component.sass.shim.ngstyle.js":
/*!***************************************************************!*\
  !*** ./src/app/shared/showmap.component.sass.shim.ngstyle.js ***!
  \***************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = [".center[_ngcontent-%COMP%] {\n  position: relative !important;\n  left: 12.5%;\n}\n\ndiv.leaflet-container[_ngcontent-%COMP%] {\n  position: absolute  !important;\n  width: 75%;\n  height: 75%;\n  left: 12.5%;\n}\n\n.wait[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0pvdXJuYWwvcHJvamVjdHMvZ3JhdGVmdWxfZGVhZF8yMDE5X2dpdC93ZWItYXBwMi9zcmMvYXBwL3NoYXJlZC9zaG93bWFwLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9zaGFyZWQvc2hvd21hcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0FDRGI7O0FER0E7RUFDRSw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0FDQWI7O0FERUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQ0NyQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaG93bWFwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5jZW50ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgbGVmdDogMTIuNSU7IH1cblxuZGl2LmxlYWZsZXQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlICAhaW1wb3J0YW50O1xuICB3aWR0aDogNzUlO1xuICBoZWlnaHQ6IDc1JTtcbiAgbGVmdDogMTIuNSU7IH1cblxuLndhaXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuIiwiLmNlbnRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICBsZWZ0OiAxMi41JTtcbn1cblxuZGl2LmxlYWZsZXQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlICAhaW1wb3J0YW50O1xuICB3aWR0aDogNzUlO1xuICBoZWlnaHQ6IDc1JTtcbiAgbGVmdDogMTIuNSU7XG59XG5cbi53YWl0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iXX0= */"];



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
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _leaflet_fusesearch_src_leaflet_fusesearch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../leaflet-fusesearch/src/leaflet.fusesearch.js */ "./src/leaflet-fusesearch/src/leaflet.fusesearch.js");
/* harmony import */ var _leaflet_fusesearch_src_leaflet_fusesearch_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_leaflet_fusesearch_src_leaflet_fusesearch_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var leaflet_polylinedecorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! leaflet-polylinedecorator */ "./node_modules/leaflet-polylinedecorator/dist/leaflet.polylineDecorator.js");
/* harmony import */ var leaflet_polylinedecorator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(leaflet_polylinedecorator__WEBPACK_IMPORTED_MODULE_7__);



//import * as Fuse from 'fuse.js'; // imported in angular.json


console.log = function (s) {
    if (_config__WEBPACK_IMPORTED_MODULE_4__["DEBUG"]) {
        console.warn(s);
    }
    ;
};



class ShowMapComponent {
    constructor(data, sanitizer) {
        this.data = data;
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
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
    }
    onMapReady(map) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            setTimeout(() => {
                this.timeOut = true;
            }, 35000);
            //this.document.getElementById("maploaded").style.visibility = "hidden";
            this.map = map;
            let i = 0;
            while (this.venues == undefined || this.venues.length == 0) { // retry heroku fetch
                console.log("retry " + i);
                this.venues = yield this.data.getVenueCoordinates();
                console.log(this.venues);
                i++;
            }
            var tours = yield this.data.getTourCoordinates();
            console.log(tours);
            var geoJsonData = this.getGeoJson(this.venues);
            var tourGeoJsonData = this.getTourJson(tours);
            var all = this.groupLayers(geoJsonData);
            this.geoJsons['all shows'] = geoJsonData;
            this.selectLayers['all shows'] = all;
            this.layerNames.push('all shows');
            this.selectLayers['all shows'].addTo(this.map);
            this.currentLayer = 'all shows';
            tourGeoJsonData.forEach(t => {
                this.selectLayers[t[0]] = this.groupLayers(t[1]);
                this.geoJsons[t[0]] = t[1];
                this.geoJsons[t[0]].sort(this.dateSort());
                this.layerNames.push(t[0]);
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
        });
    }
    dateStrings(s) {
        if (s != undefined) {
            var htmlstring = '<br>';
            var datestring = '';
            var dates = s.map(e => [e.date, e.id]);
            dates.sort();
            dates.forEach(e => {
                htmlstring += '<a style="color: black;" href="/#/show/' + e[1] + '">' + e[0] + '</a><br>'; // removed #/ url
                datestring += e[0] + ' ';
            });
            return [datestring, htmlstring];
        }
    }
    onEachFeature(feature, layer) {
        if (feature.properties && feature.properties.popupContent) {
            layer.bindPopup(feature.properties.popupContent, { maxHeight: 160 });
        }
        feature.layer = layer;
    }
    getGeoJson(shows) {
        var geoJsonData = [];
        var latlongs = [];
        shows.forEach(v => {
            if (v.long != undefined) {
                var lat = parseFloat(v.lat);
                var long = parseFloat(v.long);
                while (this.searchForArray(latlongs, [lat, long]) != -1) { // prevent markers in same place
                    lat += 0.001;
                }
                latlongs.push([lat, long]);
                var ds = this.dateStrings(v.shows);
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
                        'popupContent': '<b><a style="color: black;" href="/#/venue/' + v.id + '">' + v.name + '</a></b>' + venuehtml // removed #/ url
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
    }
    groupLayers(g) {
        var l = [];
        var myIcon = L.icon({
            iconUrl: 'assets/dead_marker_small_shadow.png',
            iconSize: [null, 35],
            iconAnchor: [12, 34],
            popupAnchor: [-3, -32],
        });
        g.forEach(v => {
            var g = L.geoJSON(v, {
                onEachFeature: this.onEachFeature,
                pointToLayer: function (feature, latlng) {
                    return L.marker(latlng, { icon: myIcon, riseOnHover: true });
                }
            });
            l.push(g);
        });
        var lg = L.layerGroup(l);
        return (lg);
    }
    getTourJson(t) {
        var tours = [];
        Object.keys(t).forEach(tour => {
            var geoJsonData = [];
            var latlongs = [];
            Object.keys(t[tour]).forEach(venue => {
                var venue_id = t[tour][venue].id;
                var long = parseFloat(t[tour][venue].long);
                var lat = parseFloat(t[tour][venue].lat);
                while (this.searchForArray(latlongs, [lat, long]) != -1) { // prevent markers in same place
                    lat += 0.001;
                }
                latlongs.push([lat, long]);
                var shows = [];
                t[tour][venue].shows.forEach(show => shows.push(show));
                var ds = this.dateStrings(shows);
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
                        'popupContent': '<b><a style="color: black; "href="/#/venue/' + venue_id + '">' + venue + '</a></b>' + venuehtml // removed #/ url
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
    }
    tourChanged(e) {
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
    }
    fitZoom() {
        var group = new L.featureGroup;
        this.map.eachLayer(l => { if (l['feature'] != undefined) {
            group.addLayer(l);
        } });
        this.map.fitBounds(group.getBounds());
        if (this.map.getZoom() > 10) {
            this.map.setZoom(10);
        }
    }
    connectTheDots(e) {
        var c = [];
        e.forEach(i => c.push(lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](i.geometry.coordinates).reverse()));
        this.tourLine = L.polyline(c, { color: '#1D3A87', weight: 3 }).addTo(this.map);
        console.log(this.tourLine);
        this.lineDecorator = L.polylineDecorator(this.tourLine, {
            patterns: [
                { offset: '0%', repeat: 40, symbol: L.Symbol.arrowHead({ pixelSize: 9, polygon: false, pathOptions: { weight: 3, color: '#1D3A87', stroke: true } })
                }
            ]
        }).addTo(this.map);
    }
    dateSort() {
        return function (a, b) {
            var result = (a.properties.dates < b.properties.dates) ? -1 : (a.properties.dates > b.properties.dates) ? 1 : 0;
            return result;
        };
    }
    searchForArray(haystack, needle) {
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
    }
}


/***/ }),

/***/ "./src/app/shared/shows.component.ngfactory.js":
/*!*****************************************************!*\
  !*** ./src/app/shared/shows.component.ngfactory.js ***!
  \*****************************************************/
/*! exports provided: RenderType_ShowsComponent, View_ShowsComponent_0, View_ShowsComponent_Host_0, ShowsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ShowsComponent", function() { return RenderType_ShowsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ShowsComponent_0", function() { return View_ShowsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ShowsComponent_Host_0", function() { return View_ShowsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsComponentNgFactory", function() { return ShowsComponentNgFactory; });
/* harmony import */ var _shows_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shows.component.sass.shim.ngstyle */ "./src/app/shared/shows.component.sass.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/material/button/index.ngfactory */ "./node_modules/@angular/material/button/index.ngfactory.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../node_modules/@angular/material/icon/index.ngfactory */ "./node_modules/@angular/material/icon/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shows_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shows.component */ "./src/app/shared/shows.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 

















var styles_ShowsComponent = [_shows_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ShowsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ShowsComponent, data: {} });

function View_ShowsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "button", [["class", "field mat-focus-indicator"], ["fxFlex", "1 1 10%"], ["fxLayout", "column"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onOptions(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["more_horiz"]))], function (_ck, _v) { var currVal_2 = "column"; _ck(_v, 1, 0, currVal_2); var currVal_3 = "1 1 10%"; _ck(_v, 2, 0, currVal_3); _ck(_v, 5, 0); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).inline; var currVal_5 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color !== "warn")); _ck(_v, 4, 0, currVal_4, currVal_5); }); }
function View_ShowsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 32, "div", [["fxLayout", "row"], ["fxLayoutAlign", " center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "img", [["class", "image field"], ["fxFlex", "1 1 15%"], ["fxLayout", "column"]], [[4, "width", null], [4, "height", null], [4, "object-fit", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](5, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 1720320, null, 0, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_11__["LazyLoadImageDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, "options"]], { lazyImage: [0, "lazyImage"], defaultImage: [1, "defaultImage"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 8, "div", [["class", "field"], ["fxFlex", "1 1 10%"], ["fxLayout", "column"], ["fxLayoutAlign", "center"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](11, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultStyleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], { "ngStyle.xs": [0, "ngStyle.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](16, { "font-size": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 8, "div", [["class", "field"], ["fxFlex", "1 1 25%"], ["fxLayout", "column"], ["fxLayoutAlign", "center"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](20, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultStyleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], { "ngStyle.xs": [0, "ngStyle.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](25, { "font-size": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](26, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 3, "span", [["class", "field"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](29, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](30, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); var currVal_1 = " center"; _ck(_v, 2, 0, currVal_1); var currVal_5 = _ck(_v, 5, 0, "/show", _v.context.$implicit.id); _ck(_v, 4, 0, currVal_5); var currVal_6 = "column"; _ck(_v, 6, 0, currVal_6); var currVal_7 = "1 1 15%"; _ck(_v, 7, 0, currVal_7); var currVal_8 = (_v.context.$implicit.artifacts[0] ? (_v.context.$implicit.artifacts[0].thumbnail || _v.context.$implicit.artifacts[0].image) : null); var currVal_9 = "assets/gd_placeholder.png"; _ck(_v, 8, 0, currVal_8, currVal_9); var currVal_10 = _ck(_v, 11, 0, "/show", _v.context.$implicit.id); _ck(_v, 10, 0, currVal_10); var currVal_11 = "column"; _ck(_v, 12, 0, currVal_11); var currVal_12 = "center"; _ck(_v, 13, 0, currVal_12); var currVal_13 = "1 1 10%"; _ck(_v, 14, 0, currVal_13); var currVal_14 = _ck(_v, 16, 0, "80%"); _ck(_v, 15, 0, currVal_14); var currVal_16 = _ck(_v, 20, 0, "/show", _v.context.$implicit.id); _ck(_v, 19, 0, currVal_16); var currVal_17 = "column"; _ck(_v, 21, 0, currVal_17); var currVal_18 = "center"; _ck(_v, 22, 0, currVal_18); var currVal_19 = "1 1 25%"; _ck(_v, 23, 0, currVal_19); var currVal_20 = _ck(_v, 25, 0, "80%"); _ck(_v, 24, 0, currVal_20); var currVal_22 = _ck(_v, 29, 0, "/show", _v.context.$implicit.id); _ck(_v, 28, 0, currVal_22); var currVal_24 = _co.onOptions; _ck(_v, 32, 0, currVal_24); }, function (_ck, _v) { var currVal_2 = "80px"; var currVal_3 = "60px"; var currVal_4 = "cover"; _ck(_v, 3, 0, currVal_2, currVal_3, currVal_4); var currVal_15 = _v.context.$implicit.date; _ck(_v, 17, 0, currVal_15); var currVal_21 = _v.context.$implicit.venue; _ck(_v, 26, 0, currVal_21); var currVal_23 = _v.context.$implicit.location; _ck(_v, 30, 0, currVal_23); }); }
function View_ShowsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "gd-container"], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "p", [], [[4, "margin-bottom", null]], null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.events; _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = "75px"; _ck(_v, 4, 0, currVal_2); }); }
function View_ShowsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "gd-shows", [], null, null, null, View_ShowsComponent_0, RenderType_ShowsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shows_component__WEBPACK_IMPORTED_MODULE_15__["ShowsComponent"], [_services_data_service__WEBPACK_IMPORTED_MODULE_16__["DataService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ShowsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("gd-shows", _shows_component__WEBPACK_IMPORTED_MODULE_15__["ShowsComponent"], View_ShowsComponent_Host_0, { eventIds: "eventIds", onOptions: "onOptions" }, {}, []);



/***/ }),

/***/ "./src/app/shared/shows.component.sass.shim.ngstyle.js":
/*!*************************************************************!*\
  !*** ./src/app/shared/shows.component.sass.shim.ngstyle.js ***!
  \*************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = [".field[_ngcontent-%COMP%] {\n  padding-right: 3px;\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0pvdXJuYWwvcHJvamVjdHMvZ3JhdGVmdWxfZGVhZF8yMDE5X2dpdC93ZWItYXBwMi9zcmMvYXBwL3NoYXJlZC9zaG93cy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvc2hhcmVkL3Nob3dzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQ0NyQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaG93cy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWVsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDsgfVxuIiwiLmZpZWxkIHtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuIl19 */"];



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
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");


class ShowsComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.events = yield this.data.getEventInfos(this.eventIds);
            //TODO add pagination?
            //if (this.events) this.events = this.events.slice(0, 20);
        });
    }
}


/***/ }),

/***/ "./src/app/shared/weather.component.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/shared/weather.component.ngfactory.js ***!
  \*******************************************************/
/*! exports provided: RenderType_WeatherComponent, View_WeatherComponent_0, View_WeatherComponent_Host_0, WeatherComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_WeatherComponent", function() { return RenderType_WeatherComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_WeatherComponent_0", function() { return View_WeatherComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_WeatherComponent_Host_0", function() { return View_WeatherComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponentNgFactory", function() { return WeatherComponentNgFactory; });
/* harmony import */ var _weather_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.component.sass.shim.ngstyle */ "./src/app/shared/weather.component.sass.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _weather_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather.component */ "./src/app/shared/weather.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 





var styles_WeatherComponent = [_weather_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_WeatherComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_WeatherComponent, data: {} });

function View_WeatherComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, "div", [["fxLayout", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["fxFlex", ""], ["fxLayout", "column"], ["fxLayoutAlign", "center center"]], [[4, "font-size", null], [4, "padding", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "i", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 4, "div", [["fxFlex", ""], ["fxLayout", "column"], ["fxLayoutAlign", "center center"]], [[4, "font-size", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "i", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 4, "div", [["class", "wf wc wpadleft wpadright"], ["fxFlex", ""], ["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, [" ", "\u00B0F "]))], function (_ck, _v) { var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); var currVal_3 = "column"; _ck(_v, 3, 0, currVal_3); var currVal_4 = "center center"; _ck(_v, 4, 0, currVal_4); var currVal_5 = ""; _ck(_v, 5, 0, currVal_5); var currVal_8 = "column"; _ck(_v, 8, 0, currVal_8); var currVal_9 = "center center"; _ck(_v, 9, 0, currVal_9); var currVal_10 = ""; _ck(_v, 10, 0, currVal_10); var currVal_12 = "column"; _ck(_v, 13, 0, currVal_12); var currVal_13 = "center center"; _ck(_v, 14, 0, currVal_13); var currVal_14 = ""; _ck(_v, 15, 0, currVal_14); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = "150%"; var currVal_2 = "4px"; _ck(_v, 2, 0, currVal_1, currVal_2); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "wi wc ", _co.weather.conditionIcon, ""); _ck(_v, 6, 0, currVal_6); var currVal_7 = "150%"; _ck(_v, 7, 0, currVal_7); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "wi wc wpadleft ", _co.weather.windDirectionIcon, ""); _ck(_v, 11, 0, currVal_11); var currVal_15 = _co.weather.maxTemperature; _ck(_v, 16, 0, currVal_15); }); }
function View_WeatherComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "gd-weather", [], null, null, null, View_WeatherComponent_0, RenderType_WeatherComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _weather_component__WEBPACK_IMPORTED_MODULE_4__["WeatherComponent"], [], null, null)], null, null); }
var WeatherComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("gd-weather", _weather_component__WEBPACK_IMPORTED_MODULE_4__["WeatherComponent"], View_WeatherComponent_Host_0, { weather: "weather" }, {}, []);



/***/ }),

/***/ "./src/app/shared/weather.component.sass.shim.ngstyle.js":
/*!***************************************************************!*\
  !*** ./src/app/shared/weather.component.sass.shim.ngstyle.js ***!
  \***************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["div.transbox[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n  filter: alpha(opacity=60);\n}\n\n.wf[_ngcontent-%COMP%] {\n  font-family: Impact, Charcoal, sans-serif;\n}\n\n.wc[_ngcontent-%COMP%] {\n  color: #2a398a;\n}\n\n.wpadleft[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.wpadright[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0pvdXJuYWwvcHJvamVjdHMvZ3JhdGVmdWxfZGVhZF8yMDE5X2dpdC93ZWItYXBwMi9zcmMvYXBwL3NoYXJlZC93ZWF0aGVyLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9zaGFyZWQvd2VhdGhlci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIseUJBQXlCO0FDQzNCOztBRENBO0VBQ0UseUNBQXlDO0FDRTNDOztBREFBO0VBQ0UsY0FBYztBQ0doQjs7QUREQTtFQUNFLGtCQUFrQjtBQ0lwQjs7QURGQTtFQUNFLG1CQUFtQjtBQ0tyQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93ZWF0aGVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnRyYW5zYm94IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTYwKTsgfSAvLyBGb3IgSUU4IGFuZCBlYXJsaWVyXG5cbi53ZiB7XG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIENoYXJjb2FsLCBzYW5zLXNlcmlmOyB9XG5cbi53YyB7XG4gIGNvbG9yOiAjMmEzOThhOyB9XG5cbi53cGFkbGVmdCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDsgfVxuXG4ud3BhZHJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMTBweDsgfVxuIiwiZGl2LnRyYW5zYm94IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NjApO1xufVxuXG4ud2Yge1xuICBmb250LWZhbWlseTogSW1wYWN0LCBDaGFyY29hbCwgc2Fucy1zZXJpZjtcbn1cblxuLndjIHtcbiAgY29sb3I6ICMyYTM5OGE7XG59XG5cbi53cGFkbGVmdCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLndwYWRyaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4iXX0= */"];



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
class WeatherComponent {
}


/***/ }),

/***/ "./src/app/shared/youtube.component.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/shared/youtube.component.ngfactory.js ***!
  \*******************************************************/
/*! exports provided: RenderType_YoutubeComponent, View_YoutubeComponent_0, View_YoutubeComponent_Host_0, YoutubeComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_YoutubeComponent", function() { return RenderType_YoutubeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_YoutubeComponent_0", function() { return View_YoutubeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_YoutubeComponent_Host_0", function() { return View_YoutubeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeComponentNgFactory", function() { return YoutubeComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_angular_youtube_player_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/youtube-player/index.ngfactory */ "./node_modules/@angular/youtube-player/index.ngfactory.js");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/youtube-player */ "./node_modules/@angular/youtube-player/fesm2015/youtube-player.js");
/* harmony import */ var _youtube_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./youtube.component */ "./src/app/shared/youtube.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 




var styles_YoutubeComponent = [];
var RenderType_YoutubeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_YoutubeComponent, data: {} });

function View_YoutubeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "youtube-player", [], null, null, null, _node_modules_angular_youtube_player_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_YouTubePlayer_0"], _node_modules_angular_youtube_player_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_YouTubePlayer"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4440064, null, 0, _angular_youtube_player__WEBPACK_IMPORTED_MODULE_2__["YouTubePlayer"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]], { videoId: [0, "videoId"], width: [1, "width"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.videoId, ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.width, ""); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_YoutubeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gd-youtube", [], null, null, null, View_YoutubeComponent_0, RenderType_YoutubeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _youtube_component__WEBPACK_IMPORTED_MODULE_3__["YoutubeComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var YoutubeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("gd-youtube", _youtube_component__WEBPACK_IMPORTED_MODULE_3__["YoutubeComponent"], View_YoutubeComponent_Host_0, { videoId: "videoId", width: "width" }, {}, []);



/***/ }),

/***/ "./src/app/shared/youtube.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/youtube.component.ts ***!
  \*********************************************/
/*! exports provided: YoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeComponent", function() { return YoutubeComponent; });
class YoutubeComponent {
    ngOnInit() {
        //this.videoId = 'PRQCAL_RMVo';
        // This code loads the IFrame Player API code asynchronously, according to the instructions at
        // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
    }
}


/***/ }),

/***/ "./src/app/views/artifacts.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/views/artifacts.component.ngfactory.js ***!
  \********************************************************/
/*! exports provided: RenderType_ArtifactsComponent, View_ArtifactsComponent_0, View_ArtifactsComponent_Host_0, ArtifactsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ArtifactsComponent", function() { return RenderType_ArtifactsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ArtifactsComponent_0", function() { return View_ArtifactsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ArtifactsComponent_Host_0", function() { return View_ArtifactsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtifactsComponentNgFactory", function() { return ArtifactsComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/header.component.ngfactory */ "./src/app/shared/header.component.ngfactory.js");
/* harmony import */ var _shared_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/header.component */ "./src/app/shared/header.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _artifacts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./artifacts.component */ "./src/app/views/artifacts.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 













var styles_ArtifactsComponent = [];
var RenderType_ArtifactsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ArtifactsComponent, data: {} });

function View_ArtifactsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gd-header", [["title", "Artifacts"]], null, null, null, _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_HeaderComponent_0"], _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shared_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _services_player_service__WEBPACK_IMPORTED_MODULE_8__["PlayerService"]], { imageUrl: [0, "imageUrl"], title: [1, "title"], subtitle: [2, "subtitle"], userId: [3, "userId"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.artifacts[0], ""); var currVal_1 = "Artifacts"; var currVal_2 = _co.types; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.currentUser.userId, ""); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null); }
function View_ArtifactsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 8, "div", [["class", "gd-container"], ["fxFlex", "33"], ["fxFlex.xs", "100"], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"], "fxFlex.xs": [1, "fxFlex.xs"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "img", [["class", "image"]], [[8, "src", 4], [4, "object-fit", null], [4, "width", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](8, null, [" ", " in ", " collection "]))], function (_ck, _v) { var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "33"; var currVal_2 = "100"; _ck(_v, 2, 0, currVal_1, currVal_2); }, function (_ck, _v) { var currVal_3 = (_v.context.$implicit.thumbnail || _v.context.$implicit.image); var currVal_4 = "cover"; var currVal_5 = "100%"; _ck(_v, 3, 0, currVal_3, currVal_4, currVal_5); var currVal_6 = _v.context.$implicit.description; _ck(_v, 4, 0, currVal_6); var currVal_7 = _v.context.$implicit.eventInfo; _ck(_v, 6, 0, currVal_7); var currVal_8 = _v.context.$implicit.type; var currVal_9 = _v.context.$implicit.collection; _ck(_v, 8, 0, currVal_8, currVal_9); }); }
function View_ArtifactsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [["class", "gd-container"], ["fxLayout", "row wrap"], ["fxLayout.xs", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ArtifactsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row wrap"; var currVal_1 = "column"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.artifacts; _ck(_v, 3, 0, currVal_2); }, null); }
function View_ArtifactsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ArtifactsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ArtifactsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.artifacts; _ck(_v, 3, 0, currVal_1); var currVal_2 = _co.artifacts.length; _ck(_v, 5, 0, currVal_2); }, null); }
function View_ArtifactsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ArtifactsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.artifacts; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ArtifactsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gd-artifacts", [], null, null, null, View_ArtifactsComponent_0, RenderType_ArtifactsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _artifacts_component__WEBPACK_IMPORTED_MODULE_12__["ArtifactsComponent"], [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ArtifactsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("gd-artifacts", _artifacts_component__WEBPACK_IMPORTED_MODULE_12__["ArtifactsComponent"], View_ArtifactsComponent_Host_0, {}, {}, []);



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");





console.log = function (s) {
    if (_config__WEBPACK_IMPORTED_MODULE_4__["DEBUG"]) {
        console.warn(s);
    }
    ;
};
class ArtifactsComponent {
    constructor(data, route, auth) {
        this.data = data;
        this.route = route;
        this.auth = auth;
        this.currentUser = { userName: '', userId: '' };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.auth.userProfile$.subscribe(userProfile => {
                if (userProfile) {
                    this.currentUser = {
                        userId: userProfile.sub.split("|")[1],
                        userName: userProfile['http://example.com/username']
                    };
                    gtag('set', { 'user_id': this.currentUser.userId });
                }
            });
            /*
            if (this.route.snapshot.data['loggedIn']) {
              this.auth.userProfile$.subscribe(userProfile => {
                this.currentUser = this.resolve.getUser(userProfile);
              });
              console.log(this.currentUser);
            }
            */
            this.route.paramMap.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (params.has('id')) {
                    //show fullscreen artifact
                }
                else if (params.has('types')) {
                    this.types = JSON.parse(params.get('types'));
                    this.artifacts = yield this.data.getRandomArtifacts(this.types, 6);
                }
                else {
                    this.artifacts = yield this.data.getRandomArtifacts(null, 6);
                    console.log(this.artifacts);
                }
            }));
        });
    }
}


/***/ }),

/***/ "./src/app/views/artist.component.ngfactory.js":
/*!*****************************************************!*\
  !*** ./src/app/views/artist.component.ngfactory.js ***!
  \*****************************************************/
/*! exports provided: RenderType_ArtistComponent, View_ArtistComponent_0, View_ArtistComponent_Host_0, ArtistComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ArtistComponent", function() { return RenderType_ArtistComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ArtistComponent_0", function() { return View_ArtistComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ArtistComponent_Host_0", function() { return View_ArtistComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistComponentNgFactory", function() { return ArtistComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/header.component.ngfactory */ "./src/app/shared/header.component.ngfactory.js");
/* harmony import */ var _shared_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/header.component */ "./src/app/shared/header.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shows_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/shows.component.ngfactory */ "./src/app/shared/shows.component.ngfactory.js");
/* harmony import */ var _shared_shows_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/shows.component */ "./src/app/shared/shows.component.ts");
/* harmony import */ var _comments_comments_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../comments/comments.component.ngfactory */ "./src/app/comments/comments.component.ngfactory.js");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _shared_sharebuttons_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/sharebuttons.component.ngfactory */ "./src/app/shared/sharebuttons.component.ngfactory.js");
/* harmony import */ var _shared_sharebuttons_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/sharebuttons.component */ "./src/app/shared/sharebuttons.component.ts");
/* harmony import */ var _artist_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./artist.component */ "./src/app/views/artist.component.ts");
/* harmony import */ var _auth_resolve__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../auth.resolve */ "./src/app/auth.resolve.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 






















var styles_ArtistComponent = [];
var RenderType_ArtistComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ArtistComponent, data: {} });

function View_ArtistComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gd-header", [], null, null, null, _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_HeaderComponent_0"], _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shared_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _services_player_service__WEBPACK_IMPORTED_MODULE_8__["PlayerService"]], { title: [0, "title"], subtitle: [1, "subtitle"], userId: [2, "userId"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.artist.name, ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.artist.instruments.join(", ").split("_").join(" "), ""); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.currentUser.userId, ""); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_ArtistComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "img", [["class", "image gd-container"], ["fxFlex", "50"]], [[4, "object-fit", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 1720320, null, 0, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_11__["LazyLoadImageDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, "options"]], { lazyImage: [0, "lazyImage"], defaultImage: [1, "defaultImage"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = "50"; _ck(_v, 1, 0, currVal_1); var currVal_2 = _co.artist.thumbnail; var currVal_3 = "assets/gd_placeholder.png"; _ck(_v, 2, 0, currVal_2, currVal_3); }, function (_ck, _v) { var currVal_0 = "contain"; _ck(_v, 0, 0, currVal_0); }); }
function View_ArtistComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-between center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 3, "span", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](5, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""]))], function (_ck, _v) { var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "space-between center"; _ck(_v, 2, 0, currVal_1); var currVal_2 = _ck(_v, 5, 0, "/song", _v.context.$implicit.id); _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var currVal_3 = _v.context.$implicit.name; _ck(_v, 6, 0, currVal_3); }); }
function View_ArtistComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "p", [["class", "gd-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", " played with the Dead on:"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.artist.name; _ck(_v, 1, 0, currVal_0); }); }
function View_ArtistComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 27, "div", [["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ArtistComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 6, "div", [["class", "gd-container"], ["fxLayout", "row"], ["fxLayout.xs", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ArtistComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 2, "div", [["class", "gd-container"], ["fxFlex", "50"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](10, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "p", [["class", "gd-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](12, null, ["Songs composed by ", ":"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 5, "div", [["class", "gd-container"], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 3, "div", [["class", "gd-container"], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ArtistComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ArtistComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "gd-shows", [], null, null, null, _shared_shows_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ShowsComponent_0"], _shared_shows_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ShowsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 114688, null, 0, _shared_shows_component__WEBPACK_IMPORTED_MODULE_14__["ShowsComponent"], [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]], { eventIds: [0, "eventIds"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 1, "gd-comments", [], null, null, null, _comments_comments_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_CommentsComponent_0"], _comments_comments_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_CommentsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 114688, null, 0, _comments_comments_component__WEBPACK_IMPORTED_MODULE_16__["CommentsComponent"], [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_dialog_service__WEBPACK_IMPORTED_MODULE_17__["DialogService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { title: [0, "title"], userName: [1, "userName"], currentUserId: [2, "currentUserId"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 1, "gd-sharebuttons", [], null, null, null, _shared_sharebuttons_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_ShareButtonsComponent_0"], _shared_sharebuttons_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_ShareButtonsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 114688, null, 0, _shared_sharebuttons_component__WEBPACK_IMPORTED_MODULE_19__["ShareButtonsComponent"], [], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.artist; _ck(_v, 3, 0, currVal_1); var currVal_2 = "row"; var currVal_3 = "column"; _ck(_v, 5, 0, currVal_2, currVal_3); var currVal_4 = _co.artist.thumbnail; _ck(_v, 7, 0, currVal_4); var currVal_5 = "50"; _ck(_v, 9, 0, currVal_5); var currVal_8 = "column"; _ck(_v, 14, 0, currVal_8); var currVal_9 = "column"; _ck(_v, 16, 0, currVal_9); var currVal_10 = _co.artist.compositions; _ck(_v, 18, 0, currVal_10); var currVal_11 = _co.artist.eventIds.length; _ck(_v, 20, 0, currVal_11); var currVal_12 = _co.artist.eventIds; _ck(_v, 22, 0, currVal_12); var currVal_13 = ((_co.artist.name + ", ") + _co.artist.instruments.join(", ").split("_").join(" ")); var currVal_14 = _co.currentUser.userName; var currVal_15 = _co.currentUser.userId; _ck(_v, 24, 0, currVal_13, currVal_14, currVal_15); _ck(_v, 27, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.artist.comment; _ck(_v, 10, 0, currVal_6); var currVal_7 = _co.artist.name; _ck(_v, 12, 0, currVal_7); }); }
function View_ArtistComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ArtistComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "p", [], [[4, "margin-bottom", null]], null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.artist; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = "75px"; _ck(_v, 2, 0, currVal_1); }); }
function View_ArtistComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gd-artist", [], null, null, null, View_ArtistComponent_0, RenderType_ArtistComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _artist_component__WEBPACK_IMPORTED_MODULE_20__["ArtistComponent"], [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _auth_resolve__WEBPACK_IMPORTED_MODULE_21__["APIResolver"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ArtistComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("gd-artist", _artist_component__WEBPACK_IMPORTED_MODULE_20__["ArtistComponent"], View_ArtistComponent_Host_0, {}, {}, []);



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _auth_resolve__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.resolve */ "./src/app/auth.resolve.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");






console.log = function (s) {
    if (_config__WEBPACK_IMPORTED_MODULE_5__["DEBUG"]) {
        console.warn(s);
    }
    ;
};
class ArtistComponent {
    constructor(data, router, route, auth, resolve) {
        this.data = data;
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.resolve = resolve;
        this.currentUser = { userName: '', userId: '' };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.auth.userProfile$.subscribe(userProfile => {
                if (userProfile) {
                    this.currentUser = {
                        userId: userProfile.sub.split("|")[1],
                        userName: userProfile['http://example.com/username']
                    };
                    gtag('set', { 'user_id': this.currentUser.userId });
                }
            });
            /*
            if (this.route.snapshot.data['loggedIn']) {
              this.auth.userProfile$.subscribe(userProfile => {
                this.currentUser = this.resolve.getUser(userProfile);
              });
              console.log(this.currentUser);
            }
            */
            this.route.paramMap.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (params.has('id')) {
                    this.artist = yield this.data.getArtistDetails(params.get('id'));
                    //console.log(this.artist);
                }
                else {
                    this.router.navigate(['/mapselect'], { replaceUrl: true });
                }
                if (params.has('id') && !this.artist.name) {
                    this.router.navigate(['/mapselect'], { replaceUrl: true });
                }
            }));
            /* // not working
            if (!this.artist) {
              this.router.navigate(['/artist', (await this.data.getRandomArtistId())],
                { replaceUrl: true });
            }
            */
        });
    }
}


/***/ }),

/***/ "./src/app/views/location.component.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/views/location.component.ngfactory.js ***!
  \*******************************************************/
/*! exports provided: RenderType_LocationComponent, View_LocationComponent_0, View_LocationComponent_Host_0, LocationComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LocationComponent", function() { return RenderType_LocationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LocationComponent_0", function() { return View_LocationComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LocationComponent_Host_0", function() { return View_LocationComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponentNgFactory", function() { return LocationComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/header.component.ngfactory */ "./src/app/shared/header.component.ngfactory.js");
/* harmony import */ var _shared_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/header.component */ "./src/app/shared/header.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../node_modules/@ng-select/ng-select/ng-select-ng-select.ngfactory */ "./node_modules/@ng-select/ng-select/ng-select-ng-select.ngfactory.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _shared_youtube_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/youtube.component.ngfactory */ "./src/app/shared/youtube.component.ngfactory.js");
/* harmony import */ var _shared_youtube_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/youtube.component */ "./src/app/shared/youtube.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");
/* harmony import */ var _shared_map_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/map.component.ngfactory */ "./src/app/shared/map.component.ngfactory.js");
/* harmony import */ var _shared_map_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/map.component */ "./src/app/shared/map.component.ts");
/* harmony import */ var _shared_shows_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/shows.component.ngfactory */ "./src/app/shared/shows.component.ngfactory.js");
/* harmony import */ var _shared_shows_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/shows.component */ "./src/app/shared/shows.component.ts");
/* harmony import */ var _comments_comments_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../comments/comments.component.ngfactory */ "./src/app/comments/comments.component.ngfactory.js");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _shared_sharebuttons_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../shared/sharebuttons.component.ngfactory */ "./src/app/shared/sharebuttons.component.ngfactory.js");
/* harmony import */ var _shared_sharebuttons_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../shared/sharebuttons.component */ "./src/app/shared/sharebuttons.component.ts");
/* harmony import */ var _location_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./location.component */ "./src/app/views/location.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 




























var styles_LocationComponent = [];
var RenderType_LocationComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_LocationComponent, data: {} });

function View_LocationComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gd-header", [], null, null, null, _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_HeaderComponent_0"], _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shared_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _services_player_service__WEBPACK_IMPORTED_MODULE_8__["PlayerService"]], { imageUrl: [0, "imageUrl"], title: [1, "title"], subtitle: [2, "subtitle"], userId: [3, "userId"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.location.image, ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.location.name, ""); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.location.state, ""); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.currentUser.userId, ""); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null); }
function View_LocationComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["The Band played on ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.data.event.date; _ck(_v, 1, 0, currVal_0); }); }
function View_LocationComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "ng-option", [], null, null, null, _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ɵr_0"], _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ɵr"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 9093120, [[12, 4]], 0, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["ɵr"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 0, "img", [["height", "40px"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, 0, [" ", " "]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.videoId; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.context.$implicit.thumbnail, ""); _ck(_v, 2, 0, currVal_1); var currVal_2 = _v.context.$implicit.title; _ck(_v, 3, 0, currVal_2); }); }
function View_LocationComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 26, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 25, "div", [["class", "gd-container"], ["fxFlex", "50"], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "gd-youtube", [["width", "100%"]], null, null, null, _shared_youtube_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_YoutubeComponent_0"], _shared_youtube_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_YoutubeComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 114688, null, 0, _shared_youtube_component__WEBPACK_IMPORTED_MODULE_14__["YoutubeComponent"], [], { videoId: [0, "videoId"], width: [1, "width"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 20, "ng-select", [["bindLabel", "title"], ["role", "listbox"]], [[2, "ng-select", null], [2, "ng-select-single", null], [2, "ng-select-typeahead", null], [2, "ng-select-multiple", null], [2, "ng-select-taggable", null], [2, "ng-select-searchable", null], [2, "ng-select-clearable", null], [2, "ng-select-opened", null], [2, "ng-select-disabled", null], [2, "ng-select-filtered", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "ngModelChange"], [null, "keydown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keydown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).handleKeyDown($event) !== false);
        ad = (pd_0 && ad);
    } if (("change" === en)) {
        var pd_1 = (_co.selectVideo() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.currentVideoId = $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NgSelectComponent_0"], _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NgSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](4608, null, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["ɵd"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["ɵd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 4964352, null, 12, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectComponent"], [[8, null], [8, null], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectConfig"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["SELECTION_MODEL_FACTORY"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["ɵs"]], { bindLabel: [0, "bindLabel"], searchable: [1, "searchable"], clearable: [2, "clearable"] }, { changeEvent: "change" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { optionTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { optgroupTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { labelTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { multiLabelTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, { headerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 6, { footerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 7, { notFoundTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 8, { typeToSearchTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 9, { loadingTextTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 10, { tagTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 11, { loadingSpinnerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 12, { ngOptions: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_LocationComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 2, 0, currVal_0); var currVal_1 = "50"; _ck(_v, 3, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.currentVideoId, ""); var currVal_3 = "100%"; _ck(_v, 5, 0, currVal_2, currVal_3); var currVal_21 = "title"; var currVal_22 = false; var currVal_23 = false; _ck(_v, 8, 0, currVal_21, currVal_22, currVal_23); var currVal_24 = _co.currentVideoId; _ck(_v, 22, 0, currVal_24); var currVal_25 = _co.videos; _ck(_v, 26, 0, currVal_25); }, function (_ck, _v) { var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).useDefaultClass; var currVal_5 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).multiple; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).typeahead; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).multiple; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).addTag; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).searchable; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).clearable; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).isOpen; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).disabled; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).filtered; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassUntouched; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassTouched; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassPristine; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassDirty; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassValid; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassInvalid; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassPending; _ck(_v, 6, 1, [currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20]); }); }
function View_LocationComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 36, "div", [["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_LocationComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 21, "div", [["class", "container"], ["fxFlex", "100"], ["fxLayout", "row wrap"], ["fxLayout.xs", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 6, "div", [["class", "gd-container"], ["fxFlex", "1 1 33%"], ["fxFlex.sm", "1 1 50%"], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"], "fxFlex.sm": [1, "fxFlex.sm"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_LocationComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](13, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 5, "div", [["class", "gd-container"], ["fxFlex", "1 1 33%"], ["fxFlex.sm", "1 1 50%"], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"], "fxFlex.sm": [1, "fxFlex.sm"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 2, "img", [["class", "image"], ["fxFlex", "1 1 auto"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 1720320, null, 0, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_17__["LazyLoadImageDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, "options"]], { lazyImage: [0, "lazyImage"], defaultImage: [1, "defaultImage"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 5, "div", [["class", "gd-container"], ["fxFlex", "1 1 33%"], ["fxFlex.sm", "1 1 100%"], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"], "fxFlex.sm": [1, "fxFlex.sm"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 2, "gd-map", [["fxFlex", "1 1 auto"], ["zoom", "15"]], [[4, "height", null]], null, null, _shared_map_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_MapComponent_0"], _shared_map_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_MapComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 114688, null, 0, _shared_map_component__WEBPACK_IMPORTED_MODULE_19__["MapComponent"], [], { latitude: [0, "latitude"], longitude: [1, "longitude"], zoom: [2, "zoom"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_LocationComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 1, "p", [["class", "gd-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](29, null, ["All shows in ", ":"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 1, "gd-shows", [], null, null, null, _shared_shows_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_ShowsComponent_0"], _shared_shows_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_ShowsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 114688, null, 0, _shared_shows_component__WEBPACK_IMPORTED_MODULE_21__["ShowsComponent"], [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]], { eventIds: [0, "eventIds"], onOptions: [1, "onOptions"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 1, "gd-comments", [], null, null, null, _comments_comments_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_CommentsComponent_0"], _comments_comments_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_CommentsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](33, 114688, null, 0, _comments_comments_component__WEBPACK_IMPORTED_MODULE_23__["CommentsComponent"], [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_dialog_service__WEBPACK_IMPORTED_MODULE_24__["DialogService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { title: [0, "title"], userName: [1, "userName"], currentUserId: [2, "currentUserId"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 1, "gd-sharebuttons", [], null, null, null, _shared_sharebuttons_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_ShareButtonsComponent_0"], _shared_sharebuttons_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_ShareButtonsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](36, 114688, null, 0, _shared_sharebuttons_component__WEBPACK_IMPORTED_MODULE_26__["ShareButtonsComponent"], [], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.location; _ck(_v, 3, 0, currVal_1); var currVal_2 = "row wrap"; var currVal_3 = "column"; _ck(_v, 5, 0, currVal_2, currVal_3); var currVal_4 = "100"; _ck(_v, 6, 0, currVal_4); var currVal_5 = "column"; _ck(_v, 8, 0, currVal_5); var currVal_6 = "1 1 33%"; var currVal_7 = "1 1 50%"; _ck(_v, 9, 0, currVal_6, currVal_7); var currVal_8 = _co.data.event; _ck(_v, 11, 0, currVal_8); var currVal_10 = "column"; _ck(_v, 15, 0, currVal_10); var currVal_11 = "1 1 33%"; var currVal_12 = "1 1 50%"; _ck(_v, 16, 0, currVal_11, currVal_12); var currVal_13 = "1 1 auto"; _ck(_v, 18, 0, currVal_13); var currVal_14 = _co.location.thumbnail; var currVal_15 = "assets/gd_placeholder.png"; _ck(_v, 19, 0, currVal_14, currVal_15); var currVal_16 = "column"; _ck(_v, 21, 0, currVal_16); var currVal_17 = "1 1 33%"; var currVal_18 = "1 1 100%"; _ck(_v, 22, 0, currVal_17, currVal_18); var currVal_20 = "1 1 auto"; _ck(_v, 24, 0, currVal_20); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.location.geoloc.lat, ""); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.location.geoloc.long, ""); var currVal_23 = "15"; _ck(_v, 25, 0, currVal_21, currVal_22, currVal_23); var currVal_24 = _co.videos; _ck(_v, 27, 0, currVal_24); var currVal_26 = _co.location.eventIds; var currVal_27 = _co.openOptionsDialog.bind(_co); _ck(_v, 31, 0, currVal_26, currVal_27); var currVal_28 = ((_co.location.name + ", ") + _co.location.state); var currVal_29 = _co.currentUser.userName; var currVal_30 = _co.currentUser.userId; _ck(_v, 33, 0, currVal_28, currVal_29, currVal_30); _ck(_v, 36, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_9 = _co.location.comment; _ck(_v, 13, 0, currVal_9); var currVal_19 = "100%"; _ck(_v, 23, 0, currVal_19); var currVal_25 = _co.location.name; _ck(_v, 29, 0, currVal_25); }); }
function View_LocationComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_LocationComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "p", [], [[4, "margin-bottom", null]], null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.location; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = "75px"; _ck(_v, 2, 0, currVal_1); }); }
function View_LocationComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gd-location", [], null, null, null, View_LocationComponent_0, RenderType_LocationComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _location_component__WEBPACK_IMPORTED_MODULE_27__["LocationComponent"], [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _services_dialog_service__WEBPACK_IMPORTED_MODULE_24__["DialogService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LocationComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("gd-location", _location_component__WEBPACK_IMPORTED_MODULE_27__["LocationComponent"], View_LocationComponent_Host_0, {}, {}, []);



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");






console.log = function (s) {
    if (_config__WEBPACK_IMPORTED_MODULE_5__["DEBUG"]) {
        console.warn(s);
    }
    ;
};
class LocationComponent {
    constructor(data, router, route, auth, dialog) {
        this.data = data;
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.dialog = dialog;
        this.currentUser = { userName: '', userId: '' };
    }
    ngOnInit() {
        this.auth.userProfile$.subscribe(userProfile => {
            if (userProfile) {
                this.currentUser = {
                    userId: userProfile.sub.split("|")[1],
                    userName: userProfile['http://example.com/username']
                };
                gtag('set', { 'user_id': this.currentUser.userId });
            }
        });
        /*
        if (this.route.snapshot.data['loggedIn']) {
          this.auth.userProfile$.subscribe(userProfile => {
            this.currentUser = this.resolve.getUser(userProfile);
          });
          console.log(this.currentUser);
        } */
        this.route.paramMap.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (params.has('id')) {
                this.location = yield this.data.getLocation(params.get('id'));
            }
            else {
                this.router.navigate(['/mapselect'], { replaceUrl: true });
            }
            if (params.has('id') && this.location.state) {
                this.videos = yield this.data.getYoutubeList(this.location.id, ['Grateful Dead', this.location.name]);
                this.currentVideoId = this.videos[0].videoId;
                console.log(this.videos);
            }
            else {
                this.router.navigate(['/mapselect'], { replaceUrl: true });
            }
        }));
    }
    openOptionsDialog(event) {
        this.dialog.openMultiFunction(event.venue + ", " + event.date, ["Go to show", "Go to recording"], [() => this.router.navigate(['/show', event.id]),
            () => this.openRecordingsDialog(event)]);
    }
    openRecordingsDialog(event) {
        this.dialog.openMultiFunction("Recordings of '" + event.venue + ", " + event.date, event.recordings.map(r => r.etreeId), event.recordings.map(r => () => this.router.navigate(['/recording', r.id])));
    }
    selectVideo() {
        console.log(this.currentVideoId);
    }
}


/***/ }),

/***/ "./src/app/views/mapselect.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/views/mapselect.component.ngfactory.js ***!
  \********************************************************/
/*! exports provided: RenderType_MapSelectComponent, View_MapSelectComponent_0, View_MapSelectComponent_Host_0, MapSelectComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MapSelectComponent", function() { return RenderType_MapSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MapSelectComponent_0", function() { return View_MapSelectComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MapSelectComponent_Host_0", function() { return View_MapSelectComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapSelectComponentNgFactory", function() { return MapSelectComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/header.component.ngfactory */ "./src/app/shared/header.component.ngfactory.js");
/* harmony import */ var _shared_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/header.component */ "./src/app/shared/header.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _shared_showmap_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/showmap.component.ngfactory */ "./src/app/shared/showmap.component.ngfactory.js");
/* harmony import */ var _shared_showmap_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/showmap.component */ "./src/app/shared/showmap.component.ts");
/* harmony import */ var _shared_sharebuttons_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/sharebuttons.component.ngfactory */ "./src/app/shared/sharebuttons.component.ngfactory.js");
/* harmony import */ var _shared_sharebuttons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/sharebuttons.component */ "./src/app/shared/sharebuttons.component.ts");
/* harmony import */ var _mapselect_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mapselect.component */ "./src/app/views/mapselect.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
















var styles_MapSelectComponent = [];
var RenderType_MapSelectComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_MapSelectComponent, data: {} });

function View_MapSelectComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 11, "div", [["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "gd-header", [["subtitle", "Selector"], ["title", "Map"]], null, null, null, _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_HeaderComponent_0"], _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 114688, null, 0, _shared_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _services_player_service__WEBPACK_IMPORTED_MODULE_10__["PlayerService"]], { title: [0, "title"], subtitle: [1, "subtitle"], userId: [2, "userId"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 5, "div", [["class", "gd-container"], ["fxFlex", "1 1 100%"], ["fxFlex.sm", "1 1 100%"], ["fxLayout", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"], "fxFlex.sm": [1, "fxFlex.sm"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 2, "gd-showmap", [["fxFlex", "1 1 auto"], ["style", "z-index:0;"], ["zoom", "2.5"]], [[4, "height", null]], null, null, _shared_showmap_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_ShowMapComponent_0"], _shared_showmap_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_ShowMapComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 114688, null, 0, _shared_showmap_component__WEBPACK_IMPORTED_MODULE_12__["ShowMapComponent"], [_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]], { zoom: [0, "zoom"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "gd-sharebuttons", [], null, null, null, _shared_sharebuttons_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ShareButtonsComponent_0"], _shared_sharebuttons_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ShareButtonsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 114688, null, 0, _shared_sharebuttons_component__WEBPACK_IMPORTED_MODULE_14__["ShareButtonsComponent"], [], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "Map"; var currVal_2 = "Selector"; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.currentUser.userId, ""); _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3); var currVal_4 = "row"; _ck(_v, 5, 0, currVal_4); var currVal_5 = "1 1 100%"; var currVal_6 = "1 1 100%"; _ck(_v, 6, 0, currVal_5, currVal_6); var currVal_8 = "1 1 auto"; _ck(_v, 8, 0, currVal_8); var currVal_9 = "2.5"; _ck(_v, 9, 0, currVal_9); _ck(_v, 11, 0); }, function (_ck, _v) { var currVal_7 = "100%"; _ck(_v, 7, 0, currVal_7); }); }
function View_MapSelectComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gd-mapselect", [], null, null, null, View_MapSelectComponent_0, RenderType_MapSelectComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _mapselect_component__WEBPACK_IMPORTED_MODULE_15__["MapSelectComponent"], [_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MapSelectComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("gd-mapselect", _mapselect_component__WEBPACK_IMPORTED_MODULE_15__["MapSelectComponent"], View_MapSelectComponent_Host_0, {}, {}, []);



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
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");




console.log = function (s) {
    if (_config__WEBPACK_IMPORTED_MODULE_3__["DEBUG"]) {
        console.warn(s);
    }
    ;
};
class MapSelectComponent {
    constructor(data, sanitizer, auth) {
        this.data = data;
        this.sanitizer = sanitizer;
        this.auth = auth;
        this.currentUser = { userName: '', userId: '' };
    }
    ngOnInit() {
        this.auth.userProfile$.subscribe(userProfile => {
            if (userProfile) {
                this.currentUser = {
                    userId: userProfile.sub.split("|")[1],
                    userName: userProfile['http://example.com/username']
                };
                gtag('set', { 'user_id': this.currentUser.userId });
            }
        });
        /*
        if (this.route.snapshot.data['loggedIn']) {
          this.auth.userProfile$.subscribe(userProfile => {
            this.currentUser = this.resolve.getUser(userProfile);
          });
          console.log(this.currentUser);
        }
        */
        //this.venues = await this.data.getVenueCoordinates();
        //console.log(this.venues);
    }
}


/***/ }),

/***/ "./src/app/views/playlist.component.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/views/playlist.component.ngfactory.js ***!
  \*******************************************************/
/*! exports provided: RenderType_PlaylistComponent, View_PlaylistComponent_0, View_PlaylistComponent_Host_0, PlaylistComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PlaylistComponent", function() { return RenderType_PlaylistComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PlaylistComponent_0", function() { return View_PlaylistComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PlaylistComponent_Host_0", function() { return View_PlaylistComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistComponentNgFactory", function() { return PlaylistComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/header.component.ngfactory */ "./src/app/shared/header.component.ngfactory.js");
/* harmony import */ var _shared_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/header.component */ "./src/app/shared/header.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _playlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./playlist.component */ "./src/app/views/playlist.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 













var styles_PlaylistComponent = [];
var RenderType_PlaylistComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_PlaylistComponent, data: {} });

function View_PlaylistComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ". ", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.index + 1); var currVal_1 = _v.context.$implicit.title; _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_PlaylistComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, "div", [["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "gd-header", [["title", "Playlist "]], null, null, null, _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_HeaderComponent_0"], _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 114688, null, 0, _shared_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _services_player_service__WEBPACK_IMPORTED_MODULE_10__["PlayerService"]], { title: [0, "title"], subtitle: [1, "subtitle"], userId: [2, "userId"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, [" the playlist \"", "\" has been loaded in the audio player: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PlaylistComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "Playlist "; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, " \u2013 \"", _co.playlist.name, "\""); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.currentUser.userId, ""); _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3); var currVal_5 = _co.playlist.playlist; _ck(_v, 10, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.playlist.name; _ck(_v, 6, 0, currVal_4); }); }
function View_PlaylistComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PlaylistComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.playlist; _ck(_v, 1, 0, currVal_0); }, null); }
function View_PlaylistComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gd-playlist", [], null, null, null, View_PlaylistComponent_0, RenderType_PlaylistComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _playlist_component__WEBPACK_IMPORTED_MODULE_12__["PlaylistComponent"], [_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _services_player_service__WEBPACK_IMPORTED_MODULE_10__["PlayerService"], _auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PlaylistComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("gd-playlist", _playlist_component__WEBPACK_IMPORTED_MODULE_12__["PlaylistComponent"], View_PlaylistComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/playlist.component.ts":
/*!*********************************************!*\
  !*** ./src/app/views/playlist.component.ts ***!
  \*********************************************/
/*! exports provided: PlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistComponent", function() { return PlaylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");






console.log = function (s) {
    if (_config__WEBPACK_IMPORTED_MODULE_5__["DEBUG"]) {
        console.warn(s);
    }
    ;
};
class PlaylistComponent {
    constructor(data, router, route, player, auth) {
        this.data = data;
        this.router = router;
        this.route = route;
        this.player = player;
        this.auth = auth;
        this.currentUser = { userName: '', userId: '' };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.auth.userProfile$.subscribe(userProfile => {
                if (userProfile) {
                    this.currentUser = {
                        userId: userProfile.sub.split("|")[1],
                        userName: userProfile['http://example.com/username']
                    };
                    gtag('set', { 'user_id': this.currentUser.userId });
                }
            });
            this.route.paramMap.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (params.has('id')) {
                    this.getPlaylist(params.get('id'));
                }
            }));
        });
    }
    getPlaylist(playlistId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //playlistId = '6181aba048dc0b94d09e8664';
            const res = yield this.data.getPlaylist(playlistId);
            this.playlist = res.playlists[0];
            console.log(this.playlist);
            this.player.playlist = [...this.playlist.playlist];
            this.player.storePlaylist();
        });
    }
}


/***/ }),

/***/ "./src/app/views/recording.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/views/recording.component.ngfactory.js ***!
  \********************************************************/
/*! exports provided: RenderType_RecordingComponent, View_RecordingComponent_0, View_RecordingComponent_Host_0, RecordingComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_RecordingComponent", function() { return RenderType_RecordingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RecordingComponent_0", function() { return View_RecordingComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RecordingComponent_Host_0", function() { return View_RecordingComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordingComponentNgFactory", function() { return RecordingComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/material/button/index.ngfactory */ "./node_modules/@angular/material/button/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@angular/material/icon/index.ngfactory */ "./node_modules/@angular/material/icon/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/header.component.ngfactory */ "./src/app/shared/header.component.ngfactory.js");
/* harmony import */ var _shared_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/header.component */ "./src/app/shared/header.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _comments_comments_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../comments/comments.component.ngfactory */ "./src/app/comments/comments.component.ngfactory.js");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _shared_sharebuttons_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/sharebuttons.component.ngfactory */ "./src/app/shared/sharebuttons.component.ngfactory.js");
/* harmony import */ var _shared_sharebuttons_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../shared/sharebuttons.component */ "./src/app/shared/sharebuttons.component.ts");
/* harmony import */ var _recording_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./recording.component */ "./src/app/views/recording.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
























var styles_RecordingComponent = [];
var RenderType_RecordingComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_RecordingComponent, data: {} });

function View_RecordingComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Lineage:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "br", [], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.recordinginfo.lineage; _ck(_v, 3, 0, currVal_0); }); }
function View_RecordingComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Source:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "br", [], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.recordinginfo.source; _ck(_v, 3, 0, currVal_0); }); }
function View_RecordingComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Notes:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "br", [], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.recordinginfo.notes; _ck(_v, 3, 0, currVal_0); }); }
function View_RecordingComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Subject:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, [" ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co._array.isArray(_co.recordinginfo.subject) ? _co.recordinginfo.subject.join(", ") : _co.recordinginfo.subject); _ck(_v, 3, 0, currVal_0); }); }
function View_RecordingComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, [" ", ": ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 4, "button", [["class", "mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openTrackOptionsDialog(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["more_horiz"]))], function (_ck, _v) { _ck(_v, 6, 0); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.track; var currVal_1 = _v.context.$implicit.title; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).disabled || null); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4)._animationMode === "NoopAnimations"); _ck(_v, 3, 0, currVal_2, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).inline; var currVal_5 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).color !== "warn")); _ck(_v, 5, 0, currVal_4, currVal_5); }); }
function View_RecordingComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Tracks: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RecordingComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "span", [["class", "link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addAllToPlaylist() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["add all to playlist"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.tracklist; _ck(_v, 3, 0, currVal_0); }, null); }
function View_RecordingComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 46, "div", [["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "gd-header", [], null, null, null, _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_HeaderComponent_0"], _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 114688, null, 0, _shared_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["Title"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"], _services_data_service__WEBPACK_IMPORTED_MODULE_14__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"], _services_player_service__WEBPACK_IMPORTED_MODULE_17__["PlayerService"]], { title: [0, "title"], subtitle: [1, "subtitle"], userId: [2, "userId"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 37, "div", [["class", "topmargin"], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 35, "div", [["class", "gd-container"], ["fxFlex", ""], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 14, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Recorded at:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 3, "span", [["class", "link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](14, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](15, null, ["", ", "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 3, "span", [["class", "link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](18, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](19, null, ["", ", "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 3, "span", [["class", "link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 21).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](22, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](23, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RecordingComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RecordingComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RecordingComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RecordingComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RecordingComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](37, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 1, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 0, "img", [["src", "https://archive.org/images/glogo.png"]], [[4, "object-fit", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 1, "gd-comments", [], null, null, null, _comments_comments_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_CommentsComponent_0"], _comments_comments_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_CommentsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 114688, null, 0, _comments_comments_component__WEBPACK_IMPORTED_MODULE_19__["CommentsComponent"], [_services_data_service__WEBPACK_IMPORTED_MODULE_14__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _services_dialog_service__WEBPACK_IMPORTED_MODULE_20__["DialogService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { title: [0, "title"], userName: [1, "userName"], currentUserId: [2, "currentUserId"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 1, "gd-sharebuttons", [], null, null, null, _shared_sharebuttons_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_ShareButtonsComponent_0"], _shared_sharebuttons_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_ShareButtonsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](46, 114688, null, 0, _shared_sharebuttons_component__WEBPACK_IMPORTED_MODULE_22__["ShareButtonsComponent"], [], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.recordinginfo.etree_id, ""); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, " \u2013\u00A0", _co.recordinginfo.location_name, ""); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.currentUser.userId, ""); _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3); var currVal_4 = "column"; _ck(_v, 5, 0, currVal_4); var currVal_5 = "column"; _ck(_v, 7, 0, currVal_5); var currVal_6 = ""; _ck(_v, 8, 0, currVal_6); var currVal_7 = _ck(_v, 14, 0, "/venue", _co.recordinginfo.venue_id); _ck(_v, 13, 0, currVal_7); var currVal_9 = _ck(_v, 18, 0, "/location", _co.recordinginfo.location_id); _ck(_v, 17, 0, currVal_9); var currVal_11 = _ck(_v, 22, 0, "/show", _co.recordinginfo.show_id); _ck(_v, 21, 0, currVal_11); var currVal_13 = _co.recordinginfo.lineage; _ck(_v, 27, 0, currVal_13); var currVal_14 = _co.recordinginfo.source; _ck(_v, 29, 0, currVal_14); var currVal_15 = _co.recordinginfo.notes; _ck(_v, 31, 0, currVal_15); var currVal_16 = _co.recordinginfo.subject; _ck(_v, 33, 0, currVal_16); var currVal_17 = _co.tracklist; _ck(_v, 37, 0, currVal_17); var currVal_20 = ((_co.recordinginfo.etree_id + ", ") + _co.recordinginfo.location_name); var currVal_21 = _co.currentUser.userName; var currVal_22 = _co.currentUser.userId; _ck(_v, 43, 0, currVal_20, currVal_21, currVal_22); _ck(_v, 46, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.recordinginfo.venue_name; _ck(_v, 15, 0, currVal_8); var currVal_10 = _co.recordinginfo.location_name; _ck(_v, 19, 0, currVal_10); var currVal_12 = _co.recordinginfo.date; _ck(_v, 23, 0, currVal_12); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", ("https://archive.org/details/" + _co.recordinginfo.etree_id), ""); _ck(_v, 40, 0, currVal_18); var currVal_19 = "contain"; _ck(_v, 41, 0, currVal_19); }); }
function View_RecordingComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RecordingComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "p", [], [[4, "margin-bottom", null]], null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.recordinginfo; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = "75px"; _ck(_v, 2, 0, currVal_1); }); }
function View_RecordingComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gd-recording", [], null, null, null, View_RecordingComponent_0, RenderType_RecordingComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _recording_component__WEBPACK_IMPORTED_MODULE_23__["RecordingComponent"], [_services_data_service__WEBPACK_IMPORTED_MODULE_14__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], _services_dialog_service__WEBPACK_IMPORTED_MODULE_20__["DialogService"], _services_player_service__WEBPACK_IMPORTED_MODULE_17__["PlayerService"], _auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var RecordingComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("gd-recording", _recording_component__WEBPACK_IMPORTED_MODULE_23__["RecordingComponent"], View_RecordingComponent_Host_0, {}, {}, []);



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/types */ "./src/app/services/types.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");








console.log = function (s) {
    if (_config__WEBPACK_IMPORTED_MODULE_7__["DEBUG"]) {
        console.warn(s);
    }
    ;
};
class RecordingComponent {
    constructor(data, router, route, dialog, player, auth) {
        this.data = data;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.player = player;
        this.auth = auth;
        this.currentUser = { userName: '', userId: '' };
        this._array = Array;
    }
    ngOnInit() {
        this.auth.userProfile$.subscribe(userProfile => {
            if (userProfile) {
                this.currentUser = {
                    userId: userProfile.sub.split("|")[1],
                    userName: userProfile['http://example.com/username']
                };
                gtag('set', { 'user_id': this.currentUser.userId });
            }
        });
        /*
        if (this.route.snapshot.data['loggedIn']) {
          this.auth.userProfile$.subscribe(userProfile => {
            this.currentUser = this.resolve.getUser(userProfile);
          });
          console.log(this.currentUser);
        }
        */
        this.route.paramMap.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (params.has('id')) {
                //this.recording = await this.data.getRecording(params.get('id'));
                //this.event = await this.data.getEventInfoForRecording(this.recording.id);
                //const rec_id = params.get('id');
                this.recordinginfo = yield this.data.getRecordingInfo(params.get('id'));
            }
            else {
                this.router.navigate(['/mapselect'], { replaceUrl: true });
            }
            if (params.has('id') && this.recordinginfo) {
                var tracklist = yield this.data.getTracklist(params.get('id'));
                tracklist.forEach(t => {
                    if (t.song) {
                        t['id'] = t.song[0].song_id;
                        delete t.song;
                    }
                    t.track = t.track.toString();
                });
                this.tracklist = tracklist;
                //console.log(this.recordinginfo)
                //console.log(this.tracklist);
            }
            else {
                this.router.navigate(['/mapselect'], { replaceUrl: true });
            }
            /*
            if (!this.recording) {
              this.router.navigate(['/recording', (await this.data.getRandomRecording()).id],
                { replaceUrl: true });
            } */
        }));
    }
    openTrackOptionsDialog(audio) {
        if (audio.id) {
            this.dialog.openMultiFunction(audio.track + " " + audio.title, ["add to playlist", "go to song"], [() => this.addTrackToPlaylist(audio),
                () => this.router.navigate(['/song', audio.id])]);
        }
        else {
            this.dialog.openMultiFunction(audio.track + " " + audio.title, ["add to playlist"], [() => this.addTrackToPlaylist(audio)]);
        }
    }
    /*
    private async addTrackToPlaylist(audio: AudioTrack) {
      console.log(audio.id)
      const info = await this.data.getEventInfo(this.event.id);
      const track = await this.data.getTrackFromAudio(audio, info, this.recording.etreeId);
      if (track) this.player.addToPlaylist(track);
    }
    */
    addTrackToPlaylist(audio) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const track = this.data.toPlayerTrack(this.recordinginfo.venue_name, this.recordinginfo.location_name, this.recordinginfo.date, this.recordinginfo.show_id, this.recordinginfo.etree_id, audio, this.recordinginfo.recording_id);
            this.player.addToPlaylist(track);
        });
    }
    addAllToPlaylist() {
        if (this.tracklist)
            this.tracklist.forEach(t => this.addTrackToPlaylist(t));
    }
}


/***/ }),

/***/ "./src/app/views/show.component.ngfactory.js":
/*!***************************************************!*\
  !*** ./src/app/views/show.component.ngfactory.js ***!
  \***************************************************/
/*! exports provided: RenderType_ShowComponent, View_ShowComponent_0, View_ShowComponent_Host_0, ShowComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ShowComponent", function() { return RenderType_ShowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ShowComponent_0", function() { return View_ShowComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ShowComponent_Host_0", function() { return View_ShowComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowComponentNgFactory", function() { return ShowComponentNgFactory; });
/* harmony import */ var _show_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.component.sass.shim.ngstyle */ "./src/app/views/show.component.sass.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/header.component.ngfactory */ "./src/app/shared/header.component.ngfactory.js");
/* harmony import */ var _shared_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/header.component */ "./src/app/shared/header.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _shared_weather_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/weather.component.ngfactory */ "./src/app/shared/weather.component.ngfactory.js");
/* harmony import */ var _shared_weather_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/weather.component */ "./src/app/shared/weather.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");
/* harmony import */ var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../node_modules/@angular/material/button/index.ngfactory */ "./node_modules/@angular/material/button/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../node_modules/@angular/material/icon/index.ngfactory */ "./node_modules/@angular/material/icon/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _node_modules_ng2_carouselamos_ng2_carouselamos_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../node_modules/ng2-carouselamos/ng2-carouselamos.ngfactory */ "./node_modules/ng2-carouselamos/ng2-carouselamos.ngfactory.js");
/* harmony import */ var ng2_carouselamos__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng2-carouselamos */ "./node_modules/ng2-carouselamos/fesm2015/ng2-carouselamos.js");
/* harmony import */ var _comments_comments_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../comments/comments.component.ngfactory */ "./src/app/comments/comments.component.ngfactory.js");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _shared_sharebuttons_component_ngfactory__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../shared/sharebuttons.component.ngfactory */ "./src/app/shared/sharebuttons.component.ngfactory.js");
/* harmony import */ var _shared_sharebuttons_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../shared/sharebuttons.component */ "./src/app/shared/sharebuttons.component.ts");
/* harmony import */ var _show_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./show.component */ "./src/app/views/show.component.ts");
/* harmony import */ var _services_lightbox_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../services/lightbox.service */ "./src/app/services/lightbox.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 































var styles_ShowComponent = [_show_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ShowComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ShowComponent, data: {} });

function View_ShowComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "gd-header", [["style", "position: fixed; width: 100%"]], null, null, null, _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HeaderComponent_0"], _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _services_player_service__WEBPACK_IMPORTED_MODULE_9__["PlayerService"]], { imageUrl: [0, "imageUrl"], title: [1, "title"], subtitle: [2, "subtitle"], userId: [3, "userId"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 1, "gd-weather", [], null, null, null, _shared_weather_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_WeatherComponent_0"], _shared_weather_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_WeatherComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _shared_weather_component__WEBPACK_IMPORTED_MODULE_11__["WeatherComponent"], [], { weather: [0, "weather"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.eventImage, ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](2, "", _co.event.location.name, ", ", _co.event.location.state, ""); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.formatDate, ""); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.currentUser.userId, ""); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.event.weather; _ck(_v, 3, 0, currVal_4); }, null); }
function View_ShowComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "img", [["class", "image"], ["fxFlex", "1 1 auto"]], [[4, "object-fit", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1720320, null, 0, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_14__["LazyLoadImageDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, "options"]], { lazyImage: [0, "lazyImage"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = "1 1 auto"; _ck(_v, 1, 0, currVal_1); var currVal_2 = _co.event.location.thumbnail; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = "contain"; _ck(_v, 0, 0, currVal_0); }); }
function View_ShowComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "img", [["class", "image"], ["fxFlex", "1 1 auto"]], [[4, "object-fit", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1720320, null, 0, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_14__["LazyLoadImageDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, "options"]], { lazyImage: [0, "lazyImage"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = "1 1 auto"; _ck(_v, 1, 0, currVal_1); var currVal_2 = _co.event.venue.thumbnail; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = "contain"; _ck(_v, 0, 0, currVal_0); }); }
function View_ShowComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["fxLayout", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "span", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](4, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", " ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "button", [["class", "mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openSongOptionsDialog(_v.context.$implicit, _v.parent.context.$implicit.name, (_v.context.index + 1)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["more_horiz"]))], function (_ck, _v) { var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); var currVal_1 = _ck(_v, 4, 0, "/song", _v.context.$implicit.id); _ck(_v, 3, 0, currVal_1); _ck(_v, 9, 0); }, function (_ck, _v) { var currVal_2 = ("0" + (_v.context.index + 1)).slice((0 - 2)); var currVal_3 = _v.context.$implicit.name; _ck(_v, 5, 0, currVal_2, currVal_3); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).disabled || null); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7)._animationMode === "NoopAnimations"); _ck(_v, 6, 0, currVal_4, currVal_5); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).inline; var currVal_7 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).color !== "warn")); _ck(_v, 8, 0, currVal_6, currVal_7); }); }
function View_ShowComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_2 = _v.context.$implicit.songs; _ck(_v, 5, 0, currVal_2); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.name; _ck(_v, 3, 0, currVal_1); }); }
function View_ShowComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](2, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "img", [["class", "image"]], [[4, "width", null], [4, "height", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 1720320, null, 0, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_14__["LazyLoadImageDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, "options"]], { lazyImage: [0, "lazyImage"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["\u00A0\u00A0\u00A0\u00A0", " (", ")"]))], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, "/artist", _v.context.$implicit.id); _ck(_v, 1, 0, currVal_0); var currVal_3 = _v.context.$implicit.thumbnail; _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var currVal_1 = "70px"; var currVal_2 = "70px"; _ck(_v, 3, 0, currVal_1, currVal_2); var currVal_4 = _v.context.$implicit.name; var currVal_5 = _v.context.$implicit.instruments.join(", "); _ck(_v, 6, 0, currVal_4, currVal_5); }); }
function View_ShowComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a", [["target", "_blank"]], [[8, "href", 4], [4, "text-decoration", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.url; var currVal_1 = "none"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = (((((_v.context.$implicit.date + ": ") + _v.context.$implicit.title) + " (") + _v.context.$implicit.source) + ")"); _ck(_v, 2, 0, currVal_2); }); }
function View_ShowComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "span", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "button", [["class", "mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openRecordingOptionsDialog(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["more_horiz"]))], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, "/recording", _v.context.$implicit.id); _ck(_v, 2, 0, currVal_0); _ck(_v, 8, 0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.etreeId; _ck(_v, 4, 0, currVal_1); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).disabled || null); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._animationMode === "NoopAnimations"); _ck(_v, 5, 0, currVal_2, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).inline; var currVal_5 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).color !== "warn")); _ck(_v, 7, 0, currVal_4, currVal_5); }); }
function View_ShowComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["height", "30"], ["id", "left"], ["src", "assets/arrow_left.png"], ["style", "cursor: pointer;"]], null, null, null, null, null))], null, null); }
function View_ShowComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.photos.length > 1); _ck(_v, 1, 0, currVal_0); }, null); }
function View_ShowComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["height", "30"], ["id", "right"], ["src", "assets/arrow_right.png"], ["style", "cursor: pointer;"]], null, null, null, null, null))], null, null); }
function View_ShowComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.photos.length > 1); _ck(_v, 1, 0, currVal_0); }, null); }
function View_ShowComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "slide-items"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["height", "200px"], ["width", "auto"]], [[8, "src", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClickPhoto(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.thumbnail, ""); _ck(_v, 1, 0, currVal_0); }); }
function View_ShowComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "br", [], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.currentPhoto.description; _ck(_v, 1, 0, currVal_0); }); }
function View_ShowComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["height", "50px"], ["src", "https://www.gdao.org/themes/gdao-theme/images/logo-gdao.png"], ["width", "auto"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.currentPhoto.source, ""); _ck(_v, 0, 0, currVal_0); }); }
function View_ShowComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a", [["href", "http://www.psilo.com/dead/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["height", "50px"], ["src", "http://www.psilo.com/dead/images/logo_psilo.jpg"], ["width", "auto"]], null, null, null, null, null))], null, null); }
function View_ShowComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "photo-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.currentPhoto.description; _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.currentPhoto.collection == "GDAO"); _ck(_v, 4, 0, currVal_1); var currVal_2 = (_co.currentPhoto.collection == "Psilo"); _ck(_v, 6, 0, currVal_2); }, null); }
function View_ShowComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 13, "div", [["class", "gd-container"], ["fxFlex", "50"], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "h2", [["class", "gd-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [["class", "titlef"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Photos"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 5, "div", [["id", "galleryContainer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "div", [["class", "slides-wrapper"], ["ng2-carouselamos", ""], ["style", "width: 100%;"]], null, null, null, _node_modules_ng2_carouselamos_ng2_carouselamos_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_Ng2CarouselamosComponent_0"], _node_modules_ng2_carouselamos_ng2_carouselamos_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_Ng2CarouselamosComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4767744, null, 0, ng2_carouselamos__WEBPACK_IMPORTED_MODULE_23__["Ng2CarouselamosComponent"], [], { items: [0, "items"], width: [1, "width"], $prev: [2, "$prev"], $next: [3, "$next"], $item: [4, "$item"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["prev", 2]], null, 0, null, View_ShowComponent_11)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["next", 2]], null, 0, null, View_ShowComponent_13)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["item", 2]], null, 0, null, View_ShowComponent_15)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 2, 0, currVal_0); var currVal_1 = "50"; _ck(_v, 3, 0, currVal_1); var currVal_2 = _co.photos; var currVal_3 = _co.auto; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12); _ck(_v, 9, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = _co.currentPhoto; _ck(_v, 14, 0, currVal_7); }, null); }
function View_ShowComponent_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["height", "30"], ["id", "left"], ["src", "assets/arrow_left.png"], ["style", "cursor: pointer;"]], null, null, null, null, null))], null, null); }
function View_ShowComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.artifacts.length > 1); _ck(_v, 1, 0, currVal_0); }, null); }
function View_ShowComponent_24(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["height", "30"], ["id", "right"], ["src", "assets/arrow_right.png"], ["style", "cursor: pointer;"]], null, null, null, null, null))], null, null); }
function View_ShowComponent_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.artifacts.length > 1); _ck(_v, 1, 0, currVal_0); }, null); }
function View_ShowComponent_25(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "slide-items"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["height", "200px"], ["width", "auto"]], [[8, "src", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClickArtifact(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.thumbnail, ""); _ck(_v, 1, 0, currVal_0); }); }
function View_ShowComponent_27(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "br", [], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.currentArtifact.description; _ck(_v, 1, 0, currVal_0); }); }
function View_ShowComponent_28(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["height", "50px"], ["src", "https://www.gdao.org/themes/gdao-theme/images/logo-gdao.png"], ["width", "auto"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.currentArtifact.source, ""); _ck(_v, 0, 0, currVal_0); }); }
function View_ShowComponent_29(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a", [["href", "http://www.psilo.com/dead/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["height", "50px"], ["src", "http://www.psilo.com/dead/images/logo_psilo.jpg"], ["width", "auto"]], null, null, null, null, null))], null, null); }
function View_ShowComponent_26(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "photo-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowComponent_27)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowComponent_28)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowComponent_29)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.currentArtifact.description; _ck(_v, 4, 0, currVal_1); var currVal_2 = (_co.currentArtifact.collection == "GDAO"); _ck(_v, 6, 0, currVal_2); var currVal_3 = (_co.currentArtifact.collection == "Psilo"); _ck(_v, 8, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.currentArtifact.type; _ck(_v, 1, 0, currVal_0); }); }
function View_ShowComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 13, "div", [["class", "gd-container"], ["fxFlex", "50"], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "h2", [["class", "gd-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [["class", "titlef"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Other Artifacts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 5, "div", [["id", "galleryContainer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "div", [["class", "slides-wrapper"], ["ng2-carouselamos", ""], ["style", "width: 100%;"]], null, null, null, _node_modules_ng2_carouselamos_ng2_carouselamos_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_Ng2CarouselamosComponent_0"], _node_modules_ng2_carouselamos_ng2_carouselamos_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_Ng2CarouselamosComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4767744, null, 0, ng2_carouselamos__WEBPACK_IMPORTED_MODULE_23__["Ng2CarouselamosComponent"], [], { items: [0, "items"], width: [1, "width"], $prev: [2, "$prev"], $next: [3, "$next"], $item: [4, "$item"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["prev", 2]], null, 0, null, View_ShowComponent_21)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["next", 2]], null, 0, null, View_ShowComponent_23)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["item", 2]], null, 0, null, View_ShowComponent_25)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 2, 0, currVal_0); var currVal_1 = "50"; _ck(_v, 3, 0, currVal_1); var currVal_2 = _co.artifacts; var currVal_3 = _co.auto; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12); _ck(_v, 9, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = _co.currentArtifact; _ck(_v, 14, 0, currVal_7); }, null); }
function View_ShowComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 64, "div", [["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 55, "div", [["class", "topmargin"], ["fxLayout", "row wrap"], ["fxLayout.xs", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 10, "div", [["class", "gd-container"], ["fxFlex", "50"], ["fxLayout", "column"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](8, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "h2", [["class", "titlef"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Location: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "span", [["class", "normweight"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 10, "div", [["class", "gd-container"], ["fxFlex", "50"], ["fxLayout", "column"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](19, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 3, "h2", [["class", "titlef"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Venue: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "span", [["class", "normweight"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](25, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 6, "div", [["class", "gd-container"], ["fxFlex", "50"], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "h2", [["class", "titlef"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Setlist "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 6, "div", [["class", "gd-container"], ["fxFlex", "50"], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 1, "h2", [["class", "titlef"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Lineup"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 6, "div", [["class", "gd-container"], ["fxFlex", "50"], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 1, "h2", [["class", "titlef"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["News of the week"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 6, "div", [["class", "gd-container"], ["fxFlex", "50"], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 1, "h2", [["class", "titlef"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Available recordings"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 1, "gd-comments", [], null, null, null, _comments_comments_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_CommentsComponent_0"], _comments_comments_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_CommentsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 114688, null, 0, _comments_comments_component__WEBPACK_IMPORTED_MODULE_25__["CommentsComponent"], [_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _services_dialog_service__WEBPACK_IMPORTED_MODULE_26__["DialogService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { title: [0, "title"], userName: [1, "userName"], currentUserId: [2, "currentUserId"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 1, "gd-sharebuttons", [], null, null, null, _shared_sharebuttons_component_ngfactory__WEBPACK_IMPORTED_MODULE_27__["View_ShareButtonsComponent_0"], _shared_sharebuttons_component_ngfactory__WEBPACK_IMPORTED_MODULE_27__["RenderType_ShareButtonsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 114688, null, 0, _shared_sharebuttons_component__WEBPACK_IMPORTED_MODULE_28__["ShareButtonsComponent"], [], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.event; _ck(_v, 3, 0, currVal_1); var currVal_2 = "row wrap"; var currVal_3 = "column"; _ck(_v, 5, 0, currVal_2, currVal_3); var currVal_4 = _ck(_v, 8, 0, "/location", _co.event.location.id); _ck(_v, 7, 0, currVal_4); var currVal_5 = "column"; _ck(_v, 9, 0, currVal_5); var currVal_6 = "50"; _ck(_v, 10, 0, currVal_6); var currVal_8 = _co.event.location.thumbnail; _ck(_v, 16, 0, currVal_8); var currVal_9 = _ck(_v, 19, 0, "/venue", _co.event.venue.id); _ck(_v, 18, 0, currVal_9); var currVal_10 = "column"; _ck(_v, 20, 0, currVal_10); var currVal_11 = "50"; _ck(_v, 21, 0, currVal_11); var currVal_13 = _co.event.venue.thumbnail; _ck(_v, 27, 0, currVal_13); var currVal_14 = "column"; _ck(_v, 29, 0, currVal_14); var currVal_15 = "50"; _ck(_v, 30, 0, currVal_15); var currVal_16 = _co.event.setlist; _ck(_v, 34, 0, currVal_16); var currVal_17 = "column"; _ck(_v, 36, 0, currVal_17); var currVal_18 = "50"; _ck(_v, 37, 0, currVal_18); var currVal_19 = _co.event.performers; _ck(_v, 41, 0, currVal_19); var currVal_20 = "column"; _ck(_v, 43, 0, currVal_20); var currVal_21 = "50"; _ck(_v, 44, 0, currVal_21); var currVal_22 = _co.event.news; _ck(_v, 48, 0, currVal_22); var currVal_23 = "column"; _ck(_v, 50, 0, currVal_23); var currVal_24 = "50"; _ck(_v, 51, 0, currVal_24); var currVal_25 = _co.event.recordings; _ck(_v, 55, 0, currVal_25); var currVal_26 = (_co.photos.length > 0); _ck(_v, 57, 0, currVal_26); var currVal_27 = (_co.artifacts.length > 0); _ck(_v, 59, 0, currVal_27); var currVal_28 = ((((_co.event.location.name + ", ") + _co.event.location.state) + " \u2013 ") + _co.event.date); var currVal_29 = _co.currentUser.userName; var currVal_30 = _co.currentUser.userId; _ck(_v, 61, 0, currVal_28, currVal_29, currVal_30); _ck(_v, 64, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.event.location.name; _ck(_v, 14, 0, currVal_7); var currVal_12 = _co.event.venue.name; _ck(_v, 25, 0, currVal_12); }); }
function View_ShowComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "p", [], [[4, "margin-bottom", null]], null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.event; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = "75px"; _ck(_v, 2, 0, currVal_1); }); }
function View_ShowComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "gd-show", [], null, null, null, View_ShowComponent_0, RenderType_ShowComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _show_component__WEBPACK_IMPORTED_MODULE_29__["ShowComponent"], [_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _services_dialog_service__WEBPACK_IMPORTED_MODULE_26__["DialogService"], _services_player_service__WEBPACK_IMPORTED_MODULE_9__["PlayerService"], _auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services_lightbox_service__WEBPACK_IMPORTED_MODULE_30__["LightboxService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ShowComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("gd-show", _show_component__WEBPACK_IMPORTED_MODULE_29__["ShowComponent"], View_ShowComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/views/show.component.sass.shim.ngstyle.js":
/*!***********************************************************!*\
  !*** ./src/app/views/show.component.sass.shim.ngstyle.js ***!
  \***********************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = [".current-photo[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: auto;\n  cursor: pointer;\n}\n\n.photo-text[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0pvdXJuYWwvcHJvamVjdHMvZ3JhdGVmdWxfZGVhZF8yMDE5X2dpdC93ZWItYXBwMi9zcmMvYXBwL3ZpZXdzL3Nob3cuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3ZpZXdzL3Nob3cuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQ0NuQjs7QURDQTtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUNFcEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9zaG93LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1cnJlbnQtcGhvdG8ge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLnBob3RvLXRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyB9XG5cblxuXG5cblxuXG4iLCIuY3VycmVudC1waG90byB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5waG90by10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuIl19 */"];



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/types */ "./src/app/services/types.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _services_lightbox_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/lightbox.service */ "./src/app/services/lightbox.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");











console.log = function (s) {
    if (_config__WEBPACK_IMPORTED_MODULE_10__["DEBUG"]) {
        console.warn(s);
    }
    ;
};
class ShowComponent {
    constructor(data, sanitizer, router, route, dialog, player, auth, changeDetectorRef, lightbox) {
        this.data = data;
        this.sanitizer = sanitizer;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.player = player;
        this.auth = auth;
        this.changeDetectorRef = changeDetectorRef;
        this.lightbox = lightbox;
        this.currentUser = { userName: '', userId: '' };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.auth.userProfile$.subscribe(userProfile => {
                if (userProfile) {
                    this.currentUser = {
                        userId: userProfile.sub.split("|")[1],
                        userName: userProfile['http://example.com/username']
                    };
                    gtag('set', { 'user_id': this.currentUser.userId });
                }
            });
            /*
            this.currentUser = { userName: '', userId: ''}
            if (this.route.snapshot.data['loggedIn']) {
              this.auth.userProfile$.subscribe(userProfile => {
                this.currentUser = this.resolve.getUser(userProfile);
              });
              console.log(this.currentUser);
            }*/
            this.route.paramMap.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (params.has('id')) {
                    this.event = yield this.data.getEventDetails(params.get('id'));
                }
                else {
                    this.router.navigate(['/mapselect'], { replaceUrl: true });
                }
                if (this.event.date) {
                    this.formatDate = this.data.formatDate(this.event.date);
                    this.recordingUrls = this.event.recordings.map(r => this.sanitizer.bypassSecurityTrustResourceUrl("https://archive.org/embed/" + r.etreeId + "&playlist=1"));
                    console.log(this.event);
                    this.photos = this.event.artifacts
                        .filter(a => a.type === _services_types__WEBPACK_IMPORTED_MODULE_4__["ArtifactType"].Photo); //.map(a => a.image);
                    this.artifacts = this.event.artifacts.filter(a => a.type !== _services_types__WEBPACK_IMPORTED_MODULE_4__["ArtifactType"].Photo);
                    const poster = this.event.artifacts.filter(a => a.type == _services_types__WEBPACK_IMPORTED_MODULE_4__["ArtifactType"].Poster)[0];
                    const pass = this.event.artifacts.filter(a => a.type == _services_types__WEBPACK_IMPORTED_MODULE_4__["ArtifactType"].Pass)[0];
                    const ticket = this.event.artifacts.filter(a => a.type == _services_types__WEBPACK_IMPORTED_MODULE_4__["ArtifactType"].Ticket)[0];
                    this.eventImage = this.photos.length ? this.photos[0].image
                        : poster ? poster.image : pass ? pass.image : ticket ? ticket.image
                            : this.event.location.thumbnail;
                    var gl;
                    if (this.photos.length > 0) {
                        gl = this.lightbox.makeGallery(this.photos);
                        this.photosLightbox = gl[0];
                        this.photos = gl[1];
                        this.currentPhoto = this.photos[0];
                    }
                    if (this.artifacts.length) {
                        gl = this.lightbox.makeGallery(this.artifacts);
                        this.artifactsLightbox = gl[0];
                        this.artifacts = gl[1];
                        this.currentArtifact = this.artifacts[0];
                        console.log(this.currentArtifact);
                    }
                    this.changeDetectorRef.detectChanges();
                }
                else {
                    //this.router.navigate(['/show', await this.data.getRandomEventId()],
                    this.router.navigate(['/mapselect'], { replaceUrl: true });
                }
            }));
        });
    }
    /*
    protected openSongOptionsDialog(song: SongInfo, set: string, idx: number) {
      this.dialog.openMultiFunction(
        //song.name+"', "+this.event.venue.name+", "+this.event.date,
        set + "/Track " + idx + ": " + '"'+song.name+'"',
        ["add to playlist", "go to song"],
        [() => this.addSongToPlaylist(song),
          () => this.router.navigate(['/song', song.id])]
      );
    }
  */
    openSongOptionsDialog(song, set, idx) {
        this.dialog.openMultiFunction(
        //song.name+"', "+this.event.venue.name+", "+this.event.date,
        set + "/Track " + idx + ": " + '"' + song.name + '"', ["add to playlist", "go to song"], [() => this.openRecordingsDialog(song),
            () => this.router.navigate(['/song', song.id])]);
    }
    openRecordingsDialog(song) {
        this.dialog.openMultiFunction("Recordings of '" + song.name + "', " + this.event.venue + ", " + this.event.date, this.event.recordings.map(r => r.etreeId), this.event.recordings.map(r => () => this.addTrackToPlaylist(song, r.etreeId, r.id)));
    }
    openRecordingOptionsDialog(recording) {
        this.dialog.openMultiFunction("Recording " + recording.etreeId, ["add all to playlist", "go to recording"], [() => this.addRecordingToPlaylist(recording),
            () => this.router.navigate(['/recording', recording.id])]);
    }
    /*
    private async addSongToPlaylist(song: SongInfo) {
      const info = await this.data.getEventInfo(this.event.id);
      const track = await this.data.getTrack(song, info);
      if (track) this.player.addToPlaylist(track);
    }
  
  
   private async addSongToPlaylist(song: SongInfo) {
    const info = await this.data.getEventInfo(this.event.id);
    const track = await this.data.getTrack(song, info);
    if (track) this.player.addToPlaylist(track);
  }
    */
    addTrackToPlaylist(song, recordingEtreeId, recordingId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const eventInfo = {
                id: this.event.id,
                date: this.event.date,
                location: this.event.location.name,
                state: '',
                venue: this.event.venue.name,
                recordings: this.event.recordings,
                artifacts: null //this.artifacts
            };
            var songDetails = yield this.data.getSong(song.id);
            this.data.getTracks(songDetails, eventInfo, recordingEtreeId, recordingId)
                .forEach(t => this.player.addToPlaylist(t));
        });
    }
    /*
    private async addRecordingToPlaylist(recording: Recording) {
      const info = await this.data.getEventInfo(this.event.id);
      const tracks = await this.data.getRecordingTracks(recording, info);
      if (tracks) tracks.forEach(t => this.player.addToPlaylist(t));
    }
  */
    addRecordingToPlaylist(recording) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //const info = await this.data.getEventInfo(this.event.id);
            var tracklist = yield this.data.getTracklist(recording.id);
            tracklist.forEach(t => {
                if (t.song) {
                    t['id'] = t.song[0].song_id;
                    delete t.song;
                }
                t.track = t.track.toString();
            });
            //console.log(tracklist)
            if (tracklist)
                tracklist.forEach(t => this.addRecordingTrackToPlaylist(t, recording));
        });
    }
    addRecordingTrackToPlaylist(audio, recording) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log(audio)
            const track = this.data.toPlayerTrack(this.event.venue.name, this.event.location.name, this.event.date, this.event.id, recording.etreeId, audio, recording.id);
            this.player.addToPlaylist(track);
        });
    }
    onClickPhoto(p) {
        this.currentPhoto = p;
        this.lightbox.openLightboxArray(this.photosLightbox, p.index);
    }
    onClickArtifact(a) {
        this.currentArtifact = a;
        this.lightbox.openLightboxArray(this.artifactsLightbox, a.index);
    }
}


/***/ }),

/***/ "./src/app/views/song.component.ngfactory.js":
/*!***************************************************!*\
  !*** ./src/app/views/song.component.ngfactory.js ***!
  \***************************************************/
/*! exports provided: RenderType_SongComponent, View_SongComponent_0, View_SongComponent_Host_0, SongComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SongComponent", function() { return RenderType_SongComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SongComponent_0", function() { return View_SongComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SongComponent_Host_0", function() { return View_SongComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongComponentNgFactory", function() { return SongComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/header.component.ngfactory */ "./src/app/shared/header.component.ngfactory.js");
/* harmony import */ var _shared_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/header.component */ "./src/app/shared/header.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _shared_shows_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/shows.component.ngfactory */ "./src/app/shared/shows.component.ngfactory.js");
/* harmony import */ var _shared_shows_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/shows.component */ "./src/app/shared/shows.component.ts");
/* harmony import */ var _comments_comments_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../comments/comments.component.ngfactory */ "./src/app/comments/comments.component.ngfactory.js");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _shared_sharebuttons_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/sharebuttons.component.ngfactory */ "./src/app/shared/sharebuttons.component.ngfactory.js");
/* harmony import */ var _shared_sharebuttons_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/sharebuttons.component */ "./src/app/shared/sharebuttons.component.ts");
/* harmony import */ var _song_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./song.component */ "./src/app/views/song.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 




















var styles_SongComponent = [];
var RenderType_SongComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_SongComponent, data: {} });

function View_SongComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gd-header", [], null, null, null, _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_HeaderComponent_0"], _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shared_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _services_player_service__WEBPACK_IMPORTED_MODULE_8__["PlayerService"]], { title: [0, "title"], subtitle: [1, "subtitle"], userId: [2, "userId"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.song.name, ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.subtitle, ""); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.currentUser.userId, ""); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_SongComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](2, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, "/artist", _v.context.$implicit.id); _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.name; _ck(_v, 3, 0, currVal_1); }); }
function View_SongComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Composed by: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SongComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "br", [], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.song.composedBy; _ck(_v, 3, 0, currVal_0); }, null); }
function View_SongComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](2, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _ck(_v, 2, 0, "/artist", _v.context.$implicit.id); _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.name; _ck(_v, 3, 0, currVal_1); }); }
function View_SongComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Lyrics by: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SongComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "br", [], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.song.lyricsBy; _ck(_v, 3, 0, currVal_0); }, null); }
function View_SongComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" First played on: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "br", [], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.firstPlayed; _ck(_v, 1, 0, currVal_0); }); }
function View_SongComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" Last played on: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "br", [], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.lastPlayed; _ck(_v, 1, 0, currVal_0); }); }
function View_SongComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" Number of performances: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "br", [], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.timesPlayed; _ck(_v, 1, 0, currVal_0); }); }
function View_SongComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" Total number of recordings: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "br", [], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.totalRecordings; _ck(_v, 1, 0, currVal_0); }); }
function View_SongComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 29, "div", [["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SongComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 20, "div", [["class", "gd-container"], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 14, "div", [["class", "gd-container"], ["fxFlex", ""], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SongComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SongComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SongComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SongComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SongComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SongComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "p", [["class", "gd-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](22, null, ["All performances of ", ":"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 1, "gd-shows", [], null, null, null, _shared_shows_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_ShowsComponent_0"], _shared_shows_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_ShowsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 114688, null, 0, _shared_shows_component__WEBPACK_IMPORTED_MODULE_13__["ShowsComponent"], [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]], { eventIds: [0, "eventIds"], onOptions: [1, "onOptions"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 1, "gd-comments", [], null, null, null, _comments_comments_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_CommentsComponent_0"], _comments_comments_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_CommentsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 114688, null, 0, _comments_comments_component__WEBPACK_IMPORTED_MODULE_15__["CommentsComponent"], [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_dialog_service__WEBPACK_IMPORTED_MODULE_16__["DialogService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { title: [0, "title"], userName: [1, "userName"], currentUserId: [2, "currentUserId"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 1, "gd-sharebuttons", [], null, null, null, _shared_sharebuttons_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_ShareButtonsComponent_0"], _shared_sharebuttons_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_ShareButtonsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 114688, null, 0, _shared_sharebuttons_component__WEBPACK_IMPORTED_MODULE_18__["ShareButtonsComponent"], [], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.song; _ck(_v, 3, 0, currVal_1); var currVal_2 = "column"; _ck(_v, 5, 0, currVal_2); var currVal_3 = "column"; _ck(_v, 7, 0, currVal_3); var currVal_4 = ""; _ck(_v, 8, 0, currVal_4); var currVal_5 = (_co.song.composedBy && _co.song.composedBy.length); _ck(_v, 10, 0, currVal_5); var currVal_6 = (_co.song.lyricsBy && _co.song.lyricsBy.length); _ck(_v, 12, 0, currVal_6); var currVal_7 = _co.firstPlayed; _ck(_v, 14, 0, currVal_7); var currVal_8 = _co.lastPlayed; _ck(_v, 16, 0, currVal_8); var currVal_9 = _co.timesPlayed; _ck(_v, 18, 0, currVal_9); var currVal_10 = _co.totalRecordings; _ck(_v, 20, 0, currVal_10); var currVal_12 = _co.song.eventIds; var currVal_13 = _co.openOptionsDialog.bind(_co); _ck(_v, 24, 0, currVal_12, currVal_13); var currVal_14 = _co.song.name; var currVal_15 = _co.currentUser.userName; var currVal_16 = _co.currentUser.userId; _ck(_v, 26, 0, currVal_14, currVal_15, currVal_16); _ck(_v, 29, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_11 = _co.song.name; _ck(_v, 22, 0, currVal_11); }); }
function View_SongComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SongComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "p", [], [[4, "margin-bottom", null]], null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.song; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = "75px"; _ck(_v, 2, 0, currVal_1); }); }
function View_SongComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gd-song", [], null, null, null, View_SongComponent_0, RenderType_SongComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _song_component__WEBPACK_IMPORTED_MODULE_19__["SongComponent"], [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _services_player_service__WEBPACK_IMPORTED_MODULE_8__["PlayerService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_dialog_service__WEBPACK_IMPORTED_MODULE_16__["DialogService"], _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SongComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("gd-song", _song_component__WEBPACK_IMPORTED_MODULE_19__["SongComponent"], View_SongComponent_Host_0, {}, {}, []);



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");








console.log = function (s) {
    if (_config__WEBPACK_IMPORTED_MODULE_7__["DEBUG"]) {
        console.warn(s);
    }
    ;
};
class SongComponent {
    constructor(data, player, router, route, dialog, auth) {
        this.data = data;
        this.player = player;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.auth = auth;
        this.currentUser = { userName: '', userId: '' };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.auth.userProfile$.subscribe(userProfile => {
                if (userProfile) {
                    this.currentUser = {
                        userId: userProfile.sub.split("|")[1],
                        userName: userProfile['http://example.com/username']
                    };
                    gtag('set', { 'user_id': this.currentUser.userId });
                }
            });
            /*
            if (this.route.snapshot.data['loggedIn']) {
              this.auth.userProfile$.subscribe(userProfile => {
                this.currentUser = this.resolve.getUser(userProfile);
              });
              console.log(this.currentUser);
            }
            */
            this.route.paramMap.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (params.has('id')) {
                    this.song = yield this.data.getSong(params.get('id'));
                    this.subtitle = lodash__WEBPACK_IMPORTED_MODULE_1__["uniq"](this.song.composedBy.concat(this.song.lyricsBy)
                        .map(a => a.name)).join(', ');
                    this.events = yield this.data.getEventInfos(this.song.eventIds);
                    if (this.events.length) {
                        this.firstPlayed = this.events[0].date;
                        this.lastPlayed = this.events[this.events.length - 1].date;
                        this.timesPlayed = this.events.length;
                        this.totalRecordings = lodash__WEBPACK_IMPORTED_MODULE_1__["sum"](this.events.map(e => e.recordings.length));
                    }
                }
                if (!this.song) {
                    this.router.navigate(['/song', (yield this.data.getRandomSong()).id], { replaceUrl: true });
                }
            }));
        });
    }
    openOptionsDialog(event) {
        this.dialog.openMultiFunction(this.song.name + "', " + event.venue + ", " + event.date, ["Add to playlist", "Go to show"], [() => this.openRecordingsDialog(event),
            () => this.router.navigate(['/show', event.id])]);
    }
    openRecordingsDialog(event) {
        this.dialog.openMultiFunction("Recordings of '" + this.song.name + "', " + event.venue + ", " + event.date, event.recordings.map(r => r.etreeId), event.recordings.map(r => () => this.addRecordingToPlaylist(r.etreeId, event, r.id)));
    }
    addRecordingToPlaylist(recordingEtreeId, event, recordingId) {
        this.data.getTracks(this.song, event, recordingEtreeId, recordingId)
            .forEach(t => this.player.addToPlaylist(t));
    }
}


/***/ }),

/***/ "./src/app/views/start.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/views/start.component.ngfactory.js ***!
  \****************************************************/
/*! exports provided: RenderType_StartComponent, View_StartComponent_0, View_StartComponent_Host_0, StartComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_StartComponent", function() { return RenderType_StartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_StartComponent_0", function() { return View_StartComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_StartComponent_Host_0", function() { return View_StartComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponentNgFactory", function() { return StartComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/header.component.ngfactory */ "./src/app/shared/header.component.ngfactory.js");
/* harmony import */ var _shared_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/header.component */ "./src/app/shared/header.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");
/* harmony import */ var _start_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./start.component */ "./src/app/views/start.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 











var styles_StartComponent = ["div[_ngcontent-%COMP%] {font-family: \"Lato\", sans-serif; color:rgb(59, 59, 59)}\na.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  cursor: default;\n}"];
var RenderType_StartComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_StartComponent, data: {} });

function View_StartComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gd-header", [], null, null, null, _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_HeaderComponent_0"], _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shared_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _services_player_service__WEBPACK_IMPORTED_MODULE_8__["PlayerService"]], { title: [0, "title"], subtitle: [1, "subtitle"], userId: [2, "userId"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "meta", [["charset", "UTF-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "meta", [["content", "width=device-width, initial-scale=1"], ["name", "viewport"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "link", [["href", "https://www.w3schools.com/w3css/4/w3.css"], ["rel", "stylesheet"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "link", [["href", "https://fonts.googleapis.com/css?family=Lato"], ["rel", "stylesheet"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 0, "link", [["href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["rel", "stylesheet"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 231, "div", [["class", "w3-content"], ["style", "max-width:2000px;margin-top:32px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 8, "div", [["class", "w3-container w3-content w3-center w3-padding-16"], ["id", "top"], ["style", "max-width:800px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 2, "img", [["alt", "grateful dead explorer logo"], ["class", "w3-round w3-margin-bottom"], ["src", "/assets/gd_logo1_start.png"], ["style", "width:65%"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](11, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 4, "p", [["class", "w3-opacity"], ["style", "cursor:pointer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 3, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 2, "u", [["routerLink", "/mapselect"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["click to enter"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 28, "div", [["class", "w3-container w3-content w3-center"], ["id", "overviewstart"], ["style", "max-width:800px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 1, "p", [["class", "w3-justify"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" The Grateful Dead Concert Explorer is a Web application that enables user to navigate and explore digital libraries of live music recordings and discover and share associated artifacts that are dynamically linked within the application. It aims to demonstrate how Semantic Audio and Linked Data technologies can produce an improved user experience for browsing and exploring live music collections, by collecting information from a variety of different Web sources and employing Music Information Retrieval (MIR) techniques. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 1, "p", [["class", "w3-justify"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" This prototype demonstrator focuses on the concerts of the Grateful Dead, motivated by the ongoing interest in detailed descriptions of their performances, evidenced by the large amount of information available on the Web detailing various aspects of those events. The application links the large number of concert recordings by the Grateful Dead available in the Internet Archive with audio analysis data and retrieves additional information and artifacts (e.g. band lineup, photos, scans of tickets and posters, reviews) from existing Web sources, to explore and visualize the collection. The project demonstrates mechanisms for musicians and the music industry to provide services for consumers to enjoy live music performances recognizing the social and cultural value of live music and fan communities. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "p", [["class", "w3-justify"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" This is an ongoing project in its early stages and not yet optimzed for mobile devices. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 5, "p", [["class", "w3-justify"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" The technologies exploited in this work that were developed in the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 2, "a", [["href", "http://www.semanticaudio.ac.uk/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["EPSRC FAST IMPACt"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" project include: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 8, "ul", [["class", "w3-justify"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Ontological data models for the representation of performed music as cultural artifacts, and its linkage to associated non-musical artifacts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Music information retrieval and processing algorithms for the automatic generation of playlists and audio mixes based on user-selected criteria"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Music-structure analysis for the comparison of performances"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Audio alignment of different user-generated recordings of live-music performances"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 6, "p", [["class", "w3-justify"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" The main functions of the current version are described in the following. Clicking on the top left logo opens a menu with links to this start page and the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 3, "a", [["href", "#mapstart"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 2, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Map View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [". "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 19, "div", [["class", "w3-container w3-content w3-center w3-padding-32"], ["id", "mapstart"], ["style", "max-width:800px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 1, "h3", [["class", "w3-wide"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Map View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 1, "img", [["alt", "map view"], ["class", "image w3-round w3-margin-bottom"], ["lazyLoad", "/assets/screens/scr_map.png"], ["style", "width:90%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](50, 1720320, null, 0, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__["LazyLoadImageDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, "options"]], { lazyImage: [0, "lazyImage"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 14, "p", [["class", "w3-justify"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" The "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Map View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" shows the world map with markers indicating the locations of concerts. Clicking on a marker opens a menu with links to the pages for the venue ("])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, null, 3, "a", [["href", "#venuestart"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](57, 0, null, null, 2, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](58, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Venue View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["), and to the pages for the concerts at that location ("])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 3, "a", [["href", "#showstart"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 2, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Show View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["). While by default all concert locations are displayed, specific tours can be selected from the pull-down menu on the top left. When selecting a tour, only the concerts from the tour are displayed on the map and connected by arrows indicating the order of concerts. The map also has a separate search function covering the concerts on the map. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](66, 0, null, null, 36, "div", [["class", "w3-container w3-content w3-center w3-padding-32"], ["id", "showstart"], ["style", "max-width:800px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, null, 1, "h3", [["class", "w3-wide"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Show View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](69, 0, null, null, 1, "img", [["alt", "show view"], ["class", "image w3-round w3-margin-bottom"], ["lazyLoad", "/assets/screens/scr_show.png"], ["style", "width:90%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](70, 1720320, null, 0, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__["LazyLoadImageDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, "options"]], { lazyImage: [0, "lazyImage"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](71, 0, null, null, 31, "p", [["class", "w3-justify"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" The "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](73, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Show View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00A0 shows information about a specific concert, including the location, venue, the setlist, the lineup and the additional recordings available in the archive. The button next to the recording IDs opens a dialogue to either go to the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](76, 0, null, null, 3, "a", [["href", "#recordingstart"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](77, 0, null, null, 2, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](78, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Recording View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00A0 for the selected recording, or add all songs of the concert recording to the playlist of the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](81, 0, null, null, 2, "a", [["href", "#playerstart"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](82, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["audio player"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [". One can navigate to other pages by clicking on any item, for instance, clicking on the venue opens the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](85, 0, null, null, 3, "a", [["href", "#venuestart"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](86, 0, null, null, 2, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](87, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Venue View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00A0 for the respective venue. Clicking on the button next to a song opens a dialogue to either go to the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](90, 0, null, null, 3, "a", [["href", "#songstart"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](91, 0, null, null, 2, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](92, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Song View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00A0 or add the song to the playlist of the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](95, 0, null, null, 2, "a", [["href", "#playerstart"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](96, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["audio player"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [". Clicking on photos or other artifacts either opens a higher resolution image or opens the source page at the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](99, 0, null, null, 2, "a", [["href", "https://www.gdao.org/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](100, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Grateful Dead Archive Online (GDAO)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" in a new tab. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](103, 0, null, null, 18, "div", [["class", "w3-container w3-content w3-center w3-padding-32"], ["id", "songstart"], ["style", "max-width:800px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](104, 0, null, null, 1, "h3", [["class", "w3-wide"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Song View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](106, 0, null, null, 1, "img", [["alt", "song view"], ["class", "image w3-round w3-margin-bottom"], ["lazyLoad", "/assets/screens/scr_song.png"], ["style", "width:90%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](107, 1720320, null, 0, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__["LazyLoadImageDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, "options"]], { lazyImage: [0, "lazyImage"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](108, 0, null, null, 13, "p", [["class", "w3-justify"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" The "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](110, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Song View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" shows information about a selected song. This includes the composers at the top of the page and the number of performances and recordings available. Clicking on an item in the list of shows opens the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](113, 0, null, null, 3, "a", [["href", "#showstart"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](114, 0, null, null, 2, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](115, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Show View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [". The button next to the location opens a dialogue which additionally lets the user add the song from the respective show to the playlist of the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](118, 0, null, null, 2, "a", [["href", "#playerstart"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](119, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["audio player"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [". The dialogue shows all available recordings from the selected concert. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](122, 0, null, null, 14, "div", [["class", "w3-container w3-content w3-center w3-padding-32"], ["id", "locationstart"], ["style", "max-width:800px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](123, 0, null, null, 1, "h3", [["class", "w3-wide"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Location View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](125, 0, null, null, 1, "img", [["alt", "location view"], ["class", "image w3-round w3-margin-bottom"], ["lazyLoad", "/assets/screens/scr_location.png"], ["style", "width:90%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](126, 1720320, null, 0, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__["LazyLoadImageDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, "options"]], { lazyImage: [0, "lazyImage"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](127, 0, null, null, 9, "p", [["class", "w3-justify"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" The "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](129, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Location View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" shows information about a city where concerts were held. The list of shows provides links to the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](132, 0, null, null, 3, "a", [["href", "#showstart"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](133, 0, null, null, 2, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](134, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Show View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00A0 for all shows at that location. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](137, 0, null, null, 14, "div", [["class", "w3-container w3-content w3-center w3-padding-32"], ["id", "venuestart"], ["style", "max-width:800px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](138, 0, null, null, 1, "h3", [["class", "w3-wide"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Venue View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](140, 0, null, null, 1, "img", [["alt", "venue view"], ["class", "image w3-round w3-margin-bottom"], ["lazyLoad", "/assets/screens/scr_venue.png"], ["style", "width:90%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](141, 1720320, null, 0, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__["LazyLoadImageDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, "options"]], { lazyImage: [0, "lazyImage"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](142, 0, null, null, 9, "p", [["class", "w3-justify"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" The "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](144, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Venue View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" shows information about a venue where concerts were held. The list of shows provides links to the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](147, 0, null, null, 3, "a", [["href", "#showstart"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](148, 0, null, null, 2, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](149, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Show View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00A0 for all shows at that venue. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](152, 0, null, null, 25, "div", [["class", "w3-container w3-content w3-center w3-padding-32"], ["id", "recordingstart"], ["style", "max-width:800px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](153, 0, null, null, 1, "h3", [["class", "w3-wide"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Recording View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](155, 0, null, null, 1, "img", [["alt", "recording view"], ["class", "image w3-round w3-margin-bottom"], ["lazyLoad", "/assets/screens/scr_recording.png"], ["style", "width:90%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](156, 1720320, null, 0, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__["LazyLoadImageDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, "options"]], { lazyImage: [0, "lazyImage"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](157, 0, null, null, 20, "p", [["class", "w3-justify"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" The "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](159, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Recording View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" shows information about a specific recording from the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](162, 0, null, null, 2, "a", [["href", "https://archive.org/details/etree"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](163, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Live Music Archive"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" at the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](166, 0, null, null, 2, "a", [["href", "https://archive.org/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](167, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Internet Archive"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [". The information includes source and lineage information of the recording, as well as the list of songs. Clicking on the button next to a song opens a dialogue to add the selected song to the playlist of the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](170, 0, null, null, 2, "a", [["href", "#playerstart"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](171, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["audio player"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [". Clicking on the logo under the track list opens the page for the recording at the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](174, 0, null, null, 2, "a", [["href", "https://archive.org/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](175, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Internet Archive"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" in a new tab. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](178, 0, null, null, 25, "div", [["class", "w3-container w3-content w3-center w3-padding-32"], ["id", "playerstart"], ["style", "max-width:800px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](179, 0, null, null, 1, "h3", [["class", "w3-wide"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Audio Player"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](181, 0, null, null, 1, "img", [["alt", "audio player"], ["class", "image w3-round w3-margin-bottom"], ["lazyLoad", "/assets/screens/scr_player.png"], ["style", "width:90%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](182, 1720320, null, 0, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__["LazyLoadImageDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, "options"]], { lazyImage: [0, "lazyImage"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](183, 0, null, null, 20, "p", [["class", "w3-justify"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" The audio player at the bottom of the page streams audio directly from the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](185, 0, null, null, 2, "a", [["href", "https://archive.org/details/etree"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](186, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Live Music Archive"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [". Songs can be added to the playlist from the Web application where songs are listed, for instance in the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](189, 0, null, null, 3, "a", [["href", "#showstart"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](190, 0, null, null, 2, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](191, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Show View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [", "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](194, 0, null, null, 3, "a", [["href", "#recordingstart"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](195, 0, null, null, 2, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](196, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Recording View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u00A0 or "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](199, 0, null, null, 3, "a", [["href", "#songstart"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](200, 0, null, null, 2, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](201, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Song View"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [". In addition to the standard functions (play, stop, volume, etc.), the button with the eye symbol expands/hides the waveform view and playlist. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](204, 0, null, null, 20, "div", [["class", "w3-container w3-content w3-center w3-padding-32"], ["id", "additionalstart"], ["style", "max-width:800px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](205, 0, null, null, 1, "h3", [["class", "w3-wide"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Additional Functions"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](207, 0, null, null, 1, "p", [["class", "w3-justify"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Not all functions of the demo application are listed here, and there are more functions planned to be implemented in the near future including social media aspects and MIR, e.g. user discussions of concerts and the automatic generation of playlist mixes based on user-defined parameters and audio feature analysis results. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](209, 0, null, null, 11, "p", [["class", "w3-justify"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](210, 0, null, null, 6, "s", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["A demo of a an automated mix playing excerpts of recordings of a specified song spanning the career of the Grateful Dead in a seamless mix while retrieving and displaying artifacts in real-time can be found "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](212, 0, null, null, 3, "a", [["class", "disabled"], ["href", "https://grateful-dead-live.github.io/plunderphonics/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](213, 0, null, null, 2, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](214, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["here"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" \u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](218, 0, null, null, 2, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](219, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["down for maintenance"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](221, 0, null, null, 1, "p", [["class", "w3-justify"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Here is a demo video of a an automated mix playing excerpts of recordings of a specified song spanning the career of the Grateful Dead in a seamless mix while retrieving and displaying artifacts in real-time: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](223, 0, null, null, 1, "div", [["style", "position:relative;padding-top:56.25%;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](224, 0, null, null, 0, "iframe", [["allowfullscreen", ""], ["src", "https://www.youtube.com/embed/M-zvJYRhnL8"], ["style", "position:absolute;top:0;left:0;width:100%;height:100%;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](225, 0, null, null, 8, "div", [["class", "w3-container w3-content w3-center w3-padding-16"], ["id", "logostart"], ["style", "max-width:800px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](226, 0, null, null, 1, "a", [["href", "https://archive.org"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](227, 0, null, null, 0, "img", [["alt", "internet archive logo"], ["class", "w3-round w3-margin-right"], ["src", "https://archive.org/images/glogo.png"], ["style", "width:8%"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](228, 0, null, null, 1, "a", [["href", "http://c4dm.eecs.qmul.ac.uk"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](229, 0, null, null, 0, "img", [["alt", "c4dm qmul logo"], ["class", "w3-round w3-margin-right w3-margin-left"], ["src", "https://sites.google.com/site/mathemusicalconversations/_/rsrc/1396930666900/about/c4dm_qml-logo.jpg"], ["style", "width:18%"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](230, 0, null, null, 1, "a", [["href", "https://epsrc.ukri.org/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](231, 0, null, null, 0, "img", [["alt", "epsrc logo"], ["class", "w3-round w3-margin-right w3-margin-left"], ["src", "/assets/epsrc.jpg"], ["style", "width:17%"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](232, 0, null, null, 1, "a", [["href", "https://www.gdao.org"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](233, 0, null, null, 0, "img", [["alt", "gdao logo"], ["class", "w3-round w3-margin-left"], ["src", "https://www.gdao.org/themes/gdao-theme/images/logo-gdao.png"], ["style", "width:8%"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](234, 0, null, null, 3, "div", [["class", "w3-container w3-content w3-center"], ["id", "emailstart"], ["style", "max-width:800px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](235, 0, null, null, 2, "a", [], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](236, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Email us"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](238, 0, null, null, 0, "p", [["style", "padding: 0 0 5em 0"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", "About", ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", "", ""); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.currentUser.userId, ""); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _ck(_v, 11, 0, "/mapselect"); _ck(_v, 10, 0, currVal_3); var currVal_4 = "/mapselect"; _ck(_v, 15, 0, currVal_4); var currVal_5 = "/assets/screens/scr_map.png"; _ck(_v, 50, 0, currVal_5); var currVal_6 = "/assets/screens/scr_show.png"; _ck(_v, 70, 0, currVal_6); var currVal_7 = "/assets/screens/scr_song.png"; _ck(_v, 107, 0, currVal_7); var currVal_8 = "/assets/screens/scr_location.png"; _ck(_v, 126, 0, currVal_8); var currVal_9 = "/assets/screens/scr_venue.png"; _ck(_v, 141, 0, currVal_9); var currVal_10 = "/assets/screens/scr_recording.png"; _ck(_v, 156, 0, currVal_10); var currVal_11 = "/assets/screens/scr_player.png"; _ck(_v, 182, 0, currVal_11); }, function (_ck, _v) { var _co = _v.component; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", ((("mai" + "lto") + ":") + _co.email), ""); _ck(_v, 235, 0, currVal_12); }); }
function View_StartComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gd-start", [], null, null, null, View_StartComponent_0, RenderType_StartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _start_component__WEBPACK_IMPORTED_MODULE_10__["StartComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var StartComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("gd-start", _start_component__WEBPACK_IMPORTED_MODULE_10__["StartComponent"], View_StartComponent_Host_0, {}, {}, []);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");



console.log = function (s) {
    if (_config__WEBPACK_IMPORTED_MODULE_2__["DEBUG"]) {
        console.warn(s);
    }
    ;
};
class StartComponent {
    constructor(sanitizer, auth) {
        this.sanitizer = sanitizer;
        this.auth = auth;
        this.currentUser = { userName: '', userId: '' };
    }
    ngOnInit() {
        this.auth.userProfile$.subscribe(userProfile => {
            if (userProfile) {
                this.currentUser = {
                    userId: userProfile.sub.split("|")[1],
                    userName: userProfile['http://example.com/username']
                };
                gtag('set', { 'user_id': this.currentUser.userId });
            }
        });
        /*
        if (this.route.snapshot.data['loggedIn']) {
          this.auth.userProfile$.subscribe(userProfile => {
            this.currentUser = this.resolve.getUser(userProfile);
          });
          console.log(this.currentUser);
        }
        */
        this.email = _config__WEBPACK_IMPORTED_MODULE_2__["EMAILADDRESS"];
    }
}


/***/ }),

/***/ "./src/app/views/venue.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/views/venue.component.ngfactory.js ***!
  \****************************************************/
/*! exports provided: RenderType_VenueComponent, View_VenueComponent_0, View_VenueComponent_Host_0, VenueComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_VenueComponent", function() { return RenderType_VenueComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_VenueComponent_0", function() { return View_VenueComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_VenueComponent_Host_0", function() { return View_VenueComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenueComponentNgFactory", function() { return VenueComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/header.component.ngfactory */ "./src/app/shared/header.component.ngfactory.js");
/* harmony import */ var _shared_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/header.component */ "./src/app/shared/header.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _shared_map_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/map.component.ngfactory */ "./src/app/shared/map.component.ngfactory.js");
/* harmony import */ var _shared_map_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/map.component */ "./src/app/shared/map.component.ts");
/* harmony import */ var _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../node_modules/@ng-select/ng-select/ng-select-ng-select.ngfactory */ "./node_modules/@ng-select/ng-select/ng-select-ng-select.ngfactory.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _shared_youtube_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/youtube.component.ngfactory */ "./src/app/shared/youtube.component.ngfactory.js");
/* harmony import */ var _shared_youtube_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/youtube.component */ "./src/app/shared/youtube.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");
/* harmony import */ var _shared_shows_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/shows.component.ngfactory */ "./src/app/shared/shows.component.ngfactory.js");
/* harmony import */ var _shared_shows_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/shows.component */ "./src/app/shared/shows.component.ts");
/* harmony import */ var _comments_comments_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../comments/comments.component.ngfactory */ "./src/app/comments/comments.component.ngfactory.js");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _shared_sharebuttons_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../shared/sharebuttons.component.ngfactory */ "./src/app/shared/sharebuttons.component.ngfactory.js");
/* harmony import */ var _shared_sharebuttons_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../shared/sharebuttons.component */ "./src/app/shared/sharebuttons.component.ts");
/* harmony import */ var _venue_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./venue.component */ "./src/app/views/venue.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 




























var styles_VenueComponent = [];
var RenderType_VenueComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_VenueComponent, data: {} });

function View_VenueComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gd-header", [], null, null, null, _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_HeaderComponent_0"], _shared_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _shared_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _services_player_service__WEBPACK_IMPORTED_MODULE_8__["PlayerService"]], { imageUrl: [0, "imageUrl"], title: [1, "title"], subtitle: [2, "subtitle"], userId: [3, "userId"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.venue.image, ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.venue.name, ""); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.location, ""); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.currentUser.userId, ""); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null); }
function View_VenueComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["The Band played on ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.data.event.date; _ck(_v, 1, 0, currVal_0); }); }
function View_VenueComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "gd-container"], ["fxFlex", "1 1 33%"], ["fxFlex.sm", "1 1 100%"], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"], "fxFlex.sm": [1, "fxFlex.sm"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "gd-map", [["fxFlex", "1 1 auto"], ["zoom", "15"]], [[4, "height", null]], null, null, _shared_map_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MapComponent_0"], _shared_map_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MapComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 114688, null, 0, _shared_map_component__WEBPACK_IMPORTED_MODULE_12__["MapComponent"], [], { latitude: [0, "latitude"], longitude: [1, "longitude"], zoom: [2, "zoom"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "1 1 33%"; var currVal_2 = "1 1 100%"; _ck(_v, 2, 0, currVal_1, currVal_2); var currVal_4 = "1 1 auto"; _ck(_v, 4, 0, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.venue.geoloc.lat, ""); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.venue.geoloc.long, ""); var currVal_7 = "15"; _ck(_v, 5, 0, currVal_5, currVal_6, currVal_7); }, function (_ck, _v) { var currVal_3 = "100%"; _ck(_v, 3, 0, currVal_3); }); }
function View_VenueComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "ng-option", [], null, null, null, _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ɵr_0"], _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ɵr"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 9093120, [[12, 4]], 0, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["ɵr"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 0, "img", [["height", "40px"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, 0, [" ", " "]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.videoId; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.context.$implicit.thumbnail, ""); _ck(_v, 2, 0, currVal_1); var currVal_2 = _v.context.$implicit.title; _ck(_v, 3, 0, currVal_2); }); }
function View_VenueComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 26, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 25, "div", [["class", "gd-container"], ["fxFlex", "50"], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "gd-youtube", [["width", "100%"]], null, null, null, _shared_youtube_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_YoutubeComponent_0"], _shared_youtube_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_YoutubeComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 114688, null, 0, _shared_youtube_component__WEBPACK_IMPORTED_MODULE_16__["YoutubeComponent"], [], { videoId: [0, "videoId"], width: [1, "width"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 20, "ng-select", [["bindLabel", "title"], ["role", "listbox"]], [[2, "ng-select", null], [2, "ng-select-single", null], [2, "ng-select-typeahead", null], [2, "ng-select-multiple", null], [2, "ng-select-taggable", null], [2, "ng-select-searchable", null], [2, "ng-select-clearable", null], [2, "ng-select-opened", null], [2, "ng-select-disabled", null], [2, "ng-select-filtered", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "ngModelChange"], [null, "keydown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keydown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).handleKeyDown($event) !== false);
        ad = (pd_0 && ad);
    } if (("change" === en)) {
        var pd_1 = (_co.selectVideo() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.currentVideoId = $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_NgSelectComponent_0"], _node_modules_ng_select_ng_select_ng_select_ng_select_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_NgSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](4608, null, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["ɵd"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["ɵd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 4964352, null, 12, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectComponent"], [[8, null], [8, null], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectConfig"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["SELECTION_MODEL_FACTORY"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["ɵs"]], { bindLabel: [0, "bindLabel"], searchable: [1, "searchable"], clearable: [2, "clearable"] }, { changeEvent: "change" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { optionTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { optgroupTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { labelTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { multiLabelTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, { headerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 6, { footerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 7, { notFoundTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 8, { typeToSearchTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 9, { loadingTextTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 10, { tagTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 11, { loadingSpinnerTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 12, { ngOptions: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_VenueComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 2, 0, currVal_0); var currVal_1 = "50"; _ck(_v, 3, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.currentVideoId, ""); var currVal_3 = "100%"; _ck(_v, 5, 0, currVal_2, currVal_3); var currVal_21 = "title"; var currVal_22 = false; var currVal_23 = false; _ck(_v, 8, 0, currVal_21, currVal_22, currVal_23); var currVal_24 = _co.currentVideoId; _ck(_v, 22, 0, currVal_24); var currVal_25 = _co.videos; _ck(_v, 26, 0, currVal_25); }, function (_ck, _v) { var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).useDefaultClass; var currVal_5 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).multiple; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).typeahead; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).multiple; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).addTag; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).searchable; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).clearable; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).isOpen; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).disabled; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).filtered; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassUntouched; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassTouched; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassPristine; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassDirty; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassValid; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassInvalid; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassPending; _ck(_v, 6, 1, [currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20]); }); }
function View_VenueComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 32, "div", [["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_VenueComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 17, "div", [["class", "container"], ["fxFlex", "100"], ["fxLayout", "row wrap"], ["fxLayout.xs", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 6, "div", [["class", "gd-container"], ["fxFlex", "1 1 33%"], ["fxFlex.sm", "1 1 50%"], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"], "fxFlex.sm": [1, "fxFlex.sm"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_VenueComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](13, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 5, "div", [["class", "gd-container"], ["fxFlex", "1 1 33%"], ["fxFlex.sm", "1 1 50%"], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"], "fxFlex.sm": [1, "fxFlex.sm"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 2, "img", [["class", "image"], ["fxFlex", "1 1 auto"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 1720320, null, 0, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_19__["LazyLoadImageDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, "options"]], { lazyImage: [0, "lazyImage"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_VenueComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_VenueComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 1, "p", [["class", "gd-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](25, null, ["All shows at the ", ":"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 1, "gd-shows", [], null, null, null, _shared_shows_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_ShowsComponent_0"], _shared_shows_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_ShowsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 114688, null, 0, _shared_shows_component__WEBPACK_IMPORTED_MODULE_21__["ShowsComponent"], [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]], { eventIds: [0, "eventIds"], onOptions: [1, "onOptions"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 1, "gd-comments", [], null, null, null, _comments_comments_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_CommentsComponent_0"], _comments_comments_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_CommentsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 114688, null, 0, _comments_comments_component__WEBPACK_IMPORTED_MODULE_23__["CommentsComponent"], [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_dialog_service__WEBPACK_IMPORTED_MODULE_24__["DialogService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { title: [0, "title"], userName: [1, "userName"], currentUserId: [2, "currentUserId"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 1, "gd-sharebuttons", [], null, null, null, _shared_sharebuttons_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_ShareButtonsComponent_0"], _shared_sharebuttons_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_ShareButtonsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](32, 114688, null, 0, _shared_sharebuttons_component__WEBPACK_IMPORTED_MODULE_26__["ShareButtonsComponent"], [], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.venue; _ck(_v, 3, 0, currVal_1); var currVal_2 = "row wrap"; var currVal_3 = "column"; _ck(_v, 5, 0, currVal_2, currVal_3); var currVal_4 = "100"; _ck(_v, 6, 0, currVal_4); var currVal_5 = "column"; _ck(_v, 8, 0, currVal_5); var currVal_6 = "1 1 33%"; var currVal_7 = "1 1 50%"; _ck(_v, 9, 0, currVal_6, currVal_7); var currVal_8 = _co.data.event; _ck(_v, 11, 0, currVal_8); var currVal_10 = "column"; _ck(_v, 15, 0, currVal_10); var currVal_11 = "1 1 33%"; var currVal_12 = "1 1 50%"; _ck(_v, 16, 0, currVal_11, currVal_12); var currVal_13 = "1 1 auto"; _ck(_v, 18, 0, currVal_13); var currVal_14 = _co.venue.thumbnail; _ck(_v, 19, 0, currVal_14); var currVal_15 = _co.venue.geoloc; _ck(_v, 21, 0, currVal_15); var currVal_16 = _co.videos; _ck(_v, 23, 0, currVal_16); var currVal_18 = _co.venue.eventIds; var currVal_19 = _co.openOptionsDialog.bind(_co); _ck(_v, 27, 0, currVal_18, currVal_19); var currVal_20 = ((_co.venue.name + ", ") + _co.location); var currVal_21 = _co.currentUser.userName; var currVal_22 = _co.currentUser.userId; _ck(_v, 29, 0, currVal_20, currVal_21, currVal_22); _ck(_v, 32, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_9 = _co.venue.comment; _ck(_v, 13, 0, currVal_9); var currVal_17 = _co.venue.name; _ck(_v, 25, 0, currVal_17); }); }
function View_VenueComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_VenueComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "p", [], [[4, "margin-bottom", null]], null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.venue; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = "75px"; _ck(_v, 2, 0, currVal_1); }); }
function View_VenueComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "gd-venue", [], null, null, null, View_VenueComponent_0, RenderType_VenueComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _venue_component__WEBPACK_IMPORTED_MODULE_27__["VenueComponent"], [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _services_dialog_service__WEBPACK_IMPORTED_MODULE_24__["DialogService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var VenueComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("gd-venue", _venue_component__WEBPACK_IMPORTED_MODULE_27__["VenueComponent"], View_VenueComponent_Host_0, {}, {}, []);



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");






console.log = function (s) {
    if (_config__WEBPACK_IMPORTED_MODULE_5__["DEBUG"]) {
        console.warn(s);
    }
    ;
};
class VenueComponent {
    constructor(data, router, route, auth, dialog) {
        this.data = data;
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.dialog = dialog;
        this.currentUser = { userName: '', userId: '' };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.auth.userProfile$.subscribe(userProfile => {
                if (userProfile) {
                    this.currentUser = {
                        userId: userProfile.sub.split("|")[1],
                        userName: userProfile['http://example.com/username']
                    };
                    gtag('set', { 'user_id': this.currentUser.userId });
                }
            });
            this.route.paramMap.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (params.has('id')) {
                    this.venue = yield this.data.getVenue(params.get('id'));
                }
                else {
                    this.router.navigate(['/mapselect'], { replaceUrl: true });
                }
                if (params.has('id') && this.venue.name) {
                    console.log(this.venue);
                    //this.venue = await this.data.getVenue(params.get('id'));
                    this.location = (yield this.data.getEventInfo(this.venue.eventIds[0])).location;
                    if (this.venue) {
                        this.videos = yield this.data.getYoutubeList(this.venue.id, ['Grateful Dead', this.location, this.venue.name]);
                        this.currentVideoId = this.videos[0].videoId;
                        console.log(this.videos);
                    }
                }
                else {
                    this.router.navigate(['/mapselect'], { replaceUrl: true });
                }
            }));
            /*
            this.route.paramMap.subscribe(async params => {
              if (params.has('id')) {
                this.venue = await this.data.getVenue(params.get('id'));
                this.location = (await this.data.getEventInfo(this.venue.eventIds[0])).location;
                if (this.venue) {
                  this.videos = await this.data.getYoutubeList(this.venue.id, ['Grateful Dead', this.location, this.venue.name]);
                  this.currentVideoId = this.videos[0].videoId;
                  console.log(this.videos);
                }
              }
              if (!this.venue) {
                this.router.navigate(['/venue', (await this.data.getRandomVenue()).id],
                  { replaceUrl: true });
              }
            }); */
        });
    }
    openOptionsDialog(event) {
        this.dialog.openMultiFunction(event.venue + ", " + event.date, ["Go to show", "Go to recording"], [() => this.router.navigate(['/show', event.id]),
            () => this.openRecordingsDialog(event)]);
    }
    openRecordingsDialog(event) {
        this.dialog.openMultiFunction("Recordings of '" + event.venue + ", " + event.date, event.recordings.map(r => r.etreeId), event.recordings.map(r => () => this.router.navigate(['/recording', r.id])));
    }
    selectVideo() {
        console.log(this.currentVideoId);
    }
}


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
const environment = {
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
            var props = result[i].item;         // fix: added .item
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map