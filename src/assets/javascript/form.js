var botaoAdicionar = document.querySelector("#botao-adiciona")
console.log(botaoAdicionar);
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
 
    var consulta = storage();
    atualizarStorage(consulta);

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

var atualizarStorage = function(consulta) {

    var nome = document.getElementById('nome').value;
    var rua = document.getElementById('rua').value;
    var email = document.getElementById('email').value;

    var pessoa = {nome: nome, rua: rua, email: email};

    if(consulta != null){
        consulta.push(pessoa);
        var storageAtualizado = JSON.stringify(consulta);
        localStorage.setItem("pessoas", storageAtualizado);
    }else{
        var primeiroStorage = [pessoa];
        var storageAtualizado = JSON.stringify(primeiroStorage);
        localStorage.setItem("pessoas", storageAtualizado);
    }

    
};

var storage = function(){
    if (localStorage.getItem("pessoas") != null){ // se o local storage nao estiver vazio
        var storage = localStorage.getItem("pessoas");
        if (storage != null){
          var storageJson = JSON.parse(storage);
          return storageJson;
        }
    } else{return null;} // se estiver vazio vai retornar null
}
