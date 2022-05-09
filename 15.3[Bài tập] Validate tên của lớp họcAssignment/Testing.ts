import {ClassRegExp} from "./ClassRegExp";

let validClass: string[] = ["C0318G", "A2384M"];
let invalidClass: string[] = ["M0318G", "P0323A"];

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
