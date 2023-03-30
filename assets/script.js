// Assignment code here
// Write a function called generatePassword()

function generatePassword() {
  // Create a variable that stores the password
  var password = "";  
  // Create a variable that stores the special characters
  var specialChar = "~`!@#$%^&*()-_+={}[]|\/:;<>,.?v"
  // Create a variable that stores the numbers
  var numbers = "0123456789";
  // Create a variable that stores the lowercase letters
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";

  // Create a variable that stores the password length
  // and prompt the user to choose a password length
  var passwordLength = parseInt(
    prompt("how many characters (between 8 and 128)?")
  )

  // If passwordLength is not a number, show an alert to the user
  // error handling or fail case
  if (
    isNaN(passwordLength)
  ) {
    alert("you have to enter a number")
    return generatePassword();
  }

  // check password length to ensure it is between 8 and 128 characters
  // error handling or fail case
  if (
    passwordLength > 128
    || passwordLength < 8
  ) {
    alert("must be between 8 and 128 characters")
    return generatePassword();
  }

  // within this function prompt the user to choose which criteria
  var shouldUseLowerCaseLetters = confirm("Use lowercase letters?");
  var shouldUseUpperCaseLetters = confirm("Use upercase letters?");
  var shouldUseNumbers = confirm("Use numbers?");
  var shouldUseSpecial = confirm("Use special characters?");
  
  // check to make sure the user selected at least one of the above options 
  // error handling
  if (
    shouldUseLowerCaseLetters === false
    && shouldUseUpperCaseLetters === false
    && shouldUseNumbers === false
    && shouldUseSpecial === false
  ) {
    // Show an alert to the user saying they must choose at least one option
    alert("you gotta chose one")
    // Rerun the function
    return generatePassword();
  }

  // Create a variable that stores the possible characters
  var possibleCharacters = "";

  // If special characters
  if (shouldUseSpecial) {
    possibleCharacters += specialChar;
  }

  // If numbers
  if (shouldUseNumbers) {
    possibleCharacters += numbers
  }

  // If lowercase letters
  if (shouldUseLowerCaseLetters) {
    possibleCharacters += lowerCase
  }

  // If uppercase letters
  if (shouldUseUpperCaseLetters) {
    possibleCharacters += lowerCase.toUpperCase()
  }

  // Create a for loop that goes for the length of the password
  //  and randomly selects a character from the possibleCharacters
  //  and adds it to the password
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(
      Math.random() * possibleCharacters.length
    )
    
    password += possibleCharacters[randomIndex]
  }

  // Return a password based on criteria offered to the user
  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password textarea
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
