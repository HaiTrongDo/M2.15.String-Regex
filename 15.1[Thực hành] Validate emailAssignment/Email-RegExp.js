"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailRegExp = void 0;
var EmailRegExp = /** @class */ (function () {
    function EmailRegExp() {
        this.EMAIL_REGEXP = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    }
    EmailRegExp.prototype.validate = function (regex) {
        return this.EMAIL_REGEXP.test(regex);
    };
    return EmailRegExp;
}());
exports.EmailRegExp = EmailRegExp;
