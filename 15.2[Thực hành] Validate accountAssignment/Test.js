"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AccountRegExp_1 = require("./AccountRegExp");
var accountRegex = new AccountRegExp_1.AccountRegex();
var validAccount = ["123abc_", "_abc123", "______", "123456", "abcdefgh"];
var invalidAccount = [".@", "12345", "1234_", "abcde"];
for (var _i = 0, validAccount_1 = validAccount; _i < validAccount_1.length; _i++) {
    var account = validAccount_1[_i];
    var isvalid = accountRegex.validate(account);
    if (isvalid) {
        console.log("Account is " + account + " is valid");
    }
    else {
        console.log("Account is " + account + " is not valid");
    }
}
for (var _a = 0, invalidAccount_1 = invalidAccount; _a < invalidAccount_1.length; _a++) {
    var account = invalidAccount_1[_a];
    var isvalid = accountRegex.validate(account);
    if (isvalid) {
        console.log("Account is " + account + " is valid");
    }
    else {
        console.log("Account is " + account + " is not valid");
    }
}
