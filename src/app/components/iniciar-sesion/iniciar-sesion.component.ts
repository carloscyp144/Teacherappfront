import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})

export class IniciarSesionComponent implements OnInit {

  userForm_inicio: FormGroup;
  error: String = '';

  constructor(
    private loginService:LoginService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.userForm_inicio = new FormGroup({
      email: new FormControl('', [Validators.required]),
      contra: new FormControl('', [Validators.required]),
    });
  }

  async logearse(): Promise<void> {
    let User = this.userForm_inicio.value;
    let inicio = {
      email: User.email,
      password: User.contra
    }
    await this.loginService.login_user(inicio)
      .then(response => {
        let rolId, email;
        if (response.admin) {
          rolId = response.admin.rolId;
          email = response.admin.email;
        } else if (response.alumno) {
          rolId = response.alumno.rolId;
          email = response.alumno.email;
        } else if(response.profesor){
          rolId = response.profesor.rolId;
          email = response.profesor.email;
        }
        this.localStorageService.saveData(response.token, rolId, email);
        this.router.navigate(['TeacherApp']);
      })
      .catch(err => {
        if (err.error.errorMessage) {
          this.error = err.error.errorMessage;
        } else if (err.error.password.msg) {
          this.error = err.error.password.msg;
        } else {
          this.error = err;
        }
        console.log(this.error);
      });
  }

  ngOnInit(): void {

  }

}
