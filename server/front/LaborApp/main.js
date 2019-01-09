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
/* harmony import */ var _componentes_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/sign-in/sign-in.component */ "./src/app/componentes/sign-in/sign-in.component.ts");
/* harmony import */ var _componentes_generar_pdf_generar_pdf_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/generar-pdf/generar-pdf.component */ "./src/app/componentes/generar-pdf/generar-pdf.component.ts");
/* harmony import */ var _componentes_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/sign-up/sign-up.component */ "./src/app/componentes/sign-up/sign-up.component.ts");



// component



var routes = [
    { path: '', component: _componentes_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"] },
    { path: 'pdf', component: _componentes_generar_pdf_generar_pdf_component__WEBPACK_IMPORTED_MODULE_4__["GenerarPdfComponent"] },
    { path: 'signup', component: _componentes_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"] }
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
/* harmony import */ var _componentes_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/sign-in/sign-in.component */ "./src/app/componentes/sign-in/sign-in.component.ts");
/* harmony import */ var _componentes_generar_pdf_generar_pdf_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componentes/generar-pdf/generar-pdf.component */ "./src/app/componentes/generar-pdf/generar-pdf.component.ts");
/* harmony import */ var _componentes_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentes/nav-bar/nav-bar.component */ "./src/app/componentes/nav-bar/nav-bar.component.ts");
/* harmony import */ var _componentes_generar_pdf_demanda_juridica_demanda_juridica_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentes/generar-pdf/demanda-juridica/demanda-juridica.component */ "./src/app/componentes/generar-pdf/demanda-juridica/demanda-juridica.component.ts");
/* harmony import */ var _componentes_generar_pdf_demanda_natural_demanda_natural_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/generar-pdf/demanda-natural/demanda-natural.component */ "./src/app/componentes/generar-pdf/demanda-natural/demanda-natural.component.ts");
/* harmony import */ var _componentes_generar_pdf_demanda_juridica_representante_representante_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/generar-pdf/demanda-juridica/representante/representante.component */ "./src/app/componentes/generar-pdf/demanda-juridica/representante/representante.component.ts");
/* harmony import */ var _componentes_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/sign-up/sign-up.component */ "./src/app/componentes/sign-up/sign-up.component.ts");
/* harmony import */ var _componentes_sign_up_nom_ape_gene_nom_ape_gene_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentes/sign-up/nom-ape-gene/nom-ape-gene.component */ "./src/app/componentes/sign-up/nom-ape-gene/nom-ape-gene.component.ts");
/* harmony import */ var _componentes_sign_up_documento_documento_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componentes/sign-up/documento/documento.component */ "./src/app/componentes/sign-up/documento/documento.component.ts");
/* harmony import */ var _componentes_sign_up_fecha_nacimiento_fecha_nacimiento_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./componentes/sign-up/fecha-nacimiento/fecha-nacimiento.component */ "./src/app/componentes/sign-up/fecha-nacimiento/fecha-nacimiento.component.ts");
/* harmony import */ var _componentes_sign_up_correo_contra_correo_contra_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./componentes/sign-up/correo-contra/correo-contra.component */ "./src/app/componentes/sign-up/correo-contra/correo-contra.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/usuarios.service */ "./src/app/services/usuarios.service.ts");
/* harmony import */ var _services_departamentos_municipios_departamentos_municipios_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/departamentos-municipios/departamentos-municipios.service */ "./src/app/services/departamentos-municipios/departamentos-municipios.service.ts");
/* harmony import */ var _services_demandadoJuridico_demandadojuridico_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/demandadoJuridico/demandadojuridico.service */ "./src/app/services/demandadoJuridico/demandadojuridico.service.ts");
/* harmony import */ var _services_demandaPdf_demanda_pdf_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/demandaPdf/demanda-pdf.service */ "./src/app/services/demandaPdf/demanda-pdf.service.ts");





//Forms

//Animations

//Material

//Components











// servicios





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _componentes_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__["SignInComponent"],
                _componentes_generar_pdf_generar_pdf_component__WEBPACK_IMPORTED_MODULE_9__["GenerarPdfComponent"],
                _componentes_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
                _componentes_generar_pdf_demanda_juridica_demanda_juridica_component__WEBPACK_IMPORTED_MODULE_11__["DemandaJuridicaComponent"],
                _componentes_generar_pdf_demanda_natural_demanda_natural_component__WEBPACK_IMPORTED_MODULE_12__["DemandaNaturalComponent"],
                _componentes_generar_pdf_demanda_juridica_representante_representante_component__WEBPACK_IMPORTED_MODULE_13__["RepresentanteComponent"],
                _componentes_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_14__["SignUpComponent"],
                _componentes_sign_up_nom_ape_gene_nom_ape_gene_component__WEBPACK_IMPORTED_MODULE_15__["NomApeGeneComponent"],
                _componentes_sign_up_documento_documento_component__WEBPACK_IMPORTED_MODULE_16__["DocumentoComponent"],
                _componentes_sign_up_fecha_nacimiento_fecha_nacimiento_component__WEBPACK_IMPORTED_MODULE_17__["FechaNacimientoComponent"],
                _componentes_sign_up_correo_contra_correo_contra_component__WEBPACK_IMPORTED_MODULE_18__["CorreoContraComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _material__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"]
            ],
            providers: [_services_usuarios_service__WEBPACK_IMPORTED_MODULE_20__["UsuariosService"], _services_departamentos_municipios_departamentos_municipios_service__WEBPACK_IMPORTED_MODULE_21__["DepartamentosMunicipiosService"], _services_demandadoJuridico_demandadojuridico_service__WEBPACK_IMPORTED_MODULE_22__["DemandadojuridicoService"], _services_demandaPdf_demanda_pdf_service__WEBPACK_IMPORTED_MODULE_23__["DemandaPdfService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/componentes/generar-pdf/demanda-juridica/demanda-juridica.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/componentes/generar-pdf/demanda-juridica/demanda-juridica.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nform{\r\n  width: 100%;\r\n\theight: 100%;\r\n  display: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n\r\n.nombre-inputs{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n\r\n.half-width{\r\n  width: 49%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvZ2VuZXJhci1wZGYvZGVtYW5kYS1qdXJpZGljYS9kZW1hbmRhLWp1cmlkaWNhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtDQUNiLGFBQWE7RUFDWixjQUFjO0NBQ2YsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtDQUNwQix3QkFBd0I7Q0FDeEI7OztBQUdEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiwrQkFBK0I7Q0FDaEM7OztBQUVEO0VBQ0UsV0FBVztDQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvZ2VuZXJhci1wZGYvZGVtYW5kYS1qdXJpZGljYS9kZW1hbmRhLWp1cmlkaWNhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZm9ybXtcclxuICB3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubm9tYnJlLWlucHV0c3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uaGFsZi13aWR0aHtcclxuICB3aWR0aDogNDklO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/generar-pdf/demanda-juridica/demanda-juridica.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/componentes/generar-pdf/demanda-juridica/demanda-juridica.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formularioJuridica\" class=\"full-width\" (ngSubmit)=\"log(representante.checked)\">\r\n\r\n    <div class=\"full-width nombre-inputs\">\r\n      <mat-form-field class=\"half-width\">\r\n        <input matInput placeholder=\"Razón Social\" formControlName=\"razonSocial\" required>\r\n        <mat-icon\r\n          class=\"tooltip\"\r\n          matSuffix\r\n          matTooltip=\"Nombre de la empresa\">\r\n          help\r\n        </mat-icon>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"half-width\">\r\n        <input matInput placeholder=\"NIT\" formControlName=\"nit\" required>\r\n\r\n      <mat-icon\r\n        class=\"tooltip\"\r\n        matSuffix\r\n        matTooltip=\"Número de Identificacion Tributario\">\r\n        help\r\n      </mat-icon>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n\r\n    <div class=\"full-width\" formGroupName=\"ubicacion\">\r\n\r\n\r\n      <mat-form-field class=\"full-width\">\r\n        <input  matInput placeholder=\"Dirección\" formControlName=\"direccion\" required>\r\n      </mat-form-field>\r\n\r\n      <div class=\"full-width nombre-inputs\">\r\n\r\n\r\n        <mat-form-field class=\"half-width\">\r\n          <mat-select placeholder=\"Departamento\" formControlName=\"departamento\" required>\r\n            <!-- <mat-option *ngFor=\"let d of listadoDepartamentos\"  value=\"{{ d.departamento }}\">{{ d.departamento }}</mat-option> -->\r\n            <mat-option value=\"opcion\">Opcion</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"half-width\">\r\n          <mat-select placeholder=\"Municipio\" formControlName=\"municipio\" required>\r\n            <!-- <mat-option *ngFor=\"let dYM of listDepartamentosYMunicipios\"  value=\"{{ dYM.municipio }}\">{{ dYM.municipio }}</mat-option> -->\r\n            <mat-option value=\"opcion\">Opcion</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"full-width nombre-inputs mb-1\">\r\n\r\n\r\n      <mat-form-field class=\"half-width\">\r\n        <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n        <mat-error *ngIf=\"formularioJuridica.get('email').invalid\">{{getErrorMessage()}}</mat-error>\r\n      </mat-form-field>\r\n\r\n\r\n      <mat-form-field class=\"half-width\">\r\n\r\n        <input type=\"tel\" matInput placeholder=\"Telefono\" formControlName=\"telefono\" required>\r\n\r\n      </mat-form-field>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"full-width mb-1\">\r\n\r\n      <mat-checkbox #representante >\r\n        Sabe usted los datos del representante legal\r\n      </mat-checkbox>\r\n\r\n    </div>\r\n\r\n\r\n    <!-- Representante legal -->\r\n\r\n    <app-representante\r\n      *ngIf=\"representante.checked\"\r\n      (representanteFormulario)=\"eventoHijoFormulario($event)\"\r\n      class=\"full-width\">\r\n    </app-representante>\r\n\r\n\r\n<!-- \r\n  <button mat-flat-button class=\"btn\"\r\n\r\n      type=\"submit\"\r\n      [disabled]=\"verificar(representante.checked)\"\r\n\r\n    ><a href=\"https://laborappi.herokuapp.com/api/laborapp/demanda/descargar/784333\">Continuar</a>\r\n  </button> -->\r\n  <a mat-flat-button class=\"btn\"\r\n\r\n    (click)=\"log(representante.checked)\"\r\n    [disabled]=\"verificar(representante.checked)\"\r\n\r\n  >Continuar</a>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/componentes/generar-pdf/demanda-juridica/demanda-juridica.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/componentes/generar-pdf/demanda-juridica/demanda-juridica.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DemandaJuridicaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandaJuridicaComponent", function() { return DemandaJuridicaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_departamentos_municipios_departamentos_municipios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/departamentos-municipios/departamentos-municipios.service */ "./src/app/services/departamentos-municipios/departamentos-municipios.service.ts");
/* harmony import */ var _services_cedula_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/cedula-usuario.service */ "./src/app/services/cedula-usuario.service.ts");
/* harmony import */ var _services_demandadoJuridico_demandadojuridico_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/demandadoJuridico/demandadojuridico.service */ "./src/app/services/demandadoJuridico/demandadojuridico.service.ts");
/* harmony import */ var _services_demandaPdf_demanda_pdf_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/demandaPdf/demanda-pdf.service */ "./src/app/services/demandaPdf/demanda-pdf.service.ts");







