import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa-profesores',
  templateUrl: './mapa-profesores.component.html',
  styleUrls: ['./mapa-profesores.component.css']
})
export class MapaProfesoresComponent implements OnInit {

  @Input() profesores: any[] = [];
  @Input() lat!: number;
  @Input() lon!: number;
  
  zoom: number = 10;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.profesores)
  }



}
