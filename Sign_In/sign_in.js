var countEmail = 0;
var email1 = document.getElementById("mail");
var emailCheck = /^[a-zA-Z0-9]+[a-zA-Z0-9\W_]*[a-zA-Z0-9]+@[a-zA-Z]+\.[A-z]+[\.A-z]*[a-zA-Z]+$/;
email1.oninput = function(){
    
    if(emailCheck.test(email1.value)){
        countEmail =1;
        document.getElementById("errorEmail").innerHTML = "";
        document.getElementById("errorEmail").style.display = "none";
    }
    else if(email1.value == ""){
        countEmail =0;
        document.getElementById("errorEmail").style.display = "inline-block";
        document.getElementById("errorEmail").innerHTML = "Email cannot be empty";
    }
    else{
        countEmail =0;
        document.getElementById("errorEmail").style.display = "inline-block";
        document.getElementById("errorEmail").innerHTML = "Enter a valid email";
    }
}
document.getElementById("mail").onkeypress = function(event){
    if(event.key == "Enter"){
        document.getElementById("btn").click();
    }
}
document.getElementById("password").onkeypress = function(event){
    if(event.key == "Enter"){
        document.getElementById("btn").click();
    }
}

function Fsubmit(){
    var password = document.getElementById("password").value;
    var email = document.getElementById("mail").value;
    if(countEmail == 1){
        var xhr = new XMLHttpRequest();

        xhr.open("POST", "https://reqres.in/api/login", true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(`email=${email}&password=${password}`);
        
        
        xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                alert("Login successful   Response recieved:" + this.response);
            }
            else if(this.status != 200 && this.readyState == 4){
                alert("Login Unsccessful! Check your credentials!!");
            }
        }
    }
    else{
        alert("Error!! Please check you credentials");
    }
    
}
