const email = document.getElementById("email");
const username = document.getElementById("login");
const password = document.getElementById("pass");
const password2 = document.getElementById("pass2");
const newsletter = document.getElementById('newletter');
const terms = document.getElementById('terms');


const fields = {
    email: {name: "email", reg: /^[\S]+@[a-zA-Z]+\.[a-zA-Z]+$/, element: email, message: "Email address should be non-empty with the format xyz@xyz.xyz.", state: true},
    name: {name: "username", reg: /^.{1,30}$/, element: username , message: "User name should be non-empty, and within 30 characters long.", state: true},
    password: {name: "password", reg: /.{8,}/, element: password, message: "Password should be at least 8 characters", state: true},
    
};
const validate = () => {

    
    let formState = true;
    let fieldState = true;
    
    Object.entries(fields).forEach(([key, f]) => {
        
        if(f.reg.test(f.element.value)) {
            console.log("///")
            // remove error element if exists
            if(f.element.nextElementSibling?.className == 'error') {
                f.element.parentElement.removeChild(f.element.parentElement.lastChild);
            }
            // remove error class from input if exists
            f.element.classList.remove('input-error');
        } else {
            formState = false;
            // create error element
            const errorMsg = document.createElement('p');
            errorMsg.classList.add('error');
            errorMsg.innerHTML = `<b>x</b> ${f.message}`;
            // remove error element before adding new one if it already exists
            if(f.element.nextElementSibling?.className == 'error') {
                f.element.parentElement.removeChild(f.element.parentElement.lastChild);
            }
            // add error element below input
            f.element.parentElement.appendChild(errorMsg);
            // add error class to input
            f.element.classList.add('input-error');
        }
        
    });

    // if passwords dont match
    if(password.value !== password2.value) {
        formState = false
        // if error element already exists, then remove it
        if(password2.nextElementSibling?.className == 'error') {
            password2.parentElement.removeChild(password2.parentElement.lastChild);
        }
        // create error element and add below "Re-type Password"
        const errorMsg = document.createElement('p');
        errorMsg.classList.add('error');
        errorMsg.innerHTML = '<b>x</b> Please retype password';
        
        password2.parentElement.appendChild(errorMsg);
    }
    
    return formState;
}

const validateField = (fieldObj) => {
    // remove error element, it will be readded if needed
    if(fieldObj.element.nextElementSibling?.className == 'error') {
        fieldObj.element.parentElement.removeChild(fieldObj.element.parentElement.lastChild);
    } 
    // remove error class from input if exists
    fieldObj.element.classList.remove('input-error');
    if(!fieldObj.reg.test(fieldObj.element.value)) {
        const errorMsg = document.createElement('p');
            errorMsg.classList.add('error');
            errorMsg.innerHTML = `<b>x</b> ${fieldObj.message}`;
            // remove error element before adding new one if it already exists
            if(fieldObj.element.nextElementSibling?.className == 'error') {
                fieldObj.element.parentElement.removeChild(fieldObj.element.parentElement.lastChild);
            }
            // add error element below input
            fieldObj.element.parentElement.appendChild(errorMsg);
            // add error class to input
            fieldObj.element.classList.add('input-error');
        // remove error element if exists
        
        
    } else {

    }
}

const validatePassword = () => {
    if(password.value != password2.value) {
        // if error element already exists, then remove it
        if(password2.nextElementSibling?.className == 'error') {
            password2.parentElement.removeChild(password2.parentElement.lastChild);
        }
        // create error element and add below "Re-type Password"
        const errorMsg = document.createElement('p');
        errorMsg.classList.add('error');
        errorMsg.innerHTML = '<b>x</b> Please retype password';
        
        password2.parentElement.appendChild(errorMsg);
        password2.classList.add('input-error');
    } else {
        if(password2.nextElementSibling?.className == 'error') {
            password2.parentElement.removeChild(password2.parentElement.lastChild);
        }
        password2.classList.remove('input-error');
        
    }
}

email.addEventListener('input', () => {
    validateField(fields.email);
})

username.addEventListener('input', () => {
    validateField(fields.name);
});

password.addEventListener('input', () => {
    validateField(fields.password);
    validatePassword();
})

password2.addEventListener('input', validatePassword)

const selectNewsletter = (cb) => {
    if(cb.checked) {
        alert("By selecting this, you will potentially recieve spam email")
    }
}
