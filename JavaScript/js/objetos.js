//Uma variável com muitos valores dentro
//Funciona como um conjunto
//Usa-se "Const" para declarar
//Um objeto litaral é oi que possui todos os dados definidos
//Um método é uma função dentro de um objeto

const carro = {
    marca: "ford",
    modelo: "ka",
    ano:"2015",
    placa: "ABC-1234",
    buzina: function() {
        alert('Piii');
    },
    completo: function(){
        return this.ano;
    }
};

//Para mostra todos os elementos do objetos
console.log(carro);
//Para mostrar apenas um elemento específico
console.log(carro.ano)

//Para mostrar apenas um elemento específico
console.log(carro['ano'])

/*
Chamar uma função dentro de um objeto
carro.buzina();
*/

console.log(carro.completo());