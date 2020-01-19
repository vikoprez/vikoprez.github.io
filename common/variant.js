var navbar =
`<a class="unSelect" id="navbarAbout" href="./index.html">About</a>
<a class="unSelect" id="navbarPost" href="./404.html">Posts</a>
<a class="unSelect" id="navbarProduct"href="./products/products.html">Products</a>`;

var credit =
`Copyright © 2020 vikopromotion.<br/>Powered by Bootstrap 4.`;

$(window).on("load", function(){
    $("#navbar").append(navbar);
    $("#credit").append(credit);
});

function currentHightlight(id){
    $(id).attr("class", "currentSelect");
};