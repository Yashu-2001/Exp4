let username = document.getElementById("username");
let password = document.getElementById("password");
let email = document.getElementById("email");
let dob = document.getElementById("dob");
let city = document.getElementById("city");
let form = document.getElementById("form");

let c=document.getElementById("C");
let cpp=document.getElementById("Cpp");
let java=document.getElementById("Java");
let javascript=document.getElementById("JavaScript");
let python=document.getElementById("Python");

form.addEventListener("submit", function (event) {
    if (!(validateUsername(username.value) && validatePassword(password.value))) {        
        event.preventDefault();
        if(!validateUsername(username.value)){
            alert("Username must be of maximum 20 characters")
        }
        if(!validatePassword(password.value)){
            alert("Password must consist - Minimum 8 characters, 1 lowercase letter, 1 uppercase letter and 1 special character")
        }
    }
    else{
        document.write("Username: "+username.value);
        document.write("<br>Password: "+password.value);
        document.write("<br>Email: "+email.value);
        document.write("<br>Birthdate: "+dob.value);
        document.write("<br>City: "+city.value);
        document.write("<br>Programming Languages known:");
        if(c.checked==true){
            document.write("<br>"+c.value);
        }
        if(cpp.checked==true){
            document.write("<br>"+cpp.value);
        }
        if(java.checked==true){
            document.write("<br>"+java.value);
        }
        if(javascript.checked==true){
            document.write("<br>"+javascript.value);
        }
        if(python.checked==true){
            document.write("<br>"+python.value);
        }
    
    }
})

function validateUsername(username) {
    return username.length <= 20;
}

function validatePassword(password) {
    if(password.length >= 8 && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s)/.test(password)){
        return true;
    }
    else{
        return false;
    }
}
