function print(x,y) {
    return document.getElementById(x).innerHTML = y;
}
const pessoa = ["pão","queijo","alameda"];

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
print("texto",pessoa);