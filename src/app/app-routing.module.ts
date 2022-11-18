import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';

const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:"TeacherApp"},
  {path:"TeacherApp",component:BuscadorComponent},
  {path:"TeacherApp/iniciar_sesion",component:IniciarSesionComponent},
  {path:"TeacherApp/crear_cuenta",component:CrearCuentaComponent},
  {path:"**",redirectTo:"home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
