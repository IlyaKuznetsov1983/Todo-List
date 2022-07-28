export class Component {
    constructor(id) {
        this.component = document.getElementById(id)
        this.init()
    }


    init(){}

    onHide(){
        hide(){}

        }
    }

    hide(){
        this.component.classList.add('hide')
    }
    show() {
        this.component.classList.remove('hide')
    }
}