"use strict";
(self["webpackChunkmatngular"] = self["webpackChunkmatngular"] || []).push([["src_app_page_page_module_ts"],{

/***/ 7733:
/*!*********************************************!*\
  !*** ./src/app/page/page-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageRoutingModule": function() { return /* binding */ PageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.component */ 1527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






var routes = [{
  path: '',
  component: _page_component__WEBPACK_IMPORTED_MODULE_2__.PageComponent,
  data: {
    title: 'Page'
  }
  // children: [
  //   {
  //     path: 'page',
  //     component: PageComponent,
  //     data: {
  //       title: 'Page'
  //     }
  //   }
  // ]
}];
var PageRoutingModule = /*#__PURE__*/(0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function PageRoutingModule() {
  (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PageRoutingModule);
});
PageRoutingModule.ɵfac = function PageRoutingModule_Factory(t) {
  return new (t || PageRoutingModule)();
};
PageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: PageRoutingModule
});
PageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 1527:
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageComponent": function() { return /* binding */ PageComponent; }
/* harmony export */ });
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 5365);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-swiper-wrapper */ 2858);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);







function PageComponent_ng_template_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Find Your Space");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Browse available storage or parking spots in your desired location.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Reserve Quickly");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Compare options, check details, and book securely in just a few clicks.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Access with Ease");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Enjoy flexible and affordable storage or parking, with the option to cancel anytime.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PageComponent_ng_template_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Start Earning Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "List your unused space and turn it into a steady income.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Take Full Control");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Decide who rents your space and what can be stored.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Feel Secure");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Host with confidence, backed by $1M in liability coverage.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PageComponent_ng_template_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Unlock Extra Income");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Maximize your unused parking and storage spaces by turning them into steady revenue.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Effortless Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "We connect you with pre-screened renters; you simply confirm and welcome them.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Hassle-Free Payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Get paid automatically every month, with detailed reports at your fingertips.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
var _c0 = function _c0() {
  return ["/dashboard/home"];
};
var _c1 = function _c1() {
  return ["/dashboard/storage/search-hosts"];
};
var _c2 = function _c2(a0, a1) {
  return {
    "fa-plus": a0,
    "fa-minus": a1
  };
};
var PageComponent = /*#__PURE__*/(0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function PageComponent() {
  (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PageComponent);
  this.active = 1; // Basic Navs
  this.isCollapsed1 = true;
  this.isCollapsed2 = true;
  this.isCollapsed3 = true;
  this.isCollapsed4 = true;
  this.isCollapsed5 = true;
  this.swiperAutoplayConfig = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };
});
PageComponent.ɵfac = function PageComponent_Factory(t) {
  return new (t || PageComponent)();
};
PageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PageComponent,
  selectors: [["app-page"]],
  decls: 334,
  vars: 40,
  consts: [[1, "home-section"], [1, "home-div"], [1, "header", "d-flex", "justify-content-between", "align-items-center", "px-3", "py-2", "bg-white", "rounded"], [1, "left-menu"], [1, "logo-div", "mr-2"], [1, "logo-text", "m-0", "text-bold-900", "font-large-1", "cursor-pointer", 3, "routerLink"], ["width", "30px", "src", "assets/img/icons/store-easy-icons/storage-icon.svg", "alt", ""], [1, "right-menu", "d-flex", "justify-content-between", "align-items-center", "p-2"], [1, "mr-2"], [1, "how-it-works-button-button", "cursor-pointer", "p-2", "rounded", "text-black"], [1, "find-storage-button", "cursor-pointer", "p-2", "rounded", "text-black", 3, "routerLink"], ["ngbDropdown", ""], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "storage-type-button", "text-black", "mr-2"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [1, "dropdown-item", "w-100"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "location-button", "mr-2", "text-black"], [1, "btn", "btn-outline-info"], [1, "title-and-banner-div", "p-5", "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "title-div"], [1, "text-white"], [1, "text-white", "mt-3"], [1, "search-bar", "mt-4"], ["action", "javascript:;"], [1, "page-search-input", "form-group", "position-relative", "m-0"], ["type", "search", "id", "searchbar", "placeholder", "Enter location", 1, "search-input-field", "form-control", "rounded-right", "form-control-lg", "shadow", "pl-4"], [1, "ft-map-pin", "map-pin-icon"], ["type", "button", 1, "btn", "btn-primary", "search-btn", "search-button", "rounded", "position-absolute"], [1, "d-none", "d-sm-block"], [1, "ft-search"], [1, "ft-search", "d-block", "d-sm-none"], [1, "store-or-park-div", "p-5"], [1, "text-center"], [1, "d-flex", "flex-wrap", "mt-4", "p-2"], [1, "item", "mb-3", "cursor-pointer", "d-flex", "flex-column", "justify-content-center", "align-items-center", "px-5", "py-4", "border", "rounded", "mr-3"], [1, "fa-solid", "fa-couch", "font-medium-3"], [1, "mt-1", "text-bold-600"], [1, "fa-solid", "fa-car-side", "font-medium-3"], [1, "fa-solid", "fa-trailer", "font-medium-3"], [1, "fa-solid", "fa-caravan", "font-medium-3"], [1, "fa-solid", "fa-sailboat", "font-medium-3"], [1, "fa-solid", "fa-truck", "font-medium-3"], [1, "fa-solid", "fa-truck-moving", "font-medium-3"], [1, "how-it-works-div", "p-5"], [1, ""], [1, "card-content"], [1, "card-body"], ["ngbNav", "", 1, "nav-tabs", "rounded", 3, "activeId", "activeIdChange"], ["basicnav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"], [1, "reviews"], ["id", "swiper-autoplay"], [1, "row"], [1, "col-12"], [1, "card", "p-0"], [1, "card-body", "p-0"], [1, "swiper-autoplay", "swiper-container", 3, "swiper"], [1, "swiper-wrapper"], [1, "swiper-slide", "swiper-slide-1"], [1, "p-5", "text-center", "text-white"], [1, "ratings-icons-div", "mb-4"], [1, "mb-2"], [1, "fa-solid", "fa-star", "rating-icon", "mr-1"], [1, "m-0", "text-white", "font-medium-3"], [1, "text-white", "m-0", "font-large-1", "mb-4"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "mr-3"], ["width", "60", "src", "assets/img/portrait/small/avatar-s-1.png", "alt", "", 1, "review-avatar"], [1, "m-0", "text-white", "font-medium-3", "text-bold-600", "text-center"], [1, "m-0", "text-white", "font-medium-1", "text-center"], [1, "swiper-slide", "swiper-slide-2"], ["width", "60", "src", "assets/img/portrait/small/avatar-s-5.png", "alt", "", 1, "review-avatar"], [1, "swiper-slide", "swiper-slide-3"], ["width", "60", "src", "assets/img/portrait/small/avatar-s-6.png", "alt", "", 1, "review-avatar"], [1, "swiper-slide", "swiper-slide-4"], ["width", "60", "src", "assets/img/portrait/small/avatar-s-3.png", "alt", "", 1, "review-avatar"], [1, "swiper-slide", "swiper-slide-5"], ["width", "60", "src", "assets/img/portrait/small/avatar-s-24.png", "alt", "", 1, "review-avatar"], [1, "swiper-slide", "swiper-slide-6"], ["width", "60", "src", "assets/img/portrait/small/avatar-s-11.png", "alt", "", 1, "review-avatar"], [1, "swiper-pagination"], [1, "swiper-button-next"], [1, "swiper-button-prev"], [1, "faq-div", "p-5"], [1, "m-0", "text-center", "mb-4"], [1, "card", "question-1"], ["aria-controls", "collapseExample1", 1, "card-body", "cursor-pointer", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "m-0"], [1, "font-large-1", "fa-solid", "text-bold-900", 3, "ngClass"], ["id", "collapseExample1", 1, "mt-2", 3, "ngbCollapse"], [1, "m-0", "font-medium-3"], [1, "card", "question-2"], ["aria-controls", "collapseExample2", 1, "card-body", "cursor-pointer", 3, "click"], ["id", "collapseExample2", 1, "mt-2", 3, "ngbCollapse"], [1, "card", "question-3"], ["aria-controls", "collapseExample3", 1, "card-body", "cursor-pointer", 3, "click"], ["id", "collapseExample3", 1, "mt-2", 3, "ngbCollapse"], [1, "card", "question-4"], ["aria-controls", "collapseExample4", 1, "card-body", "cursor-pointer", 3, "click"], ["id", "collapseExample4", 1, "mt-2", 3, "ngbCollapse"], [1, "card", "question-5"], ["aria-controls", "collapseExample5", 1, "card-body", "cursor-pointer", 3, "click"], ["id", "collapseExample5", 1, "mt-2", 3, "ngbCollapse"], [1, "pt-3"], [1, "d-flex", "align-items-center", "mb-4"], [1, "mr-4"], [1, "fa-solid", "fa-location-dot", "renting-icon-1", "font-large-1", "bg-white", "location-icon"], [1, "fa-solid", "fa-star", "renting-icon-2", "font-large-1", "bg-white", "location-icon"], [1, "d-flex", "align-items-center"], [1, "fa-solid", "fa-dollar-sign", "renting-icon-3", "font-large-1", "bg-white", "location-icon"], [1, "fa-solid", "fa-dollar-sign", "hosting-icon-1", "font-large-1", "bg-white", "location-icon"], [1, "fa-solid", "fa-circle-user", "hosting-icon-2", "font-large-1", "bg-white", "location-icon"], [1, "fa-solid", "fa-shield", "hosting-icon-3", "font-large-1", "bg-white", "location-icon"], [1, "fa-solid", "fa-dollar-sign", "business-icon-1", "font-large-1", "bg-white", "location-icon"], [1, "fa-solid", "fa-hand-sparkles", "business-icon-2", "font-large-1", "bg-white", "location-icon"], [1, "fa-solid", "fa-money-check-dollar", "business-icon-3", "font-large-1", "bg-white", "location-icon"]],
  template: function PageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Store Easy ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "How it works");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Find Storage ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Storage Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Self Storage");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Garages");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "RV Storage");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "RV Storage");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Boat Storage");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Car Storage");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Truck Parking");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Monthly Parking");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Long-term Parking");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Fleet Parking");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Locations");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Alberta");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "British Columbia");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Manitoba");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "New Brunswick");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Newfoundland and Labrador");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Nova Scotia");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Ontario");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Prince Edward Island");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Quebec");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Saskatchewan");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Become a Host");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "h1", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Store with Ease, Rent with Confidence.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "h5", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Affordable storage solutions near you. Flexible plans, no long-term commitment.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "form", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " Find storage");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "h1", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "What do you plan to store or park?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "span", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Items");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "span", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Vehicle");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "i", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "span", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Trailer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "i", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "span", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "RV/Camper");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "i", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "span", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Boat");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "i", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "span", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Oversized");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "i", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "span", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "Fleet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "How Store Easy works");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "ul", 46, 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activeIdChange", function PageComponent_Template_ul_activeIdChange_121_listener($event) {
        return ctx.active = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "li", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "a", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "Renting");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](126, PageComponent_ng_template_126_Template, 25, 0, "ng-template", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "li", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "a", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "Hosting");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](130, PageComponent_ng_template_130_Template, 25, 0, "ng-template", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "li", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "a", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Business");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](134, PageComponent_ng_template_134_Template, 25, 0, "ng-template", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](135, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "section", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "div", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "div", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](149, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](150, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](151, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](152, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](153, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "p", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](156, "5,000+ Reviews | 4.8/5 stars");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "p", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "\u201CStoring my boat was a breeze with Store Easy. The process was simple, and the host was great! 5 stars all the way!\u201D");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](161, "img", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "p", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "Liam Anderson");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "p", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, "Store Easy Renter");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "div", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "div", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](171, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](172, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](173, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](174, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](175, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "p", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "5,000+ Reviews | 4.8/5 stars");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "p", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](180, "\u201CFound a perfect parking spot near my workplace. Easy to book, no hassle at all.\u201D");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "div", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](183, "img", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "p", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](186, "John Ramirez");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "p", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "Store Easy Renter");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "div", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "div", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](193, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](194, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](195, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](196, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](197, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "p", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, "5,000+ Reviews | 4.8/5 stars");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "p", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](202, "\u201CStore Easy helped me make extra cash from my empty garage. Definitely recommend!\u201D");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "div", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](205, "img", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "p", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](208, "Sophia Harris");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "p", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](210, "Store Easy Renter");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "div", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "div", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](215, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](216, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](217, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](218, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](219, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](221, "p", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](222, "5,000+ Reviews | 4.8/5 stars");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "p", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](224, "\u201CSuper convenient platform to store my RV. Booking took minutes!\u201D");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](226, "div", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](227, "img", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](228, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "p", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](230, "Michael Nguyen");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "p", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](232, "Store Easy Renter");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](233, "div", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "div", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](236, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](237, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](238, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](239, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](240, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](241, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](242, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "p", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](244, "5,000+ Reviews | 4.8/5 stars");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "p", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](246, "\u201CExcellent service! I rented a space for storage, and everything went smoothly.\u201D");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](247, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](248, "div", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](249, "img", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](251, "p", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](252, "Lily Thompson");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](253, "p", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](254, "Store Easy Renter");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](255, "div", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](257, "div", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](258, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](259, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](260, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](261, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](262, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](263, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](264, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](265, "p", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](266, "5,000+ Reviews | 4.8/5 stars");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](267, "p", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](268, "\u201CSafe and reliable. Loved the seamless booking experience.\u201D");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](269, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](270, "div", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](271, "img", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](272, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](273, "p", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](274, "James Mitchell");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](275, "p", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](276, "Store Easy Renter");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](277, "div", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](278, "div", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](279, "div", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](280, "div", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](281, "h1", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](282, "Frequently asked questions");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](283, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](284, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](285, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](286, "div", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PageComponent_Template_div_click_286_listener() {
        return ctx.isCollapsed1 = !ctx.isCollapsed1;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](287, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](288, "h4", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](289, " What is Store Easy? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](290, "i", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](291, "div", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](292, "p", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](293, " Store Easy is a peer-to-peer marketplace that connects individuals in Canada looking for extra storage or parking space. From garages to driveways, you can easily find and rent a variety of spaces to suit your needs.With Store Easy, you can effortlessly search for and secure a location close to you. Enjoy the freedom of flexible rental terms without long-term commitments, and cancel your booking whenever necessary. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](294, "div", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](295, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](296, "div", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PageComponent_Template_div_click_296_listener() {
        return ctx.isCollapsed2 = !ctx.isCollapsed2;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](297, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](298, "h4", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](299, " How can I find the perfect space? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](300, "i", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](301, "div", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](302, "p", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](303, " Begin by exploring options in your local area. You can refine your search using various criteria, such as size, price, and whether you prefer indoor or outdoor spaces.If you need assistance in locating the ideal space, feel free to reach out to us at (123) 456-7890. We're here to help! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](304, "div", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](305, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](306, "div", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PageComponent_Template_div_click_306_listener() {
        return ctx.isCollapsed3 = !ctx.isCollapsed3;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](307, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](308, "h4", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](309, " How can I cancel my reservation? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](310, "i", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](311, "div", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](312, "p", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](313, " At Store Easy, we prioritize flexibility. Our process is straightforward, with no complicated contracts or long-term commitments. You can cancel your reservation online in just a few simple steps. Plus, there are no cancellation fees\u2014feel free to end your reservation whenever you need! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](314, "div", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](315, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](316, "div", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PageComponent_Template_div_click_316_listener() {
        return ctx.isCollapsed4 = !ctx.isCollapsed4;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](317, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](318, "h4", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](319, " Is Store Easy secure? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](320, "i", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](321, "div", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](322, "p", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](323, " Absolutely! At Store Easy, safety is a top priority. All hosts undergo identity verification, and each booking is backed by $1 million in liability coverage. Renters can also opt for additional protection with our property safeguard plans. While Store Easy locations are often more secure than traditional storage facilities, it\u2019s still essential to consider the area when choosing where to park or store your belongings. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](324, "div", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](325, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](326, "div", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PageComponent_Template_div_click_326_listener() {
        return ctx.isCollapsed5 = !ctx.isCollapsed5;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](327, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](328, "h4", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](329, " Can I live or work in the space I rent? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](330, "i", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](331, "div", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](332, "p", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](333, " No, Store Easy spaces are strictly for storage purposes. Living, working, or staying in any rented space is not allowed. Each host sets their own access hours, so if you need frequent access, be sure to review the specific policies of the space you're considering. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](122);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](23, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](24, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](108);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("activeId", ctx.active);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavItem", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavItem", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavItem", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavOutlet", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("swiper", ctx.swiperAutoplayConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](143);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](25, _c2, ctx.isCollapsed1, !ctx.isCollapsed1));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](28, _c2, ctx.isCollapsed2, !ctx.isCollapsed2));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](31, _c2, ctx.isCollapsed3, !ctx.isCollapsed3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](34, _c2, ctx.isCollapsed4, !ctx.isCollapsed4));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](37, _c2, ctx.isCollapsed5, !ctx.isCollapsed5));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed5);
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavOutlet, ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__.SwiperDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCollapse],
  styles: [".storage-type-button[_ngcontent-%COMP%]:hover {\n  border: 1px solid #E0E0E0 !important;\n  box-shadow: none;\n}\n\n.text-black[_ngcontent-%COMP%] {\n  color: #000000;\n}\n\n.find-storage-button[_ngcontent-%COMP%]:hover {\n  border: 1px solid #E0E0E0 !important;\n}\n\n.become-host-button[_ngcontent-%COMP%]:hover {\n  border: 1px solid #E0E0E0 !important;\n}\n\n.location-button[_ngcontent-%COMP%]:hover {\n  border: 1px solid #E0E0E0 !important;\n  box-shadow: none;\n}\n\n.how-it-works-button-button[_ngcontent-%COMP%]:hover {\n  border: 1px solid #E0E0E0 !important;\n}\n\n.logo-text[_ngcontent-%COMP%] {\n  color: #0079e1;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n.search-button[_ngcontent-%COMP%] {\n  right: 5px;\n  top: 5px;\n  white-space: nowrap;\n}\n\n.search-input-field[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n\n.map-pin-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  \n  top: 50%;\n  transform: translateY(-50%);\n  color: #aaa;\n  \n  font-size: 16px;\n}\n\n.title-and-banner-div[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(4, 9, 30, 0.5), rgba(4, 9, 30, 0.5)), url('background-image.png');\n  background-size: cover;\n  \n  background-position: center;\n  \n  background-repeat: no-repeat;\n  \n  height: 80vh;\n}\n\n.item[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n.item[_ngcontent-%COMP%]:hover {\n  border: 1px solid #2F8BE6 !important;\n}\n\n.how-it-works-div[_ngcontent-%COMP%] {\n  background-color: #D6E1F3;\n}\n\n.nav-tabs[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 5px;\n  display: inline-flex;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #226CC5;\n  background-color: #D6E1F3;\n  border-radius: 5px;\n  border: none;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #17102F;\n  font-weight: 600;\n}\n\n.renting-icon-1[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  padding: 20px 25px;\n}\n\n.renting-icon-2[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  padding: 21px 20px;\n}\n\n.renting-icon-3[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  padding: 20px 27px;\n}\n\n.hosting-icon-1[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  padding: 20px 27px;\n}\n\n.hosting-icon-2[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  padding: 20px 20px;\n}\n\n.hosting-icon-3[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  padding: 20px 20px;\n}\n\n.business-icon-1[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  padding: 20px 27px;\n}\n\n.business-icon-2[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  padding: 22px 20px;\n}\n\n.business-icon-3[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  padding: 21px 20px;\n}\n\n.swiper-slide-1[_ngcontent-%COMP%], .swiper-slide-3[_ngcontent-%COMP%], .swiper-slide-5[_ngcontent-%COMP%] {\n  background-color: #2F8BE6;\n}\n\n.swiper-slide-2[_ngcontent-%COMP%], .swiper-slide-4[_ngcontent-%COMP%], .swiper-slide-6[_ngcontent-%COMP%] {\n  background-color: #0E3885;\n}\n\n.rating-icon[_ngcontent-%COMP%] {\n  color: #FFD700;\n  font-size: 25px;\n}\n\n.review-avatar[_ngcontent-%COMP%] {\n  border: 2px solid #fff;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDSSxvQ0FBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0FBQ0o7O0FBTUE7RUFFSSxjQUFBO0FBSko7O0FBT0E7RUFFSSxVQUFBO0FBTEo7O0FBUUE7RUFDSSxVQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBUUE7RUFDSSx5QkFBQTtBQUxKOztBQVFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQVksZ0NBQUE7RUFDWixRQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQWEsZUFBQTtFQUNiLGVBQUE7QUFISjs7QUFNQTtFQUVJLGtIQUFBO0VBQ0Esc0JBQUE7RUFBd0IsNENBQUE7RUFDeEIsMkJBQUE7RUFBNkIsc0JBQUE7RUFDN0IsNEJBQUE7RUFBOEIsaUNBQUE7RUFDOUIsWUFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtBQURKOztBQUlBO0VBQ0ksb0NBQUE7QUFESjs7QUFJQTtFQUNJLHlCQUFBO0FBREo7O0FBSUE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLHlCQUFBO0FBREo7O0FBSUE7RUFDSSx5QkFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUFESiIsImZpbGUiOiJwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0b3JhZ2UtdHlwZS1idXR0b246aG92ZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4udGV4dC1ibGFja3tcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLmZpbmQtc3RvcmFnZS1idXR0b246aG92ZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZWNvbWUtaG9zdC1idXR0b246aG92ZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2NhdGlvbi1idXR0b246aG92ZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uaG93LWl0LXdvcmtzLWJ1dHRvbi1idXR0b246aG92ZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIC50aXRsZS1hbmQtYmFubmVyLWRpdntcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNENkUxRjM7XHJcbi8vIH1cclxuXHJcbi5sb2dvLXRleHR7XHJcbiAgICAvLyBjb2xvcjojMjI2Q0M1O1xyXG4gICAgY29sb3I6ICMwMDc5ZTE7XHJcbn1cclxuXHJcbi5zZWFyY2gtYmFye1xyXG4gICAgLy8gd2lkdGg6NzAwcHg7XHJcbiAgICB3aWR0aDo3NSU7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnV0dG9ue1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dC1maWVsZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5tYXAtcGluLWljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMHB4OyAvKiBBZGp1c3QgYmFzZWQgb24geW91ciBkZXNpZ24gKi9cclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgY29sb3I6ICNhYWE7IC8qIEljb24gY29sb3IgKi9cclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG59XHJcblxyXG4udGl0bGUtYW5kLWJhbm5lci1kaXYge1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9pY29ucy9zdG9yZS1lYXN5LWljb25zL2JhY2tncm91bmQtaW1hZ2UucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDQsIDksIDMwLCAwLjUpLCByZ2JhKDQsIDksIDMwLCAwLjUpKSwgdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9pY29ucy9zdG9yZS1lYXN5LWljb25zL2JhY2tncm91bmQtaW1hZ2UucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogRW5zdXJlcyB0aGUgaW1hZ2UgY292ZXJzIHRoZSBlbnRpcmUgZGl2ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlcnMgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBQcmV2ZW50cyByZXBlYXRpbmcgdGhlIGltYWdlICovXHJcbiAgICBoZWlnaHQ6ODB2aDtcclxufVxyXG5cclxuLml0ZW17XHJcbiAgICB3aWR0aDo1MHB4O1xyXG59XHJcblxyXG4uaXRlbTpob3ZlcntcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzJGOEJFNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaG93LWl0LXdvcmtzLWRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNENkUxRjM7XHJcbn1cclxuXHJcbi5uYXYtdGFic3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmV7XHJcbiAgICBjb2xvcjogIzIyNkNDNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNENkUxRjM7XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG59XHJcblxyXG4ubmF2LXRhYnMgLm5hdi1saW5re1xyXG4gICAgY29sb3I6ICMxNzEwMkY7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbn1cclxuXHJcbi5yZW50aW5nLWljb24tMXtcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgcGFkZGluZzoyMHB4IDI1cHg7XHJcbn1cclxuXHJcbi5yZW50aW5nLWljb24tMntcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgcGFkZGluZzoyMXB4IDIwcHg7XHJcbn1cclxuXHJcbi5yZW50aW5nLWljb24tM3tcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgcGFkZGluZzoyMHB4IDI3cHg7XHJcbn1cclxuXHJcbi5ob3N0aW5nLWljb24tMXtcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgcGFkZGluZzoyMHB4IDI3cHg7XHJcbn1cclxuXHJcbi5ob3N0aW5nLWljb24tMntcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgcGFkZGluZzoyMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5ob3N0aW5nLWljb24tM3tcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgcGFkZGluZzoyMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5idXNpbmVzcy1pY29uLTF7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgIHBhZGRpbmc6MjBweCAyN3B4O1xyXG59XHJcblxyXG4uYnVzaW5lc3MtaWNvbi0ye1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICBwYWRkaW5nOjIycHggMjBweDtcclxufVxyXG5cclxuLmJ1c2luZXNzLWljb24tM3tcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgcGFkZGluZzoyMXB4IDIwcHg7XHJcbn1cclxuXHJcbi5zd2lwZXItc2xpZGUtMSwuc3dpcGVyLXNsaWRlLTMsLnN3aXBlci1zbGlkZS01e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJGOEJFNjtcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZS0yLC5zd2lwZXItc2xpZGUtNCwuc3dpcGVyLXNsaWRlLTZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEUzODg1O1xyXG59XHJcblxyXG4ucmF0aW5nLWljb257XHJcbiAgICBjb2xvcjojRkZENzAwO1xyXG4gICAgZm9udC1zaXplOjI1cHg7XHJcbn1cclxuXHJcbi5yZXZpZXctYXZhdGFye1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"]
});

/***/ }),

/***/ 5115:
/*!*************************************!*\
  !*** ./src/app/page/page.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageModule": function() { return /* binding */ PageModule; }
/* harmony export */ });
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-routing.module */ 7733);
/* harmony import */ var _page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.component */ 1527);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 5365);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-swiper-wrapper */ 2858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);








var PageModule = /*#__PURE__*/(0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function PageModule() {
  (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PageModule);
});
PageModule.ɵfac = function PageModule_Factory(t) {
  return new (t || PageModule)();
};
PageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: PageModule
});
PageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _page_routing_module__WEBPACK_IMPORTED_MODULE_2__.PageRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__.SwiperModule]]]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PageModule, {
    declarations: [_page_component__WEBPACK_IMPORTED_MODULE_3__.PageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _page_routing_module__WEBPACK_IMPORTED_MODULE_2__.PageRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__.SwiperModule]
  });
})();

/***/ }),