var DemandaJuridicaComponent = /** @class */ (function () {
    function DemandaJuridicaComponent(formBuilder, departamentosMunicipiosService, cedulaUsuarioService, demandadojuridicoService, demandaPdfService) {
        this.formBuilder = formBuilder;
        this.departamentosMunicipiosService = departamentosMunicipiosService;
        this.cedulaUsuarioService = cedulaUsuarioService;
        this.demandadojuridicoService = demandadojuridicoService;
        this.demandaPdfService = demandaPdfService;
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
    // ngAfterContentChecked(): void {
    //  console.log(this.formularioJuridica.value.razonSocial);
    //  console.log(this.cedulaUsuarioService.obtenerCedual());
    //
    // }
    DemandaJuridicaComponent.prototype.ngOnInit = function () {
    };
    DemandaJuridicaComponent.prototype.eventoHijoFormulario = function (e) {
        this.formularioRepresentante = e;
    };
    DemandaJuridicaComponent.prototype.go = function (checked) {
        this.log(checked);
        window.location.href = 'https://laborappi.herokuapp.com/api/laborapp/demanda/descargar/784333';
    };
    DemandaJuridicaComponent.prototype.log = function (checked) {
        /** if( checked ){
          console.log(this.formularioJuridica.value.razonSocial);
          console.log(this.formularioRepresentante);
        }else{
          console.log(this.formularioJuridica.value.razonSocial);
        }**/
        var _this = this;
        var urlDemandoInsert = 'https://laborappi.herokuapp.com/api/laborapp/demandado/guardar/empresa';
        var objetoDemandadoJuridico = {
            NItEmpresa: this.formularioJuridica.value.nit,
            nombreEmpresaRS: this.formularioJuridica.value.razonSocial,
            telefonoEmpresa: this.formularioJuridica.value.telefono,
            emailEmpresa: this.formularioJuridica.value.email,
            direccionEmpresa: this.formularioJuridica.value.ubicacion.direccion,
            codigoDaneMunicipio: 90
        };
        this.demandadojuridicoService.enviarDemandadoJuridico(urlDemandoInsert, objetoDemandadoJuridico).subscribe(function (res) {
            console.log(res);
            var nit = _this.formularioJuridica.value.nit;
            var cedula = _this.cedulaUsuarioService.obtenerCedual();
            _this.demandaPdfService.generarPdf(nit, cedula)
                .subscribe(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
            _this.demandaPdfService.enviarPdf(cedula)
                .subscribe(function (res) {
                console.log(res);
                window.location.href = 'https://laborappi.herokuapp.com/api/laborapp/demanda/descargar/784333';
            }, function (err) {
                console.log(err);
            });
        }, function (err) { return console.error(err); });
    };
    DemandaJuridicaComponent.prototype.descargar = function () {
        var cedula = this.cedulaUsuarioService.obtenerCedual();
        this.demandaPdfService.descargarPdf(cedula)
            .subscribe(function (res) {
            console.log(res);
            return res.url;
        }, function (err) {
            console.log(err);
        });
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
    DemandaJuridicaComponent.prototype.getErrorMessage = function () {
        return this.formularioJuridica.get('email').hasError('required') ? 'Introduzca un email' :
            this.formularioJuridica.get('email').hasError('email') ? 'Email no vaildo' : '';
    };
    DemandaJuridicaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-demanda-juridica',
            template: __webpack_require__(/*! ./demanda-juridica.component.html */ "./src/app/componentes/generar-pdf/demanda-juridica/demanda-juridica.component.html"),
            styles: [__webpack_require__(/*! ./demanda-juridica.component.css */ "./src/app/componentes/generar-pdf/demanda-juridica/demanda-juridica.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_departamentos_municipios_departamentos_municipios_service__WEBPACK_IMPORTED_MODULE_3__["DepartamentosMunicipiosService"],
            _services_cedula_usuario_service__WEBPACK_IMPORTED_MODULE_4__["CedulaUsuarioService"],
            _services_demandadoJuridico_demandadojuridico_service__WEBPACK_IMPORTED_MODULE_5__["DemandadojuridicoService"],
            _services_demandaPdf_demanda_pdf_service__WEBPACK_IMPORTED_MODULE_6__["DemandaPdfService"]])
    ], DemandaJuridicaComponent);
    return DemandaJuridicaComponent;
}());



/***/ }),

