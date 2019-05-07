(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-usuario-usuario-module"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Depricated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;return b.open("HEAD",a,!1),b.send(),200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||"object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}};f.saveAs=a.saveAs=a, true&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./src/app/paginas/usuario/contactar-abogado/contactar-abogado.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/paginas/usuario/contactar-abogado/contactar-abogado.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n\twidth: 100%;\n\theight: 91%;\n\tmargin: auto;\n\n\tpadding: 0 1.5rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.titulo{\n\tcolor: #2196f3;\n\tfont-size: 2rem;\n\tfont-weight: normal;\n\tline-height: 110%;\n\tmargin-top: 1rem;\n  text-align: center;\n}\n\ntextarea{\n  min-height: 50px;\n  max-height: 200px;\n\n}\n\n@media (min-width:470px) {\n\t.card{\n\t\twidth: 423px;\n\t}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2NvbnRhY3Rhci1hYm9nYWRvL2NvbnRhY3Rhci1hYm9nYWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLFlBQVk7O0NBRVosaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixnQkFBZ0I7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCOztBQUVuQjs7QUFFQTtDQUNDO0VBQ0MsWUFBWTtDQUNiO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL3VzdWFyaW8vY29udGFjdGFyLWFib2dhZG8vY29udGFjdGFyLWFib2dhZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDkxJTtcblx0bWFyZ2luOiBhdXRvO1xuXG5cdHBhZGRpbmc6IDAgMS41cmVtO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRpdHVsb3tcblx0Y29sb3I6ICMyMTk2ZjM7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0bGluZS1oZWlnaHQ6IDExMCU7XG5cdG1hcmdpbi10b3A6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGV4dGFyZWF7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjQ3MHB4KSB7XG5cdC5jYXJke1xuXHRcdHdpZHRoOiA0MjNweDtcblx0fVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/paginas/usuario/contactar-abogado/contactar-abogado.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/paginas/usuario/contactar-abogado/contactar-abogado.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h5 class=\"titulo\">¿Necesitas un abogado?</h5>\n\n  <mat-card class=\"card\">\n\n    <mat-form-field class=\"full-width\">\n      <textarea\n        #text\n        matInput\n        rows=\"5\"\n        placeholder=\"Ingrese una breve descricpción de su caso:\"></textarea>\n    </mat-form-field>\n\n  </mat-card>\n\n  <button\n    [disabled]=\"!text.value\"\n    mat-flat-button\n    class=\"btn\">\n    Enviar\n  </button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/paginas/usuario/contactar-abogado/contactar-abogado.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/paginas/usuario/contactar-abogado/contactar-abogado.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ContactarAbogadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactarAbogadoComponent", function() { return ContactarAbogadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactarAbogadoComponent = /** @class */ (function () {
    function ContactarAbogadoComponent() {
    }
    ContactarAbogadoComponent.prototype.ngOnInit = function () {
    };
    ContactarAbogadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactar-abogado',
            template: __webpack_require__(/*! ./contactar-abogado.component.html */ "./src/app/paginas/usuario/contactar-abogado/contactar-abogado.component.html"),
            styles: [__webpack_require__(/*! ./contactar-abogado.component.css */ "./src/app/paginas/usuario/contactar-abogado/contactar-abogado.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactarAbogadoComponent);
    return ContactarAbogadoComponent;
}());



/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/datos-contrato/datos-contrato.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/datos-contrato/datos-contrato.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n\twidth: 100%;\n\theight: auto;\n\tmargin: auto;\n\n\tpadding: 0 1.5rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n\n.titulo{\n\tcolor: #2196f3;\n\tfont-size: 2rem;\n\tfont-weight: normal;\n\tline-height: 110%;\n\tmargin-top: 1rem;\n\ttext-align: center;\n}\n\n\nform{\n  width: 100%;\n\theight: 100%;\n  display: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n\n.nombre-inputs{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n\n.half-width{\n  width: 49%;\n}\n\n\n.mb-1{\n\tmargin-bottom: 1rem;\n}\n\n\n.example-h2 {\n  margin: 10px;\n}\n\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n\n.example-margin {\n  margin: 0 10px;\n}\n\n\n@media (max-width: 470px) {\n\t.nombre-inputs{\n\t  display: flex;\n\t  flex-direction: column;\n\t  justify-content: space-between;\n\t}\n\t.half-width{\n\t  width: 100%;\n\t}\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2dlbmVyYXItZGVtYW5kYS9kYXRvcy1jb250cmF0by9kYXRvcy1jb250cmF0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixZQUFZOztDQUVaLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7OztBQUdBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7OztBQUVBO0VBQ0UsV0FBVztDQUNaLFlBQVk7RUFDWCxhQUFhO0NBQ2Qsc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7OztBQUVBO0VBQ0UsVUFBVTtBQUNaOzs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7OztBQUdBO0NBQ0M7R0FDRSxhQUFhO0dBQ2Isc0JBQXNCO0dBQ3RCLDhCQUE4QjtDQUNoQztDQUNBO0dBQ0UsV0FBVztDQUNiO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL3VzdWFyaW8vZ2VuZXJhci1kZW1hbmRhL2RhdG9zLWNvbnRyYXRvL2RhdG9zLWNvbnRyYXRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xuXHRtYXJnaW46IGF1dG87XG5cblx0cGFkZGluZzogMCAxLjVyZW07XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cbi50aXR1bG97XG5cdGNvbG9yOiAjMjE5NmYzO1xuXHRmb250LXNpemU6IDJyZW07XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdGxpbmUtaGVpZ2h0OiAxMTAlO1xuXHRtYXJnaW4tdG9wOiAxcmVtO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZvcm17XG4gIHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cbi5ub21icmUtaW5wdXRze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5oYWxmLXdpZHRoe1xuICB3aWR0aDogNDklO1xufVxuXG4ubWItMXtcblx0bWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmV4YW1wbGUtaDIge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5leGFtcGxlLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmV4YW1wbGUtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3MHB4KSB7XG5cdC5ub21icmUtaW5wdXRze1xuXHQgIGRpc3BsYXk6IGZsZXg7XG5cdCAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdH1cblx0LmhhbGYtd2lkdGh7XG5cdCAgd2lkdGg6IDEwMCU7XG5cdH1cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/datos-contrato/datos-contrato.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/datos-contrato/datos-contrato.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formularioContrato\" class=\"full-width\" (ngSubmit)=\"subirDatosContrato()\">\n\n<div class=\"container\">\n\n  <h5 class=\"titulo\">Información del Contrato Laboral</h5>\n\n  <mat-card class=\"card\">\n\n    <div class=\"full-width nombre-inputs \">\n\n      <mat-form-field class=\"half-width\">\n         <mat-select\n           #tipoDeContrato\n           placeholder=\"Tipo de Contrato\"\n           formControlName=\"tipoContrato\">\n\n           <mat-option #opcion value=\"TI\">Termino Indefinido</mat-option>\n           <mat-option value=\"PS\">Prestación de Servicios</mat-option>\n           <mat-option value=\"TF\">Termino Fijo</mat-option>\n           <mat-option value=\"OL\">Obra Labor</mat-option>\n\n         </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"half-width\">\n        <input\n          type=\"tel\"\n          matInput\n          placeholder=\"Ultimo salario devengado\"\n          formControlName=\"ultimoSalario\"\n          required >\n      </mat-form-field>\n\n    </div>\n\n    <div class=\"full-width nombre-inputs \">\n\n      <mat-form-field class=\"half-width\">\n        <input \n          matInput\n          [min]=\"minDate\"\n          [max]=\"hoy\"\n          [matDatepicker]=\"picker1\" \n          placeholder=\"Fecha Inicio de Contrato\" \n          (click)=\"picker1.open()\" \n          (touchend)=\"picker1.open()\"\n          formControlName=\"fechaInicioContrato\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker touchUi #picker1></mat-datepicker>\n      </mat-form-field>\n\n      <mat-form-field class=\"half-width\">\n        <input \n          matInput \n          [min]=\"picker1._validSelected\"\n          [max]=\"hoy\"\n          [matDatepicker]=\"picker2\" \n          placeholder=\"Fecha Final de Contrato\" \n          (touchend)=\"picker2.open()\"\n          (click)=\"picker2.open()\" \n          formControlName=\"fechaFinalContrato\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n        <mat-datepicker touchUi #picker2></mat-datepicker>\n      </mat-form-field>\n      \n    </div>\n\n    <div class=\"full-width\" >\n      <mat-form-field class=\"full-width\" >\n        <textarea matInput placeholder=\"Descripción breve de funciones\" formControlName=\"descripcionFunciones\"></textarea>\n      </mat-form-field>\n    </div>\n\n  </mat-card>\n\n  <button mat-flat-button class=\"btn btn-success\"\n    type=\"submit\"\n    [disabled]=\"!this.formularioContrato.valid\">\n    Continuar\n  </button>\n\n</div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/datos-contrato/datos-contrato.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/datos-contrato/datos-contrato.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DatosContratoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosContratoComponent", function() { return DatosContratoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_ContratoLaboral_contrato_laboral_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/ContratoLaboral/contrato-laboral.service */ "./src/app/services/ContratoLaboral/contrato-laboral.service.ts");
/* harmony import */ var _services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/localStorage/local-storage.service */ "./src/app/services/localStorage/local-storage.service.ts");
/* harmony import */ var _services_demandaNatural_demanda_natural_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/demandaNatural/demanda-natural.service */ "./src/app/services/demandaNatural/demanda-natural.service.ts");
/* harmony import */ var _services_demandaJuridica_demanda_juridica_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/demandaJuridica/demanda-juridica.service */ "./src/app/services/demandaJuridica/demanda-juridica.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var DatosContratoComponent = /** @class */ (function () {
    function DatosContratoComponent(formBuilder, router_, activatedRoute, contratoLaboralService, localStorageService, snackBar, demandaNaturalService, demandaJuridicaService) {
        this.formBuilder = formBuilder;
        this.router_ = router_;
        this.activatedRoute = activatedRoute;
        this.contratoLaboralService = contratoLaboralService;
        this.localStorageService = localStorageService;
        this.snackBar = snackBar;
        this.demandaNaturalService = demandaNaturalService;
        this.demandaJuridicaService = demandaJuridicaService;
        this.hoy = new Date();
        this.minDate = new Date(this.hoy.getFullYear() - 5, this.hoy.getMonth(), this.hoy.getDate());
        this.formularioContrato = this.formBuilder.group({
            'tipoContrato': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'fechaInicioContrato': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'fechaFinalContrato': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'ultimoSalario': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]+$/)])],
            'descripcionFunciones': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(15)])]
        });
        this.FormCheked = true;
    }
    DatosContratoComponent.prototype.subirDatosContrato = function () {
        var _this = this;
        this.contratoLaboralService.guardarContratoLaboral(this.obtenerDataContratoLaboral())
            .subscribe(function (result) {
            console.log(result);
            _this.snackBar.open('guardado exitosamente', '', {
                duration: 1000,
            });
            var dataContrato = {
                general: _this.DataContratoLaboral,
                id: result.contratoLaboral.idContrato
            };
            dataContrato = JSON.stringify(dataContrato);
            _this.localStorageService.setDataInLocalStorage('contratoData', dataContrato);
            if (_this.localStorageService.getSeleccionConflicto() === 'natural') {
                _this.demandaNaturalService.guardarDemandaNatural(_this.obtenerDataDemandaNatural()).
                    subscribe(function (res_) {
                    console.log(res_);
                    console.log("idDemandaNatural:" + res_.demandaPersonaNatural.idDemandaPersonaNatural);
                    _this.localStorageService.setDataInLocalStorage('idDemandaNatural', res_.demandaPersonaNatural.idDemandaPersonaNatural);
                }, function (error_) {
                    _this.snackBar.open('Problemas al generar contrato con persona natural', '', {
                        duration: 1000,
                    });
                });
            }
            else if (_this.localStorageService.getSeleccionConflicto() === 'juridico') {
                console.log("informaci\u00F3n del contrato: " + _this.localStorageService.getDataContrato('id'));
                _this.demandaJuridicaService.guardarDemandaNatural(_this.obtenerDataDemandaJuridica()).
                    subscribe(function (res) {
                    console.log(res);
                    console.log("idEmpresa:" + res.demandaEmpresa.idDemandaEmpresa);
                    _this.localStorageService.setDataInLocalStorage('idDemandaEmpresa', res.demandaEmpresa.idDemandaEmpresa);
                }, function (error) {
                    _this.snackBar.open('Problemas al generar contrato con empresa', '', {
                        duration: 1000,
                    });
                });
            }
            _this.router_.navigate(['../seleccion-conflictos'], { relativeTo: _this.activatedRoute });
        }, function (err) {
            console.log(err);
            _this.snackBar.open('Problemas en la inserción de datos de contrato laboral', '', {
                duration: 1000,
            });
        });
        //
        var dataContract;
        dataContract = {
            dataContract_: this.formularioContrato.value
        };
    };
    DatosContratoComponent.prototype.obtenerDiaActual = function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        today = new Date(date);
        return today;
    };
    DatosContratoComponent.prototype.obtenerDataDemandaNatural = function () {
        var demandaNatural = {
            fechaDemandaPersonaNatural: this.obtenerDiaActual(),
            codigoCiudad: this.localStorageService.getDataUsuario('codigoCiudad'),
            tipoDocumentoPersona: this.localStorageService.getDataUsuario('tipoDocumento'),
            numeroDocumentoPersona: this.localStorageService.getDataUsuario('numeroDocumento'),
            IdPersonaNatural: this.localStorageService.getDataDemandadoNatural('idPersona'),
            idContrato: this.localStorageService.getDataContrato('id'),
        };
        return demandaNatural;
    };
    DatosContratoComponent.prototype.obtenerDataContratoLaboral = function () {
        if (this.localStorageService.getSeleccionConflicto() === 'juridico') {
            this.DataContratoLaboral = {
                tipoContrato: this.formularioContrato.value.tipoContrato,
                fechaInicioContrato: this.formularioContrato.value.fechaInicioContrato,
                fechaFinalContrato: this.formularioContrato.value.fechaFinalContrato,
                ultimoSalario: this.formularioContrato.value.ultimoSalario,
                descripcionFunciones: this.formularioContrato.value.descripcionFunciones,
                tipoDocumentoPersona: this.localStorageService.getDataUsuario('tipoDocumento'),
                numeroDocumentoPersona: this.localStorageService.getDataUsuario('numeroDocumento'),
                NItEmpresa: this.localStorageService.getDataEmpresa('nit')
            };
        }
        else {
            this.DataContratoLaboral = {
                tipoContrato: this.formularioContrato.value.tipoContrato,
                fechaInicioContrato: this.formularioContrato.value.fechaInicioContrato,
                fechaFinalContrato: this.formularioContrato.value.fechaFinalContrato,
                ultimoSalario: this.formularioContrato.value.ultimoSalario,
                descripcionFunciones: this.formularioContrato.value.descripcionFunciones,
                tipoDocumentoPersona: this.localStorageService.getDataUsuario('tipoDocumento'),
                numeroDocumentoPersona: this.localStorageService.getDataUsuario('numeroDocumento'),
                IdPersonaNatural: this.localStorageService.getDataDemandadoNatural('idPersona')
            };
        }
        return this.DataContratoLaboral;
    };
    DatosContratoComponent.prototype.obtenerDataDemandaJuridica = function () {
        var dataDemandaJuridica = {
            fechaDemandaEmpresa: this.obtenerDiaActual(),
            codigoCiudad: this.localStorageService.getDataUsuario('codigoCiudad'),
            tipoDocumentoPersona: this.localStorageService.getDataUsuario('tipoDocumento'),
            numeroDocumentoPersona: this.localStorageService.getDataUsuario('numeroDocumento'),
            NItEmpresa: parseInt(this.localStorageService.getDataEmpresa('nit'), 10),
            idContrato: this.localStorageService.getDataContrato('id'),
        };
        console.log(dataDemandaJuridica);
        return dataDemandaJuridica;
    };
    DatosContratoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-datos-contrato',
            template: __webpack_require__(/*! ./datos-contrato.component.html */ "./src/app/paginas/usuario/generar-demanda/datos-contrato/datos-contrato.component.html"),
            styles: [__webpack_require__(/*! ./datos-contrato.component.css */ "./src/app/paginas/usuario/generar-demanda/datos-contrato/datos-contrato.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_ContratoLaboral_contrato_laboral_service__WEBPACK_IMPORTED_MODULE_4__["ContratoLaboralService"],
            _services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"],
            _services_demandaNatural_demanda_natural_service__WEBPACK_IMPORTED_MODULE_6__["DemandaNaturalService"],
            _services_demandaJuridica_demanda_juridica_service__WEBPACK_IMPORTED_MODULE_7__["DemandaJuridicaService"]])
    ], DatosContratoComponent);
    return DatosContratoComponent;
}());



