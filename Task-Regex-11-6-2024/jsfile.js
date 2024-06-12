 function firsname(value){
    let valid = true;
    debugger;
    const firstName = document.getElementById('firstName').value;
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(firstName)) {
        document.getElementById('firstNameError').style.display = 'inline';
    } else {
        document.getElementById('firstNameError').style.display = 'none';
    }
}

function lastname(value){
    debugger;
    const lastName = document.getElementById('lastName').value;

    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(lastName)) {
        document.getElementById('lastNameError').style.display = 'inline';
        valid = false;
    } else {
        document.getElementById('lastNameError').style.display = 'none';
    }
}

function ValidateBirthDate(value){
    const birthDate = document.getElementById('birthDate').value;

    if (!birthDate) {
        document.getElementById('birthDateError').style.display = 'inline';
        valid = false;
    } else {
        document.getElementById('birthDateError').style.display = 'none';
    }
}

function ValidateEmail(value){
    const email = document.getElementById('email').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'inline';
        valid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }
}

function ValidateConfirmEmail(value){
    const confirmEmail = document.getElementById('confirmEmail').value;

    if (email !== confirmEmail) {
        document.getElementById('confirmEmailError').style.display = 'inline';
        valid = false;
    } else {
        document.getElementById('confirmEmailError').style.display = 'none';
    }

}

function ValidatePassword(value){
    const password = document.getElementById('password').value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d{2,})(?=.*[!@#$%^&*(),.?":{}|<>]).{8,32}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').style.display = 'inline';
        valid = false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

}
function ValidateConfirmPassword(value){
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').style.display = 'inline';
        valid = false;
    } else {
        document.getElementById('confirmPasswordError').style.display = 'none';
    }

}
function mobile(value){
    const mobile = document.getElementById('mobile').value;
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
        document.getElementById('mobileError').style.display = 'inline';
        valid = false;
    } else {
        document.getElementById('mobileError').style.display = 'none';
    }

}
