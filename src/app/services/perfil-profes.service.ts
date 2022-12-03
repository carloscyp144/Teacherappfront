import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilProfesService {

  baseURL:string="http://localhost:3000/api/private/inscripciones/profesores/getSearch";
  baseURL1:string="http://localhost:3000/api/private/usuarios/mydata";
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
}