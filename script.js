// Assignment Code
let generateBtn = document.querySelector("#generate");
let choiceArray = [];

let specialCharacters = ['!','@','#','$','%','^','&','*'];
let lowerCaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let upperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let numberCharacters = ['1','2','3','4','5','6','7','8','9','0']

function generatePassword() {
  console.log ("Hey!")
  //1. promt the user for the password criteria
  //  a. password length between 8 & 128
  //  b. lowercase, uppercase, number, special charaters
  //2. Validate the input
  //3. generate password based on criteria



//4.Didspaly the generated password on the page
  return "Generated password will go here."
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
