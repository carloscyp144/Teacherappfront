import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  base_url: string = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  configHeaders() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return headers;
  }

  getAll(body: any): Promise<any> {
    let headers = this.configHeaders();
    return lastValueFrom(this.http.post<any>(`${this.base_url}/api/private/alumnos/getSearch/`, body,{ headers }));
  }

  deleteUser(alumnoId: number){
    let headers = this.configHeaders();
    return lastValueFrom(this.http.delete<any>(`${this.base_url}/api/private/alumnos/${alumnoId}`, { headers }));
  }
  
}
