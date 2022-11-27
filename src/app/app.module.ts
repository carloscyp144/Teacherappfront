import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { CrearAlumnoComponent } from './components/crear-alumno/crear-alumno.component';
import { CrearProfesorComponent } from './components/crear-profesor/crear-profesor.component';
import { BarraProfesorComponent } from './components/barra-profesor/barra-profesor.component';
import { ProfesorAlumnosComponent } from './components/profesor-alumnos/profesor-alumnos.component';
import { ProfesorPerfilComponent } from './components/profesor-perfil/profesor-perfil.component';
import { CartaAlumnoComponent } from './components/carta-alumno/carta-alumno.component';
import { AlumnoPerfilComponent } from './components/alumno-perfil/alumno-perfil.component';
import { AlumnoOpinarComponent } from './components/alumno-opinar/alumno-opinar.component';
import { BarraAlumnoComponent } from './components/barra-alumno/barra-alumno.component';
import { CartaProfesorComponent } from './components/carta-profesor/carta-profesor.component';



@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    BuscadorComponent,
    IniciarSesionComponent,
    CrearCuentaComponent,
    CrearAlumnoComponent,
    CrearProfesorComponent,
    BarraProfesorComponent,
    ProfesorAlumnosComponent,
    ProfesorPerfilComponent,
    CartaAlumnoComponent,
    AlumnoPerfilComponent,
    AlumnoOpinarComponent,
    BarraAlumnoComponent,
    CartaProfesorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, //Formularios
    FormsModule //NgModul
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
