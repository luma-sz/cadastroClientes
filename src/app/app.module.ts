import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { StorageService } from 'src/app/local-storage.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
