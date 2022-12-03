import { Component, OnInit } from '@angular/core';
import { ProfesorService } from 'src/app/services/profesor.service';

import Swal from'sweetalert2';

@Component({
  selector: 'app-panel-profesores',
  templateUrl: './panel-profesores.component.html',
  styleUrls: ['./panel-profesores.component.css']
})
export class PanelProfesoresComponent implements OnInit {

  profesores: any[] = [];
  busquedaProfesores: any[] = [];
  tablaProfesores: any = [];
  paginacion: any[] = [];
  paginaActual: number = 0;
  ultimaPagina: number = 0;
  buscarProfesor: string = "";

  constructor(
    private profesorService: ProfesorService
  ) { }

  ngOnInit(): void {
    this.obtenerProfesores();
  }

  async obtenerProfesores() {
    let response: any = await this.profesorService.getAllPrivate({});
    this.profesores = response.rows;
    console.log(this.profesores);
    this.busquedaProfesores = this.profesores;
    this.ultimaPagina = Math.ceil(this.profesores.length / 10);
    this.paginacion = Array(this.ultimaPagina);
    this.cambiarPagina(this.paginaActual);
  }

  cambiarPagina(pagina: number) {
    this.tablaProfesores = this.busquedaProfesores.slice(pagina * 10, (pagina + 1) * 10);
    this.paginaActual = pagina;
  }

  buscarProfesores() {
    this.busquedaProfesores = this.profesores.filter(
      (profesor: any) => {
        return profesor.nombreCompleto.toUpperCase().includes(this.buscarProfesor.toUpperCase())
          || profesor.nombreRama.toUpperCase().includes(this.buscarProfesor.toUpperCase())
      }
    );
    this.ultimaPagina = Math.ceil(this.busquedaProfesores.length / 10);
    this.paginacion = Array(this.ultimaPagina);
    this.cambiarPagina(0);
  }

  activarProfesor(profesorId: number) {
    let profesor = this.profesores.find((profesor: any) => profesor.id === profesorId);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success ms-2',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Validación de profesor',
      html: "¿Quieres validar al profesor <b>"+profesor.nombreCompleto+"</b>? <table class='table align-middle table-bordered mt-3'> <tr><th>Rama</th><td>"+profesor.nombreRama+"</td></tr><tr> <th>Descripción</th><td>"+profesor.descripcion+"</td></tr> <tr><th>Precio</th><td>"+profesor.precioHora+"</td></tr> <tr><th>Experiencia</th><td>"+profesor.experiencia+"</td></tr></table>",
      showCancelButton: true,
      confirmButtonText: 'Si, validar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        profesor.validado = 1;
        swalWithBootstrapButtons.fire(
          'Validado correctamente',
          'El profesor <b>'+profesor.nombreCompleto+'</b> ya está disponible en el buscador de profesores.',
          'success'
        )
      }
    })
  }

  bloquearProfesor(profesorId: number) {
    let profesor = this.profesores.find((profesor: any) => profesor.id === profesorId);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success ms-2',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Bloqueo de profesor',
      html: "¿Quieres bloquear al profesor <b>"+profesor.nombreCompleto+"</b>? <table class='table align-middle table-bordered mt-3'> <tr><th>Rama</th><td>"+profesor.nombreRama+"</td></tr><tr> <th>Descripción</th><td>"+profesor.descripcion+"</td></tr> <tr><th>Precio</th><td>"+profesor.precioHora+"</td></tr> <tr><th>Experiencia</th><td>"+profesor.experiencia+"</td></tr></table>",
      showCancelButton: true,
      confirmButtonText: 'Si, bloquear',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        profesor.validado = 0;
        swalWithBootstrapButtons.fire(
          'Bloqueado correctamente',
          'El profesor <b>'+profesor.nombreCompleto+'</b> ha sido bloqueado.',
          'success'
        )
      }
    })
  }

}
