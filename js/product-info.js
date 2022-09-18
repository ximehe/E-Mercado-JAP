let product = {};

document.addEventListener("DOMContentLoaded", () =>{
     fetch(PRODUCT_INFO_URL + localStorage.getItem('claveID') + EXT_TYPE)
    .then(response => response.json())
    .then(data => {
      product = data;
      MostrarProductoInfo(product);
      console.log(PRODUCT_INFO_URL + localStorage.getItem('claveID') + EXT_TYPE)
    })
  
    fetch(PRODUCT_INFO_COMMENTS_URL + localStorage.getItem('claveID') + EXT_TYPE)
    .then(resp => resp.json())
    .then(data => {
      mostrarComentarios(data);

      
    })
  
  });

  //Funcion para mostrar la info de los productos
  function MostrarProductoInfo(product){

    
    let elementHTML = `
        <div class= "row" style="padding-top:10px;">
            
        
            <h1 >${product.name}</h1>
            <hr class="my-3">
            <div id="imgGallery" class="col-1 m-1"> 
            <br>
            </div>
              <div class="col-6"> 
              <br>
                <a href="${product.images[0]}" target="_blank"><img id="MostrarImg" style="width:100%; " src="${product.images[0]}"></a>
                <br>
                <br>
                <strong>${product.name}</strong>
                <br>
                <br>
                <p><strong>Descripción: </strong>${product.description}</p>
                <p><strong>Precio: </strong>${product.cost} ${product.currency}<p>
                
                <p><strong>Categoría: </strong>${product.category}</p>
                
                <p><strong>Vendidos: </strong> ${product.soldCount}</p>
              
                <hr class="my-3">
              </div>
  
              
        </div>
      `
    
      document.getElementById("InfoProducto").innerHTML += elementHTML;
  
    //Agregar las otras fotos
      for (let k=0; k< product.images.length;k++){
        document.getElementById("imgGallery").innerHTML += `<a href="#"><img onclick="cambioImg(${k})" style="width:100%; padding:2px; border: 1px solid #ddd; " src="${product.images[k]}"></a>
        <style>
          img:hover {
            box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
          }
        </style>`
      }
  
  }

  //Funcion para cambiar imagen pequeña a grande
  function cambioImg(k){
    console.log(product.images[k])
    document.getElementById("MostrarImg").src = product.images[k]
  }
  
  //Funcion para añadir estrellas
  function añadirEstrellas(score){
    let starCount= 0;
    let starsHTML = "";
  
    for(j=0; j<5; j++){
      if(starCount<score){ starsHTML += `<span class="fa fa-star" style="color: orange;"></span>`}
      else{ starsHTML += `<span class="fa fa-star"></span>`}
      starCount ++;
    }
    return starsHTML;
  }

  
  //Funcion para mostrarComentarios
  function mostrarComentarios(comments){

    let elementHTML = "";
  
    for (i=0; i<comments.length; i++){
      elementHTML += 
      `

      <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                <img src="img/img_perfil.png" class="img-thumbnail">
                </div>
                <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">${comments[i].user}</h4>
                    <small class="font-muted">
                    <div class="comment-stars">${añadirEstrellas(comments[i].score)}</div>
                    ${comments[i].dateTime}
                    </small>
                </div>
                ${comments[i].description}
                </div>
            </div>
           
            </div>
        `
    }
    
    document.getElementById("Comentarios").innerHTML += elementHTML;
  }

  //Función para añadir mi comentario
  function añadirComentario(){

    //Declaración de variables
    let miComentario = document.getElementById("miComentario").value;
    let puntuacion = document.getElementById("puntuacion").value;
    let user = localStorage.getItem("userLog")
  
    //Agregar fecha de mi comentario
    const myDate= new Date();
    const dateString= myDate.toLocaleString();
  
    //Añadir mi comentario y puntuación
    document.getElementById("Comentarios").innerHTML +=
    `
    <div class="list-group-item list-group-item-action">
    <div class="row">
        <div class="col-3">
        <img src="img/img_perfil.png" class="img-thumbnail">
        </div>
        <div class="col">
        <div class="d-flex w-100 justify-content-between">
            <h4 class="mb-1">${user}</h4>
            <small class="font-muted">
            <div class="comment-stars">${añadirEstrellas(puntuacion)}</div>
            ${dateString}
            </small>
        </div>
        ${miComentario}
        </div>
    </div>

    `
    document.getElementById("miComentario").value = "";
  }
