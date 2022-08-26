// for (let i = 0; i<10001; i++) {
//     document.getElementById("teste").innerHTML += i+", ";
// }

// for (let i = 1990; i < 2021; i++){

//     document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>";
// }


const carros = ["Gol","Fusca","Brasília","Del rey","Chevete"];

let tamanho = carros.length;

for (let i=0; i<tamanho;i++){
    document.getElementById("teste").innerHTML +=carros[i] + ", ";
}