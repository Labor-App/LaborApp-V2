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
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _generar_pdf_generar_pdf_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generar-pdf/generar-pdf.component */ "./src/app/generar-pdf/generar-pdf.component.ts");



//componet


var routes = [
    { path: "", component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"] },
    { path: "pdf", component: _generar_pdf_generar_pdf_component__WEBPACK_IMPORTED_MODULE_4__["GenerarPdfComponent"] }
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

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n\r\n\r\n<router-outlet></router-outlet>\r\n"

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
        this.title = 'LaborApp';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _generar_pdf_generar_pdf_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./generar-pdf/generar-pdf.component */ "./src/app/generar-pdf/generar-pdf.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _generar_pdf_demanda_juridica_demanda_juridica_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./generar-pdf/demanda-juridica/demanda-juridica.component */ "./src/app/generar-pdf/demanda-juridica/demanda-juridica.component.ts");
/* harmony import */ var _generar_pdf_demanda_natural_demanda_natural_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./generar-pdf/demanda-natural/demanda-natural.component */ "./src/app/generar-pdf/demanda-natural/demanda-natural.component.ts");
/* harmony import */ var _generar_pdf_demanda_juridica_representante_representante_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./generar-pdf/demanda-juridica/representante/representante.component */ "./src/app/generar-pdf/demanda-juridica/representante/representante.component.ts");





//Forms

//Animations

//Material

//Components








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__["SignInComponent"],
                _generar_pdf_generar_pdf_component__WEBPACK_IMPORTED_MODULE_9__["GenerarPdfComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
                _generar_pdf_demanda_juridica_demanda_juridica_component__WEBPACK_IMPORTED_MODULE_13__["DemandaJuridicaComponent"],
                _generar_pdf_demanda_natural_demanda_natural_component__WEBPACK_IMPORTED_MODULE_14__["DemandaNaturalComponent"],
                _generar_pdf_demanda_juridica_representante_representante_component__WEBPACK_IMPORTED_MODULE_15__["RepresentanteComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _material__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatListModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/generar-pdf/demanda-juridica/demanda-juridica.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/generar-pdf/demanda-juridica/demanda-juridica.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nform{\r\n  width: 100%;\r\n\theight: 100%;\r\n  display: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n\r\n.nombre-inputs{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n\r\n.half-width{\r\n  width: 49%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJhci1wZGYvZGVtYW5kYS1qdXJpZGljYS9kZW1hbmRhLWp1cmlkaWNhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtDQUNiLGFBQWE7RUFDWixjQUFjO0NBQ2YsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtDQUNwQix3QkFBd0I7Q0FDeEI7OztBQUdEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiwrQkFBK0I7Q0FDaEM7OztBQUVEO0VBQ0UsV0FBVztDQUNaIiwiZmlsZSI6InNyYy9hcHAvZ2VuZXJhci1wZGYvZGVtYW5kYS1qdXJpZGljYS9kZW1hbmRhLWp1cmlkaWNhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZm9ybXtcclxuICB3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubm9tYnJlLWlucHV0c3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uaGFsZi13aWR0aHtcclxuICB3aWR0aDogNDklO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/generar-pdf/demanda-juridica/demanda-juridica.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/generar-pdf/demanda-juridica/demanda-juridica.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formularioJuridica\" class=\"full-width\" (ngSubmit)=\"log(representante.checked)\">\n\n    <div class=\"full-width nombre-inputs\">\n      <mat-form-field class=\"half-width\">\n        <input matInput placeholder=\"Razón Social\" formControlName=\"razonSocial\" required>\n        <mat-icon\n          class=\"tooltip\"\n          matSuffix\n          matTooltip=\"Nombre de la empresa\">\n          help\n        </mat-icon>\n      </mat-form-field>\n\n      <mat-form-field class=\"half-width\">\n        <input matInput placeholder=\"NIT\" formControlName=\"nit\" required>\n\n      <mat-icon\n        class=\"tooltip\"\n        matSuffix\n        matTooltip=\"Número de Identificacion Tributario\">\n        help\n      </mat-icon>\n      </mat-form-field>\n    </div>\n\n\n    <div class=\"full-width\" formGroupName=\"ubicacion\">\n\n\n      <mat-form-field class=\"full-width\">\n        <input  matInput placeholder=\"Dirección\" formControlName=\"direccion\" required>\n      </mat-form-field>\n\n      <div class=\"full-width nombre-inputs\">\n\n\n        <mat-form-field class=\"half-width\">\n          <mat-select placeholder=\"Departamento\" formControlName=\"departamento\" required>\n            <mat-option value=\"option\">Option</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field class=\"half-width\">\n          <mat-select placeholder=\"Municipio\" formControlName=\"municipio\" required>\n            <mat-option value=\"option\">Option</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n      </div>\n\n    </div>\n\n\n    <div class=\"full-width nombre-inputs mb-1\">\n\n\n      <mat-form-field class=\"half-width\">\n        <input matInput placeholder=\"Email\" formControlName=\"email\" required>\n        <mat-error *ngIf=\"formularioJuridica.get('email').invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n\n\n      <mat-form-field class=\"half-width\">\n\n        <input type=\"tel\" matInput placeholder=\"Telefono\" formControlName=\"telefono\" required>\n\n      </mat-form-field>\n\n\n    </div>\n\n    <div class=\"full-width mb-1\">\n\n      <mat-checkbox #representante >\n        Sabe usted los datos del representante legal\n      </mat-checkbox>\n\n    </div>\n\n\n    <!-- Representante legal -->\n\n    <app-representante\n      *ngIf=\"representante.checked\"\n      (representanteFormulario)=\"eventoHijoFormulario($event)\"\n      class=\"full-width\">\n    </app-representante>\n\n\n\n  <button mat-flat-button class=\"btn\"\n\n    type=\"submit\"\n    [disabled]=\"verificar(representante.checked)\"\n\n  >Continuar</button>\n</form>\n"

/***/ }),

