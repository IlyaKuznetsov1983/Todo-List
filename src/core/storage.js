export class Storage {
    static createNewUser(userData) {
        if (!localStorage.getItem('user')) {
            localStorage.setItem('users', JSON.stringify(userData))

        }else {
            const existUsers = JSON.parse(localStorage.getItem('users'))
            localStorage.setItem('users', JSON.stringify([...existUsers, userData]))
        }
    }
}