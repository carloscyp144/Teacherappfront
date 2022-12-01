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

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    document.querySelectorAll(".close-collapse").forEach(elem => elem.addEventListener('click', () => {
      let classes = this.navbarCollapse.nativeElement.classList;
      let display = window.getComputedStyle(this.buttonCollapse.nativeElement, null).getPropertyValue('display');
      if (classes.contains('show') && display !== 'none') {
        this.buttonCollapse.nativeElement.click();
      }
    }))
  }

  cerrarSesion() {
    this.localStorageService.deleteData();
    this.router.navigate(['/TeacherApp'])
  }

}
