import {Component} from "../core/component.js";
import pageAuthorization from "./page-authorization";

export class PageApplication extends Component {
    constructor(id) {
        super(id);
        this.pageAuthorization = pageAuthorization
    }

    init() {
        this.logoutBtn = document.getElementById('logout')
        this.logoutBtn.addEventListener('click', onLogoutHandler.bind(this))
    }
}


function onLogoutHandler() {
    this.hide()
    localStorage.setItem('selectedUserId', null)
    this.pageAuthorization.show()
}