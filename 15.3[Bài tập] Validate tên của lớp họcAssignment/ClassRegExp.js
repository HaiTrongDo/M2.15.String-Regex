"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassRegExp = void 0;
var ClassRegExp = /** @class */ (function () {
    function ClassRegExp() {
        this.CLASS_REGEXP = /^[_a-z0-9]{6,}$/;
    }
    ClassRegExp.prototype.validate = function (regex) {
        return this.CLASS_REGEXP.test(regex);
    };
    return ClassRegExp;
}());
exports.ClassRegExp = ClassRegExp;
