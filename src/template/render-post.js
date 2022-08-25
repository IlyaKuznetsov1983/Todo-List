import {Storage} from "../core/storage.js";


export const renderTodos = (filters) => {
    const {todoList} = Storage.getUserData()
    if (todoList.length === 0){
        return '<p class="todos-notice">List is empty</p>'
    }

    const  filtersTodoList = todoList.filter((todo) => {
        let isFindTodo = true
        Object.keys(filters).forEach((field) => {
            let isFind = true;
            switch (field){
                case 'title':
                    isFind = todo.title.toLowerCase().includes(filters[field])
                    if (!filters[field]) isFind = true
                case 'status':
                    isFind = todo.status.includes(filters[field])
                    if (filters[field] === 'all') isFind = true
                    break
            }
            isFindTodo = isFind && isFindTodo
        })
    })

    return todoList.map(todo => {
        const style = todo.status === 'done'
        ? 'todos__item todos__item_done'
             :'todos__item'
        return ` <div class="${style}"data-todo-id="${todo.id}" data-todo-id="${todo.status}">
                    <div class="todos__item-status"></div>
                    <p class="todos__item-title">${todo.title}</p>
                    <div class="todos__item-edit"></div>
                    <div class="todos__item-remove"></div>
                </div>`
    }).join(' ')

}