var navbar =
`<a href="./index.html">About</a>
<a href="#">Posts</a>
<a href="#">Products</a>`;

var credit =
`Copyright © 2020 vikopromotion.<br/>Powered by Bootstrap 4.`;

$(window).on("load", function(){
    $("#navbar").append(navbar);
    $("#credit").append(credit);
});

function currentSelect(id){
    $(id).attr("class", "currentSelect");
};