/***/ "./src/app/generar-pdf/demanda-juridica/demanda-juridica.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/generar-pdf/demanda-juridica/demanda-juridica.component.ts ***!
  \****************************************************************************/
/*! exports provided: DemandaJuridicaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandaJuridicaComponent", function() { return DemandaJuridicaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var DemandaJuridicaComponent = /** @class */ (function () {
    function DemandaJuridicaComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.formularioRepresentante = this.formularioJuridica;
        this.formularioJuridica = this.formBuilder.group({
            'razonSocial': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'nit': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+$/)])],
            'telefono': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+$/)])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            'ubicacion': this.formBuilder.group({
                'direccion': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                'departamento': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                'municipio': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
        });
    }
    DemandaJuridicaComponent.prototype.eventoHijoFormulario = function (e) {
        this.formularioRepresentante = e;
    };
    DemandaJuridicaComponent.prototype.log = function (checked) {
        if (checked) {
            console.log(this.formularioJuridica.value);
            console.log(this.formularioRepresentante.value);
        }
        else {
            console.log(this.formularioJuridica.value);
        }
    };
    DemandaJuridicaComponent.prototype.verificar = function (cheked) {
        if (cheked && (!this.formularioJuridica.valid || !this.formularioRepresentante.valid)) {
            return true;
        }
        else if (!this.formularioJuridica.valid) {
            return true;
        }
        else {
            return false;
        }
    };
    DemandaJuridicaComponent.prototype.ngOnInit = function () {
    };
    DemandaJuridicaComponent.prototype.getErrorMessage = function () {
        return this.formularioJuridica.get('email').hasError('required') ? 'Introduzca un email' :
            this.formularioJuridica.get('email').hasError('email') ? 'Email no vaildo' : '';
    };
    DemandaJuridicaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-demanda-juridica',
            template: __webpack_require__(/*! ./demanda-juridica.component.html */ "./src/app/generar-pdf/demanda-juridica/demanda-juridica.component.html"),
            styles: [__webpack_require__(/*! ./demanda-juridica.component.css */ "./src/app/generar-pdf/demanda-juridica/demanda-juridica.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], DemandaJuridicaComponent);
    return DemandaJuridicaComponent;
}());



/***/ }),