/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/datos-demandado/datos-demandado.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/datos-demandado/datos-demandado.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".generar-pdf-container{\n\twidth: 100%;\n\theight: auto;\n\tmargin: auto;\n\n\tpadding: 0 1.5rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.tooltip{\n\tmargin-left: 1rem;\n}\n\n.titulo{\n\tcolor: #2196f3;\n\tfont-size: 2rem;\n\tfont-weight: normal;\n\tline-height: 110%;\n\tmargin-top: 1rem;\n}\n\n.mat-h1{\n\tfont-size: 1.7rem;\n\ttext-align: center;\n}\n\n.mat-body{\n\tfont-size: 1.1rem;\n\ttext-align: justify;\n}\n\n.mt-1{\n\tmargin-top: 1rem\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2dlbmVyYXItZGVtYW5kYS9kYXRvcy1kZW1hbmRhZG8vZGF0b3MtZGVtYW5kYWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLFlBQVk7O0NBRVosaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL3VzdWFyaW8vZ2VuZXJhci1kZW1hbmRhL2RhdG9zLWRlbWFuZGFkby9kYXRvcy1kZW1hbmRhZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nZW5lcmFyLXBkZi1jb250YWluZXJ7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG5cdG1hcmdpbjogYXV0bztcblxuXHRwYWRkaW5nOiAwIDEuNXJlbTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50b29sdGlwe1xuXHRtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnRpdHVsb3tcblx0Y29sb3I6ICMyMTk2ZjM7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0bGluZS1oZWlnaHQ6IDExMCU7XG5cdG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5tYXQtaDF7XG5cdGZvbnQtc2l6ZTogMS43cmVtO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtYm9keXtcblx0Zm9udC1zaXplOiAxLjFyZW07XG5cdHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5tdC0xe1xuXHRtYXJnaW4tdG9wOiAxcmVtXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/datos-demandado/datos-demandado.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/datos-demandado/datos-demandado.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"generar-pdf-container mt-1\" *ngIf=\"informacion\">\n\n  <mat-card class=\"card\">\n\n    <h2 class=\"mat-h1\">Antes de iniciar, es importante que conozcas esto</h2>\n\n    <h5 class=\"mat-title\">Persona natural</h5>\n    <p class=\"mat-body\">Si su relación laboral surgió, como producto de una labor desempeñada por usted, para un ser humano mas no para una empresa. La persona natural se identifica con el nombre y número de cedula de ciudadanía. </p>\n\n\n    <h5  class=\"mat-title\">Persona jurídica</h5>\n    <p class=\"mat-body\">Corresponde al más común y se logra categorizar si usted como empleado, realizo o realiza labores para una empresa, entendiéndose está, como una organización en cuyo objetivo se encuentre una actividad económica y lucrativa. La persona jurídica se identifica con la razón social y el número de identificación tributaria NIT. </p>\n  </mat-card>\n\n  <button\n    (click)=\"informacion = false\"\n    mat-flat-button\n    class=\"btn\">\n    Siguiente\n  </button>\n\n</div>\n<div *ngIf=\"!informacion\" class=\"generar-pdf-container\">\n\n  <h5 class=\"titulo\">Iniciar Demanda</h5>\n\n  <mat-card class=\"card\">\n\n    <!-- Tipo de demanda -->\n    <mat-form-field class=\"full-width\">\n\n      <mat-select\n        #seleccion\n        placeholder=\"Tipo de Persona\"\n        [(value)]=\"opcion\">\n\n        <mat-option value=\"opcion1\">Persona Juridica</mat-option>\n        <mat-option value=\"opcion2\">Persona Natural</mat-option>\n\n      </mat-select>\n      <mat-icon\n        class=\"tooltip\"\n        matSuffix\n        matTooltip=\"Elija la persona a demandar\">\n        help\n      </mat-icon>\n    </mat-form-field>\n\n\n\n    <!-- Persona de tipo Juridica -->\n\n    <app-demanda-juridica\n      class=\"full-width\"\n      *ngIf=\"seleccion.value == 'opcion1'\">\n    </app-demanda-juridica>\n\n    <!-- persona de tipo Natural -->\n\n    <app-demanda-natural\n      class=\"full-width\"\n      *ngIf=\"seleccion.value == 'opcion2'\">\n    </app-demanda-natural>\n\n\n  </mat-card>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/datos-demandado/datos-demandado.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/datos-demandado/datos-demandado.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DatosDemandadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosDemandadoComponent", function() { return DatosDemandadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DatosDemandadoComponent = /** @class */ (function () {
    function DatosDemandadoComponent() {
        this.opcion = 'opcion1';
        this.informacion = true;
    }
    DatosDemandadoComponent.prototype.ngOnInit = function () {
    };
    DatosDemandadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-datos-demandado',
            template: __webpack_require__(/*! ./datos-demandado.component.html */ "./src/app/paginas/usuario/generar-demanda/datos-demandado/datos-demandado.component.html"),
            styles: [__webpack_require__(/*! ./datos-demandado.component.css */ "./src/app/paginas/usuario/generar-demanda/datos-demandado/datos-demandado.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DatosDemandadoComponent);
    return DatosDemandadoComponent;
}());



/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-juridica/demanda-juridica.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-juridica/demanda-juridica.component.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.nombre-inputs {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.half-width {\n  width: 49%;\n}\n\n@media (max-width: 470px) {\n  .nombre-inputs {\n    flex-direction: column;\n  }\n  .half-width {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2dlbmVyYXItZGVtYW5kYS9kYXRvcy1kZW1hbmRhZG8vZGVtYW5kYS1qdXJpZGljYS9kZW1hbmRhLWp1cmlkaWNhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2dlbmVyYXItZGVtYW5kYS9kYXRvcy1kZW1hbmRhZG8vZGVtYW5kYS1qdXJpZGljYS9kZW1hbmRhLWp1cmlkaWNhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ub21icmUtaW5wdXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaGFsZi13aWR0aCB7XG4gIHdpZHRoOiA0OSU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0NzBweCkge1xuICAubm9tYnJlLWlucHV0cyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuaGFsZi13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-juridica/demanda-juridica.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-juridica/demanda-juridica.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form [formGroup]=\"formularioJuridica\" class=\"full-width\" (ngSubmit)=\"correrPrueba()\">this.formularioJuridica.value.checkedDatosRepresentante -->\n <form [formGroup]=\"formularioJuridica\" class=\"full-width\" (ngSubmit)=\"correrPrueba(representante._checked)\"> \n    <div class=\"full-width nombre-inputs\">\n      <mat-form-field class=\"half-width\">\n        <input matInput\n          placeholder=\"Razón Social\"\n          formControlName=\"razonSocial\"\n          required>\n\n        <mat-icon\n          class=\"tooltip\"\n          matSuffix\n          matTooltip=\"Nombre de la empresa\">\n          help\n        </mat-icon>\n      </mat-form-field>\n\n      <mat-form-field class=\"half-width\">\n        <input matInput\n          placeholder=\"NIT\"\n          formControlName=\"nit\"\n          required>\n\n        <mat-icon\n          class=\"tooltip\"\n          matSuffix\n          matTooltip=\"Número de Identificacion Tributario\">\n          help\n        </mat-icon>\n      </mat-form-field>\n    </div>\n\n\n    <div class=\"full-width\" formGroupName=\"ubicacion\">\n\n\n      <mat-form-field class=\"full-width\">\n        <input  matInput placeholder=\"Dirección\" formControlName=\"direccion\" required>\n      </mat-form-field>\n\n      <div class=\"full-width nombre-inputs\">\n\n\n        <mat-form-field class=\"half-width\">\n          <mat-select placeholder=\"Departamento\" formControlName=\"departamento\" required>\n            <!-- <mat-option *ngFor=\"let d of listadoDepartamentos\"  value=\"{{ d.departamento }}\">{{ d.departamento }}</mat-option> -->\n            <mat-option value=\"opcion\">Opcion</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field class=\"half-width\">\n          <mat-select placeholder=\"Municipio\" formControlName=\"municipio\" required>\n            <!-- <mat-option *ngFor=\"let dYM of listDepartamentosYMunicipios\"  value=\"{{ dYM.municipio }}\">{{ dYM.municipio }}</mat-option> -->\n            <mat-option value=\"opcion\">Opcion</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n      </div>\n\n    </div>\n\n\n    <div class=\"full-width nombre-inputs mb-1\">\n\n\n      <mat-form-field class=\"half-width\">\n        <input matInput placeholder=\"Email\" formControlName=\"email\" required>\n        <mat-error *ngIf=\"formularioJuridica.get('email').invalid\">\n          {{getErrorMessage()}}\n        </mat-error>\n      </mat-form-field>\n\n\n      <mat-form-field class=\"half-width\">\n\n        <input type=\"tel\" matInput placeholder=\"Telefono\" formControlName=\"telefono\" required>\n\n      </mat-form-field>\n\n\n    </div>\n\n    <div class=\"full-width mb-1\">\n\n      <mat-checkbox #representante\n      (click)=\"invertir()\"\n      >\n        Sabe usted los datos del representante legal\n      </mat-checkbox>\n\n    </div>\n\n\n    <!-- Representante legal formControlName=\"checkedDatosRepresentante\" -->\n <!-- Aquí marca error  -->\n    <app-representante\n    [hidden]=\"chequeado\"\n    \n      (representanteFormulario)=\"eventoHijoFormulario($event)\"\n      class=\"full-width\">\n    </app-representante>\n\n\n<!-- Aquí marca error  this.formularioJuridica.value.checkedDatosRepresentante-->\n  <button mat-flat-button class=\"btn\"\n    type=\"submit\" \n    [disabled]=\"verificar(representante._checked)\" >\n    Continuar\n  </button>\n \n</form>\n"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-juridica/demanda-juridica.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-juridica/demanda-juridica.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: DemandaJuridicaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandaJuridicaComponent", function() { return DemandaJuridicaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/service.index */ "./src/app/services/service.index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services/localStorage/local-storage.service */ "./src/app/services/localStorage/local-storage.service.ts");








var DemandaJuridicaComponent = /** @class */ (function () {
    function DemandaJuridicaComponent(formBuilder, demandadoService, demandaPdfService, router, snackBar, activatedRoute, localStorageService) {
        this.formBuilder = formBuilder;
        this.demandadoService = demandadoService;
        this.demandaPdfService = demandaPdfService;
        this.router = router;
        this.snackBar = snackBar;
        this.activatedRoute = activatedRoute;
        this.localStorageService = localStorageService;
        this.chequeado = true;
        this.formularioJuridica = this.formBuilder.group({
            'razonSocial': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'nit': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[0-9]+$/)])],
            'telefono': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[0-9]+$/)])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email])],
            'ubicacion': this.formBuilder.group({
                'direccion': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                'departamento': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                'municipio': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
        });
    }
    DemandaJuridicaComponent.prototype.invertir = function () {
        this.chequeado ? this.chequeado = false : this.chequeado = true;
    };
    DemandaJuridicaComponent.prototype.ngOnInit = function () { };
    DemandaJuridicaComponent.prototype.ngAfterContentChecked = function () { };
    DemandaJuridicaComponent.prototype.eventoHijoFormulario = function (e) {
        this.formularioRepresentante = e;
        // console.log(e.controls);
    };
    DemandaJuridicaComponent.prototype.guardarDemandado = function (cheked) {
        var _this = this;
        var objetoDemandadoJuridico;
        if (cheked) {
            this.formularioRepresentante = this.formularioRepresentante;
            this.nombresPersona = this.formularioRepresentante.value.nombre;
            this.apellidosPersona = this.formularioRepresentante.value.apellido;
            this.tipoDocumentoPersona = this.formularioRepresentante.value.documento.tipoDeDocumento;
            this.numeroDocumentoPersona = parseInt(this.formularioRepresentante.value.documento.numeroDeDocumento, 10);
            // console.log(this.formularioRepresentante.value)
            objetoDemandadoJuridico = {
                NItEmpresa: this.formularioJuridica.value.nit,
                nombreEmpresaRS: this.formularioJuridica.value.razonSocial,
                direccionEmpresa: this.formularioJuridica.value.ubicacion.direccion,
                telefonoEmpresa: this.formularioJuridica.value.telefono,
                emailEmpresa: this.formularioJuridica.value.email,
                codigoCiudad: 8,
                tipoDocumentoPersona: this.tipoDocumentoPersona,
                numeroDocumentoPersona: this.numeroDocumentoPersona,
                nombresPersona: this.nombresPersona,
                apellidosPersona: this.apellidosPersona
            };
            console.log('CHECKEADO');
        }
        else {
            objetoDemandadoJuridico = {
                NItEmpresa: this.formularioJuridica.value.nit,
                nombreEmpresaRS: this.formularioJuridica.value.razonSocial,
                direccionEmpresa: this.formularioJuridica.value.ubicacion.direccion,
                telefonoEmpresa: this.formularioJuridica.value.telefono,
                emailEmpresa: this.formularioJuridica.value.email,
                codigoCiudad: 8,
            };
            console.log('No Checkeado');
        }
        // console.log(objetoDemandadoJuridico);
        this.demandadoService.guardarDemandadoJuridico(objetoDemandadoJuridico)
            .subscribe(function (res) {
            // await this.generarPdf();
            console.log(res);
            _this.snackBar.open('guardado exitosamente', '', {
                duration: 1000,
            });
            localStorage.setItem('demandadoJuridico', JSON.stringify(objetoDemandadoJuridico));
            _this.localStorageService.setDataInLocalStorage('seleccionDemandado', 'juridico');
            _this.router.navigate(['../datos-contrato'], { relativeTo: _this.activatedRoute });
        }, function (err) {
            console.log(err);
            _this.snackBar.open('empresa ya existe', '', {
                duration: 1000,
            });
        });
    };
    DemandaJuridicaComponent.prototype.generarPdf = function () {
        var _this = this;
        var nit = this.formularioJuridica.value.nit;
        this.demandaPdfService.generarPdf(nit)
            .subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(res);
                        this.router.navigate(['../datos-contrato'], { relativeTo: this.activatedRoute });
                        return [4 /*yield*/, this.enviarPdf()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.descargarPdf()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }, function (err) {
            console.log(err);
        });
    };
    DemandaJuridicaComponent.prototype.enviarPdf = function () {
        this.demandaPdfService.enviarPdf()
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    DemandaJuridicaComponent.prototype.descargarPdf = function () {
        this.demandaPdfService.descargarPdf()
            .subscribe(function (doc) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(doc, 'demanda.pdf');
        }, function (err) {
            console.log(err);
        });
    };
    DemandaJuridicaComponent.prototype.correrPrueba = function (cheked) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.guardarDemandado(cheked);
                return [2 /*return*/];
            });
        });
    };
    DemandaJuridicaComponent.prototype.verificar = function (cheked) {
        // if ( cheked && (!this.formularioJuridica.valid )) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-demanda-juridica',
            template: __webpack_require__(/*! ./demanda-juridica.component.html */ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-juridica/demanda-juridica.component.html"),
            styles: [__webpack_require__(/*! ./demanda-juridica.component.css */ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-juridica/demanda-juridica.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_service_index__WEBPACK_IMPORTED_MODULE_3__["DemandadoService"],
            _services_service_index__WEBPACK_IMPORTED_MODULE_3__["DemandaPdfService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]])
    ], DemandaJuridicaComponent);
    return DemandaJuridicaComponent;
}());



/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-juridica/representante/representante.component.css":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-juridica/representante/representante.component.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".representante{\n  width: 100%;\n\theight: 100%;\n  display: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.nombre-inputs{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.half-width{\n  width: 49%;\n}\n\n@media (max-width: 470px) {\n  .nombre-inputs {\n    flex-direction: column;\n  }\n  .half-width {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2dlbmVyYXItZGVtYW5kYS9kYXRvcy1kZW1hbmRhZG8vZGVtYW5kYS1qdXJpZGljYS9yZXByZXNlbnRhbnRlL3JlcHJlc2VudGFudGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7Q0FDWixZQUFZO0VBQ1gsYUFBYTtDQUNkLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsdUJBQXVCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL3VzdWFyaW8vZ2VuZXJhci1kZW1hbmRhL2RhdG9zLWRlbWFuZGFkby9kZW1hbmRhLWp1cmlkaWNhL3JlcHJlc2VudGFudGUvcmVwcmVzZW50YW50ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcHJlc2VudGFudGV7XG4gIHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubm9tYnJlLWlucHV0c3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaGFsZi13aWR0aHtcbiAgd2lkdGg6IDQ5JTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3MHB4KSB7XG4gIC5ub21icmUtaW5wdXRzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5oYWxmLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-juridica/representante/representante.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-juridica/representante/representante.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"formularioRepresentante\" class=\"full-width representante mb-1\">\n\n  <div class=\"full-width nombre-inputs\">\n    <mat-form-field class=\"half-width\">\n      <input matInput placeholder=\"Nombre\"  formControlName=\"nombre\" required>\n    </mat-form-field>\n\n    <mat-form-field class=\"half-width\">\n      <input matInput placeholder=\"Apellido\" formControlName=\"apellido\" required>\n    </mat-form-field>\n  </div>\n\n  <div formGroupName=\"documento\" class=\"full-width nombre-inputs\">\n\n    <mat-form-field class=\"half-width\">\n      <mat-select placeholder=\"Tipo de Documento\" #tipoDeDocumento  formControlName=\"tipoDeDocumento\" >\n        <mat-option #opcionCC value=\"CC\">Cedula de Ciudadania</mat-option>\n        <mat-option value=\"CE\">Cedula de Exptranjeria</mat-option>\n        <mat-option value=\"Pasaporte\">Pasaporte</mat-option>\n        <mat-option value=\"Carnet Diplomatico\">Carnet Diplomatico</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"half-width\">\n      <input type=\"tel\" matInput placeholder=\"{{ tipoDeDocumento.value || opcionCC.value }}\" formControlName=\"numeroDeDocumento\" required>\n    </mat-form-field>\n\n  </div>\n\n\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Email\" formControlName=\"email\"  required>\n    <mat-error *ngIf=\"formularioRepresentante.get('email').invalid\">{{getErrorMessage()}}</mat-error>\n  </mat-form-field>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-juridica/representante/representante.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-juridica/representante/representante.component.ts ***!
  \***************************************************************************************************************************/
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
        //this.representanteFormulario.emit(this.formularioRepresentante);
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
            template: __webpack_require__(/*! ./representante.component.html */ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-juridica/representante/representante.component.html"),
            styles: [__webpack_require__(/*! ./representante.component.css */ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-juridica/representante/representante.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RepresentanteComponent);
    return RepresentanteComponent;
}());



/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-natural/demanda-natural.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-natural/demanda-natural.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nform{\n  width: 100%;\n\theight: 100%;\n  display: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n\n.nombre-inputs{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n\n.half-width{\n  width: 49%;\n}\n\n\n.mb-1{\n\tmargin-bottom: 1rem;\n}\n\n\n@media (max-width: 470px) {\n  .nombre-inputs {\n    flex-direction: column;\n  }\n  .half-width {\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2dlbmVyYXItZGVtYW5kYS9kYXRvcy1kZW1hbmRhZG8vZGVtYW5kYS1uYXR1cmFsL2RlbWFuZGEtbmF0dXJhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7Q0FDWixZQUFZO0VBQ1gsYUFBYTtDQUNkLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsdUJBQXVCO0FBQ3hCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOzs7QUFHQTtFQUNFLFVBQVU7QUFDWjs7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7OztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2dlbmVyYXItZGVtYW5kYS9kYXRvcy1kZW1hbmRhZG8vZGVtYW5kYS1uYXR1cmFsL2RlbWFuZGEtbmF0dXJhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5mb3Jte1xuICB3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuXG4ubm9tYnJlLWlucHV0c3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5cbi5oYWxmLXdpZHRoe1xuICB3aWR0aDogNDklO1xufVxuXG4ubWItMXtcblx0bWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3MHB4KSB7XG4gIC5ub21icmUtaW5wdXRzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5oYWxmLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-natural/demanda-natural.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-natural/demanda-natural.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form\n  [formGroup]=\"formularioNatural\"\n  class=\"full-width\"\n  (ngSubmit)=\"log()\">\n\n\n\n  <div class=\"full-width nombre-inputs\">\n    <mat-form-field class=\"half-width\">\n      <input\n        matInput\n        placeholder=\"Nombre\"\n        formControlName=\"nombre\"\n        required>\n    </mat-form-field>\n\n    <mat-form-field class=\"half-width\">\n      <input\n        matInput\n        placeholder=\"Apellido\"\n        formControlName=\"apellido\"\n        required>\n    </mat-form-field>\n  </div>\n\n\n  <div class=\"full-width\" >\n\n\n    <mat-form-field class=\"full-width\">\n      <input\n        matInput\n        placeholder=\"Dirección\"\n        formControlName=\"direccion\"\n        required>\n    </mat-form-field>\n\n    <div class=\"full-width nombre-inputs\">\n\n      <mat-form-field class=\"half-width\">\n        <mat-select\n          placeholder=\"Departamento\"\n          formControlName=\"departamento\">\n\n          <mat-option value=\"option\">Option</mat-option>\n\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"half-width\">\n        <mat-select\n          placeholder=\"Ciudad\"\n          formControlName=\"ciudad\">\n\n          <mat-option value=\"option\">Option</mat-option>\n\n        </mat-select>\n      </mat-form-field>\n\n    </div>\n\n  </div>\n\n\n  <div  class=\"full-width nombre-inputs\">\n\n    <mat-form-field class=\"half-width\">\n       <mat-select\n         #tipoDeDocumento\n         placeholder=\"Tipo de Documento\"\n         formControlName=\"tipoDeDocumento\" >\n\n         <mat-option #opcionCC value=\"cedulaCiudadania\">Cedula de Ciudadania</mat-option>\n         <mat-option value=\"cedulaExtranjeria\">Cedula de Exptranjeria</mat-option>\n         <mat-option value=\"Pasaporte\">Pasaporte</mat-option>\n         <mat-option value=\"CarnetDiplomatico\">Carnet Diplomatico</mat-option>\n\n       </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"half-width\">\n      <input\n        type=\"tel\"\n        matInput\n        placeholder=\"{{ tipoDeDocumento.value || opcionCC.value }}\"\n        formControlName=\"numeroDeDocumento\"\n        required >\n    </mat-form-field>\n\n  </div>\n\n\n  <div class=\"full-width nombre-inputs mb-1\">\n\n    <mat-form-field class=\"half-width\">\n      <input\n        matInput\n        placeholder=\"Email\"\n        formControlName=\"email\"\n        required>\n      <mat-error *ngIf=\"formularioNatural.get('email').invalid\">{{getErrorMessage()}}</mat-error>\n    </mat-form-field>\n\n\n    <mat-form-field class=\"half-width\">\n      <input\n        type=\"tel\"\n        matInput\n        placeholder=\"Telefono\"\n        formControlName=\"telefono\"\n        required>\n    </mat-form-field>\n\n  </div>\n\n\n  <button\n    mat-flat-button\n    type=\"submit\"\n    class=\"btn\"\n    [disabled]=\"!formularioNatural.valid\">\n    Continuar\n  </button>\n\n\n</form>\n"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-natural/demanda-natural.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-natural/demanda-natural.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: DemandaNaturalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandaNaturalComponent", function() { return DemandaNaturalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_personaNatural_persona_natural_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/personaNatural/persona-natural.service */ "./src/app/services/personaNatural/persona-natural.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/localStorage/local-storage.service */ "./src/app/services/localStorage/local-storage.service.ts");







var DemandaNaturalComponent = /** @class */ (function () {
    function DemandaNaturalComponent(formBuilder, personaNaturalService, snackBar, router, activatedRoute, localStorageService) {
        this.formBuilder = formBuilder;
        this.personaNaturalService = personaNaturalService;
        this.snackBar = snackBar;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.localStorageService = localStorageService;
        this.formularioNatural = this.formBuilder.group({
            'nombre': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'apellido': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'telefono': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+$/)])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            'tipoDeDocumento': ['cedulaCiudadania'],
            'numeroDeDocumento': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]+$/)])],
            'direccion': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'departamento': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'ciudad': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    DemandaNaturalComponent.prototype.ngOnInit = function () {
    };
    DemandaNaturalComponent.prototype.log = function () {
        var _this = this;
        var idPersonaNatural = this.formularioNatural.value.numeroDeDocumento * 110;
        this.dataDemandaPersonaNatural = {
            tipoDocumentoPersona: this.formularioNatural.value.tipoDeDocumento,
            numeroDocumentoPersona: this.formularioNatural.value.numeroDeDocumento,
            nombresPersona: this.formularioNatural.value.nombre,
            apellidosPersona: this.formularioNatural.value.apellido,
            direccionPersona: this.formularioNatural.value.direccion,
            codigoCiudad: 8,
            fechaNacimientoPersona: null,
            generoPersona: null,
            lugarExpedicionCedulaPersona: null,
            contrasenaPersona: null,
            IdPersonaNatural: idPersonaNatural
        };
        this.personaNaturalService.guardarPersonaNatural(this.dataDemandaPersonaNatural)
            .subscribe(function (result) {
            console.log(result);
            _this.snackBar.open('guardado exitosamente', '', {
                duration: 1000,
            });
            localStorage.setItem('DemandadoNatural', JSON.stringify(_this.dataDemandaPersonaNatural));
            _this.localStorageService.setDataInLocalStorage('seleccionDemandado', 'natural');
            _this.router.navigate(['../datos-contrato'], { relativeTo: _this.activatedRoute });
        }, function (err) {
            console.log(err);
            _this.snackBar.open('problemas al guardar', '', {
                duration: 1000,
            });
        });
        console.log(this.dataDemandaPersonaNatural);
    };
    DemandaNaturalComponent.prototype.getErrorMessage = function () {
        return this.formularioNatural.get('email').hasError('required') ? 'Introduzca un email' :
            this.formularioNatural.get('email').hasError('email') ? 'Email no vaildo' : '';
    };
    DemandaNaturalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-demanda-natural',
            template: __webpack_require__(/*! ./demanda-natural.component.html */ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-natural/demanda-natural.component.html"),
            styles: [__webpack_require__(/*! ./demanda-natural.component.css */ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-natural/demanda-natural.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_personaNatural_persona_natural_service__WEBPACK_IMPORTED_MODULE_3__["PersonaNaturalService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]])
    ], DemandaNaturalComponent);
    return DemandaNaturalComponent;
}());

/*

var today = new Date();
 var dd = String(today.getDate()).padStart(2, '0');
 var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
 var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);
  document.getElementById("demo").innerHTML = today;
*/ 


/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/despido/despido.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/detalleConflictos/despido/despido.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n\twidth: 100%;\n\theight: auto;\n\tmargin: auto;\n\n\tpadding: 0 1.5rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n\n.titulo{\n\tcolor: #2196f3;\n\tfont-size: 2rem;\n\tfont-weight: normal;\n\tline-height: 110%;\n\tmargin-top: 1rem;\n\ttext-align: center;\n}\n\n\nform{\n  width: 100%;\n\theight: 100%;\n  display: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n\n.nombre-inputs{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n\n.half-width{\n  width: 49%;\n}\n\n\n.mb-1{\n\tmargin-bottom: 1rem;\n}\n\n\n.example-h2 {\n  margin: 10px;\n}\n\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n\n.example-margin {\n  margin: 0 10px;\n}\n\n\n@media (max-width: 470px) {\n\t.nombre-inputs{\n\t  display: flex;\n\t  flex-direction: column;\n\t  justify-content: space-between;\n\t}\n\t.half-width{\n\t  width: 100%;\n\t}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2dlbmVyYXItZGVtYW5kYS9kZXRhbGxlQ29uZmxpY3Rvcy9kZXNwaWRvL2Rlc3BpZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osWUFBWTs7Q0FFWixpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsdUJBQXVCO0FBQ3hCOzs7QUFHQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COzs7QUFFQTtFQUNFLFdBQVc7Q0FDWixZQUFZO0VBQ1gsYUFBYTtDQUNkLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsdUJBQXVCO0FBQ3hCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7OztBQUVBO0VBQ0UsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOzs7QUFHQTtDQUNDO0dBQ0UsYUFBYTtHQUNiLHNCQUFzQjtHQUN0Qiw4QkFBOEI7Q0FDaEM7Q0FDQTtHQUNFLFdBQVc7Q0FDYjtBQUNEIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2dlbmVyYXItZGVtYW5kYS9kZXRhbGxlQ29uZmxpY3Rvcy9kZXNwaWRvL2Rlc3BpZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG5cdG1hcmdpbjogYXV0bztcblxuXHRwYWRkaW5nOiAwIDEuNXJlbTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuLnRpdHVsb3tcblx0Y29sb3I6ICMyMTk2ZjM7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0bGluZS1oZWlnaHQ6IDExMCU7XG5cdG1hcmdpbi10b3A6IDFyZW07XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZm9ybXtcbiAgd2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuLm5vbWJyZS1pbnB1dHN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhhbGYtd2lkdGh7XG4gIHdpZHRoOiA0OSU7XG59XG5cbi5tYi0xe1xuXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZXhhbXBsZS1oMiB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmV4YW1wbGUtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uZXhhbXBsZS1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNDcwcHgpIHtcblx0Lm5vbWJyZS1pbnB1dHN7XG5cdCAgZGlzcGxheTogZmxleDtcblx0ICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHQgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0fVxuXHQuaGFsZi13aWR0aHtcblx0ICB3aWR0aDogMTAwJTtcblx0fVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/despido/despido.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/detalleConflictos/despido/despido.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  class=\"full-width\" [formGroup]=\"formularioDetalleDSJC\" (ngSubmit)=\"enviarDetalleDespidoSJC()\" >\n\n  <div class=\"container\">\n  \n    <h5 class=\"titulo\">Detalle conflicto despido injustificado</h5>\n  \n    <mat-card class=\"card\">\n  \n      \n  \n        <mat-form-field class=\"full-width\">\n            <input \n              matInput \n              [min]=\"minDate\"\n              [max]=\"hoy\"\n              [matDatepicker]=\"picker1\"  \n              placeholder=\"Ingrese fecha de despido injustificado\" \n              (click)=\"picker1.open()\" \n              formControlName=\"fechaDespidoSJC\" >\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n            <mat-datepicker touchUi #picker1></mat-datepicker>\n          </mat-form-field>\n        \n          </mat-card>\n\n          <button mat-flat-button class=\"btn btn-success\"\n          type=\"submit\"\n          [disabled]=\"!this.formularioDetalleDSJC.valid\"\n          >\n          Continuar\n        </button>\n        </div>\n      </form>"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/despido/despido.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/detalleConflictos/despido/despido.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DespidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DespidoComponent", function() { return DespidoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_conflictsDetail_despido_sjc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/conflictsDetail/despido-sjc.service */ "./src/app/services/conflictsDetail/despido-sjc.service.ts");





var DespidoComponent = /** @class */ (function () {
    function DespidoComponent(formBuilder, router_, activatedRoute, despidoSJCService) {
        this.formBuilder = formBuilder;
        this.router_ = router_;
        this.activatedRoute = activatedRoute;
        this.despidoSJCService = despidoSJCService;
        this.hoy = new Date(JSON.parse(localStorage.getItem('contratoData')).general.fechaFinalContrato);
        this.minDate = new Date(JSON.parse(localStorage.getItem('contratoData')).general.fechaInicioContrato);
        this.formularioDetalleDSJC = this.formBuilder.group({
            'fechaDespidoSJC': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.dataOfConflict = JSON.parse(localStorage.getItem('dataConflictos'));
    }
    DespidoComponent.prototype.ngOnInit = function () { };
    DespidoComponent.prototype.ngAfterContentChecked = function () { };
    DespidoComponent.prototype.irNuevaRuta = function () {
        /*
        this.despidoSJCService.guardarConflictoDSJC(this.DatosParaenviar())
        .subscribe( result => {
          console.log(result);
    
        }, err => {
          console.log(err);
        });
    
        */
        if (this.dataOfConflict.noPagoSalario === true) {
            this.router_.navigate(['../detalle-NoPagoSalario'], { relativeTo: this.activatedRoute });
        }
        else if (this.dataOfConflict.noPagoVacaciones === true) {
            this.router_.navigate(['../detalle-NoPagoVacas'], { relativeTo: this.activatedRoute });
        }
        else if (this.dataOfConflict.noPagoCesantias === true) {
            this.router_.navigate(['../detalle-NoPagoCesantias'], { relativeTo: this.activatedRoute });
        }
        else if (this.dataOfConflict.noPagoPrimas === true) {
            this.router_.navigate(['../detalle-NoPagoPrima'], { relativeTo: this.activatedRoute });
        }
        else {
            this.router_.navigate(['../final-demanda'], { relativeTo: this.activatedRoute });
        }
    };
    DespidoComponent.prototype.DatosParaenviar = function () {
        var startContractDate;
        startContractDate = JSON.parse(localStorage.
            getItem('infoContrato')).fechaInicioContrato;
        var despidoSJCdata = {
            idConflictoDespidoSJC: 0,
            idDemandaPersonaNatural: 0,
            idDemandaEmpresa: 0,
            fechaInicioContrato: startContractDate,
            fechaDespido: this.formularioDetalleDSJC.value.fechaDespidoSJC,
            montoDinero_DSJC: 0
        };
        return despidoSJCdata;
    };
    DespidoComponent.prototype.enviarDetalleDespidoSJC = function () {
        localStorage.setItem('detalleDespidoSJC', JSON.stringify(this.formularioDetalleDSJC.value));
        console.log(this.formularioDetalleDSJC.value.fechaDespidoSJC.getUTCFullYear());
        this.irNuevaRuta();
    };
    DespidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-despido',
            template: __webpack_require__(/*! ./despido.component.html */ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/despido/despido.component.html"),
            styles: [__webpack_require__(/*! ./despido.component.css */ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/despido/despido.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_conflictsDetail_despido_sjc_service__WEBPACK_IMPORTED_MODULE_4__["DespidoSJCService"]])
    ], DespidoComponent);
    return DespidoComponent;
}());



/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pcesantias/n-pcesantias.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pcesantias/n-pcesantias.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n\twidth: 100%;\n\theight: auto;\n\tmargin: auto;\n\n\tpadding: 0 1.5rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n\n.titulo{\n\tcolor: #2196f3;\n\tfont-size: 2rem;\n\tfont-weight: normal;\n\tline-height: 110%;\n\tmargin-top: 1rem;\n\ttext-align: center;\n}\n\n\nform{\n  width: 100%;\n\theight: 100%;\n  display: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n\n.nombre-inputs{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n\n.half-width{\n  width: 49%;\n}\n\n\n.mb-1{\n\tmargin-bottom: 1rem;\n}\n\n\n.example-h2 {\n  margin: 10px;\n}\n\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n\n.example-margin {\n  margin: 0 10px;\n}\n\n\n@media (max-width: 470px) {\n\t.nombre-inputs{\n\t  display: flex;\n\t  flex-direction: column;\n\t  justify-content: space-between;\n\t}\n\t.half-width{\n\t  width: 100%;\n\t}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2dlbmVyYXItZGVtYW5kYS9kZXRhbGxlQ29uZmxpY3Rvcy9uLXBjZXNhbnRpYXMvbi1wY2VzYW50aWFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLFlBQVk7O0NBRVosaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLHVCQUF1QjtBQUN4Qjs7O0FBR0E7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7O0FBRUE7RUFDRSxXQUFXO0NBQ1osWUFBWTtFQUNYLGFBQWE7Q0FDZCxzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLHVCQUF1QjtBQUN4Qjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7OztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7O0FBR0E7Q0FDQztHQUNFLGFBQWE7R0FDYixzQkFBc0I7R0FDdEIsOEJBQThCO0NBQ2hDO0NBQ0E7R0FDRSxXQUFXO0NBQ2I7QUFDRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvdXN1YXJpby9nZW5lcmFyLWRlbWFuZGEvZGV0YWxsZUNvbmZsaWN0b3Mvbi1wY2VzYW50aWFzL24tcGNlc2FudGlhcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogYXV0bztcblx0bWFyZ2luOiBhdXRvO1xuXG5cdHBhZGRpbmc6IDAgMS41cmVtO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuXG4udGl0dWxve1xuXHRjb2xvcjogIzIxOTZmMztcblx0Zm9udC1zaXplOiAycmVtO1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRsaW5lLWhlaWdodDogMTEwJTtcblx0bWFyZ2luLXRvcDogMXJlbTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5mb3Jte1xuICB3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuXG4ubm9tYnJlLWlucHV0c3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaGFsZi13aWR0aHtcbiAgd2lkdGg6IDQ5JTtcbn1cblxuLm1iLTF7XG5cdG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5leGFtcGxlLWgyIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZXhhbXBsZS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5leGFtcGxlLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0NzBweCkge1xuXHQubm9tYnJlLWlucHV0c3tcblx0ICBkaXNwbGF5OiBmbGV4O1xuXHQgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdCAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR9XG5cdC5oYWxmLXdpZHRoe1xuXHQgIHdpZHRoOiAxMDAlO1xuXHR9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pcesantias/n-pcesantias.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pcesantias/n-pcesantias.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  class=\"full-width\" [formGroup]=\"formDetailNoPagoCesantias\"  (ngSubmit)=\"subirDatosNoPagoCesantias()\">\n\n    <div class=\"container\">\n    \n      <h5 class=\"titulo\">Detalle conflicto no pago de cesantias</h5>\n    \n      <mat-card class=\"card\">\n    \n        \n    \n          <mat-form-field class=\"half-width\">\n              <input \n              [min]=\"minDate\"\n              [max]=\"hoy\"\n            \n              matInput [matDatepicker]=\"picker1\" placeholder=\"Ingrese fecha de últimas cesantias pagadas\" \n              (click)=\"picker1.open()\" formControlName=\"fechaInicioNoPagoCesantias\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n              <mat-datepicker touchUi #picker1></mat-datepicker>\n            </mat-form-field>\n\n            <mat-form-field class=\"half-width\">\n              <input \n              [min]=\"picker1._validSelected\"\n              [max]=\"hoy\"\n              matInput [matDatepicker]=\"picker2\" placeholder=\"Ingrese fecha de últimas cesantias pagadas\" \n              (click)=\"picker2.open()\" formControlName=\"fechaFinalNoPagoCesantias\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n              <mat-datepicker touchUi #picker2></mat-datepicker>\n            </mat-form-field>\n          \n            </mat-card>\n  \n            <button mat-flat-button class=\"btn btn-success\"\n            type=\"submit\"\n            [disabled]=\"!this.formDetailNoPagoCesantias.valid\"\n            >\n            Continuar\n          </button>\n          </div>\n        </form>"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pcesantias/n-pcesantias.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pcesantias/n-pcesantias.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: NPcesantiasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NPcesantiasComponent", function() { return NPcesantiasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_conflictsDetail_no_pago_cesantias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/conflictsDetail/no-pago-cesantias.service */ "./src/app/services/conflictsDetail/no-pago-cesantias.service.ts");





var NPcesantiasComponent = /** @class */ (function () {
    function NPcesantiasComponent(router_, formBuilder, activatedRoute, noPagoCesantiasService) {
        this.router_ = router_;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.noPagoCesantiasService = noPagoCesantiasService;
        this.hoy = new Date(JSON.parse(localStorage.getItem('contratoData')).general.fechaFinalContrato);
        this.minDate = new Date(JSON.parse(localStorage.getItem('contratoData')).general.fechaInicioContrato);
        this.formDetailNoPagoCesantias = this.formBuilder.group({
            'fechaInicioNoPagoCesantias': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'fechaFinalNoPagoCesantias': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.dataOfConflict = JSON.parse(localStorage.getItem('dataConflictos'));
    }
    NPcesantiasComponent.prototype.ngOnInit = function () { };
    NPcesantiasComponent.prototype.ngAfterContentChecked = function () { };
    NPcesantiasComponent.prototype.subirDatosNoPagoCesantias = function () {
        localStorage.setItem('detalleNoPagoCesantias', JSON.stringify(this.formDetailNoPagoCesantias.value));
        /*
        this.noPagoCesantiasService.guardarDataConfCesantias(this.buildDataToSend())
        .subscribe( result => {
          console.log(result);
    
        }, err => {
          console.log(err);
        });
        */
        this.irSiguienteVista();
    };
    NPcesantiasComponent.prototype.irSiguienteVista = function () {
        if (this.dataOfConflict.noPagoPrimas === true) {
            this.router_.navigate(['../detalle-NoPagoPrima'], { relativeTo: this.activatedRoute });
        }
        else {
            this.router_.navigate(['../final-demanda'], { relativeTo: this.activatedRoute });
        }
    };
    NPcesantiasComponent.prototype.buildDataToSend = function () {
        var startContractDate;
        var finishContractDate;
        startContractDate = JSON.parse(localStorage.
            getItem('infoContrato')).fechaInicioContrato;
        finishContractDate = JSON.parse(localStorage.
            getItem('infoContrato')).fechaFinalContrato;
        var datosCesantias = {
            idConflictoCesantias: 85,
            fechaInicioContrato: startContractDate,
            fechaFinalContrato: finishContractDate,
            fechaUltimasCesantiasPagadas: this.formDetailNoPagoCesantias.value.fechaInicioNoPagoCesantias,
            fechaFinalNoPagoCesantias: this.formDetailNoPagoCesantias.value.fechaFinalnicioNoPagoCesantias,
            montoDinero_Cesantias: 80000,
            montoDinero_InteresesCesantias: 890000,
            idDemandaPersonaNatural: 78,
            idDemandaEmpresa: 1200
        };
        return datosCesantias;
    };
    NPcesantiasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-n-pcesantias',
            template: __webpack_require__(/*! ./n-pcesantias.component.html */ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pcesantias/n-pcesantias.component.html"),
            styles: [__webpack_require__(/*! ./n-pcesantias.component.css */ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pcesantias/n-pcesantias.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_conflictsDetail_no_pago_cesantias_service__WEBPACK_IMPORTED_MODULE_4__["NoPagoCesantiasService"]])
    ], NPcesantiasComponent);
    return NPcesantiasComponent;
}());



/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pprima/n-pprima.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pprima/n-pprima.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n\twidth: 100%;\n\theight: auto;\n\tmargin: auto;\n\n\tpadding: 0 1.5rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n\n.titulo{\n\tcolor: #2196f3;\n\tfont-size: 2rem;\n\tfont-weight: normal;\n\tline-height: 110%;\n\tmargin-top: 1rem;\n\ttext-align: center;\n}\n\n\nform{\n  width: 100%;\n\theight: 100%;\n  display: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n\n.nombre-inputs{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n\n.half-width{\n  width: 49%;\n}\n\n\n.mb-1{\n\tmargin-bottom: 1rem;\n}\n\n\n.example-h2 {\n  margin: 10px;\n}\n\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n\n.example-margin {\n  margin: 0 10px;\n}\n\n\n@media (max-width: 470px) {\n\t.nombre-inputs{\n\t  display: flex;\n\t  flex-direction: column;\n\t  justify-content: space-between;\n\t}\n\t.half-width{\n\t  width: 100%;\n\t}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2dlbmVyYXItZGVtYW5kYS9kZXRhbGxlQ29uZmxpY3Rvcy9uLXBwcmltYS9uLXBwcmltYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixZQUFZOztDQUVaLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7OztBQUdBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7OztBQUVBO0VBQ0UsV0FBVztDQUNaLFlBQVk7RUFDWCxhQUFhO0NBQ2Qsc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7OztBQUVBO0VBQ0UsVUFBVTtBQUNaOzs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7OztBQUdBO0NBQ0M7R0FDRSxhQUFhO0dBQ2Isc0JBQXNCO0dBQ3RCLDhCQUE4QjtDQUNoQztDQUNBO0dBQ0UsV0FBVztDQUNiO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL3VzdWFyaW8vZ2VuZXJhci1kZW1hbmRhL2RldGFsbGVDb25mbGljdG9zL24tcHByaW1hL24tcHByaW1hLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xuXHRtYXJnaW46IGF1dG87XG5cblx0cGFkZGluZzogMCAxLjVyZW07XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cbi50aXR1bG97XG5cdGNvbG9yOiAjMjE5NmYzO1xuXHRmb250LXNpemU6IDJyZW07XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdGxpbmUtaGVpZ2h0OiAxMTAlO1xuXHRtYXJnaW4tdG9wOiAxcmVtO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZvcm17XG4gIHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cbi5ub21icmUtaW5wdXRze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5oYWxmLXdpZHRoe1xuICB3aWR0aDogNDklO1xufVxuXG4ubWItMXtcblx0bWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmV4YW1wbGUtaDIge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5leGFtcGxlLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmV4YW1wbGUtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3MHB4KSB7XG5cdC5ub21icmUtaW5wdXRze1xuXHQgIGRpc3BsYXk6IGZsZXg7XG5cdCAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdH1cblx0LmhhbGYtd2lkdGh7XG5cdCAgd2lkdGg6IDEwMCU7XG5cdH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pprima/n-pprima.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pprima/n-pprima.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  class=\"full-width\"  [formGroup]=\"detailFormPrimaPay\"  (ngSubmit)=\"uploadPrimaData()\">\n\n  <div class=\"container\">\n  \n    <h5 class=\"titulo\">Detalle conflicto no pago de prima</h5>\n  \n    <mat-card class=\"card\">\n       \n  \n      \n      \n        <mat-form-field class=\"half-width\">\n            <input \n            [min]=\"minDate\"\n            [max]=\"hoy\"\n            matInput [matDatepicker]=\"picker1\" placeholder=\"Ingrese fecha de inicio de no pago de prima\" \n            (click)=\"picker1.open()\" formControlName=\"inicioNoPagoPrima\" >\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n            <mat-datepicker touchUi #picker1></mat-datepicker>\n          </mat-form-field>\n\n          <mat-form-field class=\"half-width\" >\n              <input \n              [min]=\"picker1._validSelected\"\n              [max]=\"hoy\"matInput [matDatepicker]=\"picker2\" placeholder=\"Ingrese fecha de final  de no pago de prima\" \n              (click)=\"picker2.open()\" formControlName=\"finalNoPagoPrima\"  >\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n              <mat-datepicker touchUi #picker2></mat-datepicker>\n            </mat-form-field>\n            \n         \n        </mat-card>\n\n          <button mat-flat-button class=\"btn btn-success\"\n          type=\"submit\"\n          [disabled]=\"!this.detailFormPrimaPay.valid\"\n          >\n          Continuar\n        </button>\n        </div>\n      </form>"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pprima/n-pprima.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pprima/n-pprima.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: NPprimaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NPprimaComponent", function() { return NPprimaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_conflictsDetail_no_pago_prima_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/conflictsDetail/no-pago-prima.service */ "./src/app/services/conflictsDetail/no-pago-prima.service.ts");





var NPprimaComponent = /** @class */ (function () {
    function NPprimaComponent(formBuilder, router_, activatedRoute, noPagoPrimaService) {
        this.formBuilder = formBuilder;
        this.router_ = router_;
        this.activatedRoute = activatedRoute;
        this.noPagoPrimaService = noPagoPrimaService;
        this.hoy = new Date(JSON.parse(localStorage.getItem('contratoData')).general.fechaFinalContrato);
        this.minDate = new Date(JSON.parse(localStorage.getItem('contratoData')).general.fechaInicioContrato);
        this.detailFormPrimaPay = this.formBuilder.group({
            'inicioNoPagoPrima': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'finalNoPagoPrima': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.dataOfConflict = JSON.parse(localStorage.getItem('dataConflictos'));
    }
    NPprimaComponent.prototype.ngOnInit = function () {
    };
    NPprimaComponent.prototype.uploadPrimaData = function () {
        localStorage.setItem('detalleNoPagoPrima', JSON.stringify(this.detailFormPrimaPay.value));
        /*
        this.noPagoPrimaService.guardarPrimaData(this.buildDataToSend())
        .subscribe( result => {
          console.log(result);
    
        }, err => {
          console.log(err);
        });
        */
        this.siguienteVista();
    };
    NPprimaComponent.prototype.siguienteVista = function () {
        this.router_.navigate(['../final-demanda'], { relativeTo: this.activatedRoute });
    };
    NPprimaComponent.prototype.buildDataToSend = function () {
        var startContractDate;
        var finishContractDate;
        startContractDate = JSON.parse(localStorage.
            getItem('infoContrato')).fechaInicioContrato;
        finishContractDate = JSON.parse(localStorage.
            getItem('infoContrato')).fechaFinalContrato;
        var primaData = {
            idConflictoPrima: 45,
            fechaInicioContrato: startContractDate,
            fechaFinalContrato: finishContractDate,
            fechaUltimaPrimaPagada: this.detailFormPrimaPay.value.inicioNoPagoPrima,
            fechaFinalNoPagoCesantias: this.detailFormPrimaPay.value.finalNoPagoPrima,
            montoDinero_Prima: 89000,
            idDemandaPersonaNatural: 858585,
            idDemandaEmpresa: 10000,
        };
        return primaData;
    };
    NPprimaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-n-pprima',
            template: __webpack_require__(/*! ./n-pprima.component.html */ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pprima/n-pprima.component.html"),
            styles: [__webpack_require__(/*! ./n-pprima.component.css */ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pprima/n-pprima.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_conflictsDetail_no_pago_prima_service__WEBPACK_IMPORTED_MODULE_4__["NoPagoPrimaService"]])
    ], NPprimaComponent);
    return NPprimaComponent;
}());



/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-psalario/n-psalario.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-psalario/n-psalario.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n\twidth: 100%;\n\theight: auto;\n\tmargin: auto;\n\n\tpadding: 0 1.5rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n\n.titulo{\n\tcolor: #2196f3;\n\tfont-size: 2rem;\n\tfont-weight: normal;\n\tline-height: 110%;\n\tmargin-top: 1rem;\n\ttext-align: center;\n}\n\n\nform{\n  width: 100%;\n\theight: 100%;\n  display: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n\n.nombre-inputs{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n\n.half-width{\n  width: 49%;\n}\n\n\n.mb-1{\n\tmargin-bottom: 1rem;\n}\n\n\n.example-h2 {\n  margin: 10px;\n}\n\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n\n.example-margin {\n  margin: 0 10px;\n}\n\n\n@media (max-width: 470px) {\n\t.nombre-inputs{\n\t  display: flex;\n\t  flex-direction: column;\n\t  justify-content: space-between;\n\t}\n\t.half-width{\n\t  width: 100%;\n\t}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2dlbmVyYXItZGVtYW5kYS9kZXRhbGxlQ29uZmxpY3Rvcy9uLXBzYWxhcmlvL24tcHNhbGFyaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osWUFBWTs7Q0FFWixpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsdUJBQXVCO0FBQ3hCOzs7QUFHQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COzs7QUFFQTtFQUNFLFdBQVc7Q0FDWixZQUFZO0VBQ1gsYUFBYTtDQUNkLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsdUJBQXVCO0FBQ3hCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7OztBQUVBO0VBQ0UsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOzs7QUFHQTtDQUNDO0dBQ0UsYUFBYTtHQUNiLHNCQUFzQjtHQUN0Qiw4QkFBOEI7Q0FDaEM7Q0FDQTtHQUNFLFdBQVc7Q0FDYjtBQUNEIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2dlbmVyYXItZGVtYW5kYS9kZXRhbGxlQ29uZmxpY3Rvcy9uLXBzYWxhcmlvL24tcHNhbGFyaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG5cdG1hcmdpbjogYXV0bztcblxuXHRwYWRkaW5nOiAwIDEuNXJlbTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuLnRpdHVsb3tcblx0Y29sb3I6ICMyMTk2ZjM7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0bGluZS1oZWlnaHQ6IDExMCU7XG5cdG1hcmdpbi10b3A6IDFyZW07XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZm9ybXtcbiAgd2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuLm5vbWJyZS1pbnB1dHN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhhbGYtd2lkdGh7XG4gIHdpZHRoOiA0OSU7XG59XG5cbi5tYi0xe1xuXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZXhhbXBsZS1oMiB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmV4YW1wbGUtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uZXhhbXBsZS1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNDcwcHgpIHtcblx0Lm5vbWJyZS1pbnB1dHN7XG5cdCAgZGlzcGxheTogZmxleDtcblx0ICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHQgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0fVxuXHQuaGFsZi13aWR0aHtcblx0ICB3aWR0aDogMTAwJTtcblx0fVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-psalario/n-psalario.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-psalario/n-psalario.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  class=\"full-width\"   (ngSubmit)=\"subirNoPagoSalario()\"  [formGroup]=\"formularioNoPagoSalario\"    >\n\n    <div class=\"container\">\n    \n      <h5 class=\"titulo\">Detalle conflicto no pago de salario</h5>\n    \n      <mat-card class=\"card\">\n    \n        \n    \n          <mat-form-field class=\"half-width\">\n              <input \n              [min]=\"minDate\"\n              [max]=\"hoy\"\n              matInput [matDatepicker]=\"picker1\" placeholder=\"Ingrese fecha de inicio de no pago de salario\" \n              (click)=\"picker1.open()\" formControlName=\"fechaNoPagoSalario\" >\n              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n              <mat-datepicker touchUi #picker1></mat-datepicker>\n            </mat-form-field>\n\n            <mat-form-field class=\"half-width\">\n              <input \n              [min]=\"picker1._validSelected\"\n              [max]=\"hoy\"\n              matInput [matDatepicker]=\"picker2\" placeholder=\"Ingrese fecha de final de no pago de salario\" \n              (click)=\"picker2.open()\" formControlName=\"fechaFinalNoPagoSalario\" >\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n              <mat-datepicker touchUi #picker2></mat-datepicker>\n            </mat-form-field>\n          \n            </mat-card>\n  \n            <button mat-flat-button class=\"btn btn-success\"\n            type=\"submit\"\n            [disabled]=\"!this.formularioNoPagoSalario.valid\"\n            >\n            Continuar\n          </button>\n          </div>\n        </form>"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-psalario/n-psalario.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-psalario/n-psalario.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: NPsalarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NPsalarioComponent", function() { return NPsalarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_conflictsDetail_no_pago_salario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/conflictsDetail/no-pago-salario.service */ "./src/app/services/conflictsDetail/no-pago-salario.service.ts");





var NPsalarioComponent = /** @class */ (function () {
    function NPsalarioComponent(formBuilder, router_, activatedRoute, noPagoSalarioService) {
        this.formBuilder = formBuilder;
        this.router_ = router_;
        this.activatedRoute = activatedRoute;
        this.noPagoSalarioService = noPagoSalarioService;
        this.hoy = new Date(JSON.parse(localStorage.getItem('contratoData')).general.fechaFinalContrato);
        this.minDate = new Date(JSON.parse(localStorage.getItem('contratoData')).general.fechaInicioContrato);
        this.formularioNoPagoSalario = this.formBuilder.group({
            'fechaNoPagoSalario': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'fechaFinalNoPagoSalario': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.dataOfConflict = JSON.parse(localStorage.getItem('dataConflictos'));
    }
    NPsalarioComponent.prototype.ngOnInit = function () {
    };
    NPsalarioComponent.prototype.irSiguienteVista = function () {
        if (this.dataOfConflict.noPagoVacaciones === true) {
            this.router_.navigate(['../detalle-NoPagoVacas'], { relativeTo: this.activatedRoute });
        }
        else if (this.dataOfConflict.noPagoCesantias === true) {
            this.router_.navigate(['../detalle-NoPagoCesantias'], { relativeTo: this.activatedRoute });
        }
        else if (this.dataOfConflict.noPagoPrimas === true) {
            this.router_.navigate(['../detalle-NoPagoPrima'], { relativeTo: this.activatedRoute });
        }
        else {
            this.router_.navigate(['../final-demanda'], { relativeTo: this.activatedRoute });
        }
    };
    NPsalarioComponent.prototype.subirNoPagoSalario = function () {
        localStorage.setItem('detalleNoPagoSalario', JSON.stringify(this.formularioNoPagoSalario.value));
        /*
        this.noPagoSalarioService.guardarNoPagoSalario(this.DatosParaEnviar())
        .subscribe( result => {
          console.log(result);
    
        }, err => {
          console.log(err);
        });
    
        */
        this.irSiguienteVista();
    };
    NPsalarioComponent.prototype.DatosParaEnviar = function () {
        var startContractDate;
        var finishContractDate;
        startContractDate = JSON.parse(localStorage.
            getItem('infoContrato')).fechaInicioContrato;
        finishContractDate = JSON.parse(localStorage.
            getItem('infoContrato')).fechaFinalContrato;
        var DatosNopagoSalario = {
            idConflictoPagoSalario: 20,
            fechaInicioContrato: startContractDate,
            fechaInicioNoPago: this.formularioNoPagoSalario.value.fechaNoPagoSalario,
            fechaFinalNoPagoSalario: this.formularioNoPagoSalario.value.fechaFinalNoPagoSalario,
            fechaFinalContrato: finishContractDate,
            montoDinero_PagoSalario: 0,
            idDemandaPersonaNatural: 0,
            idDemandaEmpresa: 0
        };
        return DatosNopagoSalario;
    };
    NPsalarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-n-psalario',
            template: __webpack_require__(/*! ./n-psalario.component.html */ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-psalario/n-psalario.component.html"),
            styles: [__webpack_require__(/*! ./n-psalario.component.css */ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-psalario/n-psalario.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_conflictsDetail_no_pago_salario_service__WEBPACK_IMPORTED_MODULE_4__["NoPagoSalarioService"]])
    ], NPsalarioComponent);
    return NPsalarioComponent;
}());



/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pvacas/n-pvacas.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pvacas/n-pvacas.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n\twidth: 100%;\n\theight: auto;\n\tmargin: auto;\n\n\tpadding: 0 1.5rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n\n.titulo{\n\tcolor: #2196f3;\n\tfont-size: 2rem;\n\tfont-weight: normal;\n\tline-height: 110%;\n\tmargin-top: 1rem;\n\ttext-align: center;\n}\n\n\nform{\n  width: 100%;\n\theight: 100%;\n  display: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n\n.nombre-inputs{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n\n.half-width{\n  width: 49%;\n}\n\n\n.mb-1{\n\tmargin-bottom: 1rem;\n}\n\n\n.example-h2 {\n  margin: 10px;\n}\n\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n\n.example-margin {\n  margin: 0 10px;\n}\n\n\n@media (max-width: 470px) {\n\t.nombre-inputs{\n\t  display: flex;\n\t  flex-direction: column;\n\t  justify-content: space-between;\n\t}\n\t.half-width{\n\t  width: 100%;\n\t}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2dlbmVyYXItZGVtYW5kYS9kZXRhbGxlQ29uZmxpY3Rvcy9uLXB2YWNhcy9uLXB2YWNhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixZQUFZOztDQUVaLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7OztBQUdBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7OztBQUVBO0VBQ0UsV0FBVztDQUNaLFlBQVk7RUFDWCxhQUFhO0NBQ2Qsc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7OztBQUVBO0VBQ0UsVUFBVTtBQUNaOzs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7OztBQUdBO0NBQ0M7R0FDRSxhQUFhO0dBQ2Isc0JBQXNCO0dBQ3RCLDhCQUE4QjtDQUNoQztDQUNBO0dBQ0UsV0FBVztDQUNiO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL3VzdWFyaW8vZ2VuZXJhci1kZW1hbmRhL2RldGFsbGVDb25mbGljdG9zL24tcHZhY2FzL24tcHZhY2FzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xuXHRtYXJnaW46IGF1dG87XG5cblx0cGFkZGluZzogMCAxLjVyZW07XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cbi50aXR1bG97XG5cdGNvbG9yOiAjMjE5NmYzO1xuXHRmb250LXNpemU6IDJyZW07XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdGxpbmUtaGVpZ2h0OiAxMTAlO1xuXHRtYXJnaW4tdG9wOiAxcmVtO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZvcm17XG4gIHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cbi5ub21icmUtaW5wdXRze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5oYWxmLXdpZHRoe1xuICB3aWR0aDogNDklO1xufVxuXG4ubWItMXtcblx0bWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmV4YW1wbGUtaDIge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5leGFtcGxlLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmV4YW1wbGUtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3MHB4KSB7XG5cdC5ub21icmUtaW5wdXRze1xuXHQgIGRpc3BsYXk6IGZsZXg7XG5cdCAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdH1cblx0LmhhbGYtd2lkdGh7XG5cdCAgd2lkdGg6IDEwMCU7XG5cdH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pvacas/n-pvacas.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pvacas/n-pvacas.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  class=\"full-width\"  (ngSubmit)=\"subirDetalleNoPagoVacas()\" [formGroup]=\"formularioDetalleNoPagoVacas\">\n\n    <div class=\"container\">\n    \n      <h5 class=\"titulo\">Detalle conflicto no pago de vacaciones</h5>\n    \n      <mat-card class=\"card\">\n    \n        \n    \n          <mat-form-field class=\"half-width\">\n              <input               \n              [min]=\"minDate\"\n              [max]=\"hoy\"\n              matInput [matDatepicker]=\"picker1\" placeholder=\"Ingrese fecha de incio no pago vacaciones\" \n              (click)=\"picker1.open()\" formControlName=\"fechaInicioNoPagoVacaciones\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n              <mat-datepicker touchUi #picker1></mat-datepicker>\n            </mat-form-field>\n\n            <mat-form-field class=\"half-width\">\n              <input \n              [min]=\"picker1._validSelected\"\n              [max]=\"hoy\"\n              matInput [matDatepicker]=\"picker2\" placeholder=\"Ingrese fecha final de  no pago vacaciones\" \n              (click)=\"picker2.open()\" formControlName=\"fechaFinalNoPagoVacaciones\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n              <mat-datepicker touchUi #picker2></mat-datepicker>\n            </mat-form-field>\n          \n            </mat-card>\n  \n            <button mat-flat-button class=\"btn btn-success\"\n            type=\"submit\"\n            [disabled]=\"!this.formularioDetalleNoPagoVacas.valid\"\n            >\n            Continuar\n          </button>\n          </div>\n        </form>"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pvacas/n-pvacas.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pvacas/n-pvacas.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: NPvacasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NPvacasComponent", function() { return NPvacasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_conflictsDetail_no_pago_vacaciones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/conflictsDetail/no-pago-vacaciones.service */ "./src/app/services/conflictsDetail/no-pago-vacaciones.service.ts");





var NPvacasComponent = /** @class */ (function () {
    function NPvacasComponent(router_, formBuilder, activatedRoute, noPagoVacacionesService) {
        this.router_ = router_;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.noPagoVacacionesService = noPagoVacacionesService;
        this.hoy = new Date(JSON.parse(localStorage.getItem('contratoData')).general.fechaFinalContrato);
        this.minDate = new Date(JSON.parse(localStorage.getItem('contratoData')).general.fechaInicioContrato);
        this.dataOfConflict = JSON.parse(localStorage.getItem('dataConflictos'));
        this.formularioDetalleNoPagoVacas = this.formBuilder.group({
            'fechaInicioNoPagoVacaciones': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'fechaFinalNoPagoVacaciones': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    NPvacasComponent.prototype.ngOnInit = function () {
    };
    NPvacasComponent.prototype.ngAfterContentChecked = function () { };
    NPvacasComponent.prototype.subirDetalleNoPagoVacas = function () {
        localStorage.setItem('detalleNoPagoVacas', JSON.stringify(this.formularioDetalleNoPagoVacas.value));
        /*
        this.noPagoVacacionesService.guardarDataConfVaca(this.construyeDatosAenviar())
        .subscribe( result => {
          console.log(result);
    
        }, err => {
          console.log(err);
        });
        */
        this.irSiguienteVista();
    };
    NPvacasComponent.prototype.irSiguienteVista = function () {
        if (this.dataOfConflict.noPagoCesantias === true) {
            this.router_.navigate(['../detalle-NoPagoCesantias'], { relativeTo: this.activatedRoute });
        }
        else if (this.dataOfConflict.noPagoPrimas === true) {
            this.router_.navigate(['../detalle-NoPagoPrima'], { relativeTo: this.activatedRoute });
        }
        else {
            this.router_.navigate(['../final-demanda'], { relativeTo: this.activatedRoute });
        }
    };
    NPvacasComponent.prototype.construyeDatosAenviar = function () {
        var startContractDate;
        var finishContractDate;
        startContractDate = JSON.parse(localStorage.
            getItem('infoContrato')).fechaInicioContrato;
        finishContractDate = JSON.parse(localStorage.
            getItem('infoContrato')).fechaFinalContrato;
        var dataVacationConflict = {
            idConflictoVacaciones: 0,
            fechaInicioContrato: startContractDate,
            fechaFinalContrato: finishContractDate,
            fechaUltimasVacaciones: this.formularioDetalleNoPagoVacas.value.fechaInicioNoPagoVacaciones,
            fechaFinalNoPagoVacaciones: this.formularioDetalleNoPagoVacas.value.fechaFinalNoPagoVacaciones,
            montoDinero_Vacaciones: 500,
            idDemandaPersonaNatural: 45,
            idDemandaEmpresa: 89
        };
        return dataVacationConflict;
    };
    NPvacasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-n-pvacas',
            template: __webpack_require__(/*! ./n-pvacas.component.html */ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pvacas/n-pvacas.component.html"),
            styles: [__webpack_require__(/*! ./n-pvacas.component.css */ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pvacas/n-pvacas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_conflictsDetail_no_pago_vacaciones_service__WEBPACK_IMPORTED_MODULE_4__["NoPagoVacacionesService"]])
    ], NPvacasComponent);
    return NPvacasComponent;
}());



/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/final-demanda/final-demanda.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/final-demanda/final-demanda.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n\twidth: 100%;\n\theight: auto;\n\tmargin: auto;\n\n\tpadding: 0 1.5rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n\n.titulo{\n\tcolor: #2196f3;\n\tfont-size: 2rem;\n\tfont-weight: normal;\n\tline-height: 110%;\n\tmargin-top: 1rem;\n\ttext-align: center;\n}\n\n\nform{\n  width: 100%;\n\theight: 100%;\n  display: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n\n.nombre-inputs{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n\n.half-width{\n  width: 49%;\n}\n\n\n.mb-1{\n\tmargin-bottom: 1rem;\n}\n\n\n.example-h2 {\n  margin: 10px;\n}\n\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n\n.example-margin {\n  margin: 0 10px;\n}\n\n\n@media (max-width: 470px) {\n\t.nombre-inputs{\n\t  display: flex;\n\t  flex-direction: column;\n\t  justify-content: space-between;\n\t}\n\t.half-width{\n\t  width: 100%;\n\t}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2dlbmVyYXItZGVtYW5kYS9maW5hbC1kZW1hbmRhL2ZpbmFsLWRlbWFuZGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osWUFBWTs7Q0FFWixpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsdUJBQXVCO0FBQ3hCOzs7QUFHQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COzs7QUFFQTtFQUNFLFdBQVc7Q0FDWixZQUFZO0VBQ1gsYUFBYTtDQUNkLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsdUJBQXVCO0FBQ3hCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7OztBQUVBO0VBQ0UsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOzs7QUFLQTtDQUNDO0dBQ0UsYUFBYTtHQUNiLHNCQUFzQjtHQUN0Qiw4QkFBOEI7Q0FDaEM7Q0FDQTtHQUNFLFdBQVc7Q0FDYjtBQUNEIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2dlbmVyYXItZGVtYW5kYS9maW5hbC1kZW1hbmRhL2ZpbmFsLWRlbWFuZGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG5cdG1hcmdpbjogYXV0bztcblxuXHRwYWRkaW5nOiAwIDEuNXJlbTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuLnRpdHVsb3tcblx0Y29sb3I6ICMyMTk2ZjM7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0bGluZS1oZWlnaHQ6IDExMCU7XG5cdG1hcmdpbi10b3A6IDFyZW07XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZm9ybXtcbiAgd2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuLm5vbWJyZS1pbnB1dHN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhhbGYtd2lkdGh7XG4gIHdpZHRoOiA0OSU7XG59XG5cbi5tYi0xe1xuXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZXhhbXBsZS1oMiB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmV4YW1wbGUtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uZXhhbXBsZS1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuXG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3MHB4KSB7XG5cdC5ub21icmUtaW5wdXRze1xuXHQgIGRpc3BsYXk6IGZsZXg7XG5cdCAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdH1cblx0LmhhbGYtd2lkdGh7XG5cdCAgd2lkdGg6IDEwMCU7XG5cdH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/final-demanda/final-demanda.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/final-demanda/final-demanda.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  class=\"full-width\"    (ngSubmit)=\"solicitarPDF()\">\n\n  <div class=\"container\">\n  \n    <h5 class=\"titulo\">Confirmar solicitud</h5>\n  \n    <mat-card class=\"card\">\n     Ahora solo debes confirmar la solicitud para que LaborApp pueda ayudarte  \n  \n      \n    </mat-card>\n\n          <button mat-flat-button class=\"btn btn-success\"\n          type=\"submit\"\n          >\n          Solicitar PDF\n        </button>\n        </div>\n      </form>"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/final-demanda/final-demanda.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/final-demanda/final-demanda.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FinalDemandaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalDemandaComponent", function() { return FinalDemandaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/localStorage/local-storage.service */ "./src/app/services/localStorage/local-storage.service.ts");
/* harmony import */ var _services_final_demanda_final_demanda_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/final-demanda/final-demanda.service */ "./src/app/services/final-demanda/final-demanda.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_demanda_pdf_demanda_pdf_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/demanda-pdf/demanda-pdf.service */ "./src/app/services/demanda-pdf/demanda-pdf.service.ts");









var FinalDemandaComponent = /** @class */ (function () {
    function FinalDemandaComponent(formBuilder, router_, activatedRoute, snackBar, localStorageService, finalDemandaService, demandaPdfService) {
        this.formBuilder = formBuilder;
        this.router_ = router_;
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.localStorageService = localStorageService;
        this.finalDemandaService = finalDemandaService;
        this.demandaPdfService = demandaPdfService;
        this.dataOfConflict = JSON.parse(localStorage.getItem('dataConflictos'));
    }
    FinalDemandaComponent.prototype.ngOnInit = function () {
    };
    FinalDemandaComponent.prototype.solicitarPDF = function () {
        var _this = this;
        if (this.detectarConflictoContactaAbogado()) {
            this.snackBar.open('No es posible generar demanda, un abogado se pondrá en contacto contigo', '', {
                duration: 2500,
            });
        }
        else {
            this.snackBar.open('En breve se generá su demanda', '', {
                duration: 2500,
            });
            console.log(this.obtenerDatosConflictos());
            this.finalDemandaService.guardarTodosConflictos(this.obtenerDatosConflictos()).
                subscribe(function (resul) {
                _this.generarPdf();
                _this.router_.navigate(['../../home'], { relativeTo: _this.activatedRoute });
            }, function (error) {
                console.log(error);
            });
        }
    };
    FinalDemandaComponent.prototype.detectarConflictoContactaAbogado = function () {
        if (this.dataOfConflict.noPagoARL === true ||
            this.dataOfConflict.noPagoPensiones === true ||
            this.dataOfConflict.noPagoHorasExtras === true ||
            this.dataOfConflict.noPagoFestiDomini === true) {
            return true;
        }
        else {
            return false;
        }
    };
    FinalDemandaComponent.prototype.obtenerDatosConflictos = function () {
        this.datosConflictoDSJC();
        this.datosConflictoSalario();
        this.datosConflictoVacas();
        this.datosConflictoCesantias();
        this.datosConflictoPrimas();
        var dataConflictos = {
            conflictoDespidoSJC: this.conflictoDsjcD.conflictoDSJC,
            conflictoPagoSalario: this.conflictoSalarioD.existe,
            conflictoVacaciones: this.conflictoVacasD.existe,
            conflictoCesantias: this.conflictoCesantiasD.existe,
            conflictoPrimas: this.conflictoPrimasD.existe,
            conflictosContactaAbogado: this.detectarConflictoContactaAbogado(),
            idDemandaPersonaNatural: localStorage.getItem('idDemandaNatural'),
            idDemandaEmpresa: localStorage.getItem('idDemandaEmpresa'),
            fechaInicioContrato: this.localStorageService.getDataContrato('inicio'),
            tipoContrato: this.localStorageService.getDataContrato('tipo'),
            fechaFinalContrato: this.localStorageService.getDataContrato('final'),
            fechaDespido: this.conflictoDsjcD.fechaDespido,
            fechaInicioNoPago: this.conflictoSalarioD.inicio,
            fechaFinalNoPagoSalario: this.conflictoSalarioD.final,
            fechaUltimasVacaciones: this.conflictoVacasD.inicio,
            fechaFinalNoPagoVacaciones: this.conflictoVacasD.final,
            fechaUltimasCesantiasPagadas: this.conflictoCesantiasD.inicio,
            fechaFinalNoPagoCesantias: this.conflictoCesantiasD.final,
            fechaUltimaPrimaPagada: this.conflictoPrimasD.inicio,
            fechaFinalNoPagoPrima: this.conflictoPrimasD.final
        };
        return dataConflictos;
    };
    FinalDemandaComponent.prototype.datosConflictoDSJC = function () {
        this.conflcitosSeleccionados = this.localStorageService.getConflictosSeleccionados();
        if (this.conflcitosSeleccionados.despidoInjustificado === null) {
            this.conflictoDsjcD = {
                conflictoDSJC: false,
                fechaDespido: null
            };
        }
        else {
            this.conflictoDsjcD = {
                conflictoDSJC: true,
                fechaDespido: this.localStorageService.getConflictoDSJC()
            };
        }
    };
    FinalDemandaComponent.prototype.datosConflictoSalario = function () {
        var dataSalario = this.localStorageService.getConflictoPagoSalario();
        if (this.conflcitosSeleccionados.noPagoSalario === null) {
            this.conflictoSalarioD = {
                existe: false,
                inicio: null,
                final: null
            };
        }
        else {
            this.conflictoSalarioD = {
                existe: true,
                inicio: dataSalario.fechaNoPagoSalario,
                final: dataSalario.fechaFinalNoPagoSalario
            };
        }
    };
    FinalDemandaComponent.prototype.datosConflictoVacas = function () {
        var dataVacas = this.localStorageService.getConflictoVacaciones();
        if (this.conflcitosSeleccionados.noPagoVacaciones === null) {
            this.conflictoVacasD = {
                existe: false,
                inicio: null,
                final: null
            };
        }
        else {
            this.conflictoVacasD = {
                existe: true,
                inicio: dataVacas.fechaInicioNoPagoVacaciones,
                final: dataVacas.fechaFinalNoPagoVacaciones
            };
        }
    };
    FinalDemandaComponent.prototype.datosConflictoCesantias = function () {
        var dataCesantias = this.localStorageService.getConflictoCesantias();
        if (this.conflcitosSeleccionados.noPagoCesantias === null) {
            this.conflictoCesantiasD = {
                existe: false,
                inicio: null,
                final: null
            };
        }
        else {
            this.conflictoCesantiasD = {
                existe: true,
                inicio: dataCesantias.fechaInicioNoPagoCesantias,
                final: dataCesantias.fechaFinalNoPagoCesantias
            };
        }
    };
    FinalDemandaComponent.prototype.datosConflictoPrimas = function () {
        var dataPrimas = this.localStorageService.getConflictoPrimas();
        if (this.conflcitosSeleccionados.noPagoPrimas === null) {
            this.conflictoPrimasD = {
                existe: false,
                inicio: null,
                final: null
            };
        }
        else {
            this.conflictoPrimasD = {
                existe: true,
                inicio: dataPrimas.inicioNoPagoPrima,
                final: dataPrimas.finalNoPagoPrima
            };
        }
    };
    FinalDemandaComponent.prototype.descargarPdf = function () {
        this.demandaPdfService.descargarPdf()
            .subscribe(function (doc) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(doc, 'demanda.pdf');
        }, function (err) {
            console.log(err);
        });
    };
    FinalDemandaComponent.prototype.generarPdf = function () {
        var _this = this;
        var idDemandaEmpresa = localStorage.getItem('idDemandaEmpresa');
        this.demandaPdfService.generarPdf(idDemandaEmpresa)
            .subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(res);
                        // this.router.navigate(['../datos-contrato'], {relativeTo: this.activatedRoute});
                        // await this.enviarPdf();
                        return [4 /*yield*/, this.descargarPdf()];
                    case 1:
                        // this.router.navigate(['../datos-contrato'], {relativeTo: this.activatedRoute});
                        // await this.enviarPdf();
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }, function (err) {
            console.log(err);
        });
    };
    FinalDemandaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-final-demanda',
            template: __webpack_require__(/*! ./final-demanda.component.html */ "./src/app/paginas/usuario/generar-demanda/final-demanda/final-demanda.component.html"),
            styles: [__webpack_require__(/*! ./final-demanda.component.css */ "./src/app/paginas/usuario/generar-demanda/final-demanda/final-demanda.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"],
            _services_final_demanda_final_demanda_service__WEBPACK_IMPORTED_MODULE_6__["FinalDemandaService"],
            _services_demanda_pdf_demanda_pdf_service__WEBPACK_IMPORTED_MODULE_8__["DemandaPdfService"]])
    ], FinalDemandaComponent);
    return FinalDemandaComponent;
}());



/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/seleccion-conflictos/seleccion-conflictos.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/seleccion-conflictos/seleccion-conflictos.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n\twidth: 100%;\n\theight: auto;\n\tmargin: auto;\n\n\tpadding: 0 1.5rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n\n.titulo{\n\tcolor: #2196f3;\n\tfont-size: 2rem;\n\tfont-weight: normal;\n\tline-height: 110%;\n\tmargin-top: 1rem;\n\ttext-align: center;\n}\n\n\n.Subtitulo{\n\tcolor: #2196f3;\n\tfont-size: 1rem;\n\tfont-weight: normal;\n\tline-height: 90%;\n\tmargin-top: 1rem;\n\ttext-align: center;\n}\n\n\nform{\n  width: 100%;\n\theight: 100%;\n  display: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n\n.nombre-inputs{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n\n.half-width{\n\twidth: 49%;\n\tjustify-content: center;\n\talign-items: center;\n\t\n}\n\n\n.mb-1{\n\tmargin-bottom: 1rem;\n}\n\n\nalert{\n\tbackground-color: rgb(0, 0, 0);\n}\n\n\n@media (max-width: 470px) {\n\t.nombre-inputs{\n\t  display: flex;\n\t  flex-direction: column;\n\t  justify-content: space-between;\n\t}\n\t.half-width{\n\t  width: 100%;\n\t}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2dlbmVyYXItZGVtYW5kYS9zZWxlY2Npb24tY29uZmxpY3Rvcy9zZWxlY2Npb24tY29uZmxpY3Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixZQUFZOztDQUVaLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7OztBQUdBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7OztBQUVBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7OztBQUVBO0VBQ0UsV0FBVztDQUNaLFlBQVk7RUFDWCxhQUFhO0NBQ2Qsc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7OztBQUVBO0NBQ0MsVUFBVTtDQUNWLHVCQUF1QjtDQUN2QixtQkFBbUI7O0FBRXBCOzs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7O0FBRUE7Q0FDQyw4QkFBOEI7QUFDL0I7OztBQUdBO0NBQ0M7R0FDRSxhQUFhO0dBQ2Isc0JBQXNCO0dBQ3RCLDhCQUE4QjtDQUNoQztDQUNBO0dBQ0UsV0FBVztDQUNiO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL3VzdWFyaW8vZ2VuZXJhci1kZW1hbmRhL3NlbGVjY2lvbi1jb25mbGljdG9zL3NlbGVjY2lvbi1jb25mbGljdG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xuXHRtYXJnaW46IGF1dG87XG5cblx0cGFkZGluZzogMCAxLjVyZW07XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cbi50aXR1bG97XG5cdGNvbG9yOiAjMjE5NmYzO1xuXHRmb250LXNpemU6IDJyZW07XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdGxpbmUtaGVpZ2h0OiAxMTAlO1xuXHRtYXJnaW4tdG9wOiAxcmVtO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5TdWJ0aXR1bG97XG5cdGNvbG9yOiAjMjE5NmYzO1xuXHRmb250LXNpemU6IDFyZW07XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdGxpbmUtaGVpZ2h0OiA5MCU7XG5cdG1hcmdpbi10b3A6IDFyZW07XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZm9ybXtcbiAgd2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuLm5vbWJyZS1pbnB1dHN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhhbGYtd2lkdGh7XG5cdHdpZHRoOiA0OSU7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcbn1cblxuLm1iLTF7XG5cdG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbmFsZXJ0e1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3MHB4KSB7XG5cdC5ub21icmUtaW5wdXRze1xuXHQgIGRpc3BsYXk6IGZsZXg7XG5cdCAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdH1cblx0LmhhbGYtd2lkdGh7XG5cdCAgd2lkdGg6IDEwMCU7XG5cdH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/seleccion-conflictos/seleccion-conflictos.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/seleccion-conflictos/seleccion-conflictos.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"full-width\" [formGroup]=\"formularioSeleccionConflictos\" (ngSubmit)=\"subirDatosConflictos()\">\n<div class=\"container\">\n  <h5 class=\"titulo\">Selección conflictos</h5>\n \n<mat-card class=\"card\">\n    <mat-card-content>\n\n    <div class=\"full-width nombre-inputs\">\n      <mat-checkbox class=\"half-width\" formControlName=\"despidoInjustificado\" >1. Despido injustificado</mat-checkbox>\n      <mat-checkbox  class=\"half-width\" formControlName=\"noPagoSalario\">2. Pago Salario</mat-checkbox>\n    </div>\n\n    <div class=\"full-width nombre-inputs\">\n        <mat-checkbox class=\"half-width\" formControlName=\"noPagoVacaciones\">3. Vacaciones</mat-checkbox>\n        <mat-checkbox class=\"half-width\" formControlName=\"noPagoCesantias\">4. Cesantias e interéses de cesantias</mat-checkbox>\n    </div>\n\n    <div class=\"full-width nombre-inputs\">\n        <mat-checkbox class=\"half-width\" formControlName=\"noPagoPrimas\" >5. Primas</mat-checkbox>\n        <mat-checkbox class=\"half-width\" formControlName=\"noPagoPensiones\">6. Pensiones</mat-checkbox>\n    </div>\n\n    <div class=\"full-width nombre-inputs\">\n        <mat-checkbox class=\"half-width\" formControlName=\"noPagoARL\">7.ARL</mat-checkbox>\n        <mat-checkbox class=\"half-width\" formControlName=\"noPagoHorasExtras\">8. Horas extras</mat-checkbox>\n    </div>\n\n    <div class=\"full-width nombre-inputs\">\n        <mat-checkbox class=\"full-width\" formControlName=\"noPagoFestiDomini\">9. Festivos y Dominicales</mat-checkbox>\n    </div>\n\n  </mat-card-content>\n</mat-card>\n<button mat-flat-button class=\"btn btn-success\"\ntype=\"submit\"\n>\nContinuar\n</button>\n</div>\n</form>\n\n\n  \n  \n  \n"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/seleccion-conflictos/seleccion-conflictos.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/seleccion-conflictos/seleccion-conflictos.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: SeleccionConflictosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleccionConflictosComponent", function() { return SeleccionConflictosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var SeleccionConflictosComponent = /** @class */ (function () {
    function SeleccionConflictosComponent(formBuilder, router_, activatedRoute, snackBar) {
        this.formBuilder = formBuilder;
        this.router_ = router_;
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
        this.formularioSeleccionConflictos = this.formBuilder.group({
            'despidoInjustificado': [null],
            'noPagoSalario': [null],
            'noPagoVacaciones': [null],
            'noPagoCesantias': [null],
            'noPagoARL': [null],
            'noPagoPensiones': [null],
            'noPagoPrimas': [null],
            'noPagoHorasExtras': [null],
            'noPagoFestiDomini': [null]
        });
    }
    SeleccionConflictosComponent.prototype.subirDatosConflictos = function () {
        localStorage.setItem('dataConflictos', JSON.stringify(this.formularioSeleccionConflictos.value));
        if (this.formularioSeleccionConflictos.value.despidoInjustificado === true) {
            this.router_.navigate(['../detalle-despidoSJC'], { relativeTo: this.activatedRoute });
        }
        else if (this.formularioSeleccionConflictos.value.noPagoSalario === true) {
            this.router_.navigate(['../detalle-NoPagoSalario'], { relativeTo: this.activatedRoute });
        }
        else if (this.formularioSeleccionConflictos.value.noPagoVacaciones === true) {
            this.router_.navigate(['../detalle-NoPagoVacas'], { relativeTo: this.activatedRoute });
        }
        else if (this.formularioSeleccionConflictos.value.noPagoCesantias === true) {
            this.router_.navigate(['../detalle-NoPagoCesantias'], { relativeTo: this.activatedRoute });
        }
        else if (this.formularioSeleccionConflictos.value.noPagoPrimas === true) {
            this.router_.navigate(['../detalle-NoPagoPrima'], { relativeTo: this.activatedRoute });
        }
        else if (this.formularioSeleccionConflictos.value.noPagoARL === true ||
            this.formularioSeleccionConflictos.value.noPagoPensiones === true ||
            this.formularioSeleccionConflictos.value.noPagoHorasExtras === true ||
            this.formularioSeleccionConflictos.value.noPagoFestiDomini === true) {
            this.router_.navigate(['../final-demanda'], { relativeTo: this.activatedRoute });
        }
        else {
            this.snackBar.open('Debes seleccionar al menos un conflicto', '', {
                duration: 2500,
            });
        }
    };
    SeleccionConflictosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-seleccion-conflictos',
            template: __webpack_require__(/*! ./seleccion-conflictos.component.html */ "./src/app/paginas/usuario/generar-demanda/seleccion-conflictos/seleccion-conflictos.component.html"),
            styles: [__webpack_require__(/*! ./seleccion-conflictos.component.css */ "./src/app/paginas/usuario/generar-demanda/seleccion-conflictos/seleccion-conflictos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], SeleccionConflictosComponent);
    return SeleccionConflictosComponent;
}());



/***/ }),

/***/ "./src/app/paginas/usuario/home/home.component.css":
/*!*********************************************************!*\
  !*** ./src/app/paginas/usuario/home/home.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n\twidth: 100%;\n\theight: 90%;\n\tmargin: auto;\n\n\tpadding: 0 1.5rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.btn{\n  padding: 0.5rem 2rem;\n  margin-bottom: 1rem;\n  font-weight: 300;\n\n}\n\n.btn span{\n  font-size: 1.5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxZQUFZOztDQUVaLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL3VzdWFyaW8vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiA5MCU7XG5cdG1hcmdpbjogYXV0bztcblxuXHRwYWRkaW5nOiAwIDEuNXJlbTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idG57XG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuXG59XG5cbi5idG4gc3BhbntcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/paginas/usuario/home/home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/paginas/usuario/home/home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n  <a  mat-flat-button class=\"btn\" routerLink=\"../generar\">Generar Demanda</a>\n\n\n\n  <a  mat-flat-button class=\"btn\" routerLink=\"../contactar-abogado\">Contactar Abogado</a>\n\n</div>\n"

/***/ }),

/***/ "./src/app/paginas/usuario/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/paginas/usuario/home/home.component.ts ***!
  \********************************************************/
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
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/paginas/usuario/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/paginas/usuario/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/paginas/usuario/perfil/perfil.component.css":
/*!*************************************************************!*\
  !*** ./src/app/paginas/usuario/perfil/perfil.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n\twidth: 100%;\n\theight: auto;\n\tmargin: auto;\n\n\tpadding: 0 1.5rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n\n.titulo{\n\tcolor: #2196f3;\n\tfont-size: 2rem;\n\tfont-weight: normal;\n\tline-height: 110%;\n\tmargin-top: 1rem;\n}\n\n\nform{\n  width: 100%;\n\theight: 100%;\n  display: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n\n.nombre-inputs{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n\n.subir-img{\n\n  align-self:flex-start;\n\tmargin-bottom: 1rem;\n}\n\n\n.half-width{\n  width: 49%;\n}\n\n\n.mb-1{\n\tmargin-bottom: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL3BlcmZpbC9wZXJmaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osWUFBWTs7Q0FFWixpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsdUJBQXVCO0FBQ3hCOzs7QUFHQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7OztBQUVBO0VBQ0UsV0FBVztDQUNaLFlBQVk7RUFDWCxhQUFhO0NBQ2Qsc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7OztBQUVBOztFQUVFLHFCQUFxQjtDQUN0QixtQkFBbUI7QUFDcEI7OztBQUVBO0VBQ0UsVUFBVTtBQUNaOzs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvdXN1YXJpby9wZXJmaWwvcGVyZmlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xuXHRtYXJnaW46IGF1dG87XG5cblx0cGFkZGluZzogMCAxLjVyZW07XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cbi50aXR1bG97XG5cdGNvbG9yOiAjMjE5NmYzO1xuXHRmb250LXNpemU6IDJyZW07XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdGxpbmUtaGVpZ2h0OiAxMTAlO1xuXHRtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5mb3Jte1xuICB3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuXG4ubm9tYnJlLWlucHV0c3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc3ViaXItaW1ne1xuXG4gIGFsaWduLXNlbGY6ZmxleC1zdGFydDtcblx0bWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmhhbGYtd2lkdGh7XG4gIHdpZHRoOiA0OSU7XG59XG5cbi5tYi0xe1xuXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/paginas/usuario/perfil/perfil.component.html":
/*!**************************************************************!*\
  !*** ./src/app/paginas/usuario/perfil/perfil.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h5 class=\"titulo\">Información</h5>\n  <mat-card class=\"card\">\n    <button\n      mat-flat-button\n      type=\"submit\"\n      class=\"subir-img btn\">\n      Cambiar Imagen\n    </button>\n\n    <form>\n\n      <div class=\"full-width nombre-inputs\">\n        <mat-form-field class=\"half-width\">\n          <input\n            matInput\n            placeholder=\"Nombre\"\n            required>\n        </mat-form-field>\n\n        <mat-form-field class=\"half-width\">\n          <input\n            matInput\n            placeholder=\"Apellido\"\n            required>\n        </mat-form-field>\n      </div>\n\n      <div class=\"full-width nombre-inputs\">\n\n        <mat-form-field class=\"half-width\">\n          <input\n            matInput\n            disabled\n            placeholder=\"Edad\"\n            required>\n        </mat-form-field>\n\n        <mat-form-field class=\"half-width\">\n          <input\n            type=\"tel\"\n            matInput\n            placeholder=\"Telefono\"\n            required>\n        </mat-form-field>\n\n      </div>\n\n\n      <div class=\"full-width nombre-inputs\">\n\n        <mat-form-field class=\"half-width\">\n          <input\n            matInput\n            placeholder=\"Dirección\"\n            required>\n        </mat-form-field>\n\n        <mat-form-field class=\"half-width\">\n          <input\n            matInput\n            disabled\n            placeholder=\"Email\"\n            required>\n        </mat-form-field>\n\n\n      </div>\n\n      <div class=\"full-width nombre-inputs mb-1\">\n\n        <mat-form-field class=\"half-width\">\n           <mat-select\n             #tipoDeDocumento\n             placeholder=\"Tipo de Documento\">\n\n             <mat-option #opcionCC value=\"CC\">Cedula de Ciudadania</mat-option>\n             <mat-option value=\"CE\">Cedula de Exptranjeria</mat-option>\n             <mat-option value=\"Pasaporte\">Pasaporte</mat-option>\n             <mat-option value=\"Carnet Diplomatico\">Carnet Diplomatico</mat-option>\n\n           </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"half-width\">\n          <input\n            type=\"tel\"\n            matInput\n            placeholder=\"{{ tipoDeDocumento.value || opcionCC.value }}\"\n            required >\n        </mat-form-field>\n\n      </div>\n\n\n\n\n    </form>\n\n  </mat-card>\n\n  <button\n    mat-flat-button\n    type=\"submit\"\n    routerLink=\"../home\"\n    class=\"btn\">\n    Guardar\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/paginas/usuario/perfil/perfil.component.ts":
/*!************************************************************!*\
  !*** ./src/app/paginas/usuario/perfil/perfil.component.ts ***!
  \************************************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PerfilComponent = /** @class */ (function () {
    function PerfilComponent() {
    }
    PerfilComponent.prototype.ngOnInit = function () {
    };
    PerfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__(/*! ./perfil.component.html */ "./src/app/paginas/usuario/perfil/perfil.component.html"),
            styles: [__webpack_require__(/*! ./perfil.component.css */ "./src/app/paginas/usuario/perfil/perfil.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PerfilComponent);
    return PerfilComponent;
}());



/***/ }),

/***/ "./src/app/paginas/usuario/usuario-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/paginas/usuario/usuario-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: UsuarioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioRoutingModule", function() { return UsuarioRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/paginas/usuario/home/home.component.ts");
/* harmony import */ var _contactar_abogado_contactar_abogado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactar-abogado/contactar-abogado.component */ "./src/app/paginas/usuario/contactar-abogado/contactar-abogado.component.ts");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil/perfil.component */ "./src/app/paginas/usuario/perfil/perfil.component.ts");
/* harmony import */ var _generar_demanda_datos_demandado_datos_demandado_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generar-demanda/datos-demandado/datos-demandado.component */ "./src/app/paginas/usuario/generar-demanda/datos-demandado/datos-demandado.component.ts");
/* harmony import */ var _generar_demanda_datos_contrato_datos_contrato_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./generar-demanda/datos-contrato/datos-contrato.component */ "./src/app/paginas/usuario/generar-demanda/datos-contrato/datos-contrato.component.ts");
/* harmony import */ var _generar_demanda_seleccion_conflictos_seleccion_conflictos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./generar-demanda/seleccion-conflictos/seleccion-conflictos.component */ "./src/app/paginas/usuario/generar-demanda/seleccion-conflictos/seleccion-conflictos.component.ts");
/* harmony import */ var _generar_demanda_detalleConflictos_despido_despido_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./generar-demanda/detalleConflictos/despido/despido.component */ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/despido/despido.component.ts");
/* harmony import */ var _generar_demanda_detalleConflictos_n_psalario_n_psalario_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./generar-demanda/detalleConflictos/n-psalario/n-psalario.component */ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-psalario/n-psalario.component.ts");
/* harmony import */ var _generar_demanda_detalleConflictos_n_pvacas_n_pvacas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./generar-demanda/detalleConflictos/n-pvacas/n-pvacas.component */ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pvacas/n-pvacas.component.ts");
/* harmony import */ var _generar_demanda_detalleConflictos_n_pcesantias_n_pcesantias_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./generar-demanda/detalleConflictos/n-pcesantias/n-pcesantias.component */ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pcesantias/n-pcesantias.component.ts");
/* harmony import */ var _generar_demanda_detalleConflictos_n_pprima_n_pprima_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./generar-demanda/detalleConflictos/n-pprima/n-pprima.component */ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pprima/n-pprima.component.ts");
/* harmony import */ var _generar_demanda_final_demanda_final_demanda_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./generar-demanda/final-demanda/final-demanda.component */ "./src/app/paginas/usuario/generar-demanda/final-demanda/final-demanda.component.ts");















var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'perfil/:id', component: _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_5__["PerfilComponent"] },
    {
        path: 'generar',
        children: [
            { path: 'datos-demandado', component: _generar_demanda_datos_demandado_datos_demandado_component__WEBPACK_IMPORTED_MODULE_6__["DatosDemandadoComponent"] },
            { path: 'datos-contrato', component: _generar_demanda_datos_contrato_datos_contrato_component__WEBPACK_IMPORTED_MODULE_7__["DatosContratoComponent"] },
            { path: 'seleccion-conflictos', component: _generar_demanda_seleccion_conflictos_seleccion_conflictos_component__WEBPACK_IMPORTED_MODULE_8__["SeleccionConflictosComponent"] },
            { path: 'detalle-despidoSJC', component: _generar_demanda_detalleConflictos_despido_despido_component__WEBPACK_IMPORTED_MODULE_9__["DespidoComponent"] },
            { path: 'detalle-NoPagoSalario', component: _generar_demanda_detalleConflictos_n_psalario_n_psalario_component__WEBPACK_IMPORTED_MODULE_10__["NPsalarioComponent"] },
            { path: 'detalle-NoPagoVacas', component: _generar_demanda_detalleConflictos_n_pvacas_n_pvacas_component__WEBPACK_IMPORTED_MODULE_11__["NPvacasComponent"] },
            { path: 'detalle-NoPagoCesantias', component: _generar_demanda_detalleConflictos_n_pcesantias_n_pcesantias_component__WEBPACK_IMPORTED_MODULE_12__["NPcesantiasComponent"] },
            { path: 'detalle-NoPagoPrima', component: _generar_demanda_detalleConflictos_n_pprima_n_pprima_component__WEBPACK_IMPORTED_MODULE_13__["NPprimaComponent"] },
            { path: 'final-demanda', component: _generar_demanda_final_demanda_final_demanda_component__WEBPACK_IMPORTED_MODULE_14__["FinalDemandaComponent"] },
            { path: '', redirectTo: 'datos-demandado', pathMatch: 'full' },
        ]
    },
    { path: 'contactar-abogado', component: _contactar_abogado_contactar_abogado_component__WEBPACK_IMPORTED_MODULE_4__["ContactarAbogadoComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' } // A todas las rutas la direcciona a esta
];
var UsuarioRoutingModule = /** @class */ (function () {
    function UsuarioRoutingModule() {
    }
    UsuarioRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UsuarioRoutingModule);
    return UsuarioRoutingModule;
}());



/***/ }),

