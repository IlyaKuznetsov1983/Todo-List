import {Component} from "../../core/component.js";
import {renderTodos} from "../../template/render-post.js";

export  class TodoInfoModal extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.component.addEventListener('click', onCloseModalHandler.bind(this))
    }
    onShow(todoId) {
        this.component.innerHTML = ''
        this.htmlInfo = renderTodos(todoId)
        this.component.insertAdjacentHTML('afterbegin', this.htmlInfo)
    }
}

function onCloseModalHandler(e) {
    const {target} = e
    const isBg = this.component == target
    const isOkBtn = target == this.component.querySelector('.modal__btn')
    if (isBg || isOkBtn) this.hide()
}