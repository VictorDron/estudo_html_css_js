// function ativar(){
//     document.getElementById("tempo").innerHTML = "Começou a contar";
    
//     //Ativa apenas uma vez com tempo especificado.
//      tempo = setTimeout(function(){

//         document.getElementById("tempo").innerHTML = "setTimeout ativado";
//         document.body.style.background = "red";
      
//     },5000);

// }

// function parar() {
//     clearTimeout(tempo);
//     document.getElementById("tempo").innerHTML="Parou a contagem";
    
// }

function ativar(){
    
    tempo = setInterval(function(){
    var crono = document.getElementById("tempo").innerHTML;
    var soma = parseInt(crono) + 1;
    document.getElementById("tempo").innerHTML=soma;

    },200)
}

function  parar(){
    clearInterval(tempo);
}