import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilProfesService } from 'src/app/services/perfil-profes.service';

@Component({
  selector: 'app-carta-alumno',
  templateUrl: './carta-alumno.component.html',
  styleUrls: ['./carta-alumno.component.css']
})
export class CartaAlumnoComponent implements OnInit {

  aceptado:boolean;
  @Input() Alumno!:any;
  imagen:string="";

  constructor(
    private router:Router,
    private llamadasprofesor:PerfilProfesService
  ) {
    this.aceptado=true;
  }

  ngOnInit(): void {
    console.log(this.Alumno);
    if(this.Alumno.estado==0){
      this.aceptado=false;
    }
    this.imagen=this.url_imagen(this.Alumno.imagen);
  }

  async aceptar_alumno():Promise<void>{
    await this.llamadasprofesor.aceptar_alumnos(this.Alumno.id,localStorage.getItem('token-usuario'))
    .then(response=>{
      window.location.reload();
    })
    .catch(err=>{console.log(err);})
  }

  url_imagen(id_imagen:string):string{
    if(id_imagen==null){
      return "./assets/images/blanco.png";
    }
    return "http://localhost:3000/images/avatars/"+id_imagen;
  }
}