/***/ "./src/app/generar-pdf/demanda-juridica/representante/representante.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/generar-pdf/demanda-juridica/representante/representante.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".representante{\r\n  width: 100%;\r\n\theight: 100%;\r\n  display: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.nombre-inputs{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.half-width{\r\n  width: 49%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJhci1wZGYvZGVtYW5kYS1qdXJpZGljYS9yZXByZXNlbnRhbnRlL3JlcHJlc2VudGFudGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7Q0FDYixhQUFhO0VBQ1osY0FBYztDQUNmLHVCQUF1QjtDQUN2QixvQkFBb0I7Q0FDcEIsd0JBQXdCO0NBQ3hCOztBQUVEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiwrQkFBK0I7Q0FDaEM7O0FBRUQ7RUFDRSxXQUFXO0NBQ1oiLCJmaWxlIjoic3JjL2FwcC9nZW5lcmFyLXBkZi9kZW1hbmRhLWp1cmlkaWNhL3JlcHJlc2VudGFudGUvcmVwcmVzZW50YW50ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcHJlc2VudGFudGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubm9tYnJlLWlucHV0c3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uaGFsZi13aWR0aHtcclxuICB3aWR0aDogNDklO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/generar-pdf/demanda-juridica/representante/representante.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/generar-pdf/demanda-juridica/representante/representante.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"formularioRepresentante\" class=\"full-width representante mb-1\">\n\n  <div class=\"full-width nombre-inputs\">\n    <mat-form-field class=\"half-width\">\n      <input matInput placeholder=\"Nombre\"  formControlName=\"nombre\" required>\n    </mat-form-field>\n\n    <mat-form-field class=\"half-width\">\n      <input matInput placeholder=\"Apellido\" formControlName=\"apellido\" required>\n    </mat-form-field>\n  </div>\n\n  <div formGroupName=\"documento\" class=\"full-width nombre-inputs\">\n\n    <mat-form-field class=\"half-width\">\n      <mat-select placeholder=\"Tipo de Documento\" #tipoDeDocumento  formControlName=\"tipoDeDocumento\" >\n        <mat-option #opcionCC value=\"CC\">Cedula de Ciudadania</mat-option>\n        <mat-option value=\"CE\">Cedula de Exptranjeria</mat-option>\n        <mat-option value=\"Pasaporte\">Pasaporte</mat-option>\n        <mat-option value=\"Carnet Diplomatico\">Carnet Diplomatico</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"half-width\">\n      <input type=\"tel\" matInput placeholder=\"{{ tipoDeDocumento.value || opcionCC.value }}\" formControlName=\"numeroDeDocumento\" required>\n    </mat-form-field>\n\n  </div>\n\n\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Email\" formControlName=\"email\"  required>\n    <mat-error *ngIf=\"formularioRepresentante.get('email').invalid\">{{getErrorMessage()}}</mat-error>\n  </mat-form-field>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/generar-pdf/demanda-juridica/representante/representante.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/generar-pdf/demanda-juridica/representante/representante.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RepresentanteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepresentanteComponent", function() { return RepresentanteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var RepresentanteComponent = /** @class */ (function () {
    function RepresentanteComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.representanteFormulario = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formularioRepresentante = formBuilder.group({
            'nombre': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'apellido': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            'documento': this.formBuilder.group({
                'tipoDeDocumento': ['CC'],
                'numeroDeDocumento': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+$/)])]
            })
        });
    }
    RepresentanteComponent.prototype.ngOnInit = function () {
        this.representanteFormulario.emit(this.formularioRepresentante);
    };
    RepresentanteComponent.prototype.ngAfterContentChecked = function () {
        this.representanteFormulario.emit(this.formularioRepresentante);
    };
    RepresentanteComponent.prototype.getErrorMessage = function () {
        return this.formularioRepresentante.get('email').hasError('required') ? 'Introduzca un email' :
            this.formularioRepresentante.get('email').hasError('email') ? 'Email no vaildo' : '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RepresentanteComponent.prototype, "representanteFormulario", void 0);
    RepresentanteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-representante',
            template: __webpack_require__(/*! ./representante.component.html */ "./src/app/generar-pdf/demanda-juridica/representante/representante.component.html"),
            styles: [__webpack_require__(/*! ./representante.component.css */ "./src/app/generar-pdf/demanda-juridica/representante/representante.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RepresentanteComponent);
    return RepresentanteComponent;
}());



/***/ }),

