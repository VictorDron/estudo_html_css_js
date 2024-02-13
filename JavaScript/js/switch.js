 //Verificar as condições, bloco por bloco. Caso nenhum a condição seja atendida o bloco em "Default" será executada. Funciona de forma literal assim como o "==="
 
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


let dron = "ok"
//Coleta a variavel
switch (dron) {
    //Verifica o primeira caso
    case 'ok':
        console.log("Booa");
        break;
    //Verifica o primeira caso
    case 'nada':
        console.log("nada");
        break;
     //Padrão caso nenhuma das condições seja atendida
    default:
        console.log("Nada bom");
        break;
}
