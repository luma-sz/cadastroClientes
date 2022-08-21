var botaoAdicionar = document.querySelector("#botao-adiciona")
console.log(botaoAdicionar);
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
 
    salvarConsulta();
    // consultar();

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

    var pessoa = {nome: nome, rua: rua, email: email};


    var pessoaJson = JSON.stringify(pessoa);
    localStorage.setItem("pessoa", pessoaJson);

    // alert("Salvo com Sucesso");
};

document.onchange = salvarConsulta;


var consultar = function() {
  var arrayPessoas = [];
  
  return arrayPessoas

} 

function selected(pessoaFisica){
  var seletor = document.querySelector("#tipoSeletor");
    if(value != "Selecionar"){
      pessoaFisica[0].style.display = 'block';
    }else{
      pessoaJuridica[0].style.display = 'none';
    }
  }
