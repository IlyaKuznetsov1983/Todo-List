import {notification} from "../main";

export {notification} from '../main.js'

export class Storage {
    static createNewUser(userData) {
        if (!localStorage.getItem('user')) {
            localStorage.setItem('users', JSON.stringify(userData))

        } else {
            if (checkUserExist(userData)) {
                notification.show('This user already exist')
                return
            } else {

            }
            const existUsers = JSON.parse(localStorage.getItem('user'))
            localStorage.setItem('users', JSON.stringify([...existUsers, userData]))


        }
        notification.show('Account is created')
        return userData.id
    }

    static enterTodoList(loginData) {
        const existUsers = localStorage.getItem('users')
            ? JSON.parse(localStorage.getItem('users'))
            : []

        const user = existUsers.find(({name, password}) => {
            return name === loginData.name && password === loginData.password
        })

        if (user) {
            return user.id
        }


    }
    static createPost(postData){
          const users = localStorage.getItem('users')
          const currentUser = findUserData()
        if (!currentUser) return;
        const updateUser = {
            ...currentUser,
            todoList: [...currentUser.todoList, postData]
        }
        const indexCurrentUser = users.findIndex(user => user.id === currentUser.id)
        const updateUsersArray = [...users.slice(0,indexCurrentUser), updateUser, ...users.slice(indexCurrentUser + 1)]
        localStorage.setItem('users', JSON.stringify(updateUsersArray))
        notification.show('Post created')
    }

    static getUserData() {
        return findUserData()
    }

 static getTodoInfo(todoId) {
        const currentUser = findUserData()
     return currentUser.todoList.find(todo => todo.id === parseInt(todoId)
 }
}


function checkUserExist(newUserData) {
    let isUser = false
    const existUsers = localStorage.getItem('users')
        ? JSON.parse(localStorage.getItem('users'))
        : []
    existUsers.forEach(({name, email}) => {
        if (name === newUserData.name && email === newUserData.email) {
            isUser = true
        }
    })

    return isUser

}

function findUserData() {
    const userId = JSON.parse(localStorage.getItem('selectedUserId'))
    if (!userId) return
    const users = JSON.parse(localStorage.getItem('users'))
    return users.find(user => user.id === userId)
}





