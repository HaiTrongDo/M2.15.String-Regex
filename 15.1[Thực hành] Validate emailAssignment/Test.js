"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Email_RegExp_1 = require("./Email-RegExp");
var emailRegex = new Email_RegExp_1.EmailRegExp();
var validEmail = ["a@gmail.com", "ab@yahoo.com", "abc@hotmail.com"];
var invalidEmail = ["@gmail.com", "ab@gmail.", "@#abc@gmail.com"];
for (var _i = 0, validEmail_1 = validEmail; _i < validEmail_1.length; _i++) {
    var email = validEmail_1[_i];
    var isvalid = emailRegex.validate(email);
    if (isvalid) {
        console.log("Email is " + email + " is valid");
    }
    else {
        console.log("Email is " + email + " is not valid");
    }
}
for (var _a = 0, invalidEmail_1 = invalidEmail; _a < invalidEmail_1.length; _a++) {
    var email = invalidEmail_1[_a];
    var isvalid = emailRegex.validate(email);
    if (isvalid) {
        console.log("Email is " + email + " is valid");
    }
    else {
        console.log("Email is " + email + " is not valid");
    }
}
