import {notification} from "../main.js";

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

        if(user) {
            return user.id
        }
    }
}



function checkUserExist(newUserData) {
    let isUser = false
        const existUsers = localStorage.getItem('users')
            ? JSON.parse(localStorage.getItem('users'))
            : []
    existUsers.forEach(({name, email}) => {
        if (name === newUserData.name && email === newUserData.email){
            isUser = true
        }
    })

    return isUser

}