/***/ "./src/app/paginas/usuario/usuario.module.ts":
/*!***************************************************!*\
  !*** ./src/app/paginas/usuario/usuario.module.ts ***!
  \***************************************************/
/*! exports provided: UsuarioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioModule", function() { return UsuarioModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_fragmentos_fragmentos_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/fragmentos/fragmentos.module */ "./src/app/fragmentos/fragmentos.module.ts");
/* harmony import */ var _usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuario-routing.module */ "./src/app/paginas/usuario/usuario-routing.module.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material */ "./src/app/material.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/paginas/usuario/home/home.component.ts");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./perfil/perfil.component */ "./src/app/paginas/usuario/perfil/perfil.component.ts");
/* harmony import */ var _contactar_abogado_contactar_abogado_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contactar-abogado/contactar-abogado.component */ "./src/app/paginas/usuario/contactar-abogado/contactar-abogado.component.ts");
/* harmony import */ var _generar_demanda_datos_demandado_datos_demandado_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./generar-demanda/datos-demandado/datos-demandado.component */ "./src/app/paginas/usuario/generar-demanda/datos-demandado/datos-demandado.component.ts");
/* harmony import */ var _generar_demanda_datos_demandado_demanda_juridica_demanda_juridica_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./generar-demanda/datos-demandado/demanda-juridica/demanda-juridica.component */ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-juridica/demanda-juridica.component.ts");
/* harmony import */ var _generar_demanda_datos_demandado_demanda_juridica_representante_representante_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./generar-demanda/datos-demandado/demanda-juridica/representante/representante.component */ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-juridica/representante/representante.component.ts");
/* harmony import */ var _generar_demanda_datos_demandado_demanda_natural_demanda_natural_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./generar-demanda/datos-demandado/demanda-natural/demanda-natural.component */ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-natural/demanda-natural.component.ts");
/* harmony import */ var _generar_demanda_datos_contrato_datos_contrato_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./generar-demanda/datos-contrato/datos-contrato.component */ "./src/app/paginas/usuario/generar-demanda/datos-contrato/datos-contrato.component.ts");
/* harmony import */ var _generar_demanda_seleccion_conflictos_seleccion_conflictos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./generar-demanda/seleccion-conflictos/seleccion-conflictos.component */ "./src/app/paginas/usuario/generar-demanda/seleccion-conflictos/seleccion-conflictos.component.ts");
/* harmony import */ var _generar_demanda_detalleConflictos_despido_despido_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./generar-demanda/detalleConflictos/despido/despido.component */ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/despido/despido.component.ts");
/* harmony import */ var _generar_demanda_detalleConflictos_n_psalario_n_psalario_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./generar-demanda/detalleConflictos/n-psalario/n-psalario.component */ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-psalario/n-psalario.component.ts");
/* harmony import */ var _generar_demanda_detalleConflictos_n_pvacas_n_pvacas_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./generar-demanda/detalleConflictos/n-pvacas/n-pvacas.component */ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pvacas/n-pvacas.component.ts");
/* harmony import */ var _generar_demanda_detalleConflictos_n_pcesantias_n_pcesantias_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./generar-demanda/detalleConflictos/n-pcesantias/n-pcesantias.component */ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pcesantias/n-pcesantias.component.ts");
/* harmony import */ var _generar_demanda_detalleConflictos_n_pprima_n_pprima_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./generar-demanda/detalleConflictos/n-pprima/n-pprima.component */ "./src/app/paginas/usuario/generar-demanda/detalleConflictos/n-pprima/n-pprima.component.ts");
/* harmony import */ var _generar_demanda_final_demanda_final_demanda_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./generar-demanda/final-demanda/final-demanda.component */ "./src/app/paginas/usuario/generar-demanda/final-demanda/final-demanda.component.ts");




