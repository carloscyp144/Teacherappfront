import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilProfesService {

  baseURL:string="http://localhost:3000/api/private/inscripciones/profesores/getSearch";
  baseURL1:string="http://localhost:3000/api/private/usuarios/mydata";
  baseURL2:string="http://localhost:3000/api/private/profesores/update";
  baseURL3:string="http://localhost:3000/api/private/inscripciones/accept/";
  baseURL4:string="http://localhost:3000/api/public/profesores/register";
  constructor(private httpClient:HttpClient) { }

  alumnos(token:any):Promise<any>{
    if(token==null){
      token="";
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    }
    return lastValueFrom(this.httpClient.post(this.baseURL, {} ,httpOptions));
  }
  
  datos(token:any):Promise<any>{
    if(token==null){
      token="";
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    }
    return lastValueFrom(this.httpClient.get(this.baseURL1,httpOptions));
  }
  mod_datos(datos:any,token:any):Promise<any>{
    if(datos==null){
      datos="";
    }
    if(token==null){
      token="";
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    }
    return lastValueFrom(this.httpClient.put(this.baseURL2,datos,httpOptions));
  }
  aceptar_alumnos(id:any,token:any):Promise<any>{
    if(id==null){
      id="";
    }
    if(token==null){
      token="";
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    }
    return lastValueFrom(this.httpClient.put(this.baseURL3+id,{},httpOptions));
  }
  crear_profe(datos:any):Promise<any>{
    if(datos==null){
      datos="";
    }
    return lastValueFrom(this.httpClient.post(this.baseURL4,datos));
  }

}