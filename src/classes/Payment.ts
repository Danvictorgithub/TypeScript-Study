import { HasFormatter } from "../interfaces/HasFormatter";
export class Payments implements HasFormatter{ 
    readonly client: string;
    private details: string;
    public amount: number;
    constructor(a:string, b:string,c:number) {
        this.client = a;
        this.details = b;
        this.amount = c;
    }
    format():string {
        return `${this.client} owed $${this.amount} for ${this.details}`;
    }
}