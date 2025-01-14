import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  nombre = new FormControl('');
  email = new FormControl('');
  cambiarNombre(){
    this.nombre.setValue('Ornitorrinco');
    this.email.setValue('Ornitorrinco@gmail.com');
  }

}
