import { HasFormatter } from "../interfaces/HasFormatter.js";
export class ListTempate {
    container:HTMLUListElement;
    constructor(container:HTMLUListElement) {
        this.container = container;
    }
    render(item:HasFormatter,heading:string,pos:'start'|'end'):void {
        const li:HTMLLIElement = document.createElement('li');
        const h4:HTMLHeadingElement = document.createElement('h4');
        const p:HTMLParagraphElement = document.createElement('p');
        h4.innerText = heading;
        p.innerText = item.format();
        li.append(h4,p);
        if (pos === 'start') {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }
    }
}