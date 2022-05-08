export class ClassRegExp{
    private CLASS_REGEXP: RegExp = /^[_a-z0-9]{6,}$/;

    public validate(regex:string){
        return this.CLASS_REGEXP.test(regex)
    }
}