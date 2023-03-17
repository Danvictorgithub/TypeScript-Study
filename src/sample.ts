//typescript study

// //variable with type declaration
// let variable:number;
// let variable1:string;
// let variable2:boolean;
// // array with type declaration
// let numberArray:number[] = [];
// let stringArray:string[] = [];
// let booleanArray:boolean[] = [];
// // special case of array with multiple types (union)
// let mixed:(string|number)[] = [];

// let object:object;

// let object2: {
//     name: string,
//     age: number,
//     isAdmin: boolean,
// };

// object2 = {
//     name: "dan",
//     age: 20,
//     isAdmin:false,
// }
// // Functions
// let greet:Function;
// greet = ()=> {
//     console.log("Hello World");
// }

// const add = (a:number, b:number, c?:number|string):void => {
//     console.log(a+b);
//     console.log(c);
// }

// function minus(a:number,b:number):number{
//     return a-b;
// }
// let result:number;
// result = minus(5,3);
// // console.log(result);

// //Type aliases
// type StringOrNumber = string|number;

// let someArray:StringOrNumber[] = [];
// someArray.push('memes');
// someArray.push(69);
// // Function Signatures

// // example 1

// let functionOne: (a:string, b:string) => void;
// functionOne = (stringOne:string, stringTwo:string) => {
//     console.log(stringOne,stringTwo);
// }
// functionOne("memes","deceased");
// // example 2 
// let functionTwo: (a:number,b:number,c:string) => number;

// functionTwo = (left:number,right:number,operation:string)=> {
//     if (operation === "add") {
//         return left+right;
//     }
//     else {
//         return left-right;
//     }
// }
// // example 3
// let functionThree: (obj:{name:string,age:number}) => void;
// functionThree = (personObject:{name:string,age:number}) => {
//     console.log(`${personObject.name} is ${personObject.age} years old`);
// };
// functionThree({name:"dan",age:20});

// // const anchor = document.querySelector('a')!;

// // console.log(anchor.href);
// // const form = document.querySelector('form')!;
// // const form = document.querySelector('.new-item-form') as HTMLFormElement;
// // const type = document.querySelector('#type') as HTMLSelectElement;
// // const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
// // const details = document.querySelector('#details') as HTMLInputElement;
// // const amount = document.querySelector('#amount') as HTMLInputElement;

// // form.addEventListener('submit',(e:Event)=> {
// //     e.preventDefault();
// //     console.log(type.value,toFrom.value,details.value,amount.valueAsNumber);
// // })
interface HasFormatter {
    format():string;
}

export class Invoice implements HasFormatter{ 
    private client: string;
    public details: string;
    private amount: number;
    constructor(a:string, b:string,c:number) {
        this.client = a;
        this.details = b;
        this.amount = c;
    }
    format():string {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}