import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carta-alumno',
  templateUrl: './carta-alumno.component.html',
  styleUrls: ['./carta-alumno.component.css']
})
export class CartaAlumnoComponent implements OnInit {

  userForm_aceptar:FormGroup;
  @Input() Alumno!:any;

  constructor() {
    this.userForm_aceptar=new FormGroup({

    });
  }

  ngOnInit(): void {
  }

}
