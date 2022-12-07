import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-admin-perfil',
  templateUrl: './admin-perfil.component.html',
  styleUrls: ['./admin-perfil.component.css']
})
export class AdminPerfilComponent implements OnInit {

  user: any;
  formAdmin: FormGroup;
  changePassword: boolean = false;
  errorAvatar: boolean = false;
  errorPassword: boolean = false;
  image: any;

  constructor(
    private usuarioService: UsuarioService
  ) {
    this.formAdmin = new FormGroup({
      email: new FormControl({value: '', disabled: true}),
      username: new FormControl({value: '', disabled: true}),
      name: new FormControl({value: '', disabled: true}),
      avatar: new FormControl(''),
      checkPassword: new FormControl(false),
      password: new FormControl({value: '', disabled: true})
    });
  }

  ngOnInit(): void {
    this.getInfoUser();
  }

  async getInfoUser() {
    let response = await this.usuarioService.getInfoUser();
    this.user = response.admin;
    this.formAdmin.get('email')?.setValue(this.user.email);
    this.formAdmin.get('username')?.setValue(this.user.userName);
    this.formAdmin.get('name')?.setValue(this.user.nombreCompleto);
    this.formAdmin.get('avatar')?.setValue(this.user.imagen);
  }

  async onSubmit(formData: any) {
    this.errorAvatar = false;
    this.errorPassword = false;
    if(formData.avatar) {
      if(!formData.avatar.match(/\.(jpg|jpeg|png)$/)) {
        this.errorAvatar = true;
      }
    }
    if(formData.checkPassword) {
      if(formData.password.length < 6) {
        this.errorPassword = true;
      }
    }
    if(!this.errorAvatar && !this.errorPassword) {
      if(formData.checkPassword) {
        await this.usuarioService.changePasswordUser(formData.password);
      }
      if(formData.avatar) {
        let fd = new FormData();
        if(this.image) {
          fd.append('imagen', this.image, this.image.name);
          let response = await this.usuarioService.changeImageUser(fd);
          console.log(response);
        }
      }
    }
  }

  changeCheck() {
    this.changePassword = !this.changePassword;
    if(this.changePassword) {
      this.formAdmin.get('password')?.enable();
    } else {
      this.formAdmin.get('password')?.disable();
    }
  }

  fileChoosen(event: any) {
    
    if(event.target.value) {
      this.image = <File>event.target.files[0];
    }
  }

}
