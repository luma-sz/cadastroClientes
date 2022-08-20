import { Component, OnInit } from '@angular/core';
import {enableProdMode} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: { ['(document:click)']: 'documentClickEvent($event)' }

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

  title = 'softti';

  documentClickEvent($event: MouseEvent) {
    console.log('Through Host - Click Event Details: ', $event)
  }
}




