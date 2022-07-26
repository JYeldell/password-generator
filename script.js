// Assignment code here
// 1. promt the user for the password criteria//
    //  a. password length between 8 < 128//
    //  b. Lowercase,uppercase, special characters//
    //2 validate the input.
    //3. Generate passwoed based on criteria

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function randomInt(min, max){
    if (!max){
        max = min
        min=0
    }
    var rand = Math.random()
    return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
    return list[randomInt(list.length)]
}


function generatePassword() {
    
    console.log("click the botton!")

    var userInput = window.prompt( "How long would you like your password to be?")

    var passwordLength = parseInt(userInput)

if(isNaN(passwordLength)) {
    window.alert("That is not a number!")
    return
} 

if (passwordLength <8 || passwordLength >128) {
    window.alert("password length must be between 8 and 128 characters")
}

var userWantsNumbers = window.confirm("Would you like to incluse numbers in your password?")
var userWantsSymbols = window.confirm("Would you like to incluse symbols in your password?")
var userWantsLowercase = window.confirm("Would you like to incluse lowercase letters in your password?")
var userWantsUppercase = window.confirm("Would you like to incluse uppercse letters in your password?")
console.log(userWantsNumbers)
console.log(userWantsSymbols)
console.log(userWantsLowercase)
console.log(userWantsUppercase)


var numberList = ["0","1","2","3","4","5","6","7","8","9"]
var symbolList= ["!","@","#","$","%","^","&","*",]
var lowercaseList=["a","b","c","d","e","f","g","h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
"t","u","v","w","x","y","z"]
var uppercaseList=[]

var optionsCart =[]

for(var i=0; i<lowercaseList; i++){
    uppercaseList[i]=lowercaseList[i].toLocaleUpperCase()
}

if(userWantsNumbers === true) {
    optionsCart.push(numberList)
}

if(userWantsSymbols === true){
    optionsCart.push(symbolList)

}


if(userWantsUppercase === true){
    optionsCart.push(uppercaseList)
    
}
if(userWantsLowercase === true){
    optionsCart.push(lowercaseList)
    
}

if(optionsCart.length === 0){
optionsCart.push(numberList)
}

console.log(optionsCart)

var generatePassword =""

for(var i =0; i < passwordLength; i++){
var randomlist = getRandomItem(optionsCart)
var randomechar = getRandomItem(randomlist)
console.log(randomechar)

generatePassword += randomechar
}

console.log(generatePassword)

return generatePassword

}
    
    //4.display password on the page. 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);