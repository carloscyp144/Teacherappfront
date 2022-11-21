import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { ListadoProfesoresComponent } from './components/listado-profesores/listado-profesores.component';
import { MapaProfesoresComponent } from './components/mapa-profesores/mapa-profesores.component';
import { FormsModule } from '@angular/forms';

import { FormatoMedidasPipe } from './pipes/formato-medidas.pipe';

import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    BuscadorComponent,
    IniciarSesionComponent,
    CrearCuentaComponent,
    ListadoProfesoresComponent,
    MapaProfesoresComponent,
    FormatoMedidasPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.GOOGLE_API_KEY,
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
