import { Component, OnInit } from '@angular/core';
import {enableProdMode} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: { ['(document:click)']: 'consultar()'}
})

export class AppComponent implements OnInit{
  ngOnInit() {
    this.loadScript('../../assets/javascript/form.js');
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
    var pessoas = localStorage.getItem("pessoas");
    if (pessoas != null){
      var pessoaJSON = JSON.parse(pessoas);
      return pessoaJSON;
    }
  }
  title = 'softti';
  headers = ["Código", "Nome", "Endereço", "E-mail"]
}




