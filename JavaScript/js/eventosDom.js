
var a = window.document.getElementById('area');

//Uma alternativa a por tudo no HTML
a.addEventListener('click',clicar);
a.addEventListener('mousenter',entrou);
a.addEventListener('mouseout',saiu);

function clicar(){

  a.innerText = 'clicou';
  a.style.background = 'red';
}

function entrar () {

    a.innerText='Entrou';

   
}

function sair () {

    a.innerText='Saiu';
    
}