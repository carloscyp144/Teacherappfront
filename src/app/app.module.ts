import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';

import { ListadoProfesoresComponent } from './components/listado-profesores/listado-profesores.component';
import { MapaProfesoresComponent } from './components/mapa-profesores/mapa-profesores.component';

import { FormatoMedidasPipe } from './pipes/formato-medidas.pipe';

import { environment } from 'src/environments/environment';
import { PanelComponent } from './components/panel/panel.component';
import { PanelProfesoresComponent } from './components/panel-profesores/panel-profesores.component';

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
    ListadoProfesoresComponent,
    MapaProfesoresComponent,
    FormatoMedidasPipe,
    CrearAlumnoComponent,
    CrearProfesorComponent,
    BarraProfesorComponent,
    ProfesorAlumnosComponent,
    ProfesorPerfilComponent,
    CartaAlumnoComponent,
    AlumnoPerfilComponent,
    AlumnoOpinarComponent,
    BarraAlumnoComponent,
    CartaProfesorComponent,
    PanelComponent,
    PanelProfesoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.GOOGLE_API_KEY,
      libraries: ['places']
    }),
    ReactiveFormsModule, //Formularios
    FormsModule //NgModul
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
