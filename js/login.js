document.getElementById("ok").addEventListener("click", function(){

    const email= document.getElementById("email").value;
    const password = document.getElementById("pass").value;

   if ((email && (password.length > 5))){
        window.location = "index.html";
       localStorage.setItem('userLog', email);
       sessionStorage.setItem('clave','logueado');
    } else {
        alert("No se pudo ingresar, revise si todos los espacios están llenos o si la contraseña tiene 6 o más caracteres ")
        window.location = "login.html";
    }

})
