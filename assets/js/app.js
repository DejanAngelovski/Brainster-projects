const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const nameEl = document.querySelector('#name');
const telefonEl = document.querySelector('#telefon');
const form = document.querySelector('#signup');


const checkUsername = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'Ве молиме внесете ваше име и презиме.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Името мора да биде помеѓу ${min} и ${max} карактери.`)
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Ве молиме внесете е-мејл адреса.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Мејл не е валиден.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};


const checkName = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const name = nameEl.value.trim();

    if (!isRequired(name)) {
        showError(nameEl, 'Ве молиме внесете име на компанијата.');
    } else if (!isBetween(name.length, min, max)) {
        showError(nameEl, `Името мора да биде помеѓу ${min} и ${max} карактери.`)
    } else {
        showSuccess(nameEl);
        valid = true;
    }
    return valid;
};

const checkTelefon = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const telefon = telefonEl.value.trim();

    if (!isRequired(telefon)) {
        showError(telefonEl, 'Ве молиме внесете контакт телефон.');
    } else if (!isBetween(telefon.length, min, max)) {
        showError(telefonEl, `Бројот мора да биде помеѓу ${min} и ${max} карактери.`)
    } else {
        showSuccess(telefonEl);
        valid = true;
    }
    return valid;
};





const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};



const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field  element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername(),
        isNameValid = checkName(),
        isTelefonValid = checkTelefon(),
        isEmailValid = checkEmail();
       

    let isFormValid = isUsernameValid &&
        isNameValid && isTelefonValid &&
        isEmailValid;
       

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'name':
                checkName();
                break;
        case 'telefon':
                checkTelefon();
                break;
        case 'email':
            checkEmail();
            break;
       
    }
}));
