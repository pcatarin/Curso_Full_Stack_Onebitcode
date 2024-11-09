import { Component } from "./Component.js";

export class Form extends Component {
    constructor (parent, options) {
        super ('form', parent, options)
    }

    addChildren (...children) {
    //neste método usaremos a arrow function pois a arrow function captura o this dos elementos externos, ja a função padrão tem seu próprio this
        children.forEach(child => {
            this.getElement().appendChild(child.getElement())
        })
    }
}