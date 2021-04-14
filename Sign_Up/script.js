
var input = document.getElementsByTagName("input")
var username = document.getElementById("username");
var age = document.getElementById("age")
var male = document.getElementById("male");
var female = document.getElementById("female");
var number = document.getElementById("phone");
var city = document.getElementById("city");
var email = document.getElementById("email");
var password = document.getElementById("password");
var cpassword = document.getElementById("cpassword");
var passwordvalue = document.getElementById("password").value;
var confrmpass = document.getElementById("cpassword").value;


password.oninput = function(event){
    passwordvalue = document.getElementById("password").value;
    //console.log("password");
}
function form1(){
    
username.oninvalid = function(event){
    event.target.setCustomValidity('Enter a valid name eg.Abc Def or abc');
}
username.oninput = function(event){
    event.target.setCustomValidity("");
}
age.oninvalid = function(event){
    event.target.setCustomValidity('Enter a valid age.')
}
age.oninput = function(event){
    event.target.setCustomValidity('')
}
male.oninvalid = function(event){
    event.target.setCustomValidity('Select one option');
}
male.oninput = function(event){
    event.target.setCustomValidity('');
}
female.oninvalid = function(event){
    event.target.setCustomValidity('Select one option');
}
female.oninput = function(event){
    event.target.setCustomValidity('');
}
number.oninvalid = function(event){
    event.target.setCustomValidity('Enter a valid number eg. +91-9898989898 or 9898989898');
}
number.oninput = function(event){
    event.target.setCustomValidity('');
}
city.oninvalid = function(event){
    event.target.setCustomValidity('Enter a valid city name');
}
city.oninput = function(event){
    event.target.setCustomValidity('');
}
email.oninvalid = function(event){
    event.target.setCustomValidity('Enter a valid email');
}
email.oninput = function(event){
    event.target.setCustomValidity('');
}
password.oninvalid = function(event){
    var text= "Enter a password with minimum 8 characters.";
    var text1 = "\nAtleast one lowercase character.";
    var text2 = "\nAtleast one uppercase character.";
    var text3 = "\nAtleast one number.";
    var text4 = "\nAtleast one special character.";
    event.target.setCustomValidity(text + text1 + text2 + text3 + text4);
}
password.oninput = function(event){
    event.target.setCustomValidity('');
    passwordvalue = document.getElementById("password").value;
}
cpassword.oninput = function(event){
    confrmpass = document.getElementById("cpassword").value;
    cpassword.setAttribute("isvalid", true);
   // console.log("truei");
   
}
    if(confrmpass != passwordvalue){
        cpassword.oninvalid = cpassword.setCustomValidity("Password do not match");
        confrmpass = "";
        //console.log("if");
        return false;
    }
    else if(confrmpass == passwordvalue){
        cpassword.setAttribute("isvalid", true);
        //console.log("else if" + " " + confrmpass);
        cpassword.oninvalid = cpassword.setCustomValidity("");
        return false;
    }
    else{
       // console.log("else");
       
    }
    //console.log("form");
    return true;
}

