//Também são um objeto
//Também podem armazenar objetos


//A contagem inicia-se com 0
const lista = ["arroz","feijão","macarrão","leite"];

const lista1 = ["Carlos", "Marlon"];

const itens = [];

itens [0] = "arroz";

//array
const pessoa = ["Victor", "Cesar", 23];
let quantidade_de_elementos = pessoa.length;
let ultimo_elemento = pessoa.length -1;
//Insere um elemneto ao final
pessoa.push("Dron");
//Para descobrir de é um array
Array.isArray(pessoa);
//Troca o tipo de separador
pessoa.join("*");
//Remove o ultimo item da lista
pessoa.pop();
//Remova o primeiro item
pessoa.shift();
//Adiciona alterando a ordem dos elementos
pessoa.unshift("DronZeus");
//Adiciona segundo coordenadas
pessoa.splice(1, 0, "Adição1", "Adição2");
//Concatenar arrays
const superlista = lista.concat(lista1);
//Fatear um array, coleta elementos a apartir do indice determinado
const selecao = pessoa.slice(1);
const selecao1 = pessoa.slice(1,2);
//Listar em ordem alfabetica
pessoa.sort();
//Listar do Z ao A
pessoa.reverse();
//Ordenar numeros de forma crescente 
const numbers = [12,45,4566,78];
numbers.sort(function(a,b){return a -b})
//Coletar o maior numero. Para o menos substituir por "min"
function Maior(array) {
    return Math.max.apply(null, array)
}
let maior = Maior(numbers);


//Filtragem
const maior_que_quato = numbers.filter(filtragem);
function filtragem (value, index, array){
    return value > 4
}





//objeto
const pessoa1 = {
    nome: "Victor",
    sobrenome: "Cesar",
    idade: 30
}
   

console.log(maior_que_quato);