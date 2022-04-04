import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: ` <h2>{{ title }}</h2>
    <h3>La base es: <b>2</b></h3>
    <button (click)="numero = numero / base">/2</button>
    <button (click)="restar(base)">-2</button>
    <span>{{ numero }}</span>
    <button (click)="sumar(base)">2</button>
    <button (click)="numero = numero * base">*2</button>`,
})
export class ContadorComponent {
  title: string = 'Contador App';
  numero: number = 0;
  base: number = 2;

  sumar(base: number) {
    this.numero += base;
  }
  restar(base: number) {
    this.numero -= base;
  }
}