/***/ "./src/app/componentes/generar-pdf/demanda-juridica/representante/representante.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/componentes/generar-pdf/demanda-juridica/representante/representante.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".representante{\r\n  width: 100%;\r\n\theight: 100%;\r\n  display: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.nombre-inputs{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.half-width{\r\n  width: 49%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvZ2VuZXJhci1wZGYvZGVtYW5kYS1qdXJpZGljYS9yZXByZXNlbnRhbnRlL3JlcHJlc2VudGFudGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7Q0FDYixhQUFhO0VBQ1osY0FBYztDQUNmLHVCQUF1QjtDQUN2QixvQkFBb0I7Q0FDcEIsd0JBQXdCO0NBQ3hCOztBQUVEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiwrQkFBK0I7Q0FDaEM7O0FBRUQ7RUFDRSxXQUFXO0NBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9nZW5lcmFyLXBkZi9kZW1hbmRhLWp1cmlkaWNhL3JlcHJlc2VudGFudGUvcmVwcmVzZW50YW50ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcHJlc2VudGFudGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubm9tYnJlLWlucHV0c3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uaGFsZi13aWR0aHtcclxuICB3aWR0aDogNDklO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/generar-pdf/demanda-juridica/representante/representante.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/componentes/generar-pdf/demanda-juridica/representante/representante.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"formularioRepresentante\" class=\"full-width representante mb-1\">\r\n\r\n  <div class=\"full-width nombre-inputs\">\r\n    <mat-form-field class=\"half-width\">\r\n      <input matInput placeholder=\"Nombre\"  formControlName=\"nombre\" required>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"half-width\">\r\n      <input matInput placeholder=\"Apellido\" formControlName=\"apellido\" required>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div formGroupName=\"documento\" class=\"full-width nombre-inputs\">\r\n\r\n    <mat-form-field class=\"half-width\">\r\n      <mat-select placeholder=\"Tipo de Documento\" #tipoDeDocumento  formControlName=\"tipoDeDocumento\" >\r\n        <mat-option #opcionCC value=\"CC\">Cedula de Ciudadania</mat-option>\r\n        <mat-option value=\"CE\">Cedula de Exptranjeria</mat-option>\r\n        <mat-option value=\"Pasaporte\">Pasaporte</mat-option>\r\n        <mat-option value=\"Carnet Diplomatico\">Carnet Diplomatico</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"half-width\">\r\n      <input type=\"tel\" matInput placeholder=\"{{ tipoDeDocumento.value || opcionCC.value }}\" formControlName=\"numeroDeDocumento\" required>\r\n    </mat-form-field>\r\n\r\n  </div>\r\n\r\n\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput placeholder=\"Email\" formControlName=\"email\"  required>\r\n    <mat-error *ngIf=\"formularioRepresentante.get('email').invalid\">{{getErrorMessage()}}</mat-error>\r\n  </mat-form-field>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/componentes/generar-pdf/demanda-juridica/representante/representante.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/componentes/generar-pdf/demanda-juridica/representante/representante.component.ts ***!
  \***************************************************************************************************/
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
            template: __webpack_require__(/*! ./representante.component.html */ "./src/app/componentes/generar-pdf/demanda-juridica/representante/representante.component.html"),
            styles: [__webpack_require__(/*! ./representante.component.css */ "./src/app/componentes/generar-pdf/demanda-juridica/representante/representante.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RepresentanteComponent);
    return RepresentanteComponent;
}());



/***/ }),

/***/ "./src/app/componentes/generar-pdf/demanda-natural/demanda-natural.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/componentes/generar-pdf/demanda-natural/demanda-natural.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nform{\r\n  width: 100%;\r\n\theight: 100%;\r\n  display: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n\r\n.nombre-inputs{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n\r\n.half-width{\r\n  width: 49%;\r\n}\r\n\r\n\r\n.mb-1{\r\n\tmargin-bottom: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvZ2VuZXJhci1wZGYvZGVtYW5kYS1uYXR1cmFsL2RlbWFuZGEtbmF0dXJhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFlBQVk7Q0FDYixhQUFhO0VBQ1osY0FBYztDQUNmLHVCQUF1QjtDQUN2QixvQkFBb0I7Q0FDcEIsd0JBQXdCO0NBQ3hCOzs7QUFHRDtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsK0JBQStCO0NBQ2hDOzs7QUFHRDtFQUNFLFdBQVc7Q0FDWjs7O0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9nZW5lcmFyLXBkZi9kZW1hbmRhLW5hdHVyYWwvZGVtYW5kYS1uYXR1cmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZm9ybXtcclxuICB3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubm9tYnJlLWlucHV0c3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5cclxuLmhhbGYtd2lkdGh7XHJcbiAgd2lkdGg6IDQ5JTtcclxufVxyXG5cclxuLm1iLTF7XHJcblx0bWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/componentes/generar-pdf/demanda-natural/demanda-natural.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/componentes/generar-pdf/demanda-natural/demanda-natural.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form\r\n  [formGroup]=\"formularioNatural\"\r\n  class=\"full-width\"\r\n  (ngSubmit)=\"log()\">\r\n\r\n\r\n\r\n  <div class=\"full-width nombre-inputs\">\r\n    <mat-form-field class=\"half-width\">\r\n      <input\r\n        matInput\r\n        placeholder=\"Nombre\"\r\n        formControlName=\"nombre\"\r\n        required>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"half-width\">\r\n      <input\r\n        matInput\r\n        placeholder=\"Apellido\"\r\n        formControlName=\"apellido\"\r\n        required>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n\r\n  <div class=\"full-width\" formGroupName=\"ubicacion\">\r\n\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <input\r\n        matInput\r\n        placeholder=\"Dirección\"\r\n        formControlName=\"direccion\"\r\n        required>\r\n    </mat-form-field>\r\n\r\n    <div class=\"full-width nombre-inputs\">\r\n\r\n      <mat-form-field class=\"half-width\">\r\n        <mat-select\r\n          placeholder=\"Departamento\"\r\n          formControlName=\"departamento\">\r\n\r\n          <mat-option value=\"option\">Option</mat-option>\r\n\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"half-width\">\r\n        <mat-select\r\n          placeholder=\"Municipio\"\r\n          formControlName=\"municipio\">\r\n\r\n          <mat-option value=\"option\">Option</mat-option>\r\n\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div formGroupName=\"documento\" class=\"full-width nombre-inputs\">\r\n\r\n    <mat-form-field class=\"half-width\">\r\n       <mat-select\r\n         #tipoDeDocumento\r\n         placeholder=\"Tipo de Documento\"\r\n         formControlName=\"tipoDeDocumento\" >\r\n\r\n         <mat-option #opcionCC value=\"CC\">Cedula de Ciudadania</mat-option>\r\n         <mat-option value=\"CE\">Cedula de Exptranjeria</mat-option>\r\n         <mat-option value=\"Pasaporte\">Pasaporte</mat-option>\r\n         <mat-option value=\"Carnet Diplomatico\">Carnet Diplomatico</mat-option>\r\n\r\n       </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"half-width\">\r\n      <input\r\n        type=\"tel\"\r\n        matInput\r\n        placeholder=\"{{ tipoDeDocumento.value || opcionCC.value }}\"\r\n        formControlName=\"numeroDeDocumento\"\r\n        required >\r\n    </mat-form-field>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"full-width nombre-inputs mb-1\">\r\n\r\n    <mat-form-field class=\"half-width\">\r\n      <input\r\n        matInput\r\n        placeholder=\"Email\"\r\n        formControlName=\"email\"\r\n        required>\r\n      <mat-error *ngIf=\"formularioNatural.get('email').invalid\">{{getErrorMessage()}}</mat-error>\r\n    </mat-form-field>\r\n\r\n\r\n    <mat-form-field class=\"half-width\">\r\n      <input\r\n        type=\"tel\"\r\n        matInput\r\n        placeholder=\"Telefono\"\r\n        formControlName=\"telefono\"\r\n        required>\r\n    </mat-form-field>\r\n\r\n  </div>\r\n\r\n\r\n  <button\r\n    mat-flat-button\r\n    type=\"submit\"\r\n    class=\"btn\"\r\n    [disabled]=\"!formularioNatural.valid\">\r\n    Continuar\r\n  </button>\r\n\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/componentes/generar-pdf/demanda-natural/demanda-natural.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/generar-pdf/demanda-natural/demanda-natural.component.ts ***!
  \**************************************************************************************/
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
            template: __webpack_require__(/*! ./demanda-natural.component.html */ "./src/app/componentes/generar-pdf/demanda-natural/demanda-natural.component.html"),
            styles: [__webpack_require__(/*! ./demanda-natural.component.css */ "./src/app/componentes/generar-pdf/demanda-natural/demanda-natural.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], DemandaNaturalComponent);
    return DemandaNaturalComponent;
}());



/***/ }),

