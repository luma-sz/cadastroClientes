import { Component, OnInit } from '@angular/core';
import {enableProdMode} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: { ['(document:click)']: 'documentClickEvent($event)'}
})

export class AppComponent implements OnInit{
  ngOnInit() {
    this.loadScript('../../assets/javascript/form.js');
    this.consultar();
  }

 public loadScript(url: string) {
   const body = <HTMLDivElement> document.body;
   const script = document.createElement('script');
   script.innerHTML = '';
   script.src = url;
   script.async = false;
   script.defer = true;
   body.appendChild(script);
 }
  public consultar(){
    var arrayPessoas = [{nome: "", rua: "", email: ""}];
    var pessoa = localStorage.getItem("pessoa");
    if (pessoa != null){
      var pessoaJSON = JSON.parse(pessoa);
      arrayPessoas.push(pessoaJSON);
  }
    console.log(arrayPessoas);
    return arrayPessoas;
  }
  teste = this.consultar();
  title = 'softti';
  headers = ["Código", "Nome", "Endereço", "E-mail"]


  rows = [
  {
    "Codigo" : "cpf/cnpj",
    "Nome" : 'a',
    "Endereco" : "rua",
    "Email": "email"
  }
  ];


  documentClickEvent($event: MouseEvent) {
    console.log('Through Host - Click Event Details: ', $event)
  }
}




