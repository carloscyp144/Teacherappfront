import { Component, OnInit } from '@angular/core';
import { PerfilProfesService } from 'src/app/services/perfil-profes.service';

@Component({
  selector: 'app-profesor-alumnos',
  templateUrl: './profesor-alumnos.component.html',
  styleUrls: ['./profesor-alumnos.component.css']
})
export class ProfesorAlumnosComponent implements OnInit {

  arralumnos:any[]=[];

  constructor(
    private llamadas_profesores:PerfilProfesService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.llamadas_profesores.alumnos(localStorage.getItem('token-usuario'))
    .then(response=>{
      this.arralumnos=response.rows;
    })
    .catch(err=>{console.log(err);})
  }

}