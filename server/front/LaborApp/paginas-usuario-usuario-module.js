(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-usuario-usuario-module"],{

/***/ "./src/app/paginas/usuario/contactar-abogado/contactar-abogado.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/paginas/usuario/contactar-abogado/contactar-abogado.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n\twidth: 100%;\r\n\theight: 91%;\r\n\tmargin: auto;\r\n\r\n\tpadding: 0 1.5rem;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.titulo{\r\n\tcolor: #2196f3;\r\n\tfont-size: 2rem;\r\n\tfont-weight: normal;\r\n\tline-height: 110%;\r\n\tmargin-top: 1rem;\r\n  text-align: center;\r\n}\r\n\r\ntextarea{\r\n  min-height: 50px;\r\n  max-height: 200px;\r\n\r\n}\r\n\r\n@media (min-width:470px) {\r\n\t.card{\r\n\t\twidth: 423px;\r\n\t}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2NvbnRhY3Rhci1hYm9nYWRvL2NvbnRhY3Rhci1hYm9nYWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLGFBQWE7O0NBRWIsa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCx1QkFBdUI7Q0FDdkIsb0JBQW9CO0NBQ3BCLHdCQUF3QjtDQUN4Qjs7QUFFRDtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsb0JBQW9CO0NBQ3BCLGtCQUFrQjtDQUNsQixpQkFBaUI7RUFDaEIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7Q0FFbkI7O0FBRUQ7Q0FDQztFQUNDLGFBQWE7RUFDYjtDQUNEIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2NvbnRhY3Rhci1hYm9nYWRvL2NvbnRhY3Rhci1hYm9nYWRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogOTElO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHJcblx0cGFkZGluZzogMCAxLjVyZW07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXR1bG97XHJcblx0Y29sb3I6ICMyMTk2ZjM7XHJcblx0Zm9udC1zaXplOiAycmVtO1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0bGluZS1oZWlnaHQ6IDExMCU7XHJcblx0bWFyZ2luLXRvcDogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRleHRhcmVhe1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDo0NzBweCkge1xyXG5cdC5jYXJke1xyXG5cdFx0d2lkdGg6IDQyM3B4O1xyXG5cdH1cclxufVxyXG4iXX0= */"

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

module.exports = ".container{\r\n\twidth: 100%;\r\n\theight: auto;\r\n\tmargin: auto;\r\n\r\n\tpadding: 0 1.5rem;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n\r\n.titulo{\r\n\tcolor: #2196f3;\r\n\tfont-size: 2rem;\r\n\tfont-weight: normal;\r\n\tline-height: 110%;\r\n\tmargin-top: 1rem;\r\n\ttext-align: center;\r\n}\r\n\r\n\r\nform{\r\n  width: 100%;\r\n\theight: 100%;\r\n  display: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n\r\n.nombre-inputs{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n\r\n.half-width{\r\n  width: 49%;\r\n}\r\n\r\n\r\n.mb-1{\r\n\tmargin-bottom: 1rem;\r\n}\r\n\r\n\r\n@media (max-width: 470px) {\r\n\t.nombre-inputs{\r\n\t  display: flex;\r\n\t  flex-direction: column;\r\n\t  justify-content: space-between;\r\n\t}\r\n\t.half-width{\r\n\t  width: 100%;\r\n\t}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2dlbmVyYXItZGVtYW5kYS9kYXRvcy1jb250cmF0by9kYXRvcy1jb250cmF0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixhQUFhOztDQUViLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtDQUNwQix3QkFBd0I7Q0FDeEI7OztBQUdEO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixvQkFBb0I7Q0FDcEIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkI7OztBQUVEO0VBQ0UsWUFBWTtDQUNiLGFBQWE7RUFDWixjQUFjO0NBQ2YsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtDQUNwQix3QkFBd0I7Q0FDeEI7OztBQUdEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiwrQkFBK0I7Q0FDaEM7OztBQUVEO0VBQ0UsV0FBVztDQUNaOzs7QUFFRDtDQUNDLG9CQUFvQjtDQUNwQjs7O0FBR0Q7Q0FDQztHQUNFLGNBQWM7R0FDZCx1QkFBdUI7R0FDdkIsK0JBQStCO0VBQ2hDO0NBQ0Q7R0FDRSxZQUFZO0VBQ2I7Q0FDRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvdXN1YXJpby9nZW5lcmFyLWRlbWFuZGEvZGF0b3MtY29udHJhdG8vZGF0b3MtY29udHJhdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHJcblx0cGFkZGluZzogMCAxLjVyZW07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4udGl0dWxve1xyXG5cdGNvbG9yOiAjMjE5NmYzO1xyXG5cdGZvbnQtc2l6ZTogMnJlbTtcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdGxpbmUtaGVpZ2h0OiAxMTAlO1xyXG5cdG1hcmdpbi10b3A6IDFyZW07XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5mb3Jte1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5ub21icmUtaW5wdXRze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5oYWxmLXdpZHRoe1xyXG4gIHdpZHRoOiA0OSU7XHJcbn1cclxuXHJcbi5tYi0xe1xyXG5cdG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDcwcHgpIHtcclxuXHQubm9tYnJlLWlucHV0c3tcclxuXHQgIGRpc3BsYXk6IGZsZXg7XHJcblx0ICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdCAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdH1cclxuXHQuaGFsZi13aWR0aHtcclxuXHQgIHdpZHRoOiAxMDAlO1xyXG5cdH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/datos-contrato/datos-contrato.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/datos-contrato/datos-contrato.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h5 class=\"titulo\">Información del Contrato Laboral</h5>\n\n  <mat-card class=\"card\">\n\n    <div class=\"full-width nombre-inputs \">\n\n      <mat-form-field class=\"half-width\">\n         <mat-select\n           #tipoDeContrato\n           placeholder=\"Tipo de Contrato\">\n\n           <mat-option #opcion value=\"TI\">Termino Indefinido</mat-option>\n           <mat-option value=\"PS\">Prestación de Servicios</mat-option>\n           <mat-option value=\"TF\">Termino Fijo</mat-option>\n           <mat-option value=\"OL\">Obra Labor</mat-option>\n\n         </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"half-width\">\n        <input\n          type=\"tel\"\n          matInput\n          placeholder=\"Ultimo salario devengado\"\n          required >\n      </mat-form-field>\n\n    </div>\n\n    <div class=\"full-width nombre-inputs \">\n\n      <mat-form-field class=\"half-width\">\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"Choose a date\" (click)=\"picker1.open()\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker touchUi #picker1></mat-datepicker>\n      </mat-form-field>\n\n      <mat-form-field class=\"half-width\">\n        <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose a date\" (click)=\"picker2.open()\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n        <mat-datepicker touchUi #picker2></mat-datepicker>\n      </mat-form-field>\n\n\n    </div>\n\n  </mat-card>\n\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DatosContratoComponent = /** @class */ (function () {
    function DatosContratoComponent() {
    }
    DatosContratoComponent.prototype.ngOnInit = function () {
    };
    DatosContratoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-datos-contrato',
            template: __webpack_require__(/*! ./datos-contrato.component.html */ "./src/app/paginas/usuario/generar-demanda/datos-contrato/datos-contrato.component.html"),
            styles: [__webpack_require__(/*! ./datos-contrato.component.css */ "./src/app/paginas/usuario/generar-demanda/datos-contrato/datos-contrato.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = ".generar-pdf-container{\r\n\twidth: 100%;\r\n\theight: auto;\r\n\tmargin: auto;\r\n\r\n\tpadding: 0 1.5rem;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.tooltip{\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.titulo{\r\n\tcolor: #2196f3;\r\n\tfont-size: 2rem;\r\n\tfont-weight: normal;\r\n\tline-height: 110%;\r\n\tmargin-top: 1rem;\r\n}\r\n\r\n.mat-h1{\r\n\tfont-size: 1.7rem;\r\n\ttext-align: center;\r\n}\r\n\r\n.mat-body{\r\n\tfont-size: 1.1rem;\r\n\ttext-align: justify;\r\n}\r\n\r\n.mt-1{\r\n\tmargin-top: 1rem\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2dlbmVyYXItZGVtYW5kYS9kYXRvcy1kZW1hbmRhZG8vZGF0b3MtZGVtYW5kYWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGFBQWE7O0NBRWIsa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCx1QkFBdUI7Q0FDdkIsb0JBQW9CO0NBQ3BCLHdCQUF3QjtDQUN4Qjs7QUFFRDtDQUNDLGtCQUFrQjtDQUNsQjs7QUFFRDtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsb0JBQW9CO0NBQ3BCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakI7O0FBRUQ7Q0FDQyxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25COztBQUVEO0NBQ0Msa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQjs7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvdXN1YXJpby9nZW5lcmFyLWRlbWFuZGEvZGF0b3MtZGVtYW5kYWRvL2RhdG9zLWRlbWFuZGFkby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdlbmVyYXItcGRmLWNvbnRhaW5lcntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cclxuXHRwYWRkaW5nOiAwIDEuNXJlbTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRvb2x0aXB7XHJcblx0bWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi50aXR1bG97XHJcblx0Y29sb3I6ICMyMTk2ZjM7XHJcblx0Zm9udC1zaXplOiAycmVtO1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0bGluZS1oZWlnaHQ6IDExMCU7XHJcblx0bWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLm1hdC1oMXtcclxuXHRmb250LXNpemU6IDEuN3JlbTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtYm9keXtcclxuXHRmb250LXNpemU6IDEuMXJlbTtcclxuXHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4ubXQtMXtcclxuXHRtYXJnaW4tdG9wOiAxcmVtXHJcbn1cclxuIl19 */"

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

module.exports = "\r\nform{\r\n  width: 100%;\r\n\theight: 100%;\r\n  display: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n\r\n.nombre-inputs{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n\r\n.half-width{\r\n  width: 49%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2dlbmVyYXItZGVtYW5kYS9kYXRvcy1kZW1hbmRhZG8vZGVtYW5kYS1qdXJpZGljYS9kZW1hbmRhLWp1cmlkaWNhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtDQUNiLGFBQWE7RUFDWixjQUFjO0NBQ2YsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtDQUNwQix3QkFBd0I7Q0FDeEI7OztBQUdEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiwrQkFBK0I7Q0FDaEM7OztBQUVEO0VBQ0UsV0FBVztDQUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2dlbmVyYXItZGVtYW5kYS9kYXRvcy1kZW1hbmRhZG8vZGVtYW5kYS1qdXJpZGljYS9kZW1hbmRhLWp1cmlkaWNhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZm9ybXtcclxuICB3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubm9tYnJlLWlucHV0c3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uaGFsZi13aWR0aHtcclxuICB3aWR0aDogNDklO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-juridica/demanda-juridica.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-juridica/demanda-juridica.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formularioJuridica\" class=\"full-width\" (ngSubmit)=\"log(representante.checked)\">\r\n\r\n    <div class=\"full-width nombre-inputs\">\r\n      <mat-form-field class=\"half-width\">\r\n        <input matInput\r\n          placeholder=\"Razón Social\"\r\n          formControlName=\"razonSocial\"\r\n          required>\r\n\r\n        <mat-icon\r\n          class=\"tooltip\"\r\n          matSuffix\r\n          matTooltip=\"Nombre de la empresa\">\r\n          help\r\n        </mat-icon>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"half-width\">\r\n        <input matInput\r\n          placeholder=\"NIT\"\r\n          formControlName=\"nit\"\r\n          required>\r\n\r\n        <mat-icon\r\n          class=\"tooltip\"\r\n          matSuffix\r\n          matTooltip=\"Número de Identificacion Tributario\">\r\n          help\r\n        </mat-icon>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n\r\n    <div class=\"full-width\" formGroupName=\"ubicacion\">\r\n\r\n\r\n      <mat-form-field class=\"full-width\">\r\n        <input  matInput placeholder=\"Dirección\" formControlName=\"direccion\" required>\r\n      </mat-form-field>\r\n\r\n      <div class=\"full-width nombre-inputs\">\r\n\r\n\r\n        <mat-form-field class=\"half-width\">\r\n          <mat-select placeholder=\"Departamento\" formControlName=\"departamento\" required>\r\n            <!-- <mat-option *ngFor=\"let d of listadoDepartamentos\"  value=\"{{ d.departamento }}\">{{ d.departamento }}</mat-option> -->\r\n            <mat-option value=\"opcion\">Opcion</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"half-width\">\r\n          <mat-select placeholder=\"Municipio\" formControlName=\"municipio\" required>\r\n            <!-- <mat-option *ngFor=\"let dYM of listDepartamentosYMunicipios\"  value=\"{{ dYM.municipio }}\">{{ dYM.municipio }}</mat-option> -->\r\n            <mat-option value=\"opcion\">Opcion</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"full-width nombre-inputs mb-1\">\r\n\r\n\r\n      <mat-form-field class=\"half-width\">\r\n        <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n        <mat-error *ngIf=\"formularioJuridica.get('email').invalid\">\r\n          {{getErrorMessage()}}\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n\r\n      <mat-form-field class=\"half-width\">\r\n\r\n        <input type=\"tel\" matInput placeholder=\"Telefono\" formControlName=\"telefono\" required>\r\n\r\n      </mat-form-field>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"full-width mb-1\">\r\n\r\n      <mat-checkbox #representante >\r\n        Sabe usted los datos del representante legal\r\n      </mat-checkbox>\r\n\r\n    </div>\r\n\r\n\r\n    <!-- Representante legal -->\r\n\r\n    <app-representante\r\n      *ngIf=\"representante.checked\"\r\n      (representanteFormulario)=\"eventoHijoFormulario($event)\"\r\n      class=\"full-width\">\r\n    </app-representante>\r\n\r\n\r\n<!--\r\n  <button mat-flat-button class=\"btn\"\r\n\r\n      type=\"submit\"\r\n      [disabled]=\"verificar(representante.checked)\"\r\n\r\n    ><a href=\"https://laborappi.herokuapp.com/api/laborapp/demanda/descargar/784333\">Continuar</a>\r\n  </button> -->\r\n  <a mat-flat-button class=\"btn\"\r\n\r\n    (click)=\"log(representante.checked)\"\r\n    [disabled]=\"verificar(representante.checked)\"\r\n\r\n  >Continuar</a>\r\n\r\n</form>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cedula_usuario_cedula_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/cedula-usuario/cedula-usuario.service */ "./src/app/services/cedula-usuario/cedula-usuario.service.ts");
/* harmony import */ var _services_demandadoJuridico_demandadojuridico_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/demandadoJuridico/demandadojuridico.service */ "./src/app/services/demandadoJuridico/demandadojuridico.service.ts");
/* harmony import */ var _services_demandaPdf_demanda_pdf_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/demandaPdf/demanda-pdf.service */ "./src/app/services/demandaPdf/demanda-pdf.service.ts");







var DemandaJuridicaComponent = /** @class */ (function () {
    function DemandaJuridicaComponent(formBuilder, router, activeRoute, cedulaUsuarioService, demandadojuridicoService, demandaPdfService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activeRoute = activeRoute;
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
    DemandaJuridicaComponent.prototype.ngOnInit = function () { };
    DemandaJuridicaComponent.prototype.eventoHijoFormulario = function (e) {
        this.formularioRepresentante = e;
    };
    DemandaJuridicaComponent.prototype.log = function (checked) {
        /*
        if( checked ){
          console.log(this.formularioJuridica.value.razonSocial);
          console.log(this.formularioRepresentante);
        }else{
          console.log(this.formularioJuridica.value.razonSocial);
        }
        */
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
                //window.location.href='https://laborappi.herokuapp.com/api/laborapp/demanda/descargar/784333';
                _this.router.navigate(['./datos-contrato'], { relativeTo: _this.activeRoute });
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
            template: __webpack_require__(/*! ./demanda-juridica.component.html */ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-juridica/demanda-juridica.component.html"),
            styles: [__webpack_require__(/*! ./demanda-juridica.component.css */ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-juridica/demanda-juridica.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_cedula_usuario_cedula_usuario_service__WEBPACK_IMPORTED_MODULE_4__["CedulaUsuarioService"],
            _services_demandadoJuridico_demandadojuridico_service__WEBPACK_IMPORTED_MODULE_5__["DemandadojuridicoService"],
            _services_demandaPdf_demanda_pdf_service__WEBPACK_IMPORTED_MODULE_6__["DemandaPdfService"]])
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

module.exports = ".representante{\r\n  width: 100%;\r\n\theight: 100%;\r\n  display: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.nombre-inputs{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.half-width{\r\n  width: 49%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2dlbmVyYXItZGVtYW5kYS9kYXRvcy1kZW1hbmRhZG8vZGVtYW5kYS1qdXJpZGljYS9yZXByZXNlbnRhbnRlL3JlcHJlc2VudGFudGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7Q0FDYixhQUFhO0VBQ1osY0FBYztDQUNmLHVCQUF1QjtDQUN2QixvQkFBb0I7Q0FDcEIsd0JBQXdCO0NBQ3hCOztBQUVEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiwrQkFBK0I7Q0FDaEM7O0FBRUQ7RUFDRSxXQUFXO0NBQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL3VzdWFyaW8vZ2VuZXJhci1kZW1hbmRhL2RhdG9zLWRlbWFuZGFkby9kZW1hbmRhLWp1cmlkaWNhL3JlcHJlc2VudGFudGUvcmVwcmVzZW50YW50ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcHJlc2VudGFudGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubm9tYnJlLWlucHV0c3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uaGFsZi13aWR0aHtcclxuICB3aWR0aDogNDklO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-juridica/representante/representante.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-juridica/representante/representante.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"formularioRepresentante\" class=\"full-width representante mb-1\">\r\n\r\n  <div class=\"full-width nombre-inputs\">\r\n    <mat-form-field class=\"half-width\">\r\n      <input matInput placeholder=\"Nombre\"  formControlName=\"nombre\" required>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"half-width\">\r\n      <input matInput placeholder=\"Apellido\" formControlName=\"apellido\" required>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div formGroupName=\"documento\" class=\"full-width nombre-inputs\">\r\n\r\n    <mat-form-field class=\"half-width\">\r\n      <mat-select placeholder=\"Tipo de Documento\" #tipoDeDocumento  formControlName=\"tipoDeDocumento\" >\r\n        <mat-option #opcionCC value=\"CC\">Cedula de Ciudadania</mat-option>\r\n        <mat-option value=\"CE\">Cedula de Exptranjeria</mat-option>\r\n        <mat-option value=\"Pasaporte\">Pasaporte</mat-option>\r\n        <mat-option value=\"Carnet Diplomatico\">Carnet Diplomatico</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"half-width\">\r\n      <input type=\"tel\" matInput placeholder=\"{{ tipoDeDocumento.value || opcionCC.value }}\" formControlName=\"numeroDeDocumento\" required>\r\n    </mat-form-field>\r\n\r\n  </div>\r\n\r\n\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput placeholder=\"Email\" formControlName=\"email\"  required>\r\n    <mat-error *ngIf=\"formularioRepresentante.get('email').invalid\">{{getErrorMessage()}}</mat-error>\r\n  </mat-form-field>\r\n\r\n\r\n</div>\r\n"

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

module.exports = "\r\nform{\r\n  width: 100%;\r\n\theight: 100%;\r\n  display: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n\r\n.nombre-inputs{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n\r\n.half-width{\r\n  width: 49%;\r\n}\r\n\r\n\r\n.mb-1{\r\n\tmargin-bottom: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2dlbmVyYXItZGVtYW5kYS9kYXRvcy1kZW1hbmRhZG8vZGVtYW5kYS1uYXR1cmFsL2RlbWFuZGEtbmF0dXJhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFlBQVk7Q0FDYixhQUFhO0VBQ1osY0FBYztDQUNmLHVCQUF1QjtDQUN2QixvQkFBb0I7Q0FDcEIsd0JBQXdCO0NBQ3hCOzs7QUFHRDtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsK0JBQStCO0NBQ2hDOzs7QUFHRDtFQUNFLFdBQVc7Q0FDWjs7O0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL3VzdWFyaW8vZ2VuZXJhci1kZW1hbmRhL2RhdG9zLWRlbWFuZGFkby9kZW1hbmRhLW5hdHVyYWwvZGVtYW5kYS1uYXR1cmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZm9ybXtcclxuICB3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubm9tYnJlLWlucHV0c3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5cclxuLmhhbGYtd2lkdGh7XHJcbiAgd2lkdGg6IDQ5JTtcclxufVxyXG5cclxuLm1iLTF7XHJcblx0bWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-natural/demanda-natural.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-natural/demanda-natural.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form\r\n  [formGroup]=\"formularioNatural\"\r\n  class=\"full-width\"\r\n  (ngSubmit)=\"log()\">\r\n\r\n\r\n\r\n  <div class=\"full-width nombre-inputs\">\r\n    <mat-form-field class=\"half-width\">\r\n      <input\r\n        matInput\r\n        placeholder=\"Nombre\"\r\n        formControlName=\"nombre\"\r\n        required>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"half-width\">\r\n      <input\r\n        matInput\r\n        placeholder=\"Apellido\"\r\n        formControlName=\"apellido\"\r\n        required>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n\r\n  <div class=\"full-width\" formGroupName=\"ubicacion\">\r\n\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <input\r\n        matInput\r\n        placeholder=\"Dirección\"\r\n        formControlName=\"direccion\"\r\n        required>\r\n    </mat-form-field>\r\n\r\n    <div class=\"full-width nombre-inputs\">\r\n\r\n      <mat-form-field class=\"half-width\">\r\n        <mat-select\r\n          placeholder=\"Departamento\"\r\n          formControlName=\"departamento\">\r\n\r\n          <mat-option value=\"option\">Option</mat-option>\r\n\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"half-width\">\r\n        <mat-select\r\n          placeholder=\"Municipio\"\r\n          formControlName=\"municipio\">\r\n\r\n          <mat-option value=\"option\">Option</mat-option>\r\n\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div formGroupName=\"documento\" class=\"full-width nombre-inputs\">\r\n\r\n    <mat-form-field class=\"half-width\">\r\n       <mat-select\r\n         #tipoDeDocumento\r\n         placeholder=\"Tipo de Documento\"\r\n         formControlName=\"tipoDeDocumento\" >\r\n\r\n         <mat-option #opcionCC value=\"CC\">Cedula de Ciudadania</mat-option>\r\n         <mat-option value=\"CE\">Cedula de Exptranjeria</mat-option>\r\n         <mat-option value=\"Pasaporte\">Pasaporte</mat-option>\r\n         <mat-option value=\"Carnet Diplomatico\">Carnet Diplomatico</mat-option>\r\n\r\n       </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"half-width\">\r\n      <input\r\n        type=\"tel\"\r\n        matInput\r\n        placeholder=\"{{ tipoDeDocumento.value || opcionCC.value }}\"\r\n        formControlName=\"numeroDeDocumento\"\r\n        required >\r\n    </mat-form-field>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"full-width nombre-inputs mb-1\">\r\n\r\n    <mat-form-field class=\"half-width\">\r\n      <input\r\n        matInput\r\n        placeholder=\"Email\"\r\n        formControlName=\"email\"\r\n        required>\r\n      <mat-error *ngIf=\"formularioNatural.get('email').invalid\">{{getErrorMessage()}}</mat-error>\r\n    </mat-form-field>\r\n\r\n\r\n    <mat-form-field class=\"half-width\">\r\n      <input\r\n        type=\"tel\"\r\n        matInput\r\n        placeholder=\"Telefono\"\r\n        formControlName=\"telefono\"\r\n        required>\r\n    </mat-form-field>\r\n\r\n  </div>\r\n\r\n\r\n  <button\r\n    mat-flat-button\r\n    type=\"submit\"\r\n    class=\"btn\"\r\n    [disabled]=\"!formularioNatural.valid\">\r\n    Continuar\r\n  </button>\r\n\r\n\r\n</form>\r\n"

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
            template: __webpack_require__(/*! ./demanda-natural.component.html */ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-natural/demanda-natural.component.html"),
            styles: [__webpack_require__(/*! ./demanda-natural.component.css */ "./src/app/paginas/usuario/generar-demanda/datos-demandado/demanda-natural/demanda-natural.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], DemandaNaturalComponent);
    return DemandaNaturalComponent;
}());



/***/ }),

/***/ "./src/app/paginas/usuario/home/home.component.css":
/*!*********************************************************!*\
  !*** ./src/app/paginas/usuario/home/home.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n\twidth: 100%;\r\n\theight: 90%;\r\n\tmargin: auto;\r\n\r\n\tpadding: 0 1.5rem;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.btn{\r\n  padding: 0.5rem 2rem;\r\n  margin-bottom: 1rem;\r\n  font-weight: 300;\r\n\r\n}\r\n\r\n.btn span{\r\n  font-size: 1.5rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtDQUNaLFlBQVk7Q0FDWixhQUFhOztDQUViLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtDQUNwQix3QkFBd0I7Q0FDeEI7O0FBRUQ7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGlCQUFpQjs7Q0FFbEI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL3VzdWFyaW8vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogOTAlO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHJcblx0cGFkZGluZzogMCAxLjVyZW07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG5cclxufVxyXG5cclxuLmJ0biBzcGFue1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbiJdfQ== */"

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
    HomeComponent.prototype.ngOnInit = function () {
    };
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

module.exports = ".container{\r\n\twidth: 100%;\r\n\theight: auto;\r\n\tmargin: auto;\r\n\r\n\tpadding: 0 1.5rem;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n\r\n.titulo{\r\n\tcolor: #2196f3;\r\n\tfont-size: 2rem;\r\n\tfont-weight: normal;\r\n\tline-height: 110%;\r\n\tmargin-top: 1rem;\r\n}\r\n\r\n\r\nform{\r\n  width: 100%;\r\n\theight: 100%;\r\n  display: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n\r\n.nombre-inputs{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n\r\n.subir-img{\r\n\r\n  align-self:flex-start;\r\n\tmargin-bottom: 1rem;\r\n}\r\n\r\n\r\n.half-width{\r\n  width: 49%;\r\n}\r\n\r\n\r\n.mb-1{\r\n\tmargin-bottom: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy91c3VhcmlvL3BlcmZpbC9wZXJmaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsYUFBYTs7Q0FFYixrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLHVCQUF1QjtDQUN2QixvQkFBb0I7Q0FDcEIsd0JBQXdCO0NBQ3hCOzs7QUFHRDtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsb0JBQW9CO0NBQ3BCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakI7OztBQUVEO0VBQ0UsWUFBWTtDQUNiLGFBQWE7RUFDWixjQUFjO0NBQ2YsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtDQUNwQix3QkFBd0I7Q0FDeEI7OztBQUdEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiwrQkFBK0I7Q0FDaEM7OztBQUVEOztFQUVFLHNCQUFzQjtDQUN2QixvQkFBb0I7Q0FDcEI7OztBQUVEO0VBQ0UsV0FBVztDQUNaOzs7QUFFRDtDQUNDLG9CQUFvQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvdXN1YXJpby9wZXJmaWwvcGVyZmlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRtYXJnaW46IGF1dG87XHJcblxyXG5cdHBhZGRpbmc6IDAgMS41cmVtO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLnRpdHVsb3tcclxuXHRjb2xvcjogIzIxOTZmMztcclxuXHRmb250LXNpemU6IDJyZW07XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRsaW5lLWhlaWdodDogMTEwJTtcclxuXHRtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG5mb3Jte1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5ub21icmUtaW5wdXRze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5zdWJpci1pbWd7XHJcblxyXG4gIGFsaWduLXNlbGY6ZmxleC1zdGFydDtcclxuXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uaGFsZi13aWR0aHtcclxuICB3aWR0aDogNDklO1xyXG59XHJcblxyXG4ubWItMXtcclxuXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbiJdfQ== */"

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








var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'perfil/:id', component: _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_5__["PerfilComponent"] },
    {
        path: 'generar',
        children: [
            { path: 'datos-demandado', component: _generar_demanda_datos_demandado_datos_demandado_component__WEBPACK_IMPORTED_MODULE_6__["DatosDemandadoComponent"] },
            { path: 'datos-contrato', component: _generar_demanda_datos_contrato_datos_contrato_component__WEBPACK_IMPORTED_MODULE_7__["DatosContratoComponent"] },
            { path: '', redirectTo: 'datos-demandado', pathMatch: 'full' },
        ]
    },
    { path: 'contactar-abogado', component: _contactar_abogado_contactar_abogado_component__WEBPACK_IMPORTED_MODULE_4__["ContactarAbogadoComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
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




//Custom module



//Componentes



//Componentes para generar la demanda





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



/***/ })

}]);
//# sourceMappingURL=paginas-usuario-usuario-module.js.map