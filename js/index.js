document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

let data = sessionStorage.getItem('clave')
if ((data) != 'logueado') {
    
    window.location ="login.html"
}  else
{
    document.getElementById('user').innerHTML=localStorage.getItem('userLog');
}

function SalirSesion(){

    localStorage.setItem("userLog", "");
        localStorage.setItem("firstName", "");
        localStorage.setItem("secondName", "");
        localStorage.setItem("firstlastName", "");
        localStorage.setItem("secondLastName", "");
        localStorage.setItem("contactNumber", "");
}