/***/ "./src/app/generar-pdf/demanda-natural/demanda-natural.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/generar-pdf/demanda-natural/demanda-natural.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nform{\r\n  width: 100%;\r\n\theight: 100%;\r\n  display: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n\r\n.nombre-inputs{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n\r\n.half-width{\r\n  width: 49%;\r\n}\r\n\r\n\r\n.mb-1{\r\n\tmargin-bottom: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJhci1wZGYvZGVtYW5kYS1uYXR1cmFsL2RlbWFuZGEtbmF0dXJhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFlBQVk7Q0FDYixhQUFhO0VBQ1osY0FBYztDQUNmLHVCQUF1QjtDQUN2QixvQkFBb0I7Q0FDcEIsd0JBQXdCO0NBQ3hCOzs7QUFHRDtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsK0JBQStCO0NBQ2hDOzs7QUFHRDtFQUNFLFdBQVc7Q0FDWjs7O0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9nZW5lcmFyLXBkZi9kZW1hbmRhLW5hdHVyYWwvZGVtYW5kYS1uYXR1cmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZm9ybXtcclxuICB3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubm9tYnJlLWlucHV0c3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5cclxuLmhhbGYtd2lkdGh7XHJcbiAgd2lkdGg6IDQ5JTtcclxufVxyXG5cclxuLm1iLTF7XHJcblx0bWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/generar-pdf/demanda-natural/demanda-natural.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/generar-pdf/demanda-natural/demanda-natural.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form\n  [formGroup]=\"formularioNatural\"\n  class=\"full-width\"\n  (ngSubmit)=\"log()\">\n\n\n\n  <div class=\"full-width nombre-inputs\">\n    <mat-form-field class=\"half-width\">\n      <input\n        matInput\n        placeholder=\"Nombre\"\n        formControlName=\"nombre\"\n        required>\n    </mat-form-field>\n\n    <mat-form-field class=\"half-width\">\n      <input\n        matInput\n        placeholder=\"Apellido\"\n        formControlName=\"apellido\"\n        required>\n    </mat-form-field>\n  </div>\n\n\n  <div class=\"full-width\" formGroupName=\"ubicacion\">\n\n\n    <mat-form-field class=\"full-width\">\n      <input\n        matInput\n        placeholder=\"Dirección\"\n        formControlName=\"direccion\"\n        required>\n    </mat-form-field>\n\n    <div class=\"full-width nombre-inputs\">\n\n      <mat-form-field class=\"half-width\">\n        <mat-select\n          placeholder=\"Departamento\"\n          formControlName=\"departamento\">\n\n          <mat-option value=\"option\">Option</mat-option>\n\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"half-width\">\n        <mat-select\n          placeholder=\"Municipio\"\n          formControlName=\"municipio\">\n\n          <mat-option value=\"option\">Option</mat-option>\n\n        </mat-select>\n      </mat-form-field>\n\n    </div>\n\n  </div>\n\n\n  <div formGroupName=\"documento\" class=\"full-width nombre-inputs\">\n\n    <mat-form-field class=\"half-width\">\n       <mat-select\n         #tipoDeDocumento\n         placeholder=\"Tipo de Documento\"\n         formControlName=\"tipoDeDocumento\" >\n\n         <mat-option #opcionCC value=\"CC\">Cedula de Ciudadania</mat-option>\n         <mat-option value=\"CE\">Cedula de Exptranjeria</mat-option>\n         <mat-option value=\"Pasaporte\">Pasaporte</mat-option>\n         <mat-option value=\"Carnet Diplomatico\">Carnet Diplomatico</mat-option>\n\n       </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"half-width\">\n      <input\n        type=\"tel\"\n        matInput\n        placeholder=\"{{ tipoDeDocumento.value || opcionCC.value }}\"\n        formControlName=\"numeroDeDocumento\"\n        required >\n    </mat-form-field>\n\n  </div>\n\n\n  <div class=\"full-width nombre-inputs mb-1\">\n\n    <mat-form-field class=\"half-width\">\n      <input\n        matInput\n        placeholder=\"Email\"\n        formControlName=\"email\"\n        required>\n      <mat-error *ngIf=\"formularioNatural.get('email').invalid\">{{getErrorMessage()}}</mat-error>\n    </mat-form-field>\n\n\n    <mat-form-field class=\"half-width\">\n      <input\n        type=\"tel\"\n        matInput\n        placeholder=\"Telefono\"\n        formControlName=\"telefono\"\n        required>\n    </mat-form-field>\n\n  </div>\n\n\n  <button\n    mat-flat-button\n    type=\"submit\"\n    class=\"btn\"\n    [disabled]=\"!formularioNatural.valid\">\n    Continuar\n  </button>\n\n\n</form>\n"

/***/ }),

/***/ "./src/app/generar-pdf/demanda-natural/demanda-natural.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/generar-pdf/demanda-natural/demanda-natural.component.ts ***!
  \**************************************************************************/