/***/ "./src/app/componentes/generar-pdf/generar-pdf.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/componentes/generar-pdf/generar-pdf.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".generar-pdf-container{\r\n\twidth: 100%;\r\n\theight: auto;\r\n\tmargin: auto;\r\n\t\r\n\tpadding: 0 1.5rem;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.tooltip{\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.titulo{\r\n\tcolor: #2196f3;\r\n\tfont-size: 2rem;\r\n\tfont-weight: normal;\r\n\tline-height: 110%;\r\n\tmargin-top: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvZ2VuZXJhci1wZGYvZ2VuZXJhci1wZGYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsYUFBYTs7Q0FFYixrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLHVCQUF1QjtDQUN2QixvQkFBb0I7Q0FDcEIsd0JBQXdCO0NBQ3hCOztBQUVEO0NBQ0Msa0JBQWtCO0NBQ2xCOztBQUVEO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixvQkFBb0I7Q0FDcEIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2dlbmVyYXItcGRmL2dlbmVyYXItcGRmLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2VuZXJhci1wZGYtY29udGFpbmVye1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRtYXJnaW46IGF1dG87XHJcblx0XHJcblx0cGFkZGluZzogMCAxLjVyZW07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b29sdGlwe1xyXG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4udGl0dWxve1xyXG5cdGNvbG9yOiAjMjE5NmYzO1xyXG5cdGZvbnQtc2l6ZTogMnJlbTtcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdGxpbmUtaGVpZ2h0OiAxMTAlO1xyXG5cdG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/componentes/generar-pdf/generar-pdf.component.html":
/*!********************************************************************!*\
  !*** ./src/app/componentes/generar-pdf/generar-pdf.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SideNav -->\r\n<app-nav-bar>\r\n\r\n\r\n  <div class=\"generar-pdf-container\">\r\n\r\n  <h5 class=\"titulo\">Iniciar Demanda</h5>\r\n\r\n    <mat-card class=\"card\">\r\n\r\n      <!-- Tipo de demanda -->\r\n      <mat-form-field class=\"full-width\">\r\n\r\n        <mat-select\r\n          #seleccion\r\n          placeholder=\"Tipo de Persona\"\r\n          [(value)]=\"opcion\">\r\n\r\n          <mat-option value=\"opcion1\">Persona Juridica</mat-option>\r\n          <mat-option value=\"opcion2\">Persona Natural</mat-option>\r\n\r\n        </mat-select>\r\n        <mat-icon\r\n          class=\"tooltip\"\r\n          matSuffix\r\n          matTooltip=\"Elija la persona a demandar\">\r\n          help\r\n        </mat-icon>\r\n      </mat-form-field>\r\n\r\n\r\n\r\n      <!-- Persona de tipo Juridica -->\r\n\r\n      <app-demanda-juridica\r\n        class=\"full-width\"\r\n        *ngIf=\"seleccion.value == 'opcion1'\">\r\n      </app-demanda-juridica>\r\n\r\n      <!-- persona de tipo Natural -->\r\n\r\n      <app-demanda-natural\r\n        class=\"full-width\"\r\n        *ngIf=\"seleccion.value == 'opcion2'\">\r\n      </app-demanda-natural>\r\n\r\n\r\n    </mat-card>\r\n\r\n\r\n  </div>\r\n\r\n</app-nav-bar>\r\n"

/***/ }),

/***/ "./src/app/componentes/generar-pdf/generar-pdf.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/componentes/generar-pdf/generar-pdf.component.ts ***!
  \******************************************************************/
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
            template: __webpack_require__(/*! ./generar-pdf.component.html */ "./src/app/componentes/generar-pdf/generar-pdf.component.html"),
            styles: [__webpack_require__(/*! ./generar-pdf.component.css */ "./src/app/componentes/generar-pdf/generar-pdf.component.css")]
        })
    ], GenerarPdfComponent);
    return GenerarPdfComponent;
}());



/***/ }),

/***/ "./src/app/componentes/nav-bar/nav-bar.component.css":
/*!***********************************************************!*\
  !*** ./src/app/componentes/nav-bar/nav-bar.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\r\n  height: 100%;\r\n}\r\n\r\n.sidenav {\r\n  width: 200px;\r\n}\r\n\r\n.sidenav .mat-toolbar {\r\n  background: inherit;\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n\r\n  position: -webkit-sticky;\r\n\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.nav-bar{\r\n  height: 8%;\r\n  background: #1899fc;\r\n  /* height: auto; */\r\n  color: #fff;\r\n}\r\n\r\n.boton{\r\n  font-size: 2rem;\r\n}\r\n\r\n.titulo{\r\n  /* padding: 0.8rem 0; */\r\n  font-size: 2rem;\r\n  margin-left: 0.625rem;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7O0VBRUUseUJBQWlCOztFQUFqQixpQkFBaUI7RUFDakIsT0FBTztFQUNQLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsc0JBQXNCOztDQUV2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuXHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm5hdi1iYXJ7XHJcbiAgaGVpZ2h0OiA4JTtcclxuICBiYWNrZ3JvdW5kOiAjMTg5OWZjO1xyXG4gIC8qIGhlaWdodDogYXV0bzsgKi9cclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmJvdG9ue1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLnRpdHVsb3tcclxuICAvKiBwYWRkaW5nOiAwLjhyZW0gMDsgKi9cclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNjI1cmVtO1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/componentes/nav-bar/nav-bar.component.html":
