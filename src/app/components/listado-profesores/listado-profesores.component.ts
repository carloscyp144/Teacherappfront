import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-listado-profesores',
  templateUrl: './listado-profesores.component.html',
  styleUrls: ['./listado-profesores.component.css']
})
export class ListadoProfesoresComponent implements OnInit {

  @Input() profesores: any[] = [];

  token: string | null = null;
  rolId: string | null = null;
  email: string | null = null;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getLocalStorage();
    console.log(this.token);
  }

  getLocalStorage(): void {
    let localStorage = this.localStorageService.getData();
    if (localStorage.token) {
      this.token = localStorage.token;
      this.rolId = localStorage.rolId;
      this.email = localStorage.email;
    }
  }

  verMas(profesorId: number): void {
    this.router.navigate([`TeacherApp/info-profesor/${profesorId}`]);
  }

}
