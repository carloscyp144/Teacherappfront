import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilAlumnosService } from 'src/app/services/perfil-alumnos.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from'sweetalert2';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css']
})
export class CrearAlumnoComponent implements OnInit {

  userForm_alumno:FormGroup;
  crear_modificar:String;
  es_modificar:boolean;
  image: any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private llamadasalumnos:PerfilAlumnosService,
    private loginService:LoginService,
    private usuarioService:UsuarioService
  ) {
    this.crear_modificar='Crear cuenta';
    this.es_modificar=false;
    this.userForm_alumno=new FormGroup({
      userName:new FormControl('',[Validators.required]),
      nombreCompleto:new FormControl('',[Validators.required]),
      imagen:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,20}$/)]),
      password:new FormControl('',[Validators.required]),
    });

  }

  ngOnInit(): void {
    if(this.router.url=='/TeacherApp/crear_cuenta'){
      this.crear_modificar='Crear cuenta';
    }
    else{
      this.crear_modificar='Modificar datos';
      this.es_modificar=true;
      this.datos();
    }
  }
  //Funcion para crear un alumno o modificar sus datos
  async getDataForm():Promise<void>{
    if(this.router.url=='/TeacherApp/crear_cuenta'){
      this.crear_alumno(this.userForm_alumno.value);
    }
    else{
      this.modificar_alumno(this.userForm_alumno.value);
    }
    
  }
  //Funcion auxiliar para crear un alumno
  async crear_alumno(datos:any){
    await this.llamadasalumnos.crear_alumno(datos)
    .then((response:any)=>{
      this.logearse({email:datos.email,password:datos.password});
    })
    .catch((err: any)=>{
      this.loginService.gestion_de_errores_crear_modificar(err);
    })
  }
  //Funcion auxiliar para modificar datos
  async modificar_alumno(datos:any){
    let email=this.userForm_alumno.get('email')?.value;
    let userName=this.userForm_alumno.get('userName')?.value;
    let datos2=Object.assign(datos,{email:email,userName:userName});
    await this.llamadasalumnos.mod_datos(datos2,localStorage.getItem('token'))
      .then((response: any)=>{
        this.guardaImagen();
        Swal.fire('Correcto', 'Usuario modificado', 'success');
      })
      .catch((err: any)=>{
        this.loginService.gestion_de_errores_crear_modificar(err);
      })
  }
  //Funcion para dibujar los datos de un usuario al acceder a su perfil
  async datos():Promise<void> {
    await this.llamadasalumnos.datos(localStorage.getItem('token'))
    .then((response: any)=>{
      this.userForm_alumno=new FormGroup({
        userName:new FormControl(response.alumno.userName,[Validators.required]),
        nombreCompleto:new FormControl(response.alumno.nombreCompleto,[Validators.required]),
        imagen:new FormControl('',[Validators.required]),
        email:new FormControl(response.alumno.email,[Validators.required,Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,20}$/)]),
        password:new FormControl('',[Validators.required]),
      });
      this.userForm_alumno.get('userName')?.disable();
      this.userForm_alumno.get('email')?.disable();
    })
    .catch((err: any)=>{
      this.llamadasalumnos.gestion_de_errores_datos_alumnos(err);
    })
  }
  //Funcion para logearse al crear la cuenta
  async logearse(inicio:any):Promise<void>{
    await this.loginService.login_user(inicio)
      .then((response: any) => {
        localStorage.setItem('token', response.token);
        this.guardaImagen();
        this.loginService.gestion_de_login(response);
      })
      .catch((err: any)=>{
        this.loginService.gestion_de_errores_login(err);
      });
  }

  fileChoosen(event: any) {
    if(event.target.value) {
      this.image = <File>event.target.files[0];
    }
  }

  async guardaImagen() {
    if(this.image) {
      try {
        let fd = new FormData();
        if(this.image) {
          fd.append('imagen', this.image, this.image.name);
          await this.usuarioService.changeImageUser(fd);
        }
      } catch(err) {
        Swal.fire('Error imagen', 'Se produjo un error al guardar tu imagen', 'error');
      };
    }
  }
}