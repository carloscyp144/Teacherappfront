import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { OpinionesService } from 'src/app/services/opiniones.service';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-info-profesor',
  templateUrl: './info-profesor.component.html',
  styleUrls: ['./info-profesor.component.css']
})
export class InfoProfesorComponent implements OnInit {

  token: string | null = null;
  rolId: string | null = null;
  email: string | null = null;

  profesor: any;
  opiniones: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private profesorService: ProfesorService,
    private opinionesService: OpinionesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => this.getInfoProfesor(params.profesorId))
  }

  async getInfoProfesor(profesorId: number): Promise<any> {
    let body = {
      searchConditions: [
        {
          "column": "id",
          "operator": "=",
          "value": String(profesorId)
        }
      ],
      latitud: 51.0754321,
      longitud: 12.4878015,
      maximaDistancia: 100000000000
    }
    let response: any = await this.profesorService.getAll(body, true);
    this.profesor = response.rows[0];
    if(this.profesor === undefined) {
      this.router.navigate(['TeacherApp/buscador']);
      return;
    }
    this.getOpiniones(profesorId);
  }

  getLocalStorage(): void {
    let localStorage = this.localStorageService.getData();
    if (localStorage.token) {
      this.token = localStorage.token;
      this.rolId = localStorage.rolId;
      this.email = localStorage.email;
    }
  }

  async getOpiniones(profesorId: number) {
    let body = {
      id: profesorId
    }
    let response: any = await this.opinionesService.getAll(body);
    this.opiniones = response.rows;
  }

  stars(puntuacion: number): string {
    let starComplete = '<i class="fa-solid fa-star"></i>';
    let starHalf = '<i class="fa-solid fa-star-half-stroke"></i>';
    let starEmpty = '<i class="fa-regular fa-star"></i>';
    let complete = Math.trunc(puntuacion / 2);
    let half = puntuacion % 2;
    let empty = 5 - (complete + half);
    return `${starComplete.repeat(complete)}${starHalf.repeat(half)}${starEmpty.repeat(empty)}`;
  }

}
