//JSON = JavaScript Object Notation

//Transmissão de dados

//Converte texto no padrão JSON em objetos.
//JSON.parse();
//Converte objetos em texto padrão JSON.
//JSON.stringify();

const carro = {

    marca: "Fiat",
    modelo:"Uno",
    ano:2001,
    motor: ["v1", "v3","V4"]
}


//Converte o Objeto em texto
let texto = JSON.stringify(carro);
//Converte o texto em JSON para tratar o elementos
let obj = JSON.parse(texto);

console.log(obj.marca);
