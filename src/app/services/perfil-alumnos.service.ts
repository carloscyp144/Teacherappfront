import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilAlumnosService {

  baseURL:string="http://localhost:3000/api/private/inscripciones/alumnos/getSearch";
  baseURL1:string="http://localhost:3000/api/private/usuarios/mydata";
  baseURL2:string="http://localhost:3000/api/public/alumnos/register";
  baseURL3:string="http://localhost:3000/api/private/alumnos/update";
  baseURL4:string="http://localhost:3000/api/private/inscripciones/opinion";
  constructor(private httpClient:HttpClient) { }

  profesores(token:any):Promise<any>{
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
    return lastValueFrom(this.httpClient.get(this.baseURL1, httpOptions));
  }
  crear_alumno(datos:any):Promise<any>{
    if(datos==null){
      datos="";
    }
    return lastValueFrom(this.httpClient.post(this.baseURL2,datos));
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
    return lastValueFrom(this.httpClient.put(this.baseURL3,datos,httpOptions));
  }
  opinar(datos:any,token:any):Promise<any>{
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
    return lastValueFrom(this.httpClient.put(this.baseURL4,datos,httpOptions));
  }
}