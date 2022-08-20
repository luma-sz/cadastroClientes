var botaoAdicionar = document.querySelector("#botao-adiciona")
console.log(botaoAdicionar);
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
 
    salvarConsulta();

});

if(localStorage.nome) {
    document.getElementById('nome').value = localStorage.nome;
}

if(localStorage.endereco) {
    document.getElementById('rua').value = localStorage.rua;
}

if(localStorage.email) {
    document.getElementById('email').value = localStorage.email;
}

var salvarConsulta = function() {
    var nome = document.getElementById('nome').value;
    var rua = document.getElementById('rua').value;
    var email = document.getElementById('email').value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('rua', rua);
    localStorage.setItem('email', email);  

};



document.onchange = salvarConsulta;