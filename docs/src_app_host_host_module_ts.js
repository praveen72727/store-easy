(self["webpackChunkmatngular"] = self["webpackChunkmatngular"] || []).push([["src_app_host_host_module_ts"],{

/***/ 54716:
/*!**********************************************************************************!*\
  !*** ./src/app/host/components/host-registration/host-registration.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HostRegistrationComponent": function() { return /* binding */ HostRegistrationComponent; }
/* harmony export */ });
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ 58356);
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/data/sweet-alerts */ 645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 97706);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);











function HostRegistrationComponent_tr_422_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, (item_r1 == null ? null : item_r1.file == null ? null : item_r1.file.size) / 1024 / 1024, ".2"), " MB");
  }
}
var _c0 = function _c0(a0) {
  return {
    "width": a0
  };
};
function HostRegistrationComponent_tr_422_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, item_r1.progress + "%"));
  }
}
function HostRegistrationComponent_tr_422_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HostRegistrationComponent_tr_422_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HostRegistrationComponent_tr_422_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HostRegistrationComponent_tr_422_Template(rf, ctx) {
  if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, HostRegistrationComponent_tr_422_td_4_Template, 3, 4, "td", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, HostRegistrationComponent_tr_422_td_5_Template, 3, 3, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, HostRegistrationComponent_tr_422_span_7_Template, 2, 0, "span", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, HostRegistrationComponent_tr_422_span_8_Template, 2, 0, "span", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, HostRegistrationComponent_tr_422_span_9_Template, 2, 0, "span", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HostRegistrationComponent_tr_422_Template_button_click_11_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      var item_r1 = restoredCtx.$implicit;
      return item_r1.upload();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HostRegistrationComponent_tr_422_Template_button_click_14_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      var item_r1 = restoredCtx.$implicit;
      return item_r1.cancel();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HostRegistrationComponent_tr_422_Template_button_click_17_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      var item_r1 = restoredCtx.$implicit;
      return item_r1.remove();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    var item_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.file == null ? null : item_r1.file.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.uploader.isHTML5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.uploader.isHTML5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.isSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.isCancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.isError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", item_r1.isReady || item_r1.isUploading || item_r1.isSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !item_r1.isUploading);
  }
}
var _c1 = function _c1() {
  return ["/dashboard/home"];
};
var _c2 = function _c2(a0) {
  return {
    "nv-file-over": a0
  };
};
var URL = '';
var HostRegistrationComponent = /*#__PURE__*/function () {
  // fileOverAnother(e: any): void {
  //   this.hasAnotherDropZoneOver = e;
  // }
  function HostRegistrationComponent(router) {
    (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HostRegistrationComponent);
    this.router = router;
    this.swal = _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__;
    this.security = [{
      id: 1,
      name: 'Locked area'
    }, {
      id: 2,
      name: 'Security camera monitored'
    }, {
      id: 3,
      name: 'Smoke detectors'
    }, {
      id: 4,
      name: 'Private space'
    }];
    this.quality = [{
      id: 1,
      name: 'Private entrance'
    }, {
      id: 2,
      name: 'Climate controlled'
    }, {
      id: 3,
      name: 'Smoke free'
    }, {
      id: 4,
      name: 'Pet free'
    }];
    this.convenience = [{
      id: 1,
      name: 'Electricity available'
    }, {
      id: 2,
      name: 'EV chargin available'
    }, {
      id: 3,
      name: 'Shuttle service'
    }, {
      id: 4,
      name: 'Car wash (self service)'
    }];
    this.accessibility = [{
      id: 1,
      name: 'No stairs'
    }, {
      id: 2,
      name: 'Elevator'
    }, {
      id: 3,
      name: 'Wheelchair accessible'
    }];
    this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__.FileUploader({
      url: URL,
      isHTML5: true
    });
    this.hasBaseDropZoneOver = false;
  }
  // hasAnotherDropZoneOver = false;
  // Angular2 File Upload
  return (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HostRegistrationComponent, [{
    key: "fileOverBase",
    value: function fileOverBase(e) {
      this.hasBaseDropZoneOver = e;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "goBackTo",
    value: function goBackTo() {
      this.router.navigate(['dashboard/host/become-a-host']);
    }
  }, {
    key: "goToNext",
    value: function goToNext() {
      this.router.navigate(['dashboard/host/host-registration']);
    }
  }]);
}();
HostRegistrationComponent.ɵfac = function HostRegistrationComponent_Factory(t) {
  return new (t || HostRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
HostRegistrationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HostRegistrationComponent,
  selectors: [["app-host-registration"]],
  decls: 439,
  vars: 30,
  consts: [[1, "host-registration-section"], [1, "host-registration-div"], [1, "header", "d-flex", "justify-content-between", "align-items-center", "px-4", "py-2", "bg-white", "rounded"], [1, "left-menu"], [1, "logo-div", "mr-2"], [1, "logo-text", "m-0", "text-bold-900", "font-large-1", "cursor-pointer", 3, "routerLink"], ["width", "30px", "src", "assets/img/icons/store-easy-icons/storage-icon.svg", "alt", ""], [1, "right-menu", "d-flex", "justify-content-between", "align-items-center", "p-2"], [1, "mr-2"], [1, "how-it-works-button-button", "text-black", "cursor-pointer", "p-2", "rounded"], ["href", "dashboard/storage/search-hosts", "target", "_blank", 1, "find-storage-button", "cursor-pointer", "p-2", "rounded", "text-black"], ["ngbDropdown", ""], ["id", "storage-type-dropdown", "ngbDropdownToggle", "", 1, "btn", "storage-type-button", "mr-2", "text-black"], ["ngbDropdownMenu", "", "aria-labelledby", "storage-type-dropdown"], [1, "dropdown-item", "w-100"], ["id", "locations-dropdown", "ngbDropdownToggle", "", 1, "btn", "location-button", "mr-2", "text-black"], ["ngbDropdownMenu", "", "aria-labelledby", "locations-dropdown"], [1, "how-it-works-button-button", "cursor-pointer", "p-2", "rounded", "text-black"], [1, "fa-regular", "fa-circle-user", "mr-1"], ["href", "dashboard/host/become-a-host", "target", "_blank", 1, "btn", "btn-outline-info"], [1, "storage-details-header"], [1, "text-white", "text-bold-600", "px-3", "py-2", "mb-3", "container"], [1, "container"], [1, "mt-2"], [1, "card", "p-3"], [1, "form-row"], [1, "col-md-6", "col-12"], [1, "form-group", "mb-2"], ["for", "first-name", 1, "form-field-label-styling"], ["type", "text", "id", "first-name", "name", "fname", "placeholder", "First Name", 1, "form-control"], ["for", "last-name", 1, "form-field-label-styling"], ["type", "text", "id", "last-name", "name", "lname", "placeholder", "Last Name", 1, "form-control"], ["for", "email", 1, "form-field-label-styling"], ["type", "text", "id", "email", "name", "email", "placeholder", "Email", 1, "form-control"], ["for", "phone", 1, "form-field-label-styling"], ["type", "number", "id", "phone", "name", "phone", "placeholder", "Phone", 1, "form-control"], [1, "mt-3"], [1, "mb-2", "mt-1", "font-medium-1", "text-bold-600"], [1, "radio"], ["type", "radio", "name", "storeOrRent", "id", "store-my-items", "disabled", ""], ["for", "store-my-items", 1, "form-field-label-styling"], [1, "radio", "mt-2"], ["type", "radio", "name", "storeOrRent", "id", "rent-out-my-unused-space", "checked", ""], ["for", "rent-out-my-unused-space", 1, "form-field-label-styling"], ["type", "radio", "name", "storeVehiclesOrNot", "id", "yes-vehicles"], ["for", "yes-vehicles", 1, "form-field-label-styling"], ["type", "radio", "name", "storeVehiclesOrNot", "id", "no-vehicles", "checked", ""], ["for", "no-vehicles", 1, "form-field-label-styling"], [1, "col-md-12", "col-12"], ["for", "storage-type", 1, "form-field-label-styling"], ["id", "storage-type", "name", "storageType", 1, "form-control"], ["value", "1", "selected", ""], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], [1, "form-group"], ["bindLabel", "name", "bindValue", "id", "placeholder", "Select security feature", 3, "items", "multiple", "closeOnSelect", "ngModel", "ngModelChange"], ["bindLabel", "name", "bindValue", "id", "placeholder", "Select quality feature", 3, "items", "multiple", "closeOnSelect", "ngModel", "ngModelChange"], ["bindLabel", "name", "bindValue", "id", "placeholder", "Select convenience feature", 3, "items", "multiple", "closeOnSelect", "ngModel", "ngModelChange"], ["bindLabel", "name", "bindValue", "id", "placeholder", "Select accessibility feature", 3, "items", "multiple", "closeOnSelect", "ngModel", "ngModelChange"], [1, "m-0", "mb-2"], ["for", "street-address", 1, "form-field-label-styling"], ["type", "text", "id", "street-address", "name", "streetAddress", 1, "form-control"], ["for", "apt-suite", 1, "form-field-label-styling"], ["type", "text", "id", "apt-suite", "name", "sptSuite", 1, "form-control"], [1, "col-md-4", "col-12"], ["for", "city-name", 1, "form-field-label-styling"], ["type", "text", "id", "city-name", "name", "cityName", 1, "form-control"], ["for", "province-name", 1, "form-field-label-styling"], ["id", "province-name", "name", "provinceName", 1, "form-control"], ["value", "0"], ["value", "1"], ["value", "6", "selected", ""], ["for", "zip-code", 1, "form-field-label-styling"], ["type", "number", "id", "zip-code", "name", "zipCode", 1, "form-control"], ["type", "radio", "name", "propertyType", "id", "residential", "checked", ""], ["for", "residential", 1, "form-field-label-styling"], ["type", "radio", "name", "propertyType", "id", "commercial"], ["for", "commercial", 1, "form-field-label-styling"], [1, "form-row", "mt-2"], [1, "checkbox"], ["type", "checkbox", "id", "i-have-permission"], ["for", "i-have-permission", 1, "form-field-label-styling"], ["for", "about-space", 1, "form-field-label-styling"], ["id", "about-space", "rows", "4", "name", "aboutSpace", 1, "form-control"], ["for", "space-length", 1, "form-field-label-styling"], ["type", "number", "id", "space-length", "name", "spaceLength", 1, "form-control"], ["for", "space-width", 1, "form-field-label-styling"], ["type", "number", "id", "space-width", "name", "spaceWidth", 1, "form-control"], ["for", "space-height", 1, "form-field-label-styling"], ["type", "number", "id", "space-height", "name", "spaceHeight", 1, "form-control"], ["type", "radio", "name", "contact-before-each-visit", "id", "contact-before-each-visit-yes", "checked", ""], ["for", "contact-before-each-visit-yes", 1, "form-field-label-styling"], ["type", "radio", "name", "contact-before-each-visit", "id", "contact-before-each-visit-no"], ["for", "contact-before-each-visit-no", 1, "form-field-label-styling"], ["type", "radio", "name", "approve-renters-visit", "id", "approve-renters-visit-daily"], ["for", "approve-renters-visit-daily", 1, "form-field-label-styling"], ["type", "radio", "name", "approve-renters-visit", "id", "approve-renters-visit-weekly"], ["for", "approve-renters-visit-weekly", 1, "form-field-label-styling"], ["type", "radio", "name", "approve-renters-visit", "id", "approve-renters-visit-monthly", "checked", ""], ["for", "approve-renters-visit-monthly", 1, "form-field-label-styling"], ["type", "radio", "name", "approve-renters-visit", "id", "approve-renters-visit-infrequently"], ["for", "approve-renters-visit-infrequently", 1, "form-field-label-styling"], ["type", "radio", "name", "access-time", "id", "day-time-hours", "checked", ""], ["for", "day-time-hours", 1, "form-field-label-styling"], [1, "ml-1"], ["type", "radio", "name", "access-time", "id", "evening-hours", 1, "form-field-label-styling"], ["for", "evening-hours", 1, "form-field-label-styling"], ["type", "radio", "name", "access-time", "id", "anytime-access"], ["for", "anytime-access", 1, "form-field-label-styling"], ["for", "space-price", 1, "mb-2", "mt-1", "font-medium-1", "text-bold-600", "text-normal-case"], ["type", "number", "id", "space-price", "name", "spacePrice", "placeholder", "Price in CAD", 1, "form-control"], ["type", "radio", "name", "discountForRenter", "id", "first-month-discount", "checked", ""], ["for", "first-month-discount", 1, "form-field-label-styling"], ["type", "radio", "name", "discountForRenter", "id", "keep-full-price"], ["for", "keep-full-price", 1, "form-field-label-styling"], [1, "mt-3", "mb-1"], ["id", "file-upload"], [1, "card", "text-left"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "col-md-12", "col-lg-12"], ["ng2FileDrop", "", 1, "py-5", "mb-3", "text-center", "font-medium-5", "text-uppercase", "grey", "my-drop-zone", 3, "ngClass", "uploader", "fileOver"], [1, "col-lg-3"], [1, "custom-file", "mb-3"], ["type", "file", "ng2FileSelect", "", "multiple", "", 3, "uploader"], [1, "custom-file-control"], [1, "custom-file"], ["type", "file", "ng2FileSelect", "", 3, "uploader"], [1, "col-lg-9"], [1, "table-responsive"], [1, "table"], ["width", "50%"], [4, "ngFor", "ngForOf"], ["type", "primary", 3, "value"], ["type", "button", 1, "btn", "btn-success", "mr-1", "mb-1", "mb-sm-0", 3, "disabled", "click"], [1, "fa", "fa-upload"], ["type", "button", 1, "btn", "btn-warning", "mr-1", "mb-1", "mb-sm-0", 3, "disabled", "click"], [1, "fa", "fa-ban"], ["type", "button", 1, "btn", "btn-danger", "mb-1", "mb-sm-0", 3, "disabled", "click"], [1, "fa", "fa-trash"], [1, "text-center", "my-4"], [1, "btn", "btn-info", "w-25", "font-medium-3", "py-2", 3, "click"], ["nowrap", "", 4, "ngIf"], [4, "ngIf"], [1, "text-center"], ["nowrap", ""], ["type", "button", 1, "btn", "btn-success", "btn-sm", "mr-1", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-warning", "btn-sm", "mr-1", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "progress", 2, "margin-bottom", "0"], ["role", "progressbar", 1, "progress-bar", 3, "ngStyle"], [1, "fa", "fa-ok"], [1, "fa", "fa-remove"]],
  template: function HostRegistrationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Store Easy ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "How it works");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Find storage");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Storage Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Self Storage");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Garages");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "RV Storage");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "RV Storage");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Boat Storage");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Car Storage");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Truck Parking");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Monthly Parking");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Long-term Parking");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Fleet Parking");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Locations");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Alberta");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "British Columbia");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Manitoba");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "New Brunswick");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Newfoundland and Labrador");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Nova Scotia");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Ontario");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Prince Edward Island");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Quebec");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Saskatchewan");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, " Log in");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Become a host");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "h4", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, " Host Registration ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "form");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "h5", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "1. Basic Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "First Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Last Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "label", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "E-mail");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](95, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "label", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "Contact Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "h5", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "2. Tell us about your space");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "p", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "I want to");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](110, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "Store my items");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](114, "input", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "label", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Rent out my unused space");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "p", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "Can your space store a vehicle?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](122, "input", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "label", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "Yes (I'm able and willing to store vehicles)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](126, "input", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "label", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, "No (Vehicles won't work for me)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "h5", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "3. Which best describes your storage?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "label", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "Select your storage type");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "select", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "option", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "Garage");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "option", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141, "Warehouse");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "option", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "Self storage Unit");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "option", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, "Shipping container");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "option", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147, "Shed");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "option", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149, "Closet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "option", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, "Basement");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "option", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](153, "Bedroom");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "option", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155, "Attic");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "option", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "Other");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "h5", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, "4. Which of these features does your garage have? (Select all that apply)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](164, "Security");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "ng-select", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HostRegistrationComponent_Template_ng_select_ngModelChange_166_listener($event) {
        return ctx.selectedSecurityIds = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, "Quality");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "ng-select", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HostRegistrationComponent_Template_ng_select_ngModelChange_171_listener($event) {
        return ctx.selectedQualityIds = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](175, "Convenience");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "ng-select", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HostRegistrationComponent_Template_ng_select_ngModelChange_177_listener($event) {
        return ctx.selectedConvenienceIds = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](180, "Accessibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "ng-select", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HostRegistrationComponent_Template_ng_select_ngModelChange_182_listener($event) {
        return ctx.selectedAccessibilityIds = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "h5", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, "5. Where is your space located?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "p", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](186, "Your address will not be shared untill you have approved a reservation.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](190, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "label", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](192, "Street address");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](193, "input", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "label", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](197, "Apt, suite, etc. (Optional)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](198, "input", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](201, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "label", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](203, "City");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](204, "input", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](207, "label", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](208, "province");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](209, "select", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](210, "option", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](211, "Alberta");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "option", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](213, "British Columbia");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](214, "option", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](215, "Manitoba");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](216, "option", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](217, "New Brunswick");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](218, "option", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](219, "Newfoundland and Labrador");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "option", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](221, "Nova Scotia");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "option", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](223, "Ontario");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "option", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](225, "Prince Edward Island");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](226, "option", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](227, "Quebec");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "option", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](229, "Saskatchewan");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](230, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](232, "label", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](233, "Zip");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](234, "input", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](235, "h5", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](236, "6. What kind of property is this?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](237, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](239, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](240, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](241, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](242, "Property type");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](243, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](244, "input", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "label", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](246, "Residential (Home or personal property)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](247, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](248, "input", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](249, "label", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](250, "Commercial or business property (Place of business or retail space)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "div", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](252, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](253, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](254, "div", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](255, "input", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](256, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](257, "I have permission to rent out this space and I understand that if not, I may be held financially and legally responsible for any damage, loss or fee incurred.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](258, "h5", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](259, "7. Describe your space.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](260, "p", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](261, "A summary helps renters know what to expect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](262, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](263, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](264, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](265, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](266, "label", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](267, "About your space");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](268, "textarea", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](269, "h5", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](270, "8. How big is your space");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](271, "p", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](272, "Use a tape for measure accuracy. This will help renters know if their items will fit.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](273, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](274, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](275, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](276, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](277, "label", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](278, "Length (ft)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](279, "input", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](280, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](281, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](282, "label", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](283, "Width (ft)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](284, "input", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](285, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](286, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](287, "label", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](288, "Height (ft)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](289, "input", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](290, "h5", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](291, "9. Help renters understand when you are available");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](292, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](293, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](294, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](295, "p", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](296, "Should approved renters contact you before each visit? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](297, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](298, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](299, "input", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](300, "label", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](301, "Yes (Renters should contact me each time)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](302, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](303, "input", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](304, "label", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](305, "No (Renters can come without an appointment)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](306, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](307, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](308, "p", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](309, "How often will renters be able to access their items? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](310, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](311, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](312, "input", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](313, "label", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](314, "Daily (At least daily)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](315, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](316, "input", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](317, "label", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](318, "Weekly (A few times per week)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](319, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](320, "input", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](321, "label", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](322, "Monthly (A few times per month)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](323, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](324, "input", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](325, "label", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](326, "Infrequently (Less than once per month)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](327, "p", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](328, "What time of day will renters be able to access their items?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](329, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](330, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](331, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](332, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](333, "input", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](334, "label", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](335, "Day time hours ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](336, "span", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](337, "(Any time during standard business hours (8AM to 5PM))");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](338, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](339, "input", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](340, "label", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](341, "Evening hours ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](342, "span", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](343, "(Any time after standard business hours (after 5PM))");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](344, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](345, "input", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](346, "label", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](347, "24x7");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](348, "span", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](349, "(Approved renters will be able to access the space whenever they want)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](350, "h5", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](351, "10. Price your space");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](352, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](353, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](354, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](355, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](356, "label", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](357, "Fixed monthly price");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](358, "input", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](359, "p", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](360, "Would you like to offer a 50% discount for the first month ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](361, "p", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](362, "(This will help you get rented faster.)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](363, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](364, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](365, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](366, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](367, "input", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](368, "label", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](369, "Yes, discount the first month");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](370, "span", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](371, "(If a renter stays two months or more)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](372, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](373, "input", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](374, "label", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](375, "No, keep it full price");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](376, "h5", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](377, "11. Take photos of your space");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](378, "p", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](379, "Add 4+ photos, get rented twice as often.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](380, "section", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](381, "div", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](382, "div", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](383, "div", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](384, "div", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](385, "div", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](386, "div", 129);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("fileOver", function HostRegistrationComponent_Template_div_fileOver_386_listener($event) {
        return ctx.fileOverBase($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](387, " Drop Images here ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](388, "div", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](389, "div", 130);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](390, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](391, "Select files");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](392, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](393, "Multiple");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](394, "label", 131);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](395, "input", 132);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](396, "span", 133);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](397, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](398, "Single");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](399, "label", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](400, "input", 135);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](401, "span", 133);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](402, "div", 136);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](403, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](404, "Upload queue");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](405, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](406);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](407, "div", 137);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](408, "table", 138);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](409, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](410, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](411, "th", 139);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](412, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](413, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](414, "Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](415, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](416, "Progress");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](417, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](418, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](419, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](420, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](421, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](422, HostRegistrationComponent_tr_422_Template, 22, 8, "tr", 140);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](423, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](424, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](425, "Queue progress: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](426, "ngb-progressbar", 141);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](427, "button", 142);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HostRegistrationComponent_Template_button_click_427_listener() {
        return ctx.uploader.uploadAll();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](428, "span", 143);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](429, " Upload all ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](430, "button", 144);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HostRegistrationComponent_Template_button_click_430_listener() {
        return ctx.uploader.cancelAll();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](431, "span", 145);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](432, " Cancel all ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](433, "button", 146);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HostRegistrationComponent_Template_button_click_433_listener() {
        return ctx.uploader.clearQueue();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](434, "span", 147);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](435, " Remove all ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](436, "div", 148);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](437, "button", 149);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HostRegistrationComponent_Template_button_click_437_listener() {
        return ctx.swal.HostRegistrationSuccess();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](438, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](27, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](161);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.security)("multiple", true)("closeOnSelect", false)("ngModel", ctx.selectedSecurityIds);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.quality)("multiple", true)("closeOnSelect", false)("ngModel", ctx.selectedQualityIds);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.convenience)("multiple", true)("closeOnSelect", false)("ngModel", ctx.selectedConvenienceIds);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.accessibility)("multiple", true)("closeOnSelect", false)("ngModel", ctx.selectedAccessibilityIds);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](204);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](28, _c2, ctx.hasBaseDropZoneOver))("uploader", ctx.uploader);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("uploader", ctx.uploader);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("uploader", ctx.uploader);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Queue length: ", ctx.uploader == null ? null : ctx.uploader.queue == null ? null : ctx.uploader.queue.length, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.uploader.queue);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.uploader.progress);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.uploader.getNotUploadedItems().length);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.uploader.isUploading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.uploader.queue.length);
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownMenu, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__.FileDropDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__.FileSelectDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbProgressbar, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe],
  styles: [".storage-type-button:hover {\n  border: 1px solid #E0E0E0 !important;\n  box-shadow: none;\n}\n\n.find-storage-button:hover {\n  border: 1px solid #E0E0E0 !important;\n}\n\n.become-host-button:hover {\n  border: 1px solid #E0E0E0 !important;\n}\n\n.location-button:hover {\n  border: 1px solid #E0E0E0 !important;\n  box-shadow: none;\n}\n\n.how-it-works-button-button:hover {\n  border: 1px solid #E0E0E0 !important;\n}\n\n.logo-text {\n  color: #0079e1;\n  font-weight: bold;\n}\n\n.storage-details-header {\n  background-image: linear-gradient(135deg, #0E3885, #2F8BE6);\n}\n\n.custom-width-280 {\n  width: 280px;\n}\n\n.text-black {\n  color: #000000 !important;\n}\n\n.text-bold-900 {\n  font-weight: 900 !important;\n}\n\n.garage-icon, .approve-icon, .start-earning-icon {\n  font-size: 50px;\n}\n\n.my-drop-zone {\n  border: dotted 3px lightgray;\n  background-color: #f5f7fa !important;\n}\n\n.nv-file-over {\n  border: dotted 3px red;\n}\n\n/* Default class applied to drop zones on over */\n\n.another-file-over-class {\n  border: dotted 3px green;\n}\n\n.text-normal-case {\n  text-transform: none !important;\n}\n\n.form-field-label-styling {\n  font-size: 1rem !important;\n  font-weight: 500 !important;\n  text-transform: none !important;\n}\n\n.text-bold-600 {\n  font-weight: 600 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvc3QtcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtBQUNGOztBQU1BO0VBRUUsY0FBQTtFQUNBLGlCQUFBO0FBSkY7O0FBT0E7RUFFRSwyREFBQTtBQUxGOztBQVFBO0VBQ0UsWUFBQTtBQUxGOztBQVFBO0VBQ0UseUJBQUE7QUFMRjs7QUFRQTtFQUNFLDJCQUFBO0FBTEY7O0FBUUE7RUFDRSxlQUFBO0FBTEY7O0FBU0E7RUFDRSw0QkFBQTtFQUNBLG9DQUFBO0FBTkY7O0FBUUE7RUFBZ0Isc0JBQUE7QUFKaEI7O0FBSTBDLGdEQUFBOztBQUMxQztFQUEyQix3QkFBQTtBQUEzQjs7QUFFQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0YiLCJmaWxlIjoiaG9zdC1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RvcmFnZS10eXBlLWJ1dHRvbjpob3ZlcntcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmZpbmQtc3RvcmFnZS1idXR0b246aG92ZXJ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0UwRTBFMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmVjb21lLWhvc3QtYnV0dG9uOmhvdmVye1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMEUwRTAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvY2F0aW9uLWJ1dHRvbjpob3ZlcntcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmhvdy1pdC13b3Jrcy1idXR0b24tYnV0dG9uOmhvdmVye1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMEUwRTAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gLnRpdGxlLWFuZC1iYW5uZXItZGl2e1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Q2RTFGMztcclxuLy8gfVxyXG5cclxuLmxvZ28tdGV4dHtcclxuICAvLyBjb2xvcjojMjI2Q0M1O1xyXG4gIGNvbG9yOiAjMDA3OWUxO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc3RvcmFnZS1kZXRhaWxzLWhlYWRlciB7XHJcbiAgLy8gLy8gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCMwNTEzMjAsIzE3NDQ3Nik7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzBFMzg4NSwgIzJGOEJFNik7XHJcbn1cclxuXHJcbi5jdXN0b20td2lkdGgtMjgwe1xyXG4gIHdpZHRoOiAyODBweDtcclxufVxyXG5cclxuLnRleHQtYmxhY2t7XHJcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4udGV4dC1ib2xkLTkwMHtcclxuICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5nYXJhZ2UtaWNvbiwgLmFwcHJvdmUtaWNvbiwgLnN0YXJ0LWVhcm5pbmctaWNvbntcclxuICBmb250LXNpemU6NTBweDtcclxufVxyXG5cclxuXHJcbi5teS1kcm9wLXpvbmUge1xyXG4gIGJvcmRlcjogZG90dGVkIDNweCBsaWdodGdyYXk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjdmYSAhaW1wb3J0YW50O1xyXG59XHJcbi5udi1maWxlLW92ZXIgeyBib3JkZXI6IGRvdHRlZCAzcHggcmVkOyB9IC8qIERlZmF1bHQgY2xhc3MgYXBwbGllZCB0byBkcm9wIHpvbmVzIG9uIG92ZXIgKi9cclxuLmFub3RoZXItZmlsZS1vdmVyLWNsYXNzIHsgYm9yZGVyOiBkb3R0ZWQgM3B4IGdyZWVuOyB9XHJcblxyXG4udGV4dC1ub3JtYWwtY2FzZSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm0tZmllbGQtbGFiZWwtc3R5bGluZ3tcclxuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtYm9sZC02MDB7XHJcbiAgZm9udC13ZWlnaHQ6NjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */", ".ng-dropdown-panel .ng-dropdown-panel-items .ng-option img {\n  margin-right: 0.7rem;\n}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option img + b {\n  vertical-align: middle;\n}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked {\n  background-color: #2F8BE6 !important;\n  color: #fff !important;\n}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option-selected {\n  background-color: #2F8BE6 !important;\n  color: #fff !important;\n}\n.ng-select .ng-select-container {\n  background-color: transparent !important;\n  border-color: #E0E0E0;\n  border-radius: 0.35rem;\n  color: #342E49;\n}\n.ng-select .ng-dropdown-panel {\n  border-color: #E0E0E0;\n  box-shadow: none;\n  margin: 0;\n}\n.ng-select.ng-select-opened > .ng-select-container {\n  border-color: #2F8BE6 !important;\n}\n.ng-select.ng-select-focused:not(.ng-select-opened) > .ng-select-container {\n  border-color: #2F8BE6;\n  box-shadow: none;\n}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value {\n  background-color: #2F8BE6;\n  color: #fff;\n  border-radius: 0.35rem;\n}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon {\n  border: 1px solid #226CC5;\n  border-right: 0 !important;\n  border-top-left-radius: 0.35rem;\n  border-bottom-left-radius: 0.35rem;\n  padding: 1px 0 1px 5px;\n}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover {\n  background-color: inherit;\n}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label {\n  border: 1px solid #226CC5;\n  border-left: 0 !important;\n  border-top-right-radius: 0.35rem;\n  border-bottom-right-radius: 0.35rem;\n}\nhtml body.layout-dark:not(.layout-transparent) .ng-select .ng-select-container {\n  border-color: #474748;\n  color: #B2B1B5;\n}\nhtml body.layout-dark:not(.layout-transparent) .ng-select .ng-select-container .ng-input > input::-moz-placeholder {\n  color: #B2B1B5;\n}\nhtml body.layout-dark:not(.layout-transparent) .ng-select .ng-select-container .ng-input > input,\nhtml body.layout-dark:not(.layout-transparent) .ng-select .ng-select-container .ng-input > input::placeholder {\n  color: #B2B1B5;\n}\nhtml body.layout-dark.layout-transparent .ng-select .ng-select-container {\n  border-color: rgba(238, 238, 238, 0.2);\n  color: #D6D5D8;\n}\nhtml body.layout-dark.layout-transparent .ng-select .ng-select-container .ng-input > input::-moz-placeholder {\n  color: #D6D5D8;\n}\nhtml body.layout-dark.layout-transparent .ng-select .ng-select-container .ng-input > input,\nhtml body.layout-dark.layout-transparent .ng-select .ng-select-container .ng-input > input::placeholder {\n  color: #D6D5D8;\n}\nhtml body.layout-dark .ng-dropdown-panel {\n  border-color: #474748;\n}\nhtml body.layout-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n  background-color: #1E1E1E;\n  color: #B2B1B5;\n}\nhtml body.layout-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled {\n  color: #626164;\n}\nhtml body.layout-dark .ng-dropdown-panel .ng-optgroup.ng-option-disabled {\n  background-color: #1E1E1E;\n  color: #626164;\n}\nhtml body.layout-dark .ng-dropdown-panel .ng-dropdown-header,\nhtml body.layout-dark .ng-dropdown-panel .ng-dropdown-footer {\n  background-color: #101010;\n  color: #626164;\n  border-color: #474748;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5zY3NzIiwiLi5cXGNvcmVcXHZhcmlhYmxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwiLi5cXGNvcmVcXHZhcmlhYmxlc1xcYXBwLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1JO0VBQ0Usb0JBQUE7QUFMTjtBQU1NO0VBQ0Usc0JBQUE7QUFKUjtBQU9JO0VBQ0Usb0NBQUE7RUFDQSxzQkFBQTtBQUxOO0FBUUU7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0FBTko7QUFVRTtFQUNFLHdDQUFBO0VBQ0EscUJDcUVXO0VEcEVYLHNCQ3NFWTtFRHJFWixjQ29EUztBRDNEYjtBQVNFO0VBQ0UscUJDZ0VXO0VEL0RYLGdCQUFBO0VBQ0EsU0FBQTtBQVBKO0FBU0U7RUFDRSxnQ0FBQTtBQVBKO0FBU0U7RUFDRSxxQkNSTTtFRFNOLGdCQUFBO0FBUEo7QUFTRTtFQUNFLHlCQ1pNO0VEYU4sV0MzQ0k7RUQ0Q0osc0JDb0RZO0FEM0RoQjtBQVFJO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQ2dEVTtFRC9DVixrQ0MrQ1U7RUQ5Q1Ysc0JBQUE7QUFOTjtBQU9NO0VBQ0UseUJBQUE7QUFMUjtBQVFJO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQ3NDVTtFRHJDVixtQ0NxQ1U7QUQzQ2hCO0FBZ0JNO0VBQ0UscUJFYlU7RUZjVixjRW5CUTtBRk1oQjtBQWNRO0VBRUUsY0V0Qk07QUZVaEI7QUFVUTs7RUFFRSxjRXRCTTtBRlVoQjtBQW9CTTtFQUNFLHNDRWRVO0VGZVYsY0VwQlE7QUZFaEI7QUFtQlE7RUFFRSxjRXZCTTtBRk1oQjtBQWVROztFQUVFLGNFdkJNO0FGTWhCO0FBdUJFO0VBQ0UscUJFckNjO0FGZ0JsQjtBQXNCSTtFQUNFLHlCRTNDUTtFRjRDUixjRTdDVTtBRnlCaEI7QUFxQk07RUFDRSxjRTNDWTtBRndCcEI7QUFzQkk7RUFDRSx5QkVsRFE7RUZtRFIsY0VoRGM7QUY0QnBCO0FBc0JJOztFQUVFLHlCRXpEVTtFRjBEVixjRXJEYztFRnNEZCxxQkVyRFk7QUZpQ2xCIiwiZmlsZSI6InNlbGVjdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL2NvcmUvdmFyaWFibGVzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwiLi4vY29yZS92YXJpYWJsZXMvYXBwLXZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwiLi4vY29yZS9jb2xvcnMvcGFsZXR0ZS12YXJpYWJsZXNcIjtcclxuXHJcbi5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMge1xyXG4gIC5uZy1vcHRpb24ge1xyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjdyZW07XHJcbiAgICAgICYrYiB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5uZy1vcHRpb24tbWFya2VkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnkgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAubmctb3B0aW9uLXNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5uZy1zZWxlY3Qge1xyXG4gIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgIGNvbG9yOiAkYm9keS1jb2xvcjtcclxuICB9XHJcbiAgLm5nLWRyb3Bkb3duLXBhbmVsIHtcclxuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gICYubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICYubmctc2VsZWN0LWZvY3VzZWQ6bm90KC5uZy1zZWxlY3Qtb3BlbmVkKT4ubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgJi5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAubmctdmFsdWUtaWNvbiB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIG1hcC1nZXQoJHByaW1hcnktY29sb3IsIGRhcmtlbi0xKTtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgcGFkZGluZzogMXB4IDAgMXB4IDVweDtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5nLXZhbHVlLWxhYmVsIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgbWFwLWdldCgkcHJpbWFyeS1jb2xvciwgZGFya2VuLTEpO1xyXG4gICAgICBib3JkZXItbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5odG1sIGJvZHkubGF5b3V0LWRhcmsge1xyXG4gIC8vIGZvciBkYXJrIGxheW91dFxyXG4gICY6bm90KC5sYXlvdXQtdHJhbnNwYXJlbnQpIHtcclxuICAgIC5uZy1zZWxlY3Qge1xyXG4gICAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkZGwtYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkZGwtdGV4dC1jb2xvcjtcclxuICAgICAgICAubmctaW5wdXQ+aW5wdXQsXHJcbiAgICAgICAgLm5nLWlucHV0PmlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICBjb2xvcjogJGRsLXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIGZvciB0cmFuc3BhcmVudCBsYXlvdXRcclxuICAmLmxheW91dC10cmFuc3BhcmVudCB7XHJcbiAgICAubmctc2VsZWN0IHtcclxuICAgICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRsLWJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHRsLXRleHQtY29sb3I7XHJcbiAgICAgICAgLm5nLWlucHV0PmlucHV0LFxyXG4gICAgICAgIC5uZy1pbnB1dD5pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgY29sb3I6ICR0bC10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvLyBmb3IgZGFyayBhbmQgdHJhbnNwYXJlbnQgbGF5b3V0c1xyXG4gIC5uZy1kcm9wZG93bi1wYW5lbCB7XHJcbiAgICBib3JkZXItY29sb3I6ICRkbC1ib3JkZXItY29sb3I7XHJcbiAgICAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkbC1iZy1jb2xvcjtcclxuICAgICAgY29sb3I6ICRkbC10ZXh0LWNvbG9yO1xyXG4gICAgICAmLm5nLW9wdGlvbi1kaXNhYmxlZCB7XHJcbiAgICAgICAgY29sb3I6ICRkbC1kaXNhYmxlZC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5nLW9wdGdyb3VwLm5nLW9wdGlvbi1kaXNhYmxlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkbC1iZy1jb2xvcjtcclxuICAgICAgY29sb3I6ICRkbC1kaXNhYmxlZC1jb2xvcjtcclxuICAgIH1cclxuICAgIC5uZy1kcm9wZG93bi1oZWFkZXIsXHJcbiAgICAubmctZHJvcGRvd24tZm9vdGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yLWRhcms7XHJcbiAgICAgIGNvbG9yOiAkZGwtZGlzYWJsZWQtY29sb3I7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGRsLWJvcmRlci1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xyXG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XHJcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcclxuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xyXG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XHJcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcclxuJGdyYXktNjAwOiAjNmM3NTdkICFkZWZhdWx0O1xyXG4kZ3JheS03MDA6ICM0OTUwNTcgIWRlZmF1bHQ7XHJcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcclxuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xyXG4kYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XHJcblxyXG4kZ3JheXM6ICgpICFkZWZhdWx0O1xyXG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxyXG4kZ3JheXM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICBcIjEwMFwiOiAkZ3JheS0xMDAsXHJcbiAgICBcIjIwMFwiOiAkZ3JheS0yMDAsXHJcbiAgICBcIjMwMFwiOiAkZ3JheS0zMDAsXHJcbiAgICBcIjQwMFwiOiAkZ3JheS00MDAsXHJcbiAgICBcIjUwMFwiOiAkZ3JheS01MDAsXHJcbiAgICBcIjYwMFwiOiAkZ3JheS02MDAsXHJcbiAgICBcIjcwMFwiOiAkZ3JheS03MDAsXHJcbiAgICBcIjgwMFwiOiAkZ3JheS04MDAsXHJcbiAgICBcIjkwMFwiOiAkZ3JheS05MDBcclxuICApLFxyXG4gICRncmF5c1xyXG4pO1xyXG5cclxuLy8gJHByaW1hcnk6ICM5NzVBRkYgIWRlZmF1bHQ7XHJcbiRwcmltYXJ5OiAjMkY4QkU2ICFkZWZhdWx0O1xyXG4kc3VjY2VzczogIzQwQzA1NyAhZGVmYXVsdDtcclxuJGluZm86ICMyRjhCRTYgIWRlZmF1bHQ7XHJcbiR3YXJuaW5nOiAjRjc3RTE3ICFkZWZhdWx0O1xyXG4kZGFuZ2VyOiAjRjU1MjUyICFkZWZhdWx0O1xyXG4kc2Vjb25kYXJ5OiAjNjE2RDg5ICFkZWZhdWx0O1xyXG4kbGlnaHQ6ICNEQkRFRTUgIWRlZmF1bHQ7XHJcbiRkYXJrOiAjMUEwNTFEICFkZWZhdWx0O1xyXG5cclxuJHRoZW1lLWNvbG9yczogKCkgIWRlZmF1bHQ7XHJcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XHJcbiR0aGVtZS1jb2xvcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICBcInByaW1hcnlcIjogJHByaW1hcnksXHJcbiAgICBcInN1Y2Nlc3NcIjogJHN1Y2Nlc3MsXHJcbiAgICBcImluZm9cIjogJGluZm8sXHJcbiAgICBcIndhcm5pbmdcIjogJHdhcm5pbmcsXHJcbiAgICBcImRhbmdlclwiOiAkZGFuZ2VyLFxyXG4gICAgXCJzZWNvbmRhcnlcIjogJHNlY29uZGFyeSxcclxuICAgIFwibGlnaHRcIjogJGxpZ2h0LFxyXG4gICAgXCJkYXJrXCI6ICRkYXJrXHJcbiAgKSxcclxuICAkdGhlbWUtY29sb3JzXHJcbik7XHJcblxyXG4vLyBTcGFjaW5nXHJcblxyXG4kc3BhY2VyOiAxLjVyZW07XHJcbiRzcGFjZXJzOiAoXHJcbiAgMDogMCxcclxuICAxOiAoXHJcbiAgICAkc3BhY2VyICogMC4yNVxyXG4gICksXHJcbiAgMjogKFxyXG4gICAgJHNwYWNlciAqIDAuNVxyXG4gICksXHJcbiAgMzogJHNwYWNlcixcclxuICA0OiAoXHJcbiAgICAkc3BhY2VyICogMS41XHJcbiAgKSxcclxuICA1OiAoXHJcbiAgICAkc3BhY2VyICogM1xyXG4gIClcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8vIEJvZHlcclxuLy9cclxuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxyXG4kYm9keS1iZzogI0Y3RjdGODtcclxuJGJvZHktY29sb3I6ICMzNDJFNDkgIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gTGlua3NcclxuLy9cclxuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxyXG5cclxuJGxpbmstY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kbGluay1ob3Zlci1jb2xvcjogZGFya2VuKCRsaW5rLWNvbG9yLCA1JSkgIWRlZmF1bHQ7XHJcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246IG5vbmUgIWRlZmF1bHQ7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbi8vXHJcbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cclxuXHJcbiRib3JkZXItY29sb3I6ICNFMEUwRTAgIWRlZmF1bHQ7XHJcblxyXG4kYm9yZGVyLXJhZGl1czogMC4zNXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtbGc6IDAuNnJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtc206IDAuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gVHlwb2dyYXBoeVxyXG4vL1xyXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cclxuXHJcbi8vIHN0eWxlbGludC1kaXNhYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogXCJNb250c2VycmF0XCIsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsQXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1zYW5zLXNlcmlmICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuMSAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWNvbG9yOiAjMTcxMDJGICFkZWZhdWx0O1xyXG5cclxuJHNtYWxsLWZvbnQtc2l6ZTogOTAlICFkZWZhdWx0O1xyXG5cclxuJHRleHQtbXV0ZWQ6ICNCREJEQkQgIWRlZmF1bHQ7XHJcblxyXG4kYmxvY2txdW90ZS1mb250LXNpemU6IDEuMXJlbSAhZGVmYXVsdDtcclxuXHJcbiRoci1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyBUYWJsZXNcclxuLy9cclxuLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxyXG5cclxuJHRhYmxlLWNlbGwtcGFkZGluZzogMS4xNXJlbSAycmVtICFkZWZhdWx0O1xyXG4kdGFibGUtYWNjZW50LWJnOiByZ2JhKCRibGFjaywgLjAzKSAhZGVmYXVsdDtcclxuXHJcbi8vIEJ1dHRvbnMgKyBGb3Jtc1xyXG4vL1xyXG4vLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15OiAwLjM3NXJlbSAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBCdXR0b25zXHJcbi8vXHJcbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxyXG5cclxuJGJ0bi1wYWRkaW5nLXk6IDAuNHJlbSAhZGVmYXVsdDtcclxuJGJ0bi1wYWRkaW5nLXg6IDEuMjVyZW0gIWRlZmF1bHQ7XHJcbiRidG4tbGluZS1oZWlnaHQ6IDEuNXJlbSAhZGVmYXVsdDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBGb3Jtc1xyXG5cclxuJGxhYmVsLW1hcmdpbi1ib3R0b206IDAuMnJlbSAhZGVmYXVsdDtcclxuJGlucHV0LXBhZGRpbmcteTogJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XHJcbiRpbnB1dC1saW5lLWhlaWdodDogMS41ICFkZWZhdWx0O1xyXG4kaW5wdXQtYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG4kaW5wdXQtZGlzYWJsZWQtYmc6ICRib2R5LWJnICFkZWZhdWx0O1xyXG4kaW5wdXQtY29sb3I6ICM3NTc4N2QgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICNFMEUwRTAgIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogbm9uZSAhZGVmYXVsdDtcclxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuJGlucHV0LWhlaWdodDogY2FsYygjeyRpbnB1dC1saW5lLWhlaWdodCAqIDFlbX0gKyAjeyRpbnB1dC1wYWRkaW5nLXkgKiAyfSArIDNweCkgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLWNvbnRyb2wtbGFiZWwtZGlzYWJsZWQtY29sb3I6ICRncmF5LTUwMCAhZGVmYXVsdDtcclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3gtc2hhZG93OiAwICFkZWZhdWx0O1xyXG4kY3VzdG9tLXN3aXRjaC13aWR0aDogMi42cmVtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiAwICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIFotaW5kZXggbWFzdGVyIGxpc3RcclxuLy9cclxuLy8gV2FybmluZzogQXZvaWQgY3VzdG9taXppbmcgdGhlc2UgdmFsdWVzLiBUaGV5J3JlIHVzZWQgZm9yIGEgYmlyZCdzIGV5ZSB2aWV3XHJcbi8vIG9mIGNvbXBvbmVudHMgZGVwZW5kZW50IG9uIHRoZSB6LWF4aXMgYW5kIGFyZSBkZXNpZ25lZCB0byBhbGwgd29yayB0b2dldGhlci5cclxuXHJcblxyXG5cclxuLy8gTmF2c1xyXG5cclxuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAjOUU5RTlFICFkZWZhdWx0O1xyXG4kbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcblxyXG4vLyBEcm9wZG93bnNcclxuLy9cclxuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxyXG5cclxuJGRyb3Bkb3duLXBhZGRpbmcteTogMCAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWRpdmlkZXItYmc6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1kaXZpZGVyLW1hcmdpbi15OiAwICFkZWZhdWx0O1xyXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6IDEwcHggIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteDogMjBweCAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogaW5oZXJpdCAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICRib2R5LWJnICFkZWZhdWx0O1xyXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vIFBhZ2luYXRpb25cclxuXHJcbiRwYWdpbmF0aW9uLWJnOiAjRjVGNUY1ICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6IDAgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24taG92ZXItYmc6ICNFRUVFRUUgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICM3NTc1NzUgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAjRTBFMEUwICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gQ2FyZHNcclxuXHJcbiRjYXJkLXNwYWNlci15OiAxLjVyZW07XHJcbiRjYXJkLXNwYWNlci14OiAxLjVyZW07XHJcbiRjYXJkLWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcclxuJGNhcmQtaW5uZXItYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4vLyBQb3BvdmVyc1xyXG5cclxuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLWJnOiAkYm9keS1iZyAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogMC42cmVtICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAxcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gVG9hc3RzXHJcblxyXG4kdG9hc3QtcGFkZGluZy15OiAwLjQ1cmVtICFkZWZhdWx0O1xyXG4kdG9hc3QtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kdG9hc3QtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbiR0b2FzdC1ib3gtc2hhZG93OiAtOHB4IDhweCAxNHB4IDAgcmdiYSgyNSwgNDIsIDcwLCAwLjExKSAhZGVmYXVsdDtcclxuJHRvYXN0LWhlYWRlci1jb2xvcjogJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xyXG4kdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vIEJhZGdlc1xyXG5cclxuJGJhZGdlLWZvbnQtc2l6ZTogODUlICFkZWZhdWx0O1xyXG4kYmFkZ2UtZm9udC13ZWlnaHQ6IDUwMCAhZGVmYXVsdDtcclxuJGJhZGdlLXBhZGRpbmcteTogMC40cmVtICFkZWZhdWx0O1xyXG4kYmFkZ2UtcGFkZGluZy14OiAwLjY2NjY2NjY2N3JlbSAhZGVmYXVsdDtcclxuXHJcbi8vIE1vZGFsc1xyXG5cclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4vLyBBbGVydHNcclxuLy9cclxuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXHJcblxyXG4kYWxlcnQtcGFkZGluZy15OiAwLjk1cmVtICFkZWZhdWx0O1xyXG4kYWxlcnQtcGFkZGluZy14OiAxLjQ1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gUHJvZ3Jlc3MgYmFyc1xyXG5cclxuJHByb2dyZXNzLWhlaWdodDogMC44cmVtICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogMXJlbSAhZGVmYXVsdDtcclxuJHByb2dyZXNzLWJnOiAjZWVlICFkZWZhdWx0O1xyXG5cclxuLy8gTGlzdCBncm91cFxyXG5cclxuJGxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogJGJvZHktYmcgIWRlZmF1bHQ7XHJcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAjNzU3NTc1ICFkZWZhdWx0O1xyXG4kbGlzdC1ncm91cC1hY3Rpb24tY29sb3I6IGluaGVyaXQgIWRlZmF1bHQ7XHJcblxyXG4vLyBJbWFnZSB0aHVtYm5haWxzXHJcblxyXG4kdGh1bWJuYWlsLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBDb2RlXHJcblxyXG4kY29kZS1mb250LXNpemU6IDkwJSAhZGVmYXVsdDtcclxuJGNvZGUtY29sb3I6ICRkYW5nZXIgIWRlZmF1bHQ7XHJcblxyXG4vLyBVdGlsaXRpZXNcclxuXHJcbiRvdmVyZmxvd3M6IGF1dG8sIGhpZGRlbiwgdmlzaWJsZSwgc2Nyb2xsICFkZWZhdWx0O1xyXG4iLCJAaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL2Z1bmN0aW9uc1wiO1xyXG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL21peGluc1wiO1xyXG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcblxyXG5cclxuLy8gdmVydGljYWwgbWVudVxyXG4kbWVudS1leHBhbmRlZC13aWR0aC1zbTogMjIwcHg7XHJcbiRtZW51LWV4cGFuZGVkLXdpZHRoOiAyNTBweDtcclxuJG1lbnUtZXhwYW5kZWQtd2lkdGgtbGc6IDI4MHB4O1xyXG4kbWVudS1jb2xsYXBzZWQtd2lkdGg6IDYwcHg7XHJcblxyXG4vLyBIb3Jpem9udGFsIE1lbnVcclxuJG1lbnUtYWN0aXZlLWJnOiAjRTdFOUVDO1xyXG5cclxuJGZvbnQtc2l6ZS1yb290OiAxNXB4O1xyXG5cclxuLy8gQXZhdGFyXHJcbiRhdmF0YXItYmc6ICNFMEUwRTA7XHJcbiRhdmF0YXItdGV4dC1jb2xvcjogIzYxNjE2MTtcclxuJGF2YXRhci1zaXplOiAzMnB4O1xyXG4kYXZhdGFyLXNpemUteGw6IDcwcHg7XHJcbiRhdmF0YXItc2l6ZS1sZzogNTBweDtcclxuJGF2YXRhci1zaXplLW1kOiA0MHB4O1xyXG4kYXZhdGFyLXNpemUtc206IDI0cHg7XHJcbiRhdmF0YXItc3RhdHVzLXNpemU6IDExcHg7XHJcbiRhdmF0YXItc3RhdHVzLXNpemUtbGc6IDE3cHg7XHJcblxyXG4vLyBTaGFkb3dzXHJcbiRzaGFkb3ctdW1icmEtb3BhY2l0eTogMC4yICFkZWZhdWx0O1xyXG4kc2hhZG93LXBlbnVtYnJhLW9wYWNpdHk6IDAuMTQgIWRlZmF1bHQ7XHJcbiRzaGFkb3ctYW1iaWVudC1vcGFjaXR5OiAwLjEyICFkZWZhdWx0O1xyXG5cclxuLy92YXJpYWJsZXMgZm9yIHNvY2lhbFxyXG4kc29jaWFsLWZhY2Vib29rOiAjM2I1OTk4O1xyXG4kc29jaWFsLXR3aXR0ZXI6ICM1NWFjZWU7XHJcbiRzb2NpYWwtcGludGVyZXN0OiAjY2MyMTI3O1xyXG4kc29jaWFsLWdvb2dsZTogI2RkNGIzOTtcclxuJHNvY2lhbC1saW5rZWRpbjogIzA5NzZiNDtcclxuJHNvY2lhbC1kcmliYmJsZTogI2VhNGM4OTtcclxuJHNvY2lhbC1naXRodWI6ICMzMzMzMzM7XHJcbiRzb2NpYWwteW91dHViZTogI2U1MmQyNztcclxuJHNvY2lhbC1pbnN0YWdyYW06ICMxMjU2ODg7XHJcbiRzb2NpYWwtcmVkZGl0OiAjZmY0NTAwO1xyXG4kc29jaWFsLXR1bWJscjogIzM1NDY1YztcclxuJHNvY2lhbC1iZWhhbmNlOiAjMTc2OWZmO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIFZhcmlhYmxlcyBmb3IgRGFyayBMYXlvdXRcclxuJGRhcmstc3R5bGU6IHRydWU7XHJcbiRiZy1jb2xvci1kYXJrOiAjMTAxMDEwO1xyXG4kZGwtdGV4dC1jb2xvcjogI0IyQjFCNTtcclxuJGRsLWJnLWNvbG9yOiAjMUUxRTFFO1xyXG4kZGwtaGVhZGluZ3MtY29sb3I6ICNCRkJFQzI7XHJcbiRkbC10ZXh0LW11dGVkLWNvbG9yOiAjODQ4NDg0O1xyXG4kZGwtZGlzYWJsZWQtY29sb3I6ICM2MjYxNjQ7XHJcbiRkbC1ib3JkZXItY29sb3I6ICM0NzQ3NDg7XHJcbiRkbC1jYXJkLXNoYWRvdzogLThweCA4cHggMTRweCAwIHJnYmEoJGJsYWNrLCAwLjI1KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIFZhcmlhYmxlcyBGb3IgVHJhbnNwYXJlbnQgTGF5b3V0XHJcblxyXG4kdGwtdGV4dC1jb2xvcjogI0Q2RDVEODtcclxuJHRsLWhlYWRpbmdzLWNvbG9yOiAjRTlFOUVBO1xyXG4kdGwtYmctY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kdGwtdGV4dC1tdXRlZC1jb2xvcjogI0MzQzJDNTtcclxuJHRsLWRpc2FibGVkLWNvbG9yOiAjOUU5RTlFO1xyXG4kdGwtYm9yZGVyLWNvbG9yOiByZ2JhKCNlZWUsIDAuMik7XHJcbiR0bC1jYXJkLWJnLWNvbG9yOiByZ2JhKCRibGFjaywgMC4xMik7XHJcblxyXG4kYmctZ2xhc3MtaGliaXNjdXM6IGxpbmVhci1ncmFkaWVudChcclxuICB0byByaWdodCBib3R0b20sXHJcbiAgI2YwNWY1NyxcclxuICAjYzgzZDVjLFxyXG4gICM5OTI0NWEsXHJcbiAgIzY3MTM1MSxcclxuICAjMzYwOTQwXHJcbik7XHJcbiRiZy1nbGFzcy1wdXJwbGUtcGl6emF6ejogbGluZWFyLWdyYWRpZW50KFxyXG4gIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAjNjYyZDg2LFxyXG4gICM4YjJhOGEsXHJcbiAgI2FlMjM4OSxcclxuICAjY2YxZDgzLFxyXG4gICNlZDFlNzlcclxuKTtcclxuJGJnLWdsYXNzLWJsdWUtbGFnb29uOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICMxNDRlNjgsXHJcbiAgIzAwNmQ4MyxcclxuICAjMDA4ZDkyLFxyXG4gICMwMGFkOTEsXHJcbiAgIzU3Y2E4NVxyXG4pO1xyXG4kYmctZ2xhc3MtZWxlY3RyaWMtdmlvbGV0OiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgdG8gbGVmdCB0b3AsXHJcbiAgIzRhMDBlMCxcclxuICAjNjAwZGUwLFxyXG4gICM3MTE5ZTEsXHJcbiAgIzgwMjNlMSxcclxuICAjOGUyZGUyXHJcbik7XHJcbiRiZy1nbGFzcy1wb3J0YWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgdG8gbGVmdCB0b3AsXHJcbiAgIzk3YWJmZixcclxuICAjNzk4Y2U1LFxyXG4gICM1YjZlY2IsXHJcbiAgIzNiNTFiMSxcclxuICAjMTIzNTk3XHJcbik7XHJcbiRiZy1nbGFzcy10dW5kb3JhOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgdG8gbGVmdCB0b3AsXHJcbiAgI2VmNDY3MyxcclxuICAjZmZjODQ2XHJcbik7XHJcbiJdfQ== */"],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 38301:
/*!**********************************************************************************!*\
  !*** ./src/app/host/components/host-welcome-page/host-welcome-page.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HostWelcomePageComponent": function() { return /* binding */ HostWelcomePageComponent; }
/* harmony export */ });
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);





var _c0 = function _c0() {
  return ["/dashboard/home"];
};
var HostWelcomePageComponent = /*#__PURE__*/function () {
  function HostWelcomePageComponent(router) {
    (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HostWelcomePageComponent);
    this.router = router;
  }
  return (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HostWelcomePageComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "listYourSpace",
    value: function listYourSpace() {
      this.router.navigate(['dashboard/host/host-registration']);
    }
  }]);
}();
HostWelcomePageComponent.ɵfac = function HostWelcomePageComponent_Factory(t) {
  return new (t || HostWelcomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
HostWelcomePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HostWelcomePageComponent,
  selectors: [["app-host-welcome-page"]],
  decls: 110,
  vars: 2,
  consts: [[1, "host-welcome-page-section"], [1, "host-welcome-page-div"], [1, "header", "d-flex", "justify-content-between", "align-items-center", "px-4", "py-2", "bg-white", "rounded"], [1, "left-menu"], [1, "logo-div", "mr-2"], [1, "logo-text", "m-0", "text-bold-900", "font-large-1", "cursor-pointer", 3, "routerLink"], ["width", "30px", "src", "assets/img/icons/store-easy-icons/storage-icon.svg", "alt", ""], [1, "right-menu", "d-flex", "justify-content-between", "align-items-center", "p-2"], [1, "mr-2"], [1, "how-it-works-button-button", "text-black", "cursor-pointer", "p-2", "rounded"], ["href", "dashboard/storage/search-hosts", "target", "_blank", 1, "find-storage-button", "cursor-pointer", "p-2", "rounded", "text-black"], ["ngbDropdown", ""], ["id", "storage-type-dropdown", "ngbDropdownToggle", "", 1, "btn", "storage-type-button", "mr-2", "text-black"], ["ngbDropdownMenu", "", "aria-labelledby", "storage-type-dropdown"], [1, "dropdown-item", "w-100"], ["id", "locations-dropdown", "ngbDropdownToggle", "", 1, "btn", "location-button", "mr-2", "text-black"], ["ngbDropdownMenu", "", "aria-labelledby", "locations-dropdown"], [1, "how-it-works-button-button", "cursor-pointer", "p-2", "rounded", "text-black"], [1, "fa-regular", "fa-circle-user", "mr-1"], ["href", "dashboard/host/become-a-host", "target", "_blank", 1, "btn", "btn-outline-info"], [1, "storage-details-header"], [1, "text-white", "text-bold-600", "px-3", "py-2", "mb-3", "container"], [1, "container"], [1, "py-4"], [1, "text-center", "text-info", "text-bold-600", "mb-3"], [1, "text-center", "mb-4"], [1, "row"], [1, "col-md-4", "col-12"], [1, "card", "px-3", "py-4"], [1, "d-flex", "justify-content-center", "align-items-center", "text-bold-600"], [1, "fa-solid", "fa-warehouse", "garage-icon", "text-info"], [1, "text-center", "text-bold-600", "mt-3"], [1, "m-0", "text-center"], [1, "fa-solid", "fa-clipboard-check", "approve-icon", "text-info"], [1, "start-earning-icon", "fa-solid", "fa-hand-holding-dollar", "text-info"], [1, "text-center", "mt-4"], [1, "btn", "btn-info", "w-25", "font-medium-3", "py-2", 3, "click"], [1, "p-0", "text-center", "mt-3"], [1, "fa-solid", "fa-circle-check", "mr-1"]],
  template: function HostWelcomePageComponent_Template(rf, ctx) {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Find storage");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 16);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, " Log in");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Become a host");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "h4", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, " Become a host ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "h2", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Store Easy makes it easy.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "h5", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Become a host in 3 easy steps.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "i", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "h5", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "1. List your spaces");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "p", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Tell us about your spaces and how much you would like to earn.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "i", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "h5", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "2. Approve who rents");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "p", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Review renter requests (including what they want to store and when) and approve them.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "h5", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "3. Start earning");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "p", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Schedule a move-in time with your renter, and start getting paid.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HostWelcomePageComponent_Template_button_click_105_listener() {
        return ctx.listYourSpace();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "List your space");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "p", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](108, "i", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, " It's free and secure");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownMenu],
  styles: [".storage-type-button[_ngcontent-%COMP%]:hover {\n  border: 1px solid #E0E0E0 !important;\n  box-shadow: none;\n}\n\n.find-storage-button[_ngcontent-%COMP%]:hover {\n  border: 1px solid #E0E0E0 !important;\n}\n\n.become-host-button[_ngcontent-%COMP%]:hover {\n  border: 1px solid #E0E0E0 !important;\n}\n\n.location-button[_ngcontent-%COMP%]:hover {\n  border: 1px solid #E0E0E0 !important;\n  box-shadow: none;\n}\n\n.how-it-works-button-button[_ngcontent-%COMP%]:hover {\n  border: 1px solid #E0E0E0 !important;\n}\n\n.logo-text[_ngcontent-%COMP%] {\n  color: #0079e1;\n  font-weight: bold;\n}\n\n.storage-details-header[_ngcontent-%COMP%] {\n  background-image: linear-gradient(135deg, #0E3885, #2F8BE6);\n}\n\n.custom-width-280[_ngcontent-%COMP%] {\n  width: 280px;\n}\n\n.text-black[_ngcontent-%COMP%] {\n  color: #000000;\n}\n\n.text-bold-900[_ngcontent-%COMP%] {\n  font-weight: 900;\n}\n\n.garage-icon[_ngcontent-%COMP%], .approve-icon[_ngcontent-%COMP%], .start-earning-icon[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvc3Qtd2VsY29tZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtBQUNGOztBQU1BO0VBRUUsY0FBQTtFQUNBLGlCQUFBO0FBSkY7O0FBT0E7RUFFRSwyREFBQTtBQUxGOztBQVFBO0VBQ0UsWUFBQTtBQUxGOztBQVFBO0VBQ0UsY0FBQTtBQUxGOztBQVFBO0VBQ0UsZ0JBQUE7QUFMRjs7QUFRQTtFQUNFLGVBQUE7QUFMRiIsImZpbGUiOiJob3N0LXdlbGNvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdG9yYWdlLXR5cGUtYnV0dG9uOmhvdmVye1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMEUwRTAgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uZmluZC1zdG9yYWdlLWJ1dHRvbjpob3ZlcntcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMEUwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZWNvbWUtaG9zdC1idXR0b246aG92ZXJ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0UwRTBFMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9jYXRpb24tYnV0dG9uOmhvdmVye1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMEUwRTAgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uaG93LWl0LXdvcmtzLWJ1dHRvbi1idXR0b246aG92ZXJ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0UwRTBFMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyAudGl0bGUtYW5kLWJhbm5lci1kaXZ7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDZFMUYzO1xyXG4vLyB9XHJcblxyXG4ubG9nby10ZXh0e1xyXG4gIC8vIGNvbG9yOiMyMjZDQzU7XHJcbiAgY29sb3I6ICMwMDc5ZTE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zdG9yYWdlLWRldGFpbHMtaGVhZGVyIHtcclxuICAvLyAvLyAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIzA1MTMyMCwjMTc0NDc2KTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMEUzODg1LCAjMkY4QkU2KTtcclxufVxyXG5cclxuLmN1c3RvbS13aWR0aC0yODB7XHJcbiAgd2lkdGg6IDI4MHB4O1xyXG59XHJcblxyXG4udGV4dC1ibGFja3tcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICB9XHJcblxyXG4udGV4dC1ib2xkLTkwMHtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4uZ2FyYWdlLWljb24sIC5hcHByb3ZlLWljb24sIC5zdGFydC1lYXJuaW5nLWljb257XHJcbiAgZm9udC1zaXplOjUwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"]
});