/*!************************************************************!*\
  !*** ./src/app/componentes/nav-bar/nav-bar.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\r\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n      [mode]=\"'over'\">\r\n    <mat-toolbar>LaborApp</mat-toolbar>\r\n    <mat-nav-list>\r\n      <a mat-list-item href=\"#\">Generar Demanda</a>\r\n      <a mat-list-item href=\"#\">Contactar Abogado</a>\r\n      <a mat-list-item routerLink=\"\">Salir</a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar class=\"nav-bar\">\r\n      <button\r\n\r\n        type=\"button\"\r\n        aria-label=\"Toggle sidenav\"\r\n        mat-icon-button\r\n        (click)=\"drawer.toggle()\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\" class=\"boton\">menu</mat-icon>\r\n      </button>\r\n\r\n      <span class=\"titulo\">LaborApp</span>\r\n    </mat-toolbar>\r\n    <!-- Add Content Here -->\r\n\r\n    <ng-content></ng-content>\r\n\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/componentes/nav-bar/nav-bar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/componentes/nav-bar/nav-bar.component.ts ***!
  \**********************************************************/
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
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/componentes/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/componentes/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/componentes/sign-in/sign-in.component.css":
/*!***********************************************************!*\
  !*** ./src/app/componentes/sign-in/sign-in.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sign-in-container{\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tmargin: auto;\r\n\tpadding: 1.5rem;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n.sign-in-container .img-container,\r\n.sign-in-container .img-container img{\r\n\twidth: 15rem;\r\n}\r\n.sign-in-container form{\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n}\r\n.sign-in-container form .inputs{\r\n\twidth: 100%;\r\n\tmargin-bottom: 1rem;\r\n}\r\n.sign-in-container form .link{\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tcolor: #1899fc;\r\n}\r\n.sign-in-container form .link a,\r\n.sign-in-container button{\r\n\tfont-size: 1rem;\r\n\tline-height: 2.25rem;\r\n\tpadding: 0 1rem;\r\n}\r\n.sign-in-container form .link a{\r\n\tpadding: 0 0.09375rem;\r\n}\r\n.parrafo{\r\n \tmargin: 1rem 0;\r\n \tfont-size: 1.5rem;\r\n\ttext-align: center;\r\n \tfont-family: 'roboto';\r\n \tfont-weight: normal;\r\n}\r\n@media (min-width:470px) {\r\n\t.card{\r\n\t\twidth: 423px;\r\n\t}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLHVCQUF1QjtDQUN2QixvQkFBb0I7Q0FDcEIsd0JBQXdCO0NBQ3hCO0FBQ0Q7O0NBRUMsYUFBYTtDQUNiO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osY0FBYztDQUNkLG9CQUFvQjtDQUNwQix3QkFBd0I7Q0FDeEIsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osb0JBQW9CO0NBQ3BCO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osY0FBYztDQUNkLCtCQUErQjtDQUMvQixlQUFlO0NBQ2Y7QUFDRDs7Q0FFQyxnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLGdCQUFnQjtDQUNoQjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCO0FBRUQ7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0NBQ25CLG1CQUFtQjtFQUNsQixzQkFBc0I7RUFDdEIsb0JBQW9CO0NBQ3JCO0FBR0Q7Q0FDQztFQUNDLGFBQWE7RUFDYjtDQUNEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbi1pbi1jb250YWluZXJ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHRwYWRkaW5nOiAxLjVyZW07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnNpZ24taW4tY29udGFpbmVyIC5pbWctY29udGFpbmVyLFxyXG4uc2lnbi1pbi1jb250YWluZXIgLmltZy1jb250YWluZXIgaW1ne1xyXG5cdHdpZHRoOiAxNXJlbTtcclxufVxyXG4uc2lnbi1pbi1jb250YWluZXIgZm9ybXtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uc2lnbi1pbi1jb250YWluZXIgZm9ybSAuaW5wdXRze1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuLnNpZ24taW4tY29udGFpbmVyIGZvcm0gLmxpbmt7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0Y29sb3I6ICMxODk5ZmM7XHJcbn1cclxuLnNpZ24taW4tY29udGFpbmVyIGZvcm0gLmxpbmsgYSxcclxuLnNpZ24taW4tY29udGFpbmVyIGJ1dHRvbntcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDIuMjVyZW07XHJcblx0cGFkZGluZzogMCAxcmVtO1xyXG59XHJcbi5zaWduLWluLWNvbnRhaW5lciBmb3JtIC5saW5rIGF7XHJcblx0cGFkZGluZzogMCAwLjA5Mzc1cmVtO1xyXG59XHJcblxyXG4ucGFycmFmb3tcclxuIFx0bWFyZ2luOiAxcmVtIDA7XHJcbiBcdGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuIFx0Zm9udC1mYW1pbHk6ICdyb2JvdG8nO1xyXG4gXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6NDcwcHgpIHtcclxuXHQuY2FyZHtcclxuXHRcdHdpZHRoOiA0MjNweDtcclxuXHR9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/componentes/sign-in/sign-in.component.html":
/*!************************************************************!*\
  !*** ./src/app/componentes/sign-in/sign-in.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sign-in-container\">\r\n\r\n\r\n    <div class=\"img-container\">\r\n      <img src=\"./assets/img/logo.png\" alt=\"Logo Laborapp\">\r\n    </div>\r\n\r\n\r\n      <form >\r\n\r\n        <!-- <h3 class=\"mat-subheading-2\">Inicio de secion:</h3> -->\r\n        <h5 class=\"parrafo\">Por favor, inicie sesión con su cuenta</h5>\r\n\r\n        <mat-card class=\"card\">\r\n\r\n        <mat-form-field class=\"inputs\">\r\n          <input matInput placeholder=\"Correo\" [formControl]=\"emailFormControl\"\r\n          [errorStateMatcher]=\"matcher\" required>\r\n          <!-- <mat-hint>Errors appear instantly!</mat-hint> -->\r\n          <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n            Correo Invalido!\r\n          </mat-error>\r\n          <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n            El correo es <strong>requerido</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"inputs\">\r\n          <input matInput placeholder=\"Contraseña\" [type]=\"hide ? 'password' : 'text'\" required>\r\n          <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n        </mat-form-field>\r\n\r\n        <div class=\"link\">\r\n          <a mat-button routerLink=\".\">Olvidé mi contraseña</a>\r\n\r\n          <a mat-button routerLink=\"/signup\">Crear cuenta</a>\r\n        </div>\r\n\r\n      </mat-card>\r\n\r\n\r\n        <button mat-flat-button (click)=\"openSnackBar()\" class=\"btn\" routerLink=\".\">Entrar</button>\r\n      </form>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/componentes/sign-in/sign-in.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/componentes/sign-in/sign-in.component.ts ***!
  \**********************************************************/
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
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/componentes/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/componentes/sign-in/sign-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/componentes/sign-up/correo-contra/correo-contra.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/sign-up/correo-contra/correo-contra.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signup-container{\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tmargin: auto;\r\n\tpadding: 1.5rem;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n    justify-content: center;\r\n}\r\n.signup-container form{\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n}\r\n.parrafo{\r\n    font-family: \"Roboto\", sans-serif;\r\n    font-size: 2rem;\r\n    color:rgb(33, 150, 243);\r\n    justify-content: center;\r\n    font-weight: normal;\r\n    text-align: center;\r\n}\r\n@media (min-width:470px) {\r\n\t.card{\r\n\t\twidth: 423px;\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvc2lnbi11cC9jb3JyZW8tY29udHJhL2NvcnJlby1jb250cmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsYUFBYTtDQUNiLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2QsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtJQUNqQix3QkFBd0I7Q0FDM0I7QUFDRDtDQUNDLFlBQVk7Q0FDWixjQUFjO0NBQ2Qsb0JBQW9CO0NBQ3BCLHdCQUF3QjtDQUN4Qix1QkFBdUI7Q0FDdkI7QUFJRDtJQUNJLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsbUJBQW1CO0NBQ3RCO0FBR0Q7Q0FDQztFQUNDLGFBQWE7RUFDYjtDQUNEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvc2lnbi11cC9jb3JyZW8tY29udHJhL2NvcnJlby1jb250cmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXAtY29udGFpbmVye1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRtYXJnaW46IGF1dG87XHJcblx0cGFkZGluZzogMS41cmVtO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnNpZ251cC1jb250YWluZXIgZm9ybXtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuXHJcblxyXG4ucGFycmFmb3tcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgY29sb3I6cmdiKDMzLCAxNTAsIDI0Myk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDo0NzBweCkge1xyXG5cdC5jYXJke1xyXG5cdFx0d2lkdGg6IDQyM3B4O1xyXG5cdH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/sign-up/correo-contra/correo-contra.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/componentes/sign-up/correo-contra/correo-contra.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-container\">\r\n\r\n    \r\n    \r\n    <form [formGroup]=\"correoContrasenaForm\">\r\n\r\n    <h5 class=\"parrafo\">Correo y contraseña</h5>\r\n    <mat-card class=\"card\">\r\n      \r\n\r\n        <mat-form-field class=\"inputs full-width\" >\r\n            <input matInput placeholder=\"Ingrese su email\"   formControlName=\"correo\" required [(ngModel)]=\"correoUs\">\r\n            <!--<mat-error *ngIf=\"correo.invalid\">{{getErrorMessage()}}</mat-error>-->\r\n          </mat-form-field>\r\n        \r\n        <mat-form-field class=\"inputs full-width\">\r\n            <input matInput placeholder=\"Contraseña\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"key\" required [(ngModel)]=\"keyUs\">\r\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"inputs full-width\">\r\n            <input matInput placeholder=\"Confirme contraseña\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"keyAgain\" required [(ngModel)]=\"againKeyUs\">\r\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n          </mat-form-field>\r\n\r\n         \r\n\r\n\r\n\r\n        </mat-card>\r\n\r\n        <button mat-flat-button class=\"btn\" routerLink=\"/pdf\" (click)=\"correoContrase_clickBtnSiguiente()\" [disabled]=\"correoContrasenaForm.invalid\" >Siguiente</button>\r\n    </form>\r\n    \r\n\r\n</div>"

/***/ }),

/***/ "./src/app/componentes/sign-up/correo-contra/correo-contra.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/sign-up/correo-contra/correo-contra.component.ts ***!
  \******************************************************************************/
