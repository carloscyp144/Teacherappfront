import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  baseURL:string=environment.API_URL+"/api/public/login";
  constructor(private httpClient:HttpClient) { }

  login_user(inicio_sesion:any):Promise<any>{
    console.log(inicio_sesion);
    return lastValueFrom(this.httpClient.post<any>(this.baseURL,inicio_sesion));
  }

}
