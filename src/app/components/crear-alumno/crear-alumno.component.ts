import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css']
})
export class CrearAlumnoComponent implements OnInit {

  userForm_alumno:FormGroup;

  constructor() {

    this.userForm_alumno=new FormGroup({
      username:new FormControl('',[Validators.required]),
      nombre:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,20}$/)]),
      contra:new FormControl('',[Validators.required]),
    });

  }

  ngOnInit(): void {
  }

}