/***/ }),

/***/ 64423:
/*!*********************************************!*\
  !*** ./src/app/host/host-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HostRoutingModule": function() { return /* binding */ HostRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _components_host_welcome_page_host_welcome_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/host-welcome-page/host-welcome-page.component */ 38301);
/* harmony import */ var _components_host_registration_host_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/host-registration/host-registration.component */ 54716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







var routes = [{
  path: 'become-a-host',
  component: _components_host_welcome_page_host_welcome_page_component__WEBPACK_IMPORTED_MODULE_2__.HostWelcomePageComponent
}, {
  path: 'host-registration',
  component: _components_host_registration_host_registration_component__WEBPACK_IMPORTED_MODULE_3__.HostRegistrationComponent
}];
var HostRoutingModule = /*#__PURE__*/(0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function HostRoutingModule() {
  (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HostRoutingModule);
});
HostRoutingModule.ɵfac = function HostRoutingModule_Factory(t) {
  return new (t || HostRoutingModule)();
};
HostRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: HostRoutingModule
});
HostRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HostRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 14679:
/*!*************************************!*\
  !*** ./src/app/host/host.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HostModule": function() { return /* binding */ HostModule; }
/* harmony export */ });
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 97706);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-file-upload */ 58356);
/* harmony import */ var _host_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./host-routing.module */ 64423);
/* harmony import */ var _components_host_welcome_page_host_welcome_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/host-welcome-page/host-welcome-page.component */ 38301);
/* harmony import */ var _components_host_registration_host_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/host-registration/host-registration.component */ 54716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);











