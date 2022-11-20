import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfesorGuard implements CanActivate {

  constructor(
    private router:Router,
  ){}

  canActivate ():  boolean | UrlTree {
    let token=localStorage.getItem('token-usuario');
    if(token){
      return true;
    }
    else{
      this.router.navigate(['/TeacherApp']);
      return false;
    }
  }
  
}
