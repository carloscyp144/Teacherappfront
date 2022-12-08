import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PerfilAlumnosService } from 'src/app/services/perfil-alumnos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carta-profesor',
  templateUrl: './carta-profesor.component.html',
  styleUrls: ['./carta-profesor.component.css']
})
export class CartaProfesorComponent implements OnInit {

  userForm_opinion:FormGroup;
  @Input() Profesor!:any;
  imagen:string="";
  aceptado=true;
  comentar="Enviar datos";

  constructor(
    private llamadasalumnos:PerfilAlumnosService,
  ) {
    this.userForm_opinion=new FormGroup({
      comentario:new FormControl('this.Profesor.comentario',[Validators.required]),
      puntuacion:new FormControl('this.Profesor.puntuacion',[Validators.required]),
    });
  }

  ngOnInit(): void {
    
    this.userForm_opinion.setValue({comentario:this.Profesor.comentario,puntuacion:this.Profesor.puntuacion});
    this.imagen=this.url_imagen(this.Profesor.imagen);
    console.log(this.Profesor);
    if (this.Profesor.estado==0){
      this.userForm_opinion.get('comentario')?.disable();
      this.userForm_opinion.get('puntuacion')?.disable();
      this.aceptado=false;
      this.comentar="No has sido aceptado";
    }
  }

  url_imagen(id_imagen:string):string{
    if(id_imagen==null){
      return "./assets/images/blanco.png";
    }
    return environment.API_URL+"/images/avatars/"+id_imagen;
  }
  async getDataForm():Promise<void>{
    let datos2=Object.assign(this.userForm_opinion.value,{id:this.Profesor.id});
    console.log(datos2);
    await this.llamadasalumnos.opinar(datos2,localStorage.getItem('token'))
    .then((response: any)=>{
      console.log(response);
    })
    .catch((err: any)=>{console.log(err);})
    
  }
}