var HostModule = /*#__PURE__*/(0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function HostModule() {
  (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HostModule);
});
HostModule.ɵfac = function HostModule_Factory(t) {
  return new (t || HostModule)();
};
HostModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: HostModule
});
HostModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _host_routing_module__WEBPACK_IMPORTED_MODULE_2__.HostRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule, ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__.FileUploadModule]]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](HostModule, {
    declarations: [_components_host_welcome_page_host_welcome_page_component__WEBPACK_IMPORTED_MODULE_3__.HostWelcomePageComponent, _components_host_registration_host_registration_component__WEBPACK_IMPORTED_MODULE_4__.HostRegistrationComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _host_routing_module__WEBPACK_IMPORTED_MODULE_2__.HostRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule, ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__.FileUploadModule]
  });
})();

/***/ }),

/***/ 645:
/*!*********************************************!*\
  !*** ./src/app/shared/data/sweet-alerts.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicAlert": function() { return /* binding */ BasicAlert; },
/* harmony export */   "WithTitle": function() { return /* binding */ WithTitle; },
/* harmony export */   "WithFooter": function() { return /* binding */ WithFooter; },
/* harmony export */   "HtmlAlert": function() { return /* binding */ HtmlAlert; },
/* harmony export */   "PositionTopStart": function() { return /* binding */ PositionTopStart; },
/* harmony export */   "PositionTopEnd": function() { return /* binding */ PositionTopEnd; },
/* harmony export */   "PositionBottomStart": function() { return /* binding */ PositionBottomStart; },
/* harmony export */   "PositionBottomEnd": function() { return /* binding */ PositionBottomEnd; },
/* harmony export */   "BounceInAnimation": function() { return /* binding */ BounceInAnimation; },
/* harmony export */   "FadeInAnimation": function() { return /* binding */ FadeInAnimation; },
/* harmony export */   "FlipXAnimation": function() { return /* binding */ FlipXAnimation; },
/* harmony export */   "TadaAnimation": function() { return /* binding */ TadaAnimation; },
/* harmony export */   "ShakeAnimation": function() { return /* binding */ ShakeAnimation; },
/* harmony export */   "HostRegistrationSuccess": function() { return /* binding */ HostRegistrationSuccess; },
/* harmony export */   "TypeSuccess": function() { return /* binding */ TypeSuccess; },
/* harmony export */   "TypeInfo": function() { return /* binding */ TypeInfo; },
/* harmony export */   "TypeWarning": function() { return /* binding */ TypeWarning; },
/* harmony export */   "TypeError": function() { return /* binding */ TypeError; },
/* harmony export */   "CustomIcon": function() { return /* binding */ CustomIcon; },
/* harmony export */   "AutoClose": function() { return /* binding */ AutoClose; },
/* harmony export */   "OutsideClick": function() { return /* binding */ OutsideClick; },
/* harmony export */   "PromptFunction": function() { return /* binding */ PromptFunction; },
/* harmony export */   "AjaxRequest": function() { return /* binding */ AjaxRequest; },
/* harmony export */   "ConfirmText": function() { return /* binding */ ConfirmText; },
/* harmony export */   "ConfirmColor": function() { return /* binding */ ConfirmColor; }
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

//-------------- Basic --------------
// Simple Alert
function BasicAlert() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    title: 'Any fool can use a computer',
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  });
}
// Alert with Title
function WithTitle() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    title: 'The Internet?',
    text: "That thing is still around?",
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  });
}
// Alert with footer
function WithFooter() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href = "javascript:void(0);">Why do I have this issue?</a>',
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  });
}
//  HTML Alert
function HtmlAlert() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    title: '<strong>HTML <u>example</u></strong>',
    icon: 'info',
    html: 'You can use <b>bold text</b>, ' + '<a href="https://pixinvent.com/" target="_blank">links</a> ' + 'and other HTML tags',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-o-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText: '<i class="fa fa-thumbs-o-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down',
    buttonsStyling: false,
    customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-danger ml-1'
    }
  });
}
//-------------- Position --------------
// Top-start
function PositionTopStart() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    position: 'top-start',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500,
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  });
}
// Top-end
function PositionTopEnd() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500,
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  });
}
// Bottom-start
function PositionBottomStart() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    position: 'bottom-start',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500,
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  });
}
// Bottom-end
function PositionBottomEnd() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    position: 'bottom-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500,
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  });
}
//-------------- Animations --------------
// Bounce-in
function BounceInAnimation() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    title: 'Bounce In Animation',
    showClass: {
      popup: 'animated bounceIn'
    },
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  });
}
// Fade-in
function FadeInAnimation() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    title: 'Fade In Animation',
    showClass: {
      popup: 'animated fadeIn'
    },
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  });
}
// Flip-in
function FlipXAnimation() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    title: 'Flip In Animation',
    showClass: {
      popup: 'animated flipInX'
    },
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  });
}
// Tada
function TadaAnimation() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    title: 'Tada Animation',
    showClass: {
      popup: 'animated tada'
    },
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  });
}
// Shake
function ShakeAnimation() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    title: 'Shake Animation',
    showClass: {
      popup: 'animated shake'
    },
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  });
}
//-------------- Types --------------
function HostRegistrationSuccess() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    title: "Registration Success!",
    text: "Your space was successfully listed.",
    icon: "success",
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  });
}
// Success
function TypeSuccess() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  });
}
// Info
function TypeInfo() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    title: "Info!",
    text: "You clicked the button!",
    icon: "info",
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  });
}
// Warning
function TypeWarning() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    title: "Warning!",
    text: "You clicked the button!",
    icon: "warning",
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  });
}
// Error
function TypeError() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    title: "Error!",
    text: "You clicked the button!",
    icon: "error",
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  });
}
//-------------- Options --------------
// Custom Icon
function CustomIcon() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    title: 'Sweet!',
    text: 'Modal with a custom image.',
    imageUrl: 'assets/img/gallery/13.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    animation: false,
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  });
}
// Auto close
function AutoClose() {
  var timerInterval;
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    title: 'Auto close alert!',
    html: 'I will close in <b></b> milliseconds.',
    timer: 2000,
    timerProgressBar: true,
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false,
    onBeforeOpen: function onBeforeOpen() {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().showLoading();
      timerInterval = setInterval(function () {
        var content = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().getContent();
        if (content) {
          var b = content.querySelector('b');
          if (b) {
            b.textContent = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().getTimerLeft().toString();
          }
        }
      }, 100);
    },
    onClose: function onClose() {
      clearInterval(timerInterval);
    }
  }).then(function (result) {
    /* Read more about handling dismissals below */
    if (result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().DismissReason.timer)) {
      console.log('I was closed by the timer');
    }
  });
}
// Allow Outside Click
function OutsideClick() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    title: 'Outside click is disabled!',
    text: 'This is a cool message!',
    allowOutsideClick: false,
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  });
}
// Prompt Function
function PromptFunction() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
    input: 'text',
    confirmButtonText: 'Next &rarr;',
    showCancelButton: true,
    progressSteps: ['1', '2', '3'],
    customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-danger ml-1'
    },
    buttonsStyling: false
  }).queue([{
    title: 'Question 1',
    text: 'Chaining swal2 modals is easy'
  }, 'Question 2', 'Question 3']).then(function (result) {
    if (result.value) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'All done!',
        html: 'Your answers: <pre><code>' + JSON.stringify(result.value) + '</code></pre>',
        confirmButtonText: 'Lovely!'
      });
    }
  });
}
// Ajax Request
function AjaxRequest() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    title: 'Submit your Github username',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    buttonsStyling: false,
    showCancelButton: true,
    confirmButtonText: 'Look up',
    showLoaderOnConfirm: true,
    customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-danger ml-1'
    },
    preConfirm: function preConfirm(login) {
      return fetch("//api.github.com/users/".concat(login)).then(function (response) {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      }).catch(function (error) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().showValidationMessage("Request failed: ".concat(error));
      });
    },
    allowOutsideClick: function allowOutsideClick() {
      return !sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().isLoading();
    }
  }).then(function (result) {
    if (result.value) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: "".concat(result.value.login, "'s avatar"),
        imageUrl: result.value.avatar_url
      });
    }
  });
}
//-------------- Confirm-options --------------
// Confirm Text
function ConfirmText() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#2F8BE6',
    cancelButtonColor: '#F55252',
    confirmButtonText: 'Your text here!',
    customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-danger ml-1'
    },
    buttonsStyling: false
  }).then(function (result) {
    if (result.value) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        icon: "success",
        title: 'Deleted!',
        text: 'Your file has been deleted.',
        customClass: {
          confirmButton: 'btn btn-success'
        }
      });
    }
  });
}
// Confirm Color
function ConfirmColor() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#2F8BE6',
    cancelButtonColor: '#F55252',
    confirmButtonText: 'Yes, delete it!',
    customClass: {
      confirmButton: 'btn btn-warning',
      cancelButton: 'btn btn-danger ml-1'
    },
    buttonsStyling: false
  }).then(function (result) {
    if (result.value) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        icon: "success",
        title: 'Deleted!',
        text: 'Your imaginary file has been deleted.',
        customClass: {
          confirmButton: 'btn btn-success'
        }
      });
    } else if (result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().DismissReason.cancel)) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Cancelled',
        text: 'Your imaginary file is safe :)',
        icon: 'error',
        customClass: {
          confirmButton: 'btn btn-success'
        }
      });
    }
  });
}

/***/ }),

/***/ 58356:
/*!*******************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileDropDirective": function() { return /* binding */ FileDropDirective; },
/* harmony export */   "FileItem": function() { return /* binding */ FileItem; },
/* harmony export */   "FileLikeObject": function() { return /* binding */ FileLikeObject; },
/* harmony export */   "FileSelectDirective": function() { return /* binding */ FileSelectDirective; },
/* harmony export */   "FileUploadModule": function() { return /* binding */ FileUploadModule; },
/* harmony export */   "FileUploader": function() { return /* binding */ FileUploader; }
/* harmony export */ });
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ 95106);
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} node
 * @return {?}
 */