/*! exports provided: DemandaNaturalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandaNaturalComponent", function() { return DemandaNaturalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var DemandaNaturalComponent = /** @class */ (function () {
    function DemandaNaturalComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.formularioNatural = this.formBuilder.group({
            'nombre': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'apellido': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'telefono': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+$/)])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            'documento': this.formBuilder.group({
                'tipoDeDocumento': ['CC'],
                'numeroDeDocumento': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+$/)])]
            }),
            'ubicacion': this.formBuilder.group({
                'direccion': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                'departamento': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                'municipio': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
        });
    }
    DemandaNaturalComponent.prototype.ngOnInit = function () {
    };
    DemandaNaturalComponent.prototype.log = function () {
        console.log(this.formularioNatural.value);
    };
    DemandaNaturalComponent.prototype.getErrorMessage = function () {
        return this.formularioNatural.get('email').hasError('required') ? 'Introduzca un email' :
            this.formularioNatural.get('email').hasError('email') ? 'Email no vaildo' : '';
    };
    DemandaNaturalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-demanda-natural',
            template: __webpack_require__(/*! ./demanda-natural.component.html */ "./src/app/generar-pdf/demanda-natural/demanda-natural.component.html"),
            styles: [__webpack_require__(/*! ./demanda-natural.component.css */ "./src/app/generar-pdf/demanda-natural/demanda-natural.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], DemandaNaturalComponent);
    return DemandaNaturalComponent;
}());



/***/ }),

/***/ "./src/app/generar-pdf/generar-pdf.component.css":
/*!*******************************************************!*\
  !*** ./src/app/generar-pdf/generar-pdf.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".generar-pdf-container{\r\n\twidth: 100%;\r\n\theight: auto;\r\n\tmargin: auto;\r\n\t\r\n\tpadding: 0 1.5rem;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.tooltip{\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.titulo{\r\n\tcolor: #2196f3;\r\n\tfont-size: 2rem;\r\n\tfont-weight: normal;\r\n\tline-height: 110%;\r\n\tmargin-top: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJhci1wZGYvZ2VuZXJhci1wZGYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsYUFBYTs7Q0FFYixrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLHVCQUF1QjtDQUN2QixvQkFBb0I7Q0FDcEIsd0JBQXdCO0NBQ3hCOztBQUVEO0NBQ0Msa0JBQWtCO0NBQ2xCOztBQUVEO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixvQkFBb0I7Q0FDcEIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYXItcGRmL2dlbmVyYXItcGRmLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2VuZXJhci1wZGYtY29udGFpbmVye1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRtYXJnaW46IGF1dG87XHJcblx0XHJcblx0cGFkZGluZzogMCAxLjVyZW07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b29sdGlwe1xyXG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4udGl0dWxve1xyXG5cdGNvbG9yOiAjMjE5NmYzO1xyXG5cdGZvbnQtc2l6ZTogMnJlbTtcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdGxpbmUtaGVpZ2h0OiAxMTAlO1xyXG5cdG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/generar-pdf/generar-pdf.component.html":
/*!********************************************************!*\
  !*** ./src/app/generar-pdf/generar-pdf.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SideNav -->\n<app-nav-bar>\n\n\n  <div class=\"generar-pdf-container\">\n\n  <h5 class=\"titulo\">Iniciar Demanda</h5>\n\n    <mat-card class=\"card\">\n\n      <!-- Tipo de demanda -->\n      <mat-form-field class=\"full-width\">\n\n        <mat-select\n          #seleccion\n          placeholder=\"Tipo de Persona\"\n          [(value)]=\"opcion\">\n\n          <mat-option value=\"opcion1\">Persona Juridica</mat-option>\n          <mat-option value=\"opcion2\">Persona Natural</mat-option>\n\n        </mat-select>\n        <mat-icon\n          class=\"tooltip\"\n          matSuffix\n          matTooltip=\"Elija la persona a demandar\">\n          help\n        </mat-icon>\n      </mat-form-field>\n\n\n\n      <!-- Persona de tipo Juridica -->\n\n      <app-demanda-juridica\n        class=\"full-width\"\n        *ngIf=\"seleccion.value == 'opcion1'\">\n      </app-demanda-juridica>\n\n      <!-- persona de tipo Natural -->\n\n      <app-demanda-natural\n        class=\"full-width\"\n        *ngIf=\"seleccion.value == 'opcion2'\">\n      </app-demanda-natural>\n\n\n    </mat-card>\n\n\n  </div>\n\n</app-nav-bar>\n"

/***/ }),

