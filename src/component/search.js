import {Component} from "../core/component.js";
import {pageApplication} from "../main.js";

export class SearchComponent extends Component {
    constructor(id) {
        super(id);

    }
  value () {
        return this.filters
  }
    init() {
        this.filters = {}
        Object.values(this.component).forEach(fieldForm => {
            this.filters[fieldForm.name] = fieldForm.value
        })
        this.component.addEventListener('input', onSearchTextHandler.bind(this))
    }
}

clear() {
    this.component.title.value = '';
    this.component.status.value = 'all';
    this.filters.title = '';
    this.filters.status = 'all'
}

function onSearchTextHandler(e) {
    e.preventDefault();
    Object.keys(this.filters).forEach(field => {
        this.filters[field] = this.component[field].value
    })
    pageApplication.show()
}