var count = 0;
var countName = 0;
var countNumber = 0;
var countCity = 0;
var countEmail = 0;
var countAge = 0;
var countQualification = 0;
var countPassword = 0;
var countCPassword = 0;

var input = document.getElementsByTagName("input")
var username = document.getElementById("username")
var age = document.getElementById("age")
var male = document.getElementById("male");
var female = document.getElementById("female");
var number = document.getElementById("phone");
var city = document.getElementById("city");
var email = document.getElementById("email");
var qualification = document.getElementById("qualification");
var password = document.getElementById("password");
var cpassword = document.getElementById("cpassword");


username.oninput = function(){
    var nameCheck = /^[A-Za-z .]+$/
    if(nameCheck.test(username.value)){
        countName =1;
        document.getElementById("errorName").innerHTML = "";
        document.getElementById("errorName").style.display = "none";
    }
    else if(username.value == ""){
        countName =0;
        document.getElementById("errorName").style.display = "inline";
        document.getElementById("errorName").innerHTML = "Name cannot be empty";
    }
    else{
        countName =0;
        document.getElementById("errorName").style.display = "inline";
        document.getElementById("errorName").innerHTML = "Enter a valid name";
    }
}
number.oninput = function(){
    var numberCheck = /^(\+91[- ])?[6|7|8|9][0-9]{9}$/
    if(numberCheck.test(number.value)){
        countNumber =1;
        document.getElementById("errorNum").innerHTML = "";
        document.getElementById("errorNum").style.display = "none";
    }
    else if(number.value == ""){
        countNumber = 0;
        document.getElementById("errorNum").style.display = "inline";
        document.getElementById("errorNum").innerHTML = "Phone Number cannot be empty";
    }
    else{
        countNumber = 0;
        document.getElementById("errorNum").style.display = "inline";
        document.getElementById("errorNum").innerHTML = "Enter a valid phone number. Eg: +91-8989898989 or +91 8989898989 or 8989898989";
    }
}
city.oninput = function(){
    var cityCheck = /^[A-Za-z .]+$/
    if(cityCheck.test(city.value)){
        countCity =1;
        document.getElementById("errorCity").innerHTML = "";
        document.getElementById("errorCity").style.display = "none";
    }
    else if(city.value == ""){
        countCity =0;
        document.getElementById("errorCity").style.display = "inline";
        document.getElementById("errorCity").innerHTML = "City name cannot be empty";
    }
    else{
        countCity =0;
        document.getElementById("errorCity").style.display = "inline";
        document.getElementById("errorCity").innerHTML = "Enter a valid city name";
    }
}
email.oninput = function(){
    var emailCheck = /^[a-zA-Z0-9]+[a-zA-Z0-9\W_]*[a-zA-Z0-9]+@[a-zA-Z]+(.com)$/
    if(emailCheck.test(email.value)){
        countEmail =1;
        document.getElementById("errorEmail").innerHTML = "";
        document.getElementById("errorEmail").style.display = "none";
    }
    else if(email.value == ""){
        countEmail =0;
        document.getElementById("errorEmail").style.display = "inline";
        document.getElementById("errorEmail").innerHTML = "Email cannot be empty";
    }
    else{
        countEmail =0;
        document.getElementById("errorEmail").style.display = "inline";
        document.getElementById("errorEmail").innerHTML = "Enter a valid email";
    }
}
age.oninput = function(){
    var ageCheck = /^[1-9][0-9]{0,1}$/
    if(ageCheck.test(age.value)){
        countAge =1;
        document.getElementById("errorAge").innerHTML = "";
        document.getElementById("errorAge").style.display = "none";
    }
    else if(age.value == ""){
        countAge =0;
        document.getElementById("errorAge").style.display = "inline";
        document.getElementById("errorAge").innerHTML = "Age cannot be empty";
    }
    else{
        countAge =0;
        document.getElementById("errorAge").style.display = "inline";
        document.getElementById("errorAge").innerHTML = "Enter a valid age";
    }
}
password.oninput = function(){
    var smallLetter = /[a-z]/;
    var capitalLetter = /[A_Z]/;
    var numberPassword = /[0-9]/;
    var specialCharacter = /[\W_]/;
    var x,y,z,a;
    if(smallLetter.test(password.value)){
        x=1;
    }
    else{
        x=0;
    }
    if(capitalLetter.test(password.value)){
        y=1;
    }
    else{
        y=0;
    }
    if(numberPassword.test(password.value)){
        z=1;
    }
    else{
        z=0;
    }
    if(specialCharacter.test(password.value)){
        a=1;
    }
    else{
        a=0;
    }
    countPassword = x + y + z + a;
    if(countPassword < 4 && password.value.length <8){
        countPassword = 0;
        document.getElementById("errorPassword").style.display = "inline";
        document.getElementById("errorPassword").innerHTML = "Enter a valid password of minimum 8 characters. Password should contain atleast one small character, atleast one capital character, atleast one number and atleast one special character.";
    }
    else{
        countPassword = 1;
        document.getElementById("errorPassword").style.display = "none";
    }     

}
cpassword.oninput = function(){
    if(password.value == cpassword.value){
        countCPassword = 1;
        document.getElementById("errorCPassword").style.display = "none";
    }
    else{
        countCPassword = 0;
        document.getElementById("errorCPassword").style.display = "inline";
        document.getElementById("errorCPassword").innerHTML = "Password are not matching";
    }
}
qualification.oninput = function(){
    if(qualification.value != ""){
        countQualification = 0;
        document.getElementById("errorQualification").style.display = "inline";
        document.getElementById("errorQualification").innerHTML = "Select Qualification";
    }
    else{
        countQualification = 1;
        document.getElementById("errorQualification").style.display = "none";
        document.getElementById("errorQualification").innerHTML = "";
    }
}
male.oninput = function(){
    if(male.checked){
        document.getElementById("errorGender").style.display = "none";
        document.getElementById("errorGender").innerHTML = "";
    }
}
female.oninput = function(){
    if(female.checked){
        document.getElementById("errorGender").style.display = "none";
        document.getElementById("errorGender").innerHTML = "";
    }
}
function form1(){
    count = countNumber + countName + countEmail + countCity + countAge + countQualification + countPassword + countCPassword;
    if(male.checked || female.checked){
        document.getElementById("errorGender").style.display = "none";
        document.getElementById("errorGender").innerHTML = "";
        if(count==8){
            return true;
        }
        else{    
            document.getElementById("x").style.display = "inline";
            document.getElementById("x").innerHTML = "Fill all the details.";
            return false;
        }
    }
    else{
        document.getElementById("errorGender").style.display = "inline";
        document.getElementById("errorGender").innerHTML = "Select Gender";
        return false;
    }
    
    
}

