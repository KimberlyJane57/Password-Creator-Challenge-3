let characterLenth = 8;
let choiceArray = [];

let lowerCaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let numberCharacters = ['1','2','3','4','5','6','7','8','9','0'];
let specialCharacters = ['!','@','#','$','%','^','&','*'];
// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(){
  let promtsTf = getPromts();
  
  if(promtsTf){
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  //I will generatePassword based on the promts
}

function getPromts(){
  choiceArray = [];

  characterLenth = parseInt(prompt("Choose character length between 8 & 128"));

  if(isNaN(characterLenth) || characterLenth < 8 || characterLenth > 128) {
    alert("Needs to be a number, between 8 & 128 characters. Please try again.")
    return false;
  }
  if(confirm("Would you like lowercase letters in your password?")){
    choiceArray = choiceArray.concat(lowerCaseCharacters);
  }
  if(confirm("Would you like uppercase letters in your password?")){
    choiceArray = choiceArray.concat(upperCaseCharacters);
  }
  if(confirm("Would you like numbers in your password?")){
    choiceArray = choiceArray.concat(numberCharacters);
  }
  if(confirm("Would you like special charaters in your password?")){
    choiceArray = choiceArray.concat(specialCharacters);
  }
  return true;
}