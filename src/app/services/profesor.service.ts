import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

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
    return lastValueFrom(this.http.post<any>(`${this.base_url}/api/public/profesores/getSearch`, body,{ headers }));
  }

  getAllPrivate(body: any): Promise<any> {
    let headers = this.configHeaders();
    headers = headers.set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzcsInJvbGUiOiJhZG1pbiIsImV4cGlyYXRpb25fZGF0ZSI6MTY2OTU4NzQzMSwiaWF0IjoxNjY5NTY5NDMxfQ.noLWj6beezRI7pMAl9ASuSiIzleBlMXJ43IvIi-ci1A');
    return lastValueFrom(this.http.post<any>(`${this.base_url}/api/private/profesores/getSearch`, body,{ headers }));
  }

}
