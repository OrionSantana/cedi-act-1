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
  valid = new FormControl();
  email = new FormControl('');
  Email = new FormControl('');
  Nombre = new FormControl('');
  Enviar(){
    if (this.valid.value == 1){
      this.Nombre.setValue(this.nombre.value);
      this.Email.setValue(this.email.value);
    }
  }

}
