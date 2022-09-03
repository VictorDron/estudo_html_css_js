//Converte texto no padrão JSON em objetos.
//JSON.parse();
//Converte objetos em texto padrão JSON.
//JSON.stringify();

const carro = {

    marca: "Fiat",
    modelo:"Uno",
    ano:2001
}

function print(y){

    document.getElementById('area').innerHTML = y;
} 

let texto = JSON.stringify(carro);
print(texto);