/***/ 5276:
/*!***************************************!*\
  !*** ./node_modules/dom7/dom7.esm.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ $; },
/* harmony export */   "add": function() { return /* binding */ add; },
/* harmony export */   "addClass": function() { return /* binding */ addClass; },
/* harmony export */   "animate": function() { return /* binding */ animate; },
/* harmony export */   "animationEnd": function() { return /* binding */ animationEnd; },
/* harmony export */   "append": function() { return /* binding */ append; },
/* harmony export */   "appendTo": function() { return /* binding */ appendTo; },
/* harmony export */   "attr": function() { return /* binding */ attr; },
/* harmony export */   "blur": function() { return /* binding */ blur; },
/* harmony export */   "change": function() { return /* binding */ change; },
/* harmony export */   "children": function() { return /* binding */ children; },
/* harmony export */   "click": function() { return /* binding */ click; },
/* harmony export */   "closest": function() { return /* binding */ closest; },
/* harmony export */   "css": function() { return /* binding */ css; },
/* harmony export */   "data": function() { return /* binding */ data; },
/* harmony export */   "dataset": function() { return /* binding */ dataset; },
/* harmony export */   "detach": function() { return /* binding */ detach; },
/* harmony export */   "each": function() { return /* binding */ each; },
/* harmony export */   "empty": function() { return /* binding */ empty; },
/* harmony export */   "eq": function() { return /* binding */ eq; },
/* harmony export */   "filter": function() { return /* binding */ filter; },
/* harmony export */   "find": function() { return /* binding */ find; },
/* harmony export */   "focus": function() { return /* binding */ focus; },
/* harmony export */   "focusin": function() { return /* binding */ focusin; },
/* harmony export */   "focusout": function() { return /* binding */ focusout; },
/* harmony export */   "hasClass": function() { return /* binding */ hasClass; },
/* harmony export */   "height": function() { return /* binding */ height; },
/* harmony export */   "hide": function() { return /* binding */ hide; },
/* harmony export */   "html": function() { return /* binding */ html; },
/* harmony export */   "index": function() { return /* binding */ index; },
/* harmony export */   "insertAfter": function() { return /* binding */ insertAfter; },
/* harmony export */   "insertBefore": function() { return /* binding */ insertBefore; },
/* harmony export */   "is": function() { return /* binding */ is; },
/* harmony export */   "keydown": function() { return /* binding */ keydown; },
/* harmony export */   "keypress": function() { return /* binding */ keypress; },
/* harmony export */   "keyup": function() { return /* binding */ keyup; },
/* harmony export */   "mousedown": function() { return /* binding */ mousedown; },
/* harmony export */   "mouseenter": function() { return /* binding */ mouseenter; },
/* harmony export */   "mouseleave": function() { return /* binding */ mouseleave; },
/* harmony export */   "mousemove": function() { return /* binding */ mousemove; },
/* harmony export */   "mouseout": function() { return /* binding */ mouseout; },
/* harmony export */   "mouseover": function() { return /* binding */ mouseover; },
/* harmony export */   "mouseup": function() { return /* binding */ mouseup; },
/* harmony export */   "next": function() { return /* binding */ next; },
/* harmony export */   "nextAll": function() { return /* binding */ nextAll; },
/* harmony export */   "off": function() { return /* binding */ off; },
/* harmony export */   "offset": function() { return /* binding */ offset; },
/* harmony export */   "on": function() { return /* binding */ on; },
/* harmony export */   "once": function() { return /* binding */ once; },
/* harmony export */   "outerHeight": function() { return /* binding */ outerHeight; },
/* harmony export */   "outerWidth": function() { return /* binding */ outerWidth; },
/* harmony export */   "parent": function() { return /* binding */ parent; },
/* harmony export */   "parents": function() { return /* binding */ parents; },
/* harmony export */   "prepend": function() { return /* binding */ prepend; },
/* harmony export */   "prependTo": function() { return /* binding */ prependTo; },
/* harmony export */   "prev": function() { return /* binding */ prev; },
/* harmony export */   "prevAll": function() { return /* binding */ prevAll; },
/* harmony export */   "prop": function() { return /* binding */ prop; },
/* harmony export */   "remove": function() { return /* binding */ remove; },
/* harmony export */   "removeAttr": function() { return /* binding */ removeAttr; },
/* harmony export */   "removeClass": function() { return /* binding */ removeClass; },
/* harmony export */   "removeData": function() { return /* binding */ removeData; },
/* harmony export */   "resize": function() { return /* binding */ resize; },
/* harmony export */   "scroll": function() { return /* binding */ scroll; },
/* harmony export */   "scrollLeft": function() { return /* binding */ scrollLeft; },
/* harmony export */   "scrollTo": function() { return /* binding */ scrollTo; },
/* harmony export */   "scrollTop": function() { return /* binding */ scrollTop; },
/* harmony export */   "show": function() { return /* binding */ show; },
/* harmony export */   "siblings": function() { return /* binding */ siblings; },
/* harmony export */   "stop": function() { return /* binding */ stop; },
/* harmony export */   "styles": function() { return /* binding */ styles; },
/* harmony export */   "submit": function() { return /* binding */ submit; },
/* harmony export */   "text": function() { return /* binding */ text; },
/* harmony export */   "toggleClass": function() { return /* binding */ toggleClass; },
/* harmony export */   "touchend": function() { return /* binding */ touchend; },
/* harmony export */   "touchmove": function() { return /* binding */ touchmove; },
/* harmony export */   "touchstart": function() { return /* binding */ touchstart; },
/* harmony export */   "transform": function() { return /* binding */ transform; },
/* harmony export */   "transition": function() { return /* binding */ transition; },
/* harmony export */   "transitionEnd": function() { return /* binding */ transitionEnd; },
/* harmony export */   "trigger": function() { return /* binding */ trigger; },
/* harmony export */   "val": function() { return /* binding */ val; },
/* harmony export */   "value": function() { return /* binding */ value; },
/* harmony export */   "width": function() { return /* binding */ width; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ 514);
/**
 * Dom7 3.0.0
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: November 9, 2020
 */

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/* eslint-disable no-proto */
function makeReactive(obj) {
  var proto = obj.__proto__;
  Object.defineProperty(obj, '__proto__', {
    get: function get() {
      return proto;
    },
    set: function set(value) {
      proto.__proto__ = value;
    }
  });
}
var Dom7 = /*#__PURE__*/function (_Array) {
  _inheritsLoose(Dom7, _Array);
  function Dom7(items) {
    var _this;
    _this = _Array.call.apply(_Array, [this].concat(items)) || this;
    makeReactive(_assertThisInitialized(_this));
    return _this;
  }
  return Dom7;
}(/*#__PURE__*/_wrapNativeSuper(Array));
function arrayFlat(arr) {
  if (arr === void 0) {
    arr = [];
  }
  var res = [];
  arr.forEach(function (el) {
    if (Array.isArray(el)) {
      res.push.apply(res, arrayFlat(el));
    } else {
      res.push(el);
    }
  });
  return res;
}
function arrayFilter(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
  var uniqueArray = [];
  for (var i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }
  return uniqueArray;
}
function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, function (match, group) {
    return group.toUpperCase();
  });
}
function qsa(selector, context) {
  if (typeof selector !== 'string') {
    return [selector];
  }
  var a = [];
  var res = context.querySelectorAll(selector);
  for (var i = 0; i < res.length; i += 1) {
    a.push(res[i]);
  }
  return a;
}
function $(selector, context) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var arr = [];
  if (!context && selector instanceof Dom7) {
    return selector;
  }
  if (!selector) {
    return new Dom7(arr);
  }
  if (typeof selector === 'string') {
    var html = selector.trim();
    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
      var toCreate = 'div';
      if (html.indexOf('<li') === 0) toCreate = 'ul';
      if (html.indexOf('<tr') === 0) toCreate = 'tbody';
      if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
      if (html.indexOf('<tbody') === 0) toCreate = 'table';
      if (html.indexOf('<option') === 0) toCreate = 'select';
      var tempParent = document.createElement(toCreate);
      tempParent.innerHTML = html;
      for (var i = 0; i < tempParent.childNodes.length; i += 1) {
        arr.push(tempParent.childNodes[i]);
      }
    } else {
      arr = qsa(selector.trim(), context || document);
    } // arr = qsa(selector, document);
  } else if (selector.nodeType || selector === window || selector === document) {
    arr.push(selector);
  } else if (Array.isArray(selector)) {
    if (selector instanceof Dom7) return selector;
    arr = selector;
  }
  return new Dom7(arrayUnique(arr));
}
$.fn = Dom7.prototype;
function addClass() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }
  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    var _el$classList;
    (_el$classList = el.classList).add.apply(_el$classList, classNames);
  });
  return this;
}
function removeClass() {
  for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    classes[_key2] = arguments[_key2];
  }
  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    var _el$classList2;
    (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
  });
  return this;
}
function toggleClass() {
  for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    classes[_key3] = arguments[_key3];
  }
  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    classNames.forEach(function (className) {
      el.classList.toggle(className);
    });
  });
}
function hasClass() {
  for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    classes[_key4] = arguments[_key4];
  }
  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  return arrayFilter(this, function (el) {
    return classNames.filter(function (className) {
      return el.classList.contains(className);
    }).length > 0;
  }).length > 0;
}
function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  } // Set attrs

  for (var i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      for (var attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }
  return this;
}
function removeAttr(attr) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }
  return this;
}
function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        for (var propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }
    return this;
  }
  return this;
}
function data(key, value) {
  var el;
  if (typeof value === 'undefined') {
    el = this[0];
    if (!el) return undefined; // Get value

    if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
      return el.dom7ElementDataStorage[key];
    }
    var dataKey = el.getAttribute("data-" + key);
    if (dataKey) {
      return dataKey;
    }
    return undefined;
  } // Set value

  for (var i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }
  return this;
}
function removeData(key) {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];
    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}
function dataset() {
  var el = this[0];
  if (!el) return undefined;
  var dataset = {}; // eslint-disable-line

  if (el.dataset) {
    for (var dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (var i = 0; i < el.attributes.length; i += 1) {
      var _attr = el.attributes[i];
      if (_attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(_attr.name.split('data-')[1])] = _attr.value;
      }
    }
  }
  for (var key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }
  return dataset;
}
function val(value) {
  if (typeof value === 'undefined') {
    // get value
    var el = this[0];
    if (!el) return undefined;
    if (el.multiple && el.nodeName.toLowerCase() === 'select') {
      var values = [];
      for (var i = 0; i < el.selectedOptions.length; i += 1) {
        values.push(el.selectedOptions[i].value);
      }
      return values;
    }
    return el.value;
  } // set value

  for (var _i = 0; _i < this.length; _i += 1) {
    var _el = this[_i];
    if (Array.isArray(value) && _el.multiple && _el.nodeName.toLowerCase() === 'select') {
      for (var j = 0; j < _el.options.length; j += 1) {
        _el.options[j].selected = value.indexOf(_el.options[j].value) >= 0;
      }
    } else {
      _el.value = value;
    }
  }
  return this;
}
function value(value) {
  return this.val(value);
}
function transform(transform) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.transform = transform;
  }
  return this;
}
function transition(duration) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.transitionDuration = typeof duration !== 'string' ? duration + "ms" : duration;
  }
  return this;
}
function on() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }
  var eventType = args[0],
    targetSelector = args[1],
    listener = args[2],
    capture = args[3];
  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }
  if (!capture) capture = false;
  function handleLiveEvent(e) {
    var target = e.target;
    if (!target) return;
    var eventData = e.target.dom7EventData || [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
      var _parents = $(target).parents(); // eslint-disable-line

      for (var k = 0; k < _parents.length; k += 1) {
        if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
      }
    }
  }
  function handleEvent(e) {
    var eventData = e && e.target ? e.target.dom7EventData || [] : [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    listener.apply(this, eventData);
  }
  var events = eventType.split(' ');
  var j;
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];
    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        var event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener: listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        var _event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];
        el.dom7LiveListeners[_event].push({
          listener: listener,
          proxyListener: handleLiveEvent
        });
        el.addEventListener(_event, handleLiveEvent, capture);
      }
    }
  }
  return this;
}
function off() {
  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }
  var eventType = args[0],
    targetSelector = args[1],
    listener = args[2],
    capture = args[3];
  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }
  if (!capture) capture = false;
  var events = eventType.split(' ');
  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];
    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      var handlers = void 0;
      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }
      if (handlers && handlers.length) {
        for (var k = handlers.length - 1; k >= 0; k -= 1) {
          var handler = handlers[k];
          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }
  return this;
}
function once() {
  var dom = this;
  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }
  var eventName = args[0],
    targetSelector = args[1],
    listener = args[2],
    capture = args[3];
  if (typeof args[1] === 'function') {
    eventName = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }
  function onceHandler() {
    for (var _len8 = arguments.length, eventArgs = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      eventArgs[_key8] = arguments[_key8];
    }
    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);
    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }
  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}
function trigger() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    args[_key9] = arguments[_key9];
  }
  var events = args[0].split(' ');
  var eventData = args[1];
  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];
    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      if (window.CustomEvent) {
        var evt = new window.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
        el.dom7EventData = args.filter(function (data, dataIndex) {
          return dataIndex > 0;
        });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
  }
  return this;
}
function transitionEnd(callback) {
  var dom = this;
  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('transitionend', fireCallBack);
  }
  if (callback) {
    dom.on('transitionend', fireCallBack);
  }
  return this;
}
function animationEnd(callback) {
  var dom = this;
  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('animationend', fireCallBack);
  }
  if (callback) {
    dom.on('animationend', fireCallBack);
  }
  return this;
}
function width() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  if (this[0] === window) {
    return window.innerWidth;
  }
  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }
  return null;
}
function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      var _styles = this.styles();
      return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
    }
    return this[0].offsetWidth;
  }
  return null;
}
function height() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  if (this[0] === window) {
    return window.innerHeight;
  }
  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }
  return null;
}
function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      var _styles2 = this.styles();
      return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
    }
    return this[0].offsetHeight;
  }
  return null;
}
function offset() {
  if (this.length > 0) {
    var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    var el = this[0];
    var box = el.getBoundingClientRect();
    var body = document.body;
    var clientTop = el.clientTop || body.clientTop || 0;
    var clientLeft = el.clientLeft || body.clientLeft || 0;
    var scrollTop = el === window ? window.scrollY : el.scrollTop;
    var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }
  return null;
}
function hide() {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }
  return this;
}
function show() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];
    if (el.style.display === 'none') {
      el.style.display = '';
    }
    if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }
  return this;
}
function styles() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  if (this[0]) return window.getComputedStyle(this[0], null);
  return {};
}
function css(props, value) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var i;
  if (arguments.length === 1) {
    if (typeof props === 'string') {
      // .css('width')
      if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      // .css({ width: '100px' })
      for (i = 0; i < this.length; i += 1) {
        for (var _prop in props) {
          this[i].style[_prop] = props[_prop];
        }
      }
      return this;
    }
  }
  if (arguments.length === 2 && typeof props === 'string') {
    // .css('width', '100px')
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }
    return this;
  }
  return this;
}
function each(callback) {
  if (!callback) return this;
  this.forEach(function (el, index) {
    callback.apply(el, [el, index]);
  });
  return this;
}
function filter(callback) {
  var result = arrayFilter(this, callback);
  return $(result);
}
function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : null;
  }
  for (var i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }
  return this;
}
function text(text) {
  if (typeof text === 'undefined') {
    return this[0] ? this[0].textContent.trim() : null;
  }
  for (var i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }
  return this;
}
function is(selector) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var el = this[0];
  var compareWith;
  var i;
  if (!el || typeof selector === 'undefined') return false;
  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);
    if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    if (el.msMatchesSelector) return el.msMatchesSelector(selector);
    compareWith = $(selector);
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }
    return false;
  }
  if (selector === document) {
    return el === document;
  }
  if (selector === window) {
    return el === window;
  }
  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }
    return false;
  }
  return false;
}
function index() {
  var child = this[0];
  var i;
  if (child) {
    i = 0; // eslint-disable-next-line

    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
function eq(index) {
  if (typeof index === 'undefined') return this;
  var length = this.length;
  if (index > length - 1) {
    return $([]);
  }
  if (index < 0) {
    var returnIndex = length + index;
    if (returnIndex < 0) return $([]);
    return $([this[returnIndex]]);
  }
  return $([this[index]]);
}
function append() {
  var newChild;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  for (var k = 0; k < arguments.length; k += 1) {
    newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];
    for (var i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;
        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (var j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }
  return this;
}
function appendTo(parent) {
  $(parent).append(this);
  return this;
}
function prepend(newChild) {
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var i;
  var j;
  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = newChild;
      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }
  return this;
}
function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}
function insertBefore(selector) {
  var before = $(selector);
  for (var i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (var j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}
function insertAfter(selector) {
  var after = $(selector);
  for (var i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (var j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}
function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return $([this[0].nextElementSibling]);
      }
      return $([]);
    }
    if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
    return $([]);
  }
  return $([]);
}
function nextAll(selector) {
  var nextEls = [];
  var el = this[0];
  if (!el) return $([]);
  while (el.nextElementSibling) {
    var _next = el.nextElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_next).is(selector)) nextEls.push(_next);
    } else nextEls.push(_next);
    el = _next;
  }
  return $(nextEls);
}
function prev(selector) {
  if (this.length > 0) {
    var el = this[0];
    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return $([el.previousElementSibling]);
      }
      return $([]);
    }
    if (el.previousElementSibling) return $([el.previousElementSibling]);
    return $([]);
  }
  return $([]);
}
function prevAll(selector) {
  var prevEls = [];
  var el = this[0];
  if (!el) return $([]);
  while (el.previousElementSibling) {
    var _prev = el.previousElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_prev).is(selector)) prevEls.push(_prev);
    } else prevEls.push(_prev);
    el = _prev;
  }
  return $(prevEls);
}
function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}
function parent(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }
  return $(parents);
}
function parents(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var _parent = this[i].parentNode; // eslint-disable-line

    while (_parent) {
      if (selector) {
        if ($(_parent).is(selector)) parents.push(_parent);
      } else {
        parents.push(_parent);
      }
      _parent = _parent.parentNode;
    }
  }
  return $(parents);
}
function closest(selector) {
  var closest = this; // eslint-disable-line

  if (typeof selector === 'undefined') {
    return $([]);
  }
  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }
  return closest;
}
function find(selector) {
  var foundElements = [];
  for (var i = 0; i < this.length; i += 1) {
    var found = this[i].querySelectorAll(selector);
    for (var j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }
  return $(foundElements);
}
function children(selector) {
  var children = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var childNodes = this[i].children;
    for (var j = 0; j < childNodes.length; j += 1) {
      if (!selector || $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }
  return $(children);
}
function remove() {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }
  return this;
}
function detach() {
  return this.remove();
}
function add() {
  var dom = this;
  var i;
  var j;
  for (var _len10 = arguments.length, els = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    els[_key10] = arguments[_key10];
  }
  for (i = 0; i < els.length; i += 1) {
    var toAdd = $(els[i]);
    for (j = 0; j < toAdd.length; j += 1) {
      dom.push(toAdd[j]);
    }
  }
  return dom;
}
function empty() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];
    if (el.nodeType === 1) {
      for (var j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }
      el.textContent = '';
    }
  }
  return this;
}
function scrollTo() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var left = args[0],
    top = args[1],
    duration = args[2],
    easing = args[3],
    callback = args[4];
  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    left = args[0];
    top = args[1];
    duration = args[2];
    callback = args[3];
    easing = args[4];
  }
  if (typeof easing === 'undefined') easing = 'swing';
  return this.each(function animate() {
    var el = this;
    var currentTop;
    var currentLeft;
    var maxTop;
    var maxLeft;
    var newTop;
    var newLeft;
    var scrollTop; // eslint-disable-line

    var scrollLeft; // eslint-disable-line

    var animateTop = top > 0 || top === 0;
    var animateLeft = left > 0 || left === 0;
    if (typeof easing === 'undefined') {
      easing = 'swing';
    }
    if (animateTop) {
      currentTop = el.scrollTop;
      if (!duration) {
        el.scrollTop = top;
      }
    }
    if (animateLeft) {
      currentLeft = el.scrollLeft;
      if (!duration) {
        el.scrollLeft = left;
      }
    }
    if (!duration) return;
    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }
    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }
    var startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;
    function render(time) {
      if (time === void 0) {
        time = new Date().getTime();
      }
      if (startTime === null) {
        startTime = time;
      }
      var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      var easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      var done;
      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);
      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }
      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }
      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }
      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }
      if (done) {
        if (callback) callback();
        return;
      }
      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      window.requestAnimationFrame(render);
    }
    window.requestAnimationFrame(render);
  });
} // scrollTop(top, duration, easing, callback) {

function scrollTop() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  var top = args[0],
    duration = args[1],
    easing = args[2],
    callback = args[3];
  if (args.length === 3 && typeof easing === 'function') {
    top = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }
  var dom = this;
  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }
  return dom.scrollTo(undefined, top, duration, easing, callback);
}
function scrollLeft() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }
  var left = args[0],
    duration = args[1],
    easing = args[2],
    callback = args[3];
  if (args.length === 3 && typeof easing === 'function') {
    left = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }
  var dom = this;
  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }
  return dom.scrollTo(left, undefined, duration, easing, callback);
}
function animate(initialProps, initialParams) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var els = this;
  var a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing' // or 'linear'

      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */
    }, initialParams),
    elements: els,
    animating: false,
    que: [],
    easingProgress: function easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      }
      if (typeof easing === 'function') {
        return easing(progress);
      }
      return progress;
    },
    stop: function stop() {
      if (a.frameId) {
        window.cancelAnimationFrame(a.frameId);
      }
      a.animating = false;
      a.elements.each(function (el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },
    done: function done(complete) {
      a.animating = false;
      a.elements.each(function (el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);
      if (a.que.length > 0) {
        var que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate: function animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }
      var elements = []; // Define & Cache Initials & Units

      a.elements.each(function (el, index) {
        var initialFullValue;
        var initialValue;
        var unit;
        var finalValue;
        var finalFullValue;
        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
        elements[index] = {
          container: el
        };
        Object.keys(props).forEach(function (prop) {
          initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue: initialFullValue,
            initialValue: initialValue,
            unit: unit,
            finalValue: finalValue,
            finalFullValue: finalFullValue,
            currentValue: initialValue
          };
        });
      });
      var startTime = null;
      var time;
      var elementsDone = 0;
      var propsDone = 0;
      var done;
      var began = false;
      a.animating = true;
      function render() {
        time = new Date().getTime();
        var progress;
        var easeProgress; // let el;

        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }
        if (startTime === null) {
          startTime = time;
        }
        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }
        elements.forEach(function (element) {
          var el = element;
          if (done || el.done) return;
          Object.keys(props).forEach(function (prop) {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            var _el$prop = el[prop],
              initialValue = _el$prop.initialValue,
              finalValue = _el$prop.finalValue,
              unit = _el$prop.unit;
            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
            var currentValue = el[prop].currentValue;
            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;
              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }
              if (elementsDone === elements.length) {
                done = true;
              }
            }
            if (done) {
              a.done(params.complete);
              return;
            }
            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return; // Then call

        a.frameId = window.requestAnimationFrame(render);
      }
      a.frameId = window.requestAnimationFrame(render);
      return a;
    }
  };
  if (a.elements.length === 0) {
    return els;
  }
  var animateInstance;
  for (var i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }
  if (!animateInstance) {
    animateInstance = a;
  }
  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }
  return els;
}
function stop() {
  var els = this;
  for (var i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}
var noTrigger = 'resize scroll'.split(' ');
function shortcut(name) {
  function eventHandler() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (typeof args[0] === 'undefined') {
      for (var i = 0; i < this.length; i += 1) {
        if (noTrigger.indexOf(name) < 0) {
          if (name in this[i]) this[i][name]();else {
            $(this[i]).trigger(name);
          }
        }
      }
      return this;
    }
    return this.on.apply(this, [name].concat(args));
  }
  return eventHandler;
}
var click = shortcut('click');
var blur = shortcut('blur');
var focus = shortcut('focus');
var focusin = shortcut('focusin');
var focusout = shortcut('focusout');
var keyup = shortcut('keyup');
var keydown = shortcut('keydown');
var keypress = shortcut('keypress');
var submit = shortcut('submit');
var change = shortcut('change');
var mousedown = shortcut('mousedown');
var mousemove = shortcut('mousemove');
var mouseup = shortcut('mouseup');
var mouseenter = shortcut('mouseenter');
var mouseleave = shortcut('mouseleave');
var mouseout = shortcut('mouseout');
var mouseover = shortcut('mouseover');
var touchstart = shortcut('touchstart');
var touchend = shortcut('touchend');
var touchmove = shortcut('touchmove');
var resize = shortcut('resize');
var scroll = shortcut('scroll');
/* harmony default export */ __webpack_exports__["default"] = ($);


/***/ }),

/***/ 2858:
/*!************************************************************************!*\
  !*** ./node_modules/ngx-swiper-wrapper/fesm2015/ngx-swiper-wrapper.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SWIPER_CONFIG": function() { return /* binding */ SWIPER_CONFIG; },
/* harmony export */   "SwiperComponent": function() { return /* binding */ SwiperComponent; },
/* harmony export */   "SwiperConfig": function() { return /* binding */ SwiperConfig; },
/* harmony export */   "SwiperDirective": function() { return /* binding */ SwiperDirective; },
/* harmony export */   "SwiperModule": function() { return /* binding */ SwiperModule; }
/* harmony export */ });
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/bundle */ 9167);






