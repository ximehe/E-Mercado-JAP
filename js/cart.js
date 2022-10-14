let carrito =[];
let precio = 0;

document.addEventListener("DOMContentLoaded", function() {
    fetch(CART_INFO_URL + 25801 + EXT_TYPE)
    .then(resp => resp.json())
    .then(data =>{
  
  
      carrito=data;
      MostrarArticulo(carrito);
      
    })
  })

  

  function subtotal() {
    let currency = carrito.articles[0].currency
    let cantidadArtic = document.getElementById("cantArticulo").value
   

    document.getElementById("subtotal").innerHTML =  currency + " " + precio * cantidadArtic
} 
      


  function MostrarArticulo() {
    precio = carrito.articles[0].unitCost

    let elementHTML = `
          <tr>
            <th scope="row">
                <img class="img-thumbnail" width=150rem src="${carrito.articles[0].image}"/>
            </th>
            <td>${carrito.articles[0].name}</td>
            <td>${carrito.articles[0].currency} ${precio}</td>
            <td>
                <div class="form-group col">
                <input class="text-center" type="number" id="cantArticulo" value="1" min="1" max="100" onchange="subtotal()">
                </div>
           </td>
            <td id="subtotal">${carrito.articles[0].currency} ${precio}</td>
          </tr>
    `
document.getElementById("ListC").innerHTML = elementHTML;
}
