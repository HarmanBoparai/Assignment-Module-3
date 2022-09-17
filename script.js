// Assignment code here
var lowercase=[  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var uppercase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numbers=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialcharacters=['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];
var pwdoptions=[];

function generatePassword(){
  var userInput=window.prompt("How long do you want your password should be?")
  var pwdLength=parseInt(userInput)
  if (isNaN(pwdLength)){
    window.alert("It's not a number!")
  } else{
    window.alert("It is a number")
  }
  if(pwdLength<8 || pwdLength >128)
{
  window.alert("The length of the password must be 8 and 128 characters")
  return
}  

var userWantNumbersinpwd = window.confirm("Do you like to include numbers in your password?")
var userWantSymbolsinpwd = window.confirm("Do you like to include symbols in your password?")
var userWantLowercaseinpwd = window.confirm("Do you like to include lowercase letters in your password?")
var userWantSymbolsinpwd = window.confirm("Do you like to include uppercase in your password?")

if (userWantNumbersinpwd===true){
pwdoptions.push(numbers)
}

if (userWantSymbolsinpwd===true){
  pwdoptions.push(specialcharacters)
  }

if (userWantLowercaseinpwd==true){
    pwdoptions.push(lowercase)
    }

if (userWantLowercaseinpwd==true){
      pwdoptions.push(uppercase)
      }
   console.log(pwdoptions)
    }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function passwordOptions()
{
var pwdLength=window.confirm("Must be between 8 and 128 characters");
var pwdlowercase=confirm("Would you like to include lowercase");
}
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 