var _c0 = ["swiperSlides"];
var _c1 = ["*"];
var SWIPER_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('SWIPER_CONFIG');
var SwiperEventNames = ['init', 'beforeDestroy', 'scroll', 'progress', 'keyPress', 'resize', 'loopFix', 'breakpoint', 'zoomChange', 'beforeResize', 'beforeLoopFix', 'sliderMove', 'slideChange', 'setTranslate', 'setTransition', 'fromEdge', 'reachEnd', 'reachBeginning', 'autoplay', 'autoplayStop', 'autoplayStart', 'imagesReady', 'lazyImageLoad', 'lazyImageReady', 'scrollbarDragEnd', 'scrollbarDragMove', 'scrollbarDragStart', 'navigationHide', 'navigationShow', 'paginationRender', 'paginationUpdate', 'paginationHide', 'paginationShow', 'swiperTap', 'swiperClick', 'swiperDoubleTap', 'swiperTouchEnd', 'swiperTouchMove', 'swiperTouchStart', 'swiperTouchMoveOpposite', 'swiperTransitionEnd', 'swiperTransitionStart', 'slideNextTransitionEnd', 'slideNextTransitionStart', 'slidePrevTransitionEnd', 'slidePrevTransitionStart', 'slideChangeTransitionEnd', 'slideChangeTransitionStart', 'toEdge', 'observerUpdate'];
var SwiperConfig = /*#__PURE__*/function () {
  function SwiperConfig() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SwiperConfig);
    this.assign(config);
  }
  return (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SwiperConfig, [{
    key: "assign",
    value: function assign() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var target = arguments.length > 1 ? arguments[1] : undefined;
      target = target || this;
      for (var key in config) {
        if (config[key] != null && !Array.isArray(config[key]) && typeof config[key] === 'object' && (typeof HTMLElement === 'undefined' || !(config[key] instanceof HTMLElement))) {
          target[key] = {};
          this.assign(config[key], target[key]);
        } else {
          target[key] = config[key];
        }
      }
    }
  }]);
}();
var SwiperDirective = /*#__PURE__*/function () {
  function SwiperDirective(platformId, zone, elementRef, differs, defaults) {
    (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SwiperDirective);
    this.platformId = platformId;
    this.zone = zone;
    this.elementRef = elementRef;
    this.differs = differs;
    this.defaults = defaults;
    this.initialIndex = null;
    this.configDiff = null;
    this.disabled = false;
    this.performance = false;
    this.indexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_INIT = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_BEFOREDESTROY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SCROLL = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_PROGRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_KEYPRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_RESIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_BREAKPOINT = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_ZOOMCHANGE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_AFTERRESIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_BEFORERESIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_LOOPFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_BEFORELOOPFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SLIDERMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SLIDECHANGE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SETTRANSLATE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SETTRANSITION = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_FROMEDGE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_TOEDGE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_REACHEND = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_REACHBEGINNING = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_AUTOPLAY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_AUTOPLAYSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_AUTOPLAYSTOP = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_IMAGESREADY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_LAZYIMAGELOAD = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_LAZYIMAGEREADY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SCROLLDRAGEND = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SCROLLDRAGMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SCROLLDRAGSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_NAVIGATIONHIDE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_NAVIGATIONSHOW = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_PAGINATIONRENDER = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_PAGINATIONUPDATE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_PAGINATIONHIDE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_PAGINATIONSHOW = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_TAP = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_CLICK = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_DOUBLETAP = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_TOUCHEND = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_TOUCHMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_TOUCHSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_TOUCHMOVEOPPOSITE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_TRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_TRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SLIDEPREVTRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SLIDEPREVTRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SLIDENEXTTRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SLIDENEXTTRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SLIDECHANGETRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SLIDECHANGETRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_OBSERVERUPDATE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  return (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SwiperDirective, [{
    key: "index",
    set: function set(index) {
      if (index != null) {
        this.setIndex(index);
      }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this = this;
      if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
        return;
      }
      var params = new SwiperConfig(this.defaults);
      params.assign(this.config); // Custom configuration
      if (params.scrollbar === true) {
        params.scrollbar = {
          el: '.swiper-scrollbar'
        };
      }
      if (params.pagination === true) {
        params.pagination = {
          el: '.swiper-pagination'
        };
      }
      if (params.navigation === true) {
        params.navigation = {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next'
        };
      }
      if (this.disabled) {
        params.allowSlidePrev = false;
        params.allowSlideNext = false;
      }
      if (this.initialIndex != null) {
        params.initialSlide = this.initialIndex;
        this.initialIndex = null;
      }
      params.on = {
        slideChange: function slideChange() {
          if (_this.instance && _this.indexChange.observers.length) {
            _this.emit(_this.indexChange, _this.instance.realIndex);
          }
        }
      };
      this.zone.runOutsideAngular(function () {
        _this.instance = new swiper_bundle__WEBPACK_IMPORTED_MODULE_2__["default"](_this.elementRef.nativeElement, params);
      });
      if (params.init !== false && this.S_INIT.observers.length) {
        this.emit(this.S_INIT, this.instance);
      }
      // Add native Swiper event handling
      SwiperEventNames.forEach(function (eventName) {
        var swiperEvent = eventName.replace('swiper', '');
        swiperEvent = swiperEvent.charAt(0).toLowerCase() + swiperEvent.slice(1);
        _this.instance.on(swiperEvent, function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          if (args.length === 1) {
            args = args[0];
          }
          var output = "S_".concat(swiperEvent.toUpperCase());
          var emitter = _this[output];
          if (emitter.observers.length) {
            _this.emit(emitter, args);
          }
        });
      });
      if (!this.configDiff) {
        this.configDiff = this.differs.find(this.config || {}).create();
        this.configDiff.diff(this.config || {});
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var _this2 = this;
      if (this.instance) {
        this.zone.runOutsideAngular(function () {
          _this2.instance.destroy(true, _this2.instance.initialized || false);
        });
        this.instance = null;
      }
    }
  }, {
    key: "ngDoCheck",
    value: function ngDoCheck() {
      if (this.configDiff) {
        var changes = this.configDiff.diff(this.config || {});
        if (changes) {
          this.initialIndex = this.getIndex(true);
          this.ngOnDestroy();
          this.ngAfterViewInit();
          this.update();
        }
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var _this3 = this;
      if (this.instance && changes['disabled']) {
        if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
          if (changes['disabled'].currentValue === true) {
            this.zone.runOutsideAngular(function () {
              _this3.ngOnDestroy();
              _this3.ngAfterViewInit();
            });
          } else if (changes['disabled'].currentValue === false) {
            this.zone.runOutsideAngular(function () {
              _this3.ngOnDestroy();
              _this3.ngAfterViewInit();
            });
          }
        }
      }
    }
  }, {
    key: "emit",
    value: function emit(emitter, value) {
      if (this.performance) {
        emitter.emit(value);
      } else {
        this.zone.run(function () {
          return emitter.emit(value);
        });
      }
    }
  }, {
    key: "swiper",
    value: function swiper() {
      return this.instance;
    }
  }, {
    key: "init",
    value: function init() {
      var _this4 = this;
      if (this.instance) {
        this.zone.runOutsideAngular(function () {
          _this4.instance.init();
        });
      }
    }
  }, {
    key: "update",
    value: function update() {
      var _this5 = this;
      setTimeout(function () {
        if (_this5.instance) {
          _this5.zone.runOutsideAngular(function () {
            _this5.instance.update();
          });
        }
      }, 0);
    }
  }, {
    key: "getIndex",
    value: function getIndex(real) {
      if (!this.instance) {
        return this.initialIndex || 0;
      } else {
        return real ? this.instance.realIndex : this.instance.activeIndex;
      }
    }
  }, {
    key: "setIndex",
    value: function setIndex(index, speed, silent) {
      var _this6 = this;
      if (!this.instance) {
        this.initialIndex = index;
      } else {
        var realIndex = index * this.instance.params.slidesPerGroup;
        if (this.instance.params.loop) {
          realIndex += this.instance.loopedSlides;
        }
        this.zone.runOutsideAngular(function () {
          _this6.instance.slideTo(realIndex, speed, !silent);
        });
      }
    }
  }, {
    key: "prevSlide",
    value: function prevSlide(speed, silent) {
      var _this7 = this;
      if (this.instance) {
        this.zone.runOutsideAngular(function () {
          _this7.instance.slidePrev(speed, !silent);
        });
      }
    }
  }, {
    key: "nextSlide",
    value: function nextSlide(speed, silent) {
      var _this8 = this;
      if (this.instance) {
        this.zone.runOutsideAngular(function () {
          _this8.instance.slideNext(speed, !silent);
        });
      }
    }
  }, {
    key: "stopAutoplay",
    value: function stopAutoplay(reset) {
      var _this9 = this;
      if (reset) {
        this.setIndex(0);
      }
      if (this.instance && this.instance.autoplay) {
        this.zone.runOutsideAngular(function () {
          _this9.instance.autoplay.stop();
        });
      }
    }
  }, {
    key: "startAutoplay",
    value: function startAutoplay(reset) {
      var _this10 = this;
      if (reset) {
        this.setIndex(0);
      }
      if (this.instance && this.instance.autoplay) {
        this.zone.runOutsideAngular(function () {
          _this10.instance.autoplay.start();
        });
      }
    }
  }]);
}();
SwiperDirective.ɵfac = function SwiperDirective_Factory(t) {
  return new (t || SwiperDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](SWIPER_CONFIG, 8));
};
SwiperDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: SwiperDirective,
  selectors: [["", "swiper", ""]],
  inputs: {
    disabled: "disabled",
    performance: "performance",
    index: "index",
    config: ["swiper", "config"]
  },
  outputs: {
    indexChange: "indexChange",
    S_INIT: "init",
    S_BEFOREDESTROY: "beforeDestroy",
    S_SCROLL: "scroll",
    S_PROGRESS: "progress",
    S_KEYPRESS: "keyPress",
    S_RESIZE: "resize",
    S_BREAKPOINT: "breakpoint",
    S_ZOOMCHANGE: "zoomChange",
    S_AFTERRESIZE: "afterResize",
    S_BEFORERESIZE: "beforeResize",
    S_LOOPFIX: "loopFix",
    S_BEFORELOOPFIX: "beforeLoopFix",
    S_SLIDERMOVE: "sliderMove",
    S_SLIDECHANGE: "slideChange",
    S_SETTRANSLATE: "setTranslate",
    S_SETTRANSITION: "setTransition",
    S_FROMEDGE: "fromEdge",
    S_TOEDGE: "toEdge",
    S_REACHEND: "reachEnd",
    S_REACHBEGINNING: "reachBeginning",
    S_AUTOPLAY: "autoplay",
    S_AUTOPLAYSTART: "autoplayStart",
    S_AUTOPLAYSTOP: "autoplayStop",
    S_IMAGESREADY: "imagesReady",
    S_LAZYIMAGELOAD: "lazyImageLoad",
    S_LAZYIMAGEREADY: "lazyImageReady",
    S_SCROLLDRAGEND: "scrollDragEnd",
    S_SCROLLDRAGMOVE: "scrollDragMove",
    S_SCROLLDRAGSTART: "scrollDragStart",
    S_NAVIGATIONHIDE: "navigationHide",
    S_NAVIGATIONSHOW: "navigationShow",
    S_PAGINATIONRENDER: "paginationRender",
    S_PAGINATIONUPDATE: "paginationUpdate",
    S_PAGINATIONHIDE: "paginationHide",
    S_PAGINATIONSHOW: "paginationShow",
    S_TAP: "swiperTap",
    S_CLICK: "swiperClick",
    S_DOUBLETAP: "swiperDoubleTap",
    S_TOUCHEND: "swiperTouchEnd",
    S_TOUCHMOVE: "swiperTouchMove",
    S_TOUCHSTART: "swiperTouchStart",
    S_TOUCHMOVEOPPOSITE: "swiperTouchMoveOpposite",
    S_TRANSITIONEND: "swiperTransitionEnd",
    S_TRANSITIONSTART: "swiperTransitionStart",
    S_SLIDEPREVTRANSITIONEND: "slidePrevTransitionEnd",
    S_SLIDEPREVTRANSITIONSTART: "slidePrevTransitionStart",
    S_SLIDENEXTTRANSITIONEND: "slideNextTransitionEnd",
    S_SLIDENEXTTRANSITIONSTART: "slideNextTransitionStart",
    S_SLIDECHANGETRANSITIONEND: "slideChangeTransitionEnd",
    S_SLIDECHANGETRANSITIONSTART: "slideChangeTransitionStart",
    S_OBSERVERUPDATE: "observerUpdate"
  },
  exportAs: ["ngxSwiper"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
});
SwiperDirective.ctorParameters = function () {
  return [{
    type: Object,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.KeyValueDiffers
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
      args: [SWIPER_CONFIG]
    }]
  }];
};
SwiperDirective.propDecorators = {
  index: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  performance: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  config: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
    args: ['swiper']
  }],
  indexChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  S_INIT: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['init']
  }],
  S_BEFOREDESTROY: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['beforeDestroy']
  }],
  S_SCROLL: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['scroll']
  }],
  S_PROGRESS: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['progress']
  }],
  S_KEYPRESS: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['keyPress']
  }],
  S_RESIZE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['resize']
  }],
  S_BREAKPOINT: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['breakpoint']
  }],
  S_ZOOMCHANGE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['zoomChange']
  }],
  S_AFTERRESIZE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['afterResize']
  }],
  S_BEFORERESIZE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['beforeResize']
  }],
  S_LOOPFIX: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['loopFix']
  }],
  S_BEFORELOOPFIX: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['beforeLoopFix']
  }],
  S_SLIDERMOVE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['sliderMove']
  }],
  S_SLIDECHANGE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['slideChange']
  }],
  S_SETTRANSLATE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['setTranslate']
  }],
  S_SETTRANSITION: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['setTransition']
  }],
  S_FROMEDGE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['fromEdge']
  }],
  S_TOEDGE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['toEdge']
  }],
  S_REACHEND: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['reachEnd']
  }],
  S_REACHBEGINNING: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['reachBeginning']
  }],
  S_AUTOPLAY: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['autoplay']
  }],
  S_AUTOPLAYSTART: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['autoplayStart']
  }],
  S_AUTOPLAYSTOP: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['autoplayStop']
  }],
  S_IMAGESREADY: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['imagesReady']
  }],
  S_LAZYIMAGELOAD: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['lazyImageLoad']
  }],
  S_LAZYIMAGEREADY: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['lazyImageReady']
  }],
  S_SCROLLDRAGEND: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['scrollDragEnd']
  }],
  S_SCROLLDRAGMOVE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['scrollDragMove']
  }],
  S_SCROLLDRAGSTART: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['scrollDragStart']
  }],
  S_NAVIGATIONHIDE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['navigationHide']
  }],
  S_NAVIGATIONSHOW: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['navigationShow']
  }],
  S_PAGINATIONRENDER: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['paginationRender']
  }],
  S_PAGINATIONUPDATE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['paginationUpdate']
  }],
  S_PAGINATIONHIDE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['paginationHide']
  }],
  S_PAGINATIONSHOW: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['paginationShow']
  }],
  S_TAP: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['swiperTap']
  }],
  S_CLICK: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['swiperClick']
  }],
  S_DOUBLETAP: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['swiperDoubleTap']
  }],
  S_TOUCHEND: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['swiperTouchEnd']
  }],
  S_TOUCHMOVE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['swiperTouchMove']
  }],
  S_TOUCHSTART: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['swiperTouchStart']
  }],
  S_TOUCHMOVEOPPOSITE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['swiperTouchMoveOpposite']
  }],
  S_TRANSITIONEND: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['swiperTransitionEnd']
  }],
  S_TRANSITIONSTART: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['swiperTransitionStart']
  }],
  S_SLIDEPREVTRANSITIONEND: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['slidePrevTransitionEnd']
  }],
  S_SLIDEPREVTRANSITIONSTART: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['slidePrevTransitionStart']
  }],
  S_SLIDENEXTTRANSITIONEND: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['slideNextTransitionEnd']
  }],
  S_SLIDENEXTTRANSITIONSTART: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['slideNextTransitionStart']
  }],
  S_SLIDECHANGETRANSITIONEND: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['slideChangeTransitionEnd']
  }],
  S_SLIDECHANGETRANSITIONSTART: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['slideChangeTransitionStart']
  }],
  S_OBSERVERUPDATE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['observerUpdate']
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SwiperDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: '[swiper]',
      exportAs: 'ngxSwiper'
    }]
  }], function () {
    return [{
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.KeyValueDiffers
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
        args: [SWIPER_CONFIG]
      }]
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    performance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    indexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    S_INIT: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['init']
    }],
    S_BEFOREDESTROY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['beforeDestroy']
    }],
    S_SCROLL: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['scroll']
    }],
    S_PROGRESS: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['progress']
    }],
    S_KEYPRESS: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['keyPress']
    }],
    S_RESIZE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['resize']
    }],
    S_BREAKPOINT: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['breakpoint']
    }],
    S_ZOOMCHANGE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['zoomChange']
    }],
    S_AFTERRESIZE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['afterResize']
    }],
    S_BEFORERESIZE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['beforeResize']
    }],
    S_LOOPFIX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['loopFix']
    }],
    S_BEFORELOOPFIX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['beforeLoopFix']
    }],
    S_SLIDERMOVE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['sliderMove']
    }],
    S_SLIDECHANGE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['slideChange']
    }],
    S_SETTRANSLATE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['setTranslate']
    }],
    S_SETTRANSITION: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['setTransition']
    }],
    S_FROMEDGE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['fromEdge']
    }],
    S_TOEDGE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['toEdge']
    }],
    S_REACHEND: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['reachEnd']
    }],
    S_REACHBEGINNING: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['reachBeginning']
    }],
    S_AUTOPLAY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['autoplay']
    }],
    S_AUTOPLAYSTART: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['autoplayStart']
    }],
    S_AUTOPLAYSTOP: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['autoplayStop']
    }],
    S_IMAGESREADY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['imagesReady']
    }],
    S_LAZYIMAGELOAD: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['lazyImageLoad']
    }],
    S_LAZYIMAGEREADY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['lazyImageReady']
    }],
    S_SCROLLDRAGEND: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['scrollDragEnd']
    }],
    S_SCROLLDRAGMOVE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['scrollDragMove']
    }],
    S_SCROLLDRAGSTART: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['scrollDragStart']
    }],
    S_NAVIGATIONHIDE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['navigationHide']
    }],
    S_NAVIGATIONSHOW: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['navigationShow']
    }],
    S_PAGINATIONRENDER: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['paginationRender']
    }],
    S_PAGINATIONUPDATE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['paginationUpdate']
    }],
    S_PAGINATIONHIDE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['paginationHide']
    }],
    S_PAGINATIONSHOW: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['paginationShow']
    }],
    S_TAP: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['swiperTap']
    }],
    S_CLICK: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['swiperClick']
    }],
    S_DOUBLETAP: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['swiperDoubleTap']
    }],
    S_TOUCHEND: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['swiperTouchEnd']
    }],
    S_TOUCHMOVE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['swiperTouchMove']
    }],
    S_TOUCHSTART: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['swiperTouchStart']
    }],
    S_TOUCHMOVEOPPOSITE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['swiperTouchMoveOpposite']
    }],
    S_TRANSITIONEND: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['swiperTransitionEnd']
    }],
    S_TRANSITIONSTART: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['swiperTransitionStart']
    }],
    S_SLIDEPREVTRANSITIONEND: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['slidePrevTransitionEnd']
    }],
    S_SLIDEPREVTRANSITIONSTART: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['slidePrevTransitionStart']
    }],
    S_SLIDENEXTTRANSITIONEND: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['slideNextTransitionEnd']
    }],
    S_SLIDENEXTTRANSITIONSTART: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['slideNextTransitionStart']
    }],
    S_SLIDECHANGETRANSITIONEND: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['slideChangeTransitionEnd']
    }],
    S_SLIDECHANGETRANSITIONSTART: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['slideChangeTransitionStart']
    }],
    S_OBSERVERUPDATE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['observerUpdate']
    }],
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['swiper']
    }]
  });
})();
var SwiperComponent = /*#__PURE__*/function () {
  function SwiperComponent(zone, cdRef, platformId, defaults) {
    (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SwiperComponent);
    this.zone = zone;
    this.cdRef = cdRef;
    this.platformId = platformId;
    this.defaults = defaults;
    this.mo = null;
    this.swiperConfig = null;
    this.paginationBackup = null;
    this.paginationConfig = null;
    this.index = null;
    this.disabled = false;
    this.performance = false;
    this.useSwiperClass = true;
    this.indexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_INIT = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_BEFOREDESTROY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SCROLL = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_PROGRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_KEYPRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_RESIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_BREAKPOINT = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_ZOOMCHANGE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_AFTERRESIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_BEFORERESIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_BEFORELOOPFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_LOOPFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SLIDERMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SLIDECHANGE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SETTRANSLATE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SETTRANSITION = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_FROMEDGE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_TOEDGE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_REACHEND = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_REACHBEGINNING = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_AUTOPLAY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_AUTOPLAYSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_AUTOPLAYSTOP = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_IMAGESREADY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_LAZYIMAGELOAD = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_LAZYIMAGEREADY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SCROLLDRAGEND = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SCROLLDRAGMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SCROLLDRAGSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_NAVIGATIONHIDE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_NAVIGATIONSHOW = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_PAGINATIONRENDER = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_PAGINATIONUPDATE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_PAGINATIONHIDE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_PAGINATIONSHOW = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_TAP = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_CLICK = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_DOUBLETAP = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_TOUCHEND = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_TOUCHMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_TOUCHSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_TOUCHMOVEOPPOSITE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_TRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_TRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SLIDEPREVTRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SLIDEPREVTRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SLIDENEXTTRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SLIDENEXTTRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SLIDECHANGETRANSITIONEND = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_SLIDECHANGETRANSITIONSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.S_OBSERVERUPDATE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  return (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SwiperComponent, [{
    key: "isAtLast",
    get: function get() {
      return !this.directiveRef || !this.directiveRef.swiper() ? false : this.directiveRef.swiper()['isEnd'];
    }
  }, {
    key: "isAtFirst",
    get: function get() {
      return !this.directiveRef || !this.directiveRef.swiper() ? false : this.directiveRef.swiper()['isBeginning'];
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this11 = this;
      if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
        return;
      }
      this.zone.runOutsideAngular(function () {
        _this11.updateClasses();
        if (_this11.swiperSlides && typeof MutationObserver !== 'undefined') {
          _this11.mo = new MutationObserver(function () {
            _this11.updateClasses();
          });
          _this11.mo.observe(_this11.swiperSlides.nativeElement, {
            childList: true
          });
        }
      });
      window.setTimeout(function () {
        if (_this11.directiveRef) {
          _this11.S_INIT.emit();
          _this11.directiveRef.indexChange = _this11.indexChange;
          SwiperEventNames.forEach(function (eventName) {
            if (_this11.directiveRef) {
              var output = "S_".concat(eventName.replace('swiper', '').toUpperCase());
              var directiveOutput = output;
              var componentOutput = output;
              _this11.directiveRef[directiveOutput] = _this11[componentOutput];
            }
          });
        }
      }, 0);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.mo) {
        this.mo.disconnect();
      }
      if (this.config && this.paginationBackup) {
        this.config.pagination = this.paginationBackup;
      }
    }
  }, {
    key: "getConfig",
    value: function getConfig() {
      var _this12 = this;
      this.swiperConfig = new SwiperConfig(this.defaults);
      this.swiperConfig.assign(this.config); // Custom configuration
      if (this.swiperSlides && (this.swiperConfig.pagination === true || this.swiperConfig.pagination && typeof this.swiperConfig.pagination === 'object' && (!this.swiperConfig.pagination.type || this.swiperConfig.pagination.type === 'bullets') && !this.swiperConfig.pagination.renderBullet && this.swiperConfig.pagination.el === '.swiper-pagination')) {
        this.config = this.config || {};
        if (!this.paginationConfig) {
          this.paginationBackup = this.config.pagination;
          this.paginationConfig = {
            el: '.swiper-pagination',
            renderBullet: function renderBullet(index, className) {
              var children = _this12.swiperSlides ? Array.from(_this12.swiperSlides.nativeElement.children) : [];
              children = children.filter(function (child) {
                return child.classList.contains('swiper-slide');
              });
              var bullet = "<span class=\"".concat(className, " ").concat(className, "-middle\" index=\"").concat(index, "\"></span>");
              if (index === 0) {
                bullet = "<span class=\"".concat(className, " ").concat(className, "-first\" index=\"").concat(index, "\"></span>");
              } else if (index === children.length - 1) {
                bullet = "<span class=\"".concat(className, " ").concat(className, "-last\" index=\"").concat(index, "\"></span>");
              }
              return "<span class=\"swiper-pagination-handle\" index=\"".concat(index, "\">").concat(bullet, "</span>");
            }
          };
        }
        if (this.swiperConfig.pagination === true) {
          this.config.pagination = this.paginationConfig;
        } else {
          this.config.pagination = Object.assign({}, this.config.pagination, this.paginationConfig);
        }
      }
      return this.config;
    }
  }, {
    key: "updateClasses",
    value: function updateClasses() {
      if (this.swiperSlides) {
        var updateNeeded = false;
        var children = this.swiperSlides.nativeElement.children;
        for (var i = 0; i < children.length; i++) {
          if (/swiper-.*/.test(children[i].className) === false) {
            updateNeeded = true;
            children[i].classList.add('swiper-slide');
          }
        }
        if (updateNeeded && this.directiveRef) {
          this.directiveRef.update();
        }
      }
      this.cdRef.detectChanges();
    }
  }, {
    key: "onPaginationClick",
    value: function onPaginationClick(index) {
      if (this.config && this.directiveRef && (this.config.pagination === true || this.config.pagination && typeof this.config.pagination === 'object' && (!this.config.pagination.type || this.config.pagination.type === 'bullets') && this.config.pagination.clickable && this.config.pagination.el === '.swiper-pagination')) {
        this.directiveRef.setIndex(index);
      }
    }
  }]);
}();
SwiperComponent.ɵfac = function SwiperComponent_Factory(t) {
  return new (t || SwiperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](SWIPER_CONFIG, 8));
};
SwiperComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SwiperComponent,
  selectors: [["swiper"]],
  viewQuery: function SwiperComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](SwiperDirective, 5);
    }
    if (rf & 2) {
      var _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.swiperSlides = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
    }
  },
  inputs: {
    index: "index",
    disabled: "disabled",
    performance: "performance",
    useSwiperClass: "useSwiperClass",
    config: "config"
  },
  outputs: {
    indexChange: "indexChange",
    S_INIT: "init",
    S_BEFOREDESTROY: "beforeDestroy",
    S_SCROLL: "scroll",
    S_PROGRESS: "progress",
    S_KEYPRESS: "keyPress",
    S_RESIZE: "resize",
    S_BREAKPOINT: "breakpoint",
    S_ZOOMCHANGE: "zoomChange",
    S_AFTERRESIZE: "afterResize",
    S_BEFORERESIZE: "beforeResize",
    S_BEFORELOOPFIX: "beforeLoopFix",
    S_LOOPFIX: "loopFix",
    S_SLIDERMOVE: "sliderMove",
    S_SLIDECHANGE: "slideChange",
    S_SETTRANSLATE: "setTranslate",
    S_SETTRANSITION: "setTransition",
    S_FROMEDGE: "fromEdge",
    S_TOEDGE: "toEdge",
    S_REACHEND: "reachEnd",
    S_REACHBEGINNING: "reachBeginning",
    S_AUTOPLAY: "autoplay",
    S_AUTOPLAYSTART: "autoplayStart",
    S_AUTOPLAYSTOP: "autoplayStop",
    S_IMAGESREADY: "imagesReady",
    S_LAZYIMAGELOAD: "lazyImageLoad",
    S_LAZYIMAGEREADY: "lazyImageReady",
    S_SCROLLDRAGEND: "scrollDragEnd",
    S_SCROLLDRAGMOVE: "scrollDragMove",
    S_SCROLLDRAGSTART: "scrollDragStart",
    S_NAVIGATIONHIDE: "navigationHide",
    S_NAVIGATIONSHOW: "navigationShow",
    S_PAGINATIONRENDER: "paginationRender",
    S_PAGINATIONUPDATE: "paginationUpdate",
    S_PAGINATIONHIDE: "paginationHide",
    S_PAGINATIONSHOW: "paginationShow",
    S_TAP: "swiperTap",
    S_CLICK: "swiperClick",
    S_DOUBLETAP: "swiperDoubleTap",
    S_TOUCHEND: "swiperTouchEnd",
    S_TOUCHMOVE: "swiperTouchMove",
    S_TOUCHSTART: "swiperTouchStart",
    S_TOUCHMOVEOPPOSITE: "swiperTouchMoveOpposite",
    S_TRANSITIONEND: "swiperTransitionEnd",
    S_TRANSITIONSTART: "swiperTransitionStart",
    S_SLIDEPREVTRANSITIONEND: "slidePrevTransitionEnd",
    S_SLIDEPREVTRANSITIONSTART: "slidePrevTransitionStart",
    S_SLIDENEXTTRANSITIONEND: "slideNextTransitionEnd",
    S_SLIDENEXTTRANSITIONSTART: "slideNextTransitionStart",
    S_SLIDECHANGETRANSITIONEND: "slideChangeTransitionEnd",
    S_SLIDECHANGETRANSITIONSTART: "slideChangeTransitionStart",
    S_OBSERVERUPDATE: "observerUpdate"
  },
  exportAs: ["ngxSwiper"],
  ngContentSelectors: _c1,
  decls: 9,
  vars: 14,
  consts: [[1, "s-wrapper", 3, "swiper", "index", "disabled", "performance"], ["swiper", ""], [1, "swiper-wrapper"], ["swiperSlides", ""], [1, "swiper-scrollbar", 3, "hidden"], [1, "swiper-button-prev", 3, "hidden"], [1, "swiper-button-next", 3, "hidden"], [1, "swiper-pagination", 3, "hidden", "click", "keyup.enter"]],
  template: function SwiperComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SwiperComponent_Template_div_click_8_listener($event) {
        return ctx.onPaginationClick($event.target.getAttribute("index"));
      })("keyup.enter", function SwiperComponent_Template_div_keyup_enter_8_listener($event) {
        return ctx.onPaginationClick($event.target.getAttribute("index"));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("swiper", ctx.useSwiperClass)("swiper-container", ctx.useSwiperClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("swiper", ctx.getConfig())("index", ctx.index)("disabled", ctx.disabled)("performance", ctx.performance);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar == null ? null : ctx.swiperConfig.scrollbar.el) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar == null ? null : ctx.swiperConfig.scrollbar.el) !== ".swiper-scrollbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.prevEl) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.prevEl) !== ".swiper-button-prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", ctx.isAtFirst || null);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.nextEl) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.nextEl) !== ".swiper-button-next");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", ctx.isAtLast || null);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination == null ? null : ctx.swiperConfig.pagination.el) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination == null ? null : ctx.swiperConfig.pagination.el) !== ".swiper-pagination");
    }
  },
  directives: [SwiperDirective],
  styles: ["swiper[fxflex]{display:flex;flex-direction:inherit;min-height:0;min-width:0}swiper[fxflex]>.swiper.s-wrapper{-webkit-box-flex:1;flex:1 1 auto;min-height:0;min-width:0}swiper>.swiper.s-wrapper{height:100%;width:100%}swiper>.swiper.s-wrapper .swiper-wrapper .swiper-slide{height:100%;max-height:100%;max-width:100%;overflow:auto;width:100%;will-change:transform}swiper>.swiper.s-wrapper .swiper-pagination{pointer-events:none}swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle{cursor:pointer;display:inline-block;margin:2px;padding:4px;pointer-events:all;position:relative}swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet{display:inline-block;margin:0;pointer-events:none}swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{border:1px solid rgba(0,0,0,.5)}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-button-prev{left:50%;margin-left:-13px;margin-top:0;top:10px;transform:rotate(90deg)}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-button-next{bottom:10px;left:50%;margin-left:-13px;margin-top:0;top:auto;transform:rotate(90deg)}.swiper-button-next[hidden]:after,.swiper-button-prev[hidden]:after{display:none}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-scrollbar{transition:width .25s ease-in-out;width:8px}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-scrollbar:hover{width:16px}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle{display:block}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet{display:inline-block}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{margin:0 -1px}swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-scrollbar{height:8px;transition:height .25s ease-in-out}swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-scrollbar:hover{height:16px}swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{margin:-1px 0}", "@font-face{font-family:swiper-icons;font-style:normal;font-weight:400;src:url(\"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\") format(\"woff\")}:root{--swiper-theme-color:#007aff}.swiper-container{list-style:none;margin-left:auto;margin-right:auto;overflow:hidden;padding:0;position:relative;z-index:1}.swiper-container-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{box-sizing:content-box;display:flex;height:100%;position:relative;transition-property:transform;width:100%;z-index:1}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-direction:column;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{margin:0 auto;transition-timing-function:ease-out}.swiper-slide{flex-shrink:0;height:100%;position:relative;transition-property:transform;width:100%}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-container-3d{perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-css-mode>.swiper-wrapper{-ms-overflow-style:none;overflow:auto;scrollbar-width:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{align-items:center;color:var(--swiper-navigation-color,var(--swiper-theme-color));cursor:pointer;display:flex;height:var(--swiper-navigation-size);justify-content:center;margin-top:calc(-1*var(--swiper-navigation-size)/2);position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/44*27);z-index:10}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{cursor:auto;opacity:.35;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);font-variant:normal;letter-spacing:0;line-height:1;text-transform:none!important;text-transform:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:\"prev\"}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{left:auto;right:10px}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:\"next\"}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#fff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transform:translateZ(0);transition:opacity .3s;z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{font-size:0;overflow:hidden}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{position:relative;transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{background:#000;border-radius:100%;display:inline-block;height:8px;opacity:.2;width:8px}button.swiper-pagination-bullet{-moz-appearance:none;-webkit-appearance:none;appearance:none;border:none;box-shadow:none;margin:0;padding:0}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{background:var(--swiper-pagination-color,var(--swiper-theme-color));opacity:1}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{display:block;margin:6px 0}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:transform .2s,top .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,left .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,right .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));height:100%;left:0;position:absolute;top:0;transform:scale(0);transform-origin:left top;width:100%}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{height:4px;left:0;top:0;width:100%}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{height:100%;left:0;top:0;width:4px}.swiper-pagination-white{--swiper-pagination-color:#fff}.swiper-pagination-black{--swiper-pagination-color:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{-ms-touch-action:none;background:rgba(0,0,0,.1);border-radius:10px;position:relative}.swiper-container-horizontal>.swiper-scrollbar{bottom:3px;height:5px;left:1%;position:absolute;width:98%;z-index:50}.swiper-container-vertical>.swiper-scrollbar{height:98%;position:absolute;right:3px;top:1%;width:5px;z-index:50}.swiper-scrollbar-drag{background:rgba(0,0,0,.5);border-radius:10px;height:100%;left:0;position:relative;top:0;width:100%}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{align-items:center;display:flex;height:100%;justify-content:center;text-align:center;width:100%}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{-o-object-fit:contain;max-height:100%;max-width:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{-webkit-animation:swiper-preloader-spin 1s linear infinite;animation:swiper-preloader-spin 1s linear infinite;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top:4px solid transparent;box-sizing:border-box;height:42px;left:50%;margin-left:-21px;margin-top:-21px;position:absolute;top:50%;transform-origin:50%;width:42px;z-index:10}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@-webkit-keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}@keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}.swiper-container .swiper-notification{left:0;opacity:0;pointer-events:none;position:absolute;top:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;height:100%;pointer-events:none;transform-origin:0 0;visibility:hidden;width:100%;z-index:1}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:0}.swiper-container-cube .swiper-cube-shadow{background:#000;bottom:0;filter:blur(50px);height:100%;left:0;opacity:.6;position:absolute;width:100%;z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:none;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:0}"],
  encapsulation: 2
});
SwiperComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef
  }, {
    type: Object,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
      args: [SWIPER_CONFIG]
    }]
  }];
};
SwiperComponent.propDecorators = {
  index: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  performance: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  config: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  useSwiperClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  indexChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  swiperSlides: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
    args: ['swiperSlides', {
      static: false
    }]
  }],
  directiveRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
    args: [SwiperDirective, {
      static: false
    }]
  }],
  S_INIT: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['init']
  }],
  S_BEFOREDESTROY: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['beforeDestroy']
  }],
  S_SCROLL: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['scroll']
  }],
  S_PROGRESS: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['progress']
  }],
  S_KEYPRESS: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['keyPress']
  }],
  S_RESIZE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['resize']
  }],
  S_BREAKPOINT: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['breakpoint']
  }],
  S_ZOOMCHANGE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['zoomChange']
  }],
  S_AFTERRESIZE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['afterResize']
  }],
  S_BEFORERESIZE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['beforeResize']
  }],
  S_BEFORELOOPFIX: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['beforeLoopFix']
  }],
  S_LOOPFIX: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['loopFix']
  }],
  S_SLIDERMOVE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['sliderMove']
  }],
  S_SLIDECHANGE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['slideChange']
  }],
  S_SETTRANSLATE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['setTranslate']
  }],
  S_SETTRANSITION: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['setTransition']
  }],
  S_FROMEDGE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['fromEdge']
  }],
  S_TOEDGE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['toEdge']
  }],
  S_REACHEND: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['reachEnd']
  }],
  S_REACHBEGINNING: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['reachBeginning']
  }],
  S_AUTOPLAY: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['autoplay']
  }],
  S_AUTOPLAYSTART: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['autoplayStart']
  }],
  S_AUTOPLAYSTOP: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['autoplayStop']
  }],
  S_IMAGESREADY: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['imagesReady']
  }],
  S_LAZYIMAGELOAD: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['lazyImageLoad']
  }],
  S_LAZYIMAGEREADY: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['lazyImageReady']
  }],
  S_SCROLLDRAGEND: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['scrollDragEnd']
  }],
  S_SCROLLDRAGMOVE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['scrollDragMove']
  }],
  S_SCROLLDRAGSTART: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['scrollDragStart']
  }],
  S_NAVIGATIONHIDE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['navigationHide']
  }],
  S_NAVIGATIONSHOW: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['navigationShow']
  }],
  S_PAGINATIONRENDER: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['paginationRender']
  }],
  S_PAGINATIONUPDATE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['paginationUpdate']
  }],
  S_PAGINATIONHIDE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['paginationHide']
  }],
  S_PAGINATIONSHOW: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['paginationShow']
  }],
  S_TAP: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['swiperTap']
  }],
  S_CLICK: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['swiperClick']
  }],
  S_DOUBLETAP: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['swiperDoubleTap']
  }],
  S_TOUCHEND: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['swiperTouchEnd']
  }],
  S_TOUCHMOVE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['swiperTouchMove']
  }],
  S_TOUCHSTART: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['swiperTouchStart']
  }],
  S_TOUCHMOVEOPPOSITE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['swiperTouchMoveOpposite']
  }],
  S_TRANSITIONEND: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['swiperTransitionEnd']
  }],
  S_TRANSITIONSTART: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['swiperTransitionStart']
  }],
  S_SLIDEPREVTRANSITIONEND: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['slidePrevTransitionEnd']
  }],
  S_SLIDEPREVTRANSITIONSTART: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['slidePrevTransitionStart']
  }],
  S_SLIDENEXTTRANSITIONEND: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['slideNextTransitionEnd']
  }],
  S_SLIDENEXTTRANSITIONSTART: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['slideNextTransitionStart']
  }],
  S_SLIDECHANGETRANSITIONEND: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['slideChangeTransitionEnd']
  }],
  S_SLIDECHANGETRANSITIONSTART: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['slideChangeTransitionStart']
  }],
  S_OBSERVERUPDATE: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
    args: ['observerUpdate']
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SwiperComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'swiper',
      exportAs: 'ngxSwiper',
      template: "<div #swiper class=\"s-wrapper\" [class.swiper]=\"useSwiperClass\" [class.swiper-container]=\"useSwiperClass\" [swiper]=\"getConfig()\" [index]=\"index\" [disabled]=\"disabled\" [performance]=\"performance\">\n  <div #swiperSlides class=\"swiper-wrapper\">\n    <ng-content></ng-content>\n  </div>\n\n  <div class=\"swiper-scrollbar\" [hidden]=\"!swiperConfig?.scrollbar || (swiperConfig?.scrollbar !== true && !!swiperConfig?.scrollbar?.el && swiperConfig?.scrollbar?.el !== '.swiper-scrollbar')\"></div>\n\n  <div class=\"swiper-button-prev\" [hidden]=\"!swiperConfig?.navigation || (swiperConfig?.navigation !== true && !!swiperConfig?.navigation?.prevEl && swiperConfig?.navigation?.prevEl !== '.swiper-button-prev')\" [attr.disabled]=\"isAtFirst ||\xA0null\"></div>\n  <div class=\"swiper-button-next\" [hidden]=\"!swiperConfig?.navigation || (swiperConfig?.navigation !== true && !!swiperConfig?.navigation?.nextEl && swiperConfig?.navigation?.nextEl !== '.swiper-button-next')\" [attr.disabled]=\"isAtLast || null\"></div>\n\n  <div class=\"swiper-pagination\" [hidden]=\"!swiperConfig?.pagination || (swiperConfig?.pagination !== true && !!swiperConfig?.pagination?.el && swiperConfig?.pagination?.el !== '.swiper-pagination')\" (click)=\"onPaginationClick($event.target.getAttribute('index'))\" (keyup.enter)=\"onPaginationClick($event.target.getAttribute('index'))\"></div>\n</div>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None,
      styles: ["swiper[fxflex]{display:flex;flex-direction:inherit;min-height:0;min-width:0}swiper[fxflex]>.swiper.s-wrapper{-webkit-box-flex:1;flex:1 1 auto;min-height:0;min-width:0}swiper>.swiper.s-wrapper{height:100%;width:100%}swiper>.swiper.s-wrapper .swiper-wrapper .swiper-slide{height:100%;max-height:100%;max-width:100%;overflow:auto;width:100%;will-change:transform}swiper>.swiper.s-wrapper .swiper-pagination{pointer-events:none}swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle{cursor:pointer;display:inline-block;margin:2px;padding:4px;pointer-events:all;position:relative}swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet{display:inline-block;margin:0;pointer-events:none}swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper>.swiper.s-wrapper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{border:1px solid rgba(0,0,0,.5)}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-button-prev{left:50%;margin-left:-13px;margin-top:0;top:10px;transform:rotate(90deg)}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-button-next{bottom:10px;left:50%;margin-left:-13px;margin-top:0;top:auto;transform:rotate(90deg)}.swiper-button-next[hidden]:after,.swiper-button-prev[hidden]:after{display:none}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-scrollbar{transition:width .25s ease-in-out;width:8px}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-scrollbar:hover{width:16px}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle{display:block}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet{display:inline-block}swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper>.swiper.s-wrapper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{margin:0 -1px}swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-scrollbar{height:8px;transition:height .25s ease-in-out}swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-scrollbar:hover{height:16px}swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper>.swiper.s-wrapper.swiper-container-horizontal>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{margin:-1px 0}", "@font-face{font-family:swiper-icons;font-style:normal;font-weight:400;src:url(\"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\") format(\"woff\")}:root{--swiper-theme-color:#007aff}.swiper-container{list-style:none;margin-left:auto;margin-right:auto;overflow:hidden;padding:0;position:relative;z-index:1}.swiper-container-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{box-sizing:content-box;display:flex;height:100%;position:relative;transition-property:transform;width:100%;z-index:1}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-direction:column;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{margin:0 auto;transition-timing-function:ease-out}.swiper-slide{flex-shrink:0;height:100%;position:relative;transition-property:transform;width:100%}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-container-3d{perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-css-mode>.swiper-wrapper{-ms-overflow-style:none;overflow:auto;scrollbar-width:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{align-items:center;color:var(--swiper-navigation-color,var(--swiper-theme-color));cursor:pointer;display:flex;height:var(--swiper-navigation-size);justify-content:center;margin-top:calc(-1*var(--swiper-navigation-size)/2);position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/44*27);z-index:10}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{cursor:auto;opacity:.35;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);font-variant:normal;letter-spacing:0;line-height:1;text-transform:none!important;text-transform:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:\"prev\"}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{left:auto;right:10px}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:\"next\"}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#fff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transform:translateZ(0);transition:opacity .3s;z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{font-size:0;overflow:hidden}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{position:relative;transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{background:#000;border-radius:100%;display:inline-block;height:8px;opacity:.2;width:8px}button.swiper-pagination-bullet{-moz-appearance:none;-webkit-appearance:none;appearance:none;border:none;box-shadow:none;margin:0;padding:0}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{background:var(--swiper-pagination-color,var(--swiper-theme-color));opacity:1}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{display:block;margin:6px 0}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:transform .2s,top .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,left .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,right .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));height:100%;left:0;position:absolute;top:0;transform:scale(0);transform-origin:left top;width:100%}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{height:4px;left:0;top:0;width:100%}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{height:100%;left:0;top:0;width:4px}.swiper-pagination-white{--swiper-pagination-color:#fff}.swiper-pagination-black{--swiper-pagination-color:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{-ms-touch-action:none;background:rgba(0,0,0,.1);border-radius:10px;position:relative}.swiper-container-horizontal>.swiper-scrollbar{bottom:3px;height:5px;left:1%;position:absolute;width:98%;z-index:50}.swiper-container-vertical>.swiper-scrollbar{height:98%;position:absolute;right:3px;top:1%;width:5px;z-index:50}.swiper-scrollbar-drag{background:rgba(0,0,0,.5);border-radius:10px;height:100%;left:0;position:relative;top:0;width:100%}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{align-items:center;display:flex;height:100%;justify-content:center;text-align:center;width:100%}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{-o-object-fit:contain;max-height:100%;max-width:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{-webkit-animation:swiper-preloader-spin 1s linear infinite;animation:swiper-preloader-spin 1s linear infinite;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top:4px solid transparent;box-sizing:border-box;height:42px;left:50%;margin-left:-21px;margin-top:-21px;position:absolute;top:50%;transform-origin:50%;width:42px;z-index:10}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@-webkit-keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}@keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}.swiper-container .swiper-notification{left:0;opacity:0;pointer-events:none;position:absolute;top:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;height:100%;pointer-events:none;transform-origin:0 0;visibility:hidden;width:100%;z-index:1}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:0}.swiper-container-cube .swiper-cube-shadow{background:#000;bottom:0;filter:blur(50px);height:100%;left:0;opacity:.6;position:absolute;width:100%;z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:none;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:0}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
        args: [SWIPER_CONFIG]
      }]
    }];
  }, {
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    performance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    useSwiperClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    indexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    S_INIT: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['init']
    }],
    S_BEFOREDESTROY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['beforeDestroy']
    }],
    S_SCROLL: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['scroll']
    }],
    S_PROGRESS: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['progress']
    }],
    S_KEYPRESS: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['keyPress']
    }],
    S_RESIZE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['resize']
    }],
    S_BREAKPOINT: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['breakpoint']
    }],
    S_ZOOMCHANGE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['zoomChange']
    }],
    S_AFTERRESIZE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['afterResize']
    }],
    S_BEFORERESIZE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['beforeResize']
    }],
    S_BEFORELOOPFIX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['beforeLoopFix']
    }],
    S_LOOPFIX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['loopFix']
    }],
    S_SLIDERMOVE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['sliderMove']
    }],
    S_SLIDECHANGE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['slideChange']
    }],
    S_SETTRANSLATE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['setTranslate']
    }],
    S_SETTRANSITION: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['setTransition']
    }],
    S_FROMEDGE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['fromEdge']
    }],
    S_TOEDGE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['toEdge']
    }],
    S_REACHEND: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['reachEnd']
    }],
    S_REACHBEGINNING: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['reachBeginning']
    }],
    S_AUTOPLAY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['autoplay']
    }],
    S_AUTOPLAYSTART: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['autoplayStart']
    }],
    S_AUTOPLAYSTOP: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['autoplayStop']
    }],
    S_IMAGESREADY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['imagesReady']
    }],
    S_LAZYIMAGELOAD: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['lazyImageLoad']
    }],
    S_LAZYIMAGEREADY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['lazyImageReady']
    }],
    S_SCROLLDRAGEND: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['scrollDragEnd']
    }],
    S_SCROLLDRAGMOVE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['scrollDragMove']
    }],
    S_SCROLLDRAGSTART: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['scrollDragStart']
    }],
    S_NAVIGATIONHIDE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['navigationHide']
    }],
    S_NAVIGATIONSHOW: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['navigationShow']
    }],
    S_PAGINATIONRENDER: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['paginationRender']
    }],
    S_PAGINATIONUPDATE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['paginationUpdate']
    }],
    S_PAGINATIONHIDE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['paginationHide']
    }],
    S_PAGINATIONSHOW: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['paginationShow']
    }],
    S_TAP: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['swiperTap']
    }],
    S_CLICK: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['swiperClick']
    }],
    S_DOUBLETAP: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['swiperDoubleTap']
    }],
    S_TOUCHEND: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['swiperTouchEnd']
    }],
    S_TOUCHMOVE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['swiperTouchMove']
    }],
    S_TOUCHSTART: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['swiperTouchStart']
    }],
    S_TOUCHMOVEOPPOSITE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['swiperTouchMoveOpposite']
    }],
    S_TRANSITIONEND: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['swiperTransitionEnd']
    }],
    S_TRANSITIONSTART: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['swiperTransitionStart']
    }],
    S_SLIDEPREVTRANSITIONEND: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['slidePrevTransitionEnd']
    }],
    S_SLIDEPREVTRANSITIONSTART: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['slidePrevTransitionStart']
    }],
    S_SLIDENEXTTRANSITIONEND: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['slideNextTransitionEnd']
    }],
    S_SLIDENEXTTRANSITIONSTART: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['slideNextTransitionStart']
    }],
    S_SLIDECHANGETRANSITIONEND: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['slideChangeTransitionEnd']
    }],
    S_SLIDECHANGETRANSITIONSTART: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['slideChangeTransitionStart']
    }],
    S_OBSERVERUPDATE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
      args: ['observerUpdate']
    }],
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    swiperSlides: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
      args: ['swiperSlides', {
        static: false
      }]
    }],
    directiveRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
      args: [SwiperDirective, {
        static: false
      }]
    }]
  });
})();
var SwiperModule = /*#__PURE__*/(0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function SwiperModule() {
  (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SwiperModule);
});
SwiperModule.ɵfac = function SwiperModule_Factory(t) {
  return new (t || SwiperModule)();
};
SwiperModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: SwiperModule
});
SwiperModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SwiperModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
      declarations: [SwiperComponent, SwiperDirective],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, SwiperComponent, SwiperDirective]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SwiperModule, {
    declarations: function declarations() {
      return [SwiperComponent, SwiperDirective];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule];
    },
    exports: function exports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, SwiperComponent, SwiperDirective];
    }
  });
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 514:
/*!***************************************************!*\
  !*** ./node_modules/ssr-window/ssr-window.esm.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extend": function() { return /* binding */ extend; },
