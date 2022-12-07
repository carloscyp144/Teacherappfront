import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-profesor',
  templateUrl: './crear-profesor.component.html',
  styleUrls: ['./crear-profesor.component.css']
})
export class CrearProfesorComponent implements OnInit {

  userForm_profesor:FormGroup;
  crear_modificar:String;

  constructor(
    private router:Router,
  ) {
    this.crear_modificar='Crear cuenta';
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
    }
  }

}
