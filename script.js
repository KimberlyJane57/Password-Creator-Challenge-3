let characterLenth = 8;
let choiceArray = [];

let lowerCaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let numberCharacters = ['1','2','3','4','5','6','7','8','9','0'];
let specialCharacters = ['!','@','#','$','%','^','&','*'];

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  let promptsTrue = getPromts();
  let passwordText = document.querySelector("#password");
  
  if(promptsTrue) {
    let newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  let password = "";
  for(let i = 0; i < characterLenth; i++) {
    let randomletter = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomletter];
  }
  return password;
}

function getPromts() {
  choiceArray = [];

  characterLenth = parseInt(prompt("Choose character length between 8 & 128"));

  if (isNaN(characterLenth) || characterLenth < 8 || characterLenth > 128) {
    alert("Needs to be a number, between 8 & 128 characters. Please try again.");
    return false;
  }
  if (confirm("Would you like lowercase letters in your password?")) {
    choiceArray = choiceArray.concat(lowerCaseCharacters);
  }
  if(confirm("Would you like uppercase letters in your password?")) {
    choiceArray = choiceArray.concat(upperCaseCharacters);
  }
  if (confirm("Would you like numbers in your password?")) {
    choiceArray = choiceArray.concat(numberCharacters);
  }
  if (confirm("Would you like special charaters in your password?")) {
    choiceArray = choiceArray.concat(specialCharacters);
  }
  return true;
}