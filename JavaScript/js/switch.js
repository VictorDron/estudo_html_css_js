 function validar(){
    let cor = document.getElementById("cor").value;
    //Converte para minusculo
    cor = cor.toLowerCase();

    switch (cor) {

        case  "azul":
            document.body.style.background = "blue";
            break;
        case  "vermelho":
            document.body.style.background = "red";
            break;    
        case "amarelo":
            document.body.style.background = "yellow";
            break; 
        default:
            document.getElementById("teste").innerHTML="Sem cor";
            document.body.style.background = "white";       
    }

 }