// Custom module



// Componentes



// Componentes para generar la demanda












var UsuarioModule = /** @class */ (function () {
    function UsuarioModule() {
    }
    UsuarioModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _generar_demanda_datos_demandado_datos_demandado_component__WEBPACK_IMPORTED_MODULE_10__["DatosDemandadoComponent"],
                _generar_demanda_datos_demandado_demanda_juridica_demanda_juridica_component__WEBPACK_IMPORTED_MODULE_11__["DemandaJuridicaComponent"],
                _generar_demanda_datos_demandado_demanda_natural_demanda_natural_component__WEBPACK_IMPORTED_MODULE_13__["DemandaNaturalComponent"],
                _generar_demanda_datos_demandado_demanda_juridica_representante_representante_component__WEBPACK_IMPORTED_MODULE_12__["RepresentanteComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_8__["PerfilComponent"],
                _contactar_abogado_contactar_abogado_component__WEBPACK_IMPORTED_MODULE_9__["ContactarAbogadoComponent"],
                _generar_demanda_datos_contrato_datos_contrato_component__WEBPACK_IMPORTED_MODULE_14__["DatosContratoComponent"],
                _generar_demanda_seleccion_conflictos_seleccion_conflictos_component__WEBPACK_IMPORTED_MODULE_15__["SeleccionConflictosComponent"],
                _generar_demanda_detalleConflictos_despido_despido_component__WEBPACK_IMPORTED_MODULE_16__["DespidoComponent"],
                _generar_demanda_detalleConflictos_n_psalario_n_psalario_component__WEBPACK_IMPORTED_MODULE_17__["NPsalarioComponent"],
                _generar_demanda_detalleConflictos_n_pvacas_n_pvacas_component__WEBPACK_IMPORTED_MODULE_18__["NPvacasComponent"],
                _generar_demanda_detalleConflictos_n_pcesantias_n_pcesantias_component__WEBPACK_IMPORTED_MODULE_19__["NPcesantiasComponent"],
                _generar_demanda_detalleConflictos_n_pprima_n_pprima_component__WEBPACK_IMPORTED_MODULE_20__["NPprimaComponent"],
                _generar_demanda_final_demanda_final_demanda_component__WEBPACK_IMPORTED_MODULE_21__["FinalDemandaComponent"]
                /* En estos componenentes se pueden usar los módulos que se
                importan desde imports
            
                */
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsuarioRoutingModule"],
                _material__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                src_app_fragmentos_fragmentos_module__WEBPACK_IMPORTED_MODULE_4__["FragmentosModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
        })
    ], UsuarioModule);
    return UsuarioModule;
}());



