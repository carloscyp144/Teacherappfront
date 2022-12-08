import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from'sweetalert2';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  baseURL:string=environment.API_URL+"/api/public/login";
  constructor(
    private httpClient:HttpClient,
    private localStorageService: LocalStorageService,
    ) { }

  login_user(inicio_sesion:any):Promise<any>{
    return lastValueFrom(this.httpClient.post<any>(this.baseURL,inicio_sesion));
  }
  
  gestion_de_login(response:any):void{
    let rolId, email, direccion="";
        if (response.admin) {
          rolId = response.admin.rolId;
          email = response.admin.email;
          direccion='/TeacherApp/buscador';
        } else if (response.alumno) {
          rolId = response.alumno.rolId;
          email = response.alumno.email;
          direccion='/TeacherApp/alumno/perfil';
        } else if(response.profesor){
          rolId = response.profesor.rolId;
          email = response.profesor.email;
          direccion='/TeacherApp/profesor/perfil';
        }
        this.localStorageService.saveData(response.token, rolId, email);
        window.location.href = direccion;
  }

  gestion_de_errores_login(err:any):void{
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

  gestion_de_errores_crear_modificar_profesor(err:any):void{
    if(err.status){
      if(err.status==400){
        Swal.fire('', 'Alguno de los campos enviados es incorrecto', 'error');
      }
      else if(err.status==500){
        Swal.fire('', 'Se ha producido algún error en el servidor', 'error');
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
