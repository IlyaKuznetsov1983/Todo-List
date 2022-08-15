import {Storage} from "../core/storage";

export  const renderTodoInfo = (todoId) => {
    const todo = Storage.getTodoInfo(todoId)

    return `
     <div class="modal-container modal-container-info">
        <h2 class="modal__title">${todo.title}</h2>
        <p class="modal__description">${todo.description}</p>
        <button class="modal_btn btn" type="submit">Okey</button>
    </div>
    `
}