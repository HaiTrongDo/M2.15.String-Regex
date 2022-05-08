import {EmailRegExp} from "./Email-RegExp";

let emailRegex = new EmailRegExp();
let validEmail: string[] = ["a@gmail.com", "ab@yahoo.com", "abc@hotmail.com"];
let invalidEmail: string[] = ["@gmail.com", "ab@gmail.", "@#abc@gmail.com"];

for (let email of validEmail) {
    let isvalid: boolean = emailRegex.validate(email);
    if(isvalid){
        console.log("Email is " + email + " is valid" )
    } else {
        console.log("Email is " + email + " is not valid" )
    }
}

for (let email of invalidEmail) {
    let isvalid: boolean = emailRegex.validate(email);
    if(isvalid){
        console.log("Email is " + email + " is valid" )
    } else {
        console.log("Email is " + email + " is not valid" )
    }
}