/* harmony export */   "getDocument": function() { return /* binding */ getDocument; },
/* harmony export */   "getWindow": function() { return /* binding */ getWindow; },
/* harmony export */   "ssrDocument": function() { return /* binding */ ssrDocument; },
/* harmony export */   "ssrWindow": function() { return /* binding */ ssrWindow; }
/* harmony export */ });
/**
 * SSR Window 3.0.0
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: November 9, 2020
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
  return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function extend(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  Object.keys(src).forEach(function (key) {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
var ssrDocument = {
  body: {},
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  activeElement: {
    blur: function blur() {},
    nodeName: ''
  },
  querySelector: function querySelector() {
    return null;
  },
  querySelectorAll: function querySelectorAll() {
    return [];
  },
  getElementById: function getElementById() {
    return null;
  },
  createEvent: function createEvent() {
    return {
      initEvent: function initEvent() {}
    };
  },
  createElement: function createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function setAttribute() {},
      getElementsByTagName: function getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS: function createElementNS() {
    return {};
  },
  importNode: function importNode() {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  }
};
function getDocument() {
  var doc = typeof document !== 'undefined' ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
var ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ''
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  },
  history: {
    replaceState: function replaceState() {},
    pushState: function pushState() {},
    go: function go() {},
    back: function back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  getComputedStyle: function getComputedStyle() {
    return {
      getPropertyValue: function getPropertyValue() {
        return '';
      }
    };
  },
  Image: function Image() {},
  Date: function Date() {},
  screen: {},
  setTimeout: function setTimeout() {},
  clearTimeout: function clearTimeout() {},
  matchMedia: function matchMedia() {
    return {};
  },
  requestAnimationFrame: function requestAnimationFrame(callback) {
    if (typeof setTimeout === 'undefined') {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame: function cancelAnimationFrame(id) {
    if (typeof setTimeout === 'undefined') {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  var win = typeof window !== 'undefined' ? window : {};
  extend(win, ssrWindow);
  return win;
}


/***/ }),

/***/ 257:
/*!*********************************************************!*\
  !*** ./node_modules/swiper/esm/components/a11y/a11y.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ 7312);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ 3799);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}


var A11y = {
  getRandomNumber: function getRandomNumber(size) {
    if (size === void 0) {
      size = 16;
    }
    var randomChar = function randomChar() {
      return Math.round(16 * Math.random()).toString(16);
    };
    return 'x'.repeat(size).replace(/x/g, randomChar);
  },
  makeElFocusable: function makeElFocusable($el) {
    $el.attr('tabIndex', '0');
    return $el;
  },
  makeElNotFocusable: function makeElNotFocusable($el) {
    $el.attr('tabIndex', '-1');
    return $el;
  },
  addElRole: function addElRole($el, role) {
    $el.attr('role', role);
    return $el;
  },
  addElRoleDescription: function addElRoleDescription($el, description) {
    $el.attr('aria-role-description', description);
    return $el;
  },
  addElControls: function addElControls($el, controls) {
    $el.attr('aria-controls', controls);
    return $el;
  },
  addElLabel: function addElLabel($el, label) {
    $el.attr('aria-label', label);
    return $el;
  },
  addElId: function addElId($el, id) {
    $el.attr('id', id);
    return $el;
  },
  addElLive: function addElLive($el, live) {
    $el.attr('aria-live', live);
    return $el;
  },
  disableEl: function disableEl($el) {
    $el.attr('aria-disabled', true);
    return $el;
  },
  enableEl: function enableEl($el) {
    $el.attr('aria-disabled', false);
    return $el;
  },
  onEnterKey: function onEnterKey(e) {
    var swiper = this;
    var params = swiper.params.a11y;
    if (e.keyCode !== 13) return;
    var $targetEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target);
    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }
      if (swiper.isEnd) {
        swiper.a11y.notify(params.lastSlideMessage);
      } else {
        swiper.a11y.notify(params.nextSlideMessage);
      }
    }
    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }
      if (swiper.isBeginning) {
        swiper.a11y.notify(params.firstSlideMessage);
      } else {
        swiper.a11y.notify(params.prevSlideMessage);
      }
    }
    if (swiper.pagination && $targetEl.is("." + swiper.params.pagination.bulletClass)) {
      $targetEl[0].click();
    }
  },
  notify: function notify(message) {
    var swiper = this;
    var notification = swiper.a11y.liveRegion;
    if (notification.length === 0) return;
    notification.html('');
    notification.html(message);
  },
  updateNavigation: function updateNavigation() {
    var swiper = this;
    if (swiper.params.loop || !swiper.navigation) return;
    var _swiper$navigation = swiper.navigation,
      $nextEl = _swiper$navigation.$nextEl,
      $prevEl = _swiper$navigation.$prevEl;
    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        swiper.a11y.disableEl($prevEl);
        swiper.a11y.makeElNotFocusable($prevEl);
      } else {
        swiper.a11y.enableEl($prevEl);
        swiper.a11y.makeElFocusable($prevEl);
      }
    }
    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        swiper.a11y.disableEl($nextEl);
        swiper.a11y.makeElNotFocusable($nextEl);
      } else {
        swiper.a11y.enableEl($nextEl);
        swiper.a11y.makeElFocusable($nextEl);
      }
    }
  },
  updatePagination: function updatePagination() {
    var swiper = this;
    var params = swiper.params.a11y;
    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.bullets.each(function (bulletEl) {
        var $bulletEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(bulletEl);
        swiper.a11y.makeElFocusable($bulletEl);
        if (!swiper.params.pagination.renderBullet) {
          swiper.a11y.addElRole($bulletEl, 'button');
          swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
        }
      });
    }
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.a11y;
    swiper.$el.append(swiper.a11y.liveRegion); // Container

    var $containerEl = swiper.$el;
    if (params.containerRoleDescriptionMessage) {
      swiper.a11y.addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
    }
    if (params.containerMessage) {
      swiper.a11y.addElLabel($containerEl, params.containerMessage);
    } // Wrapper

    var $wrapperEl = swiper.$wrapperEl;
    var wrapperId = $wrapperEl.attr('id') || "swiper-wrapper-" + swiper.a11y.getRandomNumber(16);
    var live;
    swiper.a11y.addElId($wrapperEl, wrapperId);
    if (swiper.params.autoplay && swiper.params.autoplay.enabled) {
      live = 'off';
    } else {
      live = 'polite';
    }
    swiper.a11y.addElLive($wrapperEl, live); // Slide

    if (params.itemRoleDescriptionMessage) {
      swiper.a11y.addElRoleDescription((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.slides), params.itemRoleDescriptionMessage);
    }
    swiper.a11y.addElRole((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.slides), 'group');
    swiper.slides.each(function (slideEl) {
      var $slideEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slideEl);
      swiper.a11y.addElLabel($slideEl, $slideEl.index() + 1 + " / " + swiper.slides.length);
    }); // Navigation

    var $nextEl;
    var $prevEl;
    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }
    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }
    if ($nextEl && $nextEl.length) {
      swiper.a11y.makeElFocusable($nextEl);
      if ($nextEl[0].tagName !== 'BUTTON') {
        swiper.a11y.addElRole($nextEl, 'button');
        $nextEl.on('keydown', swiper.a11y.onEnterKey);
      }
      swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
      swiper.a11y.addElControls($nextEl, wrapperId);
    }
    if ($prevEl && $prevEl.length) {
      swiper.a11y.makeElFocusable($prevEl);
      if ($prevEl[0].tagName !== 'BUTTON') {
        swiper.a11y.addElRole($prevEl, 'button');
        $prevEl.on('keydown', swiper.a11y.onEnterKey);
      }
      swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
      swiper.a11y.addElControls($prevEl, wrapperId);
    } // Pagination

    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.on('keydown', "." + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();
    var $nextEl;
    var $prevEl;
    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }
    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }
    if ($nextEl) {
      $nextEl.off('keydown', swiper.a11y.onEnterKey);
    }
    if ($prevEl) {
      $prevEl.off('keydown', swiper.a11y.onEnterKey);
    } // Pagination

    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.off('keydown', "." + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'a11y',
  params: {
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.bindModuleMethods)(swiper, {
      a11y: _extends(_extends({}, A11y), {}, {
        liveRegion: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<span class=\"" + swiper.params.a11y.notificationClass + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")
      })
    });
  },
  on: {
    afterInit: function afterInit(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.init();
      swiper.a11y.updateNavigation();
    },
    toEdge: function toEdge(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    fromEdge: function fromEdge(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    paginationUpdate: function paginationUpdate(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updatePagination();
    },
    destroy: function destroy(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.destroy();
    }
  }
});

/***/ }),

/***/ 18:
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/autoplay/autoplay.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ 514);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ 3799);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* eslint no-underscore-dangle: "off" */


var Autoplay = {
  run: function run() {
    var swiper = this;
    var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    var delay = swiper.params.autoplay.delay;
    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }
    clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.timeout = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.nextTick)(function () {
      var autoplayResult;
      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isBeginning) {
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.isEnd) {
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else {
        swiper.autoplay.stop();
      }
      if (swiper.params.cssMode && swiper.autoplay.running) swiper.autoplay.run();else if (autoplayResult === false) {
        swiper.autoplay.run();
      }
    }, delay);
  },
  start: function start() {
    var swiper = this;
    if (typeof swiper.autoplay.timeout !== 'undefined') return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    swiper.emit('autoplayStart');
    swiper.autoplay.run();
    return true;
  },
  stop: function stop() {
    var swiper = this;
    if (!swiper.autoplay.running) return false;
    if (typeof swiper.autoplay.timeout === 'undefined') return false;
    if (swiper.autoplay.timeout) {
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = undefined;
    }
    swiper.autoplay.running = false;
    swiper.emit('autoplayStop');
    return true;
  },
  pause: function pause(speed) {
    var swiper = this;
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.paused = true;
    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      swiper.autoplay.run();
    } else {
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
    }
  },
  onVisibilityChange: function onVisibilityChange() {
    var swiper = this;
    var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
      swiper.autoplay.pause();
    }
    if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
      swiper.autoplay.run();
      swiper.autoplay.paused = false;
    }
  },
  onTransitionEnd: function onTransitionEnd(e) {
    var swiper = this;
    if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
    if (e.target !== swiper.$wrapperEl[0]) return;
    swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
    swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
    swiper.autoplay.paused = false;
    if (!swiper.autoplay.running) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.run();
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'autoplay',
  params: {
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.bindModuleMethods)(swiper, {
      autoplay: _extends(_extends({}, Autoplay), {}, {
        running: false,
        paused: false
      })
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.autoplay.enabled) {
        swiper.autoplay.start();
        var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
        document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
      }
    },
    beforeTransitionStart: function beforeTransitionStart(swiper, speed, internal) {
      if (swiper.autoplay.running) {
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.pause(speed);
        } else {
          swiper.autoplay.stop();
        }
      }
    },
    sliderFirstMove: function sliderFirstMove(swiper) {
      if (swiper.autoplay.running) {
        if (swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.stop();
        } else {
          swiper.autoplay.pause();
        }
      }
    },
    touchEnd: function touchEnd(swiper) {
      if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
        swiper.autoplay.run();
      }
    },
    destroy: function destroy(swiper) {
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
      }
      var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
      document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
    }
  }
});

/***/ }),

/***/ 6166:
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/controller/controller.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ 3799);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* eslint no-bitwise: ["error", { "allow": [">>"] }] */

var Controller = {
  LinearSpline: function LinearSpline(x, y) {
    var binarySearch = function search() {
      var maxIndex;
      var minIndex;
      var guess;
      return function (array, val) {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }();
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.

    var i1;
    var i3;
    this.interpolate = function interpolate(x2) {
      if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };
    return this;
  },
  // xxx: for now i will just save one spline function to to
  getInterpolateFunction: function getInterpolateFunction(c) {
    var swiper = this;
    if (!swiper.controller.spline) {
      swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
    }
  },
  setTranslate: function setTranslate(_setTranslate, byController) {
    var swiper = this;
    var controlled = swiper.controller.control;
    var multiplier;
    var controlledTranslate;
    var Swiper = swiper.constructor;
    function setControlledTranslate(c) {
      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === 'slide') {
        swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out

        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }
      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }
      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (var i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  },
  setTransition: function setTransition(duration, byController) {
    var swiper = this;
    var Swiper = swiper.constructor;
    var controlled = swiper.controller.control;
    var i;
    function setControlledTransition(c) {
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
            c.updateAutoHeight();
          });
        }
        c.$wrapperEl.transitionEnd(function () {
          if (!controlled) return;
          if (c.params.loop && swiper.params.controller.by === 'slide') {
            c.loopFix();
          }
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'controller',
  params: {
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.bindModuleMethods)(swiper, {
      controller: _extends({
        control: swiper.params.controller.control
      }, Controller)
    });
  },
  on: {
    update: function update(swiper) {
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    resize: function resize(swiper) {
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    observerUpdate: function observerUpdate(swiper) {
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    setTranslate: function setTranslate(swiper, translate, byController) {
      if (!swiper.controller.control) return;
      swiper.controller.setTranslate(translate, byController);
    },
    setTransition: function setTransition(swiper, duration, byController) {
      if (!swiper.controller.control) return;
      swiper.controller.setTransition(duration, byController);
    }
  }
});

/***/ }),

/***/ 2294:
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/breakpoints/getBreakpoint.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getBreakpoints; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ 514);

function getBreakpoints(breakpoints) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)(); // Get breakpoint for window width

  if (!breakpoints) return undefined;
  var breakpoint = false;
  var points = Object.keys(breakpoints).map(function (point) {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      var minRatio = parseFloat(point.substr(1));
      var value = window.innerHeight * minRatio;
      return {
        value: value,
        point: point
      };
    }
    return {
      value: point,
      point: point
    };
  });
  points.sort(function (a, b) {
    return parseInt(a.value, 10) - parseInt(b.value, 10);
  });
  for (var i = 0; i < points.length; i += 1) {
    var _points$i = points[i],
      point = _points$i.point,
      value = _points$i.value;
    if (value <= window.innerWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
}

/***/ }),

/***/ 784:
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/breakpoints/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setBreakpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setBreakpoint */ 6926);
/* harmony import */ var _getBreakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBreakpoint */ 2294);


/* harmony default export */ __webpack_exports__["default"] = ({
  setBreakpoint: _setBreakpoint__WEBPACK_IMPORTED_MODULE_0__["default"],
  getBreakpoint: _getBreakpoint__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ 6926:
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/breakpoints/setBreakpoint.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setBreakpoint; }
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ 3799);

function setBreakpoint() {
  var swiper = this;
  var activeIndex = swiper.activeIndex,
    initialized = swiper.initialized,
    _swiper$loopedSlides = swiper.loopedSlides,
    loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
    params = swiper.params,
    $el = swiper.$el;
  var breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

  var breakpoint = swiper.getBreakpoint(breakpoints);
  if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
    var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    if (breakpointOnlyParams) {
      ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(function (param) {
        var paramValue = breakpointOnlyParams[param];
        if (typeof paramValue === 'undefined') return;
        if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
          breakpointOnlyParams[param] = 'auto';
        } else if (param === 'slidesPerView') {
          breakpointOnlyParams[param] = parseFloat(paramValue);
        } else {
          breakpointOnlyParams[param] = parseInt(paramValue, 10);
        }
      });
    }
    var breakpointParams = breakpointOnlyParams || swiper.originalParams;
    var wasMultiRow = params.slidesPerColumn > 1;
    var isMultiRow = breakpointParams.slidesPerColumn > 1;
    if (wasMultiRow && !isMultiRow) {
      $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      $el.addClass(params.containerModifierClass + "multirow");
      if (breakpointParams.slidesPerColumnFill === 'column') {
        $el.addClass(params.containerModifierClass + "multirow-column");
      }
      swiper.emitContainerClasses();
    }
    var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    if (directionChanged && initialized) {
      swiper.changeDirection();
    }
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper.params, breakpointParams);
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    swiper.currentBreakpoint = breakpoint;
    swiper.emit('_beforeBreakpoint', breakpointParams);
    if (needsReLoop && initialized) {
      swiper.loopDestroy();
      swiper.loopCreate();
      swiper.updateSlides();
      swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
    }
    swiper.emit('breakpoint', breakpointParams);
  }
}

/***/ }),

/***/ 1882:
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/check-overflow/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function checkOverflow() {
  var swiper = this;
  var params = swiper.params;
  var wasLocked = swiper.isLocked;
  var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;
  if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
    swiper.isLocked = lastSlidePosition <= swiper.size;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  swiper.allowSlideNext = !swiper.isLocked;
  swiper.allowSlidePrev = !swiper.isLocked; // events

  if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
    if (swiper.navigation) swiper.navigation.update();
  }
}
/* harmony default export */ __webpack_exports__["default"] = ({
  checkOverflow: checkOverflow
});

/***/ }),

/***/ 6203:
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/classes/addClasses.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addClasses; }
/* harmony export */ });
function addClasses() {
  var swiper = this;
  var classNames = swiper.classNames,
    params = swiper.params,
    rtl = swiper.rtl,
    $el = swiper.$el,
    device = swiper.device;
  var suffixes = [];
  suffixes.push('initialized');
  suffixes.push(params.direction);
  if (params.freeMode) {
    suffixes.push('free-mode');
  }
  if (params.autoHeight) {
    suffixes.push('autoheight');
  }
  if (rtl) {
    suffixes.push('rtl');
  }
  if (params.slidesPerColumn > 1) {
    suffixes.push('multirow');
    if (params.slidesPerColumnFill === 'column') {
      suffixes.push('multirow-column');
    }
  }
  if (device.android) {
    suffixes.push('android');
  }
  if (device.ios) {
    suffixes.push('ios');
  }
  if (params.cssMode) {
    suffixes.push('css-mode');
  }
  suffixes.forEach(function (suffix) {
    classNames.push(params.containerModifierClass + suffix);
  });
  $el.addClass(classNames.join(' '));
  swiper.emitContainerClasses();
}

/***/ }),

/***/ 7186:
/*!******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/classes/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClasses */ 6203);
/* harmony import */ var _removeClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeClasses */ 7302);


/* harmony default export */ __webpack_exports__["default"] = ({
  addClasses: _addClasses__WEBPACK_IMPORTED_MODULE_0__["default"],
  removeClasses: _removeClasses__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ 7302:
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/classes/removeClasses.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ removeClasses; }
/* harmony export */ });
function removeClasses() {
  var swiper = this;
  var $el = swiper.$el,
    classNames = swiper.classNames;
  $el.removeClass(classNames.join(' '));
  swiper.emitContainerClasses();
}

/***/ }),

/***/ 8587:
/*!***************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/core-class.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ 7312);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/utils */ 3799);
/* harmony import */ var _utils_get_support__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/get-support */ 493);
/* harmony import */ var _utils_get_device__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/get-device */ 7117);
/* harmony import */ var _utils_get_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/get-browser */ 1498);
/* harmony import */ var _modules_resize_resize__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../modules/resize/resize */ 3572);
/* harmony import */ var _modules_observer_observer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../modules/observer/observer */ 4274);
/* harmony import */ var _modular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modular */ 4833);
/* harmony import */ var _events_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events-emitter */ 2360);
/* harmony import */ var _update_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update/index */ 2667);
/* harmony import */ var _translate_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translate/index */ 222);
/* harmony import */ var _transition_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transition/index */ 7576);
/* harmony import */ var _slide_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slide/index */ 1609);
/* harmony import */ var _loop_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loop/index */ 1890);
/* harmony import */ var _grab_cursor_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grab-cursor/index */ 1823);
/* harmony import */ var _manipulation_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./manipulation/index */ 6921);
/* harmony import */ var _events_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./events/index */ 264);
/* harmony import */ var _breakpoints_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./breakpoints/index */ 784);
/* harmony import */ var _classes_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./classes/index */ 7186);
/* harmony import */ var _images_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/index */ 9962);
/* harmony import */ var _check_overflow_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./check-overflow/index */ 1882);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./defaults */ 3741);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/* eslint no-param-reassign: "off" */






















