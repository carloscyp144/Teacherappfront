import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesor-alumnos',
  templateUrl: './profesor-alumnos.component.html',
  styleUrls: ['./profesor-alumnos.component.css']
})
export class ProfesorAlumnosComponent implements OnInit {

  arralumns:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
