"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClassRegExp_1 = require("./ClassRegExp");
var validClass = ["123abc_", "_abc123", "______", "123456", "abcdefgh"];
var invalidClass = [".@", "12345", "1234_", "abcde"];
for (var _i = 0, validClass_1 = validClass; _i < validClass_1.length; _i++) {
    var className = validClass_1[_i];
    var classRegex = new ClassRegExp_1.ClassRegExp();
    var isvalid = classRegex.validate(className);
    if (isvalid) {
        console.log("Class is " + className + " is valid");
    }
    else {
        console.log("Class is " + className + " is not valid");
    }
}
for (var _a = 0, invalidClass_1 = invalidClass; _a < invalidClass_1.length; _a++) {
    var className = invalidClass_1[_a];
    var classRegex = new ClassRegExp_1.ClassRegExp();
    var isvalid = classRegex.validate(className);
    if (isvalid) {
        console.log("Class is " + className + " is valid");
    }
    else {
        console.log("Class is " + className + " is not valid");
    }
}
