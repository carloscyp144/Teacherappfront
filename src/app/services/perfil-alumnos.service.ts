import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilAlumnosService {

  baseURL:string="http://localhost:3000/api/private/inscripciones/alumnos/getSearch";
  constructor(private httpClient:HttpClient) { }

  profesores(token:any):Promise<any>{
    if(token==null){
      token="";
    }
    console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
}

return firstValueFrom(this.httpClient.post(this.baseURL, {} ,httpOptions)
);
 
  }

}