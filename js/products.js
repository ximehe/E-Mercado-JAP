
const ORDER_ASC_BY_PRICE = "$->$$";
const ORDER_DESC_BY_PRICE = "$$->$";
const ORDER_DESC_BY_RELEV = "-->"
let FiltroArray=[];
let min=0;
let max=0;

 
function sortAndShowCategories(criterio, array){
    if (criterio === ORDER_ASC_BY_PRICE){
       
        FiltroArray= array.sort((a,b) => {return a.cost - b.cost})
        
    }
    if(criterio === ORDER_DESC_BY_PRICE){
        FiltroArray= array.sort((a,b) => {return b.cost - a.cost})
    }
    if(criterio === ORDER_DESC_BY_RELEV){
        FiltroArray= array.sort((a,b) => {return b.soldCount - a.soldCount})
    }

    document.getElementById("info").innerHTML = ""
    showList(FiltroArray)
}



document.addEventListener("DOMContentLoaded",function (e) {
    fetch(PRODUCTS_URL + localStorage.getItem('catID') + EXT_TYPE)
.then( respuesta => respuesta.json() )
.then( data => {

    ArrayDatos = data;
    FiltroArray= data.products;
    document.getElementById('cat-name').innerHTML=ArrayDatos.catName
    showList(FiltroArray);

})
})
 



function showList(array){
    
    array.forEach(element => {

        if (((min == 0) || (parseInt(element.cost) >= min)) && ((max==0) || (parseInt(element.cost)<= max))){
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
        }

        
        
        
    });                              
}


document.getElementById("ordenAscPrecio").addEventListener("click",function(){
    sortAndShowCategories(ORDER_ASC_BY_PRICE, FiltroArray);
});
document.getElementById("ordenDescPrecio").addEventListener("click",function(){
    sortAndShowCategories(ORDER_DESC_BY_PRICE, FiltroArray);
});
document.getElementById("ordenDescRelev").addEventListener("click",function(){
    sortAndShowCategories(ORDER_DESC_BY_RELEV, FiltroArray);
});
document.getElementById("clearRangeFilter").addEventListener("click",function(){
    
   location.reload();

});
document.getElementById("rangeFilterCount").addEventListener("click", function(){
    min= document.getElementById("rangeFilterCountMin").value;
    max= document.getElementById("rangeFilterCountMax").value;
    document.getElementById("info").innerHTML=""
    showList(FiltroArray)
})
