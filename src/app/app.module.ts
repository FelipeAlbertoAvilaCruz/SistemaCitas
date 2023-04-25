import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaComponent } from './acerca/acerca.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ConsultarCitaComponent } from './consultar-cita/consultar-cita.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroCitaComponent } from './registro-cita/registro-cita.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaComponent,
    HomeComponent,
    MenuComponent,
    ConsultarCitaComponent,
    RegistroComponent,
    RegistroCitaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