var prototypes = {
  modular: _modular__WEBPACK_IMPORTED_MODULE_1__["default"],
  eventsEmitter: _events_emitter__WEBPACK_IMPORTED_MODULE_2__["default"],
  update: _update_index__WEBPACK_IMPORTED_MODULE_3__["default"],
  translate: _translate_index__WEBPACK_IMPORTED_MODULE_4__["default"],
  transition: _transition_index__WEBPACK_IMPORTED_MODULE_5__["default"],
  slide: _slide_index__WEBPACK_IMPORTED_MODULE_6__["default"],
  loop: _loop_index__WEBPACK_IMPORTED_MODULE_7__["default"],
  grabCursor: _grab_cursor_index__WEBPACK_IMPORTED_MODULE_8__["default"],
  manipulation: _manipulation_index__WEBPACK_IMPORTED_MODULE_9__["default"],
  events: _events_index__WEBPACK_IMPORTED_MODULE_10__["default"],
  breakpoints: _breakpoints_index__WEBPACK_IMPORTED_MODULE_11__["default"],
  checkOverflow: _check_overflow_index__WEBPACK_IMPORTED_MODULE_12__["default"],
  classes: _classes_index__WEBPACK_IMPORTED_MODULE_13__["default"],
  images: _images_index__WEBPACK_IMPORTED_MODULE_14__["default"]
};
var extendedDefaults = {};
var Swiper = /*#__PURE__*/function () {
  function Swiper() {
    var el;
    var params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
      params = args[0];
    } else {
      el = args[0];
      params = args[1];
    }
    if (!params) params = {};
    params = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_15__.extend)({}, params);
    if (el && !params.el) params.el = el; // Swiper Instance

    var swiper = this;
    swiper.support = (0,_utils_get_support__WEBPACK_IMPORTED_MODULE_16__.getSupport)();
    swiper.device = (0,_utils_get_device__WEBPACK_IMPORTED_MODULE_17__.getDevice)({
      userAgent: params.userAgent
    });
    swiper.browser = (0,_utils_get_browser__WEBPACK_IMPORTED_MODULE_18__.getBrowser)();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    if (typeof swiper.modules === 'undefined') {
      swiper.modules = {};
    }
    Object.keys(swiper.modules).forEach(function (moduleName) {
      var module = swiper.modules[moduleName];
      if (module.params) {
        var moduleParamName = Object.keys(module.params)[0];
        var moduleParams = module.params[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) return;
        if (!(moduleParamName in params && 'enabled' in moduleParams)) return;
        if (params[moduleParamName] === true) {
          params[moduleParamName] = {
            enabled: true
          };
        }
        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
          params[moduleParamName].enabled = true;
        }
        if (!params[moduleParamName]) params[moduleParamName] = {
          enabled: false
        };
      }
    }); // Extend defaults with modules params

    var swiperParams = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_15__.extend)({}, _defaults__WEBPACK_IMPORTED_MODULE_19__["default"]);
    swiper.useParams(swiperParams); // Extend defaults with passed params

    swiper.params = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_15__.extend)({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_15__.extend)({}, swiper.params);
    swiper.passedParams = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_15__.extend)({}, params); // add event listeners

    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(function (eventName) {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    } // Save Dom lib

    swiper.$ = _utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"]; // Find el

    var $el = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.params.el);
    el = $el[0];
    if (!el) {
      return undefined;
    }
    if ($el.length > 1) {
      var swipers = [];
      $el.each(function (containerEl) {
        var newParams = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_15__.extend)({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    }
    el.swiper = swiper; // Find Wrapper

    var $wrapperEl;
    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
      $wrapperEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(el.shadowRoot.querySelector("." + swiper.params.wrapperClass)); // Children needs to return slot items

      $wrapperEl.children = function (options) {
        return $el.children(options);
      };
    } else {
      $wrapperEl = $el.children("." + swiper.params.wrapperClass);
    } // Extend Swiper

    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_15__.extend)(swiper, {
      $el: $el,
      el: el,
      $wrapperEl: $wrapperEl,
      wrapperEl: $wrapperEl[0],
      // Classes
      classNames: [],
      // Slides
      slides: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal: function isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical: function isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box',
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEvents: function touchEvents() {
        var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
        var desktop = ['mousedown', 'mousemove', 'mouseup'];
        if (swiper.support.pointerEvents) {
          desktop = ['pointerdown', 'pointermove', 'pointerup'];
        }
        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
          cancel: touch[3]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        formElements: 'input, select, option, textarea, button, video, label',
        // Last click time
        lastClickTime: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_15__.now)(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }); // Install Modules

    swiper.useModules();
    swiper.emit('_swiper'); // Init

    if (swiper.params.init) {
      swiper.init();
    } // Return app instance

    return swiper;
  }
  var _proto = Swiper.prototype;
  _proto.emitContainerClasses = function emitContainerClasses() {
    var swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    var classes = swiper.el.className.split(' ').filter(function (className) {
      return className.indexOf('swiper-container') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', classes.join(' '));
  };
  _proto.getSlideClasses = function getSlideClasses(slideEl) {
    var swiper = this;
    return slideEl.className.split(' ').filter(function (className) {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  };
  _proto.emitSlidesClasses = function emitSlidesClasses() {
    var swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    swiper.slides.each(function (slideEl) {
      var classNames = swiper.getSlideClasses(slideEl);
      swiper.emit('_slideClass', slideEl, classNames);
    });
  };
  _proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
    var swiper = this;
    var params = swiper.params,
      slides = swiper.slides,
      slidesGrid = swiper.slidesGrid,
      swiperSize = swiper.size,
      activeIndex = swiper.activeIndex;
    var spv = 1;
    if (params.centeredSlides) {
      var slideSize = slides[activeIndex].swiperSlideSize;
      var breakLoop;
      for (var i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
        if (slides[_i] && !breakLoop) {
          slideSize += slides[_i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
        if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) {
          spv += 1;
        }
      }
    }
    return spv;
  };
  _proto.update = function update() {
    var swiper = this;
    if (!swiper || swiper.destroyed) return;
    var snapGrid = swiper.snapGrid,
      params = swiper.params; // Breakpoints

    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate() {
      var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    var translated;
    if (swiper.params.freeMode) {
      setTranslate();
      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit('update');
  };
  _proto.changeDirection = function changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }
    var swiper = this;
    var currentDirection = swiper.params.direction;
    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }
    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }
    swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.each(function (slideEl) {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  };
  _proto.init = function init() {
    var swiper = this;
    if (swiper.initialized) return;
    swiper.emit('beforeInit'); // Set breakpoint

    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    } // Add Classes

    swiper.addClasses(); // Create loop

    if (swiper.params.loop) {
      swiper.loopCreate();
    } // Update size

    swiper.updateSize(); // Update slides

    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    } // Set Grab Cursor

    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    } // Slide To Initial Slide

    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
    } // Attach events

    swiper.attachEvents(); // Init Flag

    swiper.initialized = true; // Emit

    swiper.emit('init');
    swiper.emit('afterInit');
  };
  _proto.destroy = function destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }
    if (cleanStyles === void 0) {
      cleanStyles = true;
    }
    var swiper = this;
    var params = swiper.params,
      $el = swiper.$el,
      $wrapperEl = swiper.$wrapperEl,
      slides = swiper.slides;
    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }
    swiper.emit('beforeDestroy'); // Init Flag

    swiper.initialized = false; // Detach events

    swiper.detachEvents(); // Destroy loop

    if (params.loop) {
      swiper.loopDestroy();
    } // Cleanup styles

    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr('style');
      $wrapperEl.removeAttr('style');
      if (slides && slides.length) {
        slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
      }
    }
    swiper.emit('destroy'); // Detach emitter events

    Object.keys(swiper.eventsListeners).forEach(function (eventName) {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_15__.deleteProps)(swiper);
    }
    swiper.destroyed = true;
    return null;
  };
  Swiper.extendDefaults = function extendDefaults(newDefaults) {
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_15__.extend)(extendedDefaults, newDefaults);
  };
  Swiper.installModule = function installModule(module) {
    if (!Swiper.prototype.modules) Swiper.prototype.modules = {};
    var name = module.name || Object.keys(Swiper.prototype.modules).length + "_" + (0,_utils_utils__WEBPACK_IMPORTED_MODULE_15__.now)();
    Swiper.prototype.modules[name] = module;
  };
  Swiper.use = function use(module) {
    if (Array.isArray(module)) {
      module.forEach(function (m) {
        return Swiper.installModule(m);
      });
      return Swiper;
    }
    Swiper.installModule(module);
    return Swiper;
  };
  _createClass(Swiper, null, [{
    key: "extendedDefaults",
    get: function get() {
      return extendedDefaults;
    }
  }, {
    key: "defaults",
    get: function get() {
      return _defaults__WEBPACK_IMPORTED_MODULE_19__["default"];
    }
  }]);
  return Swiper;
}();
Object.keys(prototypes).forEach(function (prototypeGroup) {
  Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([_modules_resize_resize__WEBPACK_IMPORTED_MODULE_20__["default"], _modules_observer_observer__WEBPACK_IMPORTED_MODULE_21__["default"]]);
/* harmony default export */ __webpack_exports__["default"] = (Swiper);

/***/ }),

/***/ 3741:
/*!*************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/defaults.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'container',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  nested: false,
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Free mode
  freeMode: false,
  freeModeMomentum: true,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: false,
  freeModeMinimumVelocity: 0.02,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: undefined,
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: 'column',
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: false,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  watchSlidesVisibility: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // Images
  preloadImages: true,
  updateOnImagesReady: true,
  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,
  loopPreventsSlide: true,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  // NS
  containerModifierClass: 'swiper-container-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
});

/***/ }),

/***/ 2360:
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events-emitter.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-underscore-dangle */
/* harmony default export */ __webpack_exports__["default"] = ({
  on: function on(events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;
    var method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(function (event) {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once: function once(events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;
    function onceHandler() {
      self.off(events, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny: function onAny(handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;
    var method = priority ? 'unshift' : 'push';
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny: function offAny(handler) {
    var self = this;
    if (!self.eventsAnyListeners) return self;
    var index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off: function off(events, handler) {
    var self = this;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(function (event) {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(function (eventHandler, index) {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit: function emit() {
    var self = this;
    if (!self.eventsListeners) return self;
    var events;
    var data;
    var context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    var eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(function (event) {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(function (eventHandler) {
          eventHandler.apply(context, [event].concat(data));
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        var handlers = [];
        self.eventsListeners[event].forEach(function (eventHandler) {
          handlers.push(eventHandler);
        });
        handlers.forEach(function (eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
});

/***/ }),

/***/ 264:
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ 514);
/* harmony import */ var _onTouchStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onTouchStart */ 621);
/* harmony import */ var _onTouchMove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onTouchMove */ 8410);
/* harmony import */ var _onTouchEnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onTouchEnd */ 3505);
/* harmony import */ var _onResize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onResize */ 6576);
/* harmony import */ var _onClick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onClick */ 9275);
/* harmony import */ var _onScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onScroll */ 3577);







var dummyEventAttached = false;
function dummyEventListener() {}
function attachEvents() {
  var swiper = this;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var params = swiper.params,
    touchEvents = swiper.touchEvents,
    el = swiper.el,
    wrapperEl = swiper.wrapperEl,
    device = swiper.device,
    support = swiper.support;
  swiper.onTouchStart = _onTouchStart__WEBPACK_IMPORTED_MODULE_1__["default"].bind(swiper);
  swiper.onTouchMove = _onTouchMove__WEBPACK_IMPORTED_MODULE_2__["default"].bind(swiper);
  swiper.onTouchEnd = _onTouchEnd__WEBPACK_IMPORTED_MODULE_3__["default"].bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = _onScroll__WEBPACK_IMPORTED_MODULE_4__["default"].bind(swiper);
  }
  swiper.onClick = _onClick__WEBPACK_IMPORTED_MODULE_5__["default"].bind(swiper);
  var capture = !!params.nested; // Touch Events

  if (!support.touch && support.pointerEvents) {
    el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
    document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
    document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (support.touch) {
      var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.addEventListener(touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
        passive: false,
        capture: capture
      } : capture);
      el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
      if (touchEvents.cancel) {
        el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }
      if (!dummyEventAttached) {
        document.addEventListener('touchstart', dummyEventListener);
        dummyEventAttached = true;
      }
    }
    if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
      el.addEventListener('mousedown', swiper.onTouchStart, false);
      document.addEventListener('mousemove', swiper.onTouchMove, capture);
      document.addEventListener('mouseup', swiper.onTouchEnd, false);
    }
  } // Prevent Links Clicks

  if (params.preventClicks || params.preventClicksPropagation) {
    el.addEventListener('click', swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl.addEventListener('scroll', swiper.onScroll);
  } // Resize handler

  if (params.updateOnWindowResize) {
    swiper.on(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResize__WEBPACK_IMPORTED_MODULE_6__["default"], true);
  } else {
    swiper.on('observerUpdate', _onResize__WEBPACK_IMPORTED_MODULE_6__["default"], true);
  }
}
function detachEvents() {
  var swiper = this;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var params = swiper.params,
    touchEvents = swiper.touchEvents,
    el = swiper.el,
    wrapperEl = swiper.wrapperEl,
    device = swiper.device,
    support = swiper.support;
  var capture = !!params.nested; // Touch Events

  if (!support.touch && support.pointerEvents) {
    el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
    document.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
    document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (support.touch) {
      var passiveListener = touchEvents.start === 'onTouchStart' && support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
      if (touchEvents.cancel) {
        el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }
    }
    if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
      el.removeEventListener('mousedown', swiper.onTouchStart, false);
      document.removeEventListener('mousemove', swiper.onTouchMove, capture);
      document.removeEventListener('mouseup', swiper.onTouchEnd, false);
    }
  } // Prevent Links Clicks

  if (params.preventClicks || params.preventClicksPropagation) {
    el.removeEventListener('click', swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl.removeEventListener('scroll', swiper.onScroll);
  } // Resize handler

  swiper.off(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResize__WEBPACK_IMPORTED_MODULE_6__["default"]);
}
/* harmony default export */ __webpack_exports__["default"] = ({
  attachEvents: attachEvents,
  detachEvents: detachEvents
});

/***/ }),

/***/ 9275:
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onClick.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onClick; }
/* harmony export */ });
function onClick(e) {
  var swiper = this;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

/***/ }),

/***/ 6576:
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onResize.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onResize; }
/* harmony export */ });
function onResize() {
  var swiper = this;
  var params = swiper.params,
    el = swiper.el;
  if (el && el.offsetWidth === 0) return; // Breakpoints

  if (params.breakpoints) {
    swiper.setBreakpoint();
  } // Save locks

  var allowSlideNext = swiper.allowSlideNext,
    allowSlidePrev = swiper.allowSlidePrev,
    snapGrid = swiper.snapGrid; // Disable locks on resize

  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    swiper.slideTo(swiper.activeIndex, 0, false, true);
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  } // Return locks after resize

  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

/***/ }),

/***/ 3577:
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onScroll.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onScroll; }
/* harmony export */ });
function onScroll() {
  var swiper = this;
  var wrapperEl = swiper.wrapperEl,
    rtlTranslate = swiper.rtlTranslate;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    if (rtlTranslate) {
      swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollLeft;
    }
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  } // eslint-disable-next-line

  if (swiper.translate === -0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit('setTranslate', swiper.translate, false);
}

/***/ }),

/***/ 3505:
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onTouchEnd.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onTouchEnd; }
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ 3799);

function onTouchEnd(event) {
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params,
    touches = swiper.touches,
    rtl = swiper.rtlTranslate,
    $wrapperEl = swiper.$wrapperEl,
    slidesGrid = swiper.slidesGrid,
    snapGrid = swiper.snapGrid;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  } // Return Grab Cursor

  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  } // Time diff

  var touchEndTime = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.now)();
  var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

  if (swiper.allowClick) {
    swiper.updateClickedSlide(e);
    swiper.emit('tap click', e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }
  data.lastClickTime = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.now)();
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  var currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode) {
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }
    if (params.freeModeMomentum) {
      if (data.velocities.length > 1) {
        var lastMoveEvent = data.velocities.pop();
        var velocityEvent = data.velocities.pop();
        var distance = lastMoveEvent.position - velocityEvent.position;
        var time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
          swiper.velocity = 0;
        } // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.

        if (time > 150 || (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.now)() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeModeMomentumVelocityRatio;
      data.velocities.length = 0;
      var momentumDuration = 1000 * params.freeModeMomentumRatio;
      var momentumDistance = swiper.velocity * momentumDuration;
      var newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      var doBounce = false;
      var afterBouncePosition;
      var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
      var needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeModeSticky) {
        var nextSlide;
        for (var j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }
        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        swiper.once('transitionEnd', function () {
          swiper.loopFix();
        });
      } // Fix duration

      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
        if (params.freeModeSticky) {
          // If freeModeSticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }
      if (params.freeModeMomentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(function () {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          swiper.emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(function () {
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeModeSticky) {
      swiper.slideToClosest();
      return;
    }
    if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    return;
  } // Find current slide

  var stopIndex = 0;
  var groupSize = swiper.slidesSizesGrid[0];
  for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + _increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + _increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  } // Find current slide size

  var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + increment);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

/***/ }),

/***/ 8410:
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onTouchMove.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onTouchMove; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ 514);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dom */ 7312);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ 3799);



function onTouchMove(event) {
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params,
    touches = swiper.touches,
    rtl = swiper.rtlTranslate;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    return;
  }
  if (data.isTouchEvent && e.type !== 'touchmove') return;
  var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
  var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
  var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    // isMoved = true;
    swiper.allowClick = false;
    if (data.isTouched) {
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.extend)(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.now)();
    }
    return;
  }
  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }
  if (data.isTouchEvent && document.activeElement) {
    if (e.target === document.activeElement && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target).is(data.formElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }
  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  var diffX = touches.currentX - touches.startX;
  var diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;
  if (typeof data.isScrolling === 'undefined') {
    var touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }
  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  if (!data.isMoved) {
    if (params.loop) {
      swiper.loopFix();
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }
    data.allowMomentumBounce = false; // Grab Cursor

    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit('sliderFirstMove', e);
  }
  swiper.emit('sliderMove', e);
  data.isMoved = true;
  var diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) diff = -diff;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;
  var disableParentSwiper = true;
  var resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  } // Directions locks

  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  } // Threshold

  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return; // Update active index in free mode

  if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode) {
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.now)()
    });
  } // Update progress

  swiper.updateProgress(data.currentTranslate); // Update translate

  swiper.setTranslate(data.currentTranslate);
}

/***/ }),

/***/ 621:
/*!************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onTouchStart.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onTouchStart; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ 514);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dom */ 7312);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ 3799);



function onTouchStart(event) {
  var swiper = this;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var data = swiper.touchEventsData;
  var params = swiper.params,
    touches = swiper.touches;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  var e = event;
  if (e.originalEvent) e = e.originalEvent;
  var $targetEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target);
  if (params.touchEventsTarget === 'wrapper') {
    if (!$targetEl.closest(swiper.wrapperEl).length) return;
  }
  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return; // change target el for shadow root componenet

  var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
  if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
    $targetEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(event.path[0]);
  }
  if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass)[0]) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!$targetEl.closest(params.swipeHandler)[0]) return;
  }
  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  var startX = touches.currentX;
  var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.screen.width - edgeSwipeThreshold)) {
    return;
  }
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.extend)(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.now)();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;
  if (e.type !== 'touchstart') {
    var preventDefault = true;
    if ($targetEl.is(data.formElements)) preventDefault = false;
    if (document.activeElement && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(document.activeElement).is(data.formElements) && document.activeElement !== $targetEl[0]) {
      document.activeElement.blur();
    }
    var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if (params.touchStartForcePreventDefault || shouldPreventDefault) {
      e.preventDefault();
    }
  }
  swiper.emit('touchStart', e);
}

/***/ }),

/***/ 1823:
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/grab-cursor/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setGrabCursor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setGrabCursor */ 5321);
/* harmony import */ var _unsetGrabCursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unsetGrabCursor */ 3584);


/* harmony default export */ __webpack_exports__["default"] = ({
  setGrabCursor: _setGrabCursor__WEBPACK_IMPORTED_MODULE_0__["default"],
  unsetGrabCursor: _unsetGrabCursor__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ 5321:
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/grab-cursor/setGrabCursor.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setGrabCursor; }
/* harmony export */ });
function setGrabCursor(moving) {
  var swiper = this;
  if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  var el = swiper.el;
  el.style.cursor = 'move';
  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}

/***/ }),

/***/ 3584:
/*!********************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/grab-cursor/unsetGrabCursor.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ unsetGrabCursor; }
/* harmony export */ });
function unsetGrabCursor() {
  var swiper = this;
  if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  swiper.el.style.cursor = '';
}

/***/ }),

/***/ 9962:
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/images/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadImage */ 8802);
/* harmony import */ var _preloadImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preloadImages */ 3776);


/* harmony default export */ __webpack_exports__["default"] = ({
  loadImage: _loadImage__WEBPACK_IMPORTED_MODULE_0__["default"],
  preloadImages: _preloadImages__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ 8802:
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/images/loadImage.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ loadImage; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ 514);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dom */ 7312);


function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var image;
  function onReady() {
    if (callback) callback();
  }
  var isPicture = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(imageEl).parent('picture')[0];
  if (!isPicture && (!imageEl.complete || !checkForComplete)) {
    if (src) {
      image = new window.Image();
      image.onload = onReady;
      image.onerror = onReady;
      if (sizes) {
        image.sizes = sizes;
      }
      if (srcset) {
        image.srcset = srcset;
      }
      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}

/***/ }),

/***/ 3776:
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/images/preloadImages.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ preloadImages; }
/* harmony export */ });
function preloadImages() {
  var swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');
  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }
  for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
    var imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
  }
}

/***/ }),

/***/ 1890:
/*!***************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/loop/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loopCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loopCreate */ 4905);
/* harmony import */ var _loopFix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loopFix */ 3534);
/* harmony import */ var _loopDestroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loopDestroy */ 25);



/* harmony default export */ __webpack_exports__["default"] = ({
  loopCreate: _loopCreate__WEBPACK_IMPORTED_MODULE_0__["default"],
  loopFix: _loopFix__WEBPACK_IMPORTED_MODULE_1__["default"],
  loopDestroy: _loopDestroy__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ 4905:
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/loop/loopCreate.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ loopCreate; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ 514);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dom */ 7312);


function loopCreate() {
  var swiper = this;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var params = swiper.params,
    $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

  $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
  var slides = $wrapperEl.children("." + params.slideClass);
  if (params.loopFillGroupWithBlank) {
    var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
    if (blankSlidesNum !== params.slidesPerGroup) {
      for (var i = 0; i < blankSlidesNum; i += 1) {
        var blankNode = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(document.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
        $wrapperEl.append(blankNode);
      }
      slides = $wrapperEl.children("." + params.slideClass);
    }
  }
  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
  swiper.loopedSlides += params.loopAdditionalSlides;
  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }
  var prependSlides = [];
  var appendSlides = [];
  slides.each(function (el, index) {
    var slide = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(el);
    if (index < swiper.loopedSlides) {
      appendSlides.push(el);
    }
    if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
      prependSlides.push(el);
    }
    slide.attr('data-swiper-slide-index', index);
  });
  for (var _i = 0; _i < appendSlides.length; _i += 1) {
    $wrapperEl.append((0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
  for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) {
    $wrapperEl.prepend((0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}

/***/ }),

/***/ 25:
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/loop/loopDestroy.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ loopDestroy; }
/* harmony export */ });
function loopDestroy() {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
    params = swiper.params,
    slides = swiper.slides;
  $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
  slides.removeAttr('data-swiper-slide-index');
}

/***/ }),

/***/ 3534:
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/loop/loopFix.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ loopFix; }
/* harmony export */ });
function loopFix() {
  var swiper = this;
  swiper.emit('beforeLoopFix');
  var activeIndex = swiper.activeIndex,
    slides = swiper.slides,
    loopedSlides = swiper.loopedSlides,
    allowSlidePrev = swiper.allowSlidePrev,
    allowSlideNext = swiper.allowSlideNext,
    snapGrid = swiper.snapGrid,
    rtl = swiper.rtlTranslate;
  var newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  var snapTranslate = -snapGrid[activeIndex];
  var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    var slideChanged = swiper.slideTo(newIndex, 0, false, true);
    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;
    var _slideChanged = swiper.slideTo(newIndex, 0, false, true);
    if (_slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  swiper.emit('loopFix');
}

/***/ }),

/***/ 1777:
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/addSlide.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addSlide; }
/* harmony export */ });
function addSlide(index, slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
    params = swiper.params,
    activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children("." + params.slideClass);
  }
  var baseLength = swiper.slides.length;
  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }
  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }
  var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  var slidesBuffer = [];
  for (var i = baseLength - 1; i >= index; i -= 1) {
    var currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }
  if (typeof slides === 'object' && 'length' in slides) {
    for (var _i = 0; _i < slides.length; _i += 1) {
      if (slides[_i]) $wrapperEl.append(slides[_i]);
    }
    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }
  for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
    $wrapperEl.append(slidesBuffer[_i2]);
  }
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

/***/ }),

/***/ 478:
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/appendSlide.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ appendSlide; }
/* harmony export */ });
function appendSlide(slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
    params = swiper.params;
  if (params.loop) {
    swiper.loopDestroy();
  }
  if (typeof slides === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }
}

/***/ }),

/***/ 6921:
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appendSlide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendSlide */ 478);
/* harmony import */ var _prependSlide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prependSlide */ 5778);
/* harmony import */ var _addSlide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addSlide */ 1777);
/* harmony import */ var _removeSlide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeSlide */ 9814);
/* harmony import */ var _removeAllSlides__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./removeAllSlides */ 9401);





/* harmony default export */ __webpack_exports__["default"] = ({
  appendSlide: _appendSlide__WEBPACK_IMPORTED_MODULE_0__["default"],
  prependSlide: _prependSlide__WEBPACK_IMPORTED_MODULE_1__["default"],
  addSlide: _addSlide__WEBPACK_IMPORTED_MODULE_2__["default"],
  removeSlide: _removeSlide__WEBPACK_IMPORTED_MODULE_3__["default"],
  removeAllSlides: _removeAllSlides__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ 5778:
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/prependSlide.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ prependSlide; }
/* harmony export */ });
function prependSlide(slides) {
  var swiper = this;
  var params = swiper.params,
    $wrapperEl = swiper.$wrapperEl,
    activeIndex = swiper.activeIndex;
  if (params.loop) {
    swiper.loopDestroy();
  }
  var newActiveIndex = activeIndex + 1;
  if (typeof slides === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.prepend(slides[i]);
    }
    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }
  swiper.slideTo(newActiveIndex, 0, false);
}

/***/ }),

/***/ 9401:
/*!*********************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/removeAllSlides.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ removeAllSlides; }
/* harmony export */ });
function removeAllSlides() {
  var swiper = this;
  var slidesIndexes = [];
  for (var i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }
  swiper.removeSlide(slidesIndexes);
}

/***/ }),

/***/ 9814:
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/removeSlide.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ removeSlide; }
/* harmony export */ });
function removeSlide(slidesIndexes) {
  var swiper = this;
  var params = swiper.params,
    $wrapperEl = swiper.$wrapperEl,
    activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children("." + params.slideClass);
  }
  var newActiveIndex = activeIndexBuffer;
  var indexToRemove;
  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (var i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

/***/ }),

/***/ 4833:
/*!************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/modular.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ 3799);

/* harmony default export */ __webpack_exports__["default"] = ({
  useParams: function useParams(instanceParams) {
    var instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName]; // Extend params

      if (module.params) {
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(instanceParams, module.params);
      }
    });
  },
  useModules: function useModules(modulesParams) {
    if (modulesParams === void 0) {
      modulesParams = {};
    }
    var instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      var moduleParams = modulesParams[moduleName] || {}; // Add event listeners

      if (module.on && instance.on) {
        Object.keys(module.on).forEach(function (moduleEventName) {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      } // Module create callback

      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  }
});

/***/ }),

/***/ 1609:
/*!****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slideTo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideTo */ 3043);
/* harmony import */ var _slideToLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideToLoop */ 4299);
/* harmony import */ var _slideNext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideNext */ 1616);
/* harmony import */ var _slidePrev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slidePrev */ 2622);
/* harmony import */ var _slideReset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slideReset */ 8220);
/* harmony import */ var _slideToClosest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slideToClosest */ 4534);
/* harmony import */ var _slideToClickedSlide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slideToClickedSlide */ 1168);







/* harmony default export */ __webpack_exports__["default"] = ({
  slideTo: _slideTo__WEBPACK_IMPORTED_MODULE_0__["default"],
  slideToLoop: _slideToLoop__WEBPACK_IMPORTED_MODULE_1__["default"],
  slideNext: _slideNext__WEBPACK_IMPORTED_MODULE_2__["default"],
  slidePrev: _slidePrev__WEBPACK_IMPORTED_MODULE_3__["default"],
  slideReset: _slideReset__WEBPACK_IMPORTED_MODULE_4__["default"],
  slideToClosest: _slideToClosest__WEBPACK_IMPORTED_MODULE_5__["default"],
  slideToClickedSlide: _slideToClickedSlide__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ 1616:
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideNext.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideNext; }
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  var swiper = this;
  var params = swiper.params,
    animating = swiper.animating;
  var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;
  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/***/ }),

/***/ 2622:
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slidePrev.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slidePrev; }
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  var swiper = this;
  var params = swiper.params,
    animating = swiper.animating,
    snapGrid = swiper.snapGrid,
    slidesGrid = swiper.slidesGrid,
    rtlTranslate = swiper.rtlTranslate;
  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }
  var translate = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  var normalizedTranslate = normalize(translate);
  var normalizedSnapGrid = snapGrid.map(function (val) {
    return normalize(val);
  });
  var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
  var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === 'undefined' && params.cssMode) {
    snapGrid.forEach(function (snap) {
      if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
    });
  }
  var prevIndex;
  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ 8220:
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideReset.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideReset; }
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  var swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ 3043:
/*!******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideTo.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideTo; }
/* harmony export */ });
function slideTo(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index !== 'number' && typeof index !== 'string') {
    throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof index + "] given.");
  }
  if (typeof index === 'string') {
    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */
    var indexAsNumber = parseInt(index, 10);
    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */

    var isValidNumber = isFinite(indexAsNumber);
    if (!isValidNumber) {
      throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + index + "] given.");
    } // Knowing that the converted `index` is a valid number,
    // we can update the original argument's value.

    index = indexAsNumber;
  }
  var swiper = this;
  var slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  var params = swiper.params,
    snapGrid = swiper.snapGrid,
    slidesGrid = swiper.slidesGrid,
    previousIndex = swiper.previousIndex,
    activeIndex = swiper.activeIndex,
    rtl = swiper.rtlTranslate,
    wrapperEl = swiper.wrapperEl;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }
  var translate = -snapGrid[snapIndex]; // Update progress

  swiper.updateProgress(translate); // Normalize slideIndex

  if (params.normalizeSlideIndex) {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
        slideIndex = i;
      }
    }
  } // Directions locks

  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }
  var direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex); // Update Height

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }
    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    var isH = swiper.isHorizontal();
    var t = -translate;
    if (rtl) {
      t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
    }
    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
    } else {
      // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
        var _wrapperEl$scrollTo;
        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = t, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    swiper.transitionEnd(runCallbacks, direction);
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
  }
  return true;
}

