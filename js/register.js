// Name Validation

document.getElementById("name").addEventListener("input", function(){

    this.value = this.value.replace(/[^A-Za-z ]/g,'');

});

// Mobile Validation

document.getElementById("mobile").addEventListener("input", function(){

    this.value = this.value.replace(/[^0-9]/g,'');

    if(this.value.length > 10){
        this.value = this.value.slice(0,10);
    }

});

// Password Toggle

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", ()=>{

    password.type =
    password.type === "password"
    ? "text"
    : "password";

});

// Confirm Password Toggle

const confirmPassword =
document.getElementById("confirmPassword");

const toggleConfirm =
document.getElementById("toggleConfirm");

toggleConfirm.addEventListener("click", ()=>{

    confirmPassword.type =
    confirmPassword.type === "password"
    ? "text"
    : "password";

});

// Submit

document
.getElementById("registerForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    window.location.href = "login.html";

});
document
.getElementById("registerForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Account Created Successfully!");

    window.location.href = "login.html";

});