export class EmailRegExp {
    private EMAIL_REGEXP : RegExp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;

    public validate (regex: string): boolean{
        return this.EMAIL_REGEXP.test(regex);
    }
}