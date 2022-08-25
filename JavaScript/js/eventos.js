/*
onclick
ondblclick

onmouseover
onmouseout
onmousemove
onmousedown
onmouseup

onfocus
onchange
onblur

onkeydown
onkeypress
onkeyup
onload
onresize

*/

 function clickEvento() {
     alert('ACIONOU UM EVENTO DE CLICK');
    //Muda o backgraound
    document.body.style.background = "yellow";

 }

function clickdbl(){
    alert("Clickduplo");
}
function viraVermelho(){
    let div = document.getElementById("red") ;
    div.style.background = "red";
}

function viraAzul(){
    let div = document.getElementById("red") ;
    div.style.background = "blue";
}