/*! exports provided: CorreoContraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorreoContraComponent", function() { return CorreoContraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var CorreoContraComponent = /** @class */ (function () {
    function CorreoContraComponent(formBuilder) {
        // email = new FormControl('', [Validators.required, Validators.email]);
        this.Btn_correoContrasena = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.correoContrasenaForm = formBuilder.group({
            'correo': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'key': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'keyAgain': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            // Se ingresan los campos del formulario que se quieren validar
        });
    }
    CorreoContraComponent.prototype.ngOnInit = function () {
    };
    CorreoContraComponent.prototype.correoContrase_clickBtnSiguiente = function () {
        var datoCorreoContrase = {
            Btn_Acti_fechaNaci: true,
            correoUs: this.correoUs,
            keyUs: this.keyUs,
            againKeyUs: this.againKeyUs
        };
        this.Btn_correoContrasena.emit(datoCorreoContrase);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CorreoContraComponent.prototype, "Btn_correoContrasena", void 0);
    CorreoContraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-correo-contra',
            template: __webpack_require__(/*! ./correo-contra.component.html */ "./src/app/componentes/sign-up/correo-contra/correo-contra.component.html"),
            styles: [__webpack_require__(/*! ./correo-contra.component.css */ "./src/app/componentes/sign-up/correo-contra/correo-contra.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CorreoContraComponent);
    return CorreoContraComponent;
}());



/***/ }),

/***/ "./src/app/componentes/sign-up/documento/documento.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/componentes/sign-up/documento/documento.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signup-container{\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tmargin: auto;\r\n\tpadding: 1.5rem;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n    justify-content: center;\r\n}\r\n.signup-container form{\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n}\r\n.parrafo{\r\n    font-family: \"Roboto\", sans-serif;\r\n    font-size: 2rem;\r\n    color:rgb(33, 150, 243);\r\n    justify-content: center;\r\n    font-weight: normal;\r\n    text-align: center;\r\n}\r\n@media (min-width:470px) {\r\n\t.card{\r\n\t\twidth: 423px;\r\n\t}\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvc2lnbi11cC9kb2N1bWVudG8vZG9jdW1lbnRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLHVCQUF1QjtDQUN2QixvQkFBb0I7SUFDakIsd0JBQXdCO0NBQzNCO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osY0FBYztDQUNkLG9CQUFvQjtDQUNwQix3QkFBd0I7Q0FDeEIsdUJBQXVCO0NBQ3ZCO0FBSUQ7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtDQUN0QjtBQUdEO0NBQ0M7RUFDQyxhQUFhO0VBQ2I7Q0FDRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3NpZ24tdXAvZG9jdW1lbnRvL2RvY3VtZW50by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ251cC1jb250YWluZXJ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHRwYWRkaW5nOiAxLjVyZW07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uc2lnbnVwLWNvbnRhaW5lciBmb3Jte1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5cclxuXHJcbi5wYXJyYWZve1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBjb2xvcjpyZ2IoMzMsIDE1MCwgMjQzKTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjQ3MHB4KSB7XHJcblx0LmNhcmR7XHJcblx0XHR3aWR0aDogNDIzcHg7XHJcblx0fVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/componentes/sign-up/documento/documento.component.html":
/*!************************************************************************!*\
  !*** ./src/app/componentes/sign-up/documento/documento.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-container\">\r\n\r\n    \r\n    \r\n    <form [formGroup]=\"documento\">\r\n\r\n    <h5 class=\"parrafo\">Documento de identificación</h5>\r\n    <mat-card class=\"card\">\r\n      \r\n\r\n        <mat-form-field class=\"inputs full-width\">\r\n            <mat-label>Genero</mat-label>\r\n            <mat-select #mode value=\"side\" formControlName=\"genero\"  required [(ngModel)]=\"generoUs\">\r\n               <mat-option value=\"Masculino\">Masculino</mat-option>\r\n              <mat-option value=\"Femenino\">Femenino</mat-option>\r\n              <mat-option value=\"Otro\">Otro</mat-option>\r\n            </mat-select>\r\n          </mat-form-field> \r\n\r\n\r\n        <mat-form-field class=\"inputs full-width\">\r\n            <input matInput placeholder=\"Número cédula:\" formControlName=\"cedula\" required [(ngModel)]=\"cedulaUs\">\r\n        </mat-form-field>\r\n\r\n\r\n        <mat-form-field class=\"inputs full-width\">\r\n            <mat-label>Lugar de expedición</mat-label>\r\n            <mat-select #mode value=\"side\" formControlName=\"lugarCedula\" required  [(ngModel)]=\"lugarCedulaUs\">\r\n              <mat-option value=\"Bogotá\">Bogotá</mat-option>\r\n              <mat-option value=\"Calí\">Calí</mat-option>\r\n              <mat-option value=\"Medellín\">Medellín</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n        </mat-card>\r\n\r\n        <button mat-flat-button class=\"btn\" (click)=\"Doc_clickBtnSiguiente()\" [disabled]=\"documento.invalid\">Siguiente</button>\r\n    </form>\r\n    \r\n\r\n</div>"

/***/ }),

/***/ "./src/app/componentes/sign-up/documento/documento.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/componentes/sign-up/documento/documento.component.ts ***!
  \**********************************************************************/
