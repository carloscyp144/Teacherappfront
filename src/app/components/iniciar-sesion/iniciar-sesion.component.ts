import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import Swal from'sweetalert2';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})

export class IniciarSesionComponent implements OnInit {

  userForm_inicio: FormGroup;
  direccion: string = '';

  constructor(
    private loginService:LoginService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.userForm_inicio = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,20}$/)]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    });
  }

  ngOnInit(): void {

  }

  async logearse(): Promise<void> {
    let User = this.userForm_inicio.value;
    await this.loginService.login_user(User)
      .then(response => {
        let rolId, email;
        if (response.admin) {
          rolId = response.admin.rolId;
          email = response.admin.email;
          this.direccion='/TeacherApp/buscador';
        } else if (response.alumno) {
          rolId = response.alumno.rolId;
          email = response.alumno.email;
          this.direccion='/TeacherApp/alumno/perfil';
        } else if(response.profesor){
          rolId = response.profesor.rolId;
          email = response.profesor.email;
          this.direccion='/TeacherApp/profesor/perfil';
        }
        this.localStorageService.saveData(response.token, rolId, email);
        window.location.href = this.direccion;
      })
      .catch(err=>{
        this.gestion_de_errores(err);
      });
  }
  gestion_de_errores(err:any):void{
    if(err.status){
      if(err.status==401){
        Swal.fire('', 'El email y/o la contraseña son incorrectos', 'error');
      }
      else if(err.status==500){
        Swal.fire('', 'Se ha producido algún error en el servidor', 'error');
      }
      else if(err.status==400){
        Swal.fire('', 'Alguno de los campos enviados es incorrecto', 'error');
      }
      else{
        Swal.fire('', 'Se ha producido algun tipo de error', 'error');
      }
    }
    else{
      Swal.fire('', 'Se ha producido algun tipo de error', 'error');
    }
  }

}
