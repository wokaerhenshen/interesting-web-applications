"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    // *** Same as above.
    AppComponent.prototype.clear = function () {
        this.addnum1 = null;
        this.addnum2 = null;
        this.difnum1 = null;
        this.difnum2 = null;
        this.mulnum1 = null;
        this.mulnum2 = null;
        this.divnum1 = null;
        this.divnum2 = null;
    };
    AppComponent.prototype.getround = function (num, len) {
        return Math.round(num * Math.pow(10, len)) / Math.pow(10, len);
    };
    AppComponent.prototype.doAddition = function () {
        this.resultadd = (this.getround((Number(this.addnum1) + Number(this.addnum2)), 2)).toString();
        this.resultadd = this.addnum1 + " + " + this.addnum2 + " = " + this.resultadd;
        this.clear();
        this.resultdiff = null;
        this.resultmul = null;
        this.resultdiv = null;
        // Number(this.Operand1)+1;
    };
    AppComponent.prototype.doDifference = function () {
        this.resultdiff = this.getround((Number(this.difnum1) - Number(this.difnum2)), 2).toString();
        this.resultdiff = this.difnum1 + " - " + this.difnum2 + " = " + this.resultdiff;
        this.clear();
        this.resultadd = null;
        this.resultmul = null;
        this.resultdiv = null;
    };
    AppComponent.prototype.doProduct = function () {
        this.resultmul = this.getround((Number(this.mulnum1) * Number(this.mulnum2)), 2).toString();
        this.resultmul = this.mulnum1 + " * " + this.mulnum2 + " = " + this.resultmul;
        this.clear();
        this.resultadd = null;
        this.resultdiff = null;
        this.resultdiv = null;
    };
    AppComponent.prototype.doQuotient = function () {
        this.resultdiv = this.getround((Number(this.divnum1) / Number(this.divnum2)), 2).toString();
        this.resultdiv = this.divnum1 + " / " + this.divnum2 + " = " + this.resultdiv;
        this.clear();
        this.resultadd = null;
        this.resultdiff = null;
        this.resultmul = null;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map