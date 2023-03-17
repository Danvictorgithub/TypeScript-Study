export class Payments {
    constructor(a, b, c) {
        this.client = a;
        this.details = b;
        this.amount = c;
    }
    format() {
        return `${this.client} owed $${this.amount} for ${this.details}`;
    }
}