function isElement(node) {
  return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = /*#__PURE__*/function () {
  /**
   * @param {?} fileOrInput
   */
  function FileLikeObject(fileOrInput) {
    (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FileLikeObject);
    this.rawFile = fileOrInput;
    /** @type {?} */
    var isInput = isElement(fileOrInput);
    /** @type {?} */
    var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
    /** @type {?} */
    var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
    /** @type {?} */
    var method = '_createFrom' + postfix;
    (/** @type {?} */this)[method](fakePathOrObject);
  }
  /**
   * @param {?} path
   * @return {?}
   */
  return (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(FileLikeObject, [{
    key: "_createFromFakePath",
    value: function _createFromFakePath(path) {
      this.lastModifiedDate = void 0;
      this.size = void 0;
      this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
      this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    }
    /**
     * @param {?} object
     * @return {?}
     */
  }, {
    key: "_createFromObject",
    value: function _createFromObject(object) {
      this.size = object.size;
      this.type = object.type;
      this.name = object.name;
    }
  }]);
}();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileItem = /*#__PURE__*/function () {
  /**
   * @param {?} uploader
   * @param {?} some
   * @param {?} options
   */
  function FileItem(uploader, some, options) {
    (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FileItem);
    this.url = '/';
    this.headers = [];
    this.withCredentials = true;
    this.formData = [];
    this.isReady = false;
    this.isUploading = false;
    this.isUploaded = false;
    this.isSuccess = false;
    this.isCancel = false;
    this.isError = false;
    this.progress = 0;
    this.index = void 0;
    this.uploader = uploader;
    this.some = some;
    this.options = options;
    this.file = new FileLikeObject(some);
    this._file = some;
    if (uploader.options) {
      this.method = uploader.options.method || 'POST';
      this.alias = uploader.options.itemAlias || 'file';
    }
    this.url = uploader.options.url;
  }
  /**
   * @return {?}
   */
  return (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(FileItem, [{
    key: "upload",
    value: function upload() {
      try {
        this.uploader.uploadItem(this);
      } catch (e) {
        this.uploader._onCompleteItem(this, '', 0, {});
        this.uploader._onErrorItem(this, '', 0, {});
      }
    }
    /**
     * @return {?}
     */
  }, {
    key: "cancel",
    value: function cancel() {
      this.uploader.cancelItem(this);
    }
    /**
     * @return {?}
     */
  }, {
    key: "remove",
    value: function remove() {
      this.uploader.removeFromQueue(this);
    }
    /**
     * @return {?}
     */
  }, {
    key: "onBeforeUpload",
    value: function onBeforeUpload() {
      return void 0;
    }
    /**
     * @param {?} form
     * @return {?}
     */
  }, {
    key: "onBuildForm",
    value: function onBuildForm(form) {
      return {
        form: form
      };
    }
    /**
     * @param {?} progress
     * @return {?}
     */
  }, {
    key: "onProgress",
    value: function onProgress(progress) {
      return {
        progress: progress
      };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
  }, {
    key: "onSuccess",
    value: function onSuccess(response, status, headers) {
      return {
        response: response,
        status: status,
        headers: headers
      };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
  }, {
    key: "onError",
    value: function onError(response, status, headers) {
      return {
        response: response,
        status: status,
        headers: headers
      };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
  }, {
    key: "onCancel",
    value: function onCancel(response, status, headers) {
      return {
        response: response,
        status: status,
        headers: headers
      };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
  }, {
    key: "onComplete",
    value: function onComplete(response, status, headers) {
      return {
        response: response,
        status: status,
        headers: headers
      };
    }
    /**
     * @return {?}
     */
  }, {
    key: "_onBeforeUpload",
    value: function _onBeforeUpload() {
      this.isReady = true;
      this.isUploading = true;
      this.isUploaded = false;
      this.isSuccess = false;
      this.isCancel = false;
      this.isError = false;
      this.progress = 0;
      this.onBeforeUpload();
    }
    /**
     * @param {?} form
     * @return {?}
     */
  }, {
    key: "_onBuildForm",
    value: function _onBuildForm(form) {
      this.onBuildForm(form);
    }
    /**
     * @param {?} progress
     * @return {?}
     */
  }, {
    key: "_onProgress",
    value: function _onProgress(progress) {
      this.progress = progress;
      this.onProgress(progress);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
  }, {
    key: "_onSuccess",
    value: function _onSuccess(response, status, headers) {
      this.isReady = false;
      this.isUploading = false;
      this.isUploaded = true;
      this.isSuccess = true;
      this.isCancel = false;
      this.isError = false;
      this.progress = 100;
      this.index = void 0;
      this.onSuccess(response, status, headers);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
  }, {
    key: "_onError",
    value: function _onError(response, status, headers) {
      this.isReady = false;
      this.isUploading = false;
      this.isUploaded = true;
      this.isSuccess = false;
      this.isCancel = false;
      this.isError = true;
      this.progress = 0;
      this.index = void 0;
      this.onError(response, status, headers);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
  }, {
    key: "_onCancel",
    value: function _onCancel(response, status, headers) {
      this.isReady = false;
      this.isUploading = false;
      this.isUploaded = false;
      this.isSuccess = false;
      this.isCancel = true;
      this.isError = false;
      this.progress = 0;
      this.index = void 0;
      this.onCancel(response, status, headers);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
  }, {
    key: "_onComplete",
    value: function _onComplete(response, status, headers) {
      this.onComplete(response, status, headers);
      if (this.uploader.options.removeAfterUpload) {
        this.remove();
      }
    }
    /**
     * @return {?}
     */
  }, {
    key: "_prepareToUploading",
    value: function _prepareToUploading() {
      this.index = this.index || ++this.uploader._nextIndex;
      this.isReady = true;
    }
  }]);
}();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileType = /*#__PURE__*/function () {
  function FileType() {
    (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FileType);
  }
  return (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(FileType, null, [{
    key: "getMimeClass",
    value:
    /**
     * @param {?} file
     * @return {?}
     */
    function getMimeClass(file) {
      /** @type {?} */
      var mimeClass = 'application';
      if (this.mime_psd.indexOf(file.type) !== -1) {
        mimeClass = 'image';
      } else if (file.type.match('image.*')) {
        mimeClass = 'image';
      } else if (file.type.match('video.*')) {
        mimeClass = 'video';
      } else if (file.type.match('audio.*')) {
        mimeClass = 'audio';
      } else if (file.type === 'application/pdf') {
        mimeClass = 'pdf';
      } else if (this.mime_compress.indexOf(file.type) !== -1) {
        mimeClass = 'compress';
      } else if (this.mime_doc.indexOf(file.type) !== -1) {
        mimeClass = 'doc';
      } else if (this.mime_xsl.indexOf(file.type) !== -1) {
        mimeClass = 'xls';
      } else if (this.mime_ppt.indexOf(file.type) !== -1) {
        mimeClass = 'ppt';
      }
      if (mimeClass === 'application') {
        mimeClass = this.fileTypeDetection(file.name);
      }
      return mimeClass;
    }
    /**
     * @param {?} inputFilename
     * @return {?}
     */
  }, {
    key: "fileTypeDetection",
    value: function fileTypeDetection(inputFilename) {
      /** @type {?} */
      var types = {
        'jpg': 'image',
        'jpeg': 'image',
        'tif': 'image',
        'psd': 'image',
        'bmp': 'image',
        'png': 'image',
        'nef': 'image',
        'tiff': 'image',
        'cr2': 'image',
        'dwg': 'image',
        'cdr': 'image',
        'ai': 'image',
        'indd': 'image',
        'pin': 'image',
        'cdp': 'image',
        'skp': 'image',
        'stp': 'image',
        '3dm': 'image',
        'mp3': 'audio',
        'wav': 'audio',
        'wma': 'audio',
        'mod': 'audio',
        'm4a': 'audio',
        'compress': 'compress',
        'zip': 'compress',
        'rar': 'compress',
        '7z': 'compress',
        'lz': 'compress',
        'z01': 'compress',
        'bz2': 'compress',
        'gz': 'compress',
        'pdf': 'pdf',
        'xls': 'xls',
        'xlsx': 'xls',
        'ods': 'xls',
        'mp4': 'video',
        'avi': 'video',
        'wmv': 'video',
        'mpg': 'video',
        'mts': 'video',
        'flv': 'video',
        '3gp': 'video',
        'vob': 'video',
        'm4v': 'video',
        'mpeg': 'video',
        'm2ts': 'video',
        'mov': 'video',
        'doc': 'doc',
        'docx': 'doc',
        'eps': 'doc',
        'txt': 'doc',
        'odt': 'doc',
        'rtf': 'doc',
        'ppt': 'ppt',
        'pptx': 'ppt',
        'pps': 'ppt',
        'ppsx': 'ppt',
        'odp': 'ppt'
      };
      /** @type {?} */
      var chunks = inputFilename.split('.');
      if (chunks.length < 2) {
        return 'application';
      }
      /** @type {?} */
      var extension = chunks[chunks.length - 1].toLowerCase();
      if (types[extension] === undefined) {
        return 'application';
      } else {
        return types[extension];
      }
    }
  }]);
}();
/*  MS office  */
FileType.mime_doc = ['application/msword', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.wordprocessingml.template', 'application/vnd.ms-word.document.macroEnabled.12', 'application/vnd.ms-word.template.macroEnabled.12'];
FileType.mime_xsl = ['application/vnd.ms-excel', 'application/vnd.ms-excel', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.spreadsheetml.template', 'application/vnd.ms-excel.sheet.macroEnabled.12', 'application/vnd.ms-excel.template.macroEnabled.12', 'application/vnd.ms-excel.addin.macroEnabled.12', 'application/vnd.ms-excel.sheet.binary.macroEnabled.12'];
FileType.mime_ppt = ['application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.presentationml.template', 'application/vnd.openxmlformats-officedocument.presentationml.slideshow', 'application/vnd.ms-powerpoint.addin.macroEnabled.12', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'];
/* PSD */
FileType.mime_psd = ['image/photoshop', 'image/x-photoshop', 'image/psd', 'application/photoshop', 'application/psd', 'zz-application/zz-winassoc-psd'];
/* Compressed files */
FileType.mime_compress = ['application/x-gtar', 'application/x-gcompress', 'application/compress', 'application/x-tar', 'application/x-rar-compressed', 'application/octet-stream', 'application/x-zip-compressed', 'application/zip-compressed', 'application/x-7z-compressed', 'application/gzip', 'application/x-bzip2'];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function _isFile(value) {
  return File && value instanceof File;
}
/**
 * @record
 */
function Headers() {}
if (false) {}
/**
 * @record
 */
function FileUploaderOptions() {}
if (false) {}
var FileUploader = /*#__PURE__*/function () {
  /**
   * @param {?} options
   */
  function FileUploader(options) {
    (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FileUploader);
    this.isUploading = false;
    this.queue = [];
    this.progress = 0;
    this._nextIndex = 0;
    this.options = {
      autoUpload: false,
      isHTML5: true,
      filters: [],
      removeAfterUpload: false,
      disableMultipart: false,
      formatDataFunction: (
      /**
      * @param {?} item
      * @return {?}
      */
      function formatDataFunction(item) {
        return item._file;
      }),
      formatDataFunctionIsAsync: false
    };
    this.setOptions(options);
    this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  /**
   * @param {?} options
   * @return {?}
   */
  return (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(FileUploader, [{
    key: "setOptions",
    value: function setOptions(options) {
      this.options = Object.assign(this.options, options);
      this.authToken = this.options.authToken;
      this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
      this.autoUpload = this.options.autoUpload;
      this.options.filters.unshift({
        name: 'queueLimit',
        fn: this._queueLimitFilter
      });
      if (this.options.maxFileSize) {
        this.options.filters.unshift({
          name: 'fileSize',
          fn: this._fileSizeFilter
        });
      }
      if (this.options.allowedFileType) {
        this.options.filters.unshift({
          name: 'fileType',
          fn: this._fileTypeFilter
        });
      }
      if (this.options.allowedMimeType) {
        this.options.filters.unshift({
          name: 'mimeType',
          fn: this._mimeTypeFilter
        });
      }
      for (var i = 0; i < this.queue.length; i++) {
        this.queue[i].url = this.options.url;
      }
    }
    /**
     * @param {?} files
     * @param {?=} options
     * @param {?=} filters
     * @return {?}
     */
  }, {
    key: "addToQueue",
    value: function addToQueue(files, options, filters) {
      var _this = this;
      /** @type {?} */
      var list = [];
      var _iterator = (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(files),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var file = _step.value;
          list.push(file);
        }
        /** @type {?} */
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var arrayOfFilters = this._getFilters(filters);
      /** @type {?} */
      var count = this.queue.length;
      /** @type {?} */
      var addedFileItems = [];
      list.map(
      /**
      * @param {?} some
      * @return {?}
      */
      function (some) {
        if (!options) {
          options = _this.options;
        }
        /** @type {?} */
        var temp = new FileLikeObject(some);
        if (_this._isValidFile(temp, arrayOfFilters, options)) {
          /** @type {?} */
          var fileItem = new FileItem(_this, some, options);
          addedFileItems.push(fileItem);
          _this.queue.push(fileItem);
          _this._onAfterAddingFile(fileItem);
        } else {
          /** @type {?} */
          var filter = arrayOfFilters[_this._failFilterIndex];
          _this._onWhenAddingFileFailed(temp, filter, options);
        }
      });
      if (this.queue.length !== count) {
        this._onAfterAddingAll(addedFileItems);
        this.progress = this._getTotalProgress();
      }
      this._render();
      if (this.options.autoUpload) {
        this.uploadAll();
      }
    }
    /**
     * @param {?} value
     * @return {?}
     */
  }, {
    key: "removeFromQueue",
    value: function removeFromQueue(value) {
      /** @type {?} */
      var index = this.getIndexOfItem(value);
      /** @type {?} */
      var item = this.queue[index];
      if (item.isUploading) {
        item.cancel();
      }
      this.queue.splice(index, 1);
      this.progress = this._getTotalProgress();
    }
    /**
     * @return {?}
     */
  }, {
    key: "clearQueue",
    value: function clearQueue() {
      while (this.queue.length) {
        this.queue[0].remove();
      }
      this.progress = 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
  }, {
    key: "uploadItem",
    value: function uploadItem(value) {
      /** @type {?} */
      var index = this.getIndexOfItem(value);
      /** @type {?} */
      var item = this.queue[index];
      /** @type {?} */
      var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
      item._prepareToUploading();
      if (this.isUploading) {
        return;
      }
      this.isUploading = true;
      (/** @type {?} */this)[transport](item);
    }
    /**
     * @param {?} value
     * @return {?}
     */
  }, {
    key: "cancelItem",
    value: function cancelItem(value) {
      /** @type {?} */
      var index = this.getIndexOfItem(value);
      /** @type {?} */
      var item = this.queue[index];
      /** @type {?} */
      var prop = this.options.isHTML5 ? item._xhr : item._form;
      if (item && item.isUploading) {
        prop.abort();
      }
    }
    /**
     * @return {?}
     */
  }, {
    key: "uploadAll",
    value: function uploadAll() {
      /** @type {?} */
      var items = this.getNotUploadedItems().filter(
      /**
      * @param {?} item
      * @return {?}
      */
      function (item) {
        return !item.isUploading;
      });
      if (!items.length) {
        return;
      }
      items.map(
      /**
      * @param {?} item
      * @return {?}
      */
      function (item) {
        return item._prepareToUploading();
      });
      items[0].upload();
    }
    /**
     * @return {?}
     */
  }, {
    key: "cancelAll",
    value: function cancelAll() {
      /** @type {?} */
      var items = this.getNotUploadedItems();
      items.map(
      /**
      * @param {?} item
      * @return {?}
      */
      function (item) {
        return item.cancel();
      });
    }
    /**
     * @param {?} value
     * @return {?}
     */
  }, {
    key: "isFile",
    value: function isFile(value) {
      return _isFile(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
  }, {
    key: "isFileLikeObject",
    value: function isFileLikeObject(value) {
      return value instanceof FileLikeObject;
    }
    /**
     * @param {?} value
     * @return {?}
     */
  }, {
    key: "getIndexOfItem",
    value: function getIndexOfItem(value) {
      return typeof value === 'number' ? value : this.queue.indexOf(value);
    }
    /**
     * @return {?}
     */
  }, {
    key: "getNotUploadedItems",
    value: function getNotUploadedItems() {
      return this.queue.filter(
      /**
      * @param {?} item
      * @return {?}
      */
      function (item) {
        return !item.isUploaded;
      });
    }
    /**
     * @return {?}
     */
  }, {
    key: "getReadyItems",
    value: function getReadyItems() {
      return this.queue.filter(
      /**
      * @param {?} item
      * @return {?}
      */
      function (item) {
        return item.isReady && !item.isUploading;
      }).sort(
      /**
      * @param {?} item1
      * @param {?} item2
      * @return {?}
      */
      function (item1, item2) {
        return item1.index - item2.index;
      });
    }
    /**
     * @return {?}
     */
  }, {
    key: "destroy",
    value: function destroy() {
      return void 0;
    }
    /**
     * @param {?} fileItems
     * @return {?}
     */
  }, {
    key: "onAfterAddingAll",
    value: function onAfterAddingAll(fileItems) {
      return {
        fileItems: fileItems
      };
    }
    /**
     * @param {?} fileItem
     * @param {?} form
     * @return {?}
     */
  }, {
    key: "onBuildItemForm",
    value: function onBuildItemForm(fileItem, form) {
      return {
        fileItem: fileItem,
        form: form
      };
    }
    /**
     * @param {?} fileItem
     * @return {?}
     */
  }, {
    key: "onAfterAddingFile",
    value: function onAfterAddingFile(fileItem) {
      return {
        fileItem: fileItem
      };
    }
    /**
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
  }, {
    key: "onWhenAddingFileFailed",
    value: function onWhenAddingFileFailed(item, filter, options) {
      return {
        item: item,
        filter: filter,
        options: options
      };
    }
    /**
     * @param {?} fileItem
     * @return {?}
     */
  }, {
    key: "onBeforeUploadItem",
    value: function onBeforeUploadItem(fileItem) {
      return {
        fileItem: fileItem
      };
    }
    /**
     * @param {?} fileItem
     * @param {?} progress
     * @return {?}
     */
  }, {
    key: "onProgressItem",
    value: function onProgressItem(fileItem, progress) {
      return {
        fileItem: fileItem,
        progress: progress
      };
    }
    /**
     * @param {?} progress
     * @return {?}
     */
  }, {
    key: "onProgressAll",
    value: function onProgressAll(progress) {
      return {
        progress: progress
      };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
  }, {
    key: "onSuccessItem",
    value: function onSuccessItem(item, response, status, headers) {
      return {
        item: item,
        response: response,
        status: status,
        headers: headers
      };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
  }, {
    key: "onErrorItem",
    value: function onErrorItem(item, response, status, headers) {
      return {
        item: item,
        response: response,
        status: status,
        headers: headers
      };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
  }, {
    key: "onCancelItem",
    value: function onCancelItem(item, response, status, headers) {
      return {
        item: item,
        response: response,
        status: status,
        headers: headers
      };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
  }, {
    key: "onCompleteItem",
    value: function onCompleteItem(item, response, status, headers) {
      return {
        item: item,
        response: response,
        status: status,
        headers: headers
      };
    }
    /**
     * @return {?}
     */
  }, {
    key: "onCompleteAll",
    value: function onCompleteAll() {
      return void 0;
    }
    /**
     * @param {?} item
     * @return {?}
     */
  }, {
    key: "_mimeTypeFilter",
    value: function _mimeTypeFilter(item) {
      return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    }
    /**
     * @param {?} item
     * @return {?}
     */
  }, {
    key: "_fileSizeFilter",
    value: function _fileSizeFilter(item) {
      return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    }
    /**
     * @param {?} item
     * @return {?}
     */
  }, {
    key: "_fileTypeFilter",
    value: function _fileTypeFilter(item) {
      return !(this.options.allowedFileType && this.options.allowedFileType.indexOf(FileType.getMimeClass(item)) === -1);
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
  }, {
    key: "_onErrorItem",
    value: function _onErrorItem(item, response, status, headers) {
      item._onError(response, status, headers);
      this.onErrorItem(item, response, status, headers);
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
  }, {
    key: "_onCompleteItem",
    value: function _onCompleteItem(item, response, status, headers) {
      item._onComplete(response, status, headers);
      this.onCompleteItem(item, response, status, headers);
      /** @type {?} */
      var nextItem = this.getReadyItems()[0];
      this.isUploading = false;
      if (nextItem) {
        nextItem.upload();
        return;
      }
      this.onCompleteAll();
      this.progress = this._getTotalProgress();
      this._render();
    }
    /**
     * @protected
     * @param {?} parsedHeaders
     * @return {?}
     */
  }, {
    key: "_headersGetter",
    value: function _headersGetter(parsedHeaders) {
      return (
        /**
        * @param {?} name
        * @return {?}
        */
        function (name) {
          if (name) {
            return parsedHeaders[name.toLowerCase()] || void 0;
          }
          return parsedHeaders;
        }
      );
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
  }, {
    key: "_xhrTransport",
    value: function _xhrTransport(item) {
      var _this2 = this;
      /** @type {?} */
      var that = this;
      /** @type {?} */
      var xhr = item._xhr = new XMLHttpRequest();
      /** @type {?} */
      var sendable;
      this._onBeforeUploadItem(item);
      if (typeof item._file.size !== 'number') {
        throw new TypeError('The file specified is no longer valid');
      }
      if (!this.options.disableMultipart) {
        sendable = new FormData();
        this._onBuildItemForm(item, sendable);
        /** @type {?} */
        var appendFile =
        /**
        * @return {?}
        */
        function appendFile() {
          return sendable.append(item.alias, item._file, item.file.name);
        };
        if (!this.options.parametersBeforeFiles) {
          appendFile();
        }
        // For AWS, Additional Parameters must come BEFORE Files
        if (this.options.additionalParameter !== undefined) {
          Object.keys(this.options.additionalParameter).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            /** @type {?} */
            var paramVal = _this2.options.additionalParameter[key];
            // Allow an additional parameter to include the filename
            if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
              paramVal = paramVal.replace('{{file_name}}', item.file.name);
            }
            sendable.append(key, paramVal);
          });
        }
        if (this.options.parametersBeforeFiles) {
          appendFile();
        }
      } else {
        sendable = this.options.formatDataFunction(item);
      }
      xhr.upload.onprogress =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        /** @type {?} */
        var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
        _this2._onProgressItem(item, progress);
      };
      xhr.onload =
      /**
      * @return {?}
      */
      function () {
        /** @type {?} */
        var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
        /** @type {?} */
        var response = _this2._transformResponse(xhr.response, headers);
        /** @type {?} */
        var gist = _this2._isSuccessCode(xhr.status) ? 'Success' : 'Error';
        /** @type {?} */
        var method = '_on' + gist + 'Item';
        /** @type {?} */_this2[method](item, response, xhr.status, headers);
        _this2._onCompleteItem(item, response, xhr.status, headers);
      };
      xhr.onerror =
      /**
      * @return {?}
      */
      function () {
        /** @type {?} */
        var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
        /** @type {?} */
        var response = _this2._transformResponse(xhr.response, headers);
        _this2._onErrorItem(item, response, xhr.status, headers);
        _this2._onCompleteItem(item, response, xhr.status, headers);
      };
      xhr.onabort =
      /**
      * @return {?}
      */
      function () {
        /** @type {?} */
        var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
        /** @type {?} */
        var response = _this2._transformResponse(xhr.response, headers);
        _this2._onCancelItem(item, response, xhr.status, headers);
        _this2._onCompleteItem(item, response, xhr.status, headers);
      };
      xhr.open(item.method, item.url, true);
      xhr.withCredentials = item.withCredentials;
      if (this.options.headers) {
        var _iterator2 = (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.options.headers),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var header = _step2.value;
            xhr.setRequestHeader(header.name, header.value);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      if (item.headers.length) {
        var _iterator3 = (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(item.headers),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _header = _step3.value;
            xhr.setRequestHeader(_header.name, _header.value);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      if (this.authToken) {
        xhr.setRequestHeader(this.authTokenHeader, this.authToken);
      }
      xhr.onreadystatechange =
      /**
      * @return {?}
      */
      function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          that.response.emit(xhr.responseText);
        }
      };
      if (this.options.formatDataFunctionIsAsync) {
        sendable.then(
        /**
        * @param {?} result
        * @return {?}
        */
        function (result) {
          return xhr.send(JSON.stringify(result));
        });
      } else {
        xhr.send(sendable);
      }
      this._render();
    }
    /**
     * @protected
     * @param {?=} value
     * @return {?}
     */
  }, {
    key: "_getTotalProgress",
    value: function _getTotalProgress() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (this.options.removeAfterUpload) {
        return value;
      }
      /** @type {?} */
      var notUploaded = this.getNotUploadedItems().length;
      /** @type {?} */
      var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
      /** @type {?} */
      var ratio = 100 / this.queue.length;
      /** @type {?} */
      var current = value * ratio / 100;
      return Math.round(uploaded * ratio + current);
    }
    /**
     * @protected
     * @param {?} filters
     * @return {?}
     */
  }, {
    key: "_getFilters",
    value: function _getFilters(filters) {
      if (!filters) {
        return this.options.filters;
      }
      if (Array.isArray(filters)) {
        return filters;
      }
      if (typeof filters === 'string') {
        /** @type {?} */
        var names = filters.match(/[^\s,]+/g);
        return this.options.filters.filter(
        /**
        * @param {?} filter
        * @return {?}
        */
        function (filter) {
          return names.indexOf(filter.name) !== -1;
        });
      }
      return this.options.filters;
    }
    /**
     * @protected
     * @return {?}
     */
  }, {
    key: "_render",
    value: function _render() {
      return void 0;
    }
    /**
     * @protected
     * @return {?}
     */
  }, {
    key: "_queueLimitFilter",
    value: function _queueLimitFilter() {
      return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    }
    /**
     * @protected
     * @param {?} file
     * @param {?} filters
     * @param {?} options
     * @return {?}
     */
  }, {
    key: "_isValidFile",
    value: function _isValidFile(file, filters, options) {
      var _this3 = this;
      this._failFilterIndex = -1;
      return !filters.length ? true : filters.every(
      /**
      * @param {?} filter
      * @return {?}
      */
      function (filter) {
        _this3._failFilterIndex++;
        return filter.fn.call(_this3, file, options);
      });
    }
    /**
     * @protected
     * @param {?} status
     * @return {?}
     */
  }, {
    key: "_isSuccessCode",
    value: function _isSuccessCode(status) {
      return status >= 200 && status < 300 || status === 304;
    }
    /**
     * @protected
     * @param {?} response
     * @param {?} headers
     * @return {?}
     */
  }, {
    key: "_transformResponse",
    value: function _transformResponse(response, headers) {
      return response;
    }
    /**
     * @protected
     * @param {?} headers
     * @return {?}
     */
  }, {
    key: "_parseHeaders",
    value: function _parseHeaders(headers) {
      /** @type {?} */
      var parsed = {};
      /** @type {?} */
      var key;
      /** @type {?} */
      var val;
      /** @type {?} */
      var i;
      if (!headers) {
        return parsed;
      }
      headers.split('\n').map(
      /**
      * @param {?} line
      * @return {?}
      */
      function (line) {
        i = line.indexOf(':');
        key = line.slice(0, i).trim().toLowerCase();
        val = line.slice(i + 1).trim();
        if (key) {
          parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
      });
      return parsed;
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
  }, {
    key: "_onWhenAddingFileFailed",
    value: function _onWhenAddingFileFailed(item, filter, options) {
      this.onWhenAddingFileFailed(item, filter, options);
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
  }, {
    key: "_onAfterAddingFile",
    value: function _onAfterAddingFile(item) {
      this.onAfterAddingFile(item);
    }
    /**
     * @protected
     * @param {?} items
     * @return {?}
     */
  }, {
    key: "_onAfterAddingAll",
    value: function _onAfterAddingAll(items) {
      this.onAfterAddingAll(items);
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
  }, {
    key: "_onBeforeUploadItem",
    value: function _onBeforeUploadItem(item) {
      item._onBeforeUpload();
      this.onBeforeUploadItem(item);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} form
     * @return {?}
     */
  }, {
    key: "_onBuildItemForm",
    value: function _onBuildItemForm(item, form) {
      item._onBuildForm(form);
      this.onBuildItemForm(item, form);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} progress
     * @return {?}
     */
  }, {
    key: "_onProgressItem",
    value: function _onProgressItem(item, progress) {
      /** @type {?} */
      var total = this._getTotalProgress(progress);
      this.progress = total;
      item._onProgress(progress);
      this.onProgressItem(item, progress);
      this.onProgressAll(total);
      this._render();
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
  }, {
    key: "_onSuccessItem",
    value: function _onSuccessItem(item, response, status, headers) {
      item._onSuccess(response, status, headers);
      this.onSuccessItem(item, response, status, headers);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
  }, {
    key: "_onCancelItem",
    value: function _onCancelItem(item, response, status, headers) {
      item._onCancel(response, status, headers);
      this.onCancelItem(item, response, status, headers);
    }
  }]);
}();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileSelectDirective = /*#__PURE__*/function () {
  /**
   * @param {?} element
   */
  function FileSelectDirective(element) {
    (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FileSelectDirective);
    this.onFileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.element = element;
  }
  /**
   * @return {?}
   */
  return (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(FileSelectDirective, [{
    key: "getOptions",
    value: function getOptions() {
      return this.uploader.options;
    }
    /**
     * @return {?}
     */
  }, {
    key: "getFilters",
    value: function getFilters() {
      return {};
    }
    /**
     * @return {?}
     */
  }, {
    key: "isEmptyAfterSelection",
    value: function isEmptyAfterSelection() {
      return !!this.element.nativeElement.attributes.multiple;
    }
    /**
     * @return {?}
     */
  }, {
    key: "onChange",
    value: function onChange() {
      /** @type {?} */
      var files = this.element.nativeElement.files;
      /** @type {?} */
      var options = this.getOptions();
      /** @type {?} */
      var filters = this.getFilters();
      this.uploader.addToQueue(files, options, filters);
      this.onFileSelected.emit(files);
      if (this.isEmptyAfterSelection()) {
        this.element.nativeElement.value = '';
      }
    }
  }]);
}();
FileSelectDirective.ɵfac = function FileSelectDirective_Factory(t) {
  return new (t || FileSelectDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef));
};
FileSelectDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: FileSelectDirective,
  selectors: [["", "ng2FileSelect", ""]],
  hostBindings: function FileSelectDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FileSelectDirective_change_HostBindingHandler() {
        return ctx.onChange();
      });
    }
  },
  inputs: {
    uploader: "uploader"
  },
  outputs: {
    onFileSelected: "onFileSelected"
  }
});
/** @nocollapse */
FileSelectDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
  }];
};
FileSelectDirective.propDecorators = {
  uploader: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  onFileSelected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  onChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
    args: ['change']
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](FileSelectDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: '[ng2FileSelect]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }];
  }, {
    onFileSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    /**
     * @return {?}
     */
    onChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
      args: ['change']
    }],
    uploader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileDropDirective = /*#__PURE__*/function () {
  /**
   * @param {?} element
   */
  function FileDropDirective(element) {
    (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FileDropDirective);
    this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.element = element;
  }
  /**
   * @return {?}
   */
  return (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(FileDropDirective, [{
    key: "getOptions",
    value: function getOptions() {
      return this.uploader.options;
    }
    /**
     * @return {?}
     */
  }, {
    key: "getFilters",
    value: function getFilters() {
      return {};
    }
    /**
     * @param {?} event
     * @return {?}
     */
  }, {
    key: "onDrop",
    value: function onDrop(event) {
      /** @type {?} */
      var transfer = this._getTransfer(event);
      if (!transfer) {
        return;
      }
      /** @type {?} */
      var options = this.getOptions();
      /** @type {?} */
      var filters = this.getFilters();
      this._preventAndStop(event);
      this.uploader.addToQueue(transfer.files, options, filters);
      this.fileOver.emit(false);
      this.onFileDrop.emit(transfer.files);
    }
    /**
     * @param {?} event
     * @return {?}
     */
  }, {
    key: "onDragOver",
    value: function onDragOver(event) {
      /** @type {?} */
      var transfer = this._getTransfer(event);
      if (!this._haveFiles(transfer.types)) {
        return;
      }
      transfer.dropEffect = 'copy';
      this._preventAndStop(event);
      this.fileOver.emit(true);
    }
    /**
     * @param {?} event
     * @return {?}
     */
  }, {
    key: "onDragLeave",
    value: function onDragLeave(event) {
      if ((/** @type {?} */this).element) {
        if (event.currentTarget === (/** @type {?} */this).element[0]) {
          return;
        }
      }
      this._preventAndStop(event);
      this.fileOver.emit(false);
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
  }, {
    key: "_getTransfer",
    value: function _getTransfer(event) {
      return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
  }, {
    key: "_preventAndStop",
    value: function _preventAndStop(event) {
      event.preventDefault();
      event.stopPropagation();
    }
    /**
     * @protected
     * @param {?} types
     * @return {?}
     */
  }, {
    key: "_haveFiles",
    value: function _haveFiles(types) {
      if (!types) {
        return false;
      }
      if (types.indexOf) {
        return types.indexOf('Files') !== -1;
      } else if (types.contains) {
        return types.contains('Files');
      } else {
        return false;
      }
    }
  }]);
}();
FileDropDirective.ɵfac = function FileDropDirective_Factory(t) {
  return new (t || FileDropDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef));
};
FileDropDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: FileDropDirective,
  selectors: [["", "ng2FileDrop", ""]],
  hostBindings: function FileDropDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("drop", function FileDropDirective_drop_HostBindingHandler($event) {
        return ctx.onDrop($event);
      })("dragover", function FileDropDirective_dragover_HostBindingHandler($event) {
        return ctx.onDragOver($event);
      })("dragleave", function FileDropDirective_dragleave_HostBindingHandler($event) {
        return ctx.onDragLeave($event);
      });
    }
  },
  inputs: {
    uploader: "uploader"
  },
  outputs: {
    fileOver: "fileOver",
    onFileDrop: "onFileDrop"
  }
});
/** @nocollapse */
FileDropDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
  }];
};
FileDropDirective.propDecorators = {
  uploader: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  fileOver: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  onFileDrop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  onDrop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
    args: ['drop', ['$event']]
  }],
  onDragOver: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
    args: ['dragover', ['$event']]
  }],
  onDragLeave: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
    args: ['dragleave', ['$event']]
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](FileDropDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: '[ng2FileDrop]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }];
  }, {
    fileOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    onFileDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    /**
     * @param {?} event
     * @return {?}
     */
    onDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
      args: ['drop', ['$event']]
    }],
    /**
     * @param {?} event
     * @return {?}
     */
    onDragOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
      args: ['dragover', ['$event']]
    }],
    /**
     * @param {?} event
     * @return {?}
     */
    onDragLeave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
      args: ['dragleave', ['$event']]
    }],
    uploader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileUploadModule = /*#__PURE__*/(0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function FileUploadModule() {
  (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FileUploadModule);
});
FileUploadModule.ɵfac = function FileUploadModule_Factory(t) {
  return new (t || FileUploadModule)();
};
FileUploadModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: FileUploadModule
});
FileUploadModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](FileUploadModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
      declarations: [FileDropDirective, FileSelectDirective],
      exports: [FileDropDirective, FileSelectDirective]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FileUploadModule, {
    declarations: function declarations() {
      return [FileDropDirective, FileSelectDirective];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule];
    },
    exports: function exports() {
      return [FileDropDirective, FileSelectDirective];
    }
  });
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



/***/ }),

