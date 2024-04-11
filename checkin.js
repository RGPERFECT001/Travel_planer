window.onload = function(){
    // checking if logged in 
    if(localStorage.getItem("token") == null){
        var a = document.getElementById("logcheck");
        a.innerHTML = "Login";
    }
    else{
        var a = document.getElementById("logcheck");
        a.innerHTML = "Logout";
    }
}


function login(){
    if(document.getElementById("username").value == "" || document.getElementById("password").value == ""){
        alert("Please fill in all the fields");
        return;
    }
    else if(document.getElementById("username").value == "admin" && document.getElementById("password").value == "admin"){
    localStorage.setItem("token", "1234");
    window.location.href = "indexx.html";
    }
}

function logout(){
    localStorage.removeItem("token");
    location.reload();
}

function toggle(){
    var a = document.getElementById("logcheck");
    if(a.innerHTML == "Login"){
        window.location.href = "login.html";
    }
    else{
        logout();
        window.location.href = "indexx.html";
    }
}

function myFunction(z) {
    var x = document.getElementById(z);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function search(){
    var a = document.getElementById("Search").value;
    if(a.toLowerCase()=="dehradun"){
        window.location.href = "Dehradunmain.html";
    }
    else if(a.toLowerCase()=="goa"){
        window.location.href = "Goamain.html";
    }
    else if(a.toLowerCase()=="ladakh"){
        window.location.href = "Ladakhmain.html";
    }
    else if(a.toLowerCase()=="andaman"){
        window.location.href = "Andamammain.html";
    }
    else{
        alert("City not found");
    }
}