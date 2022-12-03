import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PerfilProfesService } from 'src/app/services/perfil-profes.service';

@Component({
  selector: 'app-crear-profesor',
  templateUrl: './crear-profesor.component.html',
  styleUrls: ['./crear-profesor.component.css']
})
export class CrearProfesorComponent implements OnInit {

  userForm_profesor:FormGroup;
  crear_modificar:String;
  es_modificar:boolean;

  constructor(
    private router:Router,
    private llamadasprofesor:PerfilProfesService
  ) {
    this.crear_modificar='Crear cuenta';
    this.es_modificar=false;
    this.userForm_profesor=new FormGroup({
      username:new FormControl('',[Validators.required]),
      nombre:new FormControl('',[Validators.required]),
      descripcion:new FormControl('',[Validators.required]),
      precio_hora:new FormControl('',[Validators.required]),
      experiencia:new FormControl('',[Validators.required]),
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
    await this.llamadasprofesor.datos(localStorage.getItem('token-usuario'))
    .then(response=>{
      console.log(response)
      this.userForm_profesor=new FormGroup({
        username:new FormControl(response.profesor.userName,[Validators.required]),
        nombre:new FormControl(response.profesor.nombreCompleto,[Validators.required]),
        descripcion:new FormControl(response.profesor.descripcion,[Validators.required]),
        precio_hora:new FormControl(response.profesor.precioHora,[Validators.required]),
        experiencia:new FormControl(response.profesor.experiencia,[Validators.required]),
        email:new FormControl(response.profesor.email,[Validators.required,Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,20}$/)]),
        contra:new FormControl('',[Validators.required]),
      });
      this.userForm_profesor.get('username')?.disable();
      this.userForm_profesor.get('email')?.disable();
    })
    .catch(err=>{})
  }
}
