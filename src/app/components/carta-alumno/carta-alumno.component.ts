import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carta-alumno',
  templateUrl: './carta-alumno.component.html',
  styleUrls: ['./carta-alumno.component.css']
})
export class CartaAlumnoComponent implements OnInit {

  @Input() Alumno!:any;

  constructor() { }

  ngOnInit(): void {
  }

}
