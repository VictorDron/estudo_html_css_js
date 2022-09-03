let data = new Date();

let ano = data.getFullYear();

let mes = data.getMonth();

let diaMES = data.getDate();

let diaSemana = data.getDay();

let hora = data.getHours();

let min = data.getMinutes();

let seg = data.getSeconds();

let miliseg = data.getMilliseconds();

// Padrão BR
 let dataBR = data.toLocaleString('pt-Br');


 var hoje = new Date();

 //Calculo de vencimento
 var vencimento = new Date(2022,0,15);

 if (hoje > vencimento){
   console.log("Sua conta venceu");
 }else{
    console.log("Ainda não venceu");
 }

 //Calculo de diferença em dias

 var dataInicial = newDATE();
 var dataFinal = newDATE(2022,11,31);

 //Diferença em milisegundos
 var diferenca = dataFinal.getTime() - dataInicial.getTime();

 var dias = Math.ceil(diferenca/(24*60*60*1000));
 console.log(dias);

