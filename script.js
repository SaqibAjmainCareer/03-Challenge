// Assignment Code
var generateBtn = document.querySelector('#generate');

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function getPassOptions() {

  var charTypes = [];

  var length = prompt('How many characters would you like your random password to be? (8-128)');
  console.log(length);
  if (isNaN(length)) {
    alert('Please enter a valid number between 8 and 128');
    return null;
  } else if (length < 8) {
    alert('Please enter a valid password length between 8 and 128');
    return null;
  } else if (length > 128) {
    alert('Please enter a valid password length between 8 and 128');
    return null;
  } else if (length == null) {
    alert('Please enter a valid password length between 8 and 128');
    return null;
  }

  var hasUpper = confirm('Would you like your password to include upper case letters?');
  charTypes.push(hasUpper);
  // console.log(hasUpper);

  var hasLower = confirm('Would you like your password to include lower case letters?');
  charTypes.push(hasLower);
  // console.log(hasLower);

  var hasNumber = confirm('Would you like your password to include numbers?');
  charTypes.push(hasNumber);
  // console.log(hasNumber);

  var hasSpecial = confirm('Would you like your password to include special characters?');
  charTypes.push(hasSpecial);
  // console.log(charTypes);
  // console.log(hasSpecial);

  const noOptions = (currentOption) => currentOption === false;

  // console.log(charTypes.every(noOptions));

  if (charTypes.every(noOptions)) {
    alert('The password needs to have at least one character type.')
    console.log('Expected Result with no types');
    console.log(charTypes.every(noOptions));
    return null;
  }

  var passOption = {
    length: length,
    hasUpper: hasUpper,
    hasLower: hasLower,
    hasNumber: hasNumber,
    hasSpecial: hasSpecial
  }

  return passOption;
}

function generatePassword() {
  var options = getPassOptions();

  var charPool = [];

  var finalPass = [];

  var uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  var lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  var specials = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}',':', "'", ',', '<', '.', '>', '/', '?'];

  if (options.hasUpper) {
    charPool.push(...uppers);    
  }
  if (options.hasLower) {
    charPool.push(...lowers);    
  }
  if (options.hasNumber) {
    charPool.push(...numbers);    
  }
  if (options.hasSpecial) {
    charPool.push(...specials);    
  }
  console.log(charPool);

  finalPass = charPool.join('');

  return finalPass;
}

// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
