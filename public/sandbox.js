import { Payments } from "./classes/Payment.js";
import { Invoices } from "./classes/Invoice.js";
import { ListTempate } from "./classes/ListTemplate.js";
// DOMS
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//Sample Payments/Invoices
const samplePayment = new Payments('Dan', 'Developer', 250);
// const sampleInvoice:HasFormatter = new Invoices('Joshua','Coding',300);
// const logList:HasFormatter[] = []; 
// logList.push(samplePayment,sampleInvoice);
const ul = document.querySelector('ul');
const list = new ListTempate(ul);
let renderLog = (logList) => {
};
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    console.log(type.value);
    if (type.value === 'invoice') {
        doc = new Invoices(toFrom.value, details.value, amount.valueAsNumber);
        list.render(doc, type.value, "start");
    }
    else {
        doc = new Payments(toFrom.value, details.value, amount.valueAsNumber);
        list.render(doc, type.value, "end");
    }
});
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
// let docTwo = addUID("memes");
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
;
console.log(docOne.age);
const docThree = {
    uid: 1,
    resourceNumber: ResourceType.AUTHOR,
    data: "memes"
};
let tup = ['ryu', 25, true];
