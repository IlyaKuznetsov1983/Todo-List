import {Component} from "../core/component.js";
import {Form} from "../core/form.js"
import {Validator} from "../core/validators.js";
import {Storage} from "../core/storage.js";
import {pageApplication} from "../main.js";

export class SingUpComponent extends Component {
    constructor(id, pageAuthorization) {
        super(id);
        this.pageAuthorization = pageAuthorization
    }

    init() {
        this.component.addEventListener('submit', onSubmitHandler.bind(this))
        this.formData = new Form(this.component, {
            name: [Validator.required],
            // email: [Validator.required, Validator.isEmailValid],
            email: [Validator.required],
            // password: [Validator.required, Validator.isPasswordValid]
            password: [Validator.required]
        })

    }

    onHide() {
        this.formData.clear()
    }

}

function onSubmitHandler(e) {
    e.preventDefault()
    if (this.formData.isValid()) {
        const formData = {
            ...this.formData.value(),
            id: new Date().getTime(),
            todoList: [],
            theme: 'gray'
        }
        this.formData.clear()
        const userId = Storage.createNewUser(formData)
        if (!userId) return
        localStorage.setItem('selectedUserId', userId)
        this.pageAuthorization.hide()
        pageApplication.show()
    }
}