/***/ }),

/***/ 1168:
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideToClickedSlide.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideToClickedSlide; }
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dom */ 7312);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/utils */ 3799);


function slideToClickedSlide() {
  var swiper = this;
  var params = swiper.params,
    $wrapperEl = swiper.$wrapperEl;
  var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  var slideToIndex = swiper.clickedIndex;
  var realIndex;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.nextTick)(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.nextTick)(function () {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

/***/ }),

/***/ 4534:
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideToClosest.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideToClosest; }
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (threshold === void 0) {
    threshold = 0.5;
  }
  var swiper = this;
  var index = swiper.activeIndex;
  var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    var currentSnap = swiper.snapGrid[snapIndex];
    var nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    var prevSnap = swiper.snapGrid[snapIndex - 1];
    var _currentSnap = swiper.snapGrid[snapIndex];
    if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

/***/ }),

/***/ 4299:
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideToLoop.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideToLoop; }
/* harmony export */ });
function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  var swiper = this;
  var newIndex = index;
  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }
  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ 7576:
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/transition/index.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setTransition */ 5783);
/* harmony import */ var _transitionStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitionStart */ 6215);
/* harmony import */ var _transitionEnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transitionEnd */ 3943);



/* harmony default export */ __webpack_exports__["default"] = ({
  setTransition: _setTransition__WEBPACK_IMPORTED_MODULE_0__["default"],
  transitionStart: _transitionStart__WEBPACK_IMPORTED_MODULE_1__["default"],
  transitionEnd: _transitionEnd__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ 5783:
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/transition/setTransition.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setTransition; }
/* harmony export */ });
function setTransition(duration, byController) {
  var swiper = this;
  if (!swiper.params.cssMode) {
    swiper.$wrapperEl.transition(duration);
  }
  swiper.emit('setTransition', duration, byController);
}

/***/ }),

/***/ 3943:
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/transition/transitionEnd.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ transitionEnd; }
/* harmony export */ });
function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  var swiper = this;
  var activeIndex = swiper.activeIndex,
    previousIndex = swiper.previousIndex,
    params = swiper.params;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  var dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }
  swiper.emit('transitionEnd');
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionEnd');
      return;
    }
    swiper.emit('slideChangeTransitionEnd');
    if (dir === 'next') {
      swiper.emit('slideNextTransitionEnd');
    } else {
      swiper.emit('slidePrevTransitionEnd');
    }
  }
}

/***/ }),

/***/ 6215:
/*!*******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/transition/transitionStart.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ transitionStart; }
/* harmony export */ });
function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  var swiper = this;
  var activeIndex = swiper.activeIndex,
    params = swiper.params,
    previousIndex = swiper.previousIndex;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  var dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }
  swiper.emit('transitionStart');
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionStart');
      return;
    }
    swiper.emit('slideChangeTransitionStart');
    if (dir === 'next') {
      swiper.emit('slideNextTransitionStart');
    } else {
      swiper.emit('slidePrevTransitionStart');
    }
  }
}

/***/ }),

/***/ 7837:
/*!***************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/getTranslate.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getSwiperTranslate; }
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ 3799);

function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? 'x' : 'y';
  }
  var swiper = this;
  var params = swiper.params,
    rtl = swiper.rtlTranslate,
    translate = swiper.translate,
    $wrapperEl = swiper.$wrapperEl;
  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }
  if (params.cssMode) {
    return translate;
  }
  var currentTranslate = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getTranslate)($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

/***/ }),

/***/ 222:
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getTranslate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTranslate */ 7837);
/* harmony import */ var _setTranslate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setTranslate */ 8953);
/* harmony import */ var _minTranslate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minTranslate */ 6146);
/* harmony import */ var _maxTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maxTranslate */ 8553);
/* harmony import */ var _translateTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translateTo */ 7936);





/* harmony default export */ __webpack_exports__["default"] = ({
  getTranslate: _getTranslate__WEBPACK_IMPORTED_MODULE_0__["default"],
  setTranslate: _setTranslate__WEBPACK_IMPORTED_MODULE_1__["default"],
  minTranslate: _minTranslate__WEBPACK_IMPORTED_MODULE_2__["default"],
  maxTranslate: _maxTranslate__WEBPACK_IMPORTED_MODULE_3__["default"],
  translateTo: _translateTo__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ 8553:
/*!***************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/maxTranslate.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ maxTranslate; }
/* harmony export */ });
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

/***/ }),

/***/ 6146:
/*!***************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/minTranslate.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ minTranslate; }
/* harmony export */ });
function minTranslate() {
  return -this.snapGrid[0];
}

/***/ }),

/***/ 8953:
/*!***************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/setTranslate.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setTranslate; }
/* harmony export */ });
function setTranslate(translate, byController) {
  var swiper = this;
  var rtl = swiper.rtlTranslate,
    params = swiper.params,
    $wrapperEl = swiper.$wrapperEl,
    wrapperEl = swiper.wrapperEl,
    progress = swiper.progress;
  var x = 0;
  var y = 0;
  var z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }
  swiper.emit('setTranslate', swiper.translate, byController);
}

/***/ }),

/***/ 7936:
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/translateTo.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ translateTo; }
/* harmony export */ });
function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
  if (translate === void 0) {
    translate = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (translateBounds === void 0) {
    translateBounds = true;
  }
  var swiper = this;
  var params = swiper.params,
    wrapperEl = swiper.wrapperEl;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  var minTranslate = swiper.minTranslate();
  var maxTranslate = swiper.maxTranslate();
  var newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    var isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
        var _wrapperEl$scrollTo;
        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = -newTranslate, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
      }
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}

/***/ }),

/***/ 2667:
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _updateSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateSize */ 547);
/* harmony import */ var _updateSlides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateSlides */ 183);
/* harmony import */ var _updateAutoHeight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateAutoHeight */ 2263);
/* harmony import */ var _updateSlidesOffset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateSlidesOffset */ 1532);
/* harmony import */ var _updateSlidesProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateSlidesProgress */ 6743);
/* harmony import */ var _updateProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateProgress */ 4664);
/* harmony import */ var _updateSlidesClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateSlidesClasses */ 7039);
/* harmony import */ var _updateActiveIndex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updateActiveIndex */ 6133);
/* harmony import */ var _updateClickedSlide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updateClickedSlide */ 7273);









/* harmony default export */ __webpack_exports__["default"] = ({
  updateSize: _updateSize__WEBPACK_IMPORTED_MODULE_0__["default"],
  updateSlides: _updateSlides__WEBPACK_IMPORTED_MODULE_1__["default"],
  updateAutoHeight: _updateAutoHeight__WEBPACK_IMPORTED_MODULE_2__["default"],
  updateSlidesOffset: _updateSlidesOffset__WEBPACK_IMPORTED_MODULE_3__["default"],
  updateSlidesProgress: _updateSlidesProgress__WEBPACK_IMPORTED_MODULE_4__["default"],
  updateProgress: _updateProgress__WEBPACK_IMPORTED_MODULE_5__["default"],
  updateSlidesClasses: _updateSlidesClasses__WEBPACK_IMPORTED_MODULE_6__["default"],
  updateActiveIndex: _updateActiveIndex__WEBPACK_IMPORTED_MODULE_7__["default"],
  updateClickedSlide: _updateClickedSlide__WEBPACK_IMPORTED_MODULE_8__["default"]
});

/***/ }),

/***/ 6133:
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateActiveIndex.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateActiveIndex; }
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ 3799);

function updateActiveIndex(newActiveIndex) {
  var swiper = this;
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  var slidesGrid = swiper.slidesGrid,
    snapGrid = swiper.snapGrid,
    params = swiper.params,
    previousIndex = swiper.activeIndex,
    previousRealIndex = swiper.realIndex,
    previousSnapIndex = swiper.snapIndex;
  var activeIndex = newActiveIndex;
  var snapIndex;
  if (typeof activeIndex === 'undefined') {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    } // Normalize slideIndex

    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }
  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }
    return;
  } // Get real index

  var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper, {
    snapIndex: snapIndex,
    realIndex: realIndex,
    previousIndex: previousIndex,
    activeIndex: activeIndex
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');
  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit('slideChange');
  }
}

/***/ }),

/***/ 2263:
/*!****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateAutoHeight.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateAutoHeight; }
/* harmony export */ });
function updateAutoHeight(speed) {
  var swiper = this;
  var activeSlides = [];
  var newHeight = 0;
  var i;
  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  } // Find slides currently in view

  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      swiper.visibleSlides.each(function (slide) {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        var index = swiper.activeIndex + i;
        if (index > swiper.slides.length) break;
        activeSlides.push(swiper.slides.eq(index)[0]);
      }
    }
  } else {
    activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
  } // Find new height from highest slide in view

  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      var height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  } // Update Height

  if (newHeight) swiper.$wrapperEl.css('height', newHeight + "px");
}

/***/ }),

/***/ 7273:
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateClickedSlide.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateClickedSlide; }
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dom */ 7312);

function updateClickedSlide(e) {
  var swiper = this;
  var params = swiper.params;
  var slide = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target).closest("." + params.slideClass)[0];
  var slideFound = false;
  if (slide) {
    for (var i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) slideFound = true;
    }
  }
  if (slide && slideFound) {
    swiper.clickedSlide = slide;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slide).index();
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

/***/ }),

/***/ 4664:
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateProgress.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateProgress; }
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ 3799);

function updateProgress(translate) {
  var swiper = this;
  if (typeof translate === 'undefined') {
    var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  var params = swiper.params;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  var progress = swiper.progress,
    isBeginning = swiper.isBeginning,
    isEnd = swiper.isEnd;
  var wasBeginning = isBeginning;
  var wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper, {
    progress: progress,
    isBeginning: isBeginning,
    isEnd: isEnd
  });
  if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }
  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }
  swiper.emit('progress', progress);
}

/***/ }),

/***/ 547:
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSize.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateSize; }
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ 3799);

function updateSize() {
  var swiper = this;
  var width;
  var height;
  var $el = swiper.$el;
  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }
  if (typeof swiper.params.height !== 'undefined' && swiper.params.width !== null) {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  } // Subtract paddings

  width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
  height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper, {
    width: width,
    height: height,
    size: swiper.isHorizontal() ? width : height
  });
}

/***/ }),

/***/ 183:
/*!************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSlides.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateSlides; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ 514);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/utils */ 3799);


function updateSlides() {
  var swiper = this;
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var params = swiper.params;
  var $wrapperEl = swiper.$wrapperEl,
    swiperSize = swiper.size,
    rtl = swiper.rtlTranslate,
    wrongRTL = swiper.wrongRTL;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  var slides = $wrapperEl.children("." + swiper.params.slideClass);
  var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  var snapGrid = [];
  var slidesGrid = [];
  var slidesSizesGrid = [];
  function slidesForMargin(slideEl, slideIndex) {
    if (!params.cssMode) return true;
    if (slideIndex === slides.length - 1) {
      return false;
    }
    return true;
  }
  var offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  var offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  var previousSnapGridLength = swiper.snapGrid.length;
  var previousSlidesGridLength = swiper.snapGrid.length;
  var spaceBetween = params.spaceBetween;
  var slidePosition = -offsetBefore;
  var prevSlideSize = 0;
  var index = 0;
  if (typeof swiperSize === 'undefined') {
    return;
  }
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  }
  swiper.virtualSize = -spaceBetween; // reset margins

  if (rtl) slides.css({
    marginLeft: '',
    marginTop: ''
  });else slides.css({
    marginRight: '',
    marginBottom: ''
  });
  var slidesNumberEvenToRows;
  if (params.slidesPerColumn > 1) {
    if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
    }
    if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
    }
  } // Calc slides

  var slideSize;
  var slidesPerColumn = params.slidesPerColumn;
  var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
  var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
  for (var i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    var slide = slides.eq(i);
    if (params.slidesPerColumn > 1) {
      // Set slides order
      var newSlideOrderIndex = void 0;
      var column = void 0;
      var row = void 0;
      if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
        var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
        var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
        var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
        row = Math.floor(slideIndexInGroup / columnsInGroup);
        column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
        slide.css({
          '-webkit-box-ordinal-group': newSlideOrderIndex,
          '-moz-box-ordinal-group': newSlideOrderIndex,
          '-ms-flex-order': newSlideOrderIndex,
          '-webkit-order': newSlideOrderIndex,
          order: newSlideOrderIndex
        });
      } else if (params.slidesPerColumnFill === 'column') {
        column = Math.floor(i / slidesPerColumn);
        row = i - column * slidesPerColumn;
        if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
          row += 1;
          if (row >= slidesPerColumn) {
            row = 0;
            column += 1;
          }
        }
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - row * slidesPerRow;
      }
      slide.css("margin-" + (swiper.isHorizontal() ? 'top' : 'left'), row !== 0 && params.spaceBetween && params.spaceBetween + "px");
    }
    if (slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      var slideStyles = window.getComputedStyle(slide[0], null);
      var currentTransform = slide[0].style.transform;
      var currentWebKitTransform = slide[0].style.webkitTransform;
      if (currentTransform) {
        slide[0].style.transform = 'none';
      }
      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = 'none';
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        if (swiper.isHorizontal()) {
          var width = parseFloat(slideStyles.getPropertyValue('width') || 0);
          var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left') || 0);
          var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right') || 0);
          var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left') || 0);
          var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right') || 0);
          var boxSizing = slideStyles.getPropertyValue('box-sizing');
          if (boxSizing && boxSizing === 'border-box') {
            slideSize = width + marginLeft + marginRight;
          } else {
            var _slide$ = slide[0],
              clientWidth = _slide$.clientWidth,
              offsetWidth = _slide$.offsetWidth;
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        } else {
          var height = parseFloat(slideStyles.getPropertyValue('height') || 0);
          var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top') || 0);
          var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom') || 0);
          var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top') || 0);
          var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom') || 0);
          var _boxSizing = slideStyles.getPropertyValue('box-sizing');
          if (_boxSizing && _boxSizing === 'border-box') {
            slideSize = height + marginTop + marginBottom;
          } else {
            var _slide$2 = slide[0],
              clientHeight = _slide$2.clientHeight,
              offsetHeight = _slide$2.offsetHeight;
            slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom + (offsetHeight - clientHeight);
          }
        }
      }
      if (currentTransform) {
        slide[0].style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i]) {
        if (swiper.isHorizontal()) {
          slides[i].style.width = slideSize + "px";
        } else {
          slides[i].style.height = slideSize + "px";
        }
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  var newSlidesGrid;
  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({
      width: swiper.virtualSize + params.spaceBetween + "px"
    });
  }
  if (params.setWrapperSize) {
    if (swiper.isHorizontal()) $wrapperEl.css({
      width: swiper.virtualSize + params.spaceBetween + "px"
    });else $wrapperEl.css({
      height: swiper.virtualSize + params.spaceBetween + "px"
    });
  }
  if (params.slidesPerColumn > 1) {
    swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
    if (swiper.isHorizontal()) $wrapperEl.css({
      width: swiper.virtualSize + params.spaceBetween + "px"
    });else $wrapperEl.css({
      height: swiper.virtualSize + params.spaceBetween + "px"
    });
    if (params.centeredSlides) {
      newSlidesGrid = [];
      for (var _i = 0; _i < snapGrid.length; _i += 1) {
        var slidesGridItem = snapGrid[_i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }
      snapGrid = newSlidesGrid;
    }
  } // Remove last grid elements depending on width

  if (!params.centeredSlides) {
    newSlidesGrid = [];
    for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
      var _slidesGridItem = snapGrid[_i2];
      if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);
      if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(_slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (params.spaceBetween !== 0) {
    if (swiper.isHorizontal()) {
      if (rtl) slides.filter(slidesForMargin).css({
        marginLeft: spaceBetween + "px"
      });else slides.filter(slidesForMargin).css({
        marginRight: spaceBetween + "px"
      });
    } else slides.filter(slidesForMargin).css({
      marginBottom: spaceBetween + "px"
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    var allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    var maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(function (snap) {
      if (snap < 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    var _allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    _allSlidesSize -= params.spaceBetween;
    if (_allSlidesSize < swiperSize) {
      var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
      snapGrid.forEach(function (snap, snapIndex) {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach(function (snap, snapIndex) {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(swiper, {
    slides: slides,
    snapGrid: snapGrid,
    slidesGrid: slidesGrid,
    slidesSizesGrid: slidesSizesGrid
  });
  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }
  if (params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateSlidesOffset();
  }
}

/***/ }),

/***/ 7039:
/*!*******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSlidesClasses.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateSlidesClasses; }
/* harmony export */ });
function updateSlidesClasses() {
  var swiper = this;
  var slides = swiper.slides,
    params = swiper.params,
    $wrapperEl = swiper.$wrapperEl,
    activeIndex = swiper.activeIndex,
    realIndex = swiper.realIndex;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
  var activeSlide;
  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find("." + params.slideClass + "[data-swiper-slide-index=\"" + activeIndex + "\"]");
  } else {
    activeSlide = slides.eq(activeIndex);
  } // Active classes

  activeSlide.addClass(params.slideActiveClass);
  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
    }
  } // Next Slide

  var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);
  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  } // Prev Slide

  var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);
  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }
  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
    }
    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
    }
  }
  swiper.emitSlidesClasses();
}

/***/ }),

/***/ 1532:
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSlidesOffset.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateSlidesOffset; }
/* harmony export */ });
function updateSlidesOffset() {
  var swiper = this;
  var slides = swiper.slides;
  for (var i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}

/***/ }),

/***/ 6743:
/*!********************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSlidesProgress.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateSlidesProgress; }
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dom */ 7312);

function updateSlidesProgress(translate) {
  if (translate === void 0) {
    translate = this && this.translate || 0;
  }
  var swiper = this;
  var params = swiper.params;
  var slides = swiper.slides,
    rtl = swiper.rtlTranslate;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  var offsetCenter = -translate;
  if (rtl) offsetCenter = translate; // Visible Slides

  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  for (var i = 0; i < slides.length; i += 1) {
    var slide = slides[i];
    var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);
    if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
      var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
      var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
      if (isVisible) {
        swiper.visibleSlides.push(slide);
        swiper.visibleSlidesIndexes.push(i);
        slides.eq(i).addClass(params.slideVisibleClass);
      }
    }
    slide.progress = rtl ? -slideProgress : slideProgress;
  }
  swiper.visibleSlides = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.visibleSlides);
}

/***/ }),

/***/ 5249:
/*!*********************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/effect-coverflow/effect-coverflow.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ 7312);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ 3799);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}


var Coverflow = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var swiperWidth = swiper.width,
      swiperHeight = swiper.height,
      slides = swiper.slides,
      slidesSizesGrid = swiper.slidesSizesGrid;
    var params = swiper.params.coverflowEffect;
    var isHorizontal = swiper.isHorizontal();
    var transform = swiper.translate;
    var center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    var rotate = isHorizontal ? params.rotate : -params.rotate;
    var translate = params.depth; // Each slide offset from center

    for (var i = 0, length = slides.length; i < length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideSize = slidesSizesGrid[i];
      var slideOffset = $slideEl[0].swiperSlideOffset;
      var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
      var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

      var translateZ = -translate * Math.abs(offsetMultiplier);
      var stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }
      var translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      var translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(" + scale + ")";
      $slideEl.transform(slideTransform);
      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        // Set shadows
        var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if ($shadowBeforeEl.length === 0) {
          $shadowBeforeEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
          $slideEl.append($shadowBeforeEl);
        }
        if ($shadowAfterEl.length === 0) {
          $shadowAfterEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
          $slideEl.append($shadowAfterEl);
        }
        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'effect-coverflow',
  params: {
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.bindModuleMethods)(swiper, {
      coverflowEffect: _extends({}, Coverflow)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'coverflow') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "coverflow");
      swiper.classNames.push(swiper.params.containerModifierClass + "3d");
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTransition(duration);
    }
  }
});

/***/ }),

/***/ 3792:
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/effect-cube/effect-cube.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ 7312);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ 3799);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}


var Cube = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var $el = swiper.$el,
      $wrapperEl = swiper.$wrapperEl,
      slides = swiper.slides,
      swiperWidth = swiper.width,
      swiperHeight = swiper.height,
      rtl = swiper.rtlTranslate,
      swiperSize = swiper.size,
      browser = swiper.browser;
    var params = swiper.params.cubeEffect;
    var isHorizontal = swiper.isHorizontal();
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var wrapperRotate = 0;
    var $cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])('<div class="swiper-cube-shadow"></div>');
          $wrapperEl.append($cubeShadowEl);
        }
        $cubeShadowEl.css({
          height: swiperWidth + "px"
        });
      } else {
        $cubeShadowEl = $el.find('.swiper-cube-shadow');
        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])('<div class="swiper-cube-shadow"></div>');
          $el.append($cubeShadowEl);
        }
      }
    }
    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
      }
      var slideAngle = slideIndex * 90;
      var round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      var tx = 0;
      var ty = 0;
      var tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }
      if (rtl) {
        tx = -tx;
      }
      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }
      var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }
      $slideEl.transform(transform);
      if (params.slideShadows) {
        // Set shadows
        var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if (shadowBefore.length === 0) {
          shadowBefore = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
          $slideEl.append(shadowBefore);
        }
        if (shadowAfter.length === 0) {
          shadowAfter = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
          $slideEl.append(shadowAfter);
        }
        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
    }
    $wrapperEl.css({
      '-webkit-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
      '-moz-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
      '-ms-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
      'transform-origin': "50% 50% -" + swiperSize / 2 + "px"
    });
    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl.transform("translate3d(0px, " + (swiperWidth / 2 + params.shadowOffset) + "px, " + -swiperWidth / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + params.shadowScale + ")");
      } else {
        var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        var scale1 = params.shadowScale;
        var scale2 = params.shadowScale / multiplier;
        var offset = params.shadowOffset;
        $cubeShadowEl.transform("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + (swiperHeight / 2 + offset) + "px, " + -swiperHeight / 2 / scale2 + "px) rotateX(-90deg)");
      }
    }
    var zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
    $wrapperEl.transform("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)");
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var $el = swiper.$el,
      slides = swiper.slides;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      $el.find('.swiper-cube-shadow').transition(duration);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'effect-cube',
  params: {
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.bindModuleMethods)(swiper, {
      cubeEffect: _extends({}, Cube)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'cube') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "cube");
      swiper.classNames.push(swiper.params.containerModifierClass + "3d");
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true
      };
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(swiper.params, overwriteParams);
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTransition(duration);
    }
  }
});

/***/ }),

/***/ 3195:
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/effect-fade/effect-fade.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ 3799);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

var Fade = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var slides = swiper.slides;
    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = swiper.slides.eq(i);
      var offset = $slideEl[0].swiperSlideOffset;
      var tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      var ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      $slideEl.css({
        opacity: slideOpacity
      }).transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var slides = swiper.slides,
      $wrapperEl = swiper.$wrapperEl;
    slides.transition(duration);
    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false;
      slides.transitionEnd(function () {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'effect-fade',
  params: {
    fadeEffect: {
      crossFade: false
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.bindModuleMethods)(swiper, {
      fadeEffect: _extends({}, Fade)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'fade') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "fade");
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper.params, overwriteParams);
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTransition(duration);
    }
  }
});

/***/ }),

/***/ 5199:
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/effect-flip/effect-flip.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ 7312);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ 3799);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}


var Flip = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var slides = swiper.slides,
      rtl = swiper.rtlTranslate;
    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var progress = $slideEl[0].progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      }
      var offset = $slideEl[0].swiperSlideOffset;
      var rotate = -180 * progress;
      var rotateY = rotate;
      var rotateX = 0;
      var tx = -offset;
      var ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }
      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
      if (swiper.params.flipEffect.slideShadows) {
        // Set shadows
        var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if (shadowBefore.length === 0) {
          shadowBefore = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>");
          $slideEl.append(shadowBefore);
        }
        if (shadowAfter.length === 0) {
          shadowAfter = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>");
          $slideEl.append(shadowAfter);
        }
        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
      $slideEl.transform("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var slides = swiper.slides,
      activeIndex = swiper.activeIndex,
      $wrapperEl = swiper.$wrapperEl;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false; // eslint-disable-next-line

      slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return; // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;

        eventTriggered = true;
        swiper.animating = false;
        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'effect-flip',
  params: {
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.bindModuleMethods)(swiper, {
      flipEffect: _extends({}, Flip)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'flip') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "flip");
      swiper.classNames.push(swiper.params.containerModifierClass + "3d");
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(swiper.params, overwriteParams);
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTransition(duration);
    }
  }
});

/***/ }),

/***/ 3116:
/*!*******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/hash-navigation/hash-navigation.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ 514);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ 7312);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ 3799);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}



var HashNavigation = {
  onHashCange: function onHashCange() {
    var swiper = this;
    var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    swiper.emit('hashChange');
    var newHash = document.location.hash.replace('#', '');
    var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
    if (newHash !== activeSlideHash) {
      var newIndex = swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-hash=\"" + newHash + "\"]").index();
      if (typeof newIndex === 'undefined') return;
      swiper.slideTo(newIndex);
    }
  },
  setHash: function setHash() {
    var swiper = this;
    var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;
    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, "#" + swiper.slides.eq(swiper.activeIndex).attr('data-hash') || 0);
      swiper.emit('hashSet');
    } else {
      var slide = swiper.slides.eq(swiper.activeIndex);
      var hash = slide.attr('data-hash') || slide.attr('data-history');
      document.location.hash = hash || '';
      swiper.emit('hashSet');
    }
  },
  init: function init() {
    var swiper = this;
    var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    swiper.hashNavigation.initialized = true;
    var hash = document.location.hash.replace('#', '');
    if (hash) {
      var speed = 0;
      for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
        var slide = swiper.slides.eq(i);
        var slideHash = slide.attr('data-hash') || slide.attr('data-history');
        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          var index = slide.index();
          swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
        }
      }
    }
    if (swiper.params.hashNavigation.watchState) {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(window).on('hashchange', swiper.hashNavigation.onHashCange);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    if (swiper.params.hashNavigation.watchState) {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(window).off('hashchange', swiper.hashNavigation.onHashCange);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hash-navigation',
  params: {
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.bindModuleMethods)(swiper, {
      hashNavigation: _extends({
        initialized: false
      }, HashNavigation)
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.init();
      }
    },
    destroy: function destroy(swiper) {
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.destroy();
      }
    },
    transitionEnd: function transitionEnd(swiper) {
      if (swiper.hashNavigation.initialized) {
        swiper.hashNavigation.setHash();
      }
    },
    slideChange: function slideChange(swiper) {
      if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
        swiper.hashNavigation.setHash();
      }
    }
  }
});

/***/ }),

/***/ 5809:
/*!***************************************************************!*\
  !*** ./node_modules/swiper/esm/components/history/history.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ 514);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ 3799);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}


var History = {
  init: function init() {
    var swiper = this;
    var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    if (!swiper.params.history) return;
    if (!window.history || !window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }
    var history = swiper.history;
    history.initialized = true;
    history.paths = History.getPathValues(swiper.params.url);
    if (!history.paths.key && !history.paths.value) return;
    history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
    if (!swiper.params.history.replaceState) {
      window.addEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    if (!swiper.params.history.replaceState) {
      window.removeEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  setHistoryPopState: function setHistoryPopState() {
    var swiper = this;
    swiper.history.paths = History.getPathValues(swiper.params.url);
    swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
  },
  getPathValues: function getPathValues(urlOverride) {
    var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    var location;
    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window.location;
    }
    var pathArray = location.pathname.slice(1).split('/').filter(function (part) {
      return part !== '';
    });
    var total = pathArray.length;
    var key = pathArray[total - 2];
    var value = pathArray[total - 1];
    return {
      key: key,
      value: value
    };
  },
  setHistory: function setHistory(key, index) {
    var swiper = this;
    var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    if (!swiper.history.initialized || !swiper.params.history.enabled) return;
    var location;
    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window.location;
    }
    var slide = swiper.slides.eq(index);
    var value = History.slugify(slide.attr('data-history'));
    if (!location.pathname.includes(key)) {
      value = key + "/" + value;
    }
    var currentState = window.history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper.params.history.replaceState) {
      window.history.replaceState({
        value: value
      }, null, value);
    } else {
      window.history.pushState({
        value: value
      }, null, value);
    }
  },
  slugify: function slugify(text) {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  },
  scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
    var swiper = this;
    if (value) {
      for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
        var slide = swiper.slides.eq(i);
        var slideHistory = History.slugify(slide.attr('data-history'));
        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          var index = slide.index();
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'history',
  params: {
    history: {
      enabled: false,
      replaceState: false,
      key: 'slides'
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.bindModuleMethods)(swiper, {
      history: _extends({}, History)
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.history.enabled) {
        swiper.history.init();
      }
    },
    destroy: function destroy(swiper) {
      if (swiper.params.history.enabled) {
        swiper.history.destroy();
      }
    },
    transitionEnd: function transitionEnd(swiper) {
      if (swiper.history.initialized) {
        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    },
    slideChange: function slideChange(swiper) {
      if (swiper.history.initialized && swiper.params.cssMode) {
        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    }
  }
});

/***/ }),

/***/ 6625:
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/keyboard/keyboard.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ 514);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ 7312);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ 3799);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}



var Keyboard = {
  handle: function handle(event) {
    var swiper = this;
    var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    var rtl = swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    var kc = e.keyCode || e.charCode;
    var pageUpDown = swiper.params.keyboard.pageUpDown;
    var isPageUp = pageUpDown && kc === 33;
    var isPageDown = pageUpDown && kc === 34;
    var isArrowLeft = kc === 37;
    var isArrowRight = kc === 39;
    var isArrowUp = kc === 38;
    var isArrowDown = kc === 40; // Directions locks

    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }
    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }
    if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }
    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      var inView = false; // Check that swiper should be inside of visible area of window

      if (swiper.$el.parents("." + swiper.params.slideClass).length > 0 && swiper.$el.parents("." + swiper.params.slideActiveClass).length === 0) {
        return undefined;
      }
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      var swiperOffset = swiper.$el.offset();
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];
      for (var i = 0; i < swiperCoord.length; i += 1) {
        var point = swiperCoord[i];
        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          inView = true;
        }
      }
      if (!inView) return undefined;
    }
    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }
    swiper.emit('keyPress', kc);
    return undefined;
  },
  enable: function enable() {
    var swiper = this;
    var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    if (swiper.keyboard.enabled) return;
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(document).on('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = true;
  },
  disable: function disable() {
    var swiper = this;
    var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    if (!swiper.keyboard.enabled) return;
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(document).off('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = false;
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'keyboard',
  params: {
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.bindModuleMethods)(swiper, {
      keyboard: _extends({
        enabled: false
      }, Keyboard)
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.keyboard.enabled) {
        swiper.keyboard.enable();
      }
    },
    destroy: function destroy(swiper) {
      if (swiper.keyboard.enabled) {
        swiper.keyboard.disable();
      }
    }
  }
});

