import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { ProfesorAlumnosComponent } from './components/profesor-alumnos/profesor-alumnos.component';
import { ProfesorPerfilComponent } from './components/profesor-perfil/profesor-perfil.component';
import { ProfesorGuard } from './guards/profesor.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:"TeacherApp"},
  {path:"TeacherApp",component:BuscadorComponent},
  {path:"TeacherApp/iniciar_sesion",component:IniciarSesionComponent},
  {path:"TeacherApp/crear_cuenta",component:CrearCuentaComponent},
  {path:"TeacherApp/profesor/perfil",component:ProfesorPerfilComponent,canActivate:[ProfesorGuard]},
  {path:"TeacherApp/profesor/alumnos",component:ProfesorAlumnosComponent,canActivate:[ProfesorGuard]},
  {path:"**",redirectTo:"home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
