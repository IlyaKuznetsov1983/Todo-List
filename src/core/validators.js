export  class Validator {
    static required(value = '') {
        return value && value.trim
    }

static isEmailValid(value = ''){
        const array = value.trim().split('')
    for (let i=0; i < array.length; i++) {
        if (array[i] === ' ') return false
    }
    if (!value.includes('@')) return false

    return value.trim()
}

static isPasswordValid(value = '') {
        const counter = {
            letter: 0,
            digit: 0,
            upperCaseLetter: 0
        }

        const array = value.split('')
    array

}

}