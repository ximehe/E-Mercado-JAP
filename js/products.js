document.addEventListener("DOMContentLoaded",function (e) {
    fetch(PRODUCTS_URL + localStorage.getItem('catID') + EXT_TYPE)
.then( respuesta => respuesta.json() )
.then( data => {

    const ArrayDatos = data;
    document.getElementById('cat-name').innerHTML=ArrayDatos.catName
    showList(ArrayDatos).products;

})
})


function showList(array){
    
    array.products.forEach(element => {

        var elementHTML = ` <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + element.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ element.name + " " + element.currency + "-" + element.cost +`</h4> 
                        <p> `+ element.description +`</p> 
                        
                        </div>
                        <small class="text-muted">` + element.soldCount + ` artículos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        
        document.getElementById("info").innerHTML += elementHTML; 
        
        
    });                              
}
