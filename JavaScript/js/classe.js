//Funções para criação de objetos

//Boa prática é iniciar com letra maiuscula


class Carro {
    
    constructor(valor1,valor2,valor3){

        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;

    }
}

const uno = new Carro("Fiat","Uno",2001);
const uno1 = new Carro ("BMW", "WAR");

class Dron {
    constructor(value1, value2){
        this.i = value1;
        this.x = value2;
    }
}

const dron = new  Dron (20, 566666);
console.log(dron);