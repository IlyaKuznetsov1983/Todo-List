import {Storage} from "../core/storage.js";

export const renderConfirm = (todoId) => {
    const todo = Storage.getTodoInfo(todoId)

    return `
    <div class="modal-container modal-container-confirm">
        <h2 class="modal__notice">gfgjfgjfgjjfgjg
            <span class="modal__notice-name">название задачи</span>
            fgfnfgnfnfgn
        </h2>
        <div className="modal__actions">
            <button class="modal_btn btn_agree btn" type="submit">ys</button>
            <button class="modal_btn btn_disagree btn" type="submit">no</button>
        </div>
    </div>`
}

