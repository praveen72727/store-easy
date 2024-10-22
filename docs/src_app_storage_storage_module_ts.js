"use strict";
(self["webpackChunkmatngular"] = self["webpackChunkmatngular"] || []).push([["src_app_storage_storage_module_ts"],{

/***/ 5072:
/*!***************************************************************************!*\
  !*** ./src/app/storage/components/search-hosts/search-hosts.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchHostsComponent": function() { return /* binding */ SearchHostsComponent; }
/* harmony export */ });
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var SearchHostsComponent = /*#__PURE__*/function () {
  function SearchHostsComponent() {
    (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchHostsComponent);
  }
  return (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchHostsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();
SearchHostsComponent.ɵfac = function SearchHostsComponent_Factory(t) {
  return new (t || SearchHostsComponent)();
};
SearchHostsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SearchHostsComponent,
  selectors: [["app-search-hosts"]],
  decls: 2,
  vars: 0,
  template: function SearchHostsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "search-hosts works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtaG9zdHMuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 6091:
/*!***************************************************!*\
  !*** ./src/app/storage/storage-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageRoutingModule": function() { return /* binding */ StorageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_search_hosts_search_hosts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/search-hosts/search-hosts.component */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






var routes = [{
  path: 'search-hosts',
  component: _components_search_hosts_search_hosts_component__WEBPACK_IMPORTED_MODULE_2__.SearchHostsComponent
}
// {
//   path: 'all-leads-information-list',
//   component: LeadsLayoutInfoComponent,
//   children: [
//     {
//       path: 'agent/:agentId',
//       component: SelectLeadInfoDetailsComponent,
//       children: [
//         {
//           path: '', // Empty path to make it the default child route
//           component: SelectLeadFollowUpListComponent,
//           outlet: 'followUp', // Assigning to auxiliary outlet
//         },
//         {
//           path: '', // Empty path to make it the default child route
//           component: SelectLeadNotesListComponent,
//           outlet: 'notes', // Assigning to auxiliary outlet
//         },
//         {
//           path: '', // Empty path to make it the default child route
//           component: SelectLeadAttachmentsListComponent,
//           outlet: 'attachments', // Assigning to auxiliary outlet
//         },
//       ],
//     },
//     {
//       path: 'task/:taskId',
//       component: SelectLeadInfoDetailsComponent,
//     },
//     {
//       path: 'customer/:customerId',
//       component: SelectLeadInfoDetailsComponent,
//     },
//     {
//       path: 'lead/:leadId',
//       component: SelectLeadInfoDetailsComponent,
//     },
//   ],
// },
// {
//   path: 'lead-details',
//   component: LeadDetailsComponent,
//   canActivate: [AuthGuard],
// },
// {
//   path: 'lead-profile-info',
//   component: LeadProfileInfoComponent,
//   canActivate: [AuthGuard],
// },
// {
//   path: 'lead-profile-info/:id',
//   component: LeadProfileInfoComponent,
//   canActivate: [AuthGuard],
// },
// {
//   path: 'lead-profile',
//   component: LeadProfileComponent,
//   canActivate: [AuthGuard],
// },
// {
//   path: 'lead-profile/:id',
//   component: LeadProfileComponent,
//   canActivate: [AuthGuard],
// },
// {
//   path: 'lead-address',
//   component: LeadAddressComponent,
//   canActivate: [AuthGuard],
// },
// {
//   path: 'lead-address/:id',
//   component: LeadAddressComponent,
//   canActivate: [AuthGuard],
// },
// {
//   path: 'lead-owner-info',
//   component: LeadGenNextInformationComponent,
//   canActivate: [AuthGuard],
// },
// {
//   path: 'lead-owner-info/:leadId',
//   component: LeadGenNextInformationComponent,
//   data: {
//     title: 'Lead Owner Information',
//   },
//   canActivate: [AuthGuard],
// },
// {
//   path: 'lead-owner-info-list',
//   component: LeadGenNextInformationListComponent,
//   data: {
//     title: 'Lead Owner Information LIst',
//   },
//   canActivate: [AuthGuard],
// },
// {
//   path: 'lead-upload',
//   component: LeadNextGenUploadComponent,
//   data: {
//     title: 'Lead Upload',
//   },
//   canActivate: [AuthGuard],
// },
// {
//   path: 'lead-upload/:id',
//   component: LeadNextGenUploadComponent,
//   data: {
//     title: 'Lead Upload',
//   },
//   canActivate: [AuthGuard],
// },
// {
//   path: 'batch-upload-search',
//   component: BatchUploadSearchComponent,
//   data: {
//     title: 'Batch Upload Report',
//   },
// },
];
var StorageRoutingModule = /*#__PURE__*/(0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function StorageRoutingModule() {
  (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, StorageRoutingModule);
});
StorageRoutingModule.ɵfac = function StorageRoutingModule_Factory(t) {
  return new (t || StorageRoutingModule)();
};
StorageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: StorageRoutingModule
});
StorageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](StorageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 4138:
/*!*******************************************!*\
  !*** ./src/app/storage/storage.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageModule": function() { return /* binding */ StorageModule; }
/* harmony export */ });
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _storage_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage-routing.module */ 6091);
/* harmony import */ var _components_search_hosts_search_hosts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/search-hosts/search-hosts.component */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






var StorageModule = /*#__PURE__*/(0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function StorageModule() {
  (0,C_Startup_backup_New_folder_store_easy_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, StorageModule);
});
StorageModule.ɵfac = function StorageModule_Factory(t) {
  return new (t || StorageModule)();
};
StorageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: StorageModule
});
StorageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _storage_routing_module__WEBPACK_IMPORTED_MODULE_2__.StorageRoutingModule]]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](StorageModule, {
    declarations: [_components_search_hosts_search_hosts_component__WEBPACK_IMPORTED_MODULE_3__.SearchHostsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _storage_routing_module__WEBPACK_IMPORTED_MODULE_2__.StorageRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_storage_storage_module_ts.js.map