import {ClassRegExp} from "./ClassRegExp";

let validClass: string[] = ["123abc_", "_abc123", "______", "123456", "abcdefgh"];
let invalidClass: string[] = [".@", "12345", "1234_", "abcde"];

for (let className of validClass) {
    let classRegex = new ClassRegExp()
    let isvalid: boolean = classRegex.validate(className);
    if(isvalid){
        console.log("Class is " + className + " is valid" )
    } else {
        console.log("Class is " + className + " is not valid" )
    }
}
for (let className of invalidClass) {
    let classRegex = new ClassRegExp()
    let isvalid: boolean = classRegex.validate(className);
    if(isvalid){
        console.log("Class is " + className + " is valid" )
    } else {
        console.log("Class is " + className + " is not valid" )
    }
}
