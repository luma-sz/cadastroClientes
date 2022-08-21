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
    var pessoas = localStorage.getItem("pessoas");
    if (pessoas != null){
      var pessoaJSON = JSON.parse(pessoas);
  }
    console.log(pessoaJSON);
    return pessoaJSON;
  }
  
  public randint(low:number, max?:number) {
    return Math.floor(Math.random() * 10) % (max ?? low) + (max ? low : 0);
  }

  tabela = this.consultar()
  title = 'softti';
  headers = ["Código", "Nome", "Endereço", "E-mail"]


  documentClickEvent($event: MouseEvent) {
    console.log('Through Host - Click Event Details: ', $event)
  }
}




