import { HasFormatter } from "../interfaces/HasFormatter";
export class Invoices implements HasFormatter{ 
    readonly client: string;
    private details: string;
    public amount: number;
    constructor(a:string, b:string,c:number) {
        this.client = a;
        this.details = b;
        this.amount = c;
    }
    format():string {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}