const password =
document.getElementById("password");

const togglePassword =
document.getElementById("togglePassword");

togglePassword.addEventListener("click",()=>{

    password.type =
    password.type === "password"
    ? "text"
    : "password";

});

document
.getElementById("loginForm")
.addEventListener("submit",function(e){

    e.preventDefault();

    const role =
    document.getElementById("role").value;

    if(role === "admin"){

        window.location.href =
        "admin-dashboard.html";

    }
    else{

        window.location.href =
        "user-dashboard.html";

    }

});