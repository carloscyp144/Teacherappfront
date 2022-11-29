import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carta-profesor',
  templateUrl: './carta-profesor.component.html',
  styleUrls: ['./carta-profesor.component.css']
})
export class CartaProfesorComponent implements OnInit {

  userForm_opinion:FormGroup;
  @Input() Profesor!:any;

  constructor() {
    this.userForm_opinion=new FormGroup({
      opinion:new FormControl('',[Validators.required]),
      puntuacion:new FormControl('',[Validators.required]),
    });
  }

  ngOnInit(): void {
  }

}
