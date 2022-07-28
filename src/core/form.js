export class Form {
    constructor(form, controls) {
        this.form = form
        this.controls = controls
    }
    value(){
        const value = {};
        Object.keys(this.controls).forEach(field => {
            value[field] = this.form[field].value()
        })
        return value
    }

    isValid(){
        let isValidateForm =  true

        Object.keys(this.controls).forEach((field) => {
            const validators = this.controls[field]

            let isValid = true
            validators.forEach(validator => {
                isValid = validator(this.form[field].value) && isValid
                console.log(this.form[field])
            })

            !isValid ? setNoticeError(this.form[field]) : cosole.log('валидно')

            isValidateForm = isValid && isValidateForm

        })
        return isValidateForm
    }
}

function  setNoticeError(input) {

 input.parentElement.classList.add('invalid')

    if (input.getAttribute('name') === 'name') {
        input.insertAdjacentHTML('afterend', setErrorText('Field is required'))

    }
    if (input.getAttribute('name') === 'email') {
        input.insertAdjacentHTML('afterend', setErrorText('Field is required ' 
            '(at: least: "@' symbol)'))

    }
    if (input.getAttribute('name') === 'password') {
        input.insertAdjacentHTML('afterend', setErrorText('Field is required
             + '(at: least: 1  letter , 1 diggit, 1 uppercase letter)'))

    }
}

function setErrorText(text) {
    return `<p class="form__field-warning">${text}</p>`
}