/***/ }),

/***/ "./src/app/services/ContratoLaboral/contrato-laboral.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/services/ContratoLaboral/contrato-laboral.service.ts ***!
  \**********************************************************************/
/*! exports provided: ContratoLaboralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContratoLaboralService", function() { return ContratoLaboralService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ContratoLaboralService = /** @class */ (function () {
    function ContratoLaboralService(http) {
        this.http = http;
        // private UrlGuardaDatosContatoLaboral = 'https://laborappi.herokuapp.com/api/laborapp/demandado/empresa';
        this.UrlPruebaContratoLaboral = 'https://back-laborapp.herokuapp.com/api/laborapp/contrato';
    }
    ContratoLaboralService.prototype.guardarContratoLaboral = function (contratoLaboral) {
        return this.http.post(this.UrlPruebaContratoLaboral, contratoLaboral);
    };
    ContratoLaboralService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContratoLaboralService);
    return ContratoLaboralService;
}());



/***/ }),

/***/ "./src/app/services/conflictsDetail/despido-sjc.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/conflictsDetail/despido-sjc.service.ts ***!
  \*****************************************************************/
/*! exports provided: DespidoSJCService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DespidoSJCService", function() { return DespidoSJCService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DespidoSJCService = /** @class */ (function () {
    function DespidoSJCService(http) {
        this.http = http;
        // private UrlGuardaDatosContatoLaboral = 'https://laborappi.herokuapp.com/api/laborapp/demandado/empresa';
        this.UrlPrueba = 'http://localhost:3000/LaborApp/PruebaGuardardetalleConflictoDSJC';
    }
    DespidoSJCService.prototype.guardarConflictoDSJC = function (conflictoDespidoSJC) {
        return this.http.post(this.UrlPrueba, conflictoDespidoSJC);
    };
    DespidoSJCService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DespidoSJCService);
    return DespidoSJCService;
}());



