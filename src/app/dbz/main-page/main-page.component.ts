import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent /* implements OnInit */ {
  /* constructor() { }

  ngOnInit(): void {
  } */
  /* agregar(event: any) {
    event.preventDefault();
  } */

  nuevo: Personaje = {
    nombre: '',
    nivelPoder: 0,
  };

  constructor() {}
}