/***/ }),

/***/ 2493:
/*!*********************************************************!*\
  !*** ./node_modules/swiper/esm/components/lazy/lazy.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ 7312);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ 3799);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}


var Lazy = {
  loadInSlide: function loadInSlide(index, loadInDuplicate) {
    if (loadInDuplicate === void 0) {
      loadInDuplicate = true;
    }
    var swiper = this;
    var params = swiper.params.lazy;
    if (typeof index === 'undefined') return;
    if (swiper.slides.length === 0) return;
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var $slideEl = isVirtual ? swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + index + "\"]") : swiper.slides.eq(index);
    var $images = $slideEl.find("." + params.elementClass + ":not(." + params.loadedClass + "):not(." + params.loadingClass + ")");
    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
      $images.push($slideEl[0]);
    }
    if ($images.length === 0) return;
    $images.each(function (imageEl) {
      var $imageEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(imageEl);
      $imageEl.addClass(params.loadingClass);
      var background = $imageEl.attr('data-background');
      var src = $imageEl.attr('data-src');
      var srcset = $imageEl.attr('data-srcset');
      var sizes = $imageEl.attr('data-sizes');
      var $pictureEl = $imageEl.parent('picture');
      swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;
        if (background) {
          $imageEl.css('background-image', "url(\"" + background + "\")");
          $imageEl.removeAttr('data-background');
        } else {
          if (srcset) {
            $imageEl.attr('srcset', srcset);
            $imageEl.removeAttr('data-srcset');
          }
          if (sizes) {
            $imageEl.attr('sizes', sizes);
            $imageEl.removeAttr('data-sizes');
          }
          if ($pictureEl.length) {
            $pictureEl.children('source').each(function (sourceEl) {
              var $source = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(sourceEl);
              if ($source.attr('data-srcset')) {
                $source.attr('srcset', $source.attr('data-srcset'));
                $source.removeAttr('data-srcset');
              }
            });
          }
          if (src) {
            $imageEl.attr('src', src);
            $imageEl.removeAttr('data-src');
          }
        }
        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
        $slideEl.find("." + params.preloaderClass).remove();
        if (swiper.params.loop && loadInDuplicate) {
          var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
            var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + swiper.params.slideDuplicateClass + ")");
            swiper.lazy.loadInSlide(originalSlide.index(), false);
          } else {
            var duplicatedSlide = swiper.$wrapperEl.children("." + swiper.params.slideDuplicateClass + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]");
            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
          }
        }
        swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      });
      swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
    });
  },
  load: function load() {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl,
      swiperParams = swiper.params,
      slides = swiper.slides,
      activeIndex = swiper.activeIndex;
    var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
    var params = swiperParams.lazy;
    var slidesPerView = swiperParams.slidesPerView;
    if (slidesPerView === 'auto') {
      slidesPerView = 0;
    }
    function slideExist(index) {
      if (isVirtual) {
        if ($wrapperEl.children("." + swiperParams.slideClass + "[data-swiper-slide-index=\"" + index + "\"]").length) {
          return true;
        }
      } else if (slides[index]) return true;
      return false;
    }
    function slideIndex(slideEl) {
      if (isVirtual) {
        return (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slideEl).attr('data-swiper-slide-index');
      }
      return (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slideEl).index();
    }
    if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;
    if (swiper.params.watchSlidesVisibility) {
      $wrapperEl.children("." + swiperParams.slideVisibleClass).each(function (slideEl) {
        var index = isVirtual ? (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slideEl).attr('data-swiper-slide-index') : (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slideEl).index();
        swiper.lazy.loadInSlide(index);
      });
    } else if (slidesPerView > 1) {
      for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
        if (slideExist(i)) swiper.lazy.loadInSlide(i);
      }
    } else {
      swiper.lazy.loadInSlide(activeIndex);
    }
    if (params.loadPrevNext) {
      if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
        var amount = params.loadPrevNextAmount;
        var spv = slidesPerView;
        var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
        var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

        for (var _i = activeIndex + slidesPerView; _i < maxIndex; _i += 1) {
          if (slideExist(_i)) swiper.lazy.loadInSlide(_i);
        } // Prev Slides

        for (var _i2 = minIndex; _i2 < activeIndex; _i2 += 1) {
          if (slideExist(_i2)) swiper.lazy.loadInSlide(_i2);
        }
      } else {
        var nextSlide = $wrapperEl.children("." + swiperParams.slideNextClass);
        if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));
        var prevSlide = $wrapperEl.children("." + swiperParams.slidePrevClass);
        if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'lazy',
  params: {
    lazy: {
      enabled: false,
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: false,
      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader'
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.bindModuleMethods)(swiper, {
      lazy: _extends({
        initialImageLoaded: false
      }, Lazy)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
        swiper.params.preloadImages = false;
      }
    },
    init: function init(swiper) {
      if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
        swiper.lazy.load();
      }
    },
    scroll: function scroll(swiper) {
      if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
        swiper.lazy.load();
      }
    },
    resize: function resize(swiper) {
      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    scrollbarDragMove: function scrollbarDragMove(swiper) {
      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    transitionStart: function transitionStart(swiper) {
      if (swiper.params.lazy.enabled) {
        if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) {
          swiper.lazy.load();
        }
      }
    },
    transitionEnd: function transitionEnd(swiper) {
      if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
        swiper.lazy.load();
      }
    },
    slideChange: function slideChange(swiper) {
      if (swiper.params.lazy.enabled && swiper.params.cssMode) {
        swiper.lazy.load();
      }
    }
  }
});

/***/ }),

/***/ 2883:
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/mousewheel/mousewheel.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ 514);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ 7312);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ 3799);



function isEventSupported() {
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var eventName = 'onwheel';
  var isSupported = eventName in document;
  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }
  if (!isSupported && document.implementation && document.implementation.hasFeature &&
  // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  document.implementation.hasFeature('', '') !== true) {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
  }
  return isSupported;
}
var Mousewheel = {
  lastScrollTime: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.now)(),
  lastEventBeforeSnap: undefined,
  recentWheelEvents: [],
  event: function event() {
    var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    if (window.navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
    return isEventSupported() ? 'wheel' : 'mousewheel';
  },
  normalize: function normalize(e) {
    // Reasonable defaults
    var PIXEL_STEP = 10;
    var LINE_HEIGHT = 40;
    var PAGE_HEIGHT = 800;
    var sX = 0;
    var sY = 0; // spinX, spinY

    var pX = 0;
    var pY = 0; // pixelX, pixelY
    // Legacy

    if ('detail' in e) {
      sY = e.detail;
    }
    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }
    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    } // side scrolling on FF with DOMMouseScroll

    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ('deltaY' in e) {
      pY = e.deltaY;
    }
    if ('deltaX' in e) {
      pX = e.deltaX;
    }
    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }
    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    } // Fall-back if spin cannot be determined

    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  },
  handleMouseEnter: function handleMouseEnter() {
    var swiper = this;
    swiper.mouseEntered = true;
  },
  handleMouseLeave: function handleMouseLeave() {
    var swiper = this;
    swiper.mouseEntered = false;
  },
  handle: function handle(event) {
    var e = event;
    var swiper = this;
    var params = swiper.params.mousewheel;
    if (swiper.params.cssMode) {
      e.preventDefault();
    }
    var target = swiper.$el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.mousewheel.eventsTarget);
    }
    if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    var delta = 0;
    var rtlFactor = swiper.rtlTranslate ? -1 : 1;
    var data = Mousewheel.normalize(e);
    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }
    if (delta === 0) return true;
    if (params.invert) delta = -delta;
    if (!swiper.params.freeMode) {
      // Register the new event in a variable which stores the relevant data
      var newEvent = {
        time: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.now)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      }; // Keep the most recent events

      var recentWheelEvents = swiper.mousewheel.recentWheelEvents;
      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }
      var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.

      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          swiper.mousewheel.animateSlider(newEvent);
        }
      } else {
        swiper.mousewheel.animateSlider(newEvent);
      } // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.

      if (swiper.mousewheel.releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:
      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      var _newEvent = {
        time: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.now)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      var lastEventBeforeSnap = swiper.mousewheel.lastEventBeforeSnap;
      var ignoreWheelEvents = lastEventBeforeSnap && _newEvent.time < lastEventBeforeSnap.time + 500 && _newEvent.delta <= lastEventBeforeSnap.delta && _newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        swiper.mousewheel.lastEventBeforeSnap = undefined;
        if (swiper.params.loop) {
          swiper.loopFix();
        }
        var position = swiper.getTranslate() + delta * params.sensitivity;
        var wasBeginning = swiper.isBeginning;
        var wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }
        if (swiper.params.freeModeSticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(swiper.mousewheel.timeout);
          swiper.mousewheel.timeout = undefined;
          var _recentWheelEvents = swiper.mousewheel.recentWheelEvents;
          if (_recentWheelEvents.length >= 15) {
            _recentWheelEvents.shift(); // only store the last N events
          }
          var _prevEvent = _recentWheelEvents.length ? _recentWheelEvents[_recentWheelEvents.length - 1] : undefined;
          var firstEvent = _recentWheelEvents[0];
          _recentWheelEvents.push(_newEvent);
          if (_prevEvent && (_newEvent.delta > _prevEvent.delta || _newEvent.direction !== _prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            _recentWheelEvents.splice(0);
          } else if (_recentWheelEvents.length >= 15 && _newEvent.time - firstEvent.time < 500 && firstEvent.delta - _newEvent.delta >= 1 && _newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            var snapToThreshold = delta > 0 ? 0.8 : 0.2;
            swiper.mousewheel.lastEventBeforeSnap = _newEvent;
            _recentWheelEvents.splice(0);
            swiper.mousewheel.timeout = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.nextTick)(function () {
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }
          if (!swiper.mousewheel.timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            swiper.mousewheel.timeout = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.nextTick)(function () {
              var snapToThreshold = 0.5;
              swiper.mousewheel.lastEventBeforeSnap = _newEvent;
              _recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        } // Emit event

        if (!ignoreWheelEvents) swiper.emit('scroll', e); // Stop autoplay

        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
      }
    }
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  },
  animateSlider: function animateSlider(newEvent) {
    var swiper = this;
    var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    if (this.params.mousewheel.thresholdDelta && newEvent.delta < this.params.mousewheel.thresholdDelta) {
      // Prevent if delta of wheel scroll delta is below configured threshold
      return false;
    }
    if (this.params.mousewheel.thresholdTime && (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.now)() - swiper.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) {
      // Prevent if time between scrolls is below configured threshold
      return false;
    } // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).

    if (newEvent.delta >= 6 && (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.now)() - swiper.mousewheel.lastScrollTime < 60) {
      // Return false as a default
      return true;
    } // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.

    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        swiper.emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      swiper.emit('scroll', newEvent.raw);
    } // If you got here is because an animation has been triggered so store the current time

    swiper.mousewheel.lastScrollTime = new window.Date().getTime(); // Return false as a default

    return false;
  },
  releaseScroll: function releaseScroll(newEvent) {
    var swiper = this;
    var params = swiper.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }
    return false;
  },
  enable: function enable() {
    var swiper = this;
    var event = Mousewheel.event();
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
      return true;
    }
    if (!event) return false;
    if (swiper.mousewheel.enabled) return false;
    var target = swiper.$el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.mousewheel.eventsTarget);
    }
    target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
    target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
    target.on(event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = true;
    return true;
  },
  disable: function disable() {
    var swiper = this;
    var event = Mousewheel.event();
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
      return true;
    }
    if (!event) return false;
    if (!swiper.mousewheel.enabled) return false;
    var target = swiper.$el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.mousewheel.eventsTarget);
    }
    target.off(event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = false;
    return true;
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'mousewheel',
  params: {
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.bindModuleMethods)(swiper, {
      mousewheel: {
        enabled: false,
        lastScrollTime: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.now)(),
        lastEventBeforeSnap: undefined,
        recentWheelEvents: [],
        enable: Mousewheel.enable,
        disable: Mousewheel.disable,
        handle: Mousewheel.handle,
        handleMouseEnter: Mousewheel.handleMouseEnter,
        handleMouseLeave: Mousewheel.handleMouseLeave,
        animateSlider: Mousewheel.animateSlider,
        releaseScroll: Mousewheel.releaseScroll
      }
    });
  },
  on: {
    init: function init(swiper) {
      if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
        swiper.mousewheel.disable();
      }
      if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
    },
    destroy: function destroy(swiper) {
      if (swiper.params.cssMode) {
        swiper.mousewheel.enable();
      }
      if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
    }
  }
});

/***/ }),

/***/ 9616:
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/navigation/navigation.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ 7312);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ 3799);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}


var Navigation = {
  update: function update() {
    // Update Navigation Buttons
    var swiper = this;
    var params = swiper.params.navigation;
    if (swiper.params.loop) return;
    var _swiper$navigation = swiper.navigation,
      $nextEl = _swiper$navigation.$nextEl,
      $prevEl = _swiper$navigation.$prevEl;
    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        $prevEl.addClass(params.disabledClass);
      } else {
        $prevEl.removeClass(params.disabledClass);
      }
      $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        $nextEl.addClass(params.disabledClass);
      } else {
        $nextEl.removeClass(params.disabledClass);
      }
      $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  },
  onPrevClick: function onPrevClick(e) {
    var swiper = this;
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop) return;
    swiper.slidePrev();
  },
  onNextClick: function onNextClick(e) {
    var swiper = this;
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop) return;
    swiper.slideNext();
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.navigation;
    if (!(params.nextEl || params.prevEl)) return;
    var $nextEl;
    var $prevEl;
    if (params.nextEl) {
      $nextEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(params.nextEl);
      if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
        $nextEl = swiper.$el.find(params.nextEl);
      }
    }
    if (params.prevEl) {
      $prevEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(params.prevEl);
      if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
        $prevEl = swiper.$el.find(params.prevEl);
      }
    }
    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', swiper.navigation.onNextClick);
    }
    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', swiper.navigation.onPrevClick);
    }
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(swiper.navigation, {
      $nextEl: $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl: $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });
  },
  destroy: function destroy() {
    var swiper = this;
    var _swiper$navigation2 = swiper.navigation,
      $nextEl = _swiper$navigation2.$nextEl,
      $prevEl = _swiper$navigation2.$prevEl;
    if ($nextEl && $nextEl.length) {
      $nextEl.off('click', swiper.navigation.onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }
    if ($prevEl && $prevEl.length) {
      $prevEl.off('click', swiper.navigation.onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'navigation',
  params: {
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock'
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.bindModuleMethods)(swiper, {
      navigation: _extends({}, Navigation)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.navigation.init();
      swiper.navigation.update();
    },
    toEdge: function toEdge(swiper) {
      swiper.navigation.update();
    },
    fromEdge: function fromEdge(swiper) {
      swiper.navigation.update();
    },
    destroy: function destroy(swiper) {
      swiper.navigation.destroy();
    },
    click: function click(swiper, e) {
      var _swiper$navigation3 = swiper.navigation,
        $nextEl = _swiper$navigation3.$nextEl,
        $prevEl = _swiper$navigation3.$prevEl;
      if (swiper.params.navigation.hideOnClick && !(0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target).is($prevEl) && !(0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target).is($nextEl)) {
        var isHidden;
        if ($nextEl) {
          isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
        } else if ($prevEl) {
          isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
        }
        if (isHidden === true) {
          swiper.emit('navigationShow');
        } else {
          swiper.emit('navigationHide');
        }
        if ($nextEl) {
          $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
        if ($prevEl) {
          $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
      }
    }
  }
});

/***/ }),

/***/ 6671:
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/pagination/pagination.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ 7312);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ 3799);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}


var Pagination = {
  update: function update() {
    // Render || Update Pagination bullets/items
    var swiper = this;
    var rtl = swiper.rtl;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el; // Current/Total

    var current;
    var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
        current -= slidesLength - swiper.loopedSlides * 2;
      }
      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    } // Types

    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      var bullets = swiper.pagination.bullets;
      var firstIndex;
      var lastIndex;
      var midIndex;
      if (params.dynamicBullets) {
        swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");
        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;
          if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (swiper.pagination.dynamicBulletIndex < 0) {
            swiper.pagination.dynamicBulletIndex = 0;
          }
        }
        firstIndex = current - swiper.pagination.dynamicBulletIndex;
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");
      if ($el.length > 1) {
        bullets.each(function (bullet) {
          var $bullet = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(bullet);
          var bulletIndex = $bullet.index();
          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass(params.bulletActiveClass + "-main");
            }
            if (bulletIndex === firstIndex) {
              $bullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
            }
            if (bulletIndex === lastIndex) {
              $bullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
            }
          }
        });
      } else {
        var $bullet = bullets.eq(current);
        var bulletIndex = $bullet.index();
        $bullet.addClass(params.bulletActiveClass);
        if (params.dynamicBullets) {
          var $firstDisplayedBullet = bullets.eq(firstIndex);
          var $lastDisplayedBullet = bullets.eq(lastIndex);
          for (var i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass(params.bulletActiveClass + "-main");
          }
          if (swiper.params.loop) {
            if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
              for (var _i = params.dynamicMainBullets; _i >= 0; _i -= 1) {
                bullets.eq(bullets.length - _i).addClass(params.bulletActiveClass + "-main");
              }
              bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
            } else {
              $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
              $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
            }
          } else {
            $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
            $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
          }
        }
      }
      if (params.dynamicBullets) {
        var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
        var offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + "px");
      }
    }
    if (params.type === 'fraction') {
      $el.find("." + params.currentClass).text(params.formatFractionCurrent(current + 1));
      $el.find("." + params.totalClass).text(params.formatFractionTotal(total));
    }
    if (params.type === 'progressbar') {
      var progressbarDirection;
      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }
      var scale = (current + 1) / total;
      var scaleX = 1;
      var scaleY = 1;
      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }
      $el.find("." + params.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
    }
    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      swiper.emit('paginationRender', $el[0]);
    } else {
      swiper.emit('paginationUpdate', $el[0]);
    }
    $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
  },
  render: function render() {
    // Render Container
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el;
    var paginationHTML = '';
    if (params.type === 'bullets') {
      var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      for (var i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += "<" + params.bulletElement + " class=\"" + params.bulletClass + "\"></" + params.bulletElement + ">";
        }
      }
      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find("." + params.bulletClass);
    }
    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + ("<span class=\"" + params.totalClass + "\"></span>");
      }
      $el.html(paginationHTML);
    }
    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = "<span class=\"" + params.progressbarFillClass + "\"></span>";
      }
      $el.html(paginationHTML);
    }
    if (params.type !== 'custom') {
      swiper.emit('paginationRender', swiper.pagination.$el[0]);
    }
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el) return;
    var $el = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(params.el);
    if ($el.length === 0) return;
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
      $el = swiper.$el.find(params.el);
    }
    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }
    $el.addClass(params.modifierClass + params.type);
    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass("" + params.modifierClass + params.type + "-dynamic");
      swiper.pagination.dynamicBulletIndex = 0;
      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }
    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }
    if (params.clickable) {
      $el.on('click', "." + params.bulletClass, function onClick(e) {
        e.preventDefault();
        var index = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index += swiper.loopedSlides;
        swiper.slideTo(index);
      });
    }
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(swiper.pagination, {
      $el: $el,
      el: $el[0]
    });
  },
  destroy: function destroy() {
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var $el = swiper.pagination.$el;
    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
    if (params.clickable) {
      $el.off('click', "." + params.bulletClass);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'pagination',
  params: {
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: function formatFractionCurrent(number) {
        return number;
      },
      formatFractionTotal: function formatFractionTotal(number) {
        return number;
      },
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      modifierClass: 'swiper-pagination-',
      // NEW
      currentClass: 'swiper-pagination-current',
      totalClass: 'swiper-pagination-total',
      hiddenClass: 'swiper-pagination-hidden',
      progressbarFillClass: 'swiper-pagination-progressbar-fill',
      progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
      clickableClass: 'swiper-pagination-clickable',
      // NEW
      lockClass: 'swiper-pagination-lock'
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.bindModuleMethods)(swiper, {
      pagination: _extends({
        dynamicBulletIndex: 0
      }, Pagination)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    },
    activeIndexChange: function activeIndexChange(swiper) {
      if (swiper.params.loop) {
        swiper.pagination.update();
      } else if (typeof swiper.snapIndex === 'undefined') {
        swiper.pagination.update();
      }
    },
    snapIndexChange: function snapIndexChange(swiper) {
      if (!swiper.params.loop) {
        swiper.pagination.update();
      }
    },
    slidesLengthChange: function slidesLengthChange(swiper) {
      if (swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    snapGridLengthChange: function snapGridLengthChange(swiper) {
      if (!swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    destroy: function destroy(swiper) {
      swiper.pagination.destroy();
    },
    click: function click(swiper, e) {
      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !(0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target).hasClass(swiper.params.pagination.bulletClass)) {
        var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
        if (isHidden === true) {
          swiper.emit('paginationShow');
        } else {
          swiper.emit('paginationHide');
        }
        swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
      }
    }
  }
});

/***/ }),

/***/ 5824:
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/parallax/parallax.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ 7312);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ 3799);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}


var Parallax = {
  setTransform: function setTransform(el, progress) {
    var swiper = this;
    var rtl = swiper.rtl;
    var $el = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(el);
    var rtlFactor = rtl ? -1 : 1;
    var p = $el.attr('data-swiper-parallax') || '0';
    var x = $el.attr('data-swiper-parallax-x');
    var y = $el.attr('data-swiper-parallax-y');
    var scale = $el.attr('data-swiper-parallax-scale');
    var opacity = $el.attr('data-swiper-parallax-opacity');
    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }
    if (x.indexOf('%') >= 0) {
      x = parseInt(x, 10) * progress * rtlFactor + "%";
    } else {
      x = x * progress * rtlFactor + "px";
    }
    if (y.indexOf('%') >= 0) {
      y = parseInt(y, 10) * progress + "%";
    } else {
      y = y * progress + "px";
    }
    if (typeof opacity !== 'undefined' && opacity !== null) {
      var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      $el[0].style.opacity = currentOpacity;
    }
    if (typeof scale === 'undefined' || scale === null) {
      $el.transform("translate3d(" + x + ", " + y + ", 0px)");
    } else {
      var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      $el.transform("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")");
    }
  },
  setTranslate: function setTranslate() {
    var swiper = this;
    var $el = swiper.$el,
      slides = swiper.slides,
      progress = swiper.progress,
      snapGrid = swiper.snapGrid;
    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
      swiper.parallax.setTransform(el, progress);
    });
    slides.each(function (slideEl, slideIndex) {
      var slideProgress = slideEl.progress;
      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
        swiper.parallax.setTransform(el, slideProgress);
      });
    });
  },
  setTransition: function setTransition(duration) {
    if (duration === void 0) {
      duration = this.params.speed;
    }
    var swiper = this;
    var $el = swiper.$el;
    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (parallaxEl) {
      var $parallaxEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(parallaxEl);
      var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      $parallaxEl.transition(parallaxDuration);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'parallax',
  params: {
    parallax: {
      enabled: false
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.bindModuleMethods)(swiper, {
      parallax: _extends({}, Parallax)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (!swiper.params.parallax.enabled) return;
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    init: function init(swiper) {
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTranslate();
    },
    setTranslate: function setTranslate(swiper) {
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTransition(duration);
    }
  }
});

/***/ }),

/***/ 7730:
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/scrollbar/scrollbar.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ 514);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ 7312);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ 3799);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}



var Scrollbar = {
  setTranslate: function setTranslate() {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
      rtl = swiper.rtlTranslate,
      progress = swiper.progress;
    var dragSize = scrollbar.dragSize,
      trackSize = scrollbar.trackSize,
      $dragEl = scrollbar.$dragEl,
      $el = scrollbar.$el;
    var params = swiper.params.scrollbar;
    var newSize = dragSize;
    var newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      $dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
      $dragEl[0].style.width = newSize + "px";
    } else {
      $dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
      $dragEl[0].style.height = newSize + "px";
    }
    if (params.hide) {
      clearTimeout(swiper.scrollbar.timeout);
      $el[0].style.opacity = 1;
      swiper.scrollbar.timeout = setTimeout(function () {
        $el[0].style.opacity = 0;
        $el.transition(400);
      }, 1000);
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.$dragEl.transition(duration);
  },
  updateSize: function updateSize() {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    var scrollbar = swiper.scrollbar;
    var $dragEl = scrollbar.$dragEl,
      $el = scrollbar.$el;
    $dragEl[0].style.width = '';
    $dragEl[0].style.height = '';
    var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
    var divider = swiper.size / swiper.virtualSize;
    var moveDivider = divider * (trackSize / swiper.size);
    var dragSize;
    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }
    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = dragSize + "px";
    } else {
      $dragEl[0].style.height = dragSize + "px";
    }
    if (divider >= 1) {
      $el[0].style.display = 'none';
    } else {
      $el[0].style.display = '';
    }
    if (swiper.params.scrollbar.hide) {
      $el[0].style.opacity = 0;
    }
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.extend)(scrollbar, {
      trackSize: trackSize,
      divider: divider,
      moveDivider: moveDivider,
      dragSize: dragSize
    });
    scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
  },
  getPointerPosition: function getPointerPosition(e) {
    var swiper = this;
    if (swiper.isHorizontal()) {
      return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
    }
    return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
  },
  setDragPosition: function setDragPosition(e) {
    var swiper = this;
    var scrollbar = swiper.scrollbar,
      rtl = swiper.rtlTranslate;
    var $el = scrollbar.$el,
      dragSize = scrollbar.dragSize,
      trackSize = scrollbar.trackSize,
      dragStartPos = scrollbar.dragStartPos;
    var positionRatio;
    positionRatio = (scrollbar.getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }
    var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  },
  onDragStart: function onDragStart(e) {
    var swiper = this;
    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar,
      $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el,
      $dragEl = scrollbar.$dragEl;
    swiper.scrollbar.isTouched = true;
    swiper.scrollbar.dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    $wrapperEl.transition(100);
    $dragEl.transition(100);
    scrollbar.setDragPosition(e);
    clearTimeout(swiper.scrollbar.dragTimeout);
    $el.transition(0);
    if (params.hide) {
      $el.css('opacity', 1);
    }
    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', 'none');
    }
    swiper.emit('scrollbarDragStart', e);
  },
  onDragMove: function onDragMove(e) {
    var swiper = this;
    var scrollbar = swiper.scrollbar,
      $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el,
      $dragEl = scrollbar.$dragEl;
    if (!swiper.scrollbar.isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    scrollbar.setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    swiper.emit('scrollbarDragMove', e);
  },
  onDragEnd: function onDragEnd(e) {
    var swiper = this;
    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar,
      $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el;
    if (!swiper.scrollbar.isTouched) return;
    swiper.scrollbar.isTouched = false;
    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', '');
      $wrapperEl.transition('');
    }
    if (params.hide) {
      clearTimeout(swiper.scrollbar.dragTimeout);
      swiper.scrollbar.dragTimeout = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.nextTick)(function () {
        $el.css('opacity', 0);
        $el.transition(400);
      }, 1000);
    }
    swiper.emit('scrollbarDragEnd', e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  },
  enableDraggable: function enableDraggable() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    var scrollbar = swiper.scrollbar,
      touchEventsTouch = swiper.touchEventsTouch,
      touchEventsDesktop = swiper.touchEventsDesktop,
      params = swiper.params,
      support = swiper.support;
    var $el = scrollbar.$el;
    var target = $el[0];
    var activeListener = support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    var passiveListener = support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!support.touch) {
      target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      document.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      document.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  disableDraggable: function disableDraggable() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    var scrollbar = swiper.scrollbar,
      touchEventsTouch = swiper.touchEventsTouch,
      touchEventsDesktop = swiper.touchEventsDesktop,
      params = swiper.params,
      support = swiper.support;
    var $el = scrollbar.$el;
    var target = $el[0];
    var activeListener = support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    var passiveListener = support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!support.touch) {
      target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      document.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      document.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  init: function init() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
      $swiperEl = swiper.$el;
    var params = swiper.params.scrollbar;
    var $el = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(params.el);
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }
    var $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);
    if ($dragEl.length === 0) {
      $dragEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])("<div class=\"" + swiper.params.scrollbar.dragClass + "\"></div>");
      $el.append($dragEl);
    }
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.extend)(scrollbar, {
      $el: $el,
      el: $el[0],
      $dragEl: $dragEl,
      dragEl: $dragEl[0]
    });
    if (params.draggable) {
      scrollbar.enableDraggable();
    }
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.scrollbar.disableDraggable();
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'scrollbar',
  params: {
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag'
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.bindModuleMethods)(swiper, {
      scrollbar: _extends({
        isTouched: false,
        timeout: null,
        dragTimeout: null
      }, Scrollbar)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.scrollbar.init();
      swiper.scrollbar.updateSize();
      swiper.scrollbar.setTranslate();
    },
    update: function update(swiper) {
      swiper.scrollbar.updateSize();
    },
    resize: function resize(swiper) {
      swiper.scrollbar.updateSize();
    },
    observerUpdate: function observerUpdate(swiper) {
      swiper.scrollbar.updateSize();
    },
    setTranslate: function setTranslate(swiper) {
      swiper.scrollbar.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      swiper.scrollbar.setTransition(duration);
    },
    destroy: function destroy(swiper) {
      swiper.scrollbar.destroy();
    }
  }
});

/***/ }),

