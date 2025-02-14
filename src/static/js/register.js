/* Sign-up Components */

let signUpForm = document.getElementById("signUpForm");

let usernameField = document.getElementById("id_username");
let emailField = document.getElementById("id_email");
let checkboxField = document.getElementById("agreement");

let passwordInputOne = document.getElementById("id_password1")
let passwordInputTwo = document.getElementById("id_password2")
let togglePasswordOne = document.getElementById("togglePasswordOne");
let togglePasswordTwo = document.getElementById("togglePasswordTwo");
let submitButton = document.getElementById("submitButton");

/* Dynamically updates if entered password satisfies the conditions */
function updatePasswordStrength() {
    let passwordLength = document.getElementById("passwordLength");
    let passwordNumeric = document.getElementById("passwordNumeric");
    let passwordCasing = document.getElementById("passwordCasing");
    let password = passwordInputOne.value;

    if (password.length >= 8) {
        passwordLength.style.color = "#007bff";
    }
    else {
        passwordLength.style.color = "rgba(0,0,0,0.3)";
    }

    if (/\d/.test(password)) {
        passwordNumeric.style.color = "#007bff";
    }
    else {
        passwordNumeric.style.color = "rgba(0,0,0,0.3)";
    }

    if (hasUpperCase(password) && hasLowerCase(password)){
        passwordCasing.style.color = "#007bff";
    }
    else {
        passwordCasing.style.color = "rgba(0,0,0,0.3)";
    }
}

// function isAlphaNumeric(str) {
//     return /^[a-z0-9]+$/i.test(str);
// }

function hasUpperCase(str) {
    return str !== str.toLowerCase();
}

function hasLowerCase(str) {
    return str !== str.toUpperCase();
}

passwordInputOne.addEventListener('input', updatePasswordStrength);

/* Checks if entered passwords are equal to each other */
function checkPassword() {
    let passwordConsistency = document.getElementById("passwordConsistency");
    if (passwordInputOne.value == passwordInputTwo.value) {
        passwordConsistency.style.color = "#007bff";
    }
    else {
        passwordConsistency.style.color = "rgba(0,0,0,0.3)";
    }
}

passwordInputTwo.addEventListener('input', checkPassword);

/* Checks if user chose to reveal/hide their password */
function togglePassword(passwordField, toggleIcon){
    if (passwordField.type == "password") {
        passwordField.type = "text";
        toggleIcon.className = "bi-eye eye-icon";
    }
    else {
        passwordField.type = "password";
        toggleIcon.className = "bi-eye-slash eye-icon";
    }
}

togglePasswordOne.addEventListener("click", function(){togglePassword(passwordInputOne, togglePasswordOne);});
togglePasswordTwo.addEventListener("click", function(){togglePassword(passwordInputTwo, togglePasswordTwo);});

function allFieldsFilledOut() {
    console.log(checkboxField.value);
    const password = passwordInputOne.value;
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const isLongEnough = password.length >= 8;

    if (
        usernameField.value != '' &&
        emailField.value != '' &&
        checkboxField.checked &&
        passwordInputOne.value == passwordInputTwo.value &&
        hasCapitalLetter &&
        hasNumber &&
        isLongEnough
    ) {
        console.log("yes!");
        submitButton.disabled = false;
    } else {
        console.log("no!");
        submitButton.disabled = true;
    }
}

signUpForm.addEventListener('change', allFieldsFilledOut);