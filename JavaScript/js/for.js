//Para funções repetidas

// for (let i = 0; i<10001; i++) {
//     document.getElementById("teste").innerHTML += i+", ";
// }

// for (let i = 1990; i < 2021; i++){

//     document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>";
// }


const carros = ["Gol","Fusca","Brasília","Del rey","Chevete"];

let tamanho = carros.length;

for (/*inicio da contagem*/let i=0;/*condição para a execução */ i<tamanho;/*Soma  mais um caso a condição seja atendida*/i++){
    //O que será executado 
    console.log(i);
}