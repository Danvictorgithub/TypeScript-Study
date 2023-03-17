import { Payments } from "./classes/Payment.js";
import { Invoices } from "./classes/Invoice.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTempate } from "./classes/ListTemplate.js";
// DOMS
const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//Sample Payments/Invoices
const samplePayment:HasFormatter = new Payments('Dan','Developer',250);
// const sampleInvoice:HasFormatter = new Invoices('Joshua','Coding',300);
// const logList:HasFormatter[] = []; 
// logList.push(samplePayment,sampleInvoice);

const ul = document.querySelector('ul')!;
const list = new ListTempate(ul);

let renderLog:Function = (logList:HasFormatter) => {
    
};
form.addEventListener('submit',(e:Event)=> {
    e.preventDefault();
    let doc:HasFormatter;
    console.log(type.value);    
    if (type.value === 'invoice') {
        doc = new Invoices(toFrom.value,details.value,amount.valueAsNumber);
        list.render(doc,type.value,"start");
    }
    else {
        doc = new Payments(toFrom.value,details.value,amount.valueAsNumber);
        list.render(doc,type.value,"end");
    }
})

// GENERICS

const addUID = <T extends object>(obj:T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj,uid};
}
let docOne = addUID({name:'yoshi',age:40});
// let docTwo = addUID("memes");

enum ResourceType {BOOK,AUTHOR,FILM,DIRECTOR,PERSON};

console.log(docOne.age);
interface Resource<T> {
    uid:number;
    resourceNumber:number;
    data:T;
}
const docThree:Resource<string> = {
    uid:1,
    resourceNumber:ResourceType.AUTHOR,
    data:"memes"
}
let tup:[string,number,boolean] = ['ryu',25,true];