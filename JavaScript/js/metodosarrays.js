function print(x,y) {
    return document.getElementById(x).innerHTML = y;
}
const pessoa = ["pão","queijo","alameda"];
const lista = ["suco","laranja","maracuja"];

//document.getElementById(x).innerHTML = y;

//Troca o separador
pessoa.join()   
//Remove o ultimo item
pessoa.pop();
//adiciona itens
pessoa.push();
//Remove o primeiro indice
pessoa.shift();
//Adiciona no primeiro campo um elemento
pessoa.unshift("bonitão");
//Deleta um elemneto em específico
delete pessoa [0];
//Adiciona com o poder de subtituição 
pessoa.splice();
//Concatenação de arrays
const uniao = pessoa.concat(lista);

const jogadores = ["pele","rodrigo","alef","messi","carlos"];

//Fatia em posições
const craques = jogadores.slice(2);
//Ordem alfabética
jogadores.sort();
//Reverte a ordem alfabetica
jogadores.reverse();
 
const numeros = [100,20,600,55];
//Ordem crescente
numeros.sort(function(a,b) {return a-b});
//Ordem decrescente
numeros.sort(function(a,b) {return b-a});
//Maior número
function maiorNumero (array){
    return Math.max.apply(null,array);
}
//Menos numero
function menorNumero (array){

    return Math.min.apply(null,array);
}
//Filtro
function filtragem (value,index,array){
    return value > 20;
}
numeros.filter(filtragem);



print("texto",craques);