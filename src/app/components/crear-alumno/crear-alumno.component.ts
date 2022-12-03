import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilAlumnosService } from 'src/app/services/perfil-alumnos.service';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css']
})
export class CrearAlumnoComponent implements OnInit {

  userForm_alumno:FormGroup;
  crear_modificar:String;
  es_modificar:boolean;

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private llamadasalumnos:PerfilAlumnosService
  ) {
    this.crear_modificar='Crear cuenta';
    this.es_modificar=false;
    this.userForm_alumno=new FormGroup({
      username:new FormControl('',[Validators.required]),
      nombre:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,20}$/)]),
      contra:new FormControl('',[Validators.required]),
    });

  }

  ngOnInit(): void {
    if(this.router.url=='/TeacherApp/crear_cuenta'){
      this.crear_modificar='Crear cuenta';
    }
    else{
      this.crear_modificar='Modificar datos';
      this.es_modificar=true;
      this.prueba();
    }
  }
  async prueba():Promise<void> {
    await this.llamadasalumnos.datos(localStorage.getItem('token-usuario'))
    .then(response=>{
      this.userForm_alumno=new FormGroup({
        username:new FormControl(response.alumno.userName,[Validators.required]),
        nombre:new FormControl(response.alumno.nombreCompleto,[Validators.required]),
        email:new FormControl(response.alumno.email,[Validators.required,Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,20}$/)]),
        contra:new FormControl('',[Validators.required]),
      });
      this.userForm_alumno.get('username')?.disable();
      this.userForm_alumno.get('email')?.disable();
    })
    .catch(err=>{})
  }
}