/***/ }),

/***/ "./src/app/services/conflictsDetail/no-pago-cesantias.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/conflictsDetail/no-pago-cesantias.service.ts ***!
  \***********************************************************************/
/*! exports provided: NoPagoCesantiasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPagoCesantiasService", function() { return NoPagoCesantiasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var NoPagoCesantiasService = /** @class */ (function () {
    function NoPagoCesantiasService(http) {
        this.http = http;
        // private UrlGuardaDatosContatoLaboral = 'https://laborappi.herokuapp.com/api/laborapp/demandado/empresa';
        this.UrlPrueba = 'http://localhost:3000/LaborApp/PruebaGuardarConflictoPagoCesantias';
    }
    NoPagoCesantiasService.prototype.guardarDataConfCesantias = function (conflictoCesantias) {
        return this.http.post(this.UrlPrueba, conflictoCesantias);
    };
    NoPagoCesantiasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NoPagoCesantiasService);
    return NoPagoCesantiasService;
}());



/***/ }),

/***/ "./src/app/services/conflictsDetail/no-pago-prima.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/conflictsDetail/no-pago-prima.service.ts ***!
  \*******************************************************************/
/*! exports provided: NoPagoPrimaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPagoPrimaService", function() { return NoPagoPrimaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var NoPagoPrimaService = /** @class */ (function () {
    function NoPagoPrimaService(http) {
        this.http = http;
        // private UrlGuardaDatosContatoLaboral = 'https://laborappi.herokuapp.com/api/laborapp/demandado/empresa';
        this.UrlPrueba = 'http://localhost:3000/LaborApp/PruebaGuardarConflictoPrimas';
    }
    NoPagoPrimaService.prototype.guardarPrimaData = function (conflictoPrimas) {
        return this.http.post(this.UrlPrueba, conflictoPrimas);
    };
    NoPagoPrimaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NoPagoPrimaService);
    return NoPagoPrimaService;
}());



