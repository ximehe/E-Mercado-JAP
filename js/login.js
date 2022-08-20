document.getElementById("ok").addEventListener("click", function(){

    const email= document.getElementById("email").value;
    const password = document.getElementById("pass").value;

   if ((email && (password.length > 5))){
        window.location = "index.html";
    } else {
        alert("Faltan datos.")
        window.location = "login.html";
    }

})
