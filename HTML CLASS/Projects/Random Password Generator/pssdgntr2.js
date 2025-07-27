const passwordBox = document.getElementById("password");
const length = 12;

const numbers = "1234567890";
const uppercase = "ABCDEFGHIJKLMNOPQRSYUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const symbols = "@#$^&()_+~|}{[]></-=";

const allChars = uppercase + lowercase + numbers + symbols;


function generatePassword() {
    let password = "";
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += uppercase[Math.floor(Math.random() * uppercase.length)]
    password += lowercase[Math.floor(Math.random() * lowercase.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]
    
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
  passwordBox.value = password;
}
