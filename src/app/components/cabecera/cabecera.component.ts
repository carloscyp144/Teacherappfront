import { ReturnStatement } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;
  @ViewChild('buttonCollapse') buttonCollapse!: ElementRef;
  constructor() {
  }

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

}