/***/ "./src/app/generar-pdf/generar-pdf.component.ts":
/*!******************************************************!*\
  !*** ./src/app/generar-pdf/generar-pdf.component.ts ***!
  \******************************************************/
/*! exports provided: GenerarPdfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerarPdfComponent", function() { return GenerarPdfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GenerarPdfComponent = /** @class */ (function () {
    function GenerarPdfComponent() {
        this.opcion = 'opcion1';
    }
    GenerarPdfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-generar-pdf',
            template: __webpack_require__(/*! ./generar-pdf.component.html */ "./src/app/generar-pdf/generar-pdf.component.html"),
            styles: [__webpack_require__(/*! ./generar-pdf.component.css */ "./src/app/generar-pdf/generar-pdf.component.css")]
        })
    ], GenerarPdfComponent);
    return GenerarPdfComponent;
}());



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n\n  position: -webkit-sticky;\n\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.nav-bar{\n  height: 8%;\n  background: #1899fc;\n  /* height: auto; */\n  color: #fff;\n}\n\n.boton{\n  font-size: 2rem;\n}\n\n.titulo{\n  /* padding: 0.8rem 0; */\n  font-size: 2rem;\n  margin-left: 0.625rem;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7O0VBRUUseUJBQWlCOztFQUFqQixpQkFBaUI7RUFDakIsT0FBTztFQUNQLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsc0JBQXNCOztDQUV2QiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcblxuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5uYXYtYmFye1xuICBoZWlnaHQ6IDglO1xuICBiYWNrZ3JvdW5kOiAjMTg5OWZjO1xuICAvKiBoZWlnaHQ6IGF1dG87ICovXG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYm90b257XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLnRpdHVsb3tcbiAgLyogcGFkZGluZzogMC44cmVtIDA7ICovXG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuNjI1cmVtO1xuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"'over'\">\n    <mat-toolbar>LaborApp</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item href=\"#\">Generar Demanda</a>\n      <a mat-list-item href=\"#\">Contactar Abogado</a>\n      <a mat-list-item routerLink=\"\">Salir</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar class=\"nav-bar\">\n      <button\n\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\">\n        <mat-icon aria-label=\"Side nav toggle icon\" class=\"boton\">menu</mat-icon>\n      </button>\n\n      <span class=\"titulo\">LaborApp</span>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n\n    <ng-content></ng-content>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    NavBarComponent.prototype.log = function () {
        console.log(this.isHandset$);
        console.log(this.breakpointObserver);
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sign-in-container{\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tmargin: auto;\r\n\tpadding: 1.5rem;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n.sign-in-container .img-container,\r\n.sign-in-container .img-container img{\r\n\twidth: 15rem;\r\n}\r\n.sign-in-container form{\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n}\r\n.sign-in-container form .inputs{\r\n\twidth: 100%;\r\n\tmargin-bottom: 1rem;\r\n}\r\n.sign-in-container form .link{\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tcolor: #1899fc;\r\n}\r\n.sign-in-container form .link a,\r\n.sign-in-container button{\r\n\tfont-size: 1rem;\r\n\tline-height: 2.25rem;\r\n\tpadding: 0 1rem;\r\n}\r\n.sign-in-container form .link a{\r\n\tpadding: 0 0.09375rem;\r\n}\r\n.parrafo{\r\n \tmargin: 1rem 0;\r\n \tfont-size: 1.5rem;\r\n\ttext-align: center;\r\n \tfont-family: 'roboto';\r\n \tfont-weight: normal;\r\n}\r\n@media (min-width:470px) {\r\n\t.card{\r\n\t\twidth: 423px;\r\n\t}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLHVCQUF1QjtDQUN2QixvQkFBb0I7Q0FDcEIsd0JBQXdCO0NBQ3hCO0FBQ0Q7O0NBRUMsYUFBYTtDQUNiO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osY0FBYztDQUNkLG9CQUFvQjtDQUNwQix3QkFBd0I7Q0FDeEIsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osb0JBQW9CO0NBQ3BCO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osY0FBYztDQUNkLCtCQUErQjtDQUMvQixlQUFlO0NBQ2Y7QUFDRDs7Q0FFQyxnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLGdCQUFnQjtDQUNoQjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCO0FBRUQ7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0NBQ25CLG1CQUFtQjtFQUNsQixzQkFBc0I7RUFDdEIsb0JBQW9CO0NBQ3JCO0FBR0Q7Q0FDQztFQUNDLGFBQWE7RUFDYjtDQUNEIiwiZmlsZSI6InNyYy9hcHAvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbi1pbi1jb250YWluZXJ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHRwYWRkaW5nOiAxLjVyZW07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnNpZ24taW4tY29udGFpbmVyIC5pbWctY29udGFpbmVyLFxyXG4uc2lnbi1pbi1jb250YWluZXIgLmltZy1jb250YWluZXIgaW1ne1xyXG5cdHdpZHRoOiAxNXJlbTtcclxufVxyXG4uc2lnbi1pbi1jb250YWluZXIgZm9ybXtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uc2lnbi1pbi1jb250YWluZXIgZm9ybSAuaW5wdXRze1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuLnNpZ24taW4tY29udGFpbmVyIGZvcm0gLmxpbmt7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0Y29sb3I6ICMxODk5ZmM7XHJcbn1cclxuLnNpZ24taW4tY29udGFpbmVyIGZvcm0gLmxpbmsgYSxcclxuLnNpZ24taW4tY29udGFpbmVyIGJ1dHRvbntcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDIuMjVyZW07XHJcblx0cGFkZGluZzogMCAxcmVtO1xyXG59XHJcbi5zaWduLWluLWNvbnRhaW5lciBmb3JtIC5saW5rIGF7XHJcblx0cGFkZGluZzogMCAwLjA5Mzc1cmVtO1xyXG59XHJcblxyXG4ucGFycmFmb3tcclxuIFx0bWFyZ2luOiAxcmVtIDA7XHJcbiBcdGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuIFx0Zm9udC1mYW1pbHk6ICdyb2JvdG8nO1xyXG4gXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6NDcwcHgpIHtcclxuXHQuY2FyZHtcclxuXHRcdHdpZHRoOiA0MjNweDtcclxuXHR9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sign-in-container\">\r\n\r\n\r\n    <div class=\"img-container\">\r\n      <img src=\"./assets/img/logo.png\" alt=\"Logo Laborapp\">\r\n    </div>\r\n\r\n\r\n      <form >\r\n\r\n        <!-- <h3 class=\"mat-subheading-2\">Inicio de secion:</h3> -->\r\n        <h5 class=\"parrafo\">Por favor, inicie sesión con su cuenta</h5>\r\n\r\n        <mat-card class=\"card\">\r\n\r\n        <mat-form-field class=\"inputs\">\r\n          <input matInput placeholder=\"Correo\" [formControl]=\"emailFormControl\"\r\n          [errorStateMatcher]=\"matcher\" required>\r\n          <!-- <mat-hint>Errors appear instantly!</mat-hint> -->\r\n          <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n            Correo Invalido!\r\n          </mat-error>\r\n          <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n            El correo es <strong>requerido</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"inputs\">\r\n          <input matInput placeholder=\"Contraseña\" [type]=\"hide ? 'password' : 'text'\" required>\r\n          <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n        </mat-form-field>\r\n\r\n        <div class=\"link\">\r\n          <a mat-button routerLink=\".\">Olvidé mi contraseña</a>\r\n\r\n          <a mat-button routerLink=\".\">Crear cuenta</a>\r\n        </div>\r\n\r\n      </mat-card>\r\n\r\n\r\n        <button mat-flat-button (click)=\"openSnackBar()\" class=\"btn\" routerLink=\"/pdf\">Entrar</button>\r\n      </form>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");


//Forms


//SnackBar

var SignInComponent = /** @class */ (function () {
    function SignInComponent(snackBar) {
        this.snackBar = snackBar;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        this.matcher = new _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"]();
        //Password
        this.hide = true;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    //MatSnackBar
    SignInComponent.prototype.openSnackBar = function () {
        this.snackBar.open('Credenciales incorrectas', '', {
            duration: 2500,
        });
    };
    //Email
    SignInComponent.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], SignInComponent);
    return SignInComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);




// Hammer JS

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

module.exports = __webpack_require__(/*! C:\Users\anafe9\Documents\jonathan\Programacion\LaborApp\LaborApp\front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map