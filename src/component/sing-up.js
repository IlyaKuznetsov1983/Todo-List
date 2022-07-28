import {Component} from "../core/component.js";
import {Form} from "../core/form.js"


export class SingUpComponent extends Component {
    constructor(id) {
        super(id);
    }
    init() {
        this.component.addEventListener('submit', onSubmitHandler.bind(this))
        this.formData = new Form(this.component, {
            name:[required],
            email: [ required,isEmailValid],
            password: [required]
        })


    }
}


function  onSubmitHandler(e) {
    e.preventDefault()
    if (this.formData.isValid()) {
        const formData = {
            ...this.form.value()
        }
        console.log(formData)
    }

}

function required(value = ''){
    return value && value.trim()
}

function isEmailValid(value = '') {
    const array = value.trim().split('')
    for (let i = 0; i < array.length; i++) {
    if(array[i] === ' ') return false
    }
    if (!value.includes('@')) return false

    return value.trim()
}

function isPasswordValid(value = '') {
    const counter = {
        letter: 0,
        digit: 0,
        upperCaseLetter:0
    }

    const array = value.split('')
    array.forEach(symbol => {
        if (typeof symbol === 'string' && !isFinite(symbol)) {
            counter.letter++
        }
        if (isFinite(symbol)) {
            if(symbol !== ' '){
                counter.digit++
            }
        }
        if (!isFinite((symbol) && symbol === symbol.toUpperCase()) {
            counter.upperCaseLetter++
        }
     }
    )
            for (let key in counter) {
            if (counter[key] === 0) return false
            }
        return value
}
