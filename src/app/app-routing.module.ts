import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PanelProfesoresComponent } from './components/panel-profesores/panel-profesores.component';
import { PanelComponent } from './components/panel/panel.component';

const routes: Routes = [
  { path:"", pathMatch:"full", redirectTo:"TeacherApp" },
  { path:"TeacherApp", component: BuscadorComponent },
  { path:"TeacherApp/iniciar_sesion", component: IniciarSesionComponent },
  { path:"TeacherApp/crear_cuenta", component: CrearCuentaComponent },
  { path:"TeacherApp/panel", component: PanelComponent },
  { path:"TeacherApp/panel-profesores", component: PanelProfesoresComponent },
  { path:"**", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