/***/ 60598:
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v10.11.1
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() : 0;
})(this, function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    return _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
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
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
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
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(receiver);
        }
        return desc.value;
      };
    }
    return _get(target, property, receiver || target);
  }
  var consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  var uniqueArray = function uniqueArray(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }
    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param str
   */

  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  /**
   * Returns the array of object values (Object.values isn't supported in IE11)
   * @param obj
   */

  var objectValues = function objectValues(obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  };
  /**
   * Convert NodeList to Array
   * @param nodeList
   */

  var toArray = function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  };
  /**
   * Standardise console warnings
   * @param message
   */

  var warn = function warn(message) {
    console.warn("".concat(consolePrefix, " ").concat(_typeof(message) === 'object' ? message.join(' ') : message));
  };
  /**
   * Standardise console errors
   * @param message
   */

  var error = function error(message) {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  var previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  var warnOnce = function warnOnce(message) {
    if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  var warnAboutDeprecation = function warnAboutDeprecation(deprecatedParam, useInstead) {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };
  var hasToPromiseFn = function hasToPromiseFn(arg) {
    return arg && typeof arg.toPromise === 'function';
  };
  var asPromise = function asPromise(arg) {
    return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  };
  var isPromise = function isPromise(arg) {
    return arg && Promise.resolve(arg) === arg;
  };
  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });
  var isJqueryElement = function isJqueryElement(elem) {
    return _typeof(elem) === 'object' && elem.jquery;
  };
  var isElement = function isElement(elem) {
    return elem instanceof Element || isJqueryElement(elem);
  };
  var argsToParams = function argsToParams(args) {
    var params = {};
    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
      _extends(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach(function (name, index) {
        var arg = args[index];
        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        }
      });
    }
    return params;
  };
  var swalPrefix = 'swal2-';
  var prefix = function prefix(items) {
    var result = {};
    for (var i in items) {
      result[items[i]] = swalPrefix + items[i];
    }
    return result;
  };
  var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);
  var getContainer = function getContainer() {
    return document.body.querySelector(".".concat(swalClasses.container));
  };
  var elementBySelector = function elementBySelector(selectorString) {
    var container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };
  var elementByClass = function elementByClass(className) {
    return elementBySelector(".".concat(className));
  };
  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };
  var getIcons = function getIcons() {
    var popup = getPopup();
    return toArray(popup.querySelectorAll(".".concat(swalClasses.icon)));
  };
  var getIcon = function getIcon() {
    var visibleIcon = getIcons().filter(function (icon) {
      return isVisible(icon);
    });
    return visibleIcon.length ? visibleIcon[0] : null;
  };
  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };
  var getContent = function getContent() {
    return elementByClass(swalClasses.content);
  };
  var getHtmlContainer = function getHtmlContainer() {
    return elementByClass(swalClasses['html-container']);
  };
  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };
  var getProgressSteps = function getProgressSteps() {
    return elementByClass(swalClasses['progress-steps']);
  };
  var getValidationMessage = function getValidationMessage() {
    return elementByClass(swalClasses['validation-message']);
  };
  var getConfirmButton = function getConfirmButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  };
  var getDenyButton = function getDenyButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
  };
  var getInputLabel = function getInputLabel() {
    return elementByClass(swalClasses['input-label']);
  };
  var getLoader = function getLoader() {
    return elementBySelector(".".concat(swalClasses.loader));
  };
  var getCancelButton = function getCancelButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  };
  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };
  var getHeader = function getHeader() {
    return elementByClass(swalClasses.header);
  };
  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };
  var getTimerProgressBar = function getTimerProgressBar() {
    return elementByClass(swalClasses['timer-progress-bar']);
  };
  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  }; // https://github.com/jkup/focusable/blob/master/index.js

  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  var getFocusableElements = function getFocusableElements() {
    var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort(function (a, b) {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }
      return 0;
    });
    var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
      return el.getAttribute('tabindex') !== '-1';
    });
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
      return isVisible(el);
    });
  };
  var isModal = function isModal() {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };
  var isToast = function isToast() {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };
  var isLoading = function isLoading() {
    return getPopup().hasAttribute('data-loading');
  };
  var states = {
    previousBodyPadding: null
  };
  var setInnerHtml = function setInnerHtml(elem, html) {
    // #1926
    elem.textContent = '';
    if (html) {
      var parser = new DOMParser();
      var parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
    }
  };
  var hasClass = function hasClass(elem, className) {
    if (!className) {
      return false;
    }
    var classList = className.split(/\s+/);
    for (var i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }
    return true;
  };
  var removeCustomClasses = function removeCustomClasses(elem, params) {
    toArray(elem.classList).forEach(function (className) {
      if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
        elem.classList.remove(className);
      }
    });
  };
  var applyCustomClass = function applyCustomClass(elem, params, className) {
    removeCustomClasses(elem, params);
    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
      }
      addClass(elem, params.customClass[className]);
    }
  };
  function getInput(content, inputType) {
    if (!inputType) {
      return null;
    }
    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(content, swalClasses[inputType]);
      case 'checkbox':
        return content.querySelector(".".concat(swalClasses.checkbox, " input"));
      case 'radio':
        return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));
      case 'range':
        return content.querySelector(".".concat(swalClasses.range, " input"));
      default:
        return getChildByClass(content, swalClasses.input);
    }
  }
  var focusInput = function focusInput(input) {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  var toggleClass = function toggleClass(target, classList, condition) {
    if (!target || !classList) {
      return;
    }
    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }
    classList.forEach(function (className) {
      if (target.forEach) {
        target.forEach(function (elem) {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  var addClass = function addClass(target, classList) {
    toggleClass(target, classList, true);
  };
  var removeClass = function removeClass(target, classList) {
    toggleClass(target, classList, false);
  };
  var getChildByClass = function getChildByClass(elem, className) {
    for (var i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };
  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    if (value === "".concat(parseInt(value))) {
      value = parseInt(value);
    }
    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  var show = function show(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.display = display;
  };
  var hide = function hide(elem) {
    elem.style.display = 'none';
  };
  var setStyle = function setStyle(parent, selector, property, value) {
    var el = parent.querySelector(selector);
    if (el) {
      el.style[property] = value;
    }
  };
  var toggle = function toggle(elem, condition, display) {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  var isVisible = function isVisible(elem) {
    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  };
  var allButtonsAreHidden = function allButtonsAreHidden() {
    return !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
  };
  var isScrollable = function isScrollable(elem) {
    return !!(elem.scrollHeight > elem.clientHeight);
  }; // borrowed from https://stackoverflow.com/a/46352119

  var hasCssAnimation = function hasCssAnimation(elem) {
    var style = window.getComputedStyle(elem);
    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  var contains = function contains(haystack, needle) {
    if (typeof haystack.contains === 'function') {
      return haystack.contains(needle);
    }
  };
  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var timerProgressBar = getTimerProgressBar();
    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }
      setTimeout(function () {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  var stopTimerProgressBar = function stopTimerProgressBar() {
    var timerProgressBar = getTimerProgressBar();
    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  // Detect Node env
  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };
  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');
  var resetOldContainer = function resetOldContainer() {
    var oldContainer = getContainer();
    if (!oldContainer) {
      return false;
    }
    oldContainer.parentNode.removeChild(oldContainer);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };
  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }
    oldInputVal = e.target.value;
  };
  var addInputChangeListeners = function addInputChangeListeners() {
    var content = getContent();
    var input = getChildByClass(content, swalClasses.input);
    var file = getChildByClass(content, swalClasses.file);
    var range = content.querySelector(".".concat(swalClasses.range, " input"));
    var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
    var select = getChildByClass(content, swalClasses.select);
    var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
    var textarea = getChildByClass(content, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;
    range.oninput = function (e) {
      resetValidationMessage(e);
      rangeOutput.value = range.value;
    };
    range.onchange = function (e) {
      resetValidationMessage(e);
      range.nextSibling.value = range.value;
    };
  };
  var getTarget = function getTarget(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  };
  var setupAccessibility = function setupAccessibility(params) {
    var popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };
  var setupRTL = function setupRTL(targetElement) {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */

  var init = function init(params) {
    // Clean up the old popup container if it exists
    var oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }
    var container = document.createElement('div');
    container.className = swalClasses.container;
    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }
    setInnerHtml(container, sweetHTML);
    var targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };
  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // Object
    } else if (_typeof(param) === 'object') {
      handleObject(param, target); // Plain string
    } else if (param) {
      setInnerHtml(target, param);
    }
  };
  var handleObject = function handleObject(param, target) {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param); // For other objects use their string representation
    } else {
      setInnerHtml(target, param.toString());
    }
  };
  var handleJqueryElem = function handleJqueryElem(target, elem) {
    target.textContent = '';
    if (0 in elem) {
      for (var i = 0; i in elem; i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };
  var animationEndEvent = function () {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }
    var testEl = document.createElement('div');
    var transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };
    for (var i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }
    return false;
  }();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  var measureScrollbar = function measureScrollbar() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };
  var renderActions = function renderActions(instance, params) {
    var actions = getActions();
    var loader = getLoader();
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } // Custom class

    applyCustomClass(actions, params, 'actions'); // Render buttons

    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
    if (params.reverseButtons) {
      actions.insertBefore(cancelButton, loader);
      actions.insertBefore(denyButton, loader);
      actions.insertBefore(confirmButton, loader);
    } // Loader

    setInnerHtml(loader, params.loaderHtml);
    applyCustomClass(loader, params, 'loader');
  };
  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    }
    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }
    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
    }
    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    }
  }
  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }
  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }
  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }
  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      var growClass = "grow-".concat(grow);
      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }
  var renderContainer = function renderContainer(instance, params) {
    var container = getContainer();
    if (!container) {
      return;
    }
    handleBackdropParam(container, params.backdrop);
    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

    var queueStep = document.body.getAttribute('data-swal2-queue-step');
    if (queueStep) {
      container.setAttribute('data-queue-step', queueStep);
      document.body.removeAttribute('data-swal2-queue-step');
    }
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };
  var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  var renderInput = function renderInput(instance, params) {
    var content = getContent();
    var innerParams = privateProps.innerParams.get(instance);
    var rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(function (inputType) {
      var inputClass = swalClasses[inputType];
      var inputContainer = getChildByClass(content, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;
      if (rerender) {
        hide(inputContainer);
      }
    });
    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class

      setCustomClass(params);
    }
  };
  var showInput = function showInput(params) {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }
    var inputContainer = getInputContainer(params.input);
    var input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(function () {
      focusInput(input);
    });
  };
  var removeAttributes = function removeAttributes(input) {
    for (var i = 0; i < input.attributes.length; i++) {
      var attrName = input.attributes[i].name;
      if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
        input.removeAttribute(attrName);
      }
    }
  };
  var setAttributes = function setAttributes(inputType, inputAttributes) {
    var input = getInput(getContent(), inputType);
    if (!input) {
      return;
    }
    removeAttributes(input);
    for (var attr in inputAttributes) {
      // Do not set a placeholder for <input type="range">
      // it'll crash Edge, #1298
      if (inputType === 'range' && attr === 'placeholder') {
        continue;
      }
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };
  var setCustomClass = function setCustomClass(params) {
    var inputContainer = getInputContainer(params.input);
    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };
  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };
  var setInputLabel = function setInputLabel(input, prependTo, params) {
    if (params.inputLabel) {
      input.id = swalClasses.input;
      var label = document.createElement('label');
      var labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };
  var getInputContainer = function getInputContainer(inputType) {
    var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getChildByClass(getContent(), inputClass);
  };
  var renderInputType = {};
  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
    }
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };
  renderInputType.file = function (input, params) {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };
  renderInputType.range = function (range, params) {
    var rangeInput = range.querySelector('input');
    var rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    setInputLabel(rangeInput, range, params);
    return range;
  };
  renderInputType.select = function (select, params) {
    select.textContent = '';
    if (params.inputPlaceholder) {
      var placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }
    setInputLabel(select, select, params);
    return select;
  };
  renderInputType.radio = function (radio) {
    radio.textContent = '';
    return radio;
  };
  renderInputType.checkbox = function (checkboxContainer, params) {
    var checkbox = getInput(getContent(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    var label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
  };
  renderInputType.textarea = function (textarea, params) {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);
    var getPadding = function getPadding(el) {
      return parseInt(window.getComputedStyle(el).paddingLeft) + parseInt(window.getComputedStyle(el).paddingRight);
    };
    if ('MutationObserver' in window) {
      // #1699
      var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
      var outputsize = function outputsize() {
        var contentWidth = textarea.offsetWidth + getPadding(getPopup()) + getPadding(getContent());
        if (contentWidth > initialPopupWidth) {
          getPopup().style.width = "".concat(contentWidth, "px");
        } else {
          getPopup().style.width = null;
        }
      };
      new MutationObserver(outputsize).observe(textarea, {
        attributes: true,
        attributeFilter: ['style']
      });
    }
    return textarea;
  };
  var renderContent = function renderContent(instance, params) {
    var content = getContent().querySelector("#".concat(swalClasses.content)); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, content);
      show(content, 'block'); // Content as plain text
    } else if (params.text) {
      content.textContent = params.text;
      show(content, 'block'); // No content
    } else {
      hide(content);
    }
    renderInput(instance, params); // Custom class

    applyCustomClass(getContent(), params, 'content');
  };
  var renderFooter = function renderFooter(instance, params) {
    var footer = getFooter();
    toggle(footer, params.footer);
    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class

    applyCustomClass(footer, params, 'footer');
  };
  var renderCloseButton = function renderCloseButton(instance, params) {
    var closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };
  var renderIcon = function renderIcon(instance, params) {
    var innerParams = privateProps.innerParams.get(instance); // if the given icon already rendered, apply the styling without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon && getIcon()) {
      applyStyles(getIcon(), params);
      return;
    }
    hideAllIcons();
    if (!params.icon) {
      return;
    }
    if (Object.keys(iconTypes).indexOf(params.icon) !== -1) {
      var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.icon]));
      show(icon); // Custom or default content

      setContent(icon, params);
      applyStyles(icon, params); // Animate icon

      addClass(icon, params.showClass.icon);
    } else {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
    }
  };
  var hideAllIcons = function hideAllIcons() {
    var icons = getIcons();
    for (var i = 0; i < icons.length; i++) {
      hide(icons[i]);
    }
  };
  var applyStyles = function applyStyles(icon, params) {
    // Icon color
    setColor(icon, params); // Success icon background color

    adjustSuccessIconBackgoundColor(); // Custom class

    applyCustomClass(icon, params, 'icon');
  }; // Adjust success icon background color to match the popup background color

  var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
    var popup = getPopup();
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };
  var setContent = function setContent(icon, params) {
    icon.textContent = '';
    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
    } else if (params.icon === 'error') {
      setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
    } else {
      var defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };
  var setColor = function setColor(icon, params) {
    if (!params.iconColor) {
      return;
    }
    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;
    for (var _i = 0, _arr = ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']; _i < _arr.length; _i++) {
      var sel = _arr[_i];
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }
    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };
  var iconContent = function iconContent(content) {
    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
  };
  var renderImage = function renderImage(instance, params) {
    var image = getImage();
    if (!params.imageUrl) {
      return hide(image);
    }
    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };
  var currentSteps = [];
  /*
   * Global function for chaining sweetAlert popups
   */

  var queue = function queue(steps) {
    var Swal = this;
    currentSteps = steps;
    var resetAndResolve = function resetAndResolve(resolve, value) {
      currentSteps = [];
      resolve(value);
    };
    var queueResult = [];
    return new Promise(function (resolve) {
      (function step(i, callback) {
        if (i < currentSteps.length) {
          document.body.setAttribute('data-swal2-queue-step', i);
          Swal.fire(currentSteps[i]).then(function (result) {
            if (typeof result.value !== 'undefined') {
              queueResult.push(result.value);
              step(i + 1, callback);
            } else {
              resetAndResolve(resolve, {
                dismiss: result.dismiss
              });
            }
          });
        } else {
          resetAndResolve(resolve, {
            value: queueResult
          });
        }
      })(0);
    });
  };
  /*
   * Global function for getting the index of current popup in queue
   */

  var getQueueStep = function getQueueStep() {
    return getContainer() && getContainer().getAttribute('data-queue-step');
  };
  /*
   * Global function for inserting a popup to the queue
   */

  var insertQueueStep = function insertQueueStep(step, index) {
    if (index && index < currentSteps.length) {
      return currentSteps.splice(index, 0, step);
    }
    return currentSteps.push(step);
  };
  /*
   * Global function for deleting a popup from the queue
   */

  var deleteQueueStep = function deleteQueueStep(index) {
    if (typeof currentSteps[index] !== 'undefined') {
      currentSteps.splice(index, 1);
    }
  };
  var createStepElement = function createStepElement(step) {
    var stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };
  var createLineElement = function createLineElement(params) {
    var lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);
    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }
    return lineEl;
  };
  var renderProgressSteps = function renderProgressSteps(instance, params) {
    var progressStepsContainer = getProgressSteps();
    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }
    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);
    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    params.progressSteps.forEach(function (step, index) {
      var stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);
      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }
      if (index !== params.progressSteps.length - 1) {
        var lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };
  var renderTitle = function renderTitle(instance, params) {
    var title = getTitle();
    toggle(title, params.title || params.titleText);
    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }
    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class

    applyCustomClass(title, params, 'title');
  };
  var renderHeader = function renderHeader(instance, params) {
    var header = getHeader(); // Custom class

    applyCustomClass(header, params, 'header'); // Progress steps

    renderProgressSteps(instance, params); // Icon

    renderIcon(instance, params); // Image

    renderImage(instance, params); // Title

    renderTitle(instance, params); // Close button

    renderCloseButton(instance, params);
  };
  var renderPopup = function renderPopup(instance, params) {
    var popup = getPopup(); // Width

    applyNumericalStyle(popup, 'width', params.width); // Padding

    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    } // Classes

    addClasses(popup, params);
  };
  var addClasses = function addClasses(popup, params) {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');
    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class

    applyCustomClass(popup, params, 'popup');
    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)

    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };
  var render = function render(instance, params) {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderHeader(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);
    if (typeof params.didRender === 'function') {
      params.didRender(getPopup());
    } else if (typeof params.onRender === 'function') {
      params.onRender(getPopup()); // @deprecated
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  var isVisible$1 = function isVisible$$1() {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  var clickConfirm = function clickConfirm() {
    return getConfirmButton() && getConfirmButton().click();
  };
  /*
   * Global function to click 'Deny' button
   */

  var clickDeny = function clickDeny() {
    return getDenyButton() && getDenyButton().click();
  };
  /*
   * Global function to click 'Cancel' button
   */

  var clickCancel = function clickCancel() {
    return getCancelButton() && getCancelButton().click();
  };
  function fire() {
    var Swal = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _construct(Swal, args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    var MixinSwal = /*#__PURE__*/function (_this) {
      _inherits(MixinSwal, _this);
      var _super = _createSuper(MixinSwal);
      function MixinSwal() {
        _classCallCheck(this, MixinSwal);
        return _super.apply(this, arguments);
      }
      _createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params) {
          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
        }
      }]);
      return MixinSwal;
    }(this);
    return MixinSwal;
  }

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   */

  var showLoading = function showLoading(buttonToReplace) {
    var popup = getPopup();
    if (!popup) {
      Swal.fire();
    }
    popup = getPopup();
    var actions = getActions();
    var loader = getLoader();
    if (!buttonToReplace && isVisible(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }
    show(actions);
    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }
    loader.parentNode.insertBefore(loader, buttonToReplace);
    addClass([popup, actions], swalClasses.loading);
    show(loader);
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };
  var RESTORE_FOCUS_TIMEOUT = 100;
  var globalState = {};
  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element

  var restoreActiveElement = function restoreActiveElement() {
    return new Promise(function (resolve) {
      var x = window.scrollX;
      var y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(function () {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      /* istanbul ignore if */

      if (typeof x !== 'undefined' && typeof y !== 'undefined') {
        // IE doesn't have scrollX/scrollY support
        window.scrollTo(x, y);
      }
    });
  };

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  var getTimerLeft = function getTimerLeft() {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var stopTimer = function stopTimer() {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var resumeTimer = function resumeTimer() {
    if (globalState.timeout) {
      var remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var toggleTimer = function toggleTimer() {
    var timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  var increaseTimer = function increaseTimer(n) {
    if (globalState.timeout) {
      var remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  var isTimerRunning = function isTimerRunning() {
    return globalState.timeout && globalState.timeout.isRunning();
  };
  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    animation: true,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: undefined,
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    onBeforeOpen: undefined,
    onOpen: undefined,
    willOpen: undefined,
    didOpen: undefined,
    onRender: undefined,
    didRender: undefined,
    onClose: undefined,
    onAfterClose: undefined,
    willClose: undefined,
    didClose: undefined,
    onDestroy: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'onAfterClose', 'onClose', 'onDestroy', 'progressSteps', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
  var deprecatedParams = {
    animation: 'showClass" and "hideClass',
    onBeforeOpen: 'willOpen',
    onOpen: 'didOpen',
    onRender: 'didRender',
    onClose: 'willClose',
    onAfterClose: 'didClose',
    onDestroy: 'didDestroy'
  };
  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  var isValidParameter = function isValidParameter(paramName) {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */

  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */

  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams[paramName];
  };
  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };
  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    if (toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };
  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    if (isDeprecatedParameter(param)) {
      warnAboutDeprecation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */

  var showWarningsForParams = function showWarningsForParams(params) {
    for (var param in params) {
      checkIfParamIsValid(param);
      if (params.toast) {
        checkIfToastParamIsValid(param);
      }
      checkIfParamIsDeprecated(param);
    }
  };
  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getContent: getContent,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getIcons: getIcons,
    getInputLabel: getInputLabel,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getDenyButton: getDenyButton,
    getCancelButton: getCancelButton,
    getLoader: getLoader,
    getHeader: getHeader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    queue: queue,
    getQueueStep: getQueueStep,
    insertQueueStep: insertQueueStep,
    deleteQueueStep: deleteQueueStep,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning
  });

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */

  function hideLoading() {
    // do nothing if popup is closed
    var innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      return;
    }
    var domCache = privateProps.domCache.get(this);
    hide(domCache.loader);
    var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));
    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }
  function getInput$1(instance) {
    var innerParams = privateProps.innerParams.get(instance || this);
    var domCache = privateProps.domCache.get(instance || this);
    if (!domCache) {
      return null;
    }
    return getInput(domCache.content, innerParams.input);
  }
  var fixScrollbar = function fixScrollbar() {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow

    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  var undoScrollbar = function undoScrollbar() {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  var iOSfix = function iOSfix() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups(); // #1948
    }
  };
  var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
    var safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);
    if (safari) {
      var bottomPanelHeight = 44;
      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };
  var lockBodyScroll = function lockBodyScroll() {
    // #1246
    var container = getContainer();
    var preventTouchMove;
    container.ontouchstart = function (e) {
      preventTouchMove = shouldPreventTouchMove(e);
    };
    container.ontouchmove = function (e) {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };
  var shouldPreventTouchMove = function shouldPreventTouchMove(event) {
    var target = event.target;
    var container = getContainer();
    if (isStylys(event) || isZoom(event)) {
      return false;
    }
    if (target === container) {
      return true;
    }
    if (!isScrollable(container) && target.tagName !== 'INPUT' &&
    // #1603
    !(isScrollable(getContent()) &&
    // #1944
    getContent().contains(target))) {
      return true;
    }
    return false;
  };
  var isStylys = function isStylys(event) {
    // #1786
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };
  var isZoom = function isZoom(event) {
    // #1891
    return event.touches && event.touches.length > 1;
  };
  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /* istanbul ignore file */

  var isIE11 = function isIE11() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }; // Fix IE11 centering sweetalert2/issues/933

  var fixVerticalPositionIE = function fixVerticalPositionIE() {
    var container = getContainer();
    var popup = getPopup();
    container.style.removeProperty('align-items');
    if (popup.offsetTop < 0) {
      container.style.alignItems = 'flex-start';
    }
  };
  var IEfix = function IEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      fixVerticalPositionIE();
      window.addEventListener('resize', fixVerticalPositionIE);
    }
  };
  var undoIEfix = function undoIEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      window.removeEventListener('resize', fixVerticalPositionIE);
    }
  };

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  var setAriaHidden = function setAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el === getContainer() || contains(el, getContainer())) {
        return;
      }
      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }
      el.setAttribute('aria-hidden', 'true');
    });
  };
  var unsetAriaHidden = function unsetAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap()
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, isToast$$1, didClose) {
    if (isToast$$1) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement().then(function () {
        return triggerDidCloseAndDispose(instance, didClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }
    if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
      container.parentNode.removeChild(container);
    }
    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }
    removeBodyClasses();
  }
  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
  }
  function close(resolveValue) {
    var popup = getPopup();
    if (!popup) {
      return;
    }
    resolveValue = prepareResolveValue(resolveValue);
    var innerParams = privateProps.innerParams.get(this);
    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return;
    }
    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    var backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

    swalPromiseResolve(resolveValue);
  }
  var prepareResolveValue = function prepareResolveValue(resolveValue) {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }
    return _extends({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };
  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    var container = getContainer(); // If animation is supported, animate

    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    var onClose = innerParams.onClose,
      onAfterClose = innerParams.onAfterClose,
      willClose = innerParams.willClose,
      didClose = innerParams.didClose;
    runDidClose(popup, willClose, onClose);
    if (animationIsSupported) {
      animatePopup(instance, popup, container, didClose || onAfterClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, isToast(), didClose || onAfterClose);
    }
  };
  var runDidClose = function runDidClose(popup, willClose, onClose) {
    if (willClose !== null && typeof willClose === 'function') {
      willClose(popup);
    } else if (onClose !== null && typeof onClose === 'function') {
      onClose(popup); // @deprecated
    }
  };
  var animatePopup = function animatePopup(instance, popup, container, didClose) {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };
  var triggerDidCloseAndDispose = function triggerDidCloseAndDispose(instance, didClose) {
    setTimeout(function () {
      if (typeof didClose === 'function') {
        didClose();
      }
      instance._destroy();
    });
  };
  function setButtonsDisabled(instance, buttons, disabled) {
    var domCache = privateProps.domCache.get(instance);
    buttons.forEach(function (button) {
      domCache[button].disabled = disabled;
    });
  }
  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }
    if (input.type === 'radio') {
      var radiosContainer = input.parentNode.parentNode;
      var radios = radiosContainer.querySelectorAll('input');
      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }
  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }
  function showValidationMessage(error) {
    var domCache = privateProps.domCache.get(this);
    var params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];
    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }
    show(domCache.validationMessage);
    var input = this.getInput();
    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedBy', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    var domCache = privateProps.domCache.get(this);
    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }
    var input = this.getInput();
    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedBy');
      removeClass(input, swalClasses.inputerror);
    }
  }
  function getProgressSteps$1() {
    var domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }
  var Timer = /*#__PURE__*/function () {
    function Timer(callback, delay) {
      _classCallCheck(this, Timer);
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }
    _createClass(Timer, [{
      key: "start",
      value: function start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }
        return this.remaining;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date() - this.started;
        }
        return this.remaining;
      }
    }, {
      key: "increase",
      value: function increase(n) {
        var running = this.running;
        if (running) {
          this.stop();
        }
        this.remaining += n;
        if (running) {
          this.start();
        }
        return this.remaining;
      }
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }
        return this.remaining;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);
    return Timer;
  }();
  var defaultInputValidators = {
    email: function email(string, validationMessage) {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: function url(string, validationMessage) {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };
  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(function (key) {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }
  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */

  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    } // params.animation will be actually used in renderPopup.js
    // but in case when params.animation is a function, we need to call that function
    // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
    // inside the params.animation function

    params.animation = callIfFunction(params.animation);
    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }
    init(params);
  }
  var swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];
  var getTemplateParams = function getTemplateParams(params) {
    var template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;
    if (!template) {
      return {};
    }
    var templateContent = template.content || template; // IE11

    showWarningsForElements(templateContent);
    var result = _extends(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };
  var getSwalParams = function getSwalParams(templateContent) {
    var result = {};
    toArray(templateContent.querySelectorAll('swal-param')).forEach(function (param) {
      showWarningsForAttributes(param, ['name', 'value']);
      var paramName = param.getAttribute('name');
      var value = param.getAttribute('value');
      if (typeof defaultParams[paramName] === 'boolean' && value === 'false') {
        value = false;
      }
      if (_typeof(defaultParams[paramName]) === 'object') {
        value = JSON.parse(value);
      }
      result[paramName] = value;
    });
    return result;
  };
  var getSwalButtons = function getSwalButtons(templateContent) {
    var result = {};
    toArray(templateContent.querySelectorAll('swal-button')).forEach(function (button) {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      var type = button.getAttribute('type');
      var color = button.getAttribute('color');
      var ariaLabel = button.getAttribute('aria-label') || '';
      result["".concat(type, "ButtonText")] = button.innerHTML;
      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;
      if (color) {
        result["".concat(type, "ButtonColor")] = color;
      }
      result["".concat(type, "ButtonAriaLabel")] = ariaLabel;
    });
    return result;
  };
  var getSwalImage = function getSwalImage(templateContent) {
    var result = {};
    var image = templateContent.querySelector('swal-image');
    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);
      result.imageUrl = image.getAttribute('src');
      result.imageWidth = image.getAttribute('width');
      result.imageHeight = image.getAttribute('height');
      result.imageAlt = image.getAttribute('alt') || '';
    }
    return result;
  };
  var getSwalIcon = function getSwalIcon(templateContent) {
    var result = {};
    var icon = templateContent.querySelector('swal-icon');
    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);
      result.icon = icon.getAttribute('type');
      result.iconColor = icon.getAttribute('color');
      result.iconHtml = icon.innerHTML;
    }
    return result;
  };
  var getSwalInput = function getSwalInput(templateContent) {
    var result = {};
    var input = templateContent.querySelector('swal-input');
    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';
      result.inputLabel = input.getAttribute('label') || '';
      result.inputPlaceholder = input.getAttribute('placeholder') || '';
      result.inputValue = input.getAttribute('value') || '';
    }
    var inputOptions = templateContent.querySelectorAll('swal-input-option');
    if (inputOptions.length) {
      result.inputOptions = {};
      toArray(inputOptions).forEach(function (option) {
        showWarningsForAttributes(option, ['value']);
        var optionValue = option.getAttribute('value');
        var optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }
    return result;
  };
  var getSwalStringParams = function getSwalStringParams(templateContent, paramNames) {
    var result = {};
    for (var i in paramNames) {
      var paramName = paramNames[i];
      var tag = templateContent.querySelector(paramName);
      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML;
      }
    }
    return result;
  };
  var showWarningsForElements = function showWarningsForElements(template) {
    var allowedElements = swalStringParams.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    toArray(template.querySelectorAll('*')).forEach(function (el) {
      var tagName = el.tagName.toLowerCase();
      if (allowedElements.indexOf(tagName) === -1) {
        warn("Unrecognized element <".concat(tagName, ">"));
      }
    });
  };
  var showWarningsForAttributes = function showWarningsForAttributes(el, allowedAttributes) {
    toArray(el.attributes).forEach(function (attribute) {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
      }
    });
  };
  var SHOW_CLASS_TIMEOUT = 10;
  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param params
   */

  var openPopup = function openPopup(params) {
    var container = getContainer();
    var popup = getPopup();
    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    } else if (typeof params.onBeforeOpen === 'function') {
      params.onBeforeOpen(popup); // @deprecated
    }
    var bodyStyles = window.getComputedStyle(document.body);
    var initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setTimeout(function () {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);
    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }
    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }
    runDidOpen(popup, params);
    removeClass(container, swalClasses['no-transition']);
  };
  var runDidOpen = function runDidOpen(popup, params) {
    if (typeof params.didOpen === 'function') {
      setTimeout(function () {
        return params.didOpen(popup);
      });
    } else if (typeof params.onOpen === 'function') {
      setTimeout(function () {
        return params.onOpen(popup);
      }); // @deprecated
    }
  };
  var swalOpenAnimationFinished = function swalOpenAnimationFinished(event) {
    var popup = getPopup();
    if (event.target !== popup) {
      return;
    }
    var container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };
  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };
  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
    iOSfix();
    IEfix();
    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247

    setTimeout(function () {
      container.scrollTop = 0;
    });
  };
  var addClasses$1 = function addClasses(container, popup, params) {
    addClass(container, params.showClass.backdrop); // the workaround with setting/unsetting opacity is needed for #2019 and 2059

    popup.style.setProperty('opacity', '0', 'important');
    show(popup);
    setTimeout(function () {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup); // and remove the opacity workaround

      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);
    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };
  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      handleInputValue(instance, params);
    }
  };
  var getInputValue = function getInputValue(instance, innerParams) {
    var input = instance.getInput();
    if (!input) {
      return null;
    }
    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);
      case 'radio':
        return getRadioValue(input);
      case 'file':
        return getFileValue(input);
      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };
  var getCheckboxValue = function getCheckboxValue(input) {
    return input.checked ? 1 : 0;
  };
  var getRadioValue = function getRadioValue(input) {
    return input.checked ? input.value : null;
  };
  var getFileValue = function getFileValue(input) {
    return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  };
  var handleInputOptions = function handleInputOptions(instance, params) {
    var content = getContent();
    var processInputOptions = function processInputOptions(inputOptions) {
      return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
    };
    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading();
      asPromise(params.inputOptions).then(function (inputOptions) {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (_typeof(params.inputOptions) === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    }
  };
  var handleInputValue = function handleInputValue(instance, params) {
    var input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(function (inputValue) {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    })["catch"](function (err) {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };
  var populateInputOptions = {
    select: function select(content, inputOptions, params) {
      var select = getChildByClass(content, swalClasses.select);
      var renderOption = function renderOption(parent, optionLabel, optionValue) {
        var option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };
      inputOptions.forEach(function (inputOption) {
        var optionValue = inputOption[0];
        var optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          var optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(function (o) {
            return renderOption(optgroup, o[1], o[0]);
          });
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: function radio(content, inputOptions, params) {
      var radio = getChildByClass(content, swalClasses.radio);
      inputOptions.forEach(function (inputOption) {
        var radioValue = inputOption[0];
        var radioLabel = inputOption[1];
        var radioInput = document.createElement('input');
        var radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;
        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }
        var label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      var radios = radio.querySelectorAll('input');
      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  var formatInputOptions = function formatInputOptions(inputOptions) {
    var result = [];
    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        var valueFormatted = value;
        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        var valueFormatted = inputOptions[key];
        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    }
    return result;
  };
  var isSelected = function isSelected(optionValue, inputValue) {
    return inputValue && inputValue.toString() === optionValue.toString();
  };
  var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
    instance.disableButtons();
    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, innerParams, 'confirm');
    } else {
      confirm(instance, innerParams, true);
    }
  };
  var handleDenyButtonClick = function handleDenyButtonClick(instance, innerParams) {
    instance.disableButtons();
    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, innerParams, 'deny');
    } else {
      deny(instance, innerParams, false);
    }
  };
  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };
  var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput(instance, innerParams, type
  /* type is either 'confirm' or 'deny' */) {
    var inputValue = getInputValue(instance, innerParams);
    if (innerParams.inputValidator) {
      handleInputValidator(instance, innerParams, inputValue);
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, innerParams, inputValue);
    } else {
      confirm(instance, innerParams, inputValue);
    }
  };
  var handleInputValidator = function handleInputValidator(instance, innerParams, inputValue) {
    instance.disableInput();
    var validationPromise = Promise.resolve().then(function () {
      return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
    });
    validationPromise.then(function (validationMessage) {
      instance.enableButtons();
      instance.enableInput();
      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else {
        confirm(instance, innerParams, inputValue);
      }
    });
  };
  var deny = function deny(instance, innerParams, value) {
    if (innerParams.preDeny) {
      var preDenyPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
      });
      preDenyPromise.then(function (preDenyValue) {
        if (preDenyValue === false) {
          instance.hideLoading();
        } else {
          instance.closePopup({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      });
    } else {
      instance.closePopup({
        isDenied: true,
        value: value
      });
    }
  };
  var succeedWith = function succeedWith(instance, value) {
    instance.closePopup({
      isConfirmed: true,
      value: value
    });
  };
  var confirm = function confirm(instance, innerParams, value) {
    if (innerParams.showLoaderOnConfirm) {
      showLoading(); // TODO: make showLoading an *instance* method
    }
    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      var preConfirmPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
      });
      preConfirmPromise.then(function (preConfirmValue) {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      });
    } else {
      succeedWith(instance, value);
    }
  };
  var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }
    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(instance, e, dismissWith);
      };
      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  var setFocus = function setFocus(innerParams, index, increment) {
    var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    if (focusableElements.length) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }
      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup

    getPopup().focus();
  };
  var arrowKeysNextButton = ['ArrowRight', 'ArrowDown', 'Right', 'Down' // IE11
  ];
  var arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp', 'Left', 'Up' // IE11
  ];
  var escKeys = ['Escape', 'Esc' // IE11
  ];
  var keydownHandler = function keydownHandler(instance, e, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);
    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER

    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).indexOf(e.key) !== -1) {
      handleArrows(e.key); // ESC
    } else if (escKeys.indexOf(e.key) !== -1) {
      handleEsc(e, innerParams, dismissWith);
    }
  };
  var handleEnter = function handleEnter(instance, e, innerParams) {
    // #720 #721
    if (e.isComposing) {
      return;
    }
    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
        return; // do not submit
      }
      clickConfirm();
      e.preventDefault();
    }
  };
  var handleTab = function handleTab(e, innerParams) {
    var targetElement = e.target;
    var focusableElements = getFocusableElements();
    var btnIndex = -1;
    for (var i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }
    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }
    e.stopPropagation();
    e.preventDefault();
  };
  var handleArrows = function handleArrows(key) {
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton();
    if (!([confirmButton, denyButton, cancelButton].indexOf(document.activeElement) !== -1)) {
      return;
    }
    var sibling = arrowKeysNextButton.indexOf(key) !== -1 ? 'nextElementSibling' : 'previousElementSibling';
    var buttonToFocus = document.activeElement[sibling];
    if (buttonToFocus) {
      buttonToFocus.focus();
    }
  };
  var handleEsc = function handleEsc(e, innerParams, dismissWith) {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };
  var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);
    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };
  var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
    // Closing toast by internal click
    domCache.popup.onclick = function () {
      var innerParams = privateProps.innerParams.get(instance);
      if (innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
        return;
      }
      dismissWith(DismissReason.close);
    };
  };
  var ignoreOutsideClick = false;
  var handleModalMousedown = function handleModalMousedown(domCache) {
    domCache.popup.onmousedown = function () {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };
  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    domCache.container.onmousedown = function () {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };
  var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
    domCache.container.onclick = function (e) {
      var innerParams = privateProps.innerParams.get(instance);
      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }
      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };
  function _main(userParams) {
    showWarningsForParams(userParams);
    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();
    }
    globalState.currentInstance = this;
    var innerParams = prepareParams(userParams);
    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout

    clearTimeout(globalState.restoreFocusTimeout);
    var domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }
  var prepareParams = function prepareParams(userParams) {
    var showClass = _extends({}, defaultParams.showClass, userParams.showClass);
    var hideClass = _extends({}, defaultParams.hideClass, userParams.hideClass);
    var templateParams = getTemplateParams(userParams);
    var params = _extends({}, defaultParams, templateParams, userParams);
    params.showClass = showClass;
    params.hideClass = hideClass; // @deprecated

    if (userParams.animation === false) {
      params.showClass = {
        popup: 'swal2-noanimation',
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }
    return params;
  };
  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    return new Promise(function (resolve) {
      // functions to handle all closings/dismissals
      var dismissWith = function dismissWith(dismiss) {
        instance.closePopup({
          isDismissed: true,
          dismiss: dismiss
        });
      };
      privateMethods.swalPromiseResolve.set(instance, resolve);
      domCache.confirmButton.onclick = function () {
        return handleConfirmButtonClick(instance, innerParams);
      };
      domCache.denyButton.onclick = function () {
        return handleDenyButtonClick(instance, innerParams);
      };
      domCache.cancelButton.onclick = function () {
        return handleCancelButtonClick(instance, dismissWith);
      };
      domCache.closeButton.onclick = function () {
        return dismissWith(DismissReason.close);
      };
      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);
      if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
        addClass(document.body, swalClasses['toast-column']);
      } else {
        removeClass(document.body, swalClasses['toast-column']);
      }
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(function () {
        domCache.container.scrollTop = 0;
      });
    });
  };
  var populateDomCache = function populateDomCache(instance) {
    var domCache = {
      popup: getPopup(),
      container: getContainer(),
      content: getContent(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };
  var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
    var timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);
    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);
      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        setTimeout(function () {
          if (globalState$$1.timeout.running) {
            // timer can be already stopped at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };
  var initFocus = function initFocus(domCache, innerParams) {
    if (innerParams.toast) {
      return;
    }
    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }
    if (!focusButton(domCache, innerParams)) {
      setFocus(innerParams, -1, 1);
    }
  };
  var focusButton = function focusButton(domCache, innerParams) {
    if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }
    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }
    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }
    return false;
  };
  var blurActiveElement = function blurActiveElement() {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  /**
   * Updates popup parameters.
   */

  function update(params) {
    var popup = getPopup();
    var innerParams = privateProps.innerParams.get(this);
    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }
    var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(function (param) {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md"));
      }
    });
    var updatedParams = _extends({}, innerParams, validUpdatableParams);
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: _extends({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }
  function _destroy() {
    var domCache = privateProps.domCache.get(this);
    var innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Check if there is another Swal closing

    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer

    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }
    runDidDestroy(innerParams);
    disposeSwal(this);
  }
  var runDidDestroy = function runDidDestroy(innerParams) {
    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    } else if (typeof innerParams.onDestroy === 'function') {
      innerParams.onDestroy(); // @deprecated
    }
  };
  var disposeSwal = function disposeSwal(instance) {
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

    unsetWeakMaps(privateProps);
    unsetWeakMaps(privateMethods);
  };
  var unsetWeakMaps = function unsetWeakMaps(obj) {
    for (var i in obj) {
      obj[i] = new WeakMap();
    }
  };
  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    _main: _main,
    update: update,
    _destroy: _destroy
  });
  var currentInstance;
  var SweetAlert = /*#__PURE__*/function () {
    function SweetAlert() {
      _classCallCheck(this, SweetAlert);

      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      } // Check for the existence of Promise

      if (typeof Promise === 'undefined') {
        error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
      }
      currentInstance = this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      });
      var promise = this._main(this.params);
      privateProps.promise.set(this, promise);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead

    _createClass(SweetAlert, [{
      key: "then",
      value: function then(onFulfilled) {
        var promise = privateProps.promise.get(this);
        return promise.then(onFulfilled);
      }
    }, {
      key: "finally",
      value: function _finally(onFinally) {
        var promise = privateProps.promise.get(this);
        return promise["finally"](onFinally);
      }
    }]);
    return SweetAlert;
  }(); // Assign instance methods from src/instanceMethods/*.js to prototype

  _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor

  _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility

  Object.keys(instanceMethods).forEach(function (key) {
    SweetAlert[key] = function () {
      if (currentInstance) {
        var _currentInstance;
        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '10.11.1';
  var Swal = SweetAlert;
  Swal["default"] = Swal;
  return Swal;
});
if (typeof this !== 'undefined' && this.Sweetalert2) {
  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2;
}
"undefined" != typeof document && function (e, t) {
  var n = e.createElement("style");
  if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);else try {
    n.innerHTML = t;
  } catch (e) {
    n.innerText = t;
  }
}(document, ".swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;padding:0;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(100,150,200,.5)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:5px;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0 1.6em}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#2778c4;color:#fff;font-size:1.0625em}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#d14529;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#757575;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto}.swal2-validation-message{display:none;align-items:center;justify-content:center;margin:0 -2.7em;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");

/***/ })

}]);
//# sourceMappingURL=src_app_host_host_module_ts.js.map