import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  baseURL:string="http://localhost:3000/api/public/login";
  constructor(private httpClient:HttpClient) { }

  login_user(inicio_sesion:any):Promise<any>{
    return lastValueFrom(this.httpClient.post<any>(this.baseURL,inicio_sesion));
  }

}
