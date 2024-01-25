const passwordBox = document.getElementById("password");

const length = 8;

const uppercase = "ABCDEF";
const  lowercase = "abcdef";
const number = "012";
const symbols = "@#$*";
const allChars = uppercase + lowercase + number + symbols ;

function createPassword () {
    let password = "";

    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }

    passwordBox.value = password;
}

function copyPassword () {
    passwordBox.select();   
    navigator.clipboard.writeText(passwordBox.value)
        .then(() => {
            console.log("Password copied to clipboard");
        })
        .catch((err) => {
            console.error("Unable to copy password to clipboard", err);
        });
}