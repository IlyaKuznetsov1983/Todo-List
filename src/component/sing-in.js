import {Component} from "../core/component.js";
import {Form} from "../core/form.js";
import {Validator} from "../core/validators.js";
import {Storage} from "../core/storage.js";
import {pageApplication} from "../main.js";

export class SingInComponent extends Component {
    constructor(id, page) {
        super(id);
        this.page = page
    }

    init() {
        this.component.addEventListener('submit', onSubmitHandler.bind(this))
        this.formData = new Form(this.component, {
            name: [Validator.required],
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
            ...this.formData.value()
        }
        const userId = Storage.enterTodoList(formData)
        if (!userId) return;
        localStorage.setItem('selectedUserId', userId)
        this.page.hide()
        pageApplication.show()
    }


}