/***/ }),

/***/ "./src/app/services/conflictsDetail/no-pago-salario.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/conflictsDetail/no-pago-salario.service.ts ***!
  \*********************************************************************/
/*! exports provided: NoPagoSalarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPagoSalarioService", function() { return NoPagoSalarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var NoPagoSalarioService = /** @class */ (function () {
    function NoPagoSalarioService(http) {
        this.http = http;
        // private UrlGuardaDatosContatoLaboral = 'https://laborappi.herokuapp.com/api/laborapp/demandado/empresa';
        this.UrlPrueba = 'http://localhost:3000/LaborApp/PruebaGuardarDetalleConflictoNoPagoSalario';
    }
    NoPagoSalarioService.prototype.guardarNoPagoSalario = function (conflictoPagoSalario) {
        return this.http.post(this.UrlPrueba, conflictoPagoSalario);
    };
    NoPagoSalarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NoPagoSalarioService);
    return NoPagoSalarioService;
}());



/***/ }),

/***/ "./src/app/services/conflictsDetail/no-pago-vacaciones.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/services/conflictsDetail/no-pago-vacaciones.service.ts ***!
  \************************************************************************/
/*! exports provided: NoPagoVacacionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPagoVacacionesService", function() { return NoPagoVacacionesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var NoPagoVacacionesService = /** @class */ (function () {
    function NoPagoVacacionesService(http) {
        this.http = http;
        // private UrlGuardaDatosContatoLaboral = 'https://laborappi.herokuapp.com/api/laborapp/demandado/empresa';
        this.UrlPrueba = 'http://localhost:3000/LaborApp/PruebaGuardarConflictoPagoVacaciones';
    }
    NoPagoVacacionesService.prototype.guardarDataConfVaca = function (conflictoVacaciones) {
        return this.http.post(this.UrlPrueba, conflictoVacaciones);
    };
    NoPagoVacacionesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NoPagoVacacionesService);
    return NoPagoVacacionesService;
}());



