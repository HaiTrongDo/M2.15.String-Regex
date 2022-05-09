export class ClassRegExp{
    private CLASS_REGEXP: RegExp = /^[ACP]\d{4,}[GHIKLM]$/;

    public validate(regex:string){
        return this.CLASS_REGEXP.test(regex)
    }
}