import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent /* implements OnInit  */ {
  //El constructor se ejecuta antes del onInit
  /* constructor() {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  } */

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