/***/ 6356:
/*!*************************************************************!*\
  !*** ./node_modules/swiper/esm/components/thumbs/thumbs.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ 3799);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ 7312);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}


var Thumbs = {
  init: function init() {
    var swiper = this;
    var thumbsParams = swiper.params.thumbs;
    if (swiper.thumbs.initialized) return false;
    swiper.thumbs.initialized = true;
    var SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
    } else if ((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.isObject)(thumbsParams.swiper)) {
      swiper.thumbs.swiper = new SwiperClass((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)({}, thumbsParams.swiper, {
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: false
      }));
      swiper.thumbs.swiperCreated = true;
    }
    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
    return true;
  },
  onThumbClick: function onThumbClick() {
    var swiper = this;
    var thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    var clickedIndex = thumbsSwiper.clickedIndex;
    var clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    var slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      var currentIndex = swiper.activeIndex;
      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        currentIndex = swiper.activeIndex;
      }
      var prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
      var nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
      if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
    }
    swiper.slideTo(slideToIndex);
  },
  update: function update(initial) {
    var swiper = this;
    var thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
    var autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      var currentThumbsIndex = thumbsSwiper.activeIndex;
      var newThumbsIndex;
      var direction;
      if (thumbsSwiper.params.loop) {
        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
          thumbsSwiper.loopFix(); // eslint-disable-next-line

          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
          currentThumbsIndex = thumbsSwiper.activeIndex;
        } // Find actual thumbs index to slide to

        var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
        var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
        if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;else newThumbsIndex = prevThumbsIndex;
        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }
      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }
      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex) {
          newThumbsIndex = newThumbsIndex - slidesPerView + 1;
        }
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    } // Activate thumbs

    var thumbsToActivate = 1;
    var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }
    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }
    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.removeClass(thumbActiveClass);
    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (var i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]").addClass(thumbActiveClass);
      }
    } else {
      for (var _i = 0; _i < thumbsToActivate; _i += 1) {
        thumbsSwiper.slides.eq(swiper.realIndex + _i).addClass(thumbActiveClass);
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'thumbs',
  params: {
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-container-thumbs'
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.bindModuleMethods)(swiper, {
      thumbs: _extends({
        swiper: null,
        initialized: false
      }, Thumbs)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      var thumbs = swiper.params.thumbs;
      if (!thumbs || !thumbs.swiper) return;
      swiper.thumbs.init();
      swiper.thumbs.update(true);
    },
    slideChange: function slideChange(swiper) {
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    update: function update(swiper) {
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    resize: function resize(swiper) {
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    observerUpdate: function observerUpdate(swiper) {
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    setTransition: function setTransition(swiper, duration) {
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      thumbsSwiper.setTransition(duration);
    },
    beforeDestroy: function beforeDestroy(swiper) {
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      if (swiper.thumbs.swiperCreated && thumbsSwiper) {
        thumbsSwiper.destroy();
      }
    }
  }
});

/***/ }),

/***/ 1445:
/*!***************************************************************!*\
  !*** ./node_modules/swiper/esm/components/virtual/virtual.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ 7312);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ 3799);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}


var Virtual = {
  update: function update(force) {
    var swiper = this;
    var _swiper$params = swiper.params,
      slidesPerView = _swiper$params.slidesPerView,
      slidesPerGroup = _swiper$params.slidesPerGroup,
      centeredSlides = _swiper$params.centeredSlides;
    var _swiper$params$virtua = swiper.params.virtual,
      addSlidesBefore = _swiper$params$virtua.addSlidesBefore,
      addSlidesAfter = _swiper$params$virtua.addSlidesAfter;
    var _swiper$virtual = swiper.virtual,
      previousFrom = _swiper$virtual.from,
      previousTo = _swiper$virtual.to,
      slides = _swiper$virtual.slides,
      previousSlidesGrid = _swiper$virtual.slidesGrid,
      renderSlide = _swiper$virtual.renderSlide,
      previousOffset = _swiper$virtual.offset;
    swiper.updateActiveIndex();
    var activeIndex = swiper.activeIndex || 0;
    var offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    var slidesAfter;
    var slidesBefore;
    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = slidesPerGroup + addSlidesBefore;
    }
    var from = Math.max((activeIndex || 0) - slidesBefore, 0);
    var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
    var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(swiper.virtual, {
      from: from,
      to: to,
      offset: offset,
      slidesGrid: swiper.slidesGrid
    });
    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      if (swiper.lazy && swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    }
    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.css(offsetProp, offset + "px");
      }
      swiper.updateProgress();
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset: offset,
        from: from,
        to: to,
        slides: function getSlides() {
          var slidesToRender = [];
          for (var i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }
          return slidesToRender;
        }()
      });
      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      }
      return;
    }
    var prependIndexes = [];
    var appendIndexes = [];
    if (force) {
      swiper.$wrapperEl.find("." + swiper.params.slideClass).remove();
    } else {
      for (var i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          swiper.$wrapperEl.find("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + i + "\"]").remove();
        }
      }
    }
    for (var _i = 0; _i < slides.length; _i += 1) {
      if (_i >= from && _i <= to) {
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(_i);
        } else {
          if (_i > previousTo) appendIndexes.push(_i);
          if (_i < previousFrom) prependIndexes.push(_i);
        }
      }
    }
    appendIndexes.forEach(function (index) {
      swiper.$wrapperEl.append(renderSlide(slides[index], index));
    });
    prependIndexes.sort(function (a, b) {
      return b - a;
    }).forEach(function (index) {
      swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
    });
    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, offset + "px");
    onRendered();
  },
  renderSlide: function renderSlide(slide, index) {
    var swiper = this;
    var params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }
    var $slideEl = params.renderSlide ? (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(params.renderSlide.call(swiper, slide, index)) : (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"" + swiper.params.slideClass + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>");
    if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
    if (params.cache) swiper.virtual.cache[index] = $slideEl;
    return $slideEl;
  },
  appendSlide: function appendSlide(slides) {
    var swiper = this;
    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }
    swiper.virtual.update(true);
  },
  prependSlide: function prependSlide(slides) {
    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var newActiveIndex = activeIndex + 1;
    var numberOfNewSlides = 1;
    if (Array.isArray(slides)) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }
    if (swiper.params.virtual.cache) {
      var cache = swiper.virtual.cache;
      var newCache = {};
      Object.keys(cache).forEach(function (cachedIndex) {
        var $cachedEl = cache[cachedIndex];
        var cachedElIndex = $cachedEl.attr('data-swiper-slide-index');
        if (cachedElIndex) {
          $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
        }
        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
      });
      swiper.virtual.cache = newCache;
    }
    swiper.virtual.update(true);
    swiper.slideTo(newActiveIndex, 0);
  },
  removeSlide: function removeSlide(slidesIndexes) {
    var swiper = this;
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    var activeIndex = swiper.activeIndex;
    if (Array.isArray(slidesIndexes)) {
      for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        swiper.virtual.slides.splice(slidesIndexes[i], 1);
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
        }
        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      swiper.virtual.slides.splice(slidesIndexes, 1);
      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
      }
      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }
    swiper.virtual.update(true);
    swiper.slideTo(activeIndex, 0);
  },
  removeAllSlides: function removeAllSlides() {
    var swiper = this;
    swiper.virtual.slides = [];
    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }
    swiper.virtual.update(true);
    swiper.slideTo(0, 0);
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'virtual',
  params: {
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.bindModuleMethods)(swiper, {
      virtual: _extends(_extends({}, Virtual), {}, {
        slides: swiper.params.virtual.slides,
        cache: {}
      })
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (!swiper.params.virtual.enabled) return;
      swiper.classNames.push(swiper.params.containerModifierClass + "virtual");
      var overwriteParams = {
        watchSlidesProgress: true
      };
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(swiper.params, overwriteParams);
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(swiper.originalParams, overwriteParams);
      if (!swiper.params.initialSlide) {
        swiper.virtual.update();
      }
    },
    setTranslate: function setTranslate(swiper) {
      if (!swiper.params.virtual.enabled) return;
      swiper.virtual.update();
    }
  }
});

/***/ }),

/***/ 5016:
/*!*********************************************************!*\
  !*** ./node_modules/swiper/esm/components/zoom/zoom.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ 7312);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ 3799);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}


var Zoom = {
  // Calc Scale From Multi-touches
  getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) return 1;
    var x1 = e.targetTouches[0].pageX;
    var y1 = e.targetTouches[0].pageY;
    var x2 = e.targetTouches[1].pageX;
    var y2 = e.targetTouches[1].pageY;
    var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
  },
  // Events
  onGestureStart: function onGestureStart(e) {
    var swiper = this;
    var support = swiper.support;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;
    zoom.fakeGestureTouched = false;
    zoom.fakeGestureMoved = false;
    if (!support.gestures) {
      if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
        return;
      }
      zoom.fakeGestureTouched = true;
      gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
    }
    if (!gesture.$slideEl || !gesture.$slideEl.length) {
      gesture.$slideEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target).closest("." + swiper.params.slideClass);
      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      if (gesture.$imageWrapEl.length === 0) {
        gesture.$imageEl = undefined;
        return;
      }
    }
    if (gesture.$imageEl) {
      gesture.$imageEl.transition(0);
    }
    swiper.zoom.isScaling = true;
  },
  onGestureChange: function onGestureChange(e) {
    var swiper = this;
    var support = swiper.support;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;
    if (!support.gestures) {
      if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
        return;
      }
      zoom.fakeGestureMoved = true;
      gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
      if (e.type === 'gesturechange') zoom.onGestureStart(e);
      return;
    }
    if (support.gestures) {
      zoom.scale = e.scale * zoom.currentScale;
    } else {
      zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
    }
    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
    }
    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
    }
    gesture.$imageEl.transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
  },
  onGestureEnd: function onGestureEnd(e) {
    var swiper = this;
    var device = swiper.device;
    var support = swiper.support;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;
    if (!support.gestures) {
      if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
        return;
      }
      if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
        return;
      }
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
    zoom.currentScale = zoom.scale;
    zoom.isScaling = false;
    if (zoom.scale === 1) gesture.$slideEl = undefined;
  },
  onTouchStart: function onTouchStart(e) {
    var swiper = this;
    var device = swiper.device;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
      image = zoom.image;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  },
  onTouchMove: function onTouchMove(e) {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
      image = zoom.image,
      velocity = zoom.velocity;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    swiper.allowClick = false;
    if (!image.isTouched || !gesture.$slideEl) return;
    if (!image.isMoved) {
      image.width = gesture.$imageEl[0].offsetWidth;
      image.height = gesture.$imageEl[0].offsetHeight;
      image.startX = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.getTranslate)(gesture.$imageWrapEl[0], 'x') || 0;
      image.startY = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.getTranslate)(gesture.$imageWrapEl[0], 'y') || 0;
      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
      gesture.$imageWrapEl.transition(0);
      if (swiper.rtl) {
        image.startX = -image.startX;
        image.startY = -image.startY;
      }
    } // Define if we need image drag

    var scaledWidth = image.width * zoom.scale;
    var scaledHeight = image.height * zoom.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
    if (!image.isMoved && !zoom.isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }
      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }
    if (e.cancelable) {
      e.preventDefault();
    }
    e.stopPropagation();
    image.isMoved = true;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;
    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
    }
    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
    }
    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
    }
    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
    } // Velocity

    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.$imageWrapEl.transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
  },
  onTouchEnd: function onTouchEnd() {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
      image = zoom.image,
      velocity = zoom.velocity;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    var momentumDurationX = 300;
    var momentumDurationY = 300;
    var momentumDistanceX = velocity.x * momentumDurationX;
    var newPositionX = image.currentX + momentumDistanceX;
    var momentumDistanceY = velocity.y * momentumDurationY;
    var newPositionY = image.currentY + momentumDistanceY; // Fix duration

    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY; // Define if we need image drag

    var scaledWidth = image.width * zoom.scale;
    var scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
  },
  onTransitionEnd: function onTransitionEnd() {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;
    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
      if (gesture.$imageEl) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
      }
      if (gesture.$imageWrapEl) {
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');
      }
      zoom.scale = 1;
      zoom.currentScale = 1;
      gesture.$slideEl = undefined;
      gesture.$imageEl = undefined;
      gesture.$imageWrapEl = undefined;
    }
  },
  // Toggle Zoom
  toggle: function toggle(e) {
    var swiper = this;
    var zoom = swiper.zoom;
    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoom.out();
    } else {
      // Zoom In
      zoom.in(e);
    }
  },
  in: function _in(e) {
    var swiper = this;
    var zoom = swiper.zoom;
    var params = swiper.params.zoom;
    var gesture = zoom.gesture,
      image = zoom.image;
    if (!gesture.$slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
      } else {
        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      }
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    gesture.$slideEl.addClass("" + params.zoomedSlideClass);
    var touchX;
    var touchY;
    var offsetX;
    var offsetY;
    var diffX;
    var diffY;
    var translateX;
    var translateY;
    var imageWidth;
    var imageHeight;
    var scaledWidth;
    var scaledHeight;
    var translateMinX;
    var translateMinY;
    var translateMaxX;
    var translateMaxY;
    var slideWidth;
    var slideHeight;
    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }
    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    if (e) {
      slideWidth = gesture.$slideEl[0].offsetWidth;
      slideHeight = gesture.$slideEl[0].offsetHeight;
      offsetX = gesture.$slideEl.offset().left;
      offsetY = gesture.$slideEl.offset().top;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.$imageEl[0].offsetWidth;
      imageHeight = gesture.$imageEl[0].offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;
      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }
      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    gesture.$imageWrapEl.transition(300).transform("translate3d(" + translateX + "px, " + translateY + "px,0)");
    gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
  },
  out: function out() {
    var swiper = this;
    var zoom = swiper.zoom;
    var params = swiper.params.zoom;
    var gesture = zoom.gesture;
    if (!gesture.$slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
      } else {
        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      }
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = 1;
    zoom.currentScale = 1;
    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
    gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
    gesture.$slideEl = undefined;
  },
  toggleGestures: function toggleGestures(method) {
    var swiper = this;
    var zoom = swiper.zoom;
    var selector = zoom.slideSelector,
      passive = zoom.passiveListener;
    swiper.$wrapperEl[method]('gesturestart', selector, zoom.onGestureStart, passive);
    swiper.$wrapperEl[method]('gesturechange', selector, zoom.onGestureChange, passive);
    swiper.$wrapperEl[method]('gestureend', selector, zoom.onGestureEnd, passive);
  },
  enableGestures: function enableGestures() {
    if (this.zoom.gesturesEnabled) return;
    this.zoom.gesturesEnabled = true;
    this.zoom.toggleGestures('on');
  },
  disableGestures: function disableGestures() {
    if (!this.zoom.gesturesEnabled) return;
    this.zoom.gesturesEnabled = false;
    this.zoom.toggleGestures('off');
  },
  // Attach/Detach Events
  enable: function enable() {
    var swiper = this;
    var support = swiper.support;
    var zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    var activeListenerWithCapture = support.passiveListener ? {
      passive: false,
      capture: true
    } : true;
    var slideSelector = "." + swiper.params.slideClass;
    swiper.zoom.passiveListener = passiveListener;
    swiper.zoom.slideSelector = slideSelector; // Scale image

    if (support.gestures) {
      swiper.$wrapperEl.on(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);
      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
      }
    } // Move image

    swiper.$wrapperEl.on(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
  },
  disable: function disable() {
    var swiper = this;
    var zoom = swiper.zoom;
    if (!zoom.enabled) return;
    var support = swiper.support;
    swiper.zoom.enabled = false;
    var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    var activeListenerWithCapture = support.passiveListener ? {
      passive: false,
      capture: true
    } : true;
    var slideSelector = "." + swiper.params.slideClass; // Scale image

    if (support.gestures) {
      swiper.$wrapperEl.off(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);
      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
      }
    } // Move image

    swiper.$wrapperEl.off(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'zoom',
  params: {
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.bindModuleMethods)(swiper, {
      zoom: _extends({
        enabled: false,
        scale: 1,
        currentScale: 1,
        isScaling: false,
        gesture: {
          $slideEl: undefined,
          slideWidth: undefined,
          slideHeight: undefined,
          $imageEl: undefined,
          $imageWrapEl: undefined,
          maxRatio: 3
        },
        image: {
          isTouched: undefined,
          isMoved: undefined,
          currentX: undefined,
          currentY: undefined,
          minX: undefined,
          minY: undefined,
          maxX: undefined,
          maxY: undefined,
          width: undefined,
          height: undefined,
          startX: undefined,
          startY: undefined,
          touchesStart: {},
          touchesCurrent: {}
        },
        velocity: {
          x: undefined,
          y: undefined,
          prevPositionX: undefined,
          prevPositionY: undefined,
          prevTime: undefined
        }
      }, Zoom)
    });
    var scale = 1;
    Object.defineProperty(swiper.zoom, 'scale', {
      get: function get() {
        return scale;
      },
      set: function set(value) {
        if (scale !== value) {
          var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
          var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
          swiper.emit('zoomChange', value, imageEl, slideEl);
        }
        scale = value;
      }
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.zoom.enabled) {
        swiper.zoom.enable();
      }
    },
    destroy: function destroy(swiper) {
      swiper.zoom.disable();
    },
    touchStart: function touchStart(swiper, e) {
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchStart(e);
    },
    touchEnd: function touchEnd(swiper, e) {
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchEnd(e);
    },
    doubleTap: function doubleTap(swiper, e) {
      if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
        swiper.zoom.toggle(e);
      }
    },
    transitionEnd: function transitionEnd(swiper) {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
        swiper.zoom.onTransitionEnd();
      }
    },
    slideChange: function slideChange(swiper) {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
        swiper.zoom.onTransitionEnd();
      }
    }
  }
});

/***/ }),

/***/ 4274:
/*!**************************************************************!*\
  !*** ./node_modules/swiper/esm/modules/observer/observer.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ 514);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ 3799);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}


var Observer = {
  attach: function attach(target, options) {
    if (options === void 0) {
      options = {};
    }
    var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    var swiper = this;
    var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    var observer = new ObserverFunc(function (mutations) {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        swiper.emit('observerUpdate', mutations[0]);
        return;
      }
      var observerUpdate = function observerUpdate() {
        swiper.emit('observerUpdate', mutations[0]);
      };
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    swiper.observer.observers.push(observer);
  },
  init: function init() {
    var swiper = this;
    if (!swiper.support.observer || !swiper.params.observer) return;
    if (swiper.params.observeParents) {
      var containerParents = swiper.$el.parents();
      for (var i = 0; i < containerParents.length; i += 1) {
        swiper.observer.attach(containerParents[i]);
      }
    } // Observe container

    swiper.observer.attach(swiper.$el[0], {
      childList: swiper.params.observeSlideChildren
    }); // Observe wrapper

    swiper.observer.attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.observer.observers.forEach(function (observer) {
      observer.disconnect();
    });
    swiper.observer.observers = [];
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'observer',
  params: {
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.bindModuleMethods)(swiper, {
      observer: _extends(_extends({}, Observer), {}, {
        observers: []
      })
    });
  },
  on: {
    init: function init(swiper) {
      swiper.observer.init();
    },
    destroy: function destroy(swiper) {
      swiper.observer.destroy();
    }
  }
});

/***/ }),

/***/ 3572:
/*!**********************************************************!*\
  !*** ./node_modules/swiper/esm/modules/resize/resize.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ 514);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ 3799);


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'resize',
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(swiper, {
      resize: {
        resizeHandler: function resizeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('beforeResize');
          swiper.emit('resize');
        },
        orientationChangeHandler: function orientationChangeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('orientationchange');
        }
      }
    });
  },
  on: {
    init: function init(swiper) {
      var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)(); // Emit resize

      window.addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange

      window.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
    destroy: function destroy(swiper) {
      var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
      window.removeEventListener('resize', swiper.resize.resizeHandler);
      window.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    }
  }
});

/***/ }),

/***/ 7312:
/*!**********************************************!*\
  !*** ./node_modules/swiper/esm/utils/dom.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom7 */ 5276);

var Methods = {
  addClass: dom7__WEBPACK_IMPORTED_MODULE_0__.addClass,
  removeClass: dom7__WEBPACK_IMPORTED_MODULE_0__.removeClass,
  hasClass: dom7__WEBPACK_IMPORTED_MODULE_0__.hasClass,
  toggleClass: dom7__WEBPACK_IMPORTED_MODULE_0__.toggleClass,
  attr: dom7__WEBPACK_IMPORTED_MODULE_0__.attr,
  removeAttr: dom7__WEBPACK_IMPORTED_MODULE_0__.removeAttr,
  transform: dom7__WEBPACK_IMPORTED_MODULE_0__.transform,
  transition: dom7__WEBPACK_IMPORTED_MODULE_0__.transition,
  on: dom7__WEBPACK_IMPORTED_MODULE_0__.on,
  off: dom7__WEBPACK_IMPORTED_MODULE_0__.off,
  trigger: dom7__WEBPACK_IMPORTED_MODULE_0__.trigger,
  transitionEnd: dom7__WEBPACK_IMPORTED_MODULE_0__.transitionEnd,
  outerWidth: dom7__WEBPACK_IMPORTED_MODULE_0__.outerWidth,
  outerHeight: dom7__WEBPACK_IMPORTED_MODULE_0__.outerHeight,
  styles: dom7__WEBPACK_IMPORTED_MODULE_0__.styles,
  offset: dom7__WEBPACK_IMPORTED_MODULE_0__.offset,
  css: dom7__WEBPACK_IMPORTED_MODULE_0__.css,
  each: dom7__WEBPACK_IMPORTED_MODULE_0__.each,
  html: dom7__WEBPACK_IMPORTED_MODULE_0__.html,
  text: dom7__WEBPACK_IMPORTED_MODULE_0__.text,
  is: dom7__WEBPACK_IMPORTED_MODULE_0__.is,
  index: dom7__WEBPACK_IMPORTED_MODULE_0__.index,
  eq: dom7__WEBPACK_IMPORTED_MODULE_0__.eq,
  append: dom7__WEBPACK_IMPORTED_MODULE_0__.append,
  prepend: dom7__WEBPACK_IMPORTED_MODULE_0__.prepend,
  next: dom7__WEBPACK_IMPORTED_MODULE_0__.next,
  nextAll: dom7__WEBPACK_IMPORTED_MODULE_0__.nextAll,
  prev: dom7__WEBPACK_IMPORTED_MODULE_0__.prev,
  prevAll: dom7__WEBPACK_IMPORTED_MODULE_0__.prevAll,
  parent: dom7__WEBPACK_IMPORTED_MODULE_0__.parent,
  parents: dom7__WEBPACK_IMPORTED_MODULE_0__.parents,
  closest: dom7__WEBPACK_IMPORTED_MODULE_0__.closest,
  find: dom7__WEBPACK_IMPORTED_MODULE_0__.find,
  children: dom7__WEBPACK_IMPORTED_MODULE_0__.children,
  filter: dom7__WEBPACK_IMPORTED_MODULE_0__.filter,
  remove: dom7__WEBPACK_IMPORTED_MODULE_0__.remove
};
Object.keys(Methods).forEach(function (methodName) {
  dom7__WEBPACK_IMPORTED_MODULE_0__.$.fn[methodName] = Methods[methodName];
});
/* harmony default export */ __webpack_exports__["default"] = (dom7__WEBPACK_IMPORTED_MODULE_0__.$);

/***/ }),

/***/ 1498:
/*!******************************************************!*\
  !*** ./node_modules/swiper/esm/utils/get-browser.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBrowser": function() { return /* binding */ getBrowser; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ 514);

var browser;
function calcBrowser() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  function isSafari() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }
  return {
    isEdge: !!window.navigator.userAgent.match(/Edge/g),
    isSafari: isSafari(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}


/***/ }),

/***/ 7117:
/*!*****************************************************!*\
  !*** ./node_modules/swiper/esm/utils/get-device.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDevice": function() { return /* binding */ getDevice; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ 514);
/* harmony import */ var _get_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-support */ 493);


var device;
function calcDevice(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    userAgent = _ref.userAgent;
  var support = (0,_get_support__WEBPACK_IMPORTED_MODULE_1__.getSupport)();
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var platform = window.navigator.platform;
  var ua = userAgent || window.navigator.userAgent;
  var device = {
    ios: false,
    android: false
  };
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;
  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  var windows = platform === 'Win32';
  var macos = platform === 'MacIntel'; // iPadOs 13 fix

  var iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
  if (!ipad && macos && support.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  } // Android

  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  } // Export object

  return device;
}
function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!device) {
    device = calcDevice(overrides);
  }
  return device;
}


/***/ }),

/***/ 493:
/*!******************************************************!*\
  !*** ./node_modules/swiper/esm/utils/get-support.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSupport": function() { return /* binding */ getSupport; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ 514);

var support;
function calcSupport() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  return {
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
    pointerEvents: !!window.PointerEvent && 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints >= 0,
    observer: function checkObserver() {
      return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
    }(),
    passiveListener: function checkPassiveListener() {
      var supportsPassive = false;
      try {
        var opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get: function get() {
            supportsPassive = true;
          }
        });
        window.addEventListener('testPassiveListener', null, opts);
      } catch (e) {// No support
      }
      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return 'ongesturestart' in window;
    }()
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}


/***/ }),

/***/ 3799:
/*!************************************************!*\
  !*** ./node_modules/swiper/esm/utils/utils.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteProps": function() { return /* binding */ deleteProps; },
/* harmony export */   "nextTick": function() { return /* binding */ nextTick; },
/* harmony export */   "now": function() { return /* binding */ now; },
/* harmony export */   "getTranslate": function() { return /* binding */ getTranslate; },
/* harmony export */   "isObject": function() { return /* binding */ isObject; },
/* harmony export */   "extend": function() { return /* binding */ extend; },
/* harmony export */   "bindModuleMethods": function() { return /* binding */ bindModuleMethods; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ 514);

function deleteProps(obj) {
  var object = obj;
  Object.keys(object).forEach(function (key) {
    try {
      object[key] = null;
    } catch (e) {// no getter for object
    }
    try {
      delete object[key];
    } catch (e) {// something got wrong
    }
  });
}
function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var matrix;
  var curTransform;
  var transformMatrix;
  var curStyle = window.getComputedStyle(el, null);
  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(function (a) {
        return a.replace(',', '.');
      }).join(', ');
    } // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case

    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }
  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
}
function extend() {
  var to = Object(arguments.length <= 0 ? undefined : arguments[0]);
  for (var i = 1; i < arguments.length; i += 1) {
    var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
    if (nextSource !== undefined && nextSource !== null) {
      var keysArray = Object.keys(Object(nextSource));
      for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        var nextKey = keysArray[nextIndex];
        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            extend(to[nextKey], nextSource[nextKey]);
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            extend(to[nextKey], nextSource[nextKey]);
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function bindModuleMethods(instance, obj) {
  Object.keys(obj).forEach(function (key) {
    if (isObject(obj[key])) {
      Object.keys(obj[key]).forEach(function (subKey) {
        if (typeof obj[key][subKey] === 'function') {
          obj[key][subKey] = obj[key][subKey].bind(instance);
        }
      });
    }
    instance[key] = obj[key];
  });
}


/***/ }),

/***/ 9167:
/*!**************************************************!*\
  !*** ./node_modules/swiper/swiper-bundle.esm.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Swiper": function() { return /* reexport safe */ _esm_components_core_core_class__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "default": function() { return /* reexport safe */ _esm_components_core_core_class__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _esm_components_core_core_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./esm/components/core/core-class */ 8587);
/* harmony import */ var _esm_components_virtual_virtual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./esm/components/virtual/virtual */ 1445);
/* harmony import */ var _esm_components_keyboard_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./esm/components/keyboard/keyboard */ 6625);
/* harmony import */ var _esm_components_mousewheel_mousewheel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./esm/components/mousewheel/mousewheel */ 2883);
/* harmony import */ var _esm_components_navigation_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./esm/components/navigation/navigation */ 9616);
/* harmony import */ var _esm_components_pagination_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./esm/components/pagination/pagination */ 6671);
/* harmony import */ var _esm_components_scrollbar_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./esm/components/scrollbar/scrollbar */ 7730);
/* harmony import */ var _esm_components_parallax_parallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./esm/components/parallax/parallax */ 5824);
/* harmony import */ var _esm_components_zoom_zoom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./esm/components/zoom/zoom */ 5016);
/* harmony import */ var _esm_components_lazy_lazy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./esm/components/lazy/lazy */ 2493);
/* harmony import */ var _esm_components_controller_controller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./esm/components/controller/controller */ 6166);
/* harmony import */ var _esm_components_a11y_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./esm/components/a11y/a11y */ 257);
/* harmony import */ var _esm_components_history_history__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./esm/components/history/history */ 5809);
/* harmony import */ var _esm_components_hash_navigation_hash_navigation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./esm/components/hash-navigation/hash-navigation */ 3116);
/* harmony import */ var _esm_components_autoplay_autoplay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./esm/components/autoplay/autoplay */ 18);
/* harmony import */ var _esm_components_effect_fade_effect_fade__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./esm/components/effect-fade/effect-fade */ 3195);
/* harmony import */ var _esm_components_effect_cube_effect_cube__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./esm/components/effect-cube/effect-cube */ 3792);
/* harmony import */ var _esm_components_effect_flip_effect_flip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./esm/components/effect-flip/effect-flip */ 5199);
/* harmony import */ var _esm_components_effect_coverflow_effect_coverflow__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./esm/components/effect-coverflow/effect-coverflow */ 5249);
/* harmony import */ var _esm_components_thumbs_thumbs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./esm/components/thumbs/thumbs */ 6356);
/**
 * Swiper 6.3.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 30, 2020
 */























// Swiper Class
var components = [_esm_components_virtual_virtual__WEBPACK_IMPORTED_MODULE_1__["default"], _esm_components_keyboard_keyboard__WEBPACK_IMPORTED_MODULE_2__["default"], _esm_components_mousewheel_mousewheel__WEBPACK_IMPORTED_MODULE_3__["default"], _esm_components_navigation_navigation__WEBPACK_IMPORTED_MODULE_4__["default"], _esm_components_pagination_pagination__WEBPACK_IMPORTED_MODULE_5__["default"], _esm_components_scrollbar_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"], _esm_components_parallax_parallax__WEBPACK_IMPORTED_MODULE_7__["default"], _esm_components_zoom_zoom__WEBPACK_IMPORTED_MODULE_8__["default"], _esm_components_lazy_lazy__WEBPACK_IMPORTED_MODULE_9__["default"], _esm_components_controller_controller__WEBPACK_IMPORTED_MODULE_10__["default"], _esm_components_a11y_a11y__WEBPACK_IMPORTED_MODULE_11__["default"], _esm_components_history_history__WEBPACK_IMPORTED_MODULE_12__["default"], _esm_components_hash_navigation_hash_navigation__WEBPACK_IMPORTED_MODULE_13__["default"], _esm_components_autoplay_autoplay__WEBPACK_IMPORTED_MODULE_14__["default"], _esm_components_effect_fade_effect_fade__WEBPACK_IMPORTED_MODULE_15__["default"], _esm_components_effect_cube_effect_cube__WEBPACK_IMPORTED_MODULE_16__["default"], _esm_components_effect_flip_effect_flip__WEBPACK_IMPORTED_MODULE_17__["default"], _esm_components_effect_coverflow_effect_coverflow__WEBPACK_IMPORTED_MODULE_18__["default"], _esm_components_thumbs_thumbs__WEBPACK_IMPORTED_MODULE_19__["default"]];
_esm_components_core_core_class__WEBPACK_IMPORTED_MODULE_0__["default"].use(components);

/***/ })

}]);
//# sourceMappingURL=src_app_page_page_module_ts.js.map