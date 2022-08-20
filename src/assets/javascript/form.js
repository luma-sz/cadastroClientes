var botaoAdicionar = document.querySelector("#botao-adiciona")
console.log(botaoAdicionar);
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    

    var form = document.querySelector("#form-adiciona");
    var cliente = obtemClienteDoFormulario(form);
    var erros = validaCliente(cliente);

    if (erros.length > 0 ) {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaClienteNaTabela(cliente);

  
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});



localStorage.setItem('nome', 'jean');



if(localStorage.nome) {
    document.getElementById('nome').value = localStorage.nome;
}

if(localStorage.endereco) {
    document.getElementById('rua').value = localStorage.rua;
}

if(localStorage.nome) {
    document.getElementById('email').value = localStorage.email;
}

var salvarConsulta = function() {
    var nome = document.getElementById('nome').value;
    var endereco = document.getElementById('rua').value;
    var email = document.getElementById('email').value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('rua', rua);
    localStorage.setItem('email', email);  

};



document.onchange = salvarConsulta;