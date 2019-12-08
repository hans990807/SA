$(document).ready(function(){

  addProduct();
 });


function add(){
    let product_html='';
    product_html+=`<div>`+"白酒蛤蠣義大利麵"+`</div>`;
    $("#panel").append(product_html);
  
}
  
function addProduct(data) {
    let inner_html = '';
    inner_html += '<div class="product_item">';
    inner_html += '<div class="card-header">';
    inner_html += '<h4 class="product_title">' + "白酒蛤蜊義大利麵" + '</h4>';
    inner_html += '</div>';
    inner_html += '<div class="product_img">';
    inner_html += '<img src="white.jpg" height="240px" width="320px">';
    inner_html +='</div>';
    inner_html +='<label class="product_price">'+"$"+160+'</label>';
    inner_html +='<div class="btn_pos">';
    inner_html +='<button class="btn_cart">'+"加到購物車"+'</button>'
    inner_html += '</div>';
    $("#panel").append(inner_html);
}