/***/ }),

/***/ "./src/app/services/demandaJuridica/demanda-juridica.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/services/demandaJuridica/demanda-juridica.service.ts ***!
  \**********************************************************************/
/*! exports provided: DemandaJuridicaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandaJuridicaService", function() { return DemandaJuridicaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DemandaJuridicaService = /** @class */ (function () {
    function DemandaJuridicaService(http) {
        this.http = http;
        this.UrlGuardaDemandaEmpresa = 'https://back-laborapp.herokuapp.com/api/laborapp/demanda/empresa';
    }
    DemandaJuridicaService.prototype.guardarDemandaNatural = function (demandaEmpresa) {
        return this.http.post(this.UrlGuardaDemandaEmpresa, demandaEmpresa);
    };
    DemandaJuridicaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DemandaJuridicaService);
    return DemandaJuridicaService;
}());



/***/ }),

/***/ "./src/app/services/demandaNatural/demanda-natural.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/services/demandaNatural/demanda-natural.service.ts ***!
  \********************************************************************/
/*! exports provided: DemandaNaturalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandaNaturalService", function() { return DemandaNaturalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DemandaNaturalService = /** @class */ (function () {
    function DemandaNaturalService(http) {
        this.http = http;
        this.UrlGuardaDemandaNatural = 'https://back-laborapp.herokuapp.com/api/laborapp/demanda/persona-natural';
    }
    DemandaNaturalService.prototype.guardarDemandaNatural = function (demandaPersonaNatural) {
        return this.http.post(this.UrlGuardaDemandaNatural, demandaPersonaNatural);
    };
    DemandaNaturalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DemandaNaturalService);
    return DemandaNaturalService;
}());



/***/ }),

/***/ "./src/app/services/final-demanda/final-demanda.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/final-demanda/final-demanda.service.ts ***!
  \*****************************************************************/
/*! exports provided: FinalDemandaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalDemandaService", function() { return FinalDemandaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FinalDemandaService = /** @class */ (function () {
    function FinalDemandaService(http) {
        this.http = http;
        // private UrlGuardaDatosContatoLaboral = 'https://laborappi.herokuapp.com/api/laborapp/demandado/empresa';
        this.UrlConflictos = 'https://back-laborapp.herokuapp.com/api/laborapp/conflicto';
    }
    FinalDemandaService.prototype.guardarTodosConflictos = function (dataConflictos) {
        return this.http.post(this.UrlConflictos, dataConflictos);
    };
    FinalDemandaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FinalDemandaService);
    return FinalDemandaService;
}());



/***/ }),

/***/ "./src/app/services/localStorage/local-storage.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/localStorage/local-storage.service.ts ***!
  \****************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.getDataUsuario = function (datoSolicitado) {
        var DataUsuario = JSON.parse(localStorage.getItem('usuario'));
        switch (datoSolicitado) {
            case 'nombres':
                return DataUsuario.nombresPersona;
                break;
            case 'apellidos':
                return DataUsuario.apellidosPersona;
                break;
            case 'tipoDocumento':
                return DataUsuario.tipoDocumentoPersona;
                break;
            case 'numeroDocumento':
                return DataUsuario.numeroDocumentoPersona;
                break;
            case 'codigoCiudad':
                return DataUsuario.codigoCiudad;
                break;
            default:
                return 'dato no existente o mal consultado';
        }
    };
    LocalStorageService.prototype.getDataEmpresa = function (datoSolicitado) {
        var DataEmpresa = JSON.parse(localStorage.getItem('demandadoJuridico'));
        switch (datoSolicitado) {
            case 'nit':
                return DataEmpresa.NItEmpresa;
                break;
            case 'razonSocial':
                return DataEmpresa.nombreEmpresaRS;
                break;
            default:
                return 'dato no existente o mal consultado';
        }
    };
    LocalStorageService.prototype.getDataDemandadoNatural = function (datoSolicitado) {
        var DataDemandadoNatural = JSON.parse(localStorage.getItem('DemandadoNatural'));
        switch (datoSolicitado) {
            case 'tipoDocumento':
                return DataDemandadoNatural.tipoDocumentoPersona;
                break;
            case 'numeroDocumentoPersona':
                return DataDemandadoNatural.numeroDocumentoPersona;
                break;
            case 'idPersona':
                var numeroString = this.getDataDemandadoNatural('numeroDocumentoPersona');
                console.log("id antes de multiplicaci\u00F3n: " + typeof (numeroString));
                var numero = parseInt(numeroString, 10);
                console.log("id despu\u00E9s de convertir a int: " + numero);
                numero = numero * 100;
                numero = numero + 10;
                console.log("id de persona Natural: " + numero);
                return numero;
                break;
            default:
                return 'dato no existente o mal consultado';
        }
    };
    LocalStorageService.prototype.setDataInLocalStorage = function (nombreCampo, data) {
        localStorage.setItem(nombreCampo, data);
    };
    LocalStorageService.prototype.getSeleccionConflicto = function () {
        var seleccionDemandado_ = localStorage.getItem('seleccionDemandado');
        return seleccionDemandado_;
    };
    LocalStorageService.prototype.getDataContrato = function (datoSolicitado) {
        var dataContrato = JSON.parse(localStorage.getItem('contratoData'));
        switch (datoSolicitado) {
            case 'id':
                return dataContrato.id;
                break;
            case 'inicio':
                return dataContrato.general.fechaInicioContrato;
                break;
            case 'final':
                return dataContrato.general.fechaFinalContrato;
                break;
            case 'tipo':
                return dataContrato.general.tipoContrato;
                break;
        }
    };
    LocalStorageService.prototype.getConflictoDSJC = function () {
        var conflictoDSJC = JSON.parse(localStorage.getItem('detalleDespidoSJC'));
        return conflictoDSJC.fechaDespidoSJC;
    };
    LocalStorageService.prototype.getConflictoPagoSalario = function () {
        var conflictoSalarios = JSON.parse(localStorage.getItem('detalleNoPagoSalario'));
        return conflictoSalarios;
    };
    LocalStorageService.prototype.getConflictoVacaciones = function () {
        var conflictoVacas = JSON.parse(localStorage.getItem('detalleNoPagoVacas'));
        return conflictoVacas;
    };
    LocalStorageService.prototype.getConflictoCesantias = function () {
        var conflictoCesantias = JSON.parse(localStorage.getItem('detalleNoPagoCesantias'));
        return conflictoCesantias;
    };
    LocalStorageService.prototype.getConflictoPrimas = function () {
        var conflictoPrimas = JSON.parse(localStorage.getItem('detalleNoPagoPrima'));
        return conflictoPrimas;
    };
    LocalStorageService.prototype.getConflictosSeleccionados = function () {
        var seleccionConflictos = JSON.parse(localStorage.getItem('dataConflictos'));
        return seleccionConflictos;
    };
    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/services/personaNatural/persona-natural.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/services/personaNatural/persona-natural.service.ts ***!
  \********************************************************************/
/*! exports provided: PersonaNaturalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaNaturalService", function() { return PersonaNaturalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PersonaNaturalService = /** @class */ (function () {
    function PersonaNaturalService(http) {
        this.http = http;
        this.urlPersonaNatural = 'https://back-laborapp.herokuapp.com/api/laborapp/demandado/persona-natural';
    }
    PersonaNaturalService.prototype.guardarPersonaNatural = function (PersonaNatural_) {
        return this.http.post(this.urlPersonaNatural, PersonaNatural_);
    };
    PersonaNaturalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PersonaNaturalService);
    return PersonaNaturalService;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-usuario-usuario-module.js.map