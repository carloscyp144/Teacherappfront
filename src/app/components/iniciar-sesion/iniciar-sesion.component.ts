import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})

export class IniciarSesionComponent implements OnInit {

  userForm_inicio:FormGroup;
  error: String;
  constructor(
    private loginService:LoginService,
    private router:Router
  ) {
    this.error='';
    this.userForm_inicio=new FormGroup({
      email:new FormControl('',[Validators.required]),
      contra:new FormControl('',[Validators.required]),
    });
    
  }

  async logearse():Promise<void>{
    let User=this.userForm_inicio.value;
    let inicio={
      email: User.email,
      password: User.contra
    }
    console.log(inicio);
    await this.loginService.login_user(inicio)
    .then(response=>{
      localStorage.setItem('token-usuario',response.token);
      localStorage.setItem('email-usuario',response.alumno.email);
      if(response.admin){
        localStorage.setItem('rolId-usuario',"1");
        this.router.navigate(['TeacherApp/administrador/validar']);
      }
      else if(response.alumno){
        localStorage.setItem('rolId-usuario',"2");
        this.router.navigate(['TeacherApp/alumno/perfil']);
      }
      else if(response.profesor){
        localStorage.setItem('rolId-usuario',"3");
        this.router.navigate(['TeacherApp/profesor/perfil']);
      }
    })
    .catch(err=>{
      console.log(err);
      if(err.error.errorMessage){
        this.error=err.error.errorMessage;
      }
      else if(err.error.password.msg){
        this.error=err.error.password.msg;
      }
      else{
        console.log(err);
      }
    })
  }

  ngOnInit(): void {

  }

}
