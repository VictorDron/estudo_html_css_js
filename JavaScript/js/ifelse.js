//Condicionais
var interruptor = "on";

/*if (interruptor == "on"){
    alert("A lampada está ligada");
}else{
    alert("A lampada está desligada");
}*/

/*var hora = new Date().getHours();
if (hora <= 12){
    alert("Bom dia");
}else if(hora <= 18){
    alert("Boa tarde");

}else {
    alert("Boa noite");
}*/

function validar (){

    let nome = document.getElementById("nome").value;

    if (nome == "" || nome == null){

        let p = document.getElementById("teste");
        p.innerHTML="O campo não ficar vazio";
        p.style.color="red";

    }else {

        let p = document.getElementById("teste");
        p.innerHTML="Parabéns";
        p.style.color="green";

    }
}


let dron = "ok";
//Se
if (dron == "ok"){
   console.log('Boom');
   //Se então
} else if(dron != "ok"){
    console.log("Ruim");
 //Se não
} else{
  console.log('Deu ruim');
}