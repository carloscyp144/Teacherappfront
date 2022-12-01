import { ReturnStatement } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;
  @ViewChild('buttonCollapse') buttonCollapse!: ElementRef;

  token: string | null = null;
  rolId: string | null = null;
  email: string | null = null;

  variable!: string;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getLocalStorage();
  }

  ngAfterViewInit(): void {
    document.querySelectorAll(".close-collapse").forEach(elem => elem.addEventListener('click', () => {
      let classes = this.navbarCollapse.nativeElement.classList;
      let display = window.getComputedStyle(this.buttonCollapse.nativeElement, null).getPropertyValue('display');
      if (classes.contains('show') && display !== 'none') {
        this.buttonCollapse.nativeElement.click();
      }
    }));
  }

  cerrarSesion() {
    this.localStorageService.deleteData();
    this.token = null;
    this.rolId = null;
    this.email = null;
    window.location.reload();
    window.location.href = '/TeacherApp'
  }

  getLocalStorage() {
    let localStorage = this.localStorageService.getData();
    if (localStorage.token) {
      this.token = localStorage.token;
      this.rolId = localStorage.rolId;
      this.email = localStorage.email;
    }
  }

}
