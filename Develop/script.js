// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  //Do your thing here and generate a password
  var password = "";
  var wantNumbers = confirm("Do you want numbers in your password?");
  var wantSpecialCharacters = confirm("Do you want special characters in your password?");
  var wantLowercase = confirm("Do you want lower case characters in your password?");
  var wantUppercase = confirm("Do you want upper case characters in your password?");
  //These if functions dictacte if the array would be passed into the var "password".
  //If YES A part of the array is randomized into it.
  if(wantNumbers){
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    password += getRandomValueFromArray(numbers);
  }

  if (wantSpecialCharacters){
    var specialCharacters = ["!", "#", "$","%","&", "'", "(",")","*", "+", ",", "-", ".", "/", ":", ";", "<", ">"];
    password += getRandomValueFromArray(specialCharacters);
  }

  if(wantLowercase){
    var LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"];
    password += getRandomValueFromArray(LowerCase);
  }

  if(wantUppercase){
    var UpperCase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    password+= getRandomValueFromArray(UpperCase);
  }
  
  return password;
}


var passwordLength = prompt("How long do you want your password to be? (8-128 characters)");
var length = true;
while(length){
  if(passwordLength < 8 || passwordLength > 128){
    alert("Invalid Password Length. Try Again");
    passwordLength = prompt("How long do you want your password to be? (8-128 characters)");
  }else{
    length = false;
  }
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

/**
 * Returns a random integer in a range up to max -1
 * @param {number} min Minimum number in the range
 * @param {number} max Maximum number in the range
 * @returns A random integer between min and (max-1)
 */
function getRandomNumber(min, max) {
  var randomNumber=Math.random() // Random number between 0 and 0.99
  var randomNumberUpToMax=randomNumber * max // Random number between 0 and max - 0.1
  var randomNumberInRange= min + randomNumberUpToMax;

  return Math.floor(randomNumberInRange); // Remove the decimal places
}

/**
* Returns a random element from an array.
* @param {Array} array Array of elements.
* @returns A random element from the array (Ex: var pet=getRandomValueFromArray(['dog','cat','bird']))
*/
function getRandomValueFromArray(array) {
  var randomArrayPosition=getRandomNumber(0,array.length);
  return array[randomArrayPosition];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
