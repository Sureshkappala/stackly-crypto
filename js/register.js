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

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){

        alert("Passwords do not match");

        e.preventDefault();
        return;
    }

    alert("Account Created Successfully");
});
