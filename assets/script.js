// Assignment code here
// Write a function called generatePassword()

function generatePassword() {
  // within this function prompt the user to choose which criteria
  var shouldUseLowerCaseLetters = confirm("Use lowercase letters?");
  var shouldUseUpperCaseLetters = confirm("Use upercase letters?");
  var shouldUseNumbers = confirm("Use numbers?")
  var shouldUseSpecial = confirm("Use special characters?")
  var passwordLength = parseInt(
    prompt("how many characters (between 8 and 128)?")
  )

  // check password length to ensure it is between 8 and 128 characters
  // error handling or fail case
  if (
    passwordLength > 128
    || passwordLength < 8
  ) {
    alert("must be between 8 and 128 characters")
    return generatePassword();
  }
  
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

  // Return a password based on criteria offered to the user
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
