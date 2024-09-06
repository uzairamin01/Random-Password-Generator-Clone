const passwordBox = document.querySelector("#password");
const conBtn = document.querySelector(".con-btn");
const length = 8;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>/?";
const allChars = upperCase + lowerCase + numbers + symbols;

function generateRandomPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  for (let i = 0; length > password.length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
}

conBtn.addEventListener("click", () => {
  generateRandomPassword();
});