/*! exports provided: DocumentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentoComponent", function() { return DocumentoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



// Se importan los modulos para hacer la validación en los formularios. 
var DocumentoComponent = /** @class */ (function () {
    function DocumentoComponent(formBuilder) {
        this.Btn_documentoIden = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // Se instancia la clase FormBuilder en el constructor
        this.documento = formBuilder.group({
            'genero': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'cedula': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'lugarCedula': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            // Se ingresan los campos del formulario que se quieren validar
        });
    }
    DocumentoComponent.prototype.ngOnInit = function () {
    };
    DocumentoComponent.prototype.Doc_clickBtnSiguiente = function () {
        var infoCompDocumento = {
            Btn_Acti_documento: true,
            generoUsuario: this.generoUs,
            cedulaUsuario: this.cedulaUs,
            lugarUsuario: this.lugarCedulaUs
        };
        this.Btn_documentoIden.emit(infoCompDocumento);
        // se envía el evento con datos cuando el evento ocurre.
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DocumentoComponent.prototype, "Btn_documentoIden", void 0);
    DocumentoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documento',
            template: __webpack_require__(/*! ./documento.component.html */ "./src/app/componentes/sign-up/documento/documento.component.html"),
            styles: [__webpack_require__(/*! ./documento.component.css */ "./src/app/componentes/sign-up/documento/documento.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], DocumentoComponent);
    return DocumentoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/sign-up/fecha-nacimiento/fecha-nacimiento.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/componentes/sign-up/fecha-nacimiento/fecha-nacimiento.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signup-container{\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tmargin: auto;\r\n\tpadding: 1.5rem;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n    justify-content: center;\r\n}\r\n.signup-container form{\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n}\r\n.parrafo{\r\n    font-family: \"Roboto\", sans-serif;\r\n    font-size: 2rem;\r\n    color:rgb(33, 150, 243);\r\n    justify-content: center;\r\n    font-weight: normal;\r\n    text-align: center;\r\n}\r\n@media (min-width:470px) {\r\n\t.card{\r\n\t\twidth: 423px;\r\n\t}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvc2lnbi11cC9mZWNoYS1uYWNpbWllbnRvL2ZlY2hhLW5hY2ltaWVudG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsYUFBYTtDQUNiLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2QsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtJQUNqQix3QkFBd0I7Q0FDM0I7QUFDRDtDQUNDLFlBQVk7Q0FDWixjQUFjO0NBQ2Qsb0JBQW9CO0NBQ3BCLHdCQUF3QjtDQUN4Qix1QkFBdUI7Q0FDdkI7QUFJRDtJQUNJLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsbUJBQW1CO0NBQ3RCO0FBR0Q7Q0FDQztFQUNDLGFBQWE7RUFDYjtDQUNEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvc2lnbi11cC9mZWNoYS1uYWNpbWllbnRvL2ZlY2hhLW5hY2ltaWVudG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXAtY29udGFpbmVye1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRtYXJnaW46IGF1dG87XHJcblx0cGFkZGluZzogMS41cmVtO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnNpZ251cC1jb250YWluZXIgZm9ybXtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuXHJcblxyXG4ucGFycmFmb3tcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgY29sb3I6cmdiKDMzLCAxNTAsIDI0Myk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDo0NzBweCkge1xyXG5cdC5jYXJke1xyXG5cdFx0d2lkdGg6IDQyM3B4O1xyXG5cdH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/componentes/sign-up/fecha-nacimiento/fecha-nacimiento.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/sign-up/fecha-nacimiento/fecha-nacimiento.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-container\">\r\n\r\n    \r\n    \r\n    <form [formGroup]=\"fechaNacimiento\">\r\n\r\n    <h5 class=\"parrafo\">Fecha de nacimiento</h5>\r\n    <mat-card class=\"card\">\r\n      \r\n            <mat-form-field class=\"inputs full-width\">\r\n                    <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\" placeholder=\"Elegir fecha de nacimiento\" formControlName=\"nacimiento\" required [(ngModel)]=\"valorFechaNacimiento\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n            </mat-form-field>\r\n                  \r\n        \r\n\r\n        </mat-card>\r\n\r\n        <button mat-flat-button class=\"btn\" (click)=\"fechaNaci_clickBtnSiguiente()\" [disabled]=\"fechaNacimiento.invalid\" >Siguiente</button>\r\n    </form>\r\n    \r\n\r\n</div>"

/***/ }),

/***/ "./src/app/componentes/sign-up/fecha-nacimiento/fecha-nacimiento.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/sign-up/fecha-nacimiento/fecha-nacimiento.component.ts ***!
  \************************************************************************************/
/*! exports provided: FechaNacimientoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FechaNacimientoComponent", function() { return FechaNacimientoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var FechaNacimientoComponent = /** @class */ (function () {
    function FechaNacimientoComponent(formBuilder) {
        // minDate = new Date(2010, 10, 19);
        this.maxDate = new Date(2001, 0, 0);
        this.Btn_fechaNacimiento = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fechaNacimiento = formBuilder.group({
            'nacimiento': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    FechaNacimientoComponent.prototype.ngOnInit = function () {
    };
    FechaNacimientoComponent.prototype.fechaNaci_clickBtnSiguiente = function () {
        var ObjfechaNaci = {
            fechaNacimiento: this.valorFechaNacimiento,
            Btn_Acti_fechaNaci: true
        };
        this.Btn_fechaNacimiento.emit(ObjfechaNaci);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FechaNacimientoComponent.prototype, "Btn_fechaNacimiento", void 0);
    FechaNacimientoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fecha-nacimiento',
            template: __webpack_require__(/*! ./fecha-nacimiento.component.html */ "./src/app/componentes/sign-up/fecha-nacimiento/fecha-nacimiento.component.html"),
            styles: [__webpack_require__(/*! ./fecha-nacimiento.component.css */ "./src/app/componentes/sign-up/fecha-nacimiento/fecha-nacimiento.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], FechaNacimientoComponent);
    return FechaNacimientoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/sign-up/nom-ape-gene/nom-ape-gene.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/componentes/sign-up/nom-ape-gene/nom-ape-gene.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signup-container{\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tmargin: auto;\r\n\tpadding: 1.5rem;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n    justify-content: center;\r\n}\r\n.signup-container form{\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n}\r\n.parrafo{\r\n    font-family: \"Roboto\", sans-serif;\r\n    font-size: 2rem;\r\n    color:rgb(33, 150, 243);\r\n    justify-content: center;\r\n    font-weight: normal;\r\n    text-align: center;\r\n}\r\n@media (min-width:470px) {\r\n\t.card{\r\n\t\twidth: 423px;\r\n\t}\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvc2lnbi11cC9ub20tYXBlLWdlbmUvbm9tLWFwZS1nZW5lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLHVCQUF1QjtDQUN2QixvQkFBb0I7SUFDakIsd0JBQXdCO0NBQzNCO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osY0FBYztDQUNkLG9CQUFvQjtDQUNwQix3QkFBd0I7Q0FDeEIsdUJBQXVCO0NBQ3ZCO0FBSUQ7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtDQUN0QjtBQUdEO0NBQ0M7RUFDQyxhQUFhO0VBQ2I7Q0FDRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3NpZ24tdXAvbm9tLWFwZS1nZW5lL25vbS1hcGUtZ2VuZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ251cC1jb250YWluZXJ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHRwYWRkaW5nOiAxLjVyZW07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uc2lnbnVwLWNvbnRhaW5lciBmb3Jte1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5cclxuXHJcbi5wYXJyYWZve1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBjb2xvcjpyZ2IoMzMsIDE1MCwgMjQzKTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjQ3MHB4KSB7XHJcblx0LmNhcmR7XHJcblx0XHR3aWR0aDogNDIzcHg7XHJcblx0fVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/componentes/sign-up/nom-ape-gene/nom-ape-gene.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/sign-up/nom-ape-gene/nom-ape-gene.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-container\">\r\n\r\n    \r\n    \r\n    <form [formGroup]=\"apellidoNombre\">\r\n\r\n    <h5 class=\"parrafo\">Ingrese su nombre</h5>\r\n    <mat-card class=\"card\">\r\n      \r\n\r\n        <mat-form-field class=\"inputs full-width\">\r\n            <input matInput placeholder=\"Nombres: \" formControlName=\"nombre\" required [(ngModel)]=\"nombreUsuario\">\r\n        </mat-form-field>\r\n        \r\n        \r\n        <mat-form-field class=\"inputs full-width\">\r\n            <input matInput placeholder=\"Apellidos: \" formControlName=\"apellido\" required [(ngModel)]=\"apellidoUsuario\">\r\n                \r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"inputs full-width\">\r\n            <mat-label>Ciudad de residencia</mat-label>\r\n            <mat-select #mode value=\"side\" formControlName=\"ciudadResiden\" required [(ngModel)]=\"ciudadUsuario\">\r\n              <mat-option value=\"Bogotá\">Bogotá</mat-option>\r\n              <mat-option value=\"Calí\">Calí</mat-option>\r\n              <mat-option value=\"Medellín\">Medellín</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n        </mat-card>\r\n\r\n        <button mat-flat-button class=\"btn\"  (click)=\"clickBtnSiguiente()\" [disabled]=\"apellidoNombre.invalid\">Siguiente</button>\r\n    </form>\r\n    \r\n\r\n</div>"

/***/ }),

/***/ "./src/app/componentes/sign-up/nom-ape-gene/nom-ape-gene.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/componentes/sign-up/nom-ape-gene/nom-ape-gene.component.ts ***!
  \****************************************************************************/
/*! exports provided: NomApeGeneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NomApeGeneComponent", function() { return NomApeGeneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var NomApeGeneComponent = /** @class */ (function () {
    function NomApeGeneComponent(formBuilder) {
        this.Btn_nombreApeVisual = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.apellidoNombre = formBuilder.group({
            'nombre': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'apellido': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'ciudadResiden': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    NomApeGeneComponent.prototype.ngOnInit = function () {
    };
    NomApeGeneComponent.prototype.clickBtnSiguiente = function () {
        var Btn_Acti_nombreApeVisual = true;
        var infoComp = {
            nombreUs: this.nombreUsuario,
            apellidoUs: this.apellidoUsuario,
            ciudadUs: this.ciudadUsuario,
            Btn_Acti_nombreApeVisual: true
        };
        this.Btn_nombreApeVisual.emit(infoComp);
        // es un método del evento que se esta creando
        console.log(this.nombreUsuario);
        console.log(this.apellidoUsuario);
        console.log(this.ciudadUsuario);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NomApeGeneComponent.prototype, "Btn_nombreApeVisual", void 0);
    NomApeGeneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nom-ape-gene',
            template: __webpack_require__(/*! ./nom-ape-gene.component.html */ "./src/app/componentes/sign-up/nom-ape-gene/nom-ape-gene.component.html"),
            styles: [__webpack_require__(/*! ./nom-ape-gene.component.css */ "./src/app/componentes/sign-up/nom-ape-gene/nom-ape-gene.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], NomApeGeneComponent);
    return NomApeGeneComponent;
}());



/***/ }),

/***/ "./src/app/componentes/sign-up/sign-up.component.css":
/*!***********************************************************!*\
  !*** ./src/app/componentes/sign-up/sign-up.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/componentes/sign-up/sign-up.component.html":
/*!************************************************************!*\
  !*** ./src/app/componentes/sign-up/sign-up.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nom-ape-gene *ngIf=\"nombreApeVisual\" (Btn_nombreApeVisual)=\"MostrarNombreVisual($event)\"></app-nom-ape-gene>\r\n<app-documento *ngIf=\"documentoVisual\" (Btn_documentoIden)=\"mostrarDocumento($event)\"></app-documento>\r\n<app-fecha-nacimiento *ngIf=\"fechaNacivisuai\" (Btn_fechaNacimiento)= \"mostrarcorreoContra($event)\" ></app-fecha-nacimiento>\r\n<app-correo-contra *ngIf=\"correoContraseVisua\" (Btn_correoContrasena)=\"recibeCorreoContra($event)\"></app-correo-contra>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/componentes/sign-up/sign-up.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/componentes/sign-up/sign-up.component.ts ***!
  \**********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/usuarios.service */ "./src/app/services/usuarios.service.ts");
/* harmony import */ var _services_cedula_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cedula-usuario.service */ "./src/app/services/cedula-usuario.service.ts");




var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(usuariosService, cedulaUsuario) {
        this.usuariosService = usuariosService;
        this.cedulaUsuario = cedulaUsuario;
        this.nombreApeVisual = true;
        this.documentoVisual = false;
        this.fechaNacivisuai = false;
        this.correoContraseVisua = false;
    }
    SignUpComponent.prototype.ngOnInit = function () { };
    // Se envía el
    SignUpComponent.prototype.MostrarNombreVisual = function (datosFormNombreApe) {
        console.log(datosFormNombreApe);
        this.datosForm1 = datosFormNombreApe;
        this.nombreApeVisual = false;
        this.documentoVisual = true;
        this.fechaNacivisuai = false;
        this.correoContraseVisua = false;
    };
    SignUpComponent.prototype.mostrarDocumento = function (datosFormCedula) {
        this.datosForm2 = datosFormCedula;
        console.log(datosFormCedula);
        this.nombreApeVisual = false;
        this.documentoVisual = false;
        this.fechaNacivisuai = true;
        this.correoContraseVisua = false;
    };
    SignUpComponent.prototype.mostrarcorreoContra = function (datofechaNacimiento) {
        this.datosForm3 = datofechaNacimiento;
        console.log(datofechaNacimiento);
        this.nombreApeVisual = false;
        this.documentoVisual = false;
        this.fechaNacivisuai = false;
        this.correoContraseVisua = true;
    };
    SignUpComponent.prototype.recibeCorreoContra = function (datoCorreoContrase) {
        this.datosForm4 = datoCorreoContrase;
        console.log(datoCorreoContrase);
        console.log('último formulario capturado');
        var informacionUsuario = {
            cedulaPersona: this.datosForm2.cedulaUsuario,
            nombresPersona: this.datosForm1.nombreUs,
            apellidosPersona: this.datosForm1.apellidoUs,
            fechaNacimientoPersona: this.datosForm3.fechaNacimiento,
            correoPersona: this.datosForm4.correoUs,
            codigoDaneMunicipio: 6768
        };
        this.cedulaUsuario.guardarCedula(this.datosForm2.cedulaUsuario);
        this.usuariosService.enviarUsuarios('https://laborappi.herokuapp.com/api/laborapp/usuario/guardar', informacionUsuario).subscribe(function (res) {
            console.log(res);
            // this.getGames();
        }, function (err) { return console.error(err); });
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/componentes/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/componentes/sign-up/sign-up.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"], _services_cedula_usuario_service__WEBPACK_IMPORTED_MODULE_3__["CedulaUsuarioService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());

/**
 * Form 1

nombreUs:
apellidoUs:
ciudadUs:


Form2

generoUsuario:
cedulaUsuario:
lugarUsuario:


Form 3

fechaNacimiento:

Form 4

correoUs:
keyUs:
againKeyUs:
 *
 *
 */


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
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");







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
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/cedula-usuario.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/cedula-usuario.service.ts ***!
  \****************************************************/
/*! exports provided: CedulaUsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CedulaUsuarioService", function() { return CedulaUsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CedulaUsuarioService = /** @class */ (function () {
    function CedulaUsuarioService() {
        this.cedula = 0;
    }
    CedulaUsuarioService.prototype.guardarCedula = function (cedula) {
        this.cedula = cedula;
    };
    CedulaUsuarioService.prototype.obtenerCedual = function () {
        return this.cedula;
    };
    CedulaUsuarioService.prototype.resetCedual = function () {
        this.cedula = undefined;
    };
    CedulaUsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CedulaUsuarioService);
    return CedulaUsuarioService;
}());



/***/ }),

/***/ "./src/app/services/demandaPdf/demanda-pdf.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/demandaPdf/demanda-pdf.service.ts ***!
  \************************************************************/
/*! exports provided: DemandaPdfService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandaPdfService", function() { return DemandaPdfService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DemandaPdfService = /** @class */ (function () {
    function DemandaPdfService(http) {
        this.http = http;
        this.URL = 'https://laborappi.herokuapp.com/api/laborapp/demanda';
    }
    DemandaPdfService.prototype.generarPdf = function (nit, cedula) {
        return this.http.get(this.URL + "/generar/" + nit + "/" + cedula);
    };
    DemandaPdfService.prototype.enviarPdf = function (cedula) {
        return this.http.get(this.URL + "/enviar/" + cedula);
    };
    DemandaPdfService.prototype.descargarPdf = function (cedula) {
        return this.http.get(this.URL + "/descargar/" + cedula);
    };
    DemandaPdfService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DemandaPdfService);
    return DemandaPdfService;
}());



/***/ }),

/***/ "./src/app/services/demandadoJuridico/demandadojuridico.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/demandadoJuridico/demandadojuridico.service.ts ***!
  \*************************************************************************/
/*! exports provided: DemandadojuridicoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandadojuridicoService", function() { return DemandadojuridicoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DemandadojuridicoService = /** @class */ (function () {
    function DemandadojuridicoService(http) {
        this.http = http;
    }
    DemandadojuridicoService.prototype.getDemandadoJuridico = function (url) {
        return this.http.get(url);
    };
    DemandadojuridicoService.prototype.enviarDemandadoJuridico = function (url, demandadoJuridico) {
        return this.http.post(url, demandadoJuridico);
    };
    DemandadojuridicoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DemandadojuridicoService);
    return DemandadojuridicoService;
}());



/***/ }),

/***/ "./src/app/services/departamentos-municipios/departamentos-municipios.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/services/departamentos-municipios/departamentos-municipios.service.ts ***!
  \***************************************************************************************/
/*! exports provided: DepartamentosMunicipiosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartamentosMunicipiosService", function() { return DepartamentosMunicipiosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DepartamentosMunicipiosService = /** @class */ (function () {
    function DepartamentosMunicipiosService(http) {
        this.http = http;
        this.URL = 'https://www.datos.gov.co/resource/xdk5-pm3f.json';
    }
    DepartamentosMunicipiosService.prototype.getMunicipios = function () {
        return this.http.get("" + this.URL);
    };
    DepartamentosMunicipiosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DepartamentosMunicipiosService);
    return DepartamentosMunicipiosService;
}());



/***/ }),

/***/ "./src/app/services/usuarios.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/usuarios.service.ts ***!
  \**********************************************/
/*! exports provided: UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UsuariosService = /** @class */ (function () {
    function UsuariosService(http) {
        this.http = http;
    }
    // UrlApiCiudadCol = 'https://www.datos.gov.co/resource/xdk5-pm3f.json';
    // Url: any = this.UrlApiCiudadCol;
    UsuariosService.prototype.getUsuarios = function (url) {
        return this.http.get(url);
    };
    UsuariosService.prototype.enviarUsuarios = function (url, usuario) {
        return this.http.post(url, usuario);
    };
    UsuariosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UsuariosService);
    return UsuariosService;
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