import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-profesores',
  templateUrl: './listado-profesores.component.html',
  styleUrls: ['./listado-profesores.component.css']
})
export class ListadoProfesoresComponent implements OnInit {

  @Input() profesores: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // console.log(this.profesores);
  }

}
