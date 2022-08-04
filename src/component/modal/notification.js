import {Component} from "../../core/component";

export class Notification extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.notificationText = this.component.firstElementChild
    }

    onHide() {
        clearTimeout(this.timeId)
    }

    onShow(text) {
        this.notificationText.innerText = text
        this.timeId = setTimeout(() =>{
            this.hide()
        }, 2000)

    }
}