var botaoAdicionar = document.querySelector("#botao-adiciona")
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

    var nome = document.getElementById('nome');
    var rua = document.getElementById('rua');
    var email = document.getElementById('email');
    var codigo = Math.round(Math.random()*100);
    if( nome.value == "" || email.value == "" || rua.value == "") {
        if(nome.value == ""){
            nome.focus();
            nome.classList.add("is-invalid");
        }
        if(rua.value == ""){
            rua.focus();
            rua.classList.add("is-invalid");
        }
        if(email.value == ""){
            email.focus();
            email.classList.add("is-invalid");
        }
    }else{
        nome.classList.remove("is-invalid");
        rua.classList.remove("is-invalid");
        email.classList.remove("is-invalid");

        var pessoa = {codigo: codigo, nome: nome.value, rua: rua.value, email: email.value};
    
        if(consulta != null){
            consulta.push(pessoa);
            var storageAtualizado = JSON.stringify(consulta);
            localStorage.setItem("pessoas", storageAtualizado);
        }else{
            var primeiroStorage = [pessoa];
            var storageAtualizado = JSON.stringify(primeiroStorage);
            localStorage.setItem("pessoas", storageAtualizado);
        }
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

function selected (select) {
    if(select == "pessoaJuridica"){
        var nomeFantasia = document.querySelector("#nomeFantasia");
        nomeFantasia.classList.remove("invisivel");
    }
    if(select == "pessoaFisica"){
        var nomeFantasia = document.querySelector("#nomeFantasia");
        nomeFantasia.classList.add("invisivel");
    }
}

