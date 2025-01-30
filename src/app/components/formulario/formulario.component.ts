import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  private _snackBar = inject(MatSnackBar);

  saludar() {
    this._snackBar.open("Hola", "Cerrar", {
      duration: 2000,
